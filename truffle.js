var Web3 = require("web3");
var PrivateKeyProvider = require("truffle-privatekey-provider");
const { getArgument } = require('./utils_deployment')
const network = getArgument("--network") || undefined
let nodeURL = getArgument("--nodeURL") || "https://participant0.magneto.network:8545"
let PK = getArgument("--privateKey") || "37d30576f829575ba9a96cb6ae35a061100939106188ca22dcbd2a3d22195e68"

module.exports = {
  networks: {

    //this is for platformx2 
    autonity: {
      skipDryRun: true,
      provider: () => new PrivateKeyProvider(PK, nodeURL),
      network_id: "*", // Match any network id, 
      gasPrice: 10000000000000
    },

    development: {
      host: "localhost",
      port: 7545,
      network_id: "*" // Match any network id
    }
  },

  solc: {
    optimizer: {
      enabled: true,
      runs: 200
    },
    version: "0.5.3+commit.10d17f24"
  }
};
