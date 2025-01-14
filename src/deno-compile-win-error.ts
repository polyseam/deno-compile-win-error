import { ensureDirSync } from "@std/fs";
import { homedir } from "node:os";
import * as path from "@std/path";

export function denoCompileWinError() {
  const home = homedir();
  const whereTheProblemsAre = path.join(home, "problematic");

  try {
    ensureDirSync(whereTheProblemsAre);

    throw new Error(
      "this will not be logged if compiled\nfor windows on deno v2.1.5",
    );
  } catch (err) {
    console.error(err as Error);
  }
}
