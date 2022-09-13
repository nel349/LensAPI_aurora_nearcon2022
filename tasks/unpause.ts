import { task } from 'hardhat/config';
import { LensHub__factory } from '../typechain-types';
import { ProtocolState, waitForTx, initEnv, getAddrs } from './helpers/utils';
import { ethers } from 'ethers';

export const AURORA_PRIVATE_KEY_DEPLOYER =
  '0xd4abcd74037655fb5485ff18a75ab65f52259ea77f35ef9f0508b22dd21a488b';
export const AURORA_PRIVATE_KEY_GOVERNANCE =
  '0x663795105f71222821e79726ce9996499a23df217a34064e9cf0ca0945eca6b5';
export const AURORA_PRIVATE_KEY_TREASURY =
  '0x4e66a085329332b402ec619ad2aab6d713c5495bba6f553e13b5170270fbfbcc';

export const AURORA_USER1 = '0x80931c176dc1ced5a8a6086219ed9dd9d16848740330d8616f4775603f5d132d';

const testnet_aurora = {
  name: 'testnet_aurora',
  chainId: 1313161555,
};

const DEFAULT_BLOCK_GAS_LIMIT = 12450000;

task('unpause', 'unpauses the protocol').setAction(async ({}, hre) => {
  // const [governanceWallet] = await initEnv(hre);

  const url = 'https://testnet.aurora.dev';
  const customHttpProvider = new ethers.providers.JsonRpcProvider(url, testnet_aurora);

  const governanceWallet = new ethers.Wallet(AURORA_PRIVATE_KEY_GOVERNANCE, customHttpProvider);

  const addrs = getAddrs();
  //   console.log('addresses: ', addrs);
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governanceWallet);
  console.log(await lensHub.getState());
  await waitForTx(lensHub.setState(ProtocolState.Unpaused));
  console.log(await lensHub.getState());
});
