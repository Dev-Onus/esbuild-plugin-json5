const { json5Plugin } = require("../dist"),
  { assert } = require("chai"),
  { build } = require("esbuild");

describe("JSON5 esbuild tests", () => {
  it("Loads .json5 files", (done) => {
    test("basic")
      .then((res) => {
        assert(res);
        done();
      })
      .catch(done);
  });
});

function test(test, options) {
  return build({
    entryPoints: [`tests/basic.ts`],
    bundle: true,
    outfile: `dist/${test}.js`,
    plugins: [json5Plugin(options)]
  }).catch(() => process.exit(1));
}
