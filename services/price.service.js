const axios = require('axios');
const API = axios.create({
	baseURL: 'https://api.wazirx.com/sapi/v1/tickers/24hr',
});

class PriceService {
	static async getPrice(symbol) {
		const { data } = await API.get();
		const result = data.filter((obj) => {
			return obj.symbol === symbol;
		});
		const price = result[0].openPrice;
		return price;
	}
}

module.exports = PriceService;
