function Call_Loop(){

    let i = 0; 
    while (i < 10) { 
      task(i); 
       i++; 
    } 
    function task(i) { 
      setTimeout(function() { 
          document.getElementById("loop").innerHTML = i
      }, 500 * i);  //BUT WHY?
    } 
}