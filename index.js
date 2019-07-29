const Mpesa = require('mpesa-node')

const mpesaApi = new Mpesa(
	{consumerKey:'JER2Plhmh6hPJHDv',
	consumerSecret:'JER2Plhmh6hPJHDv',
	environment:'sandbox'})

const {lipaNaMpesaOnline} = mpesaApi
const accountRef = Math.random().toString(35).substr(2,7)

mpesaApi.lipaNaMpesaOnline(
	254728506930,
	1,
	'/wasf.com',
	accountRef
	)
	
	.then((result)=>{
		console.log(result.status)

	})

	.catch((err)=>{
		if (err){
			console.error(err)
		}

	})