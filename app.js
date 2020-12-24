const menu =[
    {
        id:1,
        title:'hello there',
        category:'btn1',
        body:'hi i am from card number one',
        img:'./img/logo.png',

    },
    {
        id:2,
        title:'hello two',
        category:'btn2',
        body:'hi i am from card number two',
        img:'./img/home.png',

    },
    {
        id:3,
        title:'hello three',
        category:'btn3',
        body:'hi i am from card number three',
        img:'./img/gallery.png',

    },
    {
        id:4,
        title:'hello four',
        category:'btn4',
        body:'hi i am from card number three',
        img:'./img/see.png',

    }
]
// console.log(menu);
//   <div class="card" style="width: 18rem;">
//             <img src="img/back.png" class="card-img-top" alt="...">
//             <div class="card-body">
//               <h5 class="card-title">Card title</h5>
//               <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
//               <a href="#" class="btn btn-primary">Go somewhere</a>
//             </div>
//           </div>
const parent = document.querySelector(".all-card");
const allbtn= document.querySelectorAll(".filter-btn");
window.addEventListener("DOMContentLoaded",function(){
displayCard(menu);
displayBtn();
});


function displayCard (menuItems){
    let displayCard = menu.map(function(item){
        return `
          <div class="card" style="width: 18rem;">
            <img src=${item.img} class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${item.title}</h5>
              <p class="card-text">${item.body}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
        `;
    })
    displayCard=displayCard.join("");
    // console.log(displayCard);
    parent.innerHTML= displayCard;
}
function displayBtn(){
    allbtn.forEach(function(btn){
        btn.addEventListener('click',function(e){
            const category = e.currentTarget.dataset.id;
    
            const cardCategory = menu.filter(function(cardItem){
                console.log(cardItem);
                if(cardItem.category === category){
                    return cardItem;
                }
            });
            if(category === "all"){
                displayCard(menu);
            }else{
                displayCard(cardCategory);
            }
            
            console.log(category);
        })
    })
}
