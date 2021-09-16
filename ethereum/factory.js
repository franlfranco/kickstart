// This provides an instance of our deployed factory
// prevents having to access the web3 instance and then getting
// the contract

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(
    CampaignFactory.interface),
    '0x0b82e55f3b0f1723fEcfC2786234e53dfc29585b'
);

export default instance;
