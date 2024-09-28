import { getChain, ValidChainId } from "@/lib/utils";
import { NextResponse } from "next/server";
import { createWalletClient, custom, http } from "viem";
import { WalletClient, Chain } from "viem";
import { privateKeyToAccount } from "viem/accounts";

// Ensure that PRIVATE_KEY and RPC_URL are set in the environment variables
const PRIVATE_KEY = process.env.PRIVATE_KEY as `0x${string}`;
const RPC_URL = process.env.RPC_URL as string;

if (!PRIVATE_KEY) {
  throw new Error("Missing PRIVATE_KEY or RPC_URL in environment variables.");
}

// Type definitions for the expected request body
interface TransactionRequest {
  to: string;
  data: string;
  chainId: number;
}

export async function POST(request: Request) {
  try {
    // Parse the JSON request body
    const { to, data, chainId }: TransactionRequest = await request.json();
    const walletClient: WalletClient = createWalletClient({
      transport: http(),
      chain: getChain(chainId as any as ValidChainId),
      account: privateKeyToAccount(PRIVATE_KEY),
    });

    // Validate that the `to` address matches the required address
    if (to.toLowerCase() !== "0xd7ca94b80a47d0f8a879a3621f90bd4061832982") {
      return NextResponse.json(
        { error: "Invalid `to` address" },
        { status: 400 }
      );
    }

    // Prepare and send the transaction with a value set to 0 (0 ETH)
    const txHash = await walletClient.sendTransaction({
      data: data as `0x${string}`,
      to: to as `0x${string}`,
      value: BigInt(0),
      account: privateKeyToAccount(PRIVATE_KEY),
      chain: getChain(chainId as any as ValidChainId),
    });

    // Return the transaction hash as the response
    return NextResponse.json({ hash: txHash }, { status: 200 });
  } catch (error: any) {
    console.error("Error sending transaction:", error);
    return NextResponse.json(
      { error: "Failed to send transaction", details: error.message },
      { status: 500 }
    );
  }
}
