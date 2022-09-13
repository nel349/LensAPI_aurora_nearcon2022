// import '@nomiclabs/hardhat-ethers';
// import { SignerWithAddress } from '@nomiclabs/hardhat-ethers/signers';
import { Contract, ContractTransaction, Wallet } from 'ethers';
import fs from 'fs';
import { HardhatRuntimeEnvironment } from 'hardhat/types';

export const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';

const AURORA_PRIVATE_KEY_DEPLOYER =
  'd4abcd74037655fb5485ff18a75ab65f52259ea77f35ef9f0508b22dd21a488b';
const AURORA_PRIVATE_KEY_GOVERNANCE =
  '663795105f71222821e79726ce9996499a23df217a34064e9cf0ca0945eca6b5';
const AURORA_PRIVATE_KEY_TREASURY =
  '4e66a085329332b402ec619ad2aab6d713c5495bba6f553e13b5170270fbfbcc';

const AURORA_USER1 = '80931c176dc1ced5a8a6086219ed9dd9d16848740330d8616f4775603f5d132d';

export enum ProtocolState {
  Unpaused,
  PublishingPaused,
  Paused,
}

export function getAddrs(): any {
  const json = fs.readFileSync('addresses.json', 'utf8');
  const addrs = JSON.parse(json);
  return addrs;
}

export async function waitForTx(tx: Promise<ContractTransaction>) {
  await (await tx).wait();
}

export async function deployContract(tx: any): Promise<Contract> {
  const result = await tx;
  await result.deployTransaction.wait();
  return result;
}

export async function deployWithVerify(
  tx: any,
  args: any,
  contractPath: string
): Promise<Contract> {
  const deployedContract = await deployContract(tx);
  // let count = 0;
  // const maxTries = 8;
  // const runtimeHRE = require('hardhat');
  // while (true) {
  //   await delay(10000);
  //   try {
  //     console.log('Verifying contract at', deployedContract.address);
  //     await runtimeHRE.run('verify:verify', {
  //       address: deployedContract.address,
  //       constructorArguments: args,
  //       contract: contractPath,
  //     });
  //     break;
  //   } catch (error) {
  //     if (String(error).includes('Already Verified')) {
  //       console.log(
  //         `Already verified contract at ${contractPath} at address ${deployedContract.address}`
  //       );
  //       break;
  //     }
  //     if (++count == maxTries) {
  //       console.log(
  //         `Failed to verify contract at ${contractPath} at address ${deployedContract.address}, error: ${error}`
  //       );
  //       break;
  //     }
  //     console.log(`Retrying... Retry #${count}, last error: ${error}`);
  //   }
  // }

  return deployedContract;
}

export async function initEnv(hre: HardhatRuntimeEnvironment): Promise<Wallet[]> {
  const ethers = hre.ethers; // This allows us to access the hre (Hardhat runtime environment)'s injected ethers instance easily

  const provider = hre.ethers.provider;
  const deployerWallet = new hre.ethers.Wallet(`0x${AURORA_PRIVATE_KEY_DEPLOYER}`, provider);
  const treasuryWallet = new hre.ethers.Wallet(`0x${AURORA_PRIVATE_KEY_TREASURY}`, provider);
  const governanceWallet = new hre.ethers.Wallet(AURORA_PRIVATE_KEY_GOVERNANCE, provider);
  const user1 = new hre.ethers.Wallet(AURORA_USER1, provider);

  // const accounts = await ethers.getSigners(); // This returns an array of the default signers connected to the hre's ethers instance
  // const governance = governanceWallet;
  // const treasury = treasuryWallet;
  // const user = accounts[3];

  return [governanceWallet, treasuryWallet, user1];
}

async function delay(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
