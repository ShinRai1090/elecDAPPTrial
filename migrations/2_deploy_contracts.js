var elections = artifacts.require("./Election.sol");

module.exports = function(deployer) {
  deployer.deploy(elections);
};
