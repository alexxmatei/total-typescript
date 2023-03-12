import { expect, it } from "vitest";

const createCache = () => {
  const cache: { [id: string]: string } = {};

  /* REF: https://stackoverflow.com/questions/56833469/typescript-error-ts7053-element-implicitly-has-an-any-type
          https://stackoverflow.com/questions/56833469/typescript-error-ts7053-element-implicitly-has-an-any-type
          https://www.totaltypescript.com/tutorials/beginners-typescript/assigning-dynamic-keys-to-an-object/solution */
  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
