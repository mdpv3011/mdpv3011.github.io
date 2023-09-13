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

function convertBinaryToDecimal(binary) {
  var decimal = 0;
  var power = 1;

  for (var i = binary.length - 1; i >= 0; i--) {
    if (binary[i] == "1") {
      decimal += power;
    }
    power *= 2;
  }

  return decimal;
}

document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();

  var binary = document.querySelector("input[name='binary']").value;

  var decimal = convertBinaryToDecimal(binary);

  document.querySelector("#result").innerHTML = "Decimal: " + decimal;
});
