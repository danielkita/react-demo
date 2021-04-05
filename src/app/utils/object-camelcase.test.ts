import { camelcaseKeys } from "./object-camelcase";

describe("camelCase", () => {
  it("should replace keys", () => {
    // ARRANGE
    const input = {
      first_example_test: "abc",
      secondExample: "abc",
      last_examle: {
        foo_bar: "foobar",
      },
    };
    // ACT
    const result = camelcaseKeys(input);
    // ASSERT
    expect(result).toMatchObject({
      firstExampleTest: "abc",
      lastExamle: {
        fooBar: "foobar",
      },
      secondExample: "abc",
    });
  });
});
