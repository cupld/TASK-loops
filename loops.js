/**
 * 
 * In this function, you will have to draw a vertical line with `n` length
 * for example `drawVLine(5) should print out 
  # 
  # 
  # 
  # 
  # 
 */

function drawVLine(n) {

  // Continue the code here
 // let result;
   //for (let i = 0; i < 6; i++) {
   //  result = "#";
   //console.log("#")
  //}
  for (let index = 0; index < 5; index++) {
     console.log("#");
   
  }

}
drawVLine(5);
/**
 *
 * In this function, you will have to draw a horizontal line with `n` length
 * for example `drawHLine(5) should print out # # # # # (there are spaces here!)
 */
function drawHLine(n) {
 // let s=["#","#","#","#","#"];
  
  // Continue the code here
 //for (let i = 0; i < s.length; i++) {    
   //console.log(s[s.length]);
  //}
for (let i = 0; i < n; i++) {
  //console.log("#");
  Process.stdout.write("#");
}

}
console.log(s);

/**
 * 
 * In this function, you will have to draw a square with a length of `n` 
 * for example `drawSquare(5) should print out 
 
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #
  #  #  #  #  #

 */
function drawSquare(n) {
  // Continue the code here
 // for (let i = 0; i < 6; i++) {
   // var tmp = '#'
  //  for (let j = 0; j < 6; j++) {
   // }
   // console.log(tmp)
//}
for (let j = 0; j < n; j++) {
  for (let i = 0; i < n; i++) {
    print("# ");
}
console.log();  
}
}
drawSquare(10)
/**
 * 
 * In this function, you will have to draw a triangle with a length of `n` 
 * for example `drawLeftTriangle(5) should print out 
 
  #  
  #  #  
  #  #  #  
  #  #  #  #  
  #  #  #  #  #

 */
function drawLeftTriangle(n) {
  // Continue the code here
 
  for (let i = 0; i < n; i++) {
   for (let j=0; j<i; j++){
    console.log("# ");
  }
  console.log()
}
}
drawLeftTriangle(6)
/**
 * 
 * In this function, you will have to draw a tree with a length of `n` 
 * for example `drawTree(5) should print out 
 
     #   
    # #   
   # # # 
  # # # # 
     #

 */
function drawTree(n) {
  // Continue the code here
  for (let r = 0; r < n; r++) {
    for (let s = n-1; s > r; s--) {
      console.log(" ");
    for(let c = 0 ; c <= r ; c++){
        console.log("# ");
        
      }
    console.log();
  }
  for (let i = 0; i < n; i++) {
    console.log("#");
    
  }
}
}
drawTree(5)
/**
 *
 * In this example, you will create 4 arrays, `yellowCards`, `greenCards`, `redCards`, `blueCards`
 * (BONUS) Try to optimize the code with doing it with one gigantic loop
 */
function fillUnoDeck() {
  let greenCards = [];
  let yellowCards = [];
  let redCards = [];
  let blueCards = [];
  // Fill the cards here
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 2; j++) {
      greenCards.push(i);
      redCards.push(i);
      yellowCards.push(i);
      blueCards.push(i);
    
    }
    
  }
}
console.log(greenCards,redCards,yellowCards,blueCards)
