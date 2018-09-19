import { privWeb3 } from "../constants/Web3Config";
import HaraBlock from "../model/HaraBlock";

export default class PrivateNet {
  constructor() {
    this.web3 = privWeb3;
    this.subscriptionNewBlockHeader;
    this.subscriptionPendingTransactions;
  }
  
  _listenNewBlockHeader = async () => {
    this.subscriptionNewBlockHeader = privWeb3.eth
      .subscribe("newBlockHeaders", async (error, result) => {
        console.log("#=== start ===#")
        if (!error) {
          const blockDetail = await this.web3.eth.getBlock(result.hash);
          const blockNumber = blockDetail.number;
          const gasLimit    = blockDetail.gasLimit;
          const timeStamp   = blockDetail.timestamp;

          let lastBlockSavedStatus = await new HaraBlock()._insertLastBlockDetail(blockNumber);
          console.log(" == lastBlockDetail", lastBlockSavedStatus.message);
          let blockSavedStatus = await new HaraBlock()._insertBlock(blockDetail, "mined");
          console.log(" == blockSavedStatus", blockSavedStatus.message);

          const txHashs = blockDetail.transactions;
          console.log("== processing txHashs", txHashs);

          if (txHashs.length > 0) {
            let txHashCount = txHashs.length;
            let lastTxSavedStatus = await new HaraBlock()._insertLastCountTx(txHashCount);
            console.log(" == lastCountTx", lastTxSavedStatus.message);

            txHashs.map(async (txHash, key) => {
              console.log(" == begin get tx detail transaction", txHash);
              let txReceipt = await this.web3.eth.getTransactionReceipt(txHash);
              let txDetail  = await this.web3.eth.getTransaction(txHash);

              let txSavedStatus = await new HaraBlock()._insertTransaction(txReceipt, txDetail, gasLimit, timeStamp);
              console.log(" == txSavedStatus", txSavedStatus.message);
            });

          }
        } else {
          console.error(error);
        }

      })
      .on("error", console.error);
  };

  _listenPendingBlock = () => {
    this.subscriptionPendingTransactions = privWeb3.eth
      .subscribe("pendingTransactions", async (error, result) => {
        let txHash = result;
        const modelHaraBlock = new HaraBlock();

        let checkDB = await modelHaraBlock._getTxData(txHash);

        if (checkDB === false) {
          let statusPending = await modelHaraBlock._insertPendingTransaction(txHash);
          console.log(" == pending Tx", statusPending.message);
        }
      })
      .on("error", console.error);
  };

}
