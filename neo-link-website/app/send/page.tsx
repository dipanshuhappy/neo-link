"use client";
import { Button } from "@/components/ui/button";
import { NULL_ADDRESS } from "@/lib/constants";
import { useWriteNeoLinkMakeCustomDeposit } from "@/lib/smart-contract";
import { generateKeyFromString, getRandomString } from "@/lib/utils";
import { useAccount } from "wagmi";

export default function SendPage() {
  const { writeContractAsync } = useWriteNeoLinkMakeCustomDeposit();
  const { address } = useAccount();
  const makeDesposit = async () => {
    const seed = await getRandomString(16);
    if (!address) {
      alert("Please connect your wallet");
      return;
    }
    // Call the smart contract to make
    await writeContractAsync({
      args: [
        NULL_ADDRESS,
        0,
        BigInt(10000000000000),
        BigInt(0),
        generateKeyFromString(seed).address,
        address,
        false,
        NULL_ADDRESS,
        0,
        0,
      ],
    });
  };
  return (
    <div>
      <Button>JKJLJLK</Button>
    </div>
  );
}
