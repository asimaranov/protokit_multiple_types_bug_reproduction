import { UInt64 } from "o1js";
import { Balances } from "./balances";
import { ThimblerigLogic } from "./module1";
import { RandzuLogic } from "./module2";

export default {
  modules: {
    Balances,
    ThimblerigLogic,
    RandzuLogic
  },
  config: {
    Balances: {
      totalSupply: UInt64.from(10000),
    },
    ThimblerigLogic: {},
    RandzuLogic: {}
  },
};
