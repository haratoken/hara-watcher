import { _BlockWatcher } from "./src/WatcherController";

'use strict';

const _watch = async () => {
  console.log("running watch");
  await _BlockWatcher();
};

_watch();