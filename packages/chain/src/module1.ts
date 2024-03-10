import { state, runtimeMethod, runtimeModule } from "@proto-kit/module";
import type { Option } from "@proto-kit/protocol";
import { State, StateMap, assert } from "@proto-kit/protocol";
import {
  PublicKey,
  Struct,
  UInt64,
  Provable,
  Bool,
  Field,
  Poseidon,
} from "o1js";

import { RuntimeModule } from "@proto-kit/module";

export class ThimblerigField extends Struct({
}) {}

export class GameInfo1 extends Struct({
  player1: PublicKey,
  player2: PublicKey,
  currentMoveUser: PublicKey,
  lastMoveBlockHeight: UInt64,
  field: ThimblerigField,
  winner: PublicKey,
}) {}

@runtimeModule()
export class ThimblerigLogic extends RuntimeModule {
  // Game ids start from 1
  @state() public games = StateMap.from<UInt64, GameInfo1>(UInt64, GameInfo1);
}
