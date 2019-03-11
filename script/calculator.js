/* global databaseStore*/

'use strict';




const calculator=(function(){


  function display(){
    $('.display-field').html(`<div class='upper-display'>${databaseStore.tempDisplay.join('')}</div>
    <div class='lower-display'>${databaseStore.temp.join('')}</div>`);

    
  }




 



  function one(){
    $('#1').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function two(){
    $('#2').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function three(){
    $('#3').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function four(){
    $('#4').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }


  function five(){
    $('#5').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }


  function six(){
    $('#6').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function seven(){
    $('#7').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function eight(){
    $('#8').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function nine(){
    $('#9').click(function(){
      let val = $(this).attr('id');
      console.log(val);
      databaseStore.temp.push(val);
      databaseStore.tempDisplay.push(val);
      display();
    });
  }

  function decimal(){
    $('#decimal').click(function(){
      
      console.log('.');
      databaseStore.temp.push('.');
      databaseStore.tempDisplay.push('.');
      display();

    });
  }

  function zero(){
    $('#zero').click(function(){
      
      console.log(0);
      databaseStore.temp.push(0);
      databaseStore.tempDisplay.push(0);
      display();
    });
  }

  function signValidatorAndToDisplay(sign){
    if(databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='+' ||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='-'||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='*' ||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='/'||
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]==='='){
      databaseStore.tempDisplay[databaseStore.tempDisplay.length-1]= sign;
    }else{
      databaseStore.tempDisplay.push(sign);
    }   
  }

  function addition(){
    console.log('`addition` ran');
    $('#add').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '+';
      console.log(val);
      console.log(databaseStore.temp.join(''));
      databaseStore.calculation.push(val);
      databaseStore.calculation.push(sign);
      signValidatorAndToDisplay(sign);
      
      resetTempRecord();
      display();
    });
  }

  function subtraction(){
    console.log('`subtraction` ran');
    $('#subtract').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '-';
      console.log(val);
      databaseStore.calculation.push(val);
      databaseStore.calculation.push(sign);
      signValidatorAndToDisplay(sign);
      resetTempRecord();
      display();
    });
  }

  function multiplication(){
    console.log('`multiplication` ran');
    $('#multiply').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '*';
      console.log(val);
      databaseStore.calculation.push(val);
      databaseStore.calculation.push('*');
      signValidatorAndToDisplay(sign);
      resetTempRecord();
      display();
    });
    
  }

  function division(){  
    console.log('`division` ran');
    $('#divide').click(function(){
      let val = Number(databaseStore.temp.join(''));
      let sign = '/';
      console.log(val);
      databaseStore.calculation.push(val);
      databaseStore.calculation.push('/');
      signValidatorAndToDisplay(sign);
      resetTempRecord();
      databaseStore.temp.push('/');
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
      databaseStore.calculation.push(sign);
      signValidatorAndToDisplay(sign);
      
      console.log(databaseStore.calculation);
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