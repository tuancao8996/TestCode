/**
 * JS Training – 50 exercises with a simple test runner
 *
 * How to use:
 * - Run: `node training.js`
 * - Implement each function (marked TODO) to make tests pass
 * - The runner shows how many cases passed in total
 */

// --------------------------
// 1) Exercises (implement me)
// --------------------------

// 1) Cộng hai số: trả về a + b
function add(a, b) {
  return a+b;
}

// 2) Kiểm tra số chẵn: trả về true nếu n là số chẵn
function isEven(n) {
  return n %2 ===0;
}

// 3) Giai thừa: factorial(n) với n >= 0
function factorial(n) {
  return undefined;
}

// 4) Số Fibonacci thứ n (0-indexed: 0,1,1,2,3,...)
function fibonacci(n) {
  return fibonacci(n-1) + fibonacci(n-2)
}

// 5) Đảo chuỗi: trả về chuỗi đảo ngược của s
function reverseString(s) {
  return s.split("").reverse().join("")
}

// 6) Palindrome: true nếu s là palindrome (không phân biệt hoa/thường, bỏ khoảng trắng)
function isPalindrome(s) {
  let str = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  if (str.length === 0) return false;
  
  let right = str.length - 1, left = 0;
  while (left < right) {
    if (str[left] !== str[right]) return false
    left++;
    right--;
  }
  return true


}

// 7) Max: trả về số lớn nhất trong mảng
function max(arr) {
  if (arr.length === 0) return 0;
  // return Math.max(...arr);
  let maxC = arr[0];
  for (let val of arr) {
    if (maxC < val) {
      maxC = val;
    }
  }
  return maxC;
}

// 8) Min: trả về số nhỏ nhất trong mảng
function min(arr) {
  return Math.min(...arr);
}

// 9) Sum: tổng các phần tử số trong mảng
function sum(arr) {
  return arr.reduce((acc,val)=> acc+val,0);
}

// 10) Product: tích các phần tử số trong mảng
function product(arr) {
  return arr.reduce((acc,val)=> acc*val,1);
}

// 11) Unique: loại bỏ phần tử trùng, giữ lần xuất hiện đầu tiên
function unique(arr) {
  let result = new Set(arr);
  return [...result]
}

// 12) Flatten một mức: [[1],[2,3]] -> [1,2,3]
function flattenOne(arr) {
  return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenOne(val) : val), []);
}

// 13) Chia mảng thành các nhóm kích thước k (nhóm cuối có thể nhỏ hơn)
function chunk(arr, size) {
  let result = [];
  for (let i = 0; i < arr.length; i+=size){
    result.push(arr.slice(i,i+size))
  }
  return result;
}

// 14) Anagram: true nếu a và b là hoán vị nhau (bỏ khoảng trắng, không phân biệt hoa/thường)
function isAnagram(a, b) {
  let count = {};
  for (const char of a) {
    count[char] = (count[char]|| 0) + 1
  }
  for (const char of b) {
    if (!count[char]) return false
    count[char]--;
  }
  return true
}

// 15) Đếm nguyên âm: a,e,i,o,u trong chuỗi (không phân biệt hoa/thường)
function countVowels(s) {
  let vowels = 'aeiou'
  let count = 0;
  for (let char of s.toLowerCase()) {
    if (vowels.includes(char)) {
      count++
    }
  }
  return count;
}

// 16) Bỏ nguyên âm khỏi chuỗi
function removeVowels(s) {
   let vowels = "aeiou";
  let result = "";
  for (let char of s) {
    if (!vowels.includes(char.toLowerCase())) {
      result+= char
    }
  }
  return result;

}

// 17) Viết hoa chữ cái đầu mỗi từ
function capitalizeWords(s) {
    if (s.length === 0) return "";
  return s.toLowerCase().split(" ").map((ob)=> ob.charAt(0).toUpperCase()+ ob.slice(1)).join(" ")
}

// 18) Title Case (đơn giản) – giống capitalizeWords
function titleCase(s) {
  if (s.length === 0) return "";
  return s.toLowerCase().split(" ").map((ob)=> ob.charAt(0).toUpperCase()+ ob.slice(1)).join(" ")
}

