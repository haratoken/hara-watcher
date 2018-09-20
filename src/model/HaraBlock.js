import { TB_HARA_BLOCK, InitDB, Mapper } from "../constants/DbConfig";
import { DynamoDbSchema, DynamoDbTable } from "@aws/dynamodb-data-mapper";
import { promisify } from "util";

class _haraBlock {}
Object.defineProperties(_haraBlock.prototype, {
  [DynamoDbTable]: {
    value: TB_HARA_BLOCK
  },
  [DynamoDbSchema]: {
    value: {
      type: {
        type: "String",
        keyType: "HASH"
      },
      hash: {
        type: "String",
        keyType: "RANGE"
      },
      blockStatus: { type: "String" },
      blockHash: { type: "String" },
      parentHash: { type: "String" },
      sha3Uncles: { type: "String" },
      miner: { type: "String" },
      stateRoot: { type: "String" },
      transactionsRoot: { type: "String" },
      receiptsRoot: { type: "String" },
      logsBloom: { type: "String" },
      difficulty: { type: "String" },
      number: { type: "Number" },
      gasLimit: { type: "Number" },
      gasUsed: { type: "Number" },
      gasPrice: { type: "Number" },
      gas: { type: "Number" },
      nonce: { type: "String" },
      timestamp: { type: "String" },
      extraData: { type: "String" },
      size: { type: "String" },
      mixHash: { type: "String" },
      transactions: { type: "String" },
      totalDifficulty: { type: "String" },
      transactionsCount: { type: "Number" },
      transactionHash: { type: "String" },
      transactionIndex: { type: "Number" },
      transactionType: { type: "String" },
      cumulativeGasUsed: { type: "Number" },
      contractAddress: { type: "String" },
      address: { type: "String" },
      logs: { type: "String" },
      status: { type: "String" },
      from: { type: "String" },
      to: { type: "String" },
      flow: { type: "String" },
      value: { type: "Number" },
      input: { type: "String" },
      sort_key: { type: "String" }
    }
  }
});

export default class HaraBlock {
  constructor() {
    this.tblName = TB_HARA_BLOCK;

    this.ddb = InitDB();
    this.dynamoDBQueryAsync = promisify(this.ddb.query).bind(this.ddb);
  }

  _delPendingTx = async hash => {
    let db = new _haraBlock();
    db.type = "transaction_pending";
    db.hash = hash;

    let result = await new Promise((resolve, reject) => {
      Mapper.delete({ item: db })
        .then(val => {
          resolve(val);
        })
        .catch(err => {
          resolve(false);
        });
    });

    return result;
  };

  _getLastPendingTx = async () => {
    try {
      var params = {
        TableName: this.tblName,
        IndexName: "type_sortkey",
        ExpressionAttributeNames: {
          "#type": "type"
        },
        ExpressionAttributeValues: {
          ":type": "transaction_pending"
        },
        KeyConditionExpression: "#type = :type",
        ScanIndexForward: false,
        Limit: 1
      };

      return await this.dynamoDBQueryAsync(params);
    } catch (error) {
      console.log("HaraBlock@_getLastPendingTx", error.message);
      return false;
    }
  };

  /**
   * @param {string} stringISODate
   * @param {string} hash
   */
  _getSortKey = (stringISODate, hash) => {
    let epoch = new Date(stringISODate).getTime();
    let slicedHash = hash.substring(0, 6);

    return epoch + "-" + slicedHash;
  };

  _getLastCountTx = async () => {
    let db = new _haraBlock();
    db.type = "last_tx_number";
    db.hash = "*";

    let result = await new Promise((resolve, reject) => {
      Mapper.get({ item: db })
        .then(val => {
          resolve(val.number);
        })
        .catch(err => {
          resolve(false);
        });
    });

    return result;
  };

  _insertLastCountTx = async txCount => {
    let lastCount = await this._getLastCountTx();

    return new Promise((resolve, reject) => {
      let db = new _haraBlock();
      db.type = "last_tx_number";
      db.hash = "*";
      db.number = lastCount ? lastCount + txCount : txCount;

      Mapper.put({ item: db })
        .then(() => {
          resolve({
            status: 1,
            data: db,
            message: "Last TxNumber " + db.number + " successfull updated"
          });
        })
        .catch(err => {
          resolve({
            status: 0,
            data: db,
            message:
              "Last TxNumber " +
              db.number +
              " successfull updated" +
              err.message
          });
        });
    });
  };

  _insertLastBlockDetail = blockNumber => {
    return new Promise((resolve, reject) => {
      let db = new _haraBlock();
      db.type = "last_block_number";
      db.hash = "*";
      db.number = blockNumber;

      Mapper.put({ item: db })
        .then(() => {
          resolve({
            status: 1,
            data: db,
            message: "Last Block " + db.number + " successfull updated"
          });
        })
        .catch(err => {
          console.warn(err.message);
          resolve({
            status: 0,
            data: db,
            message: "Last Block " + db.number + " failed updated"
          });
        });
    });
  };

