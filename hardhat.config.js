require('@nomicfoundation/hardhat-toolbox');
require('hardhat-gas-reporter');
require('hardhat-storage-layout');
require('dotenv').config({ path: './.env' });

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
	solidity: '0.8.17',
	networks: {
		localhost: {
			url: 'localhost:8545',
		},
		mumbai: {
			url: process.env.RPC_URL,
			accounts: [process.env.PRIVATE_KEY],
		},
	},
	gasReporter: {
		enabled: true,
		currency: 'EUR',
		gasPrice: 27,
	},
};
