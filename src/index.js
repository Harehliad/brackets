//module.exports = function check(str, bracketsConfig) {
  module.exports = function check (mass){
    let newMass = mass.split('')
    let otkskob = { '(' : ')', 
                    '{' : '}',
                    '[' : ']',      
    }
    let steck = [];
    let scetI = 0;
    let sum = 0;
    for (let i=0; i < mass.length ; i++){
      if(newMass[i] == '(' || newMass[i] == ')' || newMass[i] == '{' || newMass[i] == '}' || newMass[i] == '[' || newMass[i] == ']' || newMass[i] == '|'){
        if( '|' == newMass[i] && steck.length == 0){
            steck.push(newMass[i]);
            scetI = scetI + 1 ;
        } else if ('|' == newMass[i] && scetI == 0){
            steck.push(newMass[i]);
            scetI = scetI + 1;
        } else if ( '|' == newMass[i] && steck.length != 0 && '|' == steck[steck.length-1] && scetI > 0 ){
            steck.pop();
            scetI = scetI -1;
        } else if ( '|' == newMass[i] && steck.length != 0 && '|' != steck[steck.length-1] && scetI == 0){
            return false;
        } else if (Object.keys(otkskob).includes(newMass[i])) {
            steck.push(newMass[i]);
        } else {
            if (steck.length == 0 || newMass[i] != otkskob[steck[steck.length-1]]){
              return false;
            } else if (steck.length != 0 && newMass[i] == otkskob[steck[steck.length-1]]){
                steck.pop();
            }
        }
      } else {
        for ( let j=0; j < newMass.length; j++){
          if (j%2 ==0){
              sum += Number(newMass[j]);
          } 
          else { sum += Number(newMass[j])*(-1)
          }
      }
      if(sum == 0){
          return true
      } 
      else { return false}
      }
}    
    if(steck.length != 0 ){
      return false;
    }
    return true;
}