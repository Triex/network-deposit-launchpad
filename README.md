[![Build status](https://img.shields.io/github/workflow/status/lukso-network/network-deposit-launchpad/ci)](https://github.com/lukso-network/network-deposit-launchpad/actions)
[![Licence](https://img.shields.io/github/license/lukso-network/network-deposit-launchpad.svg)](https://github.com/lukso-network/network-deposit-launchpad/blob/master/LICENSE)

# LUKSO L15 Ephemeral Testnet Launchpad

The [Launchpad](https://launchpad.l15.lukso.network/) is the official way to deposit your LYX for the L15 testnet

  - **Status**:  This Launchpad is in active development for testnet

## Dependencies

  - **Technology stack**: 
    - [React](https://reactjs.org/) via [CRA](https://reactjs.org/docs/create-a-new-react-app.html)
    - [Redux](https://redux.js.org/)
    - [TypeScript](https://www.typescriptlang.org/)
    - [Web3-React](https://github.com/NoahZinsmeister/web3-react)
    - [Grommet](https://v2.grommet.io/)
    - [Yarn](https://yarnpkg.com/)


## Configuration

To have full functionality of the Launchpad, you must create an `.env` file in your root directory and add an environment variable.


The Infura Project ID will enable the network status progress bar showing the balance of the Deposit Contract

```
REACT_APP_INFURA_PROJECT_ID=your-infura-project-id-here
```

Note: The Portis wallet option is not available when running locally

## Installation

**Available Scripts**
### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

**Install Dependencies and Start the Application**
```
yarn
yarn start
```

----
## Open source licensing info
Creative Commons Zero v1.0 Universal - For more information read the [`LICENSE`](./LICENSE) file.

----
