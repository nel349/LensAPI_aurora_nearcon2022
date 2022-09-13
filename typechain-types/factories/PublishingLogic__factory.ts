/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PublishingLogic,
  PublishingLogicInterface,
} from "../PublishingLogic";

const _abi = [
  {
    inputs: [],
    name: "CannotCommentOnSelf",
    type: "error",
  },
  {
    inputs: [],
    name: "CollectModuleNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "FollowModuleNotWhitelisted",
    type: "error",
  },
  {
    inputs: [],
    name: "HandleContainsInvalidCharacters",
    type: "error",
  },
  {
    inputs: [],
    name: "HandleLengthInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "HandleTaken",
    type: "error",
  },
  {
    inputs: [],
    name: "ProfileImageURILengthInvalid",
    type: "error",
  },
  {
    inputs: [],
    name: "PublicationDoesNotExist",
    type: "error",
  },
  {
    inputs: [],
    name: "ReferenceModuleNotWhitelisted",
    type: "error",
  },
];

const _bytecode =
  "0x61182b61003a600b82828239805160001a60731461002d57634e487b7160e01b600052600060045260246000fd5b30600052607381538281f3fe73000000000000000000000000000000000000000030146080604052600436106100615760003560e01c80636a7ecf1314610066578063764e3e93146100885780637ecf4cde146100a85780639dbf0510146100c8578063e63aa93e146100e8575b600080fd5b81801561007257600080fd5b50610086610081366004610eea565b610108565b005b81801561009457600080fd5b506100866100a3366004611095565b6101d9565b8180156100b457600080fd5b506100866100c336600461116c565b610333565b8180156100d457600080fd5b506100866100e33660046111ce565b610539565b8180156100f457600080fd5b506100866101033660046112aa565b6105da565b60018201546001600160a01b0386811691161461013d576001820180546001600160a01b0319166001600160a01b0387161790555b60606001600160a01b0386161561019457610191878787878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508892506107b8915050565b90505b867f92d95e400932d129885e627b38b169cbb28443ffaaa282d0fba0cf87977213598783426040516101c89392919061144c565b60405180910390a250505050505050565b6000806101ef8660200151876040015186610872565b5087516000908152602087815260408083208a845282528083208590558a5183528882528083208a84529091528120600101829055885160808a015160a08b015194965092945090926102459289918989610934565b6000848152602087815260408083208684529091529020600301549091506001600160a01b031680156102da57875160608901516040516315ee956160e21b81526001600160a01b038416926357ba5584926102a79289918991600401611480565b600060405180830381600087803b1580156102c157600080fd5b505af11580156102d5573d6000803e3d6000fd5b505050505b8688600001517f9ea5dedb85bd9da4e264ee5a39b7ba0982e5d4d035d55edfa98a36b00e770b5a86868c606001518d608001518842604051610321969594939291906114a5565b60405180910390a35050505050505050565b61034861034360208701876114f9565b610a42565b61177061035860408701876114f9565b905011156103795760405163781548c760e01b815260040160405180910390fd5b600061038860208701876114f9565b604051610396929190611547565b60405180910390209050836000828152602001908152602001600020546000146103d35760405163902815b960e01b815260040160405180910390fd5b6000818152602085815260409091208690556103f1908701876114f9565b600087815260208690526040902061040e92600390910191610dc1565b5061041c60408701876114f9565b600087815260208690526040902061043992600490910191610dc1565b5061044760a08701876114f9565b600087815260208690526040902061046492600590910191610dc1565b506060600061047860808901898401611557565b6001600160a01b031614610525576104966080880160608901611557565b600087815260208690526040902060010180546001600160a01b0319166001600160a01b0392909216919091179055610522866104d960808a0160608b01611557565b6104e660808b018b6114f9565b8080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152508992506107b8915050565b90505b610530868883610c2a565b50505050505050565b60008a81526020848152604080832087845282529091208a51610564926002909201918c0190610e45565b5060006105758b868b8b8888610cbe565b905060006105878c878a8a8988610934565b9050858c7fc672c38b4d26c3c978228e99164105280410b144af24dd3ed8e4f9d211d96a508d8d868d87426040516105c496959493929190611579565b60405180910390a3505050505050505050505050565b604080870151600090815260208690522054606087015181108061060057506060870151155b1561061e5760405163a43d2a7160e01b815260040160405180910390fd5b604087015187511480156106355750858760600151145b1561065357604051630a56cfc960e21b815260040160405180910390fd5b6020808801518851600090815286835260408082208a83528452902081516106849360029092019290910190610e45565b506040808801518851600090815260208781528382208a835281528382209290925560608a01518a5182528783528382208a835290925291822060010155875160a089015160c08a01516106dc92918a918989610cbe565b905060006106fb8960000151898b60e001518c61010001518a89610934565b6040808b01516000908152602089815282822060608e01518352905220600301549091506001600160a01b031680156107a05789516040808c015160608d015160808e01519251635141859760e11b81526001600160a01b0386169463a2830b2e9461076d9491939192600401611480565b600060405180830381600087803b15801561078757600080fd5b505af115801561079b573d6000803e3d6000fd5b505050505b6107ac8a8a8585610d56565b50505050505050505050565b6001600160a01b03831660009081526020829052604090205460609060ff166107f45760405163efb6a45f60e01b815260040160405180910390fd5b604051634b89cac560e11b81526001600160a01b03851690639713958a9061082290889087906004016115ca565b6000604051808303816000875af1158015610841573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f1916820160405261086991908101906115eb565b95945050505050565b600083815260208281526040808320858452909152812060040154819081906001600160a01b031680156108ad57869350859250905061092b565b600087815260208681526040808320898452909152902054806108e35760405163a43d2a7160e01b815260040160405180910390fd5b6000888152602087815260408083208a84528252808320600101548484528983528184208185529092529091206004015491955093506001600160a01b0316915061092b9050565b93509350939050565b60606001600160a01b0385166109595750604080516000815260208101909152610a38565b6001600160a01b03851660009081526020839052604090205460ff16610992576040516355bdf4ef60e11b815260040160405180910390fd5b6000878152602084815260408083208984529091529081902060030180546001600160a01b0319166001600160a01b0388169081179091559051632b00a57d60e11b81526356014afa906109ee908a908a908990600401611659565b6000604051808303816000875af1158015610a0d573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f19168201604052610a3591908101906115eb565b90505b9695505050505050565b600082828080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250508251929350509015905080610a8e57508051601f105b15610aac57604051633eb64ab360e01b815260040160405180910390fd5b805160005b81811015610c2357600360fc1b838281518110610ad057610ad0611678565b01602001516001600160f81b0319161080610b0e5750603d60f91b838281518110610afd57610afd611678565b01602001516001600160f81b031916115b80610b6a5750603960f81b838281518110610b2b57610b2b611678565b01602001516001600160f81b031916118015610b6a5750606160f81b838281518110610b5957610b59611678565b01602001516001600160f81b031916105b8015610b9b5750828181518110610b8357610b83611678565b6020910101516001600160f81b031916601760f91b14155b8015610bcc5750828181518110610bb457610bb4611678565b6020910101516001600160f81b031916602d60f81b14155b8015610bfd5750828181518110610be557610be5611678565b6020910101516001600160f81b031916605f60f81b14155b15610c1b57604051630bb7f19b60e21b815260040160405180910390fd5b600101610ab1565b5050505050565b610c376020830183611557565b6001600160a01b031633847f4e14f57cff7910416f2ef43cf05019b5a97a313de71fec9344be11b9b88fed12610c7060208701876114f9565b610c7d60408901896114f9565b610c8d60808b0160608c01611557565b89610c9b60a08d018d6114f9565b42604051610cb1999897969594939291906116b7565b60405180910390a4505050565b6001600160a01b03841660009081526020829052604090205460609060ff16610cfa576040516396c65af360e01b815260040160405180910390fd5b60008781526020848152604080832089845290915290819020600490810180546001600160a01b0319166001600160a01b038916908117909155915163c233f95160e01b815263c233f951916109ee918b918b918a9101611659565b8284600001517f7b4d1aa33773161799847429e4fbf29f56dbf1a3fe815f5070231cbfba402c3786602001518760400151886060015189608001518a60a00151898c60e001518a42604051610db39998979695949392919061172d565b60405180910390a350505050565b828054610dcd906117ba565b90600052602060002090601f016020900481019282610def5760008555610e35565b82601f10610e085782800160ff19823516178555610e35565b82800160010185558215610e35579182015b82811115610e35578235825591602001919060010190610e1a565b50610e41929150610eb9565b5090565b828054610e51906117ba565b90600052602060002090601f016020900481019282610e735760008555610e35565b82601f10610e8c57805160ff1916838001178555610e35565b82800160010185558215610e35579182015b82811115610e35578251825591602001919060010190610e9e565b5b80821115610e415760008155600101610eba565b80356001600160a01b0381168114610ee557600080fd5b919050565b60008060008060008060a08789031215610f0357600080fd5b86359550610f1360208801610ece565b9450604087013567ffffffffffffffff80821115610f3057600080fd5b818901915089601f830112610f4457600080fd5b813581811115610f5357600080fd5b8a6020828501011115610f6557600080fd5b979a9699505060200196606081013595608090910135945092505050565b634e487b7160e01b600052604160045260246000fd5b60405160c0810167ffffffffffffffff81118282101715610fbc57610fbc610f83565b60405290565b604051610120810167ffffffffffffffff81118282101715610fbc57610fbc610f83565b604051601f8201601f1916810167ffffffffffffffff8111828210171561100f5761100f610f83565b604052919050565b600067ffffffffffffffff82111561103157611031610f83565b50601f01601f191660200190565b600082601f83011261105057600080fd5b813561106361105e82611017565b610fe6565b81815284602083860101111561107857600080fd5b816020850160208301376000918101602001919091529392505050565b600080600080608085870312156110ab57600080fd5b843567ffffffffffffffff808211156110c357600080fd5b9086019060c082890312156110d757600080fd5b6110df610f99565b82358152602083013560208201526040830135604082015260608301358281111561110957600080fd5b6111158a82860161103f565b60608301525061112760808401610ece565b608082015260a08301358281111561113e57600080fd5b61114a8a82860161103f565b60a0830152509860208801359850604088013597606001359650945050505050565b600080600080600060a0868803121561118457600080fd5b853567ffffffffffffffff81111561119b57600080fd5b860160c081890312156111ad57600080fd5b97602087013597506040870135966060810135965060800135945092505050565b6000806000806000806000806000806101408b8d0312156111ee57600080fd5b8a35995060208b013567ffffffffffffffff8082111561120d57600080fd5b6112198e838f0161103f565b9a5061122760408e01610ece565b995060608d013591508082111561123d57600080fd5b6112498e838f0161103f565b985061125760808e01610ece565b975060a08d013591508082111561126d57600080fd5b5061127a8d828e0161103f565b95505060c08b0135935060e08b013592506101008b013591506101208b013590509295989b9194979a5092959850565b60008060008060008060c087890312156112c357600080fd5b863567ffffffffffffffff808211156112db57600080fd5b90880190610120828b0312156112f057600080fd5b6112f8610fc2565b8235815260208301358281111561130e57600080fd5b61131a8c82860161103f565b602083015250604083013560408201526060830135606082015260808301358281111561134657600080fd5b6113528c82860161103f565b60808301525061136460a08401610ece565b60a082015260c08301358281111561137b57600080fd5b6113878c82860161103f565b60c08301525061139960e08401610ece565b60e082015261010080840135838111156113b257600080fd5b6113be8d82870161103f565b91830191909152509a60208a01359a5060408a013599606081013599506080810135985060a001359650945050505050565b60005b8381101561140b5781810151838201526020016113f3565b8381111561141a576000848401525b50505050565b600081518084526114388160208601602086016113f0565b601f01601f19169290920160200192915050565b6001600160a01b038416815260606020820181905260009061147090830185611420565b9050826040830152949350505050565b848152836020820152826040820152608060608201526000610a386080830184611420565b86815285602082015260c0604082015260006114c460c0830187611420565b6001600160a01b038616606084015282810360808401526114e58186611420565b9150508260a0830152979650505050505050565b6000808335601e1984360301811261151057600080fd5b83018035915067ffffffffffffffff82111561152b57600080fd5b60200191503681900382131561154057600080fd5b9250929050565b8183823760009101908152919050565b60006020828403121561156957600080fd5b61157282610ece565b9392505050565b60c08152600061158c60c0830189611420565b6001600160a01b03888116602085015283820360408501526115ae8289611420565b9087166060850152838103608085015290506114e58186611420565b8281526040602082015260006115e36040830184611420565b949350505050565b6000602082840312156115fd57600080fd5b815167ffffffffffffffff81111561161457600080fd5b8201601f8101841361162557600080fd5b805161163361105e82611017565b81815285602083850101111561164857600080fd5b6108698260208301602086016113f0565b8381528260208201526060604082015260006108696060830184611420565b634e487b7160e01b600052603260045260246000fd5b81835281816020850137506000828201602090810191909152601f909101601f19169091010190565b60c0815260006116cb60c083018b8d61168e565b82810360208401526116de818a8c61168e565b6001600160a01b0389166040850152838103606085015290506117018188611420565b9050828103608084015261171681868861168e565b9150508260a08301529a9950505050505050505050565b60006101208083526117418184018d611420565b90508a60208401528960408401528281036060840152611761818a611420565b6001600160a01b03898116608086015284820360a08601529091506117868289611420565b90871660c085015283810360e085015290506117a28186611420565b915050826101008301529a9950505050505050505050565b600181811c908216806117ce57607f821691505b602082108114156117ef57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212207ee03f5f7b34f6c20796b4224ceeadab5254220108375ae06c1efad960f45caa64736f6c634300080a0033";

type PublishingLogicConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PublishingLogicConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PublishingLogic__factory extends ContractFactory {
  constructor(...args: PublishingLogicConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PublishingLogic> {
    return super.deploy(overrides || {}) as Promise<PublishingLogic>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): PublishingLogic {
    return super.attach(address) as PublishingLogic;
  }
  connect(signer: Signer): PublishingLogic__factory {
    return super.connect(signer) as PublishingLogic__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PublishingLogicInterface {
    return new utils.Interface(_abi) as PublishingLogicInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PublishingLogic {
    return new Contract(address, _abi, signerOrProvider) as PublishingLogic;
  }
}
