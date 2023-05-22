const { response } = require("express");
const { url } = require("inspector");

function Login(){
    var UN = document.getElementById("username").value;
    var PW = document.getElementById("password").value;

    const Http = new XMLHttpRequest();
    const url="http://localhost:3000/login";

    const body = JSON.stringify({
        user_name: UN,
        password: PW,
      });


      Http.open("POST", url, false);

    //   set content-type header to JSON
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");


    Http.onload = (e) => {
        if (Http.status != 200){
            alert("Password Incorrect")         
        }
        else {
            alert("Login Successful")  
        }
    }

    Http.send(body);

    //Login info submit and wait feedback from backend
    alert("Login clicked")
}

//Check if username is registered already
function CheckRepeat(username){
    
    if(username=="123"){
        return true;
    }
    else{
        return false;
    }
}

function CheckConfirm(PW, PW_confirm){
    if(PW==PW_confirm){
        return true;
    }
    else{
        return false;
    }
}

const userAction = async () => {
    url = "http://localhost:3000/";
    const response = await fetch(url);
    const myJson = await response.json(); //extract JSON from the http response
    const str = JSON.stringify(myJson);
    console.log(str);
  }


function Register(){
   
    var UN = document.getElementById("username").value;
    var PW = document.getElementById("password").value;
    var PW_confirm = document.getElementById("confirm-password").value;

    const Http = new XMLHttpRequest();
    const url="http://localhost:3000/register";

    const body = JSON.stringify({
        user_name: UN,
        password: PW,
      });


      Http.open("POST", url, false);

    //   set content-type header to JSON
    Http.setRequestHeader("Content-Type", "application/json; charset=UTF-8");


    Http.onload = (e) => {
        if (Http.status == 201){
            console.log(Http.response);
            if(CheckConfirm(PW, PW_confirm)){
                //username is not registed and two password are identical, registration is available
                //
            }
            else{
                alert("Two passwords are not identical, please check again!")
            }
        }
        else {
            console.log("Failure")
            alert("Username has been registed, please choose another one.")
        }
         
    }

    Http.send(body);

}


function AddFriend(){
    //alert("addfriend")
    document.getElementById("AddFriend-box").style.display="block";
}
function CloseWindow(){
    document.getElementById("AddFriend-box").style.display="none";
}