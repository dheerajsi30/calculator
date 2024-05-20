 // Function that display value 
 function dis(val) { 
    document.getElementById("result").value += val 
} 

function myFunction(event) { 
    if (event.key == '0' || event.key == '1' 
        || event.key == '2' || event.key == '3' 
        || event.key == '4' || event.key == '5' 
        || event.key == '6' || event.key == '7' 
        || event.key == '8' || event.key == '9' 
        || event.key == '+' || event.key == '-' 
        || event.key == '*' || event.key == '/') 
        document.getElementById("result").value += event.key; 
} 



function cls(){
    document.getElementById("result").value=""
}



// var cal = document.getElementById("display"); 
// cal.onkeyup = function (event) { 
//     if (event.keyCode === 13) { 
//         console.log("Enter"); 
//         let x = document.getElementById("result").value 
//         console.log(x); 
//         solve(); 
//     } 
// } 

// Function that evaluates the digit and return result 
function solve() { 
    let x = document.getElementById("result").value 
    let y = math.evaluate(x) 
    document.getElementById("result").value = y 
} 


function del(){ 
   let n= document.getElementById("result")
   let x= n.value
   console.log("before",n.value)
   console.log("result=",typeof(x))
   let p= Array.from(x)
    p.splice(p.length-1);
  console.log("after",p)
  let result=parseInt(p)
 console.log("result=",typeof(result))
 console.log(result)
  document.getElementById("result").value = result

}
// // Function that clear the display 
// function clr() { 
//     document.getElementById("result").value = "" 
// } 
