function add(a, b) {
    return a + b
}

let total1 = add(2, 4)

console.log(" 1.  ADD" + "  " + "=" + "  " + total1)

function subtract(a, b) {
    return a - b
}

// 6+6+6+6+6=4
function Multiply(y, z) {
    let answer = 0
    for (let counter = 0; counter < z; counter += 1) {
        //  answer = answer +   y z=y[1],y[2],y[3],y[4]
        answer = add(answer, y)
    }
    return answer
}
let product = Multiply(6, 4)
console.log(" 2.  Multiply = " + product)

// 3. Power/Exponentiation (x and n)(2 * 8 times)
function Power(x, n) {
    let ans = 1
    for (let counter = 0; counter < n; counter += 1) {
        ans = Multiply(ans, x)
    }
    return ans
}
let expo = Power(3, 4)
console.log(" 3.  Power = " + expo)

// 4. Factorial 5 * 4 * 3 * 2 * 1 = 120 ........calling factorial(4) should return a result of 24.//

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(subtract(n, 1));
    }
}


//  var ans = 1;

//for (var i = 2; i <= n; i++)
//  ans = Multiply(ans, i);
//return ans;
//}


answer = factorial(4)
console.log(" 4.  Factorial = " + answer)



//0, 1, 1, 2, 3, 5, 8, 13, 21

function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i < n + 1; i++) {
        arr.push(add(arr[(subtract(i, 2))], arr[(subtract(i, 1))]))
    }
    return arr[n - 1]
}



var fibo = fib(8)
console.log(" 5.  Fibonacci = " + fibo)







