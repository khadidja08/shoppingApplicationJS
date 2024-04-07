// ***** Definition of variables***** //

let username=document.getElementById("username");
let password=document.getElementById("password");

let loginBtn=document.getElementById('sign_in');

// ***** Download stored data ***** //

getUser=localStorage.getItem("username")
getPassword=localStorage.getItem("password")

// ***** logic ***** //

function checkLogin(e){
    e.preventDefault();
    if (username.value==="" || password.value===""){
        alert("please fill data ")
    } else {
        if((getUser && getUser.trim() === username.value.trim() && getPassword && getPassword === password.value )){
            setTimeout(() => { 
                window.location='index.html'
            }, 1500)
            }else{
                alert("username or password is wrong !")
                }
            }
}

loginBtn.addEventListener('click',checkLogin);





