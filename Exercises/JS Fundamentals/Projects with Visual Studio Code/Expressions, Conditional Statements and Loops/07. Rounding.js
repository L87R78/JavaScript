function solve([number, precision]) {
     precision = Number(precision);
     if (precision > 15) {
         precision = 15;
     }

     number = Number(number).toFixed(precision);
     console.log(Number(number));
}
//solve([3.14, 17])



