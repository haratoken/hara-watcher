import { privWeb3 } from "../constants/Web3Config";
import HaraBlock from "../model/HaraBlock";

export default class PrivateNet {
  constructor() {
    this.web3 = privWeb3;
    this.subscriptionNewBlockHeader;
  }

  _listenNewBlockHeader = async () => {
    this.subscriptionNewBlockHeader = privWeb3.eth
      .subscribe("newBlockHeaders", async (error, result) => {
        if (!error) {
          const status = await new HaraBlock()._insertBlock(result, "mined");
          return status;
        }

        console.error(error);
      })
      .on("error", console.error);
  };

  _listenPendingBlock = () => {};
}
