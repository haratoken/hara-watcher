import { privWeb3 } from "../constants/Web3Config";
import HaraBlock from "../model/HaraBlock";

export default class PrivateNet {
  constructor() {
    this.web3 = privWeb3;
    this.subscriptionNewBlockHeader;
  }

  _listenNewBlockHeader = async () => {
    console.log("listen to block header");
    this.subscriptionNewBlockHeader = privWeb3.eth
      .subscribe("newBlockHeaders", async (error, result) => {
        if (!error) {
          const blockDetail = await this.web3.eth.getBlock(result.hash);

          await new HaraBlock()._insertBlock(blockDetail, "mined");

          const txHashs = blockDetail.transactions;

          if (txHashs.length > 0) {
            txHashs.map(async (txHash, key) => {
              let txReceipt = await this.web3.eth.getTransactionReceipt(txHash);

              await new HaraBlock()._insertTransaction(txReceipt);
            });
          }
        }

        console.error(error);
      })
      .on("error", console.error);
  };

  _listenPendingBlock = () => {};
}
