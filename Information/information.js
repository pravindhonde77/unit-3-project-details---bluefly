var paisaTotal=JSON.parse(localStorage.getItem("cartTotal"))
 console.log(paisaTotal);

 var paisaDiv=document.getElementById("paisatotal").innerText=`Total:     $${paisaTotal}`

  localStorage.setItem("shippingMethod",0)

  const AddAddress =()=>{
  event.preventDefault()
  
  let Email = document.getElementById("Ei").value
  let Fname = document.getElementById("fname").value
  let Lname = document.getElementById("lname").value
  let Add = document.getElementById("address").value
  let FullAdd = document.getElementById("fullAddress").value
  let City = document.getElementById("city").value
  let Region = document.getElementById("region").value
  let State = document.getElementById("state").value
  let Zip = document.getElementById("zipin").value
  let Mobile = document.getElementById("mobilenum").value
  
  let address ={
    Email,
    Fname,
    Lname,
    Add,
    FullAdd,
    City,
    Region,
    State,
    Zip,
    Mobile
  }

  console.log(address);
  localStorage.setItem("UserDetails",JSON.stringify(address))
  window.location.href="../Shipping/Shipping.html"
}

document.getElementById("AddAddress").addEventListener("click",AddAddress)
