var cartData=JSON.parse(localStorage.getItem("bagData"))||[]
    
    var addressData=[]
    var total = cartData.reduce(function (sum, el, index, arr) {
    return sum + Number(el.sprice);
  }, 0);

  document.querySelector("#cartTotal").innerText=`Sub Total: $${total}`
  console.log(total);

  localStorage.setItem("cartTotal",JSON.stringify(total))
  

    var cartmain=document.getElementById("cart_page_all_div")
    var cartParent=document.getElementById("cart_parent")
    
    
    cartData.map(function(el,index){

        let imgPriceDiv=document.createElement("div")
        imgPriceDiv.setAttribute("id","imgPriceDiv")

       let imgDiv5=document.createElement("div")
       imgDiv5.setAttribute("id","imgDiv5")

       let img=document.createElement("img")
       img.src=el.image

       let namePriceDiv=document.createElement("div")
       namePriceDiv.setAttribute("id","namePriceDiv")

       let nameDiv=document.createElement("div")
       nameDiv.innerText=el.name


       let plusPrice=document.createElement("div")
       plusPrice.setAttribute("id","plusPrice")

       let plusPrice1=document.createElement("div")
       plusPrice1.setAttribute("id","plusPrice1")
       let plusPrice2=document.createElement("div")
       plusPrice2.innerHTML=el.sprice

       let plusPrice11=document.createElement("div")
       plusPrice11.innerText="-"
       let plusPrice12=document.createElement("div")
       plusPrice12.innerText="1"
       let plusPrice13=document.createElement("div")
       plusPrice13.innerText="+"


       let btn=document.createElement("button")
      btn.setAttribute("id","remove")
      btn.innerHTML="Remove"
      btn.addEventListener("click", function () {
      removeItem(el,index)
      });

       plusPrice1.append(plusPrice11,plusPrice12,plusPrice13)
       plusPrice.append(plusPrice1,plusPrice2)


       namePriceDiv.append(nameDiv,plusPrice,btn)
       imgDiv5.append(img)
       imgPriceDiv.append(imgDiv5,namePriceDiv)
       cartParent.append(imgPriceDiv)

      


      addressData.push(el)
      console.log(addressData)

      let checkbtn=document.querySelector("#checkOutBtn")
         checkbtn.addEventListener("click",function(){
             addressFun()
         })


    })


    function removeItem(el, index) {
    console.log(el, index);
    cartData.splice(index, 1);
    console.log(cartData);
    localStorage.setItem("bagData", JSON.stringify(cartData));
    window.location.reload();
  }




  function addressFun(el,index)
{
// addressData.push(el)
localStorage.setItem("addData",JSON.stringify(addressData))
window.location.href="../Information/Information.html"
}