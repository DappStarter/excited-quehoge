require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek surge trip film birth shift protect half kite sun gift'; 
let testAccounts = [
"0x957c02bda76a192a6480a9abd1802133550b2f303d2693bf9e29949c5978aa1f",
"0xb5592d63b910f57162b0419fd4d68149fce4027c6b818b03e97cfab85123f965",
"0x37eb3019350289d635559a25daf5a3f243536fd93611740559b11a744ea3510a",
"0xbc526281da2efa8017e16134e6272fc13ab698be85403f362e415b207e2efdcf",
"0x28ce24929d1dfeea6b8fae250bca83170cbcbadfd2f1c1815cce28eed695efc4",
"0x6a3150c25c1d89fd22d28da5cea2df5c0e57026897bc46b58ab53145f98b3e2d",
"0xe84b693178b5a4f898f4ef7f3e38912d8b70f4583a268baf9d2a3e614171c48b",
"0x3b451462fe2217835aa7e7b6dd2ed3bc96c16664fed8310b18a6d19519039550",
"0x15426e15450ca149e5c9240491b053eddad1bc37778e8d277ee9161d3334d918",
"0x8b62f38ff5b750cd2c6367ae1320751b8d1e69ffb45a2cb14721c71320a41b79"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
