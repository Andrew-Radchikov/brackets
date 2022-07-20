module.exports = function check(str, bracketsConfig) {
  const openBrackets=[];
  const closeBrackets=[];
  const stek=[];

  bracketsConfig.forEach(element => {
      openBrackets.push(element[0]);
      closeBrackets.push(element[1]);
    });

  const brackets=str.split('');
  

  for(let value of brackets) {
    if(openBrackets.includes(value,0)){
      if(closeBrackets.includes(value,0)){
          if(stek[stek.length-1] == value){
            stek.pop();
          }
          else{
            stek.push(value);
          }
      }
      else{
        stek.push(value);
      }
    }
    else{
      if(stek.length==0){
        return false;
        break;
      }
      else if(openBrackets[closeBrackets.indexOf(value,0)] == stek[stek.length-1]){
        stek.pop();
      }
        else{
          return false;
          break;
        }
    }
  }
 
  return stek.length ==0;
 
}
