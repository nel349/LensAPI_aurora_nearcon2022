import { HardhatUserConfig } from 'hardhat/types';
// import { accounts } from './helpers/test-wallets';
import {
  eAuroraNetwork,
  eEthereumNetwork,
  eNetwork,
  ePolygonNetwork,
  eXDaiNetwork,
} from './helpers/types';
import { HARDHATEVM_CHAINID } from './helpers/hardhat-constants';
import { NETWORKS_RPC_URL } from './helper-hardhat-config';
import dotenv from 'dotenv';
import glob from 'glob';
import path from 'path';
dotenv.config({ path: '../.env' });

import '@nomiclabs/hardhat-ethers';
import '@nomiclabs/hardhat-etherscan';
import '@typechain/hardhat';
import 'solidity-coverage';
import 'hardhat-gas-reporter';
import 'hardhat-contract-sizer';
import 'hardhat-log-remover';
import 'hardhat-spdx-license-identifier';

if (!process.env.SKIP_LOAD) {
  glob.sync('./tasks/**/*.ts').forEach(function (file) {
    require(path.resolve(file));
  });
}

const MNEMONIC_PATH = "m/44'/60'/0'/0";
const MNEMONIC = process.env.MNEMONIC || '';
const AURORA_PRIVATE_KEY_DEPLOYER =
  'd4abcd74037655fb5485ff18a75ab65f52259ea77f35ef9f0508b22dd21a488b';
const MAINNET_FORK = process.env.MAINNET_FORK === 'true';
const TRACK_GAS = process.env.TRACK_GAS === 'true';
const BLOCK_EXPLORER_KEY = process.env.BLOCK_EXPLORER_KEY || '';

const getCommonNetworkConfig = (networkName: eNetwork, networkId: number) => ({
  url: 'https://testnet.aurora.dev' ?? '',
  accounts: [`0x${AURORA_PRIVATE_KEY_DEPLOYER}`],
});

// const mainnetFork = MAINNET_FORK
//   ? {
//       blockNumber: 12012081,
//       url: NETWORKS_RPC_URL['main'],
//     }
//   : undefined;

const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.8.10',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200,
            details: {
              yul: true,
            },
          },
        },
      },
    ],
  },
  networks: {
    // kovan: getCommonNetworkConfig(eEthereumNetwork.kovan, 42),
    // ropsten: getCommonNetworkConfig(eEthereumNetwork.ropsten, 3),
    // main: getCommonNetworkConfig(eEthereumNetwork.main, 1),
    // tenderlyMain: getCommonNetworkConfig(eEthereumNetwork.tenderlyMain, 3030),
    // matic: getCommonNetworkConfig(ePolygonNetwork.matic, 137),
    // mumbai: getCommonNetworkConfig(ePolygonNetwork.mumbai, 80001),
    // xdai: getCommonNetworkConfig(eXDaiNetwork.xdai, 100),
    aurora: getCommonNetworkConfig(eAuroraNetwork.testnet, 1313161555),
    // hardhat: {
    //   hardfork: 'london',
    //   blockGasLimit: DEFAULT_BLOCK_GAS_LIMIT,
    //   gas: DEFAULT_BLOCK_GAS_LIMIT,
    //   gasPrice: 8000000000,
    //   chainId: HARDHATEVM_CHAINID,
    //   throwOnTransactionFailures: true,
    //   throwOnCallFailures: true,
    //   accounts: accounts.map(({ secretKey, balance }: { secretKey: string; balance: string }) => ({
    //     privateKey: secretKey,
    //     balance,
    //   })),
    //   forking: mainnetFork,
    // },
  },
  gasReporter: {
    enabled: TRACK_GAS,
  },
  spdxLicenseIdentifier: {
    overwrite: false,
    runOnCompile: false,
  },
  etherscan: {
    apiKey: BLOCK_EXPLORER_KEY,
  },
};

export default config;
