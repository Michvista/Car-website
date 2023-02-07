// let header = document.getElementById('header');
// const bgimg = document.querySelector('bgimg');
// const a_tag = document.querySelectorAll('a');

// header.addEventListener('click', () => {
//     header.classList.add('active');
// });


// window.addEventListener('scroll', ()  => {
// let value = window.scrollY;
// header.style.marginLeft = '25%';
// });


let Cars = [ 
     {  
    name: 'Volkswagen Polo Golf VII', 
 price: '$20.00', 
  img: 
'images/brandon-paul-ErH1LWnAKXg-unsplash.jpg' 
},  
{  name: 'Tesla',  
price: 
'$30.00',
 img: 'images/erik-mclean-ZRns2R5azu0-unsplash.jpg', 
 }, 
 {  name: 'Ancient Car',
  price: '$10.00',  
 img: 'images/gustavo-S-W9vDL5whU-unsplash.jpg',
 }, 
 { 
     name: 'Highlander', 
  price: '$40.00',  
 img: 'images/liz-fitch-r7iqwIe32RA-unsplash.jpg',
 },  
 {  
    name: 'Electric Car',  
price: '$60.00', 
img: 'images/IMG_20230116_131758.jpg',  
},  
{ 
     name: 
'Lambourghini Sports Car', 
price: '$70.00', 
 img: 
'images/IMG_20230109_113445.jpg', 
} 
 ] 
  function populateCars() {  
    const collectionCars = document.getElementById('cars'); 
let row1 = ""; 
 let row2 = "";
 
row1 += '<div class="row1">'; 
 let i = 0;  
 for (; i < (Cars.length) / 2; i++) { 
    row1 += `<div class="col${i + 1} col" id='col'>
     <img src=${Cars[i].img} alt="" class='image'> 
     <h2 id='header2'>${Cars[i].name}</h2>  
    <h6><span>${Cars[i].price}</span> /day</h6> </div>`; 
 }  row1 += '</div>' 
  row2 += '<div class="row2">';
   for (; i < Cars.length; i++) { 
     row2 += `<div class="col${i + 1} col" id='col'> 
<img src=${Cars[i].img} alt="" class='image'> 
 <h2 id='header2'>${Cars[i].name}</h2>
  <h6><span>${Cars[i].price}</span> /day</h6> </div>`;  
} 
 row2 += '</div>'; 
collectionCars.innerHTML += row1 + row2;
 } 
 const hammenu = document.getElementById("hammenu") 
  const navlinks = document.getElementsByClassName('navlinks')[0] 
  const ul = document.querySelector('.nav_links') 
  let menuOpen = false;  
hammenu.addEventListener('click', () => { 
    if (!menuOpen) { 
         ul.style.left = '0%';
          hammenu.classList.add('open'); 
           menuOpen = true;
          }  else {  ul.style.left = '-130%'; 
          hammenu.classList.remove('open'); 
           menuOpen = false; 
         }
 }); 
  const inputCarName = document.getElementById('carName'); 
   const inputCarPrice = document.getElementById('carPrice');
    const searchBtn = document.getElementById('submit'); 
     inputCarName.addEventListener('input', e => { 
    const elem = document.querySelectorAll('.col');
      console.log(elem) 
       const value = e.target.value;
        console.log(value);  
        elem.forEach((element, index) => {  
            element.classList.toggle('hide', !(Cars[index].name.toLowerCase().includes(value)))
         }); 
         })
              inputCarPrice.addEventListener('input', e => { 
    const elem = document.querySelectorAll('.col');
      console.log(elem) 
       const value = e.target.value;
         elem.forEach((element, index) => {  
            element.classList.toggle('hide', !(Cars[index].price.includes(value)))
         }); 
        })
         populateCars();
