const SwarmNFT = artifacts.require("SwarmNFT");

module.exports = function (deployer) {
    deployer.deploy(SwarmNFT);
};
