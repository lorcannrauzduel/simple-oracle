const { expect } = require('chai');
const PriceService = require('../services/price.service');

describe('Oracle', function () {
	let contract, wallet;

	async function getContract() {
		const Oracle = await ethers.getContractFactory('Oracle');
		const oracle = await Oracle.deploy();
		await oracle.deployed();
		return oracle;
	}

	beforeEach(async () => {
		contract = await getContract();
		wallet = ethers.provider.getSigner(0);
	});

	it('Should set the right price', async function () {
		const priceFetchedByApi = await PriceService.getPrice('btcusdt');
		const tx = await contract.updateBTCPrice(priceFetchedByApi, {
			from: wallet.address,
		});
		await tx.wait();
		const newPriceUpdated = await contract.btcPrice();
		expect(newPriceUpdated).to.equal(priceFetchedByApi);
	});
});
