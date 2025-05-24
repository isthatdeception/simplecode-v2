function depth() {
  return "hello world";
}

console.log(depth());

const mockarray = [1, 2, 3, 4, 5, 6];

const mapfunction = mockarray.map((n) => {
  return n * 2;
});

console.log(mapfunction);

// filter function
const filterFunction = mockarray.filter((num) => {
  return num % 2 != 0;
});

console.log(filterFunction);

// reduce function
const reducefunction = mockarray.reduce((accumulator, current) => {
  console.log(accumulator, current);
  return accumulator + current;
});

console.log(reducefunction);

// callback function

function greetSomeone(name, callback) {
  console.log("hello " + name);
  callback();
}
greetSomeone("John", function () {
  console.log("this is a callback function");
});

