//Business Logic

function romanNum(number) {
let runningNumber = number;
let output = "";

  // if (number===1) {
  //   return "I"
  // } else if(number===5) {
  //   return "V"
  // } else if(number===10) {
  //   return "X"
  // } else if(number===50) {
  //   return "L"
  // } else if(number===100) {
  //   return "C"
  // } else if(number===500) {
  //   return "D"
  // } else if(number===1000) {
  //   return "M"
  // } else {
  //   return "Try typing 1 instead"
  // }
  console.log(runningNumber);
  if (parseInt(runningNumber/1000)>0) {
    for(let i = parseInt(runningNumber/1000); i > 0; i--) {
   
      output = output + "M";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/1000) * 1000)
  }

  if (parseInt(runningNumber/500)>0) {
    for(let i = parseInt(runningNumber/500); i > 0; i--) {
      output = output + "D";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/500) * 500)
  }
  if (parseInt(runningNumber/100)>0) {
    for(let i = parseInt(runningNumber/100); i > 0; i--) {
    
      output = output + "C";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/100) * 100)
  }
  if (parseInt(runningNumber/50)>0) {
    for(let i = parseInt(runningNumber/50); i > 0; i--) {
      output = output + "L";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/50) * 50)
  }
  if (parseInt(runningNumber/10)>0) {
    for(let i = parseInt(runningNumber/10); i > 0; i--) {
      
      output = output + "X";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/10) * 10)
  }
  if (parseInt(runningNumber/5)>0) {
    for(let i = parseInt(runningNumber/5); i > 0; i--) {
      output = output + "V";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/5) * 5)
  }
  if (parseInt(runningNumber/1)>0) {
    for(let i = parseInt(runningNumber/1); i > 0; i--) {
    
      output = output + "I";
    }
    runningNumber = runningNumber - (parseInt(runningNumber/1) * 1)
  }
  return output;
}

//UI Logic