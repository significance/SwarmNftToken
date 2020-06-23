const SwarmNFT = artifacts.require("SwarmNFT");

contract("SwarmNFT", accounts => {

    let SwarmNFTInstance;

    // check if the token exists
    it('Should be named SwarmNFT with shortname P***', async () => {
        SwarmNFTInstance = await SwarmNFT.deployed();
        let result = await SwarmNFTInstance.symbol.call();
        assert.equal(result, 'P***');
    });

    // mint some tokens and send them
    it('Should mint P*** tokens and send them', async () => {
        let result = await SwarmNFTInstance.mintToken(accounts[1], 123456, 'This token is a digital certificate for the Swarm badge, Peace limited series.');
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