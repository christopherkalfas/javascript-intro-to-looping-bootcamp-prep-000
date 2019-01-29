function forLoop(array) {

  for (let i=0; i< 25; i++){
    if (i===1){
      array.push("I am 1 strange loop.");
    } else {
      array.push(`I am ${i} strange loops.`);
    }
  }
return array;
}

function whileLoop(n){
  let countdown = 100;
 
  while (countdown > 0) {
    countdown--;
    
    console.log(--countdown);
  }
  return 'done' 
}
  
  function doWhileLoop(array){
    var i = 0;
 
function incrementVariable() {
  i = i - 1;
}
 
do {
  console.log(i);
  i--
  incrementVariable();
} while (array.length > 0 && incrementVariable());

    
   return array 
  }
 

