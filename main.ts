import { denoCompileWinError } from "./src/deno-compile-win-error.ts";

if (import.meta.main) {
  await denoCompileWinError();
}
