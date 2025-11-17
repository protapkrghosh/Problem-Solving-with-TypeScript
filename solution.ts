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

const getLength = (item: string | number[]): string | number => {
   if (typeof item === "string" || Array.isArray(item)) {
      return item.length;
   } else {
      return "Invalid type";
   }
};

const output1 = getLength("typescript");
const output2 = getLength([10, 20, 30, 40]);

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
const person2 = new Person("Alice", 25);

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

interface ActiveUser {
   id: number;
   name: string;
   email: string;
   isActive: boolean;
}

const filterActiveUsers = (users: ActiveUser[]): ActiveUser[] => {
   const currentUser = users.filter((user) => user.isActive === true);
   return currentUser;
};

const users = [
   { id: 1, name: "Rakib", email: "rakib@example.com", isActive: true },
   { id: 2, name: "Asha", email: "asha@example.com", isActive: false },
   { id: 3, name: "Rumi", email: "rumi@example.com", isActive: true },
];

const finalUser = filterActiveUsers(users);

interface Book {
   title: string;
   author: string;
   publishedYear: number;
   isAvailable: boolean;
}

const printBookDetails = (bookInfo: Book): string => {
   const availability = bookInfo.isAvailable ? "Yes" : "No";

   return `Title: ${bookInfo.title}, Author: ${bookInfo.author}, Published: ${bookInfo.publishedYear}, Available: ${availability}`;
};

const myBook: Book = {
   title: "The Great Gatsby",
   author: "F. Scott Fitzgerald",
   publishedYear: 1925,
   isAvailable: true,
};

const detailsBook = printBookDetails(myBook);

function getUniqueValues(
   arr1: (number | string)[],
   arr2: (number | string)[]
): (number | string)[] {
   const result: (number | string)[] = [];

   function currentValue(
      value: number | string,
      array: (number | string)[]
   ): boolean {
      for (let i = 0; i < array.length; i++) {
         if (array[i] === value) {
            return true;
         }
      }
      return false;
   }

   for (let i = 0; i < arr1.length; i++) {
      if (!currentValue(arr1[i], result)) {
         result[result.length] = arr1[i];
      }
   }

   for (let i = 0; i < arr2.length; i++) {
      if (!currentValue(arr2[i], result)) {
         result[result.length] = arr2[i];
      }
   }

   return result;
}

const array1 = [1, 2, 3, 4, 5];
const array2 = [3, 4, 5, 6, 7];

const uniqueResult = getUniqueValues(array1, array2);

interface ProductInfo {
   name: string;
   price: number;
   quantity: number;
   discount?: number;
}

const calculateTotalPrice = (products: ProductInfo[]): number => {
   const productPrice = products.reduce((total, product) => {
      const totalPrice = product.price * product.quantity;

      const discountedPrice = product.discount
         ? totalPrice - (totalPrice * product.discount) / 100
         : totalPrice;

      return total + discountedPrice;
   }, 0);

   return productPrice;
};

const products = [
   { name: "Pen", price: 10, quantity: 2 },
   { name: "Notebook", price: 25, quantity: 3, discount: 10 },
   { name: "Bag", price: 50, quantity: 1, discount: 20 },
];

const totalPrice = calculateTotalPrice(products);
