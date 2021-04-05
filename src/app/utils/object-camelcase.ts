const isObject = (obj: object) =>
  obj === Object(obj) && !Array.isArray(obj) && typeof obj !== "function";

const camelCase = (key: string) =>
  key.replace(/([-_][a-z])/gi, ($1) =>
    $1.toUpperCase().replace("-", "").replace("_", "")
  );

export const camelcaseKeys = (obj: any): object => {
  if (isObject(obj)) {
    const n: any = {};

    Object.keys(obj).forEach((k) => {
      n[camelCase(k)] = camelcaseKeys(obj[k]);
    });

    return n;
  } else if (Array.isArray(obj)) {
    return obj.map((i) => camelcaseKeys(i));
  }

  return obj;
};
