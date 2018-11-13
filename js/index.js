$(document).ready(function() {
  
  var entry = "";
  var history = "";
  var countdeci = 0;
  var opRegex = /^(\+|-|\*|\/|%)$/;
  
  function addValue(whatValue) {
    entry += $(whatValue).attr("value");
    history += $(whatValue).attr("value");
  }
  function addValue2(whatValue) {
    entry = $(whatValue).attr("value");
    history += $(whatValue).attr("value");
  }
  
  function displayValue() {
    if(entry.length > 16 || history.length > 36) {
      $("#display").text("Limit Exceeded");
    } else {
    $("#display").text(entry);
    $("#history").text(history);
    }
  }
  
  $(".numval").click(function() {
    if(history.substr(history.length - 1).search(opRegex) != -1) {
      addValue2(this);
    } else {
      addValue(this);
    }
      displayValue();
  });
  
  $(".zero").click(function() {
    if(history.charAt(0) != 0) {         
      if(history.substr(history.length - 1).search(opRegex) != -1) {
      addValue2(this);
    } else {
      addValue(this);
    }
      displayValue();
    } 
  });
  
  $(".operator").click(function() {
  if (history.substr(history.length - 1).search(opRegex) != -1) {
      entry = entry.replace(/.$/, $(this).attr("value"));
      history = history.replace(/.$/, $(this).attr("value"));
      displayValue();
    } else if(history === ""){
      entry = "0" + $(this).attr("value");
      history = "0" + $(this).attr("value");
      displayValue();
      countdeci = 0;
      console.log(entry);
    } else {
      addValue2(this);
      displayValue();
      countdeci = 0;
    }
   
  });
  
  $(".decimal").click(function() {
    if (history === "") {
      entry = "0" + $(this).attr("value");
      history = "0" + $(this).attr("value");
      displayValue();
      countdeci++;
    } else if (countdeci == 0 && history.substr(history.length - 1).search(opRegex) === -1) {
      addValue(this);
      displayValue();
      countdeci++;
    } 
  });
  
  $(".equals").click(function() {
     $("#display").text(eval(history));
      entry = String(eval(history));
      history = String(eval(history));
  });
  
   $(".allclear").click(function() {
    $("#display").text(0);
    $("#history").text(0);
    history = "";
    entry = "";
    countdeci = 0;
  });
  
   $(".clear").click(function() {
     $("#display").text(0);
    entry = "";
    countdeci = 0;
  });
  
});