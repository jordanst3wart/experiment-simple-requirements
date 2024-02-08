// Example JSON string
const jsonString = '{"name": "John", "age": 30}';

// Parse JSON string to object with explicit type
interface Person {
    name: string;
    age: number;
}

const parsedObject: Person = JSON.parse(jsonString);

// Access properties of parsed object
console.log(parsedObject.name); // Output: John
console.log(parsedObject.age); // Output: 30