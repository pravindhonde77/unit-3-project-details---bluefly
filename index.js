  //SHOP BY CATEGORY
  var indexData=[ 
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2227080_large.jpg?v=1649703475",
        category:"Dresses",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313201861_RLLZ_1_large.jpg?v=1651370369",
        category:"PUMPS & HEELS",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1161192845_RLLZ_1_large.jpg?v=1651354996",
        category:"HANDBAGS",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Angle_defdd233-67c0-445b-aaf8-c55b06a6f162_large.jpg?v=1650973525",
        category:"SUNCLASSES",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1313251584_RLLZ_1_large.jpg?v=1649964299",
        category:"WOMEN'S SNEAKERS",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1312134872_RLLZ_1_large.jpg?v=16511249609",
        category:"MEN'S SNEAKERS",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1881082_large.jpg?v=1637943584",
        category:"MEN'S T-SHIRTS",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1411158660_RLLZ_1_large.jpg?v=1648594675",
        category:"WOMEN'S TOPS",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/MIknqmmliBqlojVFQ5Vkrxaj3kuvD7Z4-25_c432c99f-30f1-45a7-803c-efae45c59a4f_large.jpg?v=1651327676",
        category:"WOMEN'S DENIM",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/6030974934_RLLZ_1_b7f9bf06-2390-425e-8e3f-345902242c2b_large.jpg?v=1651309687",
        category:"JEWELRY",
    },
]

//  let box=document.getElementById("shop_by_category")
 
 indexData.map(function(el){
   let div= document.createElement("div")
   div.setAttribute("id","big_div_img")
   div.addEventListener("click",function(){
       changeFun()
   })
    let img= document.createElement("img")
     img.src=el.image;
    let p= document.createElement("p")
     p.innerText=el.category;
     div.append(img,p)
    //  box.append(div)
    document.querySelector('#shop_by_category').append(div)
    
      
     
 })

 function changeFun(){
     window.location.href="./shoes/shoes.html"
 }




 //trending now
var trendingData=[
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/8f593ac8-3f8b-43c7-a514-44cceecabe50_1800x1800.jpg?v=1644499879",
        name:"BURBERRY YELLOW BURBERRY VINTAGE CHECK HIGH-TOP SNEAKERS",
        sprice:"$580.00",
        hprice:"$369.75",
        save:"Save 40%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/wtlliMyyv3hcuS7RGVS0VZojPouPYfsw-25_900x.jpg?v=1607399172",
        name:"ROXY WOMENS DOWN WINTER PUFFER COAT",
        sprice:"$499.00",
        hprice:"$248.98",
        save:"Save 50%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/Angle_defdd233-67c0-445b-aaf8-c55b06a6f162_large.jpg?v=1650973525",
        name:"DIOR PILOT SUNGLASSES MONSIEUR 1 XWY1I GOLD/BLACK/HAVANA 63MM",
        sprice:"",
        hprice:"$495.00", 
        save:"",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1885891_1080x.jpg?v=1637852340",
        name:"JACQUEMUS BROWN 'LE BAMBINO' LEATHER CROSSBODY PURSE",
        sprice:"",
        hprice:"$585.00",
        save:"", 
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1010994296_RLLZ_1_447156e9-6d32-41e7-b8c0-18bf5a4996a7_900x.jpg?v=1651012809",
        name:"GUCCI DOUBLE G LEATHER BELT",
        sprice:"$480.00",
        hprice:"$449.99",
        save:"Save 6%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/8d21d1b4-11d7-4354-9fde-fd28589989ea_900x.jpg?v=1628207566",
        name:"OFF WHITE C/O VIRGIL ABLOH WHITE ARROWS CARRY ON SUITCASE",
        sprice:"$1015",
        hprice:"$650.25",
        save:"Save 36%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/GLJ1LCHSG002_2_large.jpg?v=1651508546",
        name:"DSQUARED2 RECTANGULAR SUNGLASSES DQ0171 26X CRYSTAL 52MM 171",
        sprice:"",
        hprice:"$255.00",
        save:"",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1111080575_RLLZ_2_large.jpg?v=1651396582",
        name:"DIOR RECTANGULAR SUNGLASSES CATSTYLEDIOR 2 KB72K GRAY/RUTHENIUM 54MM",
        sprice:"",
        hprice:"$490.00", 
        save:"",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/9f8823b8-195e-4999-9b82-440c7c81bc9d_900x.jpg?v=1627405619",
        name:"BURBERRY BLACK TB MOTIF POLO SHIRT",
        sprice:"$480.00",
        hprice:"$306.00",
        save:"Save 36%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/61b6771d5344c_large.jpg?v=1650984507",
        name:"STUART WEITZMAN JOCEY SUEDE OVER-THE-KNEE BOOT",
        sprice:"$795.00",
        hprice:"$267.99",
        save:"Save 66%",
    },

]

trendingData.map(function(el){
    let div= document.createElement("div")
    div.setAttribute("id","trending")
    let img= document.createElement("img")
    img.setAttribute("id","trending_img")
     img.src=el.image;
     let name= document.createElement("p")
     name.innerText=el.name;
     let div1= document.createElement("div")
     div1.setAttribute("id","trending1")
     let sprice= document.createElement("del")
     sprice.setAttribute("id","sprice")
     sprice.innerText=el.sprice;
     let hprice= document.createElement("p")
     hprice.setAttribute("id","hprice")
     hprice.innerText=el.hprice;
     let save= document.createElement("p")
     save.setAttribute("id","save")
     save.innerText=el.save;
     div1.append(sprice,hprice,save)



     div.append(img,name,div1)
     document.getElementById("trending_data").append(div)


})


var newArrival=[
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1631786_900x.jpg?v=1651239390",
        name:"A LEATHER HANDBAG",
        sprice:"$1,426.00",
        hprice:"$1,116.36",
        save:"Save 22%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/1566289_900x.png?v=1635615949",
        name:"'DIVA!' T-SHIRT",
        sprice:"$694.00",
        hprice:"$420.60",
        save:"Save 39%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2246722_900x.jpg?v=1649684335",
        name:"LA MEDUSA RUBBER MULES",
        sprice:"$492.00",
        hprice:"$385.29",
        save:"Save 22%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2087946_900x.jpg?v=1638291787",
        name:"'FOR RIDING' RAINBOOTS",
        sprice:"$473.00",
        hprice:"$347.65",
        save:"Save 27%",
    },
    {
        image:"https://cdn.shopify.com/s/files/1/0248/3473/6191/products/2149730_76cf6aa7-502b-4b5b-bd8e-31e1af9ed2bb_900x.jpg?v=1646588764",
        name:"'KIKI' STRAW CANOTIER HAT",
        sprice:"$669.00",
        hprice:"$505.65",
        save:"Save 24%",
    },
]

newArrival.map(function(el){
    let div= document.createElement("div")
    div.setAttribute("id","arrival")
    let img= document.createElement("img")
    img.setAttribute("id","arrival_img")
     img.src=el.image;
     let name= document.createElement("p")
     name.innerText=el.name;
     let div1= document.createElement("div")
     div1.setAttribute("id","trending1")
     let sprice= document.createElement("del")
     sprice.setAttribute("id","sprice")
     sprice.innerText=el.sprice;
     let hprice= document.createElement("p")
     hprice.setAttribute("id","hprice")
     hprice.innerText=el.hprice;
     let save= document.createElement("p")
     save.setAttribute("id","save")
     save.innerText=el.save;
     div1.append(sprice,hprice,save)



     div.append(img,name,div1)
     document.getElementById("new_arrival").append(div)

})