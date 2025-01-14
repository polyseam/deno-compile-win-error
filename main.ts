import { ensureDirSync } from "@std/fs";
if (import.meta.main) {
  const w = new Worker(import.meta.resolve("./worker.ts"), {
    type: "module",
  });

  try {
    ensureDirSync("foo/bar/baz/omg");
    throw new Error(
      "this will not be logged if compiled\nfor windows on deno v2.1.5",
    );
  } catch (err) {
    console.error(err as Error);
  }

  w.postMessage("worker I am trapped in a computer please elp");
}
