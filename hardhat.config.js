require("dotenv").config();
require("@nomicfoundation/hardhat-toolbox");

const { SEPOLIA_API_URL, HOLESKY_API_URL, PRIVATE_KEY } = process.env;

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  defaultNetwork: "sepolia",
  networks: {
    hardhat: {},
    sepolia: {
      url: SEPOLIA_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    holesky: {
      url: HOLESKY_API_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};
