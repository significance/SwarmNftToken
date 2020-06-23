const SwarmNFT = artifacts.require("SwarmNFT");

const textString = 'This token is a digital certificate for the Swarm badge, Peace limited series.';
const dataJson = [
    {
        address: "0x20747F60A7fFFA66718D7Fea5C64C65d01B0dB36",
        badge: 000001
    },
    {
        address: "0x371106Bed631CA3B78e81ec25D05DF9e643F4dB8",
        badge: 000002
    },
    {
        address: "0x2DFfdD9D70793B35D4262D89c367e89C35b68D1A",
        badge: 000003
    },
    {
        address: "0x5444915FB76De3Db8EB35cAa57b194185F39752a",
        badge: 000004
    },
    {
        address: "0x77c156B50459EFC85238aD58941DDdb8fDF5ed05",
        badge: 000005
    }
]



module.exports = async function (callback) {
    console.log('Minting started');
    let SwarmNFTInstance = await SwarmNFT.deployed();
    console.log('should be deployed');

    try {
        for (const item of dataJson) {
            await SwarmNFTInstance.mintToken(item.address, item.badge, textString);
            console.log(item.badge, ' has been minted for ', item.address);
            let res = await SwarmNFTInstance.balanceOf('0x20747F60A7fFFA66718D7Fea5C64C65d01B0dB36');
            console.log('Balance for ', item.address, ': ', res.toNumber());
        }

    } catch (error) {
        console.log('err: ', error)
    }
    console.log('Complete');
    callback();
}