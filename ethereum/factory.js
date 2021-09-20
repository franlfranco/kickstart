// This provides an instance of our deployed factory
// prevents having to access the web3 instance and then getting
// the contract

import web3 from './web3';
import CampaignFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(
    CampaignFactory.interface),
    '0x44949d6697CE08fF14a1670C9192E7fB1617295b'
);

export default instance;
