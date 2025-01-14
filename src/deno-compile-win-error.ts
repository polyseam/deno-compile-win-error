import { ensureDir } from "@std/fs";

export async function denoCompileWinError() {
  const w = new Worker(import.meta.resolve("src/worker.ts"), {
    type: "module",
  });

  try {
    await ensureDir("foo/bar/baz/omg");
    throw new Error(
      "this will not be logged if compiled\nfor windows on deno v2.1.5",
    );
  } catch (err) {
    console.error(err as Error);
  }

  w.postMessage("worker I am trapped in a computer please elp");
}