// 19) Chuyển về camelCase từ chuỗi có khoảng trắng/underscore/dash
function toCamelCase(s) {
  return undefined;
}

// 20) Chuyển về snake_case từ chuỗi có khoảng trắng/dấu gạch
function toSnakeCase(s) {
  return undefined;
}

// 21) So sánh mảng nông (các phần tử bằng nhau theo ===)
function arrayEquals(a, b) {
  for (let i = 0; i < a.length - 1; i++){
    if (a[i] !== b[i]) return false;
  }
  return true
}

// 22) Xóa mọi phần tử bằng value khỏi mảng (trả về mảng mới)
function removeAll(arr, value) {
  if (arr.length === 0) return [];
  return arr.filter((ob) => ob !== value);
}

// 23) Two Sum: trả về chỉ số [i,j] sao cho nums[i]+nums[j]=target, không có thì null
function twoSum(nums, target) {
  // 
  const map = new Map();

  for (let i = 0; i < nums.length; i++){
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set( nums[i],i);
  }
  return [];



}

// 24) Tìm tuyến tính: trả về index hoặc -1
function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) return i
  }
  return -1
}

// 25) Tìm nhị phân (mảng tăng dần): trả về index hoặc -1
function binarySearch(arr, x) {
  return undefined;
}

// 26) Kiểm tra số nguyên tố (n >= 0)
function isPrime(n) {
  return undefined;
}

// 27) Liệt kê số nguyên tố ≤ n
function primesUpTo(n) {
  return undefined;
}

// 28) Ước chung lớn nhất (thuật toán Euclid)
function gcd(a, b) {
  return undefined;
}

// 29) Bội chung nhỏ nhất, dùng gcd
function lcm(a, b) {
  return undefined;
}

// 30) Trộn hai mảng đã sắp xếp tăng dần thành mảng tăng dần
function mergeSorted(a, b) {
  return undefined;
}

// 31) Xoay mảng sang phải k bước
function rotateRight(arr, k) {
  return undefined;
}

// 32) Đẩy các số 0 về cuối mảng (giữ thứ tự phần tử khác 0)
function moveZeros(arr) {
  return undefined;
}

// 33) Tạo mảng số nguyên từ start đến end (bao gồm end)
function range(start, end) {
  return undefined;
}

// 34) Trung bình cộng của mảng số
function average(arr) {
  return undefined;
}

// 35) Trung vị của mảng số
function median(arr) {
  return undefined;
}

// 36) Mode của mảng số (nhiều mode thì trả về mode nhỏ nhất)
function mode(arr) {
  return undefined;
}

// 37) Bảng tần suất ký tự của chuỗi -> object {char: count}
function freqMap(s) {
  const map = {};
  for (const val of s) {
    map[val] =  (map[val]||0) + 1
  }
  return map
}

// 38) Độ dài từ dài nhất trong câu (phân tách theo khoảng trắng)
function longestWordLen(s) {
   if (s.trim().length === 0) return 0; // chuỗi rỗng
  const words = s.trim().split(/\s+/);
  console.log("words", words);
  let max = 0;
  for (const val of words) {
    if (val.length > max) {
      max = val.length
    }
  }
  return max
}

// 39) Đếm số từ trong chuỗi (tách theo khoảng trắng liên tiếp)
function wordCount(s) {
  return undefined;
}

// 40) Cắt chuỗi tối đa n ký tự, nếu dài hơn thêm "..."
function truncate(s, n) {
  if (s.length < n) return s;
  return s.slice(0,n) + '...'
}

// 41) Lặp chuỗi s n lần
function repeat(s, n) {
  return undefined;
}

// 42) Thay thế tất cả find trong s bằng replace
function replaceAll(s, find, replace) {
  return undefined;
}

// 43) Chia chuỗi thành các đoạn độ dài k
function chunkString(s, k) {
   let result = [];
  
}

// 44) Kiểm tra dấu ngoặc () cân bằng
function isBalancedParens(s) {
  return undefined;
}

// 45) Chuyển chuỗi về số nguyên (base 10), bỏ khoảng trắng đầu/cuối
function toInt(s) {
  return undefined;
}

// 46) Số nguyên ngẫu nhiên trong đoạn [min, max]
function randomInt(min, max) {
  return undefined;
}

