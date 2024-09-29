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
  12227332: '0x94d047D515DDe5b171cb7aD69C71F0d4Fcdc9213',
} as const

/**
 *
 */
export const neoLinkRaffleConfig = {
  address: neoLinkRaffleAddress,
  abi: neoLinkRaffleAbi,
} as const

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
