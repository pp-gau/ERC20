# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
Pre-requisites:
 - Alchemy account
 - Metamask
 - git
 - npm
 - yarn

Steps:
 - Fork this repo
 - Run `yarn` to install dependencies
 - Sign up with Alchemy
 - Create app with Alchemy and get app URL
 - Copy the .env.example file and rename it to .env
 - Copy the app URL from Alchemy and paste it to SEPOLIA_API_URL
 - Copy the private key from Metamask and paste it to PRIVATE_KEY
 - Run `yarn compile:deploy:sepolia` to compile and deploy to Sepolia Network
https://docs.alchemy.com/docs/how-to-deploy-a-smart-contract-to-the-sepolia-testnet

