// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  const message =
    "this will not be logged if compiled\nfor windows on deno v2.1.5";
  console.log(message as string);
}
