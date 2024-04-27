// import generateUniqueKey from "./keyGenerator";
export function generateUniqueKey() {
  const timestamp = Date.now();
  const random = Math.random().toString(36).substring(2, 15);
  return `${timestamp}-${random}`;
}

export default function getLoopingData(size) {
    const data = Array.from({ length: size }, (_, i) => {
      const key = generateUniqueKey(); // Use the function to generate a unique key
      return { key, value: i.toString().padStart(2, "0") };
    });
  
    return data.map(item => item.value); // Return an array of values only
}

