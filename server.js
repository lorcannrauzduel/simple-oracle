require('dotenv').config({ path: './.env' });
const { ethers } = require('hardhat');
const express = require('express');
const app = express();
const InstanceService = require('./services/instance.service');
const PriceService = require('./services/price.service');
const { RPC_URL, ORACLE_ADDRESS, JSON_PATH, PRIVATE_KEY } = require('./config');
const provider = new ethers.providers.WebSocketProvider(RPC_URL);

const oracleInstance = new InstanceService(
	provider,
	ORACLE_ADDRESS,
	JSON_PATH,
	PRIVATE_KEY
).contract;

oracleInstance.on('NewPrice', async (event) => {
	console.log('Listen emission of NewPrice');
	const price = await PriceService.getPrice('btcusdt');
	console.log('New price fetched: ', price);
	const tx = await oracleContract.updateBTCPrice(price, {
		from: wallet.address,
	});
	await tx.wait();
	const newPriceUpdated = await oracleContract.btcPrice();
	console.log('Price updated: ', newPriceUpdated);
});

app.listen(process.env.PORT, () => {
	console.log(`Oracle is running`);
});
