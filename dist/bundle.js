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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("@aws/dynamodb-data-mapper");

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-polyfill");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._watch = undefined;

var _WatcherController = __webpack_require__(4);

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

'use strict';

var _watch = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            console.log("aa");
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

exports._watch = _watch;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports._BlockWatcher = undefined;

var _PrivateNet = __webpack_require__(5);

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
            privNet._listenPendingBlock();

          case 5:
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Web3Config = __webpack_require__(6);

var _HaraBlock = __webpack_require__(8);

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
            console.log("listen to block header");
            _this.subscriptionNewBlockHeader = _Web3Config.privWeb3.eth.subscribe("newBlockHeaders", function () {
              var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(error, result) {
                var blockDetail, txHashs;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        if (error) {
                          _context2.next = 8;
                          break;
                        }

                        _context2.next = 3;
                        return _this.web3.eth.getBlock(result.hash);

                      case 3:
                        blockDetail = _context2.sent;
                        _context2.next = 6;
                        return new _HaraBlock2.default()._insertBlock(blockDetail, "mined");

                      case 6:
                        txHashs = blockDetail.transactions;


                        if (txHashs.length > 0) {
                          txHashs.map(function () {
                            var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(txHash, key) {
                              var txReceipt;
                              return regeneratorRuntime.wrap(function _callee$(_context) {
                                while (1) {
                                  switch (_context.prev = _context.next) {
                                    case 0:
                                      _context.next = 2;
                                      return _this.web3.eth.getTransactionReceipt(txHash);

                                    case 2:
                                      txReceipt = _context.sent;
                                      _context.next = 5;
                                      return new _HaraBlock2.default()._insertTransaction(txReceipt);

                                    case 5:
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

                      case 8:

                        console.error(error);

                      case 9:
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

          case 2:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  this._listenPendingBlock = function () {};

  this.web3 = _Web3Config.privWeb3;
  this.subscriptionNewBlockHeader;
};

exports.default = PrivateNet;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.privWeb3 = exports.privProvider = undefined;

var _web = __webpack_require__(7);

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var privProvider = exports.privProvider = process.env.PRIV_NETWORK ? process.env.PRIV_NETWORK : "ws://ganache_priv:8546";
var privWeb3 = exports.privWeb3 = new _web2.default(new _web2.default.providers.WebsocketProvider(privProvider));

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("web3");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Object$definePropert;

var _DbConfig = __webpack_require__(9);

var _dynamodbDataMapper = __webpack_require__(0);

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
    logs: { type: "String" },
    status: { type: "String" }
  }
}), _Object$definePropert));

var HaraBlock = function HaraBlock() {
  _classCallCheck(this, HaraBlock);

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

  this._insertTransaction = function (data) {
    return new Promise(function (resolve, reject) {
      if ("transactionHash" in data) {
        var db = new _haraBlock();
        var _item = Object.assign(db, data);
        _item.type = "transactions";
        _item.hash = _item.transactionHash;
        _item.timestamp = new Date().toISOString();

        if (_item.logs.length == 0) {
          _item.transactionType = "user_to_user";
        } else if (_item.logs.length == 1) {
          _item.transactionType = "contract_creation";
        } else {
          _item.transactionType = "user_to_contract";
        }

        _item.logs = JSON.stringify(_item.logs);
        _item.status = _item.status ? "true" : "false";
        _item.contractAddress = _item.contractAddress ? _item.contractAddress.toString() : "*";
        _item.number = _item.blockNumber;

        _DbConfig.Mapper.put({ item: _item }).then(function () {
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
      } else {
        resolve({
          status: 0,
          message: "there is no transaction Hash inside your data"
        });
      }
    });
  };

  this.tblName = _DbConfig.TB_HARA_BLOCK;
};

exports.default = HaraBlock;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.TB_HARA_BLOCK = exports.Mapper = exports.InitDB = exports.configDB = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _awsSdk = __webpack_require__(10);

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _dynamodbDataMapper = __webpack_require__(0);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AWSaccesssKeyId = "not-important";
var AWSsecretAccessKey = "not-important";
var AWSregion = process.env.REGION ? process.env.REGION : "local";
var AWSendpoint = "http://dynamodb_local:8000";

var configDB = exports.configDB = function configDB() {
  var config = {
    accessKeyId: AWSaccesssKeyId,
    secretAccessKey: AWSsecretAccessKey,
    region: AWSregion
  };

  if (process.env.IS_DEV) {
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
/* 10 */
/***/ (function(module, exports) {

module.exports = require("aws-sdk");

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map