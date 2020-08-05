const SwarmBOSNFT = artifacts.require("SwarmBOSNFT");

const Mustache = require('mustache');
const fs = require('fs');
const moment = require('moment-timezone');
const FormData = require('form-data');

const axios = require('axios');

const template = fs.readFileSync('../token-files/bos.txt', {encoding: 'utf8'});

const input = require('../inputs/bos.json');

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let mintArtifact = (address, tokenID) => {
	return new Promise((resolve, reject) => {

		const t = moment.utc().format('MMMM Do YYYY, h:mm:ss a z');

		const view = {
		  address: address,
		  time: t,
		  tokenID: tokenID
		};

		const filename = 'peace-'+tokenID+'.nfo';

		const output = Mustache.render(template, view);

		fs.writeFileSync('./artifacts/'+filename, output)

	    const config = {
	    	headers: {
	        	'Content-Length': output.length,
	        	'Content-Type': 'text/plain'
	    	}
	    };

	    console.log('\n' + output + '\n' + '\n');

	    rl.question("Create Swarm Artifact? y/n ", (answer) => {
	    	if(answer === 'y'){
	    		console.log('sending request to gateway...')

				const formData = new FormData();
				formData.append(filename, fs.readFileSync('./artifacts/'+filename));
				console.log(formData)
				axios({
				  url: 'https://gateway.ethswarm.org/files?name='+filename,
				  method: 'POST',
				  data: formData,
				  headers: {
				    ...formData.getHeaders()
				  },
				}).then((response)=>{
					console.log('created, reference:', response.data.reference);
					resolve(response.data.reference);
				}).catch((error)=>{
	    			console.log('error minting:', address, id);
	    			reject(error);
				});
	    	}else{
	    		console.log('did not mint');
	    		return false;
	    	}
	    });
	});
};

let mintToken = async (address, tokenID, reference) => {
	let SwarmBOSNFTInstance = await SwarmBOSNFT.deployed();
    try {
        const uri = 'bzz/' + reference;
        await SwarmBOSNFTInstance.mintToken(address, tokenID, uri);
        console.log(tokenID, 'has been minted for', address);
        let res = await SwarmBOSNFTInstance.balanceOf(address);
        console.log('NFT BOS Balance for ', address, ': ', res.toNumber());
    } catch (error) {
        console.log('error minting', address, tokenID, reference);
        console.log('e', error)
    }
}

module.exports = async (callback) => {


	for (var i = 0; i < input.addresses.length; i++) {

		let tokenID = input.addresses[i][0].toString().padStart(3, '0');	
		let address = input.addresses[i][1];

		console.log(address, tokenID)

		let reference
		try{
			reference = await mintArtifact(address, tokenID);
		}catch(error){
			console.log('error creating artifact', address, tokenID, error);
		}

		try{
			console.log('minting token', address, tokenID, reference)
			let response = await mintToken(address.toLowerCase(), tokenID, reference);
		}catch(error){
			console.log('error minting token', address, tokenID, reference, error);
		}

	}

	callback();

}
