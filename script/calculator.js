/* global databaseStore */

'use strict';




const calculator=(function(){


  function display(){
    $('.display-field').html(`<div class='upper-display'>${databaseStore.tempDisplay.join('')}</div>
    <div class='lower-display'>${databaseStore.temp.join('')}</div>`);

    
  }



  function validateBeforeNextCalculation(){
    if(databaseStore.isEqual || databaseStore.isResult){
      resetAll();
    }
  }
 



  function one(){
    $('#1').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function two(){
    $('#2').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function three(){
    $('#3').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function four(){
    $('#4').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }


  function five(){
    $('#5').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }


  function six(){
    $('#6').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function seven(){
    $('#7').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function eight(){
    $('#8').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function nine(){
    $('#9').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function decimal(){
    $('#decimal').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      if(!databaseStore.isDecimal)
      {console.log('.');
        databaseStore.temp.push('.');
        databaseStore.tempDisplay.push('.');
        databaseStore.isDecimal = true;
      }
      display();

    });
  }

  function zero(){
    $('#zero').click(function(){
      validateBeforeNextCalculation();
      validateTemp();
      databaseStore.isSign = false;
      console.log(0);
      databaseStore.temp.push(0);
      databaseStore.tempDisplay.push(0);
      display();
    });
  }


  function validateTemp(){
    if (databaseStore.temp[0]==='+'||
    databaseStore.temp[0]==='-'||
    databaseStore.temp[0]==='&times'||
    databaseStore.temp[0]==='/'||
    databaseStore.temp[0]==='=') {resetTempRecord();}

  }



  function signValidatorAndToDisplay(sign){
    if(databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='+' ||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='-'||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='&times' ||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='/'||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='='){
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]= sign;
      databaseStore.calculation[databaseStore.calculation.length-1]= sign;
    }else{
      databaseStore.tempDisplay.push(sign);
      
    }   
  }

 
  function times(a,b){
    return a*b;
  }
  function add(a,b){
    return a+b;
  }

  function sub(a,b){
    return a-b;
  }

  function div(a,b){
    return a/b;
  }

  function calculateResult(arr){
    
    while(arr.findIndex(item=>item==='&times')>0){
      let indexForMultiply = arr.findIndex(item=>item==='&times');
      let result = times(arr[indexForMultiply-1],arr[indexForMultiply+1]);
      arr.splice(indexForMultiply-1,3,result);      
    }

    while(arr.findIndex(item=>item==='/')>0){
      let indexForMultiply = arr.findIndex(item=>item==='/');
      let result = div(arr[indexForMultiply-1],arr[indexForMultiply+1]);
      arr.splice(indexForMultiply-1,3,result);      
    }

    while(arr.findIndex(item=>item==='+')>0){
      let indexForMultiply = arr.findIndex(item=>item==='+');
      let result = add(arr[indexForMultiply-1],arr[indexForMultiply+1]);
      arr.splice(indexForMultiply-1,3,result);      
    }

    while(arr.findIndex(item=>item==='-')>0){
      let indexForMultiply = arr.findIndex(item=>item==='-');
      console.log('arr',arr);
      console.log('index found last',indexForMultiply,arr[indexForMultiply-1],arr[indexForMultiply+1]);
      let result = sub(arr[indexForMultiply-1],arr[indexForMultiply+1]);
      arr.splice(indexForMultiply-1,3,result);      
    }
    console.log('final result',arr);
  }

  function additionHandle(){
    console.log('`addition` ran');
    $('#add').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '+';
      console.log(val);
      console.log(databaseStore.temp.join(''));
      validateSignForCalculation(val,sign);
      
      signValidatorAndToDisplay(sign);
     
      resetTempRecord();
      databaseStore.temp.push('+');
      display();
    });
  }

  function subtractionHandle(){
    console.log('`subtraction` ran');
    $('#subtract').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '-';
      console.log(val);
      validateSignForCalculation(val,sign);
      
      signValidatorAndToDisplay(sign);
      
      resetTempRecord();
      databaseStore.temp.push('-');
      display();
    });
  }

  function multiplicationHandle(){
    console.log('`multiplication` ran');
    $('#multiply').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '&times';
      console.log(val);
      validateSignForCalculation(val,sign);
      
      signValidatorAndToDisplay(sign);
     
      resetTempRecord();
      databaseStore.temp.push(sign);
      display();
    });
    
  }

  function validateSignForCalculation(val,sign){
    if(!databaseStore.isSign){
      databaseStore.calculation.push(val);
      databaseStore.calculation.push(sign);
    }
    databaseStore.isSign = true;
  }

  function divisionHandle(){  
    console.log('`division` ran');
    $('#divide').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '/';
      console.log(val);
      validateSignForCalculation(val,sign);
      
      
      signValidatorAndToDisplay(sign);
      
      resetTempRecord();
      databaseStore.temp.push(sign);
      display();
    });
  

  }

  function resetCalculationRecord(){
    databaseStore.calculation=[];
  }
  
  function equals(){
    console.log('`equal` ran');
    $('#equals').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '=';
      //console.log(val);
      //console.log(databaseStore.temp.join(''));
      databaseStore.calculation.push(val);
     
      signValidatorAndToDisplay(sign);
      calculateResult(databaseStore.calculation);
      let result = databaseStore.calculation[0];
      console.log('test isresult',(!databaseStore.isResult));
      console.log('result',result);
      if(!databaseStore.isResult){
        databaseStore.tempDisplay.push(result);
        resetTempRecord();
        databaseStore.temp.push(result);
        databaseStore.isResult=true;
      }
      if(!databaseStore.isEqual){
        display();
        databaseStore.isEqual=true;
      }
      
      resetTempRecord();
      
      
    });
  }


  function resetTempRecord(){
    databaseStore.temp=[];
    console.log('reset temp',databaseStore.temp);
  }

  function resetAll(){
    databaseStore.calculation=[];
    databaseStore.temp = [];
    databaseStore.tempDisplay = [];    
    databaseStore.isSign=false,
    databaseStore.isDecimal=false,
    databaseStore.isResult=false,
    databaseStore.isEqual=false,
    display();
  }


  function resetCal(){
    $('#ac').click(function(){
      resetAll();
    });
  }

  function calculatorListenerBinder(){
    subtractionHandle();
    additionHandle();
    multiplicationHandle();
    divisionHandle();
    one();
    two();
    three();
    four();
    five();
    six();
    seven();
    eight();
    nine();
    decimal();
    zero();
    resetCal();
    equals();
    display();
  }

  return{
    calculatorListenerBinder:calculatorListenerBinder,
    display:display
  };

}());