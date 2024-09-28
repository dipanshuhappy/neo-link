import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { keccak256, toBytes } from "viem";
import { privateKeyToAccount } from "viem/accounts";

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
  const charset =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charsetLength = charset.length;
  const maxByteValue = 256; // Each byte has 256 possible values
  const maxUnbiasedByte = maxByteValue - (maxByteValue % charsetLength);

  let randomString = "";

  const generateKeyRandomBytes = async (
    length: number
  ): Promise<Uint8Array> => {
    if (crypto.subtle) {
      try {
        // Use generateKey to generate a symmetric key of sufficient length
        const key = await crypto.subtle.generateKey(
          {
            name: "AES-GCM",
            length: 256, // length * 8, // Convert byte length to bit length
            // TODO: non 16/32 length passwords?
          },
          true,
          ["encrypt", "decrypt"]
        );
        // Export the key to raw bytes
        const keyBuffer = await crypto.subtle.exportKey("raw", key);
        return new Uint8Array(keyBuffer);
      } catch (error) {
        console.warn(
          "Failed to use generateKey. Falling back to getRandomValues.",
          error
        );
      }
    }
    return getRandomValuesRandomBytes(length);
  };

  const getRandomValuesRandomBytes = async (
    length: number
  ): Promise<Uint8Array> => {
    if (crypto.getRandomValues) {
      // Browser
      const array = new Uint8Array(length);
      crypto.getRandomValues(array);
      return array;
    } else {
      // Node
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const crypto = await import("node:crypto");
      return crypto.randomBytes(length);
    }
  };

  while (randomString.length < n) {
    const randomBytes = await generateKeyRandomBytes(n - randomString.length);
    for (const byte of Array.from(randomBytes)) {
      if (byte < maxUnbiasedByte) {
        const randomIndex = byte % charsetLength;
        randomString += charset.charAt(randomIndex);
      }
    }
  }

  return randomString.substring(0, n); // Return only the first 'n' characters
}

export function generateKeyFromString(seed: string) {
  const privateKey = keccak256(toBytes(seed));
  const wallet = privateKeyToAccount(privateKey);
  return {
    address: wallet.address,
    privateKey: privateKey,
  };
}
