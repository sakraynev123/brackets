module.exports = function check(str, bracketsConfig) {
  const OPEN_BRACKETS = ['(', '[', '{', '|', '1', '3', '5', '7', '8'];
  bracketsConfig.forEach((el) => {
    el.reverse()
  })
const BRACKETS_PAIR = Object.fromEntries(bracketsConfig);
let stack = [];
for (let i = 0; i < str.length; i++) {
  if (stack.includes(str[i]) && (stack.includes('|') || stack.includes('7') || stack.includes('8'))) {
    stack.pop()
  }
  else if (OPEN_BRACKETS.includes(str[i])) {
      stack.push(str[i])
    }
    else {
      if (stack.length === 0) {
        return false
      }
      if (BRACKETS_PAIR[str[i]] === stack[stack.length - 1]) {
        stack.pop()
      }
      else {
        return false
      }
    }
}
  return stack.length === 0;
}
