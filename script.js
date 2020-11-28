function myFunc(){
    var e = document.getElementById("mail").value;
    if(e == '')
        document.getElementById("message").innerHTML = "Please Enter Email id!";
    else if(e.indexOf('@') <= 0)
        document.getElementById("message").innerHTML = "Invalid mail!";
    else if(e.indexOf('.') <= 0)
        document.getElementById("message").innerHTML = "Invalid mail!"; 
    else if(e.indexOf('.') <= 0)
        document.getElementById("message").innerHTML = "Invalid mail!";
    else if((e.charAt(e.length-4) != '.') && (e.charAt(e.length-3) != '.'))
        document.getElementById("message").innerHTML = "Invalid mail!";
    else if((e.length>=25) && (e.length<= 10))
        document.getElementById("message").innerHTML = "Invalid mail!";
    else
        document.getElementById("message").innerHTML = '';
}

function myFunc2(){
    var g = document.getElementById("pass").value;
    var b = g.length;
    console.log(b)
    if(g == '')
        document.getElementById("message2").innerHTML = "Please Enter password!";
    else if(b >= 20)
        document.getElementById("message2").innerHTML = "Invalid password!";
    else if(b <= 8)
        document.getElementById("message2").innerHTML = "Invalid password!";
    else
        document.getElementById("message2").innerHTML = '';
}

function myFunc3(){
    var a1 = document.getElementById("fname").value;
    var a2 = a1.length;
    console.log(a2)
    if(a1 == '')
        document.getElementById("message3").innerHTML = "Please enter name!";
    else if(a2 >= 15)
        document.getElementById("message3").innerHTML = "Invalid name length!";
    else if(a2 <= 4)
        document.getElementById("message3").innerHTML = "Invalid name length!";
    else
        document.getElementById("message3").innerHTML = '';
}


function myFunc4(){
    var a3 = document.getElementById("lname").value;
    var a4 = a3.length;
    if(a3 == '')
        document.getElementById("message4").innerHTML = "Please enter name!";
    else if(a4 >= 15)
        document.getElementById("message4").innerHTML = "Invalid name length!";
    else if(a4 <= 4)
        document.getElementById("message4").innerHTML = "Invalid name length!";
    else
        document.getElementById("message4").innerHTML = '';
}


function myFunc5(){
    var a5 = document.getElementById("num").value;
    var a6 = a5.length;
    if(a5 == '')
        document.getElementById("message5").innerHTML = "Please Enter number!";
    else if(a6 >= 20)
        document.getElementById("message5").innerHTML = "Invalid number!";
    else if(a6 <= 8)
        document.getElementById("message5").innerHTML = "Invalid number!";
    else
        document.getElementById("message5").innerHTML = '';
}
