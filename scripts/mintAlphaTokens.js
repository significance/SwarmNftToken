const SwarmAlphaNFT = artifacts.require("SwarmAlphaNFT");

const dataJson = [
    { badge: 41, address: '0xa7bEFD50f0acf8dDE32DC3Ed7484b69516dCf1de' },
    { badge: 43, address: '0xaE72f891Fc9914b13a90cbED799ee73359077bee' },
    { badge: 48, address: '0x08873D3F0D535b62EED42C6794BC3A8cF1021FCc' },
    { badge: 35, address: '0x7F2a1ef39EA0D470b5669ce105a13C5b3BD8cD31' },
    { badge: 37, address: '0x81425a9B654D033aeE76aB174a35991325D0bdA9' },
    { badge: 36, address: '0x7C73b0A08eBb4E4C4CdcE5f469E0Ec4E8C788D84' },
    { badge: 39, address: '0x61060d8ba5883f047c7b0a3bf7c5e4e1a314bfc2' },
    { badge: 38, address: '0x32B1c4719496f425726e161E1E33480B68dc79E7' },
    { badge: 40, address: '0xA903b19357B96603C7574fe9145FD8ab6Bd3c6F1' },
    { badge: 20, address: '0x94fdb33eb044f0737fd2dfaa5d20b5c305240728' },
    { badge: 24, address: '0xA8C7372dC993d7510C9c45425807d463967cbb12' },
    { badge: 25, address: '0x3F35A01f3cbC4D62A49085497AfDA768C73a91cF' },
    { badge: 30, address: '0xd882EFe81A8555D0ffCaBc24832eBf9B1A516a92' },
    { badge: 21, address: '0xf9090502a5AaA99A3D3Be1505C66370201C986fB' },
    { badge: 26, address: '0x4689292e6B53d032056760d89a039103f76b20d7' },
    { badge: 29, address: '0xf6E6A789f5bfeA9e8222bdf15F40650F3F6E63BA' },
    { badge: 12, address: '0xf7a653dD95c7a3136af65A0036D4Fd02ca359966' },
    { badge: 134, address: '0x92D9C95F9382c6cc2B29DABfEca0542226054De3' },
    { badge: 131, address: '0x8a5ef07cc7DaFdE9F0Cd756B3c7Db8c39fBD433e' },
    { badge: 138, address: '0xF1b5c649c5147D2cEb8Dd4c0207F35c4651A01B4' },
    { badge: 137, address: '0xe89C2545e4e05A79D21351CdEeDa4651ca48DeBc' },
    { badge: 120, address: '0xc6314CFcDCaF7Fdd34AE217D406097D9cb31971B' },
    { badge: 118, address: '0x2b86A7a38eb749279602afbA5429A28766CCfE3C' },
    { badge: 113, address: '0xA7499Aa6464c078EeB940da2fc95C6aCd010c3Cc' },
    { badge: 117, address: '0x778549eb292ac98a96a05e122967f22efa003707' },
    { badge: 139, address: '0x6C65fB326e7734Ba5508b5d043718288b43b9ed9' },
    { badge: 119, address: '0xB1B7586656116D546033e3bAFF69BFcD6592225E' },
    { badge: 111, address: '0xc1e74d57962fa266f265f80d434a820ae481e7d6' },
    { badge: 115, address: '0x4C0a466DF0628FE8699051b3Ac6506653191cc21' },
    { badge: 114, address: '0xD88B9d3215eDcE9d3a1402DBF36025796E226572' },
    { badge: 123, address: '0x48552ef0fC4ad89CB211DA2fC142db469e09C168' },
    { badge: 121, address: '0xD262d146E869915444d0f34EcDAAbAB5aB43007e' },
    { badge: 3, address: '0x4B3017f0E1d829fF8f9BB87bBad0166321Cc8615' },
    { badge: 128, address: '0x7bfaf4c59aa4f011672b8e77789e1eb41abd654d' },
    { badge: 129, address: '0x5a9A92A1518eb4Ee4C85c7eBf9D4cF449A510Fd2' },
    { badge: 154, address: '0xFb589ADCc7402fc68273F5726b7f3aa0253cb39c' },
    { badge: 159, address: '0x2920620b47D51170319A531A2D6D5810610E8C2A' },
    { badge: 155, address: '0x839395e20bbB182fa440d08F850E6c7A8f6F0780' },
    { badge: 151, address: '0xF35960302a07022aBa880DFFaEC2Fdd64d5BF1c1' },
    { badge: 157, address: '0x5Db491f20eCE212340Bf1197D2FdA93aCEF72107' },
    { badge: 163, address: '0xdd514a36F465d2d04aBA9C6a644ccaE00961198f' },
    { badge: 167, address: '0xbcee907b19cE1c257e4F06828Ed171039BC83Ac5' },
    { badge: 168, address: '0x38E7eda3757fe52eEd5242D9f0a50Ed71D9B113F' },
    { badge: 170, address: '0x44FAf2d64D008724a74216f86D99E13932cCa703' },
    { badge: 164, address: '0x12e9D2C2BD38ca6783428aE3341E1eb0F447168a' },
    { badge: 169, address: '0x7311E98e8a50FdFcC333F4C662D50b74CD2886E4' },
    { badge: 165, address: '0xe97cC5991Ab09978bA79b86fD29cd35824dD6512' },
    { badge: 161, address: '0x6ea1705c9f326a5c5d34c51eb9ae2f62921c05e0' },
    { badge: 162, address: '0x1DBA1131000664b884A1Ba238464159892252D3a' },
    { badge: 146, address: '0x9b530388C920f6b1dD3d05AEFb9B4650Fe388B2F' },
    { badge: 149, address: '0x00F3C4F86bCA61BD973f221236aeB70E97C96fC5' },
    { badge: 142, address: '0x46A55B720DFD866B8b93fBBEA9694741D5e00d3E' },
    { badge: 147, address: '0x5548737B06aeBcD70391fc654899fDD3b82C97FC' },
    { badge: 150, address: '0x9d9392EC6689Df8ce9B49dF99E11AdF7F2bec15B' },
    { badge: 177, address: '0xd6efecfea6156006f3766f1dc403c2b4df3d8705' },
    { badge: 179, address: '0xdb25e38a12d03d4a5275c1de61a4631d4b5fcbbb' },
    { badge: 15, address: '0x3E715D14E16f5B79130EC7f93783C123D000A011' },
    { badge: 122, address: '0x15ae150d7dC03d3B635EE90b85219dBFe071ED35' },
    { badge: 171, address: '0x44cF78e365a3CffEd54b7F2d702C2C6239276fa3' },
    { badge: 178, address: '0x70D2b01734bfBD59C69B03FE3848b67a14E19AfE' },
    { badge: 183, address: '0x45602BFBA960277bF917C1b2007D1f03d7bd29e4' },
    { badge: 182, address: '0x6F4AdFfAe2f44Ce3a80ca4693be93Dc54a93Be7E' },
    { badge: 188, address: '0xE7bD36a7CF4F1F8896378D41177BEf637075a1eD' },
    { badge: 19, address: '0x8d80374eb354171F17fbc272f66AbcBA781EDCfB' },
    { badge: 190, address: '0xA872A151c6dAf9eB2b8e8478697e321549DdCBb1' },
    { badge: 23, address: '0xfdC186343C2BB7C5b97E5230330A16607F061db9' },
    { badge: 196, address: '0xF33BBd6d2fA32995ffDc4DA44f835126cDb1c91a' },
    { badge: 199, address: '0xE43DF5d7242ea18A8085fEecE9E479176a9350fD' },
    { badge: 200, address: '0x5E7DA56011dD906B3a37E2F57E67f248Ba88D345' },
    { badge: 192, address: '0x7c3607F936Cf9DC8bDB8E113efFCC977C5485CCa' },
    { badge: 69, address: '0x7A42573b103Dd91B776ff66826AE538099540629' },
    { badge: 197, address: '0x198DbC9A9879d398Bcacf139D8c130C466e272Af' },
    { badge: 198, address: '0x0402c3407dcbd476c3d2bbd80d1b375144baf4a2' },
    { badge: 193, address: '0x9E032eBb29a46D8030875ab2B82c626ab3C29b75' },
    { badge: 191, address: '0x7A868c7Fc176e5de4207323a9a1EF41CE49d4B46' },
    { badge: 173, address: '0x581A71E6F4f0349312bc1406AA085061be0315ab' },
    { badge: 184, address: '0x0c11fa6623df9ce654d9b7e75841cf9156ba99cc' },
    { badge: 300, address: '0xC0a5F27Cc2E6008D015E0Ea2F94A24098861600d' },
    { badge: 101, address: '0x068484F7BD2b7D7C5a698d89e75ddcaf3a92B879' },
    { badge: 166, address: '0xf813773eBDD4759c1B780d745081f046A5B776fB' },
    { badge: 108, address: '0x4020F23355cEE5Fc0B4241b3D798a31451B1D6f2' },
    { badge: 102, address: '0x2f19883A1F8212e8f3B7f72F2B37F8440DF55d23' },
    { badge: 104, address: '0xe25E0565Be41b58C0dc925A5B89ecFe938CDc8C0' },
    { badge: 181, address: '0x4360dE92ef81421B007E92B43787dDe92645d8B5' },
    { badge: 186, address: '0xa51579520E5660653082E4cCe7Fa24AD056BDDca' },
    { badge: 103, address: '0x83e4142225ECC3cE1a8061465d219c01B250e33A' },
    { badge: 107, address: '0x496612eE674010D19e163De244A2adDb1AE1D0EC' },
    { badge: 106, address: '0x755470A548fe2484f76Fe63E1923B65A70BE84CB' },
    { badge: 110, address: '0x593e0F9AE931a07d46c91326Fde6313636c9aa52' },
    { badge: 81, address: '0x77a81B3A062c1a06C0AB51e7C587D8B1d67c7ed8' },
    { badge: 86, address: '0xf5dbd20a5345c7eafc92038efebee3c85f6b9b68' },
    { badge: 82, address: '0xFE32f8d79306a97190D72e0c7c5c54c6110232fa' },
    { badge: 22, address: '0x307ae4e45758c1adc73f67545ac02f7c6c4ab5ce' },
    { badge: 87, address: '0x51F449EA83e32d15865dd22A072B1fA73042adF4' },
    { badge: 83, address: '0x79D3544bBe7821f2be4bD745D3df1f14ED211C30' },
    { badge: 88, address: '0x0230c6dD5DB1d3F871386A3CE1A5a836b2590044' },
    { badge: 92, address: '0xeae0DDAd0Ad7d62119d4cb4B8f8973A4D77D9407' }
]

module.exports = async function (callback) {
    console.log('Minting started');
    let SwarmAlphaNFTInstance = await SwarmAlphaNFT.deployed();
    console.log('should be deployed');

    try {
        for (const item of dataJson) {
            try {
                const uri = '';
                await SwarmAlphaNFTInstance.mintToken(item.address, item.badge, uri);
                console.log(item.badge, 'has been minted for', item.address);
                let res = await SwarmAlphaNFTInstance.balanceOf(item.address);
                console.log('NFT P*** Balance for ', item.address, ': ', res.toNumber());
            } catch (error) {
                console.log(item.badge, 'error', item.address);
                console.log(error.message)
            }
        }

    } catch (error) {
        console.log('err: ', error)
    }
    console.log('Complete');
    callback();
}