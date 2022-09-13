/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { LensPeriphery, LensPeripheryInterface } from "../LensPeriphery";

const _abi = [
  {
    inputs: [
      {
        internalType: "contract ILensHub",
        name: "hub",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ArrayMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "NotProfileOwnerOrDispatcher",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "TokenDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "HUB",
    outputs: [
      {
        internalType: "contract ILensHub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "NAME",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
    ],
    name: "getProfileMetadataURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "profileId",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "metadata",
        type: "string",
      },
    ],
    name: "setProfileMetadataURI",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "profileId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "metadata",
            type: "string",
          },
          {
            components: [
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
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.SetProfileMetadataWithSigData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "setProfileMetadataURIWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "sigNonces",
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
    inputs: [
      {
        internalType: "uint256[]",
        name: "profileIds",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "enables",
        type: "bool[]",
      },
    ],
    name: "toggleFollow",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "follower",
            type: "address",
          },
          {
            internalType: "uint256[]",
            name: "profileIds",
            type: "uint256[]",
          },
          {
            internalType: "bool[]",
            name: "enables",
            type: "bool[]",
          },
          {
            components: [
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
              {
                internalType: "uint256",
                name: "deadline",
                type: "uint256",
              },
            ],
            internalType: "struct DataTypes.EIP712Signature",
            name: "sig",
            type: "tuple",
          },
        ],
        internalType: "struct DataTypes.ToggleFollowWithSigData",
        name: "vars",
        type: "tuple",
      },
    ],
    name: "toggleFollowWithSig",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b5060405161124338038061124383398101604081905261002f91610040565b6001600160a01b0316608052610070565b60006020828403121561005257600080fd5b81516001600160a01b038116811461006957600080fd5b9392505050565b6080516111966100ad6000396000818160fc015281816102580152818161079d0152818161086d01528181610a270152610aca01526111966000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063a7698ac61161005b578063a7698ac614610136578063aa72c1ad14610149578063efe4fd831461015c578063f990ccd71461016f57600080fd5b80631bd7a4961461008d5780634f310384146100b6578063a3f4df7e146100cb578063a4c52b86146100f7575b600080fd5b6100a061009b366004610c0c565b61019d565b6040516100ad9190610c25565b60405180910390f35b6100c96100c4366004610c7a565b61023f565b005b6100a06040518060400160405280600d81526020016c4c656e7350657269706865727960981b81525081565b61011e7f000000000000000000000000000000000000000000000000000000000000000081565b6040516001600160a01b0390911681526020016100ad565b6100c9610144366004610d08565b6103b6565b6100c9610157366004610d74565b6103c9565b6100c961016a366004610daf565b610510565b61018f61017d366004610e40565b60006020819052908152604090205481565b6040519081526020016100ad565b60008181526001602052604090208054606091906101ba90610e5d565b80601f01602080910402602001604051908101604052809291908181526020018280546101e690610e5d565b80156102335780601f1061020857610100808354040283529160200191610233565b820191906000526020600020905b81548152906001019060200180831161021657829003601f168201915b50505050509050919050565b6040516331a9108f60e11b8152813560048201526000907f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa1580156102a7573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102cb9190610e98565b905061039b6103837fd46ddae52514a1aaf8b4d709742b061f33f2deaee1b2ecc97193734aa9c6e25f84356103036020870187610eb5565b604051610311929190610efc565b604080519182900382206001600160a01b038816600090815260208181529083902080546001810190915590840195909552908201929092526060810191909152608081019190915260a0858101359082015260c0015b60405160208183030381529060405280519060200120610529565b8261039636869003860160408701610f0c565b61062e565b506103b381356103ae6020840184610eb5565b610712565b50565b6103c3338585858561076d565b50505050565b6104e16104c27ecfb338e2b61ce79b6e570ede2bbd4588c3973904a7c46a87b69c09dfbd52096103fc6020850185610f8f565b60405160200161040d929190610fd9565b604051602081830303815290604052805190602001208480604001906104339190610f8f565b604051602001610444929190611013565b604051602081830303815290604052805190602001206000808760000160208101906104709190610e40565b6001600160a01b0316815260208082019290925260409081016000208054600181019091558151928301959095528101929092526060820152608081019190915260c08481013560a083015201610368565b6104cf6020840184610e40565b61039636859003850160608601610f0c565b6103b36104f16020830183610e40565b6104fe6020840184610f8f565b61050b6040860186610f8f565b61076d565b61051983610a11565b610524838383610712565b505050565b6000806105ef604080518082018252600d81526c4c656e7350657269706865727960981b60209182015281517f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f818301527f15755ebf4cd25adc855d8536ca663bff626d93da8b6f09dea8282fe714f22c4c818401527fc89efdaa54c0f20c7adf612882df0950f5a951637e0307cdcb4c672f298b8bc660608201524660808201523060a0808301919091528351808303909101815260c0909101909252815191012090565b60405161190160f01b602082015260228101919091526042810184905260620160408051601f1981840301815291905280516020909101209392505050565b428160600151101561065357604051630819bdcd60e01b815260040160405180910390fd5b60006001848360000151846020015185604001516040516000815260200160405260405161069d949392919093845260ff9290921660208401526040830152606082015260800190565b6020604051602081039080840390855afa1580156106bf573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811615806106f45750826001600160a01b0316816001600160a01b031614155b156103c3576040516337e8456b60e01b815260040160405180910390fd5b600083815260016020526040902061072b908383610b73565b50827ff901a8b3832914a45999dd4c425fbe42eb4182724d394100401e633d9f0b286a8383426040516107609392919061104e565b60405180910390a2505050565b82811461078d5760405163b7c1140d60e01b815260040160405180910390fd5b8260005b818110156109bf5760007f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031663a9ec65638888858181106107dc576107dc611087565b905060200201356040518263ffffffff1660e01b815260040161080191815260200190565b602060405180830381865afa15801561081e573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906108429190610e98565b90506001600160a01b03811661086b57604051636992d36b60e11b815260040160405180910390fd5b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316634f558e798888858181106108ac576108ac611087565b905060200201356040518263ffffffff1660e01b81526004016108d191815260200190565b602060405180830381865afa1580156108ee573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610912919061109d565b61092f5760405163677510db60e11b815260040160405180910390fd5b6040516370a0823160e01b81526001600160a01b0389811660048301528216906370a0823190602401602060405180830381865afa158015610975573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061099991906110ba565b6109b657604051636992d36b60e11b815260040160405180910390fd5b50600101610791565b50856001600160a01b03167f5538c80c8d3bee397d87a7d153f7f085bb12adf2fe25a026c7cc4e83d8c5f1d78686868642604051610a019594939291906110d3565b60405180910390a2505050505050565b6040516331a9108f60e11b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b031690636352211e90602401602060405180830381865afa158015610a76573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a9a9190610e98565b6001600160a01b0316336001600160a01b03161480610b52575060405163540528b960e01b8152600481018290527f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03169063540528b990602401602060405180830381865afa158015610b19573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610b3d9190610e98565b6001600160a01b0316336001600160a01b0316145b15610b5a5750565b60405163f33ac98f60e01b815260040160405180910390fd5b828054610b7f90610e5d565b90600052602060002090601f016020900481019282610ba15760008555610be7565b82601f10610bba5782800160ff19823516178555610be7565b82800160010185558215610be7579182015b82811115610be7578235825591602001919060010190610bcc565b50610bf3929150610bf7565b5090565b5b80821115610bf35760008155600101610bf8565b600060208284031215610c1e57600080fd5b5035919050565b600060208083528351808285015260005b81811015610c5257858101830151858201604001528201610c36565b81811115610c64576000604083870101525b50601f01601f1916929092016040019392505050565b600060208284031215610c8c57600080fd5b813567ffffffffffffffff811115610ca357600080fd5b820160c08185031215610cb557600080fd5b9392505050565b60008083601f840112610cce57600080fd5b50813567ffffffffffffffff811115610ce657600080fd5b6020830191508360208260051b8501011115610d0157600080fd5b9250929050565b60008060008060408587031215610d1e57600080fd5b843567ffffffffffffffff80821115610d3657600080fd5b610d4288838901610cbc565b90965094506020870135915080821115610d5b57600080fd5b50610d6887828801610cbc565b95989497509550505050565b600060208284031215610d8657600080fd5b813567ffffffffffffffff811115610d9d57600080fd5b820160e08185031215610cb557600080fd5b600080600060408486031215610dc457600080fd5b83359250602084013567ffffffffffffffff80821115610de357600080fd5b818601915086601f830112610df757600080fd5b813581811115610e0657600080fd5b876020828501011115610e1857600080fd5b6020830194508093505050509250925092565b6001600160a01b03811681146103b357600080fd5b600060208284031215610e5257600080fd5b8135610cb581610e2b565b600181811c90821680610e7157607f821691505b60208210811415610e9257634e487b7160e01b600052602260045260246000fd5b50919050565b600060208284031215610eaa57600080fd5b8151610cb581610e2b565b6000808335601e19843603018112610ecc57600080fd5b83018035915067ffffffffffffffff821115610ee757600080fd5b602001915036819003821315610d0157600080fd5b8183823760009101908152919050565b600060808284031215610f1e57600080fd5b6040516080810181811067ffffffffffffffff82111715610f4f57634e487b7160e01b600052604160045260246000fd5b604052823560ff81168114610f6357600080fd5b808252506020830135602082015260408301356040820152606083013560608201528091505092915050565b6000808335601e19843603018112610fa657600080fd5b83018035915067ffffffffffffffff821115610fc157600080fd5b6020019150600581901b3603821315610d0157600080fd5b60006001600160fb1b03831115610fef57600080fd5b8260051b80858437600092019182525092915050565b80151581146103b357600080fd5b60008184825b8581101561104357813561102c81611005565b151583526020928301929190910190600101611019565b509095945050505050565b604081528260408201528284606083013760006060848301015260006060601f19601f8601168301019050826020830152949350505050565b634e487b7160e01b600052603260045260246000fd5b6000602082840312156110af57600080fd5b8151610cb581611005565b6000602082840312156110cc57600080fd5b5051919050565b6060808252810185905260006001600160fb1b038611156110f357600080fd5b8560051b8088608085013760809083018381038201602080860191909152918101869052869160009160a0015b8783101561114957833561113381611005565b1515815292810192600192909201918101611120565b80945050505050826040830152969550505050505056fea26469706673582212206e44208f7bfd7b2f4f7ba272951b02c3f5f11fb333c11c2d97d90f3db0170ef264736f6c634300080a0033";

type LensPeripheryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: LensPeripheryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class LensPeriphery__factory extends ContractFactory {
  constructor(...args: LensPeripheryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<LensPeriphery> {
    return super.deploy(hub, overrides || {}) as Promise<LensPeriphery>;
  }
  getDeployTransaction(
    hub: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(hub, overrides || {});
  }
  attach(address: string): LensPeriphery {
    return super.attach(address) as LensPeriphery;
  }
  connect(signer: Signer): LensPeriphery__factory {
    return super.connect(signer) as LensPeriphery__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): LensPeripheryInterface {
    return new utils.Interface(_abi) as LensPeripheryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): LensPeriphery {
    return new Contract(address, _abi, signerOrProvider) as LensPeriphery;
  }
}
