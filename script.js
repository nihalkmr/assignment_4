var productData =[
    {
    "id": "1",
    "name": "Men Navy Blue Solid Sweatshirt",
    "preview": "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
    "photos": [
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/08a7b230-ee8f-46c0-a945-4e835a3c01c01541402833619-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-1.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/efc3d5b9-1bb3-4427-af53-7acae7af98951541402833591-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-2.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/c7e58861-3431-4189-9903-9880f5eebd181541402833566-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-3.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/66490b64-32de-44b4-a6e4-fe36f1c040051541402833548-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-4.jpg",
      "https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/7579188/2018/11/5/957be784-7c5d-4e90-ab9f-0928015b22891541402833645-United-Colors-of-Benetton-Men-Sweatshirts-1271541402833444-5.jpg"
    ],
    "description": "Navy solid sweatshirt with patchwork, has a round neck, long sleeves, straight hem",
    "size": [
      1,
      1,
      0,
      1,
      0
    ],
    "isAccessory": false,
    "brand": "United Colors of Benetton",
    "price": "price: rs 2599/-"
  },
];

var products=document.querySelector(".products");
 var photobox=document.querySelector(".photo-box");

for( var i=0; i< productData.length; i++){
  
    products.innerHTML += `
    <div class="img_box">
    <img  class="main_image" src=${productData[i].preview} alt="image"/>
    </div>
    <div class="right_column">
    <h3 class="product_title">${productData[i].name}</h3>
    <h3 class="product_subtitle">${productData[i].brand}</h3>
    <h3 class="product_price">${productData[i].price}</h3>
    <h4 class="Description">Description</h4>
    <h4 class="product_description">${productData[i].description}</h4>
    <h4 class="Description">product Preview</h4>

    <div class="product-photos">
    
    <img  class="first" src=${productData[i].photos[0]} alt="image" />

    <img class="second" src=${productData[i].photos[1]} alt="image"/>
    <img class="third" src=${productData[i].photos[2]} alt="image"/>
    <img class="four" src=${productData[i].photos[3]} alt="image"/>
    <img class="five" src=${productData[i].photos[4]} alt="image"/>
    
    </div>
    `;
     var main_image=document.querySelector(".main_image").src;
     var first=document.querySelector(".first");
     var second=document.querySelector(".second");
     var third=document.querySelector(".third");
     var four=document.querySelector(".four");
     var five=document.querySelector(".five");
        
    //  var first=document.querySelector(".first");
      first.addEventListener('click',function(){
        var k= first.src;
       // console.log(k);
       
       document.querySelector(".main_image").src=k ;
       // console.log(main_image);
      });

    second.addEventListener('click',function(){
        var k= second.src;
        document.querySelector(".main_image").src=k ;
      });
      third.addEventListener('click',function(){
        var k= third.src;
        document.querySelector(".main_image").src=k ;
      });
      four.addEventListener('click',function(){
        var k= four.src;
        document.querySelector(".main_image").src=k ;
      });
      five.addEventListener('click',function(){
        var k= five.src;
        document.querySelector(".main_image").src=k ;
      });

    }

