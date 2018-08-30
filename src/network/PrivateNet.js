import { privWeb3 } from "../constants/Web3Config";

export default class PrivateNet {
  constructor() {
    this.web3 = privWeb3;
  }
}