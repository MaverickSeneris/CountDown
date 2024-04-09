import generateUniqueKey from "./keyGenerator";

export default function getLoopingData(size) {
    const data = Array.from({ length: size }, (_, i) => {
      const key = generateUniqueKey(); // Use the function to generate a unique key
      return { key, value: i.toString().padStart(2, "0") };
    });
  
    console.log(data); // Log the array of objects containing both key and value
    return data.map(item => item.value); // Return an array of values only
  }