  _insertBlock = (data, blockStatus = "pending") => {
    return new Promise((resolve, reject) => {
      if ("hash" in data) {
        const db = new _haraBlock();
        let _item = Object.assign(db, data);
        _item.blockStatus = blockStatus;
        _item.type = "block";
        _item.timestamp = new Date(_item.timestamp * 1000).toISOString();
        _item.transactionsCount = _item.transactions.length;
        _item.transactions = JSON.stringify(_item.transactions);
        _item.sort_key = this._getSortKey(_item.timestamp, _item.hash);

        Mapper.put({ item: _item })
          .then(() => {
            resolve({
              status: 1,
              data: _item,
              message:
                "BlockHash=" +
                _item.hash +
                " txCount=" +
                _item.transactionsCount +
                " BlockNumber=" +
                _item.number +
                " saved"
            });
          })
          .catch(err => {
            console.warn(err.message);
            resolve({
              status: 0,
              data: _item,
              message:
                "BlockHash " + _item.hash + " failed saved " + err.message
            });
          });
      } else {
        resolve({
          status: 0,
          message: "there is no hash inside your data"
        });
      }
    });
  };

  _insertTransaction = (txReceipt, txDetail, gasLimit, timeStamp) => {
    return new Promise((resolve, reject) => {
      if ("transactionHash" in txReceipt) {
        try {
          const db = new _haraBlock();
          let _item = Object.assign(db, txReceipt);
          _item.type = "transaction";
          _item.hash = _item.transactionHash;

          let address =
            _item.logs.length > 0 && "address" in _item.logs[0]
              ? _item.logs[0].address
              : "";

          // now join txDetail
          _item = Object.assign(_item, txDetail);
          _item.gasPrice = parseInt(_item.gasPrice);
          _item.value = parseInt(_item.value);
          _item.gasLimit = parseInt(gasLimit);
          if (_item.to == address) {
            _item.flow = "in";
          } else {
            _item.flow = "out";
          }

          if (_item.logs.length == 0) {
            _item.transactionType = "user_to_user";
          } else if (_item.logs.length == 1) {
            _item.transactionType = "contract_creation";
          } else {
            _item.transactionType = "user_to_contract";
          }

          _item.to = _item.to ? _item.to : "false";
          _item.logs = JSON.stringify(_item.logs);
          _item.status = _item.status ? "true" : "false";
          _item.contractAddress = _item.contractAddress
            ? _item.contractAddress
            : "*";
          _item.number = _item.blockNumber;
          _item.timestamp = new Date(timeStamp * 1000).toISOString();
          _item.sort_key = this._getSortKey(_item.timestamp, _item.hash);

          Mapper.put({ item: _item })
            .then(() => {
              resolve({
                status: 1,
                data: _item,
                message:
                  "TXHash=" +
                  _item.hash +
                  " BlockNumber=" +
                  _item.number +
                  " successfull saved"
              });
            })
            .catch(err => {
              console.warn(err.message);
              resolve({
                status: 0,
                data: _item,
                message:
                  "Item with transaction Hash " +
                  _item.hash +
                  " failed saved " +
                  err.message
              });
            });
        } catch (error) {
          console.error(error);
        }
      } else {
        resolve({
          status: 0,
          message: "there is no transaction Hash inside your data"
        });
      }
    });
  };

  _insertPendingTransaction = txHash => {
    return new Promise(async (resolve, reject) => {
      let existStatus = await this._getTxData(txHash);

      if (existStatus) {
        resolve({
          status: 1,
          message: "Item with transaction Hash " + txHash + " is not pending"
        });
        return;
      }

      let db = new _haraBlock();
      db.type = "transaction_pending";
      db.hash = txHash;
      db.sort_key = this._getSortKey(new Date(), txHash);

      Mapper.put({ item: db })
        .then(() => {
          resolve({
            status: 1,
            data: db,
            message: "Item with transaction Hash " + txHash + " is Pending"
          });
        })
        .catch(err => {
          console.warn(err.message);
          resolve({
            status: 0,
            data: db,
            message:
              "Item with transaction Hash " +
              db.hash +
              " is pending failed to saved"
          });
        });
    });
  };

  _getTxData = async txHash => {
    let db = new _haraBlock();
    db.type = "transaction";
    db.hash = txHash;

    let result = await new Promise((resolve, reject) => {
      Mapper.get({ item: db })
        .then(val => {
          resolve(val);
        })
        .catch(err => {
          resolve(false);
        });
    });

    if (result) {
      return result;
    }

    return false;
  };
}
