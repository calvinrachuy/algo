/*
Camel Case is a naming style common in many programming languages. In Java, method and variable names typically start with a lowercase letter, with all subsequent words starting with a capital letter (example: startThread). Names of classes follow the same pattern, except that they start with a capital letter (example: BlueCar).

Your task is to write a program that creates or splits Camel Case variable, method, and class names.

Input Format

Each line of the input file will begin with an operation (S or C) followed by a semi-colon followed by M, C, or V followed by a semi-colon followed by the words you'll need to operate on.
The operation will either be S (split) or C (combine)
M indicates method, C indicates class, and V indicates variable
In the case of a split operation, the words will be a camel case method, class or variable name that you need to split into a space-delimited list of words starting with a lowercase letter.
In the case of a combine operation, the words will be a space-delimited list of words starting with lowercase letters that you need to combine into the appropriate camel case String. Methods should end with an empty set of parentheses to differentiate them from variable names.
Output Format

For each input line, your program should print either the space-delimited list of words (in the case of a split operation) or the appropriate camel case string (in the case of a combine operation).
Sample Input

S;M;plasticCup()

C;V;mobile phone

C;C;coffee machine

S;C;LargeSoftwareBook

C;M;white sheet of paper

S;V;pictureFrame

Sample Output

plastic cup

mobilePhone

CoffeeMachine

large software book

whiteSheetOfPaper()

picture frame

Explanation

Use Scanner to read in all information as if it were coming from the keyboard.

Print all information to the console using standard output (System.out.print() or System.out.println()).

Outputs must be exact (exact spaces and casing).
*/

function processData(input) {
  const lines = input.split('\n').map(line => line.trim())
  lines.forEach(line => {
      console.log(formatLine(line))
  })
}

function formatLine(line) {
  const [action, type, string] = line.split(';')
  const words = getWords(string)
  
  return action === 'S' ? words.join(' ') : combine(words, type)
}

function getWords(string) {
  const words = ['']
  
  for (const char of string) {        
      if (char === ' ' || /[A-Z]/.test(char)) {
          if (words[words.length - 1]) words.push('')
      }
      
      if (/[a-zA-Z]/.test(char)) {
          words[words.length - 1] += char.toLowerCase()
      }
  }
  
  return words
}

function capitalize(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1)
}

function combineClassName(words) {
  return words.map(w => capitalize(w)).join('')
}

function combineVariableName(words) {
  return words[0] + words.slice(1).map(w => capitalize(w)).join('')
}

function combineMethodName(words) {
  return combineVariableName(words) + '()'
}

function combine(words, type) {
  const map = {
      C: combineClassName,
      M: combineMethodName,
      V: combineVariableName,
  }
  
  return map[type](words)
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
 processData(_input);
});
