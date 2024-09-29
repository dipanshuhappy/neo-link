import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import {
  encodePacked,
  hexToBytes,
  keccak256,
  parseEventLogs,
  toBytes,
} from "viem";
import { privateKeyToAccount, signMessage } from "viem/accounts";

import { nanoid } from "nanoid";
import {
  ANYONE_WITHDRAWAL_MODE,
  NEOLINK_SALT,
  RECIPIENT_WITHDRAWAL_MODE,
} from "./constants";
import { config, neoXTestnetT4 } from "./config";
import { waitForTransactionReceipt } from "@wagmi/core";
import { neoLinkAbi } from "./smart-contract";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function shortenAddress(address: string, length: number = 4): string {
  if (address.length <= length * 2 + 2) {
    return address; // No need to shorten if the address is already short
  }

  const start = address.substring(0, length + 2); // Include '0x'
  const end = address.substring(address.length - length);

  return `${start}...${end}`;
}

export async function getRandomString(n: number = 16): Promise<string> {
  return nanoid(n);
}

export function generateKeyFromString(seed: string) {
  const privateKey = keccak256(toBytes(seed));
  const wallet = privateKeyToAccount(privateKey);
  return {
    address: wallet.address,
    privateKey: privateKey,
  };
}

export async function signWithdrawalMessage(
  vaultVersion: string,
  chainId: string,
  vaultAddress: `0x${string}`,
  depositIdx: number,
  recipient: `0x${string}`,
  privateKey: `0x${string}`,
  onlyRecipientMode?: boolean
) {
  const extraData = onlyRecipientMode
    ? RECIPIENT_WITHDRAWAL_MODE
    : ANYONE_WITHDRAWAL_MODE;
  const stringHash = keccak256(
    encodePacked(
      ["bytes32", "uint256", "address", "uint256", "address", "bytes32"],
      [
        NEOLINK_SALT,
        BigInt(chainId),
        vaultAddress,
        BigInt(depositIdx),
        recipient,
        extraData,
      ]
    )
  );
  const stringHashBinary = hexToBytes(stringHash); // Use `toBytes` if it’s not in hex format

  // Create an account instance using the private key
  const account = privateKeyToAccount(privateKey);

  // Sign the binary hash
  const signature = await account.signMessage({
    message: {
      raw: stringHashBinary,
    },
  });
  return { depositIdx, recipient, signature };
}

export type ValidChainId = 12227332;
export const getChain = (chainId: ValidChainId) => {
  switch (chainId) {
    case 12227332:
      return neoXTestnetT4;
    default:
      return neoXTestnetT4;
  }
};
export const getLinksForRaffles = async ({
  txHash,
  chainId,
  url,
  seed,
  amount,
}: {
  txHash: string;
  chainId: string;
  url: string;
  seed: string;
  amount: number;
}) => {
  const receipt = await waitForTransactionReceipt(config, {
    hash: txHash as `0x${string}`,
  });
  const logs = parseEventLogs({
    abi: neoLinkAbi,
    logs: receipt.logs,
    eventName: "DepositEvent",
  });
  const finalUrls = [];
  if (logs.length !== amount) {
    throw new Error("Invalid amount of logs");
  }
  for (const log of logs) {
    const newUrl = new URL(url);
    newUrl.searchParams.set("i", log.args._index.toString());
    newUrl.searchParams.set("s", seed);
    newUrl.searchParams.set("c", chainId);
    finalUrls.push(newUrl.toString());
  }
  return finalUrls;
};
export const getLinkForNativeToken = async ({
  address,
  txHash,
  url,
  seed,
  chainId,
}: {
  address: string;
  txHash: string;
  url: string;
  seed: string;
  chainId: string;
}) => {
  const receipt = await waitForTransactionReceipt(config, {
    hash: txHash as `0x${string}`,
  });
  console.log({ seed });

  const logs = parseEventLogs({
    abi: neoLinkAbi,
    logs: receipt.logs,
    eventName: "DepositEvent",
  });
  const newUrl = new URL(url);
  newUrl.searchParams.set("i", logs[0].args._index.toString());
  newUrl.searchParams.set("s", seed);
  newUrl.searchParams.set("c", chainId);
  return newUrl.toString();
};

export function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // Create a copy to avoid mutating the original array
  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }
  return shuffledArray;
}
