//! Problem 01:

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

//! Problem 02:
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

//! Problem 03:
class Person {
   name: string;
   age: number;

   constructor(name: string, age: number) {
      this.name = name;
      this.age = age;
   }

   getDetails() {
      return `'Name: ${this.name}, Age: ${this.age}'`;
   }
}

const person1 = new Person("John Doe", 30);
// console.log(person1.getDetails());

const person2 = new Person("Alice", 25);
// console.log(person2.getDetails());

//! Problem 04:

type Books = {
   title: string;
   rating: number;
};

const filterByRating = (item: Books[]): Books[] => {
   const filterBooks = item.filter((item) => item.rating >= 4);
   return filterBooks;
};

const books = [
   { title: "Book A", rating: 4.5 },
   { title: "Book B", rating: 3.2 },
   { title: "Book C", rating: 5.0 },
];

const filteredResult = filterByRating(books);
// console.log(filteredResult);

