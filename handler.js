import { _BlockWatcher } from "./src/WatcherController";

'use strict';

const _watch = async () => {
  console.log("aa");
  await _BlockWatcher();
};

export {
  _watch
}