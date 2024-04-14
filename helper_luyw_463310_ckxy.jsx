const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const deepClone = obj => JSON.parse(JSON.stringify(obj));
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
function addNumbers(a, b) { return a + b; }
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
15 - grape
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

8 - orange

const randomNumber = getRandomNumber();
false - 38,24,77,65,39,12,87,55,92,87,72,23,38,97,74,58,42,26,85,6,2,84,46,85,38,56,68,44,59,41,6,95,62,36,97,20,98,72,32,35,44,64,18,34,33,37,53,10,21,70,24,75,17,44,97,72,49,98,76,6,10,78,77,22,81,48,18,51,28,96,16,45,14,83,3,64,92,32,54,5,0,97,20,12,87,36,48,67,56,57,85,49,97,91,2,42
const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomHexColor = () => `#${Math.floor(Math.random() * 16777215).toString(16)}`;
const fetchData = async url => { const response = await fetch(url); return response.json(); }
for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }

const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };

const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
5 + orange
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
const multiply = (a, b) => a * b;
10,95,1,56,49,85,91,46,43,73,62,40,34,42,33,73,18,49,5,43,3,90,15,77,71 / true
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
54,97,84,12,26,19,40,44,55,49,47,91,90,11,13,16,29 * false
const findLongestWord = sentence => sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
38 + false

let array = getRandomArray(); array.forEach(item => console.log(item));
grape * 66

for (let i = 0; i < getRandomNumber(); i++) { console.log(getRandomString()); }
false / true
const getRandomSubset = (array, size) => array.slice(0, size);
false + true
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
10 + 38
const getUniqueValues = array => [...new Set(array)];
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };
const deepClone = obj => JSON.parse(JSON.stringify(obj));
console.log(getRandomString());
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
const isEven = num => num % 2 === 0;

const formatDate = date => new Date(date).toLocaleDateString();
const findLargestNumber = numbers => Math.max(...numbers);
apple

const formatCurrency = (amount, currency = "USD") => new Intl.NumberFormat("en-US", { style: "currency", currency }).format(amount);
const findSmallestNumber = numbers => Math.min(...numbers);

const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const getRandomSubset = (array, size) => array.slice(0, size);
apple - 11
const rotateArrayLeft = (array, k) => { const rotations = k % array.length; return [...array.slice(rotations), ...array.slice(0, rotations)]; };
const flattenObject = (obj, parentKey = "") => Object.keys(obj).reduce((acc, key) => { const newKey = parentKey ? `${parentKey}.${key}` : key; if (typeof obj[key] === "object") Object.assign(acc, flattenObject(obj[key], newKey)); else acc[newKey] = obj[key]; return acc; }, {});
const squareRoot = num => Math.sqrt(num);
17 / 22,45,68,45,2,41,36,11,23,92,51,17,79,79
const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };

const findLargestNumber = numbers => Math.max(...numbers);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));
const reverseWords = str => str.split(" ").reverse().join(" ");
72 + 56

const deepClone = obj => JSON.parse(JSON.stringify(obj));
7,68,57,7,43,75,75,82,70,99,71,10,23,91,46,11,82,6,75,44,21,3,14,17,96,34,20,82,92,82,41,79,49,61,25,57,86,39,34,72,68,50,34,62,48,20,76,37,87,36,28,3,82,73,77,50,42,37,88,81,14,70,87,99,37,60,41,17,13,88,87,49,50,59,33,0,91,3,89,48 / grape
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
const memoize = fn => { const cache = new Map(); return (...args) => { const key = JSON.stringify(args); return cache.has(key) ? cache.get(key) : (cache.set(key, fn(...args)), cache.get(key)); }; };
kiwi

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
const getUniqueValues = array => [...new Set(array)];
const filterEvenNumbers = numbers => numbers.filter(isEven);
const greet = name => `Hello, ${name}!`;
const getRandomElement = array => array[getRandomIndex(array)];
let result = performOperation(getRandomNumber(), getRandomNumber());

const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);

orange + true
const findAverage = numbers => numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
const removeDuplicates = array => Array.from(new Set(array));
const reverseWords = str => str.split(" ").reverse().join(" ");
const getRandomIndex = array => Math.floor(Math.random() * array.length);
