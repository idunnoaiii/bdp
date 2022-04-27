const EnvConfig = {
  // RPC_ENDPOINT: 'https://rpc.testnet.tomochain.com',
  RPC_ENDPOINT: "http://localhost:8545",
  // RPC_ENDPOINT: 'https://rinkeby.infura.io/v3/3572da146a184f7a9420cb031f5087ce',
  TOKEN_ABI: [
    {
      constant: true,
      inputs: [],
      name: "name",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_spender",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "approve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "totalSupply",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_from",
          type: "address",
        },
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transferFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "INITIAL_SUPPLY",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "decimals",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
      ],
      name: "balanceOf",
      outputs: [
        {
          name: "balance",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "symbol",
      outputs: [
        {
          name: "",
          type: "string",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_to",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "transfer",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_owner",
          type: "address",
        },
        {
          name: "_spender",
          type: "address",
        },
      ],
      name: "allowance",
      outputs: [
        {
          name: "remaining",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [
        {
          name: "_name",
          type: "string",
        },
        {
          name: "_symbol",
          type: "string",
        },
        {
          name: "_decimals",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "_burner",
          type: "address",
        },
        {
          indexed: false,
          name: "_value",
          type: "uint256",
        },
      ],
      name: "Burn",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "owner",
          type: "address",
        },
        {
          indexed: true,
          name: "spender",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Approval",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          name: "from",
          type: "address",
        },
        {
          indexed: true,
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          name: "value",
          type: "uint256",
        },
      ],
      name: "Transfer",
      type: "event",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "burn",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_from",
          type: "address",
        },
        {
          name: "_value",
          type: "uint256",
        },
      ],
      name: "burnFrom",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  /* TODO: You should change these configurations with your deployed exchange contract instead */
  EXCHANGE_CONTRACT_ABI: [
    {
      constant: true,
      inputs: [],
      name: "trade",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "DEFAULT_ADDRESS",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "owner",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [],
      name: "ETH_ADDRESS",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "",
          type: "address",
        },
      ],
      name: "listReserve",
      outputs: [
        {
          name: "",
          type: "address",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      inputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      payable: true,
      stateMutability: "payable",
      type: "fallback",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_reserve",
          type: "address",
        },
        {
          name: "_token",
          type: "address",
        },
        {
          name: "_isAdd",
          type: "bool",
        },
      ],
      name: "addReserve",
      outputs: [
        {
          name: "",
          type: "bool",
        },
      ],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      constant: true,
      inputs: [
        {
          name: "_srcToken",
          type: "address",
        },
        {
          name: "_destToken",
          type: "address",
        },
        {
          name: "_srcAmmount",
          type: "uint256",
        },
      ],
      name: "getExchangeRate",
      outputs: [
        {
          name: "",
          type: "uint256",
        },
      ],
      payable: false,
      stateMutability: "view",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_srcToken",
          type: "address",
        },
        {
          name: "_destToken",
          type: "address",
        },
        {
          name: "_srcAmmount",
          type: "uint256",
        },
      ],
      name: "exchangeToken",
      outputs: [],
      payable: true,
      stateMutability: "payable",
      type: "function",
    },
    {
      constant: false,
      inputs: [
        {
          name: "_flag",
          type: "bool",
        },
      ],
      name: "setTradable",
      outputs: [],
      payable: false,
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  EXCHANGE_CONTRACT_ADDRESS: "0xc6b7357a4b055Fa3EBb9615C9b3175cF9eBf6A91",
  // EXCHANGE_CONTRACT_ADDRESS: '0x1ec46C86143fB8c6128e46cCe06cc46fB368D072',
  /* END TODO */

  TOKENS: [
    {
      name: "Token A",
      symbol: "TKA",
      address: "0x6065F5EAfB6202f81D56403e2dd52C81e8C4a400",
      // address: '0xcAA4f408841c99cCA9ABfCa4253011c9796bC8e3',
    },
    /* TODO: Change to your own deployed tokens. Remember to put 2 tokens here to support token to token swapping */
    {
      name: "TokenB",
      symbol: "TKB",
      address: "0x53C0b63b424Abf7e6BFB68B5Da8ed88db651Ade4",
      // address: '0xD38aD6bf470ABc9df1736A03f96b9c42BfB5BB17',
    },
    {
      name: "Ether",
      symbol: "ETH",
      address: "0xeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
    },
    /* END TODO */
  ],
};

export default EnvConfig;
