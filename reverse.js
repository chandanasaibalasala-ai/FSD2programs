const sentence = "My name is raja";

const result = sentence
  .split(" ")
  .map(word => word.split("").reverse().join(""))
  .join(" ");

console.log(result);

