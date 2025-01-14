// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  try {
    throw new Error("this will not be logged if compiled\nfor windows on deno v2.1.5");
  } catch (err){
    console.error(err as Error);
  }
}
