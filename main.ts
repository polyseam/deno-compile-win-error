// import { denoCompileWinError } from "./src/deno-compile-win-error.ts";

import { homedir } from "node:os";

if (import.meta.main) {
  console.log(homedir())
  // await denoCompileWinError();
}
