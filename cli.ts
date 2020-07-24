import arch from "./mod.ts";

// https://deno.land/manual/tools/script_installer
if (import.meta.main) {
  for (let arg of Deno.args) {
    console.log(arg, arch());
  }
}
