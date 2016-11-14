
$(document).ready(function(){
  $("form#add").submit(function(event){
    event.preventDefault();
    var letters = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v",]
    letters.forEach(function(letter){
      return letter;
    })
    var a = parseInt($("#side1").val());
    var b = parseInt($("#side2").val());
    var c = parseInt($("#side3").val());
    if (a|b|c === 0) {
        alert("Invalid input")
    }else if (a|b|c === letter)  {
        alert("Not a number")
    }
    else{
    if ((a === b)&&(b === c)) {
       $(".equilateral").fadeIn("slow");
       $(".isosceles,.rightscalene,.scalene").fadeOut("fast");
    }else if ((b === c)||(b === a)||(c === a)) {
       $(".isosceles").fadeIn("slow");
       $(".equilateral,.rightscalene,.scalene").fadeOut("fast");
    }else if (a*a + b*b === c*c) {
       $(".rightscalene").fadeIn("slow");
       $(".isosceles,.equilateral,.scalene").fadeOut("fast");
    }else if ((a !== b)&&(b !== c)&&(c !== a)) {
       $(".scalene").fadeIn("slow");
       $(".isosceles,.rightscalene,.equilateral").fadeOut("fast");
    }else if ((a+b <= c)||(a+c <= b)||(c+b <= a)) {
       console.log("This is not a triangle");
    }
    else {
      console.log("Put valid inputs");
    }
  };
  });
});
