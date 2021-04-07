function isBalanceBrackets(string) {
  stack = [];
  if (string) {
    let letras = string.split("");

    letras.forEach((element) => {
      if (element === "(") {
        stack.push(element);
      } else if (element === ")") {
        stack.pop();
      }
    });
  } else {
    console.log("Cadena Vacia");
  }

  return stack;
}

function BalanceBrackets(string, res) {
  let newString = string;
  res.forEach((element) => {
    newString += ")";
  });

  return newString;
}

let brackets = "((()(";
res = isBalanceBrackets(brackets);
if (res.length > 0) {
  let newBrackets = BalanceBrackets(brackets, res);
  console.log("Cadena Balanceada : " + newBrackets);
} else {
  console.log(brackets);
}
