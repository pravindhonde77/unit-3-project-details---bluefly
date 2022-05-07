var data =JSON.parse(localStorage.getItem("clickblank")) || [] 
   var userData=JSON.parse(localStorage.getItem("bagData")) || []
//    console.log(data);
data.map(function(el){
    
    document.querySelector("#child_2")
    var image=document.createElement("img")
    image.setAttribute("id","child_img2")
    image.src=el.image
    child_2.append(image)


    
    document.querySelector("#child_1")
    document.querySelector("#img1")
    document.querySelector("#img2")
    document.querySelector("#img3")
    document.querySelector("#img4")


    var image1=document.createElement("img")
    image1.setAttribute("id","img1_1")
    image1.src=el.image1

    var image2=document.createElement("img")
    image2.setAttribute("id","img1_1")
    image2.src=el.image2

    var image3=document.createElement("img")
    image3.setAttribute("id","img1_1")
    image3.src=el.image3

    var image4=document.createElement("img")
    image4.setAttribute("id","img1_1")
    image4.src=el.image4

    img1.append(image1)
    img2.append(image2)
    img3.append(image3)
    img4.append(image4)
    
   
    



    document.querySelector("#child_3")
    document.querySelector("#child_3_h3")
   
    document.querySelector("#h3_valent")

    h3_valent.innerHTML=el.type;

    child_3_h3.append(h3_valent)


    document.querySelector("#h1_valento_1")
    document.querySelector("#h1_valento")

    h1_valento.innerHTML=el.name;

    h1_valento_1.append(h1_valento)


    document.querySelector("#price_div1")
    document.querySelector("#price_div2")
    document.querySelector("#price_div3")
    document.querySelector("#price_div4")

    price_div2.innerHTML=el.hprice
    price_div3.innerHTML=el.sprice
    price_div4.innerHTML=el.save
    price_div4.style="color:red"

    price_div1.append(price_div2,price_div3,price_div4)


    document.querySelector("#btn_div")
    var bag = document.createElement("button")
        bag.innerText="ADD TO CART"
        bag.setAttribute("id","add_to_cart")
        btn_div.append(bag)
        bag.addEventListener("click",function(){
            clickFun(el)
            window.location.href="../cart/cart.html"
        })







})

function clickFun(el){
        userData.push(el)
        localStorage.setItem("bagData",JSON.stringify(userData))
       window.location.href="cart.html"
    }