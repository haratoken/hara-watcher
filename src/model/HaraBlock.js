import { TB_HARA_BLOCK, InitDB, Mapper } from "../constants/DbConfig";
import { DynamoDbSchema, DynamoDbTable } from "@aws/dynamodb-data-mapper";

class _haraBlock {}
Object.defineProperties(_haraBlock.prototype, {
  [DynamoDbTable]: {
    value: TB_HARA_BLOCK
  },
  [DynamoDbSchema]: {
    value: {
      hash: {
        type: "String",
        keyType: "HASH"
      },
      blockStatus: { type: "String" },
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
      nonce: { type: "String" },
      timestamp: { type: "Number" },
      extraData: { type: "String" },
      size: { type: "String" }
    }
  }
});

export default class HaraBlock {
  constructor() {
    this.tblName = TB_HARA_BLOCK;
  }

  _insertBlock = (data, blockStatus = "pending") => {
    return new Promise((resolve, reject) => {
      if ("hash" in data) {
        const db = new _haraBlock();
        let _item = Object.assign(db, data);
        _item.blockStatus = blockStatus

        Mapper.put({ item: _item })
          .then(() => {
            resolve({
              status: 1,
              data: _item,
              message: "Item with Hash " + _item.hash + " successfull saved"
            });
          })
          .catch(err => {
            console.warn(err.message);
            resolve({
              status: 0,
              data: _item,
              message: "Item with Hash " + _item.hash + " failed saved"
            });
          });
      } else {
        resolve({
          status: 0,
          data: _item,
          message: "there is no hash inside your data"
        });
      }
    });
  };
}
