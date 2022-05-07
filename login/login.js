document.querySelector("form").addEventListener("submit",loginFun)
var registeruser=JSON.parse(localStorage.getItem("userCreds"))

console.log( registeruser);
 function loginFun(){
     event.preventDefault();
   
      var enteredEmail=document.querySelector("#email_id").value;
      var enterdpass=document.querySelector("#password").value

      for(var i=0;i<registeruser.length;i++){
          console.log(registeruser[i]);
          if(registeruser[i].email==enteredEmail && registeruser[i].password==enterdpass)
          {
              alert("login sucess");
              window.location.href="../shoes/shoes.html"
              break;
          }
          else
          {
              alert("login failed");
          }
      }
     } 
     
    //  function shoes(){
    //     window.location.href="../shoes/shoes.html"
    // }