/* global databaseStore */

'use strict';




const calculator=(function(){


  function display(){
    $('.display-field').html(`<div class='upper-display'>${databaseStore.tempDisplay.join('')}</div>
    <div class='lower-display'>${databaseStore.temp.join('')}</div>`);

    
  }




 



  function one(){
    $('#1').click(function(){
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
    databaseStore.temp[0]==='=')databaseStore.temp =[];
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

 



  function fixDecimal(arr){
    arr
  }

  function processCalArray(arr){
    return arr.forEach(item => {
      if(item!=='+'&&item!=='-'&&item!=='&times'&&item!=='/'&&item!=='=')
        console.log('test item',item);
      Number(item);
    });
  }

  function calculateResult(arr){
    databaseStore.calculation = processCalArray(arr);

  }

  function addition(){
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

  function subtraction(){
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

  function multiplication(){
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

  function division(){  
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

  function equals(){
    console.log('`render` ran');
    $('#equals').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '=';
      console.log(val);
      console.log(databaseStore.temp.join(''));
      databaseStore.calculation.push(val);
     
      signValidatorAndToDisplay(sign);
      calculateResult(databaseStore.tempDisplay);
      
      resetTempRecord();
      
      display();
    });
  }


  function resetTempRecord(){
    databaseStore.temp=[];
    console.log('reset temp',databaseStore.temp);
  }

  function resetCal(){
    $('#ac').click(function(){
      databaseStore.calculation=[];
      console.log('reset',databaseStore.calculation);
      databaseStore.tempDisplay = [];
      display();
    });
  }

  function calculatorListenerBinder(){
    subtraction();
    addition();
    multiplication();
    division();
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