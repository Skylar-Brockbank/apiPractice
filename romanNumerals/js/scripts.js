//Business Logic

function romanNum(number) {
let runningNumber = number;
let output = "";

  let martin = {
    1000: "M",
    500: "D",
    100: "C",
    50: "L",
    10: "X",
    5: "V",
    1: "I",
  };

console.log(martin)
console.log(martin[1])
console.log(martin[5])

  for(let k in martin){
    console.log(martin[k]);
    console.log(k);
  }

  for (let k in martin){
    console.log(martin);
    if (parseInt(runningNumber/k)>0) {
      for(let i = parseInt(runningNumber/k); i > 0; i--) {
    
        output = output + martin[k];
      }
      runningNumber = runningNumber - (parseInt(runningNumber/k) * k)
    }
    

  }
  return output;
}
//   if (parseInt(runningNumber/1000)>0) {
//     for(let i = parseInt(runningNumber/1000); i > 0; i--) {
   
//       output = output + "M";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/1000) * 1000)
//   }

//   if (parseInt(runningNumber/500)>0) {
//     for(let i = parseInt(runningNumber/500); i > 0; i--) {
//       output = output + "D";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/500) * 500)
//   }
//   if (parseInt(runningNumber/100)>0) {
//     for(let i = parseInt(runningNumber/100); i > 0; i--) {
    
//       output = output + "C";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/100) * 100)
//   }
//   if (parseInt(runningNumber/50)>0) {
//     for(let i = parseInt(runningNumber/50); i > 0; i--) {
//       output = output + "L";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/50) * 50)
//   }
//   if (parseInt(runningNumber/10)>0) {
//     for(let i = parseInt(runningNumber/10); i > 0; i--) {
      
//       output = output + "X";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/10) * 10)
//   }
//   if (parseInt(runningNumber/5)>0) {
//     for(let i = parseInt(runningNumber/5); i > 0; i--) {
//       output = output + "V";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/5) * 5)
//   }
//   if (parseInt(runningNumber/1)>0) {
//     for(let i = parseInt(runningNumber/1); i > 0; i--) {
    
//       output = output + "I";
//     }
//     runningNumber = runningNumber - (parseInt(runningNumber/1) * 1)
//   }
//   return output;
// }

//UI Logic