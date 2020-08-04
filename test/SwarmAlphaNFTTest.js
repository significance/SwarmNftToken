const SwarmAlphaNFT = artifacts.require("SwarmAlphaNFT");

contract("SwarmAlphaNFT", accounts => {

    let SwarmAlphaNFTInstance;

    // check if the token exists
    it('Should be SwarmNFT with shortname SwarmAlphaNFT', async () => {
        SwarmNFTInstance = await SwarmNFT.deployed();
        let result = await SwarmNFTInstance.symbol.call();
        assert.equal(result, 'SWA');
        let result = await SwarmNFTInstance.name.call();
        assert.equal(result, 'Swarm Love');

    });

    // mint some tokens and send them
    it('Should mint SWT tokens and send them', async () => {
        let result = await SwarmNFTInstance.mintToken(accounts[1], 123456, 'bzz://');
    });

    it('Should have been received', async () => {
        let result = await SwarmNFTInstance.balanceOf(accounts[1]);
        assert.equal(result.toNumber(), 1);
    });

    // check if the receiver can send it to another account
    it('Should be able to transfer to another account', async () => {
        let result = await SwarmNFTInstance.transferFrom(accounts[1], accounts[2], 123456, { from: accounts[1] });
    });

    it('Should have been received by other account', async () => {
        let result = await SwarmNFTInstance.balanceOf(accounts[2]);
        assert.equal(result.toNumber(), 1);
    });


})