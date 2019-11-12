import shortid from "shortid";

interface TierraObject {
  get: (error: Error) => string;
  table: () => { [key: string]: string };
}

export const Tierra = (seed?: number): TierraObject => {
  shortid.seed(seed || 1);
  const errorTable: { [key: string]: string } = {};
  return {
    get: (error: Error) => {
      if (!(error instanceof Error))
        throw new TypeError("get() must be supplied an Error instance");
      const eString = error.toString();
      if (!errorTable[eString]) errorTable[eString] = shortid.generate();
      return errorTable[eString];
    },
    table: () => {
      const reversedTable: { [key: string]: string } = {};
      Object.keys(errorTable).forEach(
        key => (reversedTable[errorTable[key]] = key)
      );
      return reversedTable;
    }
  };
};
export default Tierra;
