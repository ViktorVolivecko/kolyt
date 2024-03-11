const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
true + kiwi
const calculateFactorial = n => n === 0 ? 1 : n * calculateFactorial(n - 1);

const getRandomSubset = (array, size) => array.slice(0, size);

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
grape

let array = getRandomArray(); array.forEach(item => console.log(item));
48 - 26,0,28,69,77,37,24,2,53,47,22,19,71,25,51,12,4,13,90,88,12,97,55,60,2,82,35,28,97,37,14,80,15,91,58,34,42,40,6,71,10,34,41
const getRandomSubset = (array, size) => array.slice(0, size);
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
// This is a comment
const binarySearch = (array, target) => { let start = 0, end = array.length - 1; while (start <= end) { const mid = Math.floor((start + end) / 2); if (array[mid] === target) return mid; else if (array[mid] < target) start = mid + 1; else end = mid - 1; } return -1; };
false + grape
const shuffleArray = array => array.sort(() => Math.random() - 0.5);
82 + grape
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
