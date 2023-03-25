# Spock Analytics 
Spock offers an extensive dataset for dApps, enabling product creators to identify and analyze critical pain points across multiple data sets. These data sets include both off-chain and real-time on-chain metrics, providing product creators with a complete picture of the product experience on both sides of the dApps.
![image](https://user-images.githubusercontent.com/43118413/227742476-cc9f425e-2880-414d-bca4-d312ca5cea1b.png)

# Get Started 
To get started with Spock Analytics, follow these steps:

1. Sign up on [https://spockanalytics.xyz/] through Web3 Wallets, Gmail, Twitter, or Magic link.
2. Once you have signed up, create an application on either the Ethereum, Polygon, or BSC mainnet or testnet chain.

# Integrations & Onboarding 
To fully onboard on Spock Analytics, there are two steps that must be completed.

1.Javascript SDK Integration:
<p> You can use the Spock Javascript library to keep track of the off-chain data in your dApp. It's easy to install as an NPM package and will give you valuable insights into how your dApp is performing. 
 </p>
 <p>
    <img src="./assets/images/create-app.png" alt="create-app" width="300" height="300">
    </p>
<p>
a. Once you created application you will get `appKey` from configuration page.
</p>
    <p>
    <img src="./assets/images/configuration.png" alt="create-app">
    </p>
 <br>
b. Install the Spock Analytics published [analytics-web3] [https://www.npmjs.com/package/analytics-web3] package from npm.
<br> 
c. Integrate sdk on your DApp with the help of [analytics-web3-API](https://www.npmjs.com/package/analytics-web3#api) and you can also go through the [demo-code](https://github.com/xorddotcom/DAppzero-Analytics-Demo)
<br>
Source :( https://spock-analytics.gitbook.io/spock-analytics-docs/adapter/adapter)
<br>
2.Code Adapter
<br>
Spock adapters are using two approaches for transforming raw on-chain data. One is the transformers which are used to track contribution (USD value moving inside the protocol) and extraction (USD value coming out from protocol), and the other one is TVL extractors that are responsible to calculate the asset in terms of USD locked in a protocol.
<br>
Source : (https://spock-analytics.gitbook.io/spock-analytics-docs/adapter/adapter)

## Examples
 - [React](https://github.com/xorddotcom/spock-analytics-demo/tree/main/react)
