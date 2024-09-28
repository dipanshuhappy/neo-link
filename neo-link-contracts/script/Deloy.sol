// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "forge-std/Script.sol";
import "../src/NeoLink.sol";

contract DeployScript is Script {
    function run() external {
        // Load environment variables
        string memory rpcUrl = vm.envString("RPC_URL");
        string memory privateKey = vm.envString("PRIVATE_KEY");

        // Set up broadcast
        vm.startBroadcast();
        NeoLink deployedContract = new NeoLink();
        vm.stopBroadcast();
    }
}
