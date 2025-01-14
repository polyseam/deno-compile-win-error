import { ensureDirSync } from "@std/fs";
import { homedir } from "node:os";
import * as path from "@std/path";
import { delay } from "@std/async";

export async function denoCompileWinError() {
  await delay(1);
  const home = homedir();
  const whereTheProblemsAre = path.join(home, "problematic");

  const w = new Worker(import.meta.resolve("src/worker.ts"), {
    type: "module",
  });

  try {
    ensureDirSync(whereTheProblemsAre);

    throw new Error(
      "this will not be logged if compiled\nfor windows on deno v2.1.5",
    );
  } catch (err) {
    console.error(err as Error);
  }

  w.postMessage("worker I am trapped in a computer please elp");
}
