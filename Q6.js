// 6. Nested Objects.
// Write a function that takes an object representing a person as input, and extracts the name and street
// properties from a nested object using object destructuring. The function should return an object with these two
// properties. A sample object is given below.

function extractNameAndStreet(personObj) {
    // Destructure the nested object to extract 'name' and 'address' properties
    const { name, address: { street } } = personObj;
  
    // Create a new object with 'name' and 'street' properties
    const extractedInfo = { name, street };
  
    return extractedInfo;
  }
  
  // Sample object representing a person
  const person = {
    name: "John Doe",
    address: {
      street: "123 Main St",
      city: "Cityville",
      state: "CA",
      postalCode: "12345"
    }
  };
  
  // Call the function to extract 'name' and 'street'
  const result = extractNameAndStreet(person);
  
  console.log(result); // Output: { name: 'John Doe', street: '123 Main St' }
  