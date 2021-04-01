require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'inner arena bone table edge rare remember unusual include private bubble sunset'; 
let testAccounts = [
"0x16003bed8d88f8559f2cf803fb05f40df39f06e292d9b997a5007e0f2087cc78",
"0x4c6cb585270accddc2e078141c672ebe5611ba717c44552c0c34d5a8ad0fb442",
"0xfeaca278f0b0b492a16bf87d7b9daeadad7ce999d068cbf46422d63735f00fce",
"0x14a559cc1063d927c24d0071c6accc823e320c2263320af9270b4e3007bc6828",
"0xed331f58f055aa97c8889a51b16202540350d9aef34e91e6bc8c66ef24393773",
"0x2dda67cdf79b9e6bbb4d8091701d1d3272adeebd0437b4cf180a8f7900235a9a",
"0x6a40a0b6f5b3f7a4b23382d2c052401a6dbcfb87f20844f265702dc645c90bf9",
"0x44fc54e66b11df25466d84252ff11552d0ba98f9fc987100d88ffa0bb5825c74",
"0x733fe08e44be1c1cbab9db058dd77eccb316c9858ad90d5b78569e9719237ac0",
"0x31815a08babde43206cd0f891fd3f18fb42744913a22e553a95eb5d1bc167639"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

