#!/Usr/Bin/Node

import { ethers, BigNumberish } from 'ethers';
import { ZERO_ADDRESS } from '../tasks/helpers/utils';
import { CreateProfileDataStruct, LensHub__factory } from '../typechain-types';
import { ProfileStructStructOutput } from '../typechain-types/LensHub';
import { getAddrs } from './utils';

export const AURORA_PRIVATE_KEY_DEPLOYER =
  'd4abcd74037655fb5485ff18a75ab65f52259ea77f35ef9f0508b22dd21a488b';
export const AURORA_PRIVATE_KEY_GOVERNANCE =
  '663795105f71222821e79726ce9996499a23df217a34064e9cf0ca0945eca6b5';
export const AURORA_PRIVATE_KEY_TREASURY =
  '4e66a085329332b402ec619ad2aab6d713c5495bba6f553e13b5170270fbfbcc';

export const AURORA_USER1 = '80931c176dc1ced5a8a6086219ed9dd9d16848740330d8616f4775603f5d132d';

export const getWallets = () => {
  const url = 'https://testnet.aurora.dev';
  const customHttpProvider = new ethers.providers.JsonRpcProvider(url);
  // const web3Provider = ethers.providers.Web3Provider(customHttpProvider);
  const deployerWallet = new ethers.Wallet(AURORA_PRIVATE_KEY_DEPLOYER, customHttpProvider);

  const treasuryWallet = new ethers.Wallet(AURORA_PRIVATE_KEY_TREASURY, customHttpProvider);
  const governanceWallet = new ethers.Wallet(AURORA_PRIVATE_KEY_GOVERNANCE, customHttpProvider);
  const user1 = new ethers.Wallet(AURORA_USER1, customHttpProvider);
  // console.log('deployer: ' + deployerWallet.address);
  // console.log('treasuryWallet: ' + treasuryWallet.address);
  // console.log('governanceWallet: ' + governanceWallet.address);
  // console.log('user1: ' + user1.address);

  return { deployerWallet, treasuryWallet, governanceWallet, user1 };
};

export const createProfile = async (handle: string) => {
  const { governanceWallet, user1 } = getWallets();

  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governanceWallet);
  // await waitForTx(lensHub.whitelistProfileCreator(user1.address, true));

  // console.log('Here A');

  // handle = 'handle122121129';
  const inputStruct: CreateProfileDataStruct = {
    to: user1.address,
    handle: handle,
    imageURI: 'https://ipfs.io/ipfs/QmY9dUwYu67puaWBMxRKW98LPbXCznPwHUbhX5NeWnCJbX',
    followModule: ZERO_ADDRESS,
    followModuleInitData: [],
    followNFTURI: 'https://ipfs.io/ipfs/QmTFLSXdEQ6qsSzaXaCSNtiv6wA56qq87ytXJ182dXDQJS',
  };

  // console.log('Here B');

  try {
    await lensHub.connect(user1).createProfile(inputStruct);
  } catch (e: unknown) {
    console.log('error: ' + e);
  }

  // console.log('createProfile!!! contractTransaction: ' + JSON.stringify(contractTransaction));
  // console.log('createProfile!!! hash: ' + contractTransaction.hash);
  // const profileOwner = await lensHub.ownerOf(1);
  // const profileIdByHandle = await lensHub.getProfileIdByHandle(handle);
  // console.log(`Profile Id by handle: ${handle} ` + profileIdByHandle);
  // console.log(`Total supply (should be ?): ${await lensHub.totalSupply()}`);
  // return { hash: contractTransaction.hash };
};

export const whitelistUser = async (address: string) => {
  const { governanceWallet } = getWallets();

  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governanceWallet);
  await lensHub.whitelistProfileCreator(address, true);
};

export const setDefaultProfile = async (profileId: BigNumberish) => {
  const { governanceWallet, user1 } = getWallets();

  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governanceWallet);
  await lensHub.connect(user1).setDefaultProfile(profileId);
};

export const getDefaultProfileId = async (address: string) => {
  const { governanceWallet, user1 } = getWallets();

  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governanceWallet);
  return await lensHub.connect(user1).defaultProfile(address);
};

export const getDefaultProfile = async (address: string): Promise<ProfileStructStructOutput> => {
  const { governanceWallet, user1 } = getWallets();

  const addrs = getAddrs();
  const lensHub = LensHub__factory.connect(addrs['lensHub proxy'], governanceWallet);
  const defaultProfileId = await lensHub.connect(user1).defaultProfile(address);
  return await lensHub.connect(user1).getProfile(defaultProfileId);
};

// createProfile('');

// const { user1 } = getWallets();

// async function main(): Promise<void> {
//   setDefaultProfile(16);
//   const currentProfileId = await getDefaultProfileId(user1.address);
//   console.log('Set default profileId to ' + currentProfileId);
// }

// main();
