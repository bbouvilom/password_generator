//generate random password
function create(){
    
    //set length of password
    var com = prompt ("Enter a number" , "20" )
    

    //possible password values
    let values = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()_+";

    let password = "";

    //create for loop to choose random characters for password
    for(var i = 0; i <= com; i++){
        password = password + values.charAt(Math.floor(Math.random() * Math.floor(values.length - 1)));
    }

    //add password to text display
    document.getElementById("display").value = password;
    
}


function copyPas(){

    document.getElementById("display");
    document.execCommand("copy");
    alert ("Copied");
    }