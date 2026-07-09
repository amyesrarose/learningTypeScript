// Generics allow to write code that works with multiple types instead of just one, 
// without losing type safety.

interface Costumer{
    id: number;
    name: string;
}

function clone<T>(source: T): T {
    return Object.assign({}, source) as T;
}

const k: Costumer = {id:123, name: "John"};
const l = clone(k);

// 
//. Generics can be used in classes, interfaces, and functions.

                            //Generic as a class
class StorageContainer<T>{ 
    private contents : T[];

constructor (){
    this.contents = [];

}
addItem(item:T):void{
    this.contents.push(item);

}
getItem(index:number): T | undefined{
    return this.contents[index];
}

}
const username = new StorageContainer<string>();
username.addItem("Alice");
username.addItem("Bob");
console.log(username.getItem(0)); // Output: Alice
console.log(username.getItem(1)); // Output: Bob

const friendsCount = new StorageContainer<number>();
friendsCount.addItem(7);
friendsCount.addItem(18);
console.log(friendsCount.getItem(0)); // Output: Alice
console.log(friendsCount.getItem(1)); // Output: Bob


              // Generic as interface
// T is a placeholder for whatever data the API sends back.
interface ApiResponse<T> {
  status: number;
  isError: boolean;
  data: T; // The data type will change depending on the endpoint!
}

// Let's say we have two different types of data:
interface User {
  name: string;
  age: number;
}

interface Product {
  title: string;
  price: number;
}

// Now we can use the exact same ApiResponse interface for both!
const userResponse: ApiResponse<User> = {
  status: 200,
  isError: false,
  data: { name: "Alice", age: 28 } // TypeScript enforces the User shape here
};

const productResponse: ApiResponse<Product> = {
  status: 200,
  isError: false,
  data: { title: "Coffee Mug", price: 12.99 } // TypeScript enforces the Product shape here
};
                    //Generic as funtion
// The <T> tells TypeScript: "This function uses a generic type."
// We take an item of type T, and return an array of type T[].
function wrapInArray<T>(item: T): T[] {
  return [item];
}

// When we call the function, TypeScript automatically figures out what T is.
const stringArray = wrapInArray("hello"); // T becomes string. Returns: string[]
const numberArray = wrapInArray(42);      // T becomes number. Returns: number[]
const booleanArray = wrapInArray<boolean>(true);