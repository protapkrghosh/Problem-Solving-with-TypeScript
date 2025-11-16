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



