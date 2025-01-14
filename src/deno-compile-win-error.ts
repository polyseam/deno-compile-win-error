// import { ensureDirSync } from "@std/fs";
import { homedir } from "node:os";
// import * as path from "@std/path";
import { delay } from "@std/async";

export async function denoCompileWinError() {
  await delay(1);
  const home = homedir();
  if (home) {
    console.log(`This will not be printed when compiled for windows`);
  }
}
