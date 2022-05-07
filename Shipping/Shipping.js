let UserDetails = JSON.parse(localStorage.getItem("UserDetails"))
document.getElementById("UserEmail").innerText=UserDetails.Email
document.getElementById("UserAddress").innerText=`${UserDetails.Add}, ${UserDetails.Zip}, ${UserDetails.City}, ${UserDetails.State}, ${UserDetails.Region}`


const Payment = () => {
  window.location.href="../payment/Payment.html"
}

document.getElementById("shippintopayment").addEventListener("click",Payment)