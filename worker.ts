declare const self: {
  onmessage: (message: string) => void;
  Deno: typeof Deno;
};

self.onmessage = (message: string) => {
  console.log("worker received message:", message);
  Deno.exit(0);
};
