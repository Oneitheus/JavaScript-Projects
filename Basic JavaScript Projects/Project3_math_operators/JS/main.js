function math_op(){
    var addition = 2+2
    document.getElementById("Math").innerHTML = "2 + 2 = " + addition
}

function math_sub(){
    var sub = 2-2
    document.getElementById("Math").innerHTML = "2 - 2 = " + sub
}

function math_div(e){
    // onmouseenter passes down an event parameter
    if (e.which != 3){
        return false
    }
    var div = 2/4
    document.getElementById("Math").innerHTML = "2 / 4 = " + div
}

function math_mult(){
    var mult = 2*2
    document.getElementById("Math").innerHTML = "2 x 2 = "+mult
}

function inf(){
    document.getElementById("Infinity").innerHTML = 1.7976931348623159E308
    console.log("HI GUYS")
}