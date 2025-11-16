//? Problem 01:

const formatValue = (
   value: string | number | boolean
): string | number | boolean => {
   if (typeof value === "string") {
      return value.toUpperCase();
   } else if (typeof value === "number") {
      return value * 10;
   } else if (typeof value === "boolean") {
      return !value;
   }

   return value;
};

const result1 = formatValue("hello");
const result2 = formatValue(5);
const result3 = formatValue(true);

// console.log(result1, result2, result3);

//? Problem 02:
const getLength = (item: string | number[]): string | number => {
   if (typeof item === "string" || Array.isArray(item)) {
      return item.length;
   } else {
      return "Invalid type";
   }
};

const output1 = getLength("typescript");
const output2 = getLength([10, 20, 30, 40]);

// console.log(output1, output2);
