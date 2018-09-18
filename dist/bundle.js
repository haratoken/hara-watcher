/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./handler.js":
/*!********************!*\
  !*** ./handler.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _WatcherController = __webpack_require__(/*! ./src/WatcherController */ "./src/WatcherController.js");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

'use strict';

var _watch = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("running watch");
            _context.next = 3;
            return (0, _WatcherController._BlockWatcher)();

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function _watch() {
    return _ref.apply(this, arguments);
  };
}();

_watch();

/***/ }),

/***/ "./src/WatcherController.js":
/*!**********************************!*\
  !*** ./src/WatcherController.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._BlockWatcher = undefined;

var _PrivateNet = __webpack_require__(/*! ./network/PrivateNet */ "./src/network/PrivateNet.js");

var _PrivateNet2 = _interopRequireDefault(_PrivateNet);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var _BlockWatcher = exports._BlockWatcher = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var privNet;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new _PrivateNet2.default();

          case 2:
            privNet = _context.sent;


            privNet._listenNewBlockHeader();
            // privNet._listenPendingBlock();

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, undefined);
  }));

  return function _BlockWatcher() {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/constants/DbConfig.js":
/*!***********************************!*\
  !*** ./src/constants/DbConfig.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TB_HARA_BLOCK = exports.Mapper = exports.InitDB = exports.configDB = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _awsSdk = __webpack_require__(/*! aws-sdk */ "aws-sdk");

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _dynamodbDataMapper = __webpack_require__(/*! @aws/dynamodb-data-mapper */ "@aws/dynamodb-data-mapper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AWSaccesssKeyId = process.env.AWS_ACCESS_KEY_ID ? process.env.AWS_ACCESS_KEY_ID : "not-important";
var AWSsecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY ? process.env.AWS_SECRET_ACCESS_KEY : "not-important";
var AWSregion = process.env.REGION ? process.env.REGION : "local";
var AWSendpoint = process.env.DB_ENDPOINT !== 'undefined' && process.env.DB_ENDPOINT ? process.env.DB_ENDPOINT : "http://192.168.99.100:8000";

var configDB = exports.configDB = function configDB() {
  var config = {
    accessKeyId: AWSaccesssKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion
  };

  if (process.env.IS_DEV == "true" || typeof process.env.IS_DEV === "undefined") {
    config = _extends({}, config, {
      endpoint: AWSendpoint,
      credentials: false
    });
  }

  console.log(config);

  return config;
};

var InitDB = exports.InitDB = function InitDB() {
  _awsSdk2.default.config.update(configDB());

  return new _awsSdk2.default.DynamoDB.DocumentClient();
};

var client = new _awsSdk2.default.DynamoDB(configDB());
var Mapper = exports.Mapper = new _dynamodbDataMapper.DataMapper({ client: client });

var TB_HARA_BLOCK = exports.TB_HARA_BLOCK = process.env.TB_HARA_BLOCK ? process.env.TB_HARA_BLOCK : "hara_block_dev";

/***/ }),

/***/ "./src/constants/Web3Config.js":
/*!*************************************!*\
  !*** ./src/constants/Web3Config.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privWeb3 = exports.privProvider = undefined;

var _web = __webpack_require__(/*! web3 */ "web3");

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var privProvider = exports.privProvider = process.env.PRIV_NETWORK ? process.env.PRIV_NETWORK : "ws://localhost:8546";
var privWeb3 = exports.privWeb3 = new _web2.default(new _web2.default.providers.WebsocketProvider(privProvider));

/***/ }),

/***/ "./src/model/HaraBlock.js":
/*!********************************!*\
  !*** ./src/model/HaraBlock.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Object$definePropert;

var _DbConfig = __webpack_require__(/*! ../constants/DbConfig */ "./src/constants/DbConfig.js");

var _dynamodbDataMapper = __webpack_require__(/*! @aws/dynamodb-data-mapper */ "@aws/dynamodb-data-mapper");

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _haraBlock = function _haraBlock() {
  _classCallCheck(this, _haraBlock);
};

