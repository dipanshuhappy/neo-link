"use client";
import { Button } from "@/components/ui/button";
import { NULL_ADDRESS } from "@/lib/constants";

import Send from "@/components/Send";
import {
  neoLinkAddress,
  useWriteNeoLinkMakeCustomDeposit,
  useWriteNeoLinkWithdrawDeposit,
} from "@/lib/smart-contract";
import {
  generateKeyFromString,
  getRandomString,
  signWithdrawalMessage,
} from "@/lib/utils";
import { useAccount, useChainId } from "wagmi";

export default function SendPage() {
  const { writeContractAsync } = useWriteNeoLinkMakeCustomDeposit();
  const { writeContractAsync: claim } = useWriteNeoLinkWithdrawDeposit();
  const chainId = useChainId();
  const { address } = useAccount();

  const claimDeposit = async () => {
    if (!address) {
      alert("Please connect your wallet");
      return;
    }
    const vaultAddress = neoLinkAddress[chainId as keyof typeof neoLinkAddress];
    if (!vaultAddress) {
      alert("Vault address not found");
      return;
    }

    const { depositIdx, recipient, signature } = await signWithdrawalMessage(
      "1",
      chainId.toString(),
      vaultAddress,
      0,
      address,
      generateKeyFromString("psxY_zyKPQRSWS0R").privateKey
    );

    console.log({ depositIdx, recipient, signature });

    await claim({
      args: [BigInt(depositIdx), recipient, signature],
    });
  };
  const makeDeposit = async () => {
    const seed = await getRandomString(16);
    if (!address) {
      alert("Please connect your wallet");
      return;
    }
    console.log("seed", { seed });
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
        false,
        NULL_ADDRESS,
      ],
      value: BigInt(10000000000000),
    });
  };
  return (
    <div>
      <Send />
    </div>
  );
}
