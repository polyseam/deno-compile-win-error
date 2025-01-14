import { homedir } from "node:os";

if (import.meta.main) {
  const home = homedir();

  try {
    console.log("homedir:", home);
    throw new Error(
      "this will not be logged if compiled\nfor windows on deno v2.1.5",
    );
  } catch (err) {
    console.error(err as Error);
  }
}
