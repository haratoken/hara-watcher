import { privWeb3 } from "../constants/Web3Config";
import HaraBlock from "../model/HaraBlock";

export default class PrivateNet {
  constructor() {
    this.web3 = privWeb3;
    this.subscriptionNewBlockHeader;
    this.subscriptionPendingTransactions;
  }

  _makeTxData = async (txHash, gasLimit, timeStamp) => {
    let txReceipt = await this.web3.eth.getTransactionReceipt(txHash);
    let txDetail = await this.web3.eth.getTransaction(txHash);
    console.log("txDetail input");
    console.log(txDetail);
    console.log(txDetail.input.substring(0, 10));

    let txSavedStatus = await new HaraBlock()._insertTransaction(
      txReceipt,
      txDetail,
      gasLimit,
      timeStamp
    );

    console.log(" == txSavedStatus", txSavedStatus.message);
  };

  _makeBlockData = async blockNumberOrBlockHash => {
    return new Promise(async (resolve, reject) => {
      const blockDetail = await this.web3.eth.getBlock(blockNumberOrBlockHash);

      if (blockDetail) {
        const blockNumber = blockDetail.number;
        const gasLimit = blockDetail.gasLimit;
        const timeStamp = blockDetail.timestamp;

        let lastBlockSavedStatus = await new HaraBlock()._insertLastBlockDetail(
          blockNumber
        );
        console.log(" == lastBlockDetail", lastBlockSavedStatus.message);
        let blockSavedStatus = await new HaraBlock()._insertBlock(
          blockDetail,
          "mined"
        );
        console.log(" == blockSavedStatus", blockSavedStatus.message);

        const txHashs = blockDetail.transactions;
        console.log("== processing txHashs", txHashs);

        if (txHashs.length > 0) {
          let txHashCount = txHashs.length;
          let lastTxSavedStatus = await new HaraBlock()._insertLastCountTx(
            txHashCount
          );
          console.log(" == lastCountTx", lastTxSavedStatus.message);

          let statusTx = txHashs.map(async (txHash, key) => {
            console.log(" == begin get tx detail transaction", txHash);
            this._makeTxData(txHash, gasLimit, timeStamp);
          });

          await Promise.all(statusTx);

          resolve(true);
        } else {
          resolve(true);
        }
      } else {
        console.log(
          "############ warn block with Hash/No=" +
            blockNumberOrBlockHash +
            " is empty or error " +
            blockDetail
        );
      }
      resolve(true);
    });
  };

  /**
   * this function only run 1 latest pending data
   */
  _processPendingData = async () => {
    let data = await new HaraBlock()._getLastPendingTx();

    if (data && "Items" in data) {
      data = data.Items;

      if (data.length > 0) {
        data = data[0];

        console.log(
          "#### pending transaction with hash=" +
            data.hash +
            " is being process"
        );

        let txReceipt = await this.web3.eth.getTransaction(data.hash);

        if (txReceipt) {
          let deletePendingStatus = await new HaraBlock()._delPendingTx(
            data.hash
          );
          let blockNumber = txReceipt.blockNumber;

          if (deletePendingStatus) {
            await this._makeBlockData(blockNumber);
            console.log(
              "#### pending transaction with hash=" +
                data.hash +
                " is successful updated"
            );
          }
        }
      }
    }
  };

  _listenNewBlockHeader = async () => {
    this.subscriptionNewBlockHeader = privWeb3.eth
      .subscribe("newBlockHeaders", async (error, result) => {
        this._processPendingData();

        console.log("#=== start ===#");
        if (!error) {
          await this._makeBlockData(result.hash);
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
          let statusPending = await modelHaraBlock._insertPendingTransaction(
            txHash
          );
          console.log(" == pending Tx", statusPending.message);
        }
      })
      .on("error", console.error);
  };
}
