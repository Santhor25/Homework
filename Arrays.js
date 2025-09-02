let arr = [1, 2, 3, 4, 5];

console.log("at(2):", arr.at(2)); // 3
console.log("concat:", arr.concat([6, 7]));
console.log("copyWithin:", arr.slice().copyWithin(0, 3));
console.log("entries:");
for (let [index, value] of arr.entries()) {
  console.log(index, value);
}
console.log("every > 0:", arr.every(x => x > 0));
console.log("fill:", arr.slice().fill(0, 2, 4));
console.log("filter pares:", arr.filter(x => x % 2 === 0));
console.log("find > 3:", arr.find(x => x > 3));
console.log("findIndex > 3:", arr.findIndex(x => x > 3));
console.log("findLast > 3:", arr.findLast(x => x > 3));
console.log("findLastIndex > 3:", arr.findLastIndex(x => x > 3));
console.log("flat:", [[1, 2], [3, 4]].flat());
console.log("flatMap:", arr.flatMap(x => [x, x * 2]));
console.log("forEach:");
arr.forEach(x => console.log(x));
console.log("includes 3:", arr.includes(3));
console.log("indexOf 3:", arr.indexOf(3));
console.log("join:", arr.join("-"));
console.log("keys:");
for (let key of arr.keys()) console.log(key);
console.log("lastIndexOf 3:", [1, 3, 2, 3].lastIndexOf(3));
console.log("map x2:", arr.map(x => x * 2));
console.log("pop:", arr.slice().pop());
console.log("push:", (() => { let tmp = arr.slice(); tmp.push(6); return tmp; })());
console.log("reduce suma:", arr.reduce((a, b) => a + b, 0));
console.log("reduceRight resta:", arr.reduceRight((a, b) => a - b));
console.log("reverse:", arr.slice().reverse());
console.log("shift:", arr.slice().shift());
console.log("slice (1,3):", arr.slice(1, 3));
console.log("some > 4:", arr.some(x => x > 4));
console.log("sort:", [3, 1, 4].sort());
console.log("splice eliminar:", (() => { let tmp = arr.slice(); tmp.splice(2, 1); return tmp; })());
console.log("toLocaleString:", arr.toLocaleString());
console.log("toString:", arr.toString());
console.log("unshift:", (() => { let tmp = arr.slice(); tmp.unshift(0); return tmp; })());
console.log("values:");
for (let value of arr.values()) console.log(value);