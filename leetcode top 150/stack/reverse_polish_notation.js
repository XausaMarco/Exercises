/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    const stack = [];

    for (let i = 0; i < tokens.length; i++) {
        let num = Number(tokens[i]);
        if (isNaN(num)) {
            const n2 = stack.pop();
            const n1 = stack.pop();
            switch (tokens[i]) {
                case "+":
                    stack.push(n1 + n2);
                    break;
                case "-":
                    stack.push(n1 - n2);
                    break;
                case "*":
                    stack.push(n1 * n2);
                    break;
                case "/":
                    stack.push(Math.trunc(n1 / n2));
                    break;
            }
        } else {
            stack.push(num);
        }
    }

    return stack[0];
};

/**
 * This is O(n) in time and O(n)in space (the stack grows linearly with the exploration of the array)
 */

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));
