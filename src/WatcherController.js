import PrivateNet from "./network/PrivateNet";
import { recoveryStartBlock, recoveryEndBlock } from "./constants/AppConfig";

export const _BlockWatcher = async () => {
  const privNet = await new PrivateNet();

  console.log("## running watcher" + new Date().toISOString());
  
  privNet._listenNewBlockHeader();
  privNet._listenPendingBlock();
};

export const _RecoveryWatcher = async () => {
  const privNet = await new PrivateNet();

  console.log("## Starting Recovery " + new Date().toISOString());
  
  let startBlock = parseInt(recoveryStartBlock);
  let endBlock = parseInt(recoveryEndBlock);

  console.log("## startBlock "+ startBlock);
  console.log("## endBlock"+ endBlock);

  if(startBlock && endBlock) {
    for (let index = startBlock; index < endBlock; index++) {
      await privNet._makeBlockData(index);
    }
  } else {
    console.log("## there is error on your env recovery");
  }

}
