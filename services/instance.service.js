require('dotenv').config({ path: './.env' });
const { ethers } = require('hardhat');

class Instance {
	constructor(provider, contractAddress, jsonPath, privateKey) {
		this.provider = provider;
		this.contractAddress = contractAddress;
		this.jsonPath = require(jsonPath);
		this.wallet = new ethers.Wallet(privateKey);
		this.signer = this.wallet.connect(provider);
		this.contract = new ethers.Contract(
			this.contractAddress,
			this.jsonPath.abi,
			this.signer
		);
	}
}

module.exports = Instance;
