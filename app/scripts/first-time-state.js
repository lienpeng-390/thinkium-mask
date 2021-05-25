/**
 * @typedef {Object} FirstTimeState
 * @property {Object} config Initial configuration parameters
 * @property {Object} NetworkController Network controller state
 */

/**
 * @type {FirstTimeState}
 */
const initialState = {
  config: {},
  PreferencesController: {
    frequentRpcListDetail: [
      {
        rpcUrl: 'http://rpctest1.thinkium.org/',
        chainId: '0x2711',
        ticker: 'TKM',
        nickname: 'thinkium1',
        rpcPrefs: {},
      },
      {
        rpcUrl: 'http://localhost:8545',
        chainId: '0x539',
        ticker: 'ETH',
        nickname: 'Localhost 8545',
        rpcPrefs: {},
      },
      
    ],
  },
};

export default initialState;