// 47) Xáo trộn mảng kiểu Fisher-Yates (trả mảng mới)
function shuffle(arr) {
  return undefined;
}

// 48) Hiệu hai mảng (a \\ b) – phần tử có trong a nhưng không trong b
function diff(a, b) {
  return undefined;
}

// 49) Giao hai mảng (giữ thứ tự theo a, không lặp)
function intersect(a, b) {
  return undefined;
}

// 50) Hợp hai mảng (unique, theo thứ tự xuất hiện)
function union(a, b) {
  return [...new Set([...a,...b])]
}

// ---------------------------------
// 2) Test definitions (1-2 cases each)
// ---------------------------------
const tests = [
  { name: "add", fn: add, cases: [ { args: [1,2], expected: 3 } ] },
  { name: "isEven", fn: isEven, cases: [ { args: [4], expected: true } ] },
  { name: "factorial", fn: factorial, cases: [ { args: [5], expected: 120 } ] },
  { name: "fibonacci", fn: fibonacci, cases: [ { args: [7], expected: 13 } ] },
  { name: "reverseString", fn: reverseString, cases: [ { args: ["hello"], expected: "olleh" } ] },
  { name: "isPalindrome", fn: isPalindrome, cases: [ { args: ["A man a plan a canal Panama"], expected: true } ] },
  { name: "max", fn: max, cases: [ { args: [[1,9,3,7]], expected: 9 } ] },
  { name: "min", fn: min, cases: [ { args: [[1,9,3,7]], expected: 1 } ] },
  { name: "sum", fn: sum, cases: [ { args: [[1,2,3,4]], expected: 10 } ] },
  { name: "product", fn: product, cases: [ { args: [[1,2,3,4]], expected: 24 } ] },
  { name: "unique", fn: unique, cases: [ { args: [[1,1,2,3,2,4]], expected: [1,2,3,4] } ] },
  { name: "flattenOne", fn: flattenOne, cases: [ { args: [[[1],[2,3]]], expected: [1,2,3] } ] },
  { name: "chunk", fn: chunk, cases: [ { args: [[1,2,3,4,5], 2], expected: [[1,2],[3,4],[5]] } ] },
  { name: "isAnagram", fn: isAnagram, cases: [ { args: ["listen","silent"], expected: true } ] },
  { name: "countVowels", fn: countVowels, cases: [ { args: ["Beautiful"], expected: 5 } ] },
  { name: "removeVowels", fn: removeVowels, cases: [ { args: ["Beautiful"], expected: "Btfl" } ] },
  { name: "capitalizeWords", fn: capitalizeWords, cases: [ { args: ["hello world"], expected: "Hello World" } ] },
  { name: "titleCase", fn: titleCase, cases: [ { args: ["the lord of the rings"], expected: "The Lord Of The Rings" } ] },
  { name: "toCamelCase", fn: toCamelCase, cases: [ { args: ["hello_world-test"], expected: "helloWorldTest" } ] },
  { name: "toSnakeCase", fn: toSnakeCase, cases: [ { args: ["Hello World-Test"], expected: "hello_world_test" } ] },
  { name: "arrayEquals", fn: arrayEquals, cases: [ { args: [[1,2],[1,2]], expected: true } ] },
  { name: "removeAll", fn: removeAll, cases: [ { args: [[1,2,1,3,1], 1], expected: [2,3] } ] },
  { name: "twoSum", fn: twoSum, cases: [ { args: [[2,7,11,15], 9], expected: [0,1] } ] },
  { name: "linearSearch", fn: linearSearch, cases: [ { args: [[5,3,8], 8], expected: 2 } ] },
  { name: "binarySearch", fn: binarySearch, cases: [ { args: [[1,3,5,7,9], 7], expected: 3 } ] },
  { name: "isPrime", fn: isPrime, cases: [ { args: [29], expected: true } ] },
  { name: "primesUpTo", fn: primesUpTo, cases: [ { args: [10], expected: [2,3,5,7] } ] },
  { name: "gcd", fn: gcd, cases: [ { args: [48,18], expected: 6 } ] },
  { name: "lcm", fn: lcm, cases: [ { args: [4,6], expected: 12 } ] },
  { name: "mergeSorted", fn: mergeSorted, cases: [ { args: [[1,3,5],[2,4,6]], expected: [1,2,3,4,5,6] } ] },
  { name: "rotateRight", fn: rotateRight, cases: [ { args: [[1,2,3,4,5], 2], expected: [4,5,1,2,3] } ] },
  { name: "moveZeros", fn: moveZeros, cases: [ { args: [[0,1,0,3,12]], expected: [1,3,12,0,0] } ] },
  { name: "range", fn: range, cases: [ { args: [3,7], expected: [3,4,5,6,7] } ] },
  { name: "average", fn: average, cases: [ { args: [[1,2,3,4]], expected: 2.5 } ] },
  { name: "median", fn: median, cases: [ { args: [[1,3,3,6,7,8,9]], expected: 6 } ] },
  { name: "mode", fn: mode, cases: [ { args: [[1,1,2,2,2,3]], expected: 2 } ] },
  { name: "freqMap", fn: freqMap, cases: [ { args: ["aabccc"], expected: { a:2, b:1, c:3 } } ] },
  { name: "longestWordLen", fn: longestWordLen, cases: [ { args: ["The quick brown fox"], expected: 5 } ] },
  { name: "wordCount", fn: wordCount, cases: [ { args: ["one two  three"], expected: 3 } ] },
  { name: "truncate", fn: truncate, cases: [ { args: ["hello world", 5], expected: "hello..." } ] },
  { name: "repeat", fn: repeat, cases: [ { args: ["hi", 3], expected: "hihihi" } ] },
  { name: "replaceAll", fn: replaceAll, cases: [ { args: ["a-b-a-b", "-", ":"], expected: "a:b:a:b" } ] },
  { name: "chunkString", fn: chunkString, cases: [ { args: ["abcdef", 2], expected: ["ab","cd","ef"] } ] },
  { name: "isBalancedParens", fn: isBalancedParens, cases: [ { args: ["(())()"], expected: true } ] },
  { name: "toInt", fn: toInt, cases: [ { args: ["  -123  "], expected: -123 } ] },
  { name: "randomInt", fn: randomInt, cases: [ { args: [1,1], expected: 1 } ] },
  { name: "shuffle", fn: shuffle, cases: [ { args: [[1,2,3]], expected: "same-items" } ] },
  { name: "diff", fn: diff, cases: [ { args: [[1,2,3],[2]], expected: [1,3] } ] },
  { name: "intersect", fn: intersect, cases: [ { args: [[1,2,3],[2,3,4]], expected: [2,3] } ] },
  { name: "union", fn: union, cases: [ { args: [[1,2],[2,3]], expected: [1,2,3] } ] },
];

// ---------------------------------
// 3) Test runner
// ---------------------------------
(function run() {
  let passed = 0;
  let total = 0;

  for (const t of tests) {
    for (const c of t.cases) {
      total += 1;
      let actual;
      try {
        actual = t.fn(...c.args);
      } catch (e) {
        console.log(`❌ ${t.name} threw error:`, e.message);
        continue;
      }

      const ok = deepEqual(actual, c.expected);
      if (ok) {
        passed += 1;
      } else {
        console.log(`❌ ${t.name} failed. expected=${format(c.expected)} actual=${format(actual)}`);
      }
    }
  }

  console.log("\n====================");
  console.log(`Passed: ${passed}/${total}`);
  console.log("====================\n");
})();

// Shallow/deep equality helper for simple literals/arrays/objects
function deepEqual(a, b) {
  if (a === b) return true;
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) return false;
    }
    return true;
  }
  if (isPlainObject(a) && isPlainObject(b)) {
    const ka = Object.keys(a).sort();
    const kb = Object.keys(b).sort();
    if (!deepEqual(ka, kb)) return false;
    for (const k of ka) {
      if (!deepEqual(a[k], b[k])) return false;
    }
    return true;
  }
  // Special case for shuffle test: ensure same items ignoring order
  if (b === "same-items" && Array.isArray(a)) {
    return deepEqual([...a].sort(), [1,2,3]);
  }
  return false;
}

function isPlainObject(x) {
  return x !== null && typeof x === "object" && x.constructor === Object;
}

function format(x) {
  try { return JSON.stringify(x); } catch { return String(x); }
}


