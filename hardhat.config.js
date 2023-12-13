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
         url: 'https://eth-sepolia.g.alchemy.com/v2/otN4qcrN9Dhvsfasf9zt17-6LbY1Ya453hjh50-A',
         accounts: [`0xfe908dec449e7fe123123acv6ba522b57fcf2ffe1c975b4b52cde7jejigfbbbde5bc78d8d`]
      }
   }
}
