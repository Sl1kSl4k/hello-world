/**
* @type import('hardhat/config').HardhatUserConfig
*/

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { API_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "sepolia",
   networks: {
      hardhat: {},
      sepolia: {
         url: 'https://eth-sepolia.g.alchemy.com/v2/otN4qcrN9Dhvc9zt17-6LbY1Ya5E50-A',
         accounts: [`0xfe908dec449e7fea8d316ba522b57fcf2ffe1c975b4b52cd77fbbbde5bc78d8d`]
      }
   }
}
