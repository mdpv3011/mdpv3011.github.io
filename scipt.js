// function decimalToBinary(number) {
//     if (number === 0) {
//       return "0";
//     }
  
//     let binary = "";
//     let remainder;
  
//     while (number > 0) {
//       remainder = number % 2;
//       binary = remainder + binary;
//       number = Math.floor(number / 2);
//     }
  
//     return binary;
//   }

// const number = 10;
// const binary = decimalToBinary(number);

// console.log(binary);


// // console.log(parseInt('123', 3));



function binaryToDecimal(binary) {
    let decimal = 0;
    let power = 0;
  
    for (let i = binary.length - 1; i >= 0; i--) {
      if (binary[i] === "1") {
        decimal += Math.pow(2, power);
      }
      power++;
    }
  
    return decimal;
  }

  const binary = "1010";
  const decimal = binaryToDecimal(binary);
  
  console.log(decimal);
  