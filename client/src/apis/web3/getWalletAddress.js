import web3 from "./index";
import isAvailable from "./isAvailable";

export default async (index = 0) => (
  isAvailable() ? 
    (await web3.eth?.getAccounts())[index] : null
)
