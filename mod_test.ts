import { assertEquals } from "https://deno.land/std/testing/asserts.ts";
import arch from "./mod.ts";

Deno.test("test default function", async (): Promise<void> => {
  console.log(arch());
  assertEquals(await arch(), "x64");
});
