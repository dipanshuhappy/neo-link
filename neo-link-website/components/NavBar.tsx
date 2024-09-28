"use client";
import { cn, shortenAddress } from "@/lib/utils";
import { Else, If, Then } from "react-if";
import { Connector, useAccount, useConnect, useDisconnect } from "wagmi";
import { Button } from "./ui/button";

import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Wallet } from "lucide-react";

export default function WalletConnect() {
  const { connect, connectors, isPending } = useConnect();
  const { isConnected, address } = useAccount();
  const [isOpen, setIsOpen] = useState(false);

  const handleConnect = (connector: Connector) => {
    connect({ connector });
    setIsOpen(false);
  };

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="w-[200px]">
          <Wallet className="mr-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-[200px]">
        {connectors.map((connector) => (
          <DropdownMenuItem
            key={connector.id}
            onClick={() => handleConnect(connector)}
          >
            {connector.name}
            {isPending && " (connecting)"}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ConnectWalletButton({ className }: { className?: string }) {
  const account = useAccount();
  const { disconnect } = useDisconnect();

  return (
    <If condition={account && account.isConnected}>
      <Then>
        <div className={cn("inset-x-0 w-fit mx-auto")}>
          <div className="flex items-center gap-4">
            <div className="bg-muted rounded-md px-3 py-2 text-muted-foreground">
              {shortenAddress(account.address ?? "")}
            </div>
            <Button
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              onClick={() => disconnect()}
            >
              Disconnect
            </Button>
          </div>
        </div>
      </Then>
      <Else>
        <WalletConnect />
      </Else>
    </If>
  );
}