Object.defineProperties(_haraBlock.prototype, (_Object$definePropert = {}, _defineProperty(_Object$definePropert, _dynamodbDataMapper.DynamoDbTable, {
  value: _DbConfig.TB_HARA_BLOCK
}), _defineProperty(_Object$definePropert, _dynamodbDataMapper.DynamoDbSchema, {
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
    input: { type: "String" }
  }
}), _Object$definePropert));

var HaraBlock = function HaraBlock() {
  var _this = this;

  _classCallCheck(this, HaraBlock);

  this._insertLastBlockDetail = function (blockNumber) {
    return new Promise(function (resolve, reject) {
      var db = new _haraBlock();
      db.type = "last_block_number";
      db.hash = "*";
      db.number = blockNumber;
      0xD51Cef892A6F599b4FFf13D233E5abB99dAd52Bd;
      _DbConfig.Mapper.put({ item: db }).then(function () {
        resolve({
          status: 1,
          data: db
        });
      }).catch(function (err) {
        console.warn(err.message);
        resolve({
          status: 0,
          data: db
        });
      });
    });
  };

  this._insertBlock = function (data) {
    var blockStatus = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "pending";

    return new Promise(function (resolve, reject) {
      if ("hash" in data) {
        var db = new _haraBlock();
        var _item = Object.assign(db, data);
        _item.blockStatus = blockStatus;
        _item.type = "block";
        _item.timestamp = new Date(_item.timestamp * 1000).toISOString();
        _item.transactionsCount = _item.transactions.length;
        _item.transactions = JSON.stringify(_item.transactions);

        _DbConfig.Mapper.put({ item: _item }).then(function () {
          resolve({
            status: 1,
            data: _item,
            message: "Item with Hash " + _item.hash + " successfull saved"
          });
        }).catch(function (err) {
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
          message: "there is no hash inside your data"
        });
      }
    });
  };

  this._insertTransaction = function (txReceipt, txDetail, gasLimit, timeStamp) {
    return new Promise(function (resolve, reject) {
      if ("transactionHash" in txReceipt) {
        try {
          var db = new _haraBlock();
          var _item = Object.assign(db, txReceipt);
          _item.type = "transaction";
          _item.hash = _item.transactionHash;

          var address = typeof _item.logs[0].address !== "undefined" ? _item.logs[0].address : "";

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
          _item.contractAddress = _item.contractAddress ? _item.contractAddress : "*";
          _item.number = _item.blockNumber;
          _item.timestamp = new Date(timeStamp * 1000).toISOString();

          _DbConfig.Mapper.put({ item: _item }).then(function () {
            console.log("success hash" + _item.hash);
            resolve({
              status: 1,
              data: _item,
              message: "Item with transaction Hash " + _item.hash + " successfull saved"
            });
          }).catch(function (err) {
            console.warn(err.message);
            resolve({
              status: 0,
              data: _item,
              message: "Item with transaction Hash " + _item.hash + " failed saved"
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

  this._insertPendingTransaction = function (txHash) {
    return new Promise(function (resolve, reject) {
      var db = new _haraBlock();
      db.type = "transaction";
      db.hash = txHash;
      db.status = "pending";

      _DbConfig.Mapper.put({ item: db }).then(function () {
        resolve({
          status: 1,
          data: db,
          message: "Item with transaction Hash " + db.hash + " is Pending"
        });
      }).catch(function (err) {
        console.warn(err.message);
        resolve({
          status: 0,
          data: db,
          message: "Item with transaction Hash " + db.hash + " is pending failed to saved"
        });
      });
    });
  };

  this._getTxData = function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(txHash) {
      var db, result;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              db = new _haraBlock();

              db.type = "transaction";
              db.hash = txHash;

              _context.next = 5;
              return new Promise(function (resolve, reject) {
                _DbConfig.Mapper.get({ item: db }).then(function (val) {
                  resolve(val);
                }).catch(function (err) {
                  resolve(false);
                });
              });

            case 5:
              result = _context.sent;

              if (!result) {
                _context.next = 8;
                break;
              }

              return _context.abrupt("return", result);

            case 8:
              return _context.abrupt("return", false);

            case 9:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this);
    }));

    return function (_x2) {
      return _ref.apply(this, arguments);
    };
  }();

  this.tblName = _DbConfig.TB_HARA_BLOCK;
};

exports.default = HaraBlock;

/***/ }),

/***/ "./src/network/PrivateNet.js":
/*!***********************************!*\
  !*** ./src/network/PrivateNet.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Web3Config = __webpack_require__(/*! ../constants/Web3Config */ "./src/constants/Web3Config.js");

var _HaraBlock = __webpack_require__(/*! ../model/HaraBlock */ "./src/model/HaraBlock.js");

var _HaraBlock2 = _interopRequireDefault(_HaraBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var PrivateNet = function PrivateNet() {
  var _this = this;

  _classCallCheck(this, PrivateNet);

  this._listenNewBlockHeader = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _this.subscriptionNewBlockHeader = _Web3Config.privWeb3.eth.subscribe("newBlockHeaders", function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(error, result) {
                var blockDetail, blockNumber, gasLimit, timeStamp, txHashs;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (error) {
                          _context2.next = 15;
                          break;
                        }

                        _context2.next = 3;
                        return _this.web3.eth.getBlock(result.hash);

                      case 3:
                        blockDetail = _context2.sent;
                        blockNumber = blockDetail.number;
                        gasLimit = blockDetail.gasLimit;
                        timeStamp = blockDetail.timestamp;
                        _context2.next = 9;
                        return new _HaraBlock2.default()._insertLastBlockDetail(blockNumber);

                      case 9:
                        _context2.next = 11;
                        return new _HaraBlock2.default()._insertBlock(blockDetail, "mined");

                      case 11:
                        txHashs = blockDetail.transactions;


                        if (txHashs.length > 0) {
                          txHashs.map(function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(txHash, key) {
                              var txReceipt, txDetail;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return _this.web3.eth.getTransactionReceipt(txHash);

                                    case 2:
                                      txReceipt = _context.sent;
                                      _context.next = 5;
                                      return _this.web3.eth.getTransaction(txHash);

                                    case 5:
                                      txDetail = _context.sent;

                                      console.log("txReceipt");
                                      console.log(txReceipt);
                                      console.log("txDetail");
                                      console.log(txDetail);
                                      _context.next = 12;
                                      return new _HaraBlock2.default()._insertTransaction(txReceipt, txDetail, gasLimit, timeStamp);

                                    case 12:
                                    case "end":
                                      return _context.stop();
                                  }
                                }
                              }, _callee, _this);
                            }));

                            return function (_x3, _x4) {
                              return _ref3.apply(this, arguments);
                            };
                          }());
                        }
                        _context2.next = 16;
                        break;

                      case 15:
                        console.error(error);

                      case 16:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, _this);
              }));

              return function (_x, _x2) {
                return _ref2.apply(this, arguments);
              };
            }()).on("error", console.error);

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  this._listenPendingBlock = function () {
    _this.subscriptionPendingTransactions = _Web3Config.privWeb3.eth.subscribe("pendingTransactions", function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(error, result) {
        var txHash, modelHaraBlock, checkDB;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                txHash = result;
                modelHaraBlock = new _HaraBlock2.default();
                _context4.next = 4;
                return modelHaraBlock._getTxData(txHash);

              case 4:
                checkDB = _context4.sent;

                if (!(checkDB === false)) {
                  _context4.next = 8;
                  break;
                }

                _context4.next = 8;
                return modelHaraBlock._insertPendingTransaction(txHash);

              case 8:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, _this);
      }));

      return function (_x5, _x6) {
        return _ref4.apply(this, arguments);
      };
    }()).on("error", console.error);
  };

  this.web3 = _Web3Config.privWeb3;
  this.subscriptionNewBlockHeader;
  this.subscriptionPendingTransactions;
};

exports.default = PrivateNet;

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi babel-polyfill ./handler.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! babel-polyfill */"babel-polyfill");
module.exports = __webpack_require__(/*! ./handler.js */"./handler.js");


/***/ }),

/***/ "@aws/dynamodb-data-mapper":
/*!********************************************!*\
  !*** external "@aws/dynamodb-data-mapper" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@aws/dynamodb-data-mapper");

/***/ }),

/***/ "aws-sdk":
/*!**************************!*\
  !*** external "aws-sdk" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ }),

/***/ "babel-polyfill":
/*!*********************************!*\
  !*** external "babel-polyfill" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),

/***/ "web3":
/*!***********************!*\
  !*** external "web3" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map