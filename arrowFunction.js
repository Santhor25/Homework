// Regular Function
function checkNumberRegular(num) {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
}

// Arrow Function
const checkNumberArrow = (num) => {
    if (num % 2 === 0) {
        console.log(`${num} es par`);
    } else {
        console.log(`${num} es impar`);
    }
};

// Pruebas
checkNumberRegular(4); // 4 es par
checkNumberRegular(7); // 7 es impar

checkNumberArrow(10);  // 10 es par
checkNumberArrow(3);   // 3 es impar