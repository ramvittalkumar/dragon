const Migrations = artifacts.require("Dragon");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
