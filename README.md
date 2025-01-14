# Deno `v2.1.5` Compile Error for Windows Target

[main.ts](main.ts) is a deno script that will behave properly when compiled on
MacOS and Linux, but throw an error when compiled for Windows.

The issue is only present in Deno `v2.1.5` and not in `v2.1.4`.

The issue seems to be related to `homedir` from `node:os`;

The issue is demonstrated in GitHub Actions in the
[demo.yml](.github/workflows/demo.yml) file.
