
(()=>{



var count = 0 ;



var DECREASE = ()=>{
    count--
    if(count == 0 ){
        document.querySelector(".ShowNumber").style.color = " #132043" 
    }
    if(count < 0 ){
        document.querySelector(".ShowNumber").style.color = "Red";
    }
    document.querySelector(".ShowNumber").innerHTML = count;
}


var reset = ()=>{

    var zero = 0;

    count = zero;
    console.log(zero);
    if(count == 0 ){
        document.querySelector(".ShowNumber").style.color = " #132043" 
    }
    document.querySelector(".ShowNumber").innerHTML = count;
   
}


var increase = ()=>{
    count++
    if(count == 0 ){
        document.querySelector(".ShowNumber").style.color = " #132043" 
    }

    if(count > 0 ){
        document.querySelector(".ShowNumber").style.color = "green";
    }
    document.querySelector(".ShowNumber").innerHTML = count;
    
    console.log(count);
}


var dec = document.querySelector("#DECREASE");
var res = document.querySelector("#reset");
var inc = document.querySelector("#INCREASE");

dec.addEventListener("click" , DECREASE);
res.addEventListener("click" , reset);
inc.addEventListener("click" , increase);



})()

