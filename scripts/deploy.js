const hre = require('hardhat');

async function main() {
	const Oracle = await hre.ethers.getContractFactory('Oracle');
	const contract = await Oracle.deploy();

	await contract.deployed();

	console.log(`Contract deployed: ${contract.address}`);
}

main().catch((error) => {
	console.error(error);
	process.exitCode = 1;
});
