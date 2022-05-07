localStorage.setItem("shippingMethod",7.95)
  var paisaTotal=JSON.parse(localStorage.getItem("cartTotal"))
 console.log(paisaTotal);

 var paisaDiv=document.getElementById("paisatotal").innerText=`Total:     $${paisaTotal}`
 var paisaDiv=document.getElementById("finalPaisaTotal").innerText=`Total:     $${paisaTotal+7.95}`

  const order =() => {
    let number = document.getElementById("CardNumber").value
    let name = document.getElementById("CardName").value
    let Expriy = document.getElementById("Expriy").value
    let otp = document.getElementById("otp").value

    if(number!=="" && name!=="" && Expriy!=="" && otp==1234){
      
      swal("Order Place Successfull !", "Thank You!", "success");
    }else{
      swal("Payment Failed !", "Try again!", "error");
    }



    


  }
  document.getElementById("order").addEventListener("click",order)