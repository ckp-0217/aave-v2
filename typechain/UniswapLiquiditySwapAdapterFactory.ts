/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { UniswapLiquiditySwapAdapter } from "./UniswapLiquiditySwapAdapter";

export class UniswapLiquiditySwapAdapterFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    addressesProvider: string,
    uniswapRouter: string,
    wethAddress: string,
    overrides?: Overrides
  ): Promise<UniswapLiquiditySwapAdapter> {
    return super.deploy(
      addressesProvider,
      uniswapRouter,
      wethAddress,
      overrides || {}
    ) as Promise<UniswapLiquiditySwapAdapter>;
  }
  getDeployTransaction(
    addressesProvider: string,
    uniswapRouter: string,
    wethAddress: string,
    overrides?: Overrides
  ): TransactionRequest {
    return super.getDeployTransaction(
      addressesProvider,
      uniswapRouter,
      wethAddress,
      overrides || {}
    );
  }
  attach(address: string): UniswapLiquiditySwapAdapter {
    return super.attach(address) as UniswapLiquiditySwapAdapter;
  }
  connect(signer: Signer): UniswapLiquiditySwapAdapterFactory {
    return super.connect(signer) as UniswapLiquiditySwapAdapterFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UniswapLiquiditySwapAdapter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UniswapLiquiditySwapAdapter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "addressesProvider",
        type: "address",
      },
      {
        internalType: "contract IUniswapV2Router02",
        name: "uniswapRouter",
        type: "address",
      },
      {
        internalType: "address",
        name: "wethAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "fromAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "toAsset",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fromAmount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "receivedAmount",
        type: "uint256",
      },
    ],
    name: "Swapped",
    type: "event",
  },
  {
    inputs: [],
    name: "ADDRESSES_PROVIDER",
    outputs: [
      {
        internalType: "contract ILendingPoolAddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "FLASHLOAN_PREMIUM_TOTAL",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "LENDING_POOL",
    outputs: [
      {
        internalType: "contract ILendingPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_SLIPPAGE_PERCENT",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "ORACLE",
    outputs: [
      {
        internalType: "contract IPriceOracleGetter",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UNISWAP_ROUTER",
    outputs: [
      {
        internalType: "contract IUniswapV2Router02",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "USD_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "WETH_ADDRESS",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assets",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amounts",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "premiums",
        type: "uint256[]",
      },
      {
        internalType: "address",
        name: "initiator",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "params",
        type: "bytes",
      },
    ],
    name: "executeOperation",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountOut",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
    ],
    name: "getAmountsIn",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amountIn",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "reserveIn",
        type: "address",
      },
      {
        internalType: "address",
        name: "reserveOut",
        type: "address",
      },
    ],
    name: "getAmountsOut",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "address[]",
        name: "",
        type: "address[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract IERC20",
        name: "token",
        type: "address",
      },
    ],
    name: "rescueTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "assetToSwapFromList",
        type: "address[]",
      },
      {
        internalType: "address[]",
        name: "assetToSwapToList",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "amountToSwapList",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "minAmountsToReceive",
        type: "uint256[]",
      },
      {
        components: [
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "deadline",
            type: "uint256",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
        ],
        internalType: "struct IBaseUniswapAdapter.PermitSignature[]",
        name: "permitParams",
        type: "tuple[]",
      },
      {
        internalType: "bool[]",
        name: "useEthPath",
        type: "bool[]",
      },
    ],
    name: "swapAndDeposit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101206040523480156200001257600080fd5b50604051620038dd380380620038dd8339810160408190526200003591620001fd565b82828282806001600160a01b03166080816001600160a01b031660601b81525050806001600160a01b0316630261bf8b6040518163ffffffff1660e01b815260040160206040518083038186803b1580156200009057600080fd5b505afa158015620000a5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000cb9190620001d7565b60601b6001600160601b03191660a052506000620000e8620001d3565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a350826001600160a01b031663fca513a86040518163ffffffff1660e01b815260040160206040518083038186803b1580156200016c57600080fd5b505afa15801562000181573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001a79190620001d7565b6001600160601b0319606091821b811660e05292811b8316610100521b1660c052506200026992505050565b3390565b600060208284031215620001e9578081fd5b8151620001f68162000250565b9392505050565b60008060006060848603121562000212578182fd5b83516200021f8162000250565b6020850151909350620002328162000250565b6040850151909250620002458162000250565b809150509250925092565b6001600160a01b03811681146200026657600080fd5b50565b60805160601c60a05160601c60c05160601c60e05160601c6101005160601c6135a36200033a60003980610b605280611217528061130b528061199452806119c95280611b5d528061210352806121f45250806103a2528061235e52508061034f52806110f1528061112e52806111985280611a475280611fdd528061201a528061208452508061045f52806107355280610a075280610a615280610a975280610dbb5280610df75280610e385280610ef25280610f2e5280611715528061185a52508061037352506135a36000f3fe608060405234801561001057600080fd5b50600436106100ff5760003560e01c8063920f5c8411610097578063cdf58cd611610066578063cdf58cd6146101c8578063d51c9ed7146101db578063d8264920146101ee578063f2fde38b146101f6576100ff565b8063920f5c84146101745780639d1211bf14610194578063b4dcfc771461019c578063baf7fa99146101a4576100ff565b806332e4b286116100d357806332e4b2861461015457806338013f021461015c578063715018a6146101645780638da5cb5b1461016c576100ff565b8062ae3bf814610104578063040141e5146101195780630542975c14610137578063074b2e431461013f575b600080fd5b6101176101123660046129fe565b610209565b005b61012161034d565b60405161012e9190613038565b60405180910390f35b610121610371565b610147610395565b60405161012e9190613433565b61014761039a565b6101216103a0565b6101176103c4565b610121610443565b610187610182366004612b50565b610452565b60405161012e919061315d565b61012161071b565b610121610733565b6101b76101b2366004612f7c565b610757565b60405161012e959493929190613491565b6101b76101d6366004612f7c565b61079d565b6101176101e9366004612a1a565b6107b8565b610121610b5e565b6101176102043660046129fe565b610b82565b610211610c38565b6000546001600160a01b039081169116146102475760405162461bcd60e51b815260040161023e906132fa565b60405180910390fd5b806001600160a01b031663a9059cbb61025e610443565b6040516370a0823160e01b81526001600160a01b038516906370a082319061028a903090600401613038565b60206040518083038186803b1580156102a257600080fd5b505afa1580156102b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102da9190612f64565b6040518363ffffffff1660e01b81526004016102f79291906130f4565b602060405180830381600087803b15801561031157600080fd5b505af1158015610325573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906103499190612df4565b5050565b7f000000000000000000000000000000000000000000000000000000000000000081565b7f000000000000000000000000000000000000000000000000000000000000000081565b600981565b610bb881565b7f000000000000000000000000000000000000000000000000000000000000000081565b6103cc610c38565b6000546001600160a01b039081169116146103f95760405162461bcd60e51b815260040161023e906132fa565b600080546040516001600160a01b03909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080546001600160a01b0319169055565b6000546001600160a01b031690565b6000336001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000161461049c5760405162461bcd60e51b815260040161023e9061319b565b6104a46125d9565b6104e384848080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250610c3c92505050565b8051519091508a1480156104fb57506020810151518a145b801561050b57506040810151518a145b801561051c5750606081015151518a145b80156105305750606081015160200151518a145b80156105445750606081015160400151518a145b801561055757506060808201510151518a145b801561056b5750606081015160800151518a145b801561057b57506080810151518a145b6105975760405162461bcd60e51b815260040161023e9061332f565b60005b8a811015610709576107018c8c838181106105b157fe5b90506020020160208101906105c691906129fe565b83518051849081106105d457fe5b60200260200101518c8c858181106105e857fe5b905060200201358b8b868181106105fb57fe5b905060200201358a8760200151878151811061061357fe5b60200260200101518860400151888151811061062b57fe5b60200260200101516040518060a001604052808b60600151600001518b8151811061065257fe5b602002602001015181526020018b60600151602001518b8151811061067357fe5b602002602001015181526020018b60600151604001518b8151811061069457fe5b602002602001015160ff1681526020018b60600151606001518b815181106106b857fe5b602002602001015181526020018b60600151608001518b815181106106d957fe5b60200260200101518152508a608001518a815181106106f457fe5b6020026020010151610cc5565b60010161059a565b5060019b9a5050505050505050505050565b7310f7fc1f91ba351f9c629c5947ad69bd03c05b9681565b7f000000000000000000000000000000000000000000000000000000000000000081565b600080600080606061076761260e565b61077288888b610f5f565b8051602082015160408301516060840151608090940151929d919c509a509198509650945050505050565b60008060008060606107ad61260e565b61077288888b61151c565b8a891480156107c657508a87145b80156107d157508a85145b80156107dc57508a83145b6107f85760405162461bcd60e51b815260040161023e9061332f565b61080061263d565b600081525b80518c1115610b4f5761083b8d8d836000015181811061082157fe5b905060200201602081019061083691906129fe565b6116f6565b60e001516001600160a01b0316608082018190526040516370a0823160e01b81526370a0823190610870903390600401613038565b60206040518083038186803b15801561088857600080fd5b505afa15801561089c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108c09190612f64565b6020820181905281518a908a908181106108d657fe5b90506020020135116108fe57888882600001518181106108f257fe5b90506020020135610904565b80602001515b60408201528051610967908e908e9081811061091c57fe5b905060200201602081019061093191906129fe565b82608001513384604001518989876000015181811061094c57fe5b905060a002018036038101906109629190612e10565b6117a1565b6109fa8d8d836000015181811061097a57fe5b905060200201602081019061098f91906129fe565b8c8c846000015181811061099f57fe5b90506020020160208101906109b491906129fe565b83604001518a8a86600001518181106109c957fe5b90506020020135878787600001518181106109e057fe5b90506020020160208101906109f59190612dd8565b6118ed565b60608201528051610a5c907f0000000000000000000000000000000000000000000000000000000000000000906000908e908e90818110610a3757fe5b9050602002016020810190610a4c91906129fe565b6001600160a01b03169190611c84565b610a957f000000000000000000000000000000000000000000000000000000000000000082606001518d8d8560000151818110610a3757fe5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663e8eda9df8c8c8460000151818110610ad457fe5b9050602002016020810190610ae991906129fe565b83606001513360006040518563ffffffff1660e01b8152600401610b109493929190613130565b600060405180830381600087803b158015610b2a57600080fd5b505af1158015610b3e573d6000803e3d6000fd5b505082516001018352506108059050565b50505050505050505050505050565b7f000000000000000000000000000000000000000000000000000000000000000081565b610b8a610c38565b6000546001600160a01b03908116911614610bb75760405162461bcd60e51b815260040161023e906132fa565b6001600160a01b038116610bdd5760405162461bcd60e51b815260040161023e906131d2565b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b3390565b610c446125d9565b60608060608060608060608060608a806020019051810190610c669190612c4c565b6040805160a080820183529a815260208082019a909a52808201989098528051998a018152958952968801939093529286015260608086019290925260808086019190915290820193909352918201529b9a5050505050505050505050565b610ccd612675565b610cd68a6116f6565b60e001516001600160a01b03168082526040516370a0823160e01b81526370a0823190610d07908990600401613038565b60206040518083038186803b158015610d1f57600080fd5b505afa158015610d33573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d579190612f64565b6020820152838015610d78575060208101518890610d759089611d83565b11155b610d825787610d91565b6020810151610d919088611d83565b60408201819052610da7908b908b9088866118ed565b6060820152610de16001600160a01b038a167f00000000000000000000000000000000000000000000000000000000000000006000611c84565b6060810151610e1c906001600160a01b038b16907f000000000000000000000000000000000000000000000000000000000000000090611c84565b606081015160405163e8eda9df60e01b81526001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169163e8eda9df91610e72918d918b90600090600401613130565b600060405180830381600087803b158015610e8c57600080fd5b505af1158015610ea0573d6000803e3d6000fd5b50505050610eb78789611dc590919063ffffffff16565b60808201526040810151610ecb9088611dc5565b60a082018190528151610ee3918c91908990876117a1565b610f186001600160a01b038b167f00000000000000000000000000000000000000000000000000000000000000006000611c84565b6080810151610f53906001600160a01b038c16907f000000000000000000000000000000000000000000000000000000000000000090611c84565b50505050505050505050565b610f6761260e565b6000610f8a610f83612710610f7d866009611dea565b90611e24565b8490611d83565b9050836001600160a01b0316856001600160a01b03161415611056576000610fb186611e66565b60408051600180825281830190925291925060609190602080830190803683370190505090508681600081518110610fe557fe5b6001600160a01b039092166020928302919091018201526040805160a0810190915284815290810161102387610f7d87670de0b6b3a7640000611dea565b8152602001611033898886611ee2565b8152602001611043898686611ee2565b8152602001828152509350505050611515565b6040805160028082526060808301845292602083019080368337019050509050858160008151811061108457fe5b60200260200101906001600160a01b031690816001600160a01b03168152505084816001815181106110b257fe5b6001600160a01b0392909216602092830291909101820152604080516003808252608082019092526060928392839291820183803683370190505090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316896001600160a01b03161415801561116357507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b031614155b156112cf57888160008151811061117657fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106111c457fe5b60200260200101906001600160a01b031690816001600160a01b03168152505087816002815181106111f257fe5b6001600160a01b03928316602091820292909201015260405163d06ca61f60e01b81527f00000000000000000000000000000000000000000000000000000000000000009091169063d06ca61f90611250908890859060040161343c565b60006040518083038186803b15801561126857600080fd5b505afa92505050801561129d57506040513d6000823e601f3d908101601f1916820160405261129a9190810190612da6565b60015b6112c7576040805160038082526080820190925290602082016060803683370190505091506112ca565b91505b6112f1565b6040805160038082526080820190925290602082016060803683370190505091505b60405163d06ca61f60e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063d06ca61f90611342908990899060040161343c565b60006040518083038186803b15801561135a57600080fd5b505afa92505050801561138f57506040513d6000823e601f3d908101601f1916820160405261138c9190810190612da6565b60015b6113cf576040805160028082526060820183529091602083019080368337019050509350826002815181106113c057fe5b60200260200101519050611435565b809450846001815181106113df57fe5b6020026020010151846002815181106113f457fe5b60200260200101511161141b578460018151811061140e57fe5b6020026020010151611431565b8360028151811061142857fe5b60200260200101515b9150505b60006114408b611e66565b9050600061144d8b611e66565b9050600061148261146285600a86900a611dea565b610f7d600a85900a61147c8d670de0b6b3a7640000611dea565b90611dea565b90506040518060a001604052808581526020018281526020016114a68f8e87611ee2565b81526020016114b68e8786611ee2565b815260200185156114e957886001815181106114ce57fe5b602002602001015186146114e257866114e4565b895b611507565b60408051600280825260608201835290916020830190803683375050505b905299505050505050505050505b9392505050565b61152461260e565b826001600160a01b0316846001600160a01b031614156115fa57600061155b611554612710610f7d866009611dea565b8490611dc5565b9050600061156886611e66565b6040805160018082528183019092529192506060919060208083019080368337019050509050868160008151811061159c57fe5b6001600160a01b039092166020928302919091018201526040805160a081019091528481529081016115da85610f7d89670de0b6b3a7640000611dea565b81526020016115ea898686611ee2565b8152602001611043898886611ee2565b606080611608868686611f3b565b91509150600061166261163f612710610f7d60098760008151811061162957fe5b6020026020010151611dea90919063ffffffff16565b8460008151811061164c57fe5b6020026020010151611dc590919063ffffffff16565b9050600061166f88611e66565b9050600061167c88611e66565b905060006116ab61169185600a85900a611dea565b610f7d600a86900a61147c8c670de0b6b3a7640000611dea565b90506040518060a001604052808581526020018281526020016116cf8c8787611ee2565b81526020016116df8b8b86611ee2565b815260200195909552509298975050505050505050565b6116fe6126b4565b6040516335ea6a7560e01b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906335ea6a759061174a908590600401613038565b6101806040518083038186803b15801561176357600080fd5b505afa158015611777573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179b9190612e69565b92915050565b6117aa816122f8565b1561182e57836001600160a01b031663d505accf8430846000015185602001518660400151876060015188608001516040518863ffffffff1660e01b81526004016117fb97969594939291906130b3565b600060405180830381600087803b15801561181557600080fd5b505af1158015611829573d6000803e3d6000fd5b505050505b6118436001600160a01b03851684308561231d565b604051631a4ca37b60e21b81526001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906369328dec906118939088908690309060040161310d565b602060405180830381600087803b1580156118ad57600080fd5b505af11580156118c1573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906118e59190612f64565b505050505050565b6000806118f987611e66565b9050600061190687611e66565b9050600061191389612344565b9050600061192089612344565b90506000611964611935612710610bb8611d83565b61195e61194685600a8a900a611dea565b610f7d61195788600a8b900a611dea565b8e90611dea565b906123e3565b90508781106119855760405162461bcd60e51b815260040161023e90613284565b6119ba6001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000006000611c84565b6119ee6001600160a01b038c167f00000000000000000000000000000000000000000000000000000000000000008b611c84565b60608715611ac6576040805160038082526080820190925290602082016060803683370190505090508b81600081518110611a2557fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f000000000000000000000000000000000000000000000000000000000000000081600181518110611a7357fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508a81600281518110611aa157fe5b60200260200101906001600160a01b031690816001600160a01b031681525050611b43565b60408051600280825260608201835290916020830190803683370190505090508b81600081518110611af457fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508a81600181518110611b2257fe5b60200260200101906001600160a01b031690816001600160a01b0316815250505b6040516338ed173960e01b81526060906001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016906338ed173990611b9a908e908e90879030904290600401613455565b600060405180830381600087803b158015611bb457600080fd5b505af1158015611bc8573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052611bf09190810190612da6565b90507fa078c4190abe07940190effc1846be0ccf03ad6007bc9e93f9697d0b460befbb8d8d83600081518110611c2257fe5b602002602001015184600186510381518110611c3a57fe5b6020026020010151604051611c52949392919061308a565b60405180910390a180600182510381518110611c6a57fe5b602002602001015197505050505050505095945050505050565b801580611d0c5750604051636eb1769f60e11b81526001600160a01b0384169063dd62ed3e90611cba903090869060040161304c565b60206040518083038186803b158015611cd257600080fd5b505afa158015611ce6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611d0a9190612f64565b155b611d285760405162461bcd60e51b815260040161023e906133a6565b611d7e8363095ea7b360e01b8484604051602401611d479291906130f4565b60408051601f198184030181529190526020810180516001600160e01b03166001600160e01b031990931692909217909152612455565b505050565b600061151583836040518060400160405280601e81526020017f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525061253a565b6000828201838110156115155760405162461bcd60e51b815260040161023e90613218565b600082611df95750600061179b565b82820282848281611e0657fe5b04146115155760405162461bcd60e51b815260040161023e906132b9565b600061151583836040518060400160405280601a81526020017f536166654d6174683a206469766973696f6e206279207a65726f000000000000815250612566565b6000816001600160a01b031663313ce5676040518163ffffffff1660e01b815260040160206040518083038186803b158015611ea157600080fd5b505afa158015611eb5573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611ed99190612fbd565b60ff1692915050565b600080611f027310f7fc1f91ba351f9c629c5947ad69bd03c05b96612344565b90506000611f0f86612344565b9050611f31670de0b6b3a7640000610f7d8461147c600a89900a838b88611dea565b9695505050505050565b6040805160028082526060828101909352829182918160200160208202803683370190505090508581600081518110611f7057fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508481600181518110611f9e57fe5b6001600160a01b0392909216602092830291909101820152604080516003808252608082019092526060928392839291820183803683370190505090507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316896001600160a01b03161415801561204f57507f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316886001600160a01b031614155b156121bb57888160008151811061206257fe5b60200260200101906001600160a01b031690816001600160a01b0316815250507f0000000000000000000000000000000000000000000000000000000000000000816001815181106120b057fe5b60200260200101906001600160a01b031690816001600160a01b03168152505087816002815181106120de57fe5b6001600160a01b0392831660209182029290920101526040516307c0329d60e21b81527f000000000000000000000000000000000000000000000000000000000000000090911690631f00ca749061213c908a90859060040161343c565b60006040518083038186803b15801561215457600080fd5b505afa92505050801561218957506040513d6000823e601f3d908101601f191682016040526121869190810190612da6565b60015b6121b3576040805160038082526080820190925290602082016060803683370190505091506121b6565b91505b6121dd565b6040805160038082526080820190925290602082016060803683370190505091505b6040516307c0329d60e21b81526001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001690631f00ca749061222b908a90889060040161343c565b60006040518083038186803b15801561224357600080fd5b505afa92505050801561227857506040513d6000823e601f3d908101601f191682016040526122759190810190612da6565b60015b6122895790945092506122f0915050565b8093508360008151811061229957fe5b6020026020010151836000815181106122ae57fe5b60200260200101511080156122d85750826000815181106122cb57fe5b6020026020010151600014155b6122e35783856122e6565b82825b9650965050505050505b935093915050565b6000816040015160ff16826020015114801561231657506020820151155b1592915050565b61233e846323b872dd60e01b858585604051602401611d4793929190613066565b50505050565b60405163b3596f0760e01b81526000906001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000169063b3596f0790612393908590600401613038565b60206040518083038186803b1580156123ab57600080fd5b505afa1580156123bf573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061179b9190612f64565b60008215806123f0575081155b156123fd5750600061179b565b81611388198161240957fe5b0483111560405180604001604052806002815260200161068760f31b815250906124465760405162461bcd60e51b815260040161023e9190613168565b50506127109102611388010490565b612467826001600160a01b031661259d565b6124835760405162461bcd60e51b815260040161023e906133fc565b60006060836001600160a01b03168360405161249f919061301c565b6000604051808303816000865af19150503d80600081146124dc576040519150601f19603f3d011682016040523d82523d6000602084013e6124e1565b606091505b5091509150816125035760405162461bcd60e51b815260040161023e9061324f565b80511561233e578080602001905181019061251e9190612df4565b61233e5760405162461bcd60e51b815260040161023e9061335c565b6000818484111561255e5760405162461bcd60e51b815260040161023e9190613168565b505050900390565b600081836125875760405162461bcd60e51b815260040161023e9190613168565b50600083858161259357fe5b0495945050505050565b6000813f7fc5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a4708181148015906125d157508115155b949350505050565b6040518060a0016040528060608152602001606081526020016060815260200161260161271f565b8152602001606081525090565b6040518060a0016040528060008152602001600081526020016000815260200160008152602001606081525090565b6040518060a001604052806000815260200160008152602001600081526020016000815260200160006001600160a01b031681525090565b6040518060c0016040528060006001600160a01b0316815260200160008152602001600081526020016000815260200160008152602001600081525090565b6040518061018001604052806126c861274e565b815260006020820181905260408201819052606082018190526080820181905260a0820181905260c0820181905260e082018190526101008201819052610120820181905261014082018190526101609091015290565b6040518060a0016040528060608152602001606081526020016060815260200160608152602001606081525090565b6040518060200160405280600081525090565b805161179b81613538565b60008083601f84011261277d578182fd5b5081356001600160401b03811115612793578182fd5b60208301915083602080830285010111156127ad57600080fd5b9250929050565b600082601f8301126127c4578081fd5b81516127d76127d2826134ed565b6134c7565b8181529150602080830190848101818402860182018710156127f857600080fd5b60005b8481101561282057815161280e81613538565b845292820192908201906001016127fb565b505050505092915050565b600082601f83011261283b578081fd5b81516128496127d2826134ed565b81815291506020808301908481018184028601820187101561286a57600080fd5b60005b8481101561282057815161288081613550565b8452928201929082019060010161286d565b600082601f8301126128a2578081fd5b81516128b06127d2826134ed565b8181529150602080830190848101818402860182018710156128d157600080fd5b60005b84811015612820578151845292820192908201906001016128d4565b60008083601f840112612901578182fd5b5081356001600160401b03811115612917578182fd5b60208301915083602060a0830285010111156127ad57600080fd5b600082601f830112612942578081fd5b81516129506127d2826134ed565b81815291506020808301908481018184028601820187101561297157600080fd5b60005b848110156128205781516129878161355e565b84529282019290820190600101612974565b6000602082840312156129aa578081fd5b6129b460206134c7565b9151825250919050565b80516fffffffffffffffffffffffffffffffff8116811461179b57600080fd5b805164ffffffffff8116811461179b57600080fd5b805161179b8161355e565b600060208284031215612a0f578081fd5b813561151581613538565b60008060008060008060008060008060008060c08d8f031215612a3b578788fd5b6001600160401b038d351115612a4f578788fd5b612a5c8e8e358f0161276c565b909c509a506001600160401b0360208e01351115612a78578788fd5b612a888e60208f01358f0161276c565b909a5098506001600160401b0360408e01351115612aa4578788fd5b612ab48e60408f01358f0161276c565b90985096506001600160401b0360608e01351115612ad0578586fd5b612ae08e60608f01358f0161276c565b90965094506001600160401b0360808e01351115612afc578384fd5b612b0c8e60808f01358f016128f0565b90945092506001600160401b0360a08e01351115612b28578081fd5b612b388e60a08f01358f0161276c565b81935080925050509295989b509295989b509295989b565b600080600080600080600080600060a08a8c031215612b6d578283fd5b89356001600160401b0380821115612b83578485fd5b612b8f8d838e0161276c565b909b50995060208c0135915080821115612ba7578485fd5b612bb38d838e0161276c565b909950975060408c0135915080821115612bcb578485fd5b612bd78d838e0161276c565b909750955060608c01359150612bec82613538565b90935060808b01359080821115612c01578384fd5b818c0191508c601f830112612c14578384fd5b813581811115612c22578485fd5b8d6020828501011115612c33578485fd5b6020830194508093505050509295985092959850929598565b60008060008060008060008060006101208a8c031215612c6a578283fd5b89516001600160401b0380821115612c80578485fd5b612c8c8d838e016127b4565b9a5060208c0151915080821115612ca1578485fd5b612cad8d838e01612892565b995060408c0151915080821115612cc2578485fd5b612cce8d838e0161282b565b985060608c0151915080821115612ce3578485fd5b612cef8d838e01612892565b975060808c0151915080821115612d04578485fd5b612d108d838e01612892565b965060a08c0151915080821115612d25578485fd5b612d318d838e01612932565b955060c08c0151915080821115612d46578485fd5b612d528d838e01612892565b945060e08c0151915080821115612d67578384fd5b612d738d838e01612892565b93506101008c0151915080821115612d89578283fd5b50612d968c828d0161282b565b9150509295985092959850929598565b600060208284031215612db7578081fd5b81516001600160401b03811115612dcc578182fd5b6125d184828501612892565b600060208284031215612de9578081fd5b813561151581613550565b600060208284031215612e05578081fd5b815161151581613550565b600060a08284031215612e21578081fd5b612e2b60a06134c7565b82358152602083013560208201526040830135612e478161355e565b6040820152606083810135908201526080928301359281019290925250919050565b6000610180808385031215612e7c578182fd5b612e85816134c7565b9050612e918484612999565b8152612ea084602085016129be565b6020820152612eb284604085016129be565b6040820152612ec484606085016129be565b6060820152612ed684608085016129be565b6080820152612ee88460a085016129be565b60a0820152612efa8460c085016129de565b60c0820152612f0c8460e08501612761565b60e0820152610100612f2085828601612761565b90820152610120612f3385858301612761565b90820152610140612f4685858301612761565b90820152610160612f59858583016129f3565b908201529392505050565b600060208284031215612f75578081fd5b5051919050565b600080600060608486031215612f90578081fd5b833592506020840135612fa281613538565b91506040840135612fb281613538565b809150509250925092565b600060208284031215612fce578081fd5b81516115158161355e565b6000815180845260208085019450808401835b838110156130115781516001600160a01b031687529582019590820190600101612fec565b509495945050505050565b6000825161302e81846020870161350c565b9190910192915050565b6001600160a01b0391909116815260200190565b6001600160a01b0392831681529116602082015260400190565b6001600160a01b039384168152919092166020820152604081019190915260600190565b6001600160a01b0394851681529290931660208301526040820152606081019190915260800190565b6001600160a01b0397881681529590961660208601526040850193909352606084019190915260ff16608083015260a082015260c081019190915260e00190565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b6001600160a01b03948516815260208101939093529216604082015261ffff909116606082015260800190565b901515815260200190565b600060208252825180602084015261318781604085016020870161350c565b601f01601f19169190910160400192915050565b6020808252601b908201527f43414c4c45525f4d5553545f42455f4c454e44494e475f504f4f4c0000000000604082015260600190565b60208082526026908201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160408201526564647265737360d01b606082015260800190565b6020808252601b908201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604082015260600190565b6020808252818101527f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564604082015260600190565b6020808252818101527f6d696e416d6f756e744f757420657863656564206d617820736c697070616765604082015260600190565b60208082526021908201527f536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f6040820152607760f81b606082015260800190565b6020808252818101527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604082015260600190565b602080825260139082015272494e434f4e53495354454e545f504152414d5360681b604082015260600190565b6020808252602a908201527f5361666545524332303a204552433230206f7065726174696f6e20646964206e6040820152691bdd081cdd58d8d9595960b21b606082015260800190565b60208082526036908201527f5361666545524332303a20617070726f76652066726f6d206e6f6e2d7a65726f60408201527520746f206e6f6e2d7a65726f20616c6c6f77616e636560501b606082015260800190565b6020808252601f908201527f5361666545524332303a2063616c6c20746f206e6f6e2d636f6e747261637400604082015260600190565b90815260200190565b6000838252604060208301526125d16040830184612fd9565b600086825285602083015260a0604083015261347460a0830186612fd9565b6001600160a01b0394909416606083015250608001529392505050565b600086825285602083015284604083015283606083015260a060808301526134bc60a0830184612fd9565b979650505050505050565b6040518181016001600160401b03811182821017156134e557600080fd5b604052919050565b60006001600160401b03821115613502578081fd5b5060209081020190565b60005b8381101561352757818101518382015260200161350f565b8381111561233e5750506000910152565b6001600160a01b038116811461354d57600080fd5b50565b801515811461354d57600080fd5b60ff8116811461354d57600080fdfea26469706673582212208122fad13827797be2f368b211ce7f29d9f0ae10df401ec85ad5d1701cfb96ab64736f6c634300060c0033";