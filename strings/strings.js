const name = 'shobhit kumar'
const repoCount = 17

// console.log(`my name is ${name} and my repo count is ${repoCount}`);

// another way to define strings 

const newStr = new String('boby swaroop')
// console.log(newStr)
// console.log(newStr[0])
// console.log(newStr.__proto__)
// console.log(newStr.length);
// console.log(newStr.toUpperCase());
// console.log(newStr.charAt(3));
// console.log(newStr.indexOf("s"));
// console.log(newStr.substring(0,5)); // its give 0-4 element not count last digit
// console.log(newStr.slice(-12,11));

const strName = "   rahul   "
// console.log(strName)
// console.log(strName.trim())   // to remove extra space

// url rewrite using string methods

const url = "https://google.com//rahul%20swaroop"
console.log(url);

// console.log(url.replace('%20',"-"));// replace url to %20 to  -

// console.log(url.includes("com")); // to check url strings

console.log(url.includes("rahul")); // to check url strings

// link youtube : https://youtu.be/4CXcK7f8FZE?si=3NYwvpSvI8nU4tbW

// const nameSecond = "aftab-alam-com"
// console.log(nameSecond.split("-"));