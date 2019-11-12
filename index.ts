import shortid from "shortid";

export const Tierra = (seed?: number) => {
  shortid.seed(seed || 1);
  const errorTable: { [key: string]: string } = {};
  return {
    get: (error: Error) => {
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
    },
  };
};
export default Tierra;
