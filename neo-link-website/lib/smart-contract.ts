import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen'

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Address
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const addressAbi = [
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// DeployScript
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const deployScriptAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'IS_SCRIPT',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'run',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ECDSA
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ecdsaAbi = [
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ERC1967Utils
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const erc1967UtilsAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
      {
        name: 'newAdmin',
        internalType: 'address',
        type: 'address',
        indexed: false,
      },
    ],
    name: 'AdminChanged',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'beacon',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'BeaconUpgraded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'error',
    inputs: [{ name: 'admin', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidAdmin',
  },
  {
    type: 'error',
    inputs: [{ name: 'beacon', internalType: 'address', type: 'address' }],
    name: 'ERC1967InvalidBeacon',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IBeacon
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iBeaconAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'implementation',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IEIP3009
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ieip3009Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'authorizer', internalType: 'address', type: 'address' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'cancelAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
      { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'receiveWithAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'validAfter', internalType: 'uint256', type: 'uint256' },
      { name: 'validBefore', internalType: 'uint256', type: 'uint256' },
      { name: 'nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'transferWithAuthorization',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'accounts', internalType: 'address[]', type: 'address[]' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
    ],
    name: 'balanceOfBatch',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'account', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'account',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'ids',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
      {
        name: 'values',
        internalType: 'uint256[]',
        type: 'uint256[]',
        indexed: false,
      },
    ],
    name: 'TransferBatch',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: false },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'TransferSingle',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'value', internalType: 'string', type: 'string', indexed: false },
      { name: 'id', internalType: 'uint256', type: 'uint256', indexed: true },
    ],
    name: 'URI',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1155Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1155ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'id', internalType: 'uint256', type: 'uint256' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1271
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1271Abi = [
  {
    type: 'function',
    inputs: [
      { name: 'hash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'isValidSignature',
    outputs: [{ name: 'magicValue', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC1822Proxiable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc1822ProxiableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC20Permit
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc20PermitAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'nonces',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'deadline', internalType: 'uint256', type: 'uint256' },
      { name: 'v', internalType: 'uint8', type: 'uint8' },
      { name: 'r', internalType: 'bytes32', type: 'bytes32' },
      { name: 's', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'permit',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IERC721Receiver
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const ierc721ReceiverAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IL2ECO
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const il2EcoAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'spender', internalType: 'address', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'linearInflationMultiplier',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transfer',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'value', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'spender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'value',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'Transfer',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// IMulticall3
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const iMulticall3Abi = [
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'returnData', internalType: 'bytes[]', type: 'bytes[]' },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call3Value[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'allowFailure', internalType: 'bool', type: 'bool' },
          { name: 'value', internalType: 'uint256', type: 'uint256' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'aggregate3Value',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'blockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBasefee',
    outputs: [{ name: 'basefee', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'blockNumber', internalType: 'uint256', type: 'uint256' }],
    name: 'getBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getBlockNumber',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getChainId',
    outputs: [{ name: 'chainid', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockCoinbase',
    outputs: [{ name: 'coinbase', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockDifficulty',
    outputs: [{ name: 'difficulty', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockGasLimit',
    outputs: [{ name: 'gaslimit', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getCurrentBlockTimestamp',
    outputs: [{ name: 'timestamp', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'addr', internalType: 'address', type: 'address' }],
    name: 'getEthBalance',
    outputs: [{ name: 'balance', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getLastBlockHash',
    outputs: [{ name: 'blockHash', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryAggregate',
    outputs: [
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'requireSuccess', internalType: 'bool', type: 'bool' },
      {
        name: 'calls',
        internalType: 'struct IMulticall3.Call[]',
        type: 'tuple[]',
        components: [
          { name: 'target', internalType: 'address', type: 'address' },
          { name: 'callData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    name: 'tryBlockAndAggregate',
    outputs: [
      { name: 'blockNumber', internalType: 'uint256', type: 'uint256' },
      { name: 'blockHash', internalType: 'bytes32', type: 'bytes32' },
      {
        name: 'returnData',
        internalType: 'struct IMulticall3.Result[]',
        type: 'tuple[]',
        components: [
          { name: 'success', internalType: 'bool', type: 'bool' },
          { name: 'returnData', internalType: 'bytes', type: 'bytes' },
        ],
      },
    ],
    stateMutability: 'payable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Initializable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const initializableAbi = [
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Math
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const mathAbi = [
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NeoLink
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const neoLinkAbi = [
  { type: 'constructor', inputs: [], stateMutability: 'nonpayable' },
  {
    type: 'function',
    inputs: [],
    name: 'ANYONE_WITHDRAWAL_MODE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'DOMAIN_SEPARATOR',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'EIP712DOMAIN_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'GASLESS_RECLAIM_TYPEHASH',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'MFA_AUTHORIZER',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'NEOLINK_SALT',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'RECIPIENT_WITHDRAWAL_MODE',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'deposits',
    outputs: [
      { name: 'pubKey20', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'tokenAddress', internalType: 'address', type: 'address' },
      { name: 'contractType', internalType: 'uint8', type: 'uint8' },
      { name: 'claimed', internalType: 'bool', type: 'bool' },
      { name: 'requiresMFA', internalType: 'bool', type: 'bool' },
      { name: 'timestamp', internalType: 'uint40', type: 'uint40' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'senderAddress', internalType: 'address', type: 'address' },
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'reclaimableAfter', internalType: 'uint40', type: 'uint40' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'ecoAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllDeposits',
    outputs: [
      {
        name: '',
        internalType: 'struct NeoLink.Deposit[]',
        type: 'tuple[]',
        components: [
          { name: 'pubKey20', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAddress', internalType: 'address', type: 'address' },
          { name: 'contractType', internalType: 'uint8', type: 'uint8' },
          { name: 'claimed', internalType: 'bool', type: 'bool' },
          { name: 'requiresMFA', internalType: 'bool', type: 'bool' },
          { name: 'timestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'senderAddress', internalType: 'address', type: 'address' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'reclaimableAfter', internalType: 'uint40', type: 'uint40' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_address', internalType: 'address', type: 'address' }],
    name: 'getAllDepositsForAddress',
    outputs: [
      {
        name: '',
        internalType: 'struct NeoLink.Deposit[]',
        type: 'tuple[]',
        components: [
          { name: 'pubKey20', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAddress', internalType: 'address', type: 'address' },
          { name: 'contractType', internalType: 'uint8', type: 'uint8' },
          { name: 'claimed', internalType: 'bool', type: 'bool' },
          { name: 'requiresMFA', internalType: 'bool', type: 'bool' },
          { name: 'timestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'senderAddress', internalType: 'address', type: 'address' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'reclaimableAfter', internalType: 'uint40', type: 'uint40' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'getDeposit',
    outputs: [
      {
        name: '',
        internalType: 'struct NeoLink.Deposit',
        type: 'tuple',
        components: [
          { name: 'pubKey20', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'tokenAddress', internalType: 'address', type: 'address' },
          { name: 'contractType', internalType: 'uint8', type: 'uint8' },
          { name: 'claimed', internalType: 'bool', type: 'bool' },
          { name: 'requiresMFA', internalType: 'bool', type: 'bool' },
          { name: 'timestamp', internalType: 'uint40', type: 'uint40' },
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'senderAddress', internalType: 'address', type: 'address' },
          { name: 'recipient', internalType: 'address', type: 'address' },
          { name: 'reclaimableAfter', internalType: 'uint40', type: 'uint40' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getDepositCount',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'messageHash', internalType: 'bytes32', type: 'bytes32' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'getSigner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
      { name: '_onBehalfOf', internalType: 'address', type: 'address' },
      { name: '_withMFA', internalType: 'bool', type: 'bool' },
      { name: '_recipient', internalType: 'address', type: 'address' },
      { name: '_reclaimableAfter', internalType: 'uint40', type: 'uint40' },
      { name: '_isGasless3009', internalType: 'bool', type: 'bool' },
      { name: '_args3009', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'makeCustomDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
    ],
    name: 'makeDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
      { name: '_nonce', internalType: 'bytes32', type: 'bytes32' },
      { name: '_validAfter', internalType: 'uint256', type: 'uint256' },
      { name: '_validBefore', internalType: 'uint256', type: 'uint256' },
      { name: '_v', internalType: 'uint8', type: 'uint8' },
      { name: '_r', internalType: 'bytes32', type: 'bytes32' },
      { name: '_s', internalType: 'bytes32', type: 'bytes32' },
    ],
    name: 'makeDepositWithAuthorization',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
    ],
    name: 'makeMFADeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
      { name: '_onBehalfOf', internalType: 'address', type: 'address' },
    ],
    name: 'makeSelflessDeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
      { name: '_onBehalfOf', internalType: 'address', type: 'address' },
    ],
    name: 'makeSelflessMFADeposit',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_ids', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_values', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_value', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC1155Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_operator', internalType: 'address', type: 'address' },
      { name: '_from', internalType: 'address', type: 'address' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'onERC721Received',
    outputs: [{ name: '', internalType: 'bytes4', type: 'bytes4' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_index', internalType: 'uint256', type: 'uint256' },
      { name: '_recipientAddress', internalType: 'address', type: 'address' },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'withdrawDeposit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_index', internalType: 'uint256', type: 'uint256' },
      { name: '_recipientAddress', internalType: 'address', type: 'address' },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'withdrawDepositAsRecipient',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_index', internalType: 'uint256', type: 'uint256' }],
    name: 'withdrawDepositSender',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'reclaim',
        internalType: 'struct NeoLink.GaslessReclaim',
        type: 'tuple',
        components: [
          { name: 'depositIndex', internalType: 'uint256', type: 'uint256' },
        ],
      },
      { name: 'signer', internalType: 'address', type: 'address' },
      { name: 'signature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'withdrawDepositSenderGasless',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_index', internalType: 'uint256', type: 'uint256' },
      { name: '_recipientAddress', internalType: 'address', type: 'address' },
      { name: '_signature', internalType: 'bytes', type: 'bytes' },
      { name: '_MFASignature', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'withdrawMFADeposit',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_contractType',
        internalType: 'uint8',
        type: 'uint8',
        indexed: true,
      },
      {
        name: '_amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_senderAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'DepositEvent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'message',
        internalType: 'string',
        type: 'string',
        indexed: false,
      },
    ],
    name: 'MessageEvent',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_index',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: '_contractType',
        internalType: 'uint8',
        type: 'uint8',
        indexed: true,
      },
      {
        name: '_amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_recipientAddress',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'WithdrawEvent',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 *
 */
export const neoLinkAddress = {
  12227332: '0xd7CA94B80A47d0f8A879a3621F90bd4061832982',
} as const

/**
 *
 */
export const neoLinkConfig = {
  address: neoLinkAddress,
  abi: neoLinkAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// NeoLinkRaffle
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const neoLinkRaffleAbi = [
  {
    type: 'function',
    inputs: [
      { name: '_peanutAddress', internalType: 'address', type: 'address' },
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amount', internalType: 'uint256', type: 'uint256' },
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_pubKeys20', internalType: 'address[]', type: 'address[]' },
    ],
    name: 'batchMakeDeposit',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_neoLinkAddress', internalType: 'address', type: 'address' },
      { name: '_tokenAddress', internalType: 'address', type: 'address' },
      { name: '_contractType', internalType: 'uint8', type: 'uint8' },
      { name: '_amounts', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_pubKey20', internalType: 'address', type: 'address' },
    ],
    name: 'batchMakeDepositRaffle',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'neolink',
    outputs: [{ name: '', internalType: 'contract NeoLink', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'seed', internalType: 'uint256', type: 'uint256' }],
    name: 'random',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'AddressInsufficientBalance',
  },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

/**
 *
 */
export const neoLinkRaffleAddress = {
  12227332: '0x35b1EeE0dD4F3a9c29972fA0EDE87CBA6E97cDed',
} as const

/**
 *
 */
export const neoLinkRaffleConfig = {
  address: neoLinkRaffleAddress,
  abi: neoLinkRaffleAbi,
} as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Reclaim
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reclaimAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'witnesses',
        internalType: 'struct Reclaim.Witness[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'host', internalType: 'string', type: 'string' },
        ],
      },
      {
        name: 'requisiteWitnessesForClaimCreate',
        internalType: 'uint8',
        type: 'uint8',
      },
    ],
    name: 'addNewEpoch',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'id', internalType: 'uint256', type: 'uint256' }],
    name: 'createDapp',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'string', type: 'string' },
      { name: 'merkleTreeDepth', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createGroup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'currentEpoch',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'epochDurationS',
    outputs: [{ name: '', internalType: 'uint32', type: 'uint32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'epochs',
    outputs: [
      { name: 'id', internalType: 'uint32', type: 'uint32' },
      { name: 'timestampStart', internalType: 'uint32', type: 'uint32' },
      { name: 'timestampEnd', internalType: 'uint32', type: 'uint32' },
      {
        name: 'minimumWitnessesForClaimCreation',
        internalType: 'uint8',
        type: 'uint8',
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'data', internalType: 'string', type: 'string' },
      { name: 'target', internalType: 'string', type: 'string' },
    ],
    name: 'extractFieldFromContext',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [{ name: 'epoch', internalType: 'uint32', type: 'uint32' }],
    name: 'fetchEpoch',
    outputs: [
      {
        name: '',
        internalType: 'struct Reclaim.Epoch',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint32', type: 'uint32' },
          { name: 'timestampStart', internalType: 'uint32', type: 'uint32' },
          { name: 'timestampEnd', internalType: 'uint32', type: 'uint32' },
          {
            name: 'witnesses',
            internalType: 'struct Reclaim.Witness[]',
            type: 'tuple[]',
            components: [
              { name: 'addr', internalType: 'address', type: 'address' },
              { name: 'host', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'minimumWitnessesForClaimCreation',
            internalType: 'uint8',
            type: 'uint8',
          },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'epoch', internalType: 'uint32', type: 'uint32' },
      { name: 'identifier', internalType: 'bytes32', type: 'bytes32' },
      { name: 'timestampS', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'fetchWitnessesForClaim',
    outputs: [
      {
        name: '',
        internalType: 'struct Reclaim.Witness[]',
        type: 'tuple[]',
        components: [
          { name: 'addr', internalType: 'address', type: 'address' },
          { name: 'host', internalType: 'string', type: 'string' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'string', type: 'string' },
      { name: 'params', internalType: 'string', type: 'string' },
    ],
    name: 'getMerkelizedUserParams',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'proof',
        internalType: 'struct Reclaim.Proof',
        type: 'tuple',
        components: [
          {
            name: 'claimInfo',
            internalType: 'struct Claims.ClaimInfo',
            type: 'tuple',
            components: [
              { name: 'provider', internalType: 'string', type: 'string' },
              { name: 'parameters', internalType: 'string', type: 'string' },
              { name: 'context', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'signedClaim',
            internalType: 'struct Claims.SignedClaim',
            type: 'tuple',
            components: [
              {
                name: 'claim',
                internalType: 'struct Claims.CompleteClaimData',
                type: 'tuple',
                components: [
                  {
                    name: 'identifier',
                    internalType: 'bytes32',
                    type: 'bytes32',
                  },
                  { name: 'owner', internalType: 'address', type: 'address' },
                  {
                    name: 'timestampS',
                    internalType: 'uint32',
                    type: 'uint32',
                  },
                  { name: 'epoch', internalType: 'uint32', type: 'uint32' },
                ],
              },
              { name: 'signatures', internalType: 'bytes[]', type: 'bytes[]' },
            ],
          },
        ],
      },
    ],
    name: 'getProviderFromProof',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'pure',
  },
  {
    type: 'function',
    inputs: [
      { name: '_semaphoreAddress', internalType: 'address', type: 'address' },
    ],
    name: 'initialize',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'proof',
        internalType: 'struct Reclaim.Proof',
        type: 'tuple',
        components: [
          {
            name: 'claimInfo',
            internalType: 'struct Claims.ClaimInfo',
            type: 'tuple',
            components: [
              { name: 'provider', internalType: 'string', type: 'string' },
              { name: 'parameters', internalType: 'string', type: 'string' },
              { name: 'context', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'signedClaim',
            internalType: 'struct Claims.SignedClaim',
            type: 'tuple',
            components: [
              {
                name: 'claim',
                internalType: 'struct Claims.CompleteClaimData',
                type: 'tuple',
                components: [
                  {
                    name: 'identifier',
                    internalType: 'bytes32',
                    type: 'bytes32',
                  },
                  { name: 'owner', internalType: 'address', type: 'address' },
                  {
                    name: 'timestampS',
                    internalType: 'uint32',
                    type: 'uint32',
                  },
                  { name: 'epoch', internalType: 'uint32', type: 'uint32' },
                ],
              },
              { name: 'signatures', internalType: 'bytes[]', type: 'bytes[]' },
            ],
          },
        ],
      },
      { name: '_identityCommitment', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'merkelizeUser',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'semaphoreAddress',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'provider', internalType: 'string', type: 'string' },
      { name: '_merkleTreeRoot', internalType: 'uint256', type: 'uint256' },
      { name: '_signal', internalType: 'uint256', type: 'uint256' },
      { name: '_nullifierHash', internalType: 'uint256', type: 'uint256' },
      { name: '_externalNullifier', internalType: 'uint256', type: 'uint256' },
      { name: 'dappId', internalType: 'bytes32', type: 'bytes32' },
      { name: '_proof', internalType: 'uint256[8]', type: 'uint256[8]' },
    ],
    name: 'verifyMerkelIdentity',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      {
        name: 'proof',
        internalType: 'struct Reclaim.Proof',
        type: 'tuple',
        components: [
          {
            name: 'claimInfo',
            internalType: 'struct Claims.ClaimInfo',
            type: 'tuple',
            components: [
              { name: 'provider', internalType: 'string', type: 'string' },
              { name: 'parameters', internalType: 'string', type: 'string' },
              { name: 'context', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'signedClaim',
            internalType: 'struct Claims.SignedClaim',
            type: 'tuple',
            components: [
              {
                name: 'claim',
                internalType: 'struct Claims.CompleteClaimData',
                type: 'tuple',
                components: [
                  {
                    name: 'identifier',
                    internalType: 'bytes32',
                    type: 'bytes32',
                  },
                  { name: 'owner', internalType: 'address', type: 'address' },
                  {
                    name: 'timestampS',
                    internalType: 'uint32',
                    type: 'uint32',
                  },
                  { name: 'epoch', internalType: 'uint32', type: 'uint32' },
                ],
              },
              { name: 'signatures', internalType: 'bytes[]', type: 'bytes[]' },
            ],
          },
        ],
      },
    ],
    name: 'verifyProof',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'dappId',
        internalType: 'bytes32',
        type: 'bytes32',
        indexed: true,
      },
    ],
    name: 'DappCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'epoch',
        internalType: 'struct Reclaim.Epoch',
        type: 'tuple',
        components: [
          { name: 'id', internalType: 'uint32', type: 'uint32' },
          { name: 'timestampStart', internalType: 'uint32', type: 'uint32' },
          { name: 'timestampEnd', internalType: 'uint32', type: 'uint32' },
          {
            name: 'witnesses',
            internalType: 'struct Reclaim.Witness[]',
            type: 'tuple[]',
            components: [
              { name: 'addr', internalType: 'address', type: 'address' },
              { name: 'host', internalType: 'string', type: 'string' },
            ],
          },
          {
            name: 'minimumWitnessesForClaimCreation',
            internalType: 'uint8',
            type: 'uint8',
          },
        ],
        indexed: false,
      },
    ],
    name: 'EpochAdded',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'groupId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'provider',
        internalType: 'string',
        type: 'string',
        indexed: true,
      },
    ],
    name: 'GroupCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'version',
        internalType: 'uint64',
        type: 'uint64',
        indexed: false,
      },
    ],
    name: 'Initialized',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  { type: 'error', inputs: [], name: 'ECDSAInvalidSignature' },
  {
    type: 'error',
    inputs: [{ name: 'length', internalType: 'uint256', type: 'uint256' }],
    name: 'ECDSAInvalidSignatureLength',
  },
  {
    type: 'error',
    inputs: [{ name: 's', internalType: 'bytes32', type: 'bytes32' }],
    name: 'ECDSAInvalidSignatureS',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'InvalidInitialization' },
  { type: 'error', inputs: [], name: 'NotInitializing' },
  { type: 'error', inputs: [], name: 'Reclaim__GroupAlreadyExists' },
  { type: 'error', inputs: [], name: 'Reclaim__UserAlreadyMerkelized' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// ReentrancyGuard
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const reentrancyGuardAbi = [
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SafeERC20
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const safeErc20Abi = [
  {
    type: 'error',
    inputs: [
      { name: 'spender', internalType: 'address', type: 'address' },
      { name: 'currentAllowance', internalType: 'uint256', type: 'uint256' },
      { name: 'requestedDecrease', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'SafeERC20FailedDecreaseAllowance',
  },
  {
    type: 'error',
    inputs: [{ name: 'token', internalType: 'address', type: 'address' }],
    name: 'SafeERC20FailedOperation',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SemaphoreInterface
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const semaphoreInterfaceAbi = [
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'identityCommitment', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'addMember',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'merkleTreeDepth', internalType: 'uint256', type: 'uint256' },
      { name: 'admin', internalType: 'address', type: 'address' },
    ],
    name: 'createGroup',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'identityCommitment', internalType: 'uint256', type: 'uint256' },
      { name: 'proofSiblings', internalType: 'uint256[]', type: 'uint256[]' },
      { name: 'proofPathIndices', internalType: 'uint8[]', type: 'uint8[]' },
    ],
    name: 'removeMember',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'groupId', internalType: 'uint256', type: 'uint256' },
      { name: 'merkleTreeRoot', internalType: 'uint256', type: 'uint256' },
      { name: 'signal', internalType: 'uint256', type: 'uint256' },
      { name: 'nullifierHash', internalType: 'uint256', type: 'uint256' },
      { name: 'externalNullifier', internalType: 'uint256', type: 'uint256' },
      { name: 'proof', internalType: 'uint256[8]', type: 'uint256[8]' },
    ],
    name: 'verifyProof',
    outputs: [],
    stateMutability: 'nonpayable',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Strings
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const stringsAbi = [
  {
    type: 'error',
    inputs: [
      { name: 'value', internalType: 'uint256', type: 'uint256' },
      { name: 'length', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'StringsInsufficientHexLength',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// UUPSUpgradeable
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export const uupsUpgradeableAbi = [
  {
    type: 'function',
    inputs: [],
    name: 'UPGRADE_INTERFACE_VERSION',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'proxiableUUID',
    outputs: [{ name: '', internalType: 'bytes32', type: 'bytes32' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'newImplementation', internalType: 'address', type: 'address' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'upgradeToAndCall',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'implementation',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'Upgraded',
  },
  {
    type: 'error',
    inputs: [{ name: 'target', internalType: 'address', type: 'address' }],
    name: 'AddressEmptyCode',
  },
  {
    type: 'error',
    inputs: [
      { name: 'implementation', internalType: 'address', type: 'address' },
    ],
    name: 'ERC1967InvalidImplementation',
  },
  { type: 'error', inputs: [], name: 'ERC1967NonPayable' },
  { type: 'error', inputs: [], name: 'FailedInnerCall' },
  { type: 'error', inputs: [], name: 'UUPSUnauthorizedCallContext' },
  {
    type: 'error',
    inputs: [{ name: 'slot', internalType: 'bytes32', type: 'bytes32' }],
    name: 'UUPSUnsupportedProxiableUUID',
  },
] as const

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deployScriptAbi}__
 */
export const useReadDeployScript = /*#__PURE__*/ createUseReadContract({
  abi: deployScriptAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link deployScriptAbi}__ and `functionName` set to `"IS_SCRIPT"`
 */
export const useReadDeployScriptIsScript = /*#__PURE__*/ createUseReadContract({
  abi: deployScriptAbi,
  functionName: 'IS_SCRIPT',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deployScriptAbi}__
 */
export const useWriteDeployScript = /*#__PURE__*/ createUseWriteContract({
  abi: deployScriptAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link deployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useWriteDeployScriptRun = /*#__PURE__*/ createUseWriteContract({
  abi: deployScriptAbi,
  functionName: 'run',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deployScriptAbi}__
 */
export const useSimulateDeployScript = /*#__PURE__*/ createUseSimulateContract({
  abi: deployScriptAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link deployScriptAbi}__ and `functionName` set to `"run"`
 */
export const useSimulateDeployScriptRun =
  /*#__PURE__*/ createUseSimulateContract({
    abi: deployScriptAbi,
    functionName: 'run',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__
 */
export const useWatchErc1967UtilsEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: erc1967UtilsAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"AdminChanged"`
 */
export const useWatchErc1967UtilsAdminChangedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'AdminChanged',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"BeaconUpgraded"`
 */
export const useWatchErc1967UtilsBeaconUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'BeaconUpgraded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link erc1967UtilsAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchErc1967UtilsUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: erc1967UtilsAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBeaconAbi}__
 */
export const useReadIBeacon = /*#__PURE__*/ createUseReadContract({
  abi: iBeaconAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iBeaconAbi}__ and `functionName` set to `"implementation"`
 */
export const useReadIBeaconImplementation = /*#__PURE__*/ createUseReadContract(
  { abi: iBeaconAbi, functionName: 'implementation' },
)

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieip3009Abi}__
 */
export const useWriteIeip3009 = /*#__PURE__*/ createUseWriteContract({
  abi: ieip3009Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieip3009Abi}__ and `functionName` set to `"cancelAuthorization"`
 */
export const useWriteIeip3009CancelAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieip3009Abi,
    functionName: 'cancelAuthorization',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieip3009Abi}__ and `functionName` set to `"receiveWithAuthorization"`
 */
export const useWriteIeip3009ReceiveWithAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieip3009Abi,
    functionName: 'receiveWithAuthorization',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ieip3009Abi}__ and `functionName` set to `"transferWithAuthorization"`
 */
export const useWriteIeip3009TransferWithAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: ieip3009Abi,
    functionName: 'transferWithAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieip3009Abi}__
 */
export const useSimulateIeip3009 = /*#__PURE__*/ createUseSimulateContract({
  abi: ieip3009Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieip3009Abi}__ and `functionName` set to `"cancelAuthorization"`
 */
export const useSimulateIeip3009CancelAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieip3009Abi,
    functionName: 'cancelAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieip3009Abi}__ and `functionName` set to `"receiveWithAuthorization"`
 */
export const useSimulateIeip3009ReceiveWithAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieip3009Abi,
    functionName: 'receiveWithAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ieip3009Abi}__ and `functionName` set to `"transferWithAuthorization"`
 */
export const useSimulateIeip3009TransferWithAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ieip3009Abi,
    functionName: 'transferWithAuthorization',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useReadIerc1155 = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIerc1155BalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155Abi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"balanceOfBatch"`
 */
export const useReadIerc1155BalanceOfBatch =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'balanceOfBatch',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"isApprovedForAll"`
 */
export const useReadIerc1155IsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'isApprovedForAll',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155SupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155Abi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useWriteIerc1155 = /*#__PURE__*/ createUseWriteContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useWriteIerc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useWriteIerc1155SafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useWriteIerc1155SetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useSimulateIerc1155 = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeBatchTransferFrom"`
 */
export const useSimulateIerc1155SafeBatchTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeBatchTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"safeTransferFrom"`
 */
export const useSimulateIerc1155SafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'safeTransferFrom',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155Abi}__ and `functionName` set to `"setApprovalForAll"`
 */
export const useSimulateIerc1155SetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155Abi,
    functionName: 'setApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__
 */
export const useWatchIerc1155Event = /*#__PURE__*/ createUseWatchContractEvent({
  abi: ierc1155Abi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"ApprovalForAll"`
 */
export const useWatchIerc1155ApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'ApprovalForAll',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferBatch"`
 */
export const useWatchIerc1155TransferBatchEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferBatch',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"TransferSingle"`
 */
export const useWatchIerc1155TransferSingleEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'TransferSingle',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link ierc1155Abi}__ and `eventName` set to `"URI"`
 */
export const useWatchIerc1155UriEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: ierc1155Abi,
    eventName: 'URI',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useReadIerc1155Receiver = /*#__PURE__*/ createUseReadContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"supportsInterface"`
 */
export const useReadIerc1155ReceiverSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useWriteIerc1155Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc1155ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useWriteIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useWriteIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__
 */
export const useSimulateIerc1155Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc1155ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 */
export const useSimulateIerc1155ReceiverOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc1155ReceiverAbi}__ and `functionName` set to `"onERC1155Received"`
 */
export const useSimulateIerc1155ReceiverOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc1155ReceiverAbi,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1271Abi}__
 */
export const useReadIerc1271 = /*#__PURE__*/ createUseReadContract({
  abi: ierc1271Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1271Abi}__ and `functionName` set to `"isValidSignature"`
 */
export const useReadIerc1271IsValidSignature =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1271Abi,
    functionName: 'isValidSignature',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1822ProxiableAbi}__
 */
export const useReadIerc1822Proxiable = /*#__PURE__*/ createUseReadContract({
  abi: ierc1822ProxiableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc1822ProxiableAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadIerc1822ProxiableProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc1822ProxiableAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useReadIerc20Permit = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 */
export const useReadIerc20PermitDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: ierc20PermitAbi,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"nonces"`
 */
export const useReadIerc20PermitNonces = /*#__PURE__*/ createUseReadContract({
  abi: ierc20PermitAbi,
  functionName: 'nonces',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useWriteIerc20Permit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useWriteIerc20PermitPermit = /*#__PURE__*/ createUseWriteContract({
  abi: ierc20PermitAbi,
  functionName: 'permit',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__
 */
export const useSimulateIerc20Permit = /*#__PURE__*/ createUseSimulateContract({
  abi: ierc20PermitAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc20PermitAbi}__ and `functionName` set to `"permit"`
 */
export const useSimulateIerc20PermitPermit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc20PermitAbi,
    functionName: 'permit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useWriteIerc721Receiver = /*#__PURE__*/ createUseWriteContract({
  abi: ierc721ReceiverAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useWriteIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__
 */
export const useSimulateIerc721Receiver =
  /*#__PURE__*/ createUseSimulateContract({ abi: ierc721ReceiverAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link ierc721ReceiverAbi}__ and `functionName` set to `"onERC721Received"`
 */
export const useSimulateIerc721ReceiverOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: ierc721ReceiverAbi,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link il2EcoAbi}__
 */
export const useReadIl2Eco = /*#__PURE__*/ createUseReadContract({
  abi: il2EcoAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"allowance"`
 */
export const useReadIl2EcoAllowance = /*#__PURE__*/ createUseReadContract({
  abi: il2EcoAbi,
  functionName: 'allowance',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"balanceOf"`
 */
export const useReadIl2EcoBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: il2EcoAbi,
  functionName: 'balanceOf',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"linearInflationMultiplier"`
 */
export const useReadIl2EcoLinearInflationMultiplier =
  /*#__PURE__*/ createUseReadContract({
    abi: il2EcoAbi,
    functionName: 'linearInflationMultiplier',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"totalSupply"`
 */
export const useReadIl2EcoTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: il2EcoAbi,
  functionName: 'totalSupply',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link il2EcoAbi}__
 */
export const useWriteIl2Eco = /*#__PURE__*/ createUseWriteContract({
  abi: il2EcoAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"approve"`
 */
export const useWriteIl2EcoApprove = /*#__PURE__*/ createUseWriteContract({
  abi: il2EcoAbi,
  functionName: 'approve',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"transfer"`
 */
export const useWriteIl2EcoTransfer = /*#__PURE__*/ createUseWriteContract({
  abi: il2EcoAbi,
  functionName: 'transfer',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useWriteIl2EcoTransferFrom = /*#__PURE__*/ createUseWriteContract({
  abi: il2EcoAbi,
  functionName: 'transferFrom',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link il2EcoAbi}__
 */
export const useSimulateIl2Eco = /*#__PURE__*/ createUseSimulateContract({
  abi: il2EcoAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"approve"`
 */
export const useSimulateIl2EcoApprove = /*#__PURE__*/ createUseSimulateContract(
  { abi: il2EcoAbi, functionName: 'approve' },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"transfer"`
 */
export const useSimulateIl2EcoTransfer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: il2EcoAbi,
    functionName: 'transfer',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link il2EcoAbi}__ and `functionName` set to `"transferFrom"`
 */
export const useSimulateIl2EcoTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: il2EcoAbi,
    functionName: 'transferFrom',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link il2EcoAbi}__
 */
export const useWatchIl2EcoEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: il2EcoAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link il2EcoAbi}__ and `eventName` set to `"Approval"`
 */
export const useWatchIl2EcoApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: il2EcoAbi,
    eventName: 'Approval',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link il2EcoAbi}__ and `eventName` set to `"Transfer"`
 */
export const useWatchIl2EcoTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: il2EcoAbi,
    eventName: 'Transfer',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useReadIMulticall3 = /*#__PURE__*/ createUseReadContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBasefee"`
 */
export const useReadIMulticall3GetBasefee = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getBasefee' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockHash"`
 */
export const useReadIMulticall3GetBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockHash',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getBlockNumber"`
 */
export const useReadIMulticall3GetBlockNumber =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getBlockNumber',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getChainId"`
 */
export const useReadIMulticall3GetChainId = /*#__PURE__*/ createUseReadContract(
  { abi: iMulticall3Abi, functionName: 'getChainId' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockCoinbase"`
 */
export const useReadIMulticall3GetCurrentBlockCoinbase =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockCoinbase',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockDifficulty"`
 */
export const useReadIMulticall3GetCurrentBlockDifficulty =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockDifficulty',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockGasLimit"`
 */
export const useReadIMulticall3GetCurrentBlockGasLimit =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockGasLimit',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getCurrentBlockTimestamp"`
 */
export const useReadIMulticall3GetCurrentBlockTimestamp =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getCurrentBlockTimestamp',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getEthBalance"`
 */
export const useReadIMulticall3GetEthBalance =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getEthBalance',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"getLastBlockHash"`
 */
export const useReadIMulticall3GetLastBlockHash =
  /*#__PURE__*/ createUseReadContract({
    abi: iMulticall3Abi,
    functionName: 'getLastBlockHash',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useWriteIMulticall3 = /*#__PURE__*/ createUseWriteContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useWriteIMulticall3Aggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useWriteIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useWriteIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useWriteIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useWriteIMulticall3TryAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useWriteIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseWriteContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__
 */
export const useSimulateIMulticall3 = /*#__PURE__*/ createUseSimulateContract({
  abi: iMulticall3Abi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate"`
 */
export const useSimulateIMulticall3Aggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3"`
 */
export const useSimulateIMulticall3Aggregate3 =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"aggregate3Value"`
 */
export const useSimulateIMulticall3Aggregate3Value =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'aggregate3Value',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"blockAndAggregate"`
 */
export const useSimulateIMulticall3BlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'blockAndAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryAggregate"`
 */
export const useSimulateIMulticall3TryAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryAggregate',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link iMulticall3Abi}__ and `functionName` set to `"tryBlockAndAggregate"`
 */
export const useSimulateIMulticall3TryBlockAndAggregate =
  /*#__PURE__*/ createUseSimulateContract({
    abi: iMulticall3Abi,
    functionName: 'tryBlockAndAggregate',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link initializableAbi}__
 */
export const useWatchInitializableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: initializableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link initializableAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchInitializableInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: initializableAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__
 *
 *
 */
export const useReadNeoLink = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"ANYONE_WITHDRAWAL_MODE"`
 *
 *
 */
export const useReadNeoLinkAnyoneWithdrawalMode =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'ANYONE_WITHDRAWAL_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"DOMAIN_SEPARATOR"`
 *
 *
 */
export const useReadNeoLinkDomainSeparator =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'DOMAIN_SEPARATOR',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"EIP712DOMAIN_TYPEHASH"`
 *
 *
 */
export const useReadNeoLinkEip712DomainTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'EIP712DOMAIN_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"GASLESS_RECLAIM_TYPEHASH"`
 *
 *
 */
export const useReadNeoLinkGaslessReclaimTypehash =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'GASLESS_RECLAIM_TYPEHASH',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"MFA_AUTHORIZER"`
 *
 *
 */
export const useReadNeoLinkMfaAuthorizer = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'MFA_AUTHORIZER',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"NEOLINK_SALT"`
 *
 *
 */
export const useReadNeoLinkNeolinkSalt = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'NEOLINK_SALT',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"RECIPIENT_WITHDRAWAL_MODE"`
 *
 *
 */
export const useReadNeoLinkRecipientWithdrawalMode =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'RECIPIENT_WITHDRAWAL_MODE',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"deposits"`
 *
 *
 */
export const useReadNeoLinkDeposits = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'deposits',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"ecoAddress"`
 *
 *
 */
export const useReadNeoLinkEcoAddress = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'ecoAddress',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"getAllDeposits"`
 *
 *
 */
export const useReadNeoLinkGetAllDeposits = /*#__PURE__*/ createUseReadContract(
  { abi: neoLinkAbi, address: neoLinkAddress, functionName: 'getAllDeposits' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"getAllDepositsForAddress"`
 *
 *
 */
export const useReadNeoLinkGetAllDepositsForAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'getAllDepositsForAddress',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"getDeposit"`
 *
 *
 */
export const useReadNeoLinkGetDeposit = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'getDeposit',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"getDepositCount"`
 *
 *
 */
export const useReadNeoLinkGetDepositCount =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'getDepositCount',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"getSigner"`
 *
 *
 */
export const useReadNeoLinkGetSigner = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'getSigner',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadNeoLinkSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'supportsInterface',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__
 *
 *
 */
export const useWriteNeoLink = /*#__PURE__*/ createUseWriteContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeCustomDeposit"`
 *
 *
 */
export const useWriteNeoLinkMakeCustomDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeCustomDeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeDeposit"`
 *
 *
 */
export const useWriteNeoLinkMakeDeposit = /*#__PURE__*/ createUseWriteContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
  functionName: 'makeDeposit',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeDepositWithAuthorization"`
 *
 *
 */
export const useWriteNeoLinkMakeDepositWithAuthorization =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeDepositWithAuthorization',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeMFADeposit"`
 *
 *
 */
export const useWriteNeoLinkMakeMfaDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeMFADeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeSelflessDeposit"`
 *
 *
 */
export const useWriteNeoLinkMakeSelflessDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeSelflessDeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeSelflessMFADeposit"`
 *
 *
 */
export const useWriteNeoLinkMakeSelflessMfaDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeSelflessMFADeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 *
 *
 */
export const useWriteNeoLinkOnErc1155BatchReceived =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"onERC1155Received"`
 *
 *
 */
export const useWriteNeoLinkOnErc1155Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"onERC721Received"`
 *
 *
 */
export const useWriteNeoLinkOnErc721Received =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDeposit"`
 *
 *
 */
export const useWriteNeoLinkWithdrawDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDepositAsRecipient"`
 *
 *
 */
export const useWriteNeoLinkWithdrawDepositAsRecipient =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDepositAsRecipient',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDepositSender"`
 *
 *
 */
export const useWriteNeoLinkWithdrawDepositSender =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDepositSender',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDepositSenderGasless"`
 *
 *
 */
export const useWriteNeoLinkWithdrawDepositSenderGasless =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDepositSenderGasless',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawMFADeposit"`
 *
 *
 */
export const useWriteNeoLinkWithdrawMfaDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawMFADeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__
 *
 *
 */
export const useSimulateNeoLink = /*#__PURE__*/ createUseSimulateContract({
  abi: neoLinkAbi,
  address: neoLinkAddress,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeCustomDeposit"`
 *
 *
 */
export const useSimulateNeoLinkMakeCustomDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeCustomDeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeDeposit"`
 *
 *
 */
export const useSimulateNeoLinkMakeDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeDeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeDepositWithAuthorization"`
 *
 *
 */
export const useSimulateNeoLinkMakeDepositWithAuthorization =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeDepositWithAuthorization',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeMFADeposit"`
 *
 *
 */
export const useSimulateNeoLinkMakeMfaDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeMFADeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeSelflessDeposit"`
 *
 *
 */
export const useSimulateNeoLinkMakeSelflessDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeSelflessDeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"makeSelflessMFADeposit"`
 *
 *
 */
export const useSimulateNeoLinkMakeSelflessMfaDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'makeSelflessMFADeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"onERC1155BatchReceived"`
 *
 *
 */
export const useSimulateNeoLinkOnErc1155BatchReceived =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'onERC1155BatchReceived',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"onERC1155Received"`
 *
 *
 */
export const useSimulateNeoLinkOnErc1155Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'onERC1155Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"onERC721Received"`
 *
 *
 */
export const useSimulateNeoLinkOnErc721Received =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'onERC721Received',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDeposit"`
 *
 *
 */
export const useSimulateNeoLinkWithdrawDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDepositAsRecipient"`
 *
 *
 */
export const useSimulateNeoLinkWithdrawDepositAsRecipient =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDepositAsRecipient',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDepositSender"`
 *
 *
 */
export const useSimulateNeoLinkWithdrawDepositSender =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDepositSender',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawDepositSenderGasless"`
 *
 *
 */
export const useSimulateNeoLinkWithdrawDepositSenderGasless =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawDepositSenderGasless',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkAbi}__ and `functionName` set to `"withdrawMFADeposit"`
 *
 *
 */
export const useSimulateNeoLinkWithdrawMfaDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    functionName: 'withdrawMFADeposit',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link neoLinkAbi}__
 *
 *
 */
export const useWatchNeoLinkEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: neoLinkAbi,
  address: neoLinkAddress,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link neoLinkAbi}__ and `eventName` set to `"DepositEvent"`
 *
 *
 */
export const useWatchNeoLinkDepositEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    eventName: 'DepositEvent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link neoLinkAbi}__ and `eventName` set to `"MessageEvent"`
 *
 *
 */
export const useWatchNeoLinkMessageEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    eventName: 'MessageEvent',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link neoLinkAbi}__ and `eventName` set to `"WithdrawEvent"`
 *
 *
 */
export const useWatchNeoLinkWithdrawEventEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: neoLinkAbi,
    address: neoLinkAddress,
    eventName: 'WithdrawEvent',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__
 *
 *
 */
export const useReadNeoLinkRaffle = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkRaffleAbi,
  address: neoLinkRaffleAddress,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__ and `functionName` set to `"neolink"`
 *
 *
 */
export const useReadNeoLinkRaffleNeolink = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkRaffleAbi,
  address: neoLinkRaffleAddress,
  functionName: 'neolink',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__ and `functionName` set to `"random"`
 *
 *
 */
export const useReadNeoLinkRaffleRandom = /*#__PURE__*/ createUseReadContract({
  abi: neoLinkRaffleAbi,
  address: neoLinkRaffleAddress,
  functionName: 'random',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__
 *
 *
 */
export const useWriteNeoLinkRaffle = /*#__PURE__*/ createUseWriteContract({
  abi: neoLinkRaffleAbi,
  address: neoLinkRaffleAddress,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__ and `functionName` set to `"batchMakeDeposit"`
 *
 *
 */
export const useWriteNeoLinkRaffleBatchMakeDeposit =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkRaffleAbi,
    address: neoLinkRaffleAddress,
    functionName: 'batchMakeDeposit',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__ and `functionName` set to `"batchMakeDepositRaffle"`
 *
 *
 */
export const useWriteNeoLinkRaffleBatchMakeDepositRaffle =
  /*#__PURE__*/ createUseWriteContract({
    abi: neoLinkRaffleAbi,
    address: neoLinkRaffleAddress,
    functionName: 'batchMakeDepositRaffle',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__
 *
 *
 */
export const useSimulateNeoLinkRaffle = /*#__PURE__*/ createUseSimulateContract(
  { abi: neoLinkRaffleAbi, address: neoLinkRaffleAddress },
)

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__ and `functionName` set to `"batchMakeDeposit"`
 *
 *
 */
export const useSimulateNeoLinkRaffleBatchMakeDeposit =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkRaffleAbi,
    address: neoLinkRaffleAddress,
    functionName: 'batchMakeDeposit',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link neoLinkRaffleAbi}__ and `functionName` set to `"batchMakeDepositRaffle"`
 *
 *
 */
export const useSimulateNeoLinkRaffleBatchMakeDepositRaffle =
  /*#__PURE__*/ createUseSimulateContract({
    abi: neoLinkRaffleAbi,
    address: neoLinkRaffleAddress,
    functionName: 'batchMakeDepositRaffle',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__
 */
export const useReadReclaim = /*#__PURE__*/ createUseReadContract({
  abi: reclaimAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 */
export const useReadReclaimUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: reclaimAbi,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"currentEpoch"`
 */
export const useReadReclaimCurrentEpoch = /*#__PURE__*/ createUseReadContract({
  abi: reclaimAbi,
  functionName: 'currentEpoch',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"epochDurationS"`
 */
export const useReadReclaimEpochDurationS = /*#__PURE__*/ createUseReadContract(
  { abi: reclaimAbi, functionName: 'epochDurationS' },
)

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"epochs"`
 */
export const useReadReclaimEpochs = /*#__PURE__*/ createUseReadContract({
  abi: reclaimAbi,
  functionName: 'epochs',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"extractFieldFromContext"`
 */
export const useReadReclaimExtractFieldFromContext =
  /*#__PURE__*/ createUseReadContract({
    abi: reclaimAbi,
    functionName: 'extractFieldFromContext',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"fetchEpoch"`
 */
export const useReadReclaimFetchEpoch = /*#__PURE__*/ createUseReadContract({
  abi: reclaimAbi,
  functionName: 'fetchEpoch',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"fetchWitnessesForClaim"`
 */
export const useReadReclaimFetchWitnessesForClaim =
  /*#__PURE__*/ createUseReadContract({
    abi: reclaimAbi,
    functionName: 'fetchWitnessesForClaim',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"getMerkelizedUserParams"`
 */
export const useReadReclaimGetMerkelizedUserParams =
  /*#__PURE__*/ createUseReadContract({
    abi: reclaimAbi,
    functionName: 'getMerkelizedUserParams',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"getProviderFromProof"`
 */
export const useReadReclaimGetProviderFromProof =
  /*#__PURE__*/ createUseReadContract({
    abi: reclaimAbi,
    functionName: 'getProviderFromProof',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadReclaimProxiableUuid = /*#__PURE__*/ createUseReadContract({
  abi: reclaimAbi,
  functionName: 'proxiableUUID',
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"semaphoreAddress"`
 */
export const useReadReclaimSemaphoreAddress =
  /*#__PURE__*/ createUseReadContract({
    abi: reclaimAbi,
    functionName: 'semaphoreAddress',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__
 */
export const useWriteReclaim = /*#__PURE__*/ createUseWriteContract({
  abi: reclaimAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"addNewEpoch"`
 */
export const useWriteReclaimAddNewEpoch = /*#__PURE__*/ createUseWriteContract({
  abi: reclaimAbi,
  functionName: 'addNewEpoch',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"createDapp"`
 */
export const useWriteReclaimCreateDapp = /*#__PURE__*/ createUseWriteContract({
  abi: reclaimAbi,
  functionName: 'createDapp',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"createGroup"`
 */
export const useWriteReclaimCreateGroup = /*#__PURE__*/ createUseWriteContract({
  abi: reclaimAbi,
  functionName: 'createGroup',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"initialize"`
 */
export const useWriteReclaimInitialize = /*#__PURE__*/ createUseWriteContract({
  abi: reclaimAbi,
  functionName: 'initialize',
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"merkelizeUser"`
 */
export const useWriteReclaimMerkelizeUser =
  /*#__PURE__*/ createUseWriteContract({
    abi: reclaimAbi,
    functionName: 'merkelizeUser',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteReclaimUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: reclaimAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"verifyMerkelIdentity"`
 */
export const useWriteReclaimVerifyMerkelIdentity =
  /*#__PURE__*/ createUseWriteContract({
    abi: reclaimAbi,
    functionName: 'verifyMerkelIdentity',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"verifyProof"`
 */
export const useWriteReclaimVerifyProof = /*#__PURE__*/ createUseWriteContract({
  abi: reclaimAbi,
  functionName: 'verifyProof',
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__
 */
export const useSimulateReclaim = /*#__PURE__*/ createUseSimulateContract({
  abi: reclaimAbi,
})

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"addNewEpoch"`
 */
export const useSimulateReclaimAddNewEpoch =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'addNewEpoch',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"createDapp"`
 */
export const useSimulateReclaimCreateDapp =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'createDapp',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"createGroup"`
 */
export const useSimulateReclaimCreateGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"initialize"`
 */
export const useSimulateReclaimInitialize =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'initialize',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"merkelizeUser"`
 */
export const useSimulateReclaimMerkelizeUser =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'merkelizeUser',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateReclaimUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"verifyMerkelIdentity"`
 */
export const useSimulateReclaimVerifyMerkelIdentity =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'verifyMerkelIdentity',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link reclaimAbi}__ and `functionName` set to `"verifyProof"`
 */
export const useSimulateReclaimVerifyProof =
  /*#__PURE__*/ createUseSimulateContract({
    abi: reclaimAbi,
    functionName: 'verifyProof',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reclaimAbi}__
 */
export const useWatchReclaimEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: reclaimAbi,
})

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reclaimAbi}__ and `eventName` set to `"DappCreated"`
 */
export const useWatchReclaimDappCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reclaimAbi,
    eventName: 'DappCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reclaimAbi}__ and `eventName` set to `"EpochAdded"`
 */
export const useWatchReclaimEpochAddedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reclaimAbi,
    eventName: 'EpochAdded',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reclaimAbi}__ and `eventName` set to `"GroupCreated"`
 */
export const useWatchReclaimGroupCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reclaimAbi,
    eventName: 'GroupCreated',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reclaimAbi}__ and `eventName` set to `"Initialized"`
 */
export const useWatchReclaimInitializedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reclaimAbi,
    eventName: 'Initialized',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link reclaimAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchReclaimUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: reclaimAbi,
    eventName: 'Upgraded',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__
 */
export const useWriteSemaphoreInterface = /*#__PURE__*/ createUseWriteContract({
  abi: semaphoreInterfaceAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"addMember"`
 */
export const useWriteSemaphoreInterfaceAddMember =
  /*#__PURE__*/ createUseWriteContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'addMember',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"createGroup"`
 */
export const useWriteSemaphoreInterfaceCreateGroup =
  /*#__PURE__*/ createUseWriteContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"removeMember"`
 */
export const useWriteSemaphoreInterfaceRemoveMember =
  /*#__PURE__*/ createUseWriteContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"verifyProof"`
 */
export const useWriteSemaphoreInterfaceVerifyProof =
  /*#__PURE__*/ createUseWriteContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'verifyProof',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__
 */
export const useSimulateSemaphoreInterface =
  /*#__PURE__*/ createUseSimulateContract({ abi: semaphoreInterfaceAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"addMember"`
 */
export const useSimulateSemaphoreInterfaceAddMember =
  /*#__PURE__*/ createUseSimulateContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'addMember',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"createGroup"`
 */
export const useSimulateSemaphoreInterfaceCreateGroup =
  /*#__PURE__*/ createUseSimulateContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'createGroup',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"removeMember"`
 */
export const useSimulateSemaphoreInterfaceRemoveMember =
  /*#__PURE__*/ createUseSimulateContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'removeMember',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link semaphoreInterfaceAbi}__ and `functionName` set to `"verifyProof"`
 */
export const useSimulateSemaphoreInterfaceVerifyProof =
  /*#__PURE__*/ createUseSimulateContract({
    abi: semaphoreInterfaceAbi,
    functionName: 'verifyProof',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__
 */
export const useReadUupsUpgradeable = /*#__PURE__*/ createUseReadContract({
  abi: uupsUpgradeableAbi,
})

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__ and `functionName` set to `"UPGRADE_INTERFACE_VERSION"`
 */
export const useReadUupsUpgradeableUpgradeInterfaceVersion =
  /*#__PURE__*/ createUseReadContract({
    abi: uupsUpgradeableAbi,
    functionName: 'UPGRADE_INTERFACE_VERSION',
  })

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__ and `functionName` set to `"proxiableUUID"`
 */
export const useReadUupsUpgradeableProxiableUuid =
  /*#__PURE__*/ createUseReadContract({
    abi: uupsUpgradeableAbi,
    functionName: 'proxiableUUID',
  })

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__
 */
export const useWriteUupsUpgradeable = /*#__PURE__*/ createUseWriteContract({
  abi: uupsUpgradeableAbi,
})

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useWriteUupsUpgradeableUpgradeToAndCall =
  /*#__PURE__*/ createUseWriteContract({
    abi: uupsUpgradeableAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__
 */
export const useSimulateUupsUpgradeable =
  /*#__PURE__*/ createUseSimulateContract({ abi: uupsUpgradeableAbi })

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link uupsUpgradeableAbi}__ and `functionName` set to `"upgradeToAndCall"`
 */
export const useSimulateUupsUpgradeableUpgradeToAndCall =
  /*#__PURE__*/ createUseSimulateContract({
    abi: uupsUpgradeableAbi,
    functionName: 'upgradeToAndCall',
  })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uupsUpgradeableAbi}__
 */
export const useWatchUupsUpgradeableEvent =
  /*#__PURE__*/ createUseWatchContractEvent({ abi: uupsUpgradeableAbi })

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link uupsUpgradeableAbi}__ and `eventName` set to `"Upgraded"`
 */
export const useWatchUupsUpgradeableUpgradedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: uupsUpgradeableAbi,
    eventName: 'Upgraded',
  })
