import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { encodePacked, hexToBytes, keccak256, toBytes } from "viem";
import { privateKeyToAccount, signMessage } from "viem/accounts";

import { nanoid } from "nanoid";
import {
  ANYONE_WITHDRAWAL_MODE,
  NEOLINK_SALT,
  RECIPIENT_WITHDRAWAL_MODE,
} from "./constants";
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
