import { _BlockWatcher } from "./src/WatcherController";

'use strict';

const _watch = async (event, context, callback) => {
  await _BlockWatcher();
  callback(null, {
    status: 200,
  })
};

export {
  _watch
}