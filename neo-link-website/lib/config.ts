import { http, createConfig } from "wagmi";
import { Chain } from "wagmi/chains";

export const neoXTestnetT4: Chain = {
  id: 12227332, // Chain ID for Neo X Testnet T4
  name: "Neo X Testnet T4",

  nativeCurrency: {
    name: "GAS",
    symbol: "GAS", // Symbol for the native currency
    decimals: 18, // Decimals for GAS
  },
  rpcUrls: {
    default: {
      http: ["https://testnet.rpc.banelabs.org"],
    },
    public: {
      http: ["https://testnet.rpc.banelabs.org"],
    },
  },
  blockExplorers: {
    default: {
      name: "NeoScan",
      url: "https://xt4scan.ngd.network",
    },
  },
  testnet: true, // Marking this as a testnet
};

export const config = createConfig({
  chains: [neoXTestnetT4],
  transports: {
    [neoXTestnetT4.id]: http(),
  },
});
