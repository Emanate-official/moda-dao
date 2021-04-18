import web3 from "./index";
import isAvailable from "./isAvailable";

const connect = async () => {
  if (!isAvailable()) {
    return false;
  }
  await web3.currentProvider.enable();
  return true;
};

export default connect;