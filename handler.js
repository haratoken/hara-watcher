import { _BlockWatcher, _RecoveryWatcher } from "./src/WatcherController";
import { recoveryStatus } from "./src/constants/AppConfig";

'use strict';

const _watch = async () => {
  console.log("running watch");

  if(recoveryStatus == "true") {
    await _RecoveryWatcher();
  } else {
    await _BlockWatcher();
  }

};

_watch();