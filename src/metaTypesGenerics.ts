// Generics allow to write code that works with multiple types instead of just one, 
// without losing type safety.

interface Costumer{
    id: number;
    name: string;
    clone (name:string):Costumer;
    
}
/function clone<T extends {Customer:name}>(name:Customer):Customer{
//    return Object.apply({}, Costumer);

    

//const k :Costumer = {id:123,name:"John"};
//const l = clone(k)

// 