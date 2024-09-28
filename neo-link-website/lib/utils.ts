import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { keccak256, toBytes } from "viem";
import { privateKeyToAccount } from "viem/accounts";

import { nanoid } from "nanoid";
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
