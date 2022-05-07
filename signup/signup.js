document.querySelector("form").addEventListener("submit",signupFun)

var userData=JSON.parse(localStorage.getItem("userCreds"))||[]

function signupFun(){
    event.preventDefault()

    var userObj={
        firstname:document.querySelector("#first_name").value,
        lasttname:document.querySelector("#last_name").value,
        email:document.querySelector("#email").value,
        password:document.querySelector("#password").value,

       
    }
    // console.log(userObj);
    userData.push(userObj)
    // console.log(userData);
    localStorage.setItem("userCreds",JSON.stringify(userData))

    
}

function log(){
    window.location.href="../login/login.html"
}
