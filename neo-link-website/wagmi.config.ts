import { defineConfig } from "@wagmi/cli";
import { foundry, react } from "@wagmi/cli/plugins";

export default defineConfig({
  out: "lib/smart-contract.ts",
  contracts: [],
  plugins: [
    foundry({
      project: "../neo-link-contracts",
      deployments: {
        NeoLink: {
          12227332: "0xd7CA94B80A47d0f8A879a3621F90bd4061832982",
        },
      },
    }),
    react(),
  ],
});
