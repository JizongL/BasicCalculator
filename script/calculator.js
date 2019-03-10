'use strict';

const calculator=(function(){
  function addition(){
    console.log('`addition` ran');
  }

  function subtraction(){
    console.log('`subtraction` ran');
  }

  function multiplication(){
    console.log('`multiplication` ran');
  }

  function division(){  
    console.log('`division` ran');

  }
  function calculatorListenerBinder(){
    subtraction();
    addition();
    multiplication();
    division();
  }

  return{
    calculatorListenerBinder:calculatorListenerBinder
  }

}());