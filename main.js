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

const hammenu = document.getElementById("hammenu")
const navlinks = document.getElementsByClassName('navlinks')[0]
const ul = document.querySelector('.nav_links')
let menuOpen = false;

hammenu.addEventListener('click', () => {
    if(!menuOpen) {
        ul.style.left ='0%';
                    hammenu.classList.add('open');
            menuOpen = true;
    }
    else{
        ul.style.left ='-130%';
        hammenu.classList.remove('open');
        menuOpen = false;
}
});
const collectionCars = document.getElementById('cars');
const carImagesArray = [
     'images/brandon-paul-ErH1LWnAKXg-unsplash.jpg', 'images/erik-mclean-ZRns2R5azu0-unsplash.jpg', 'images/gustavo-S-W9vDL5whU-unsplash.jpg',
     'images/liz-fitch-r7iqwIe32RA-unsplash.jpg', 'images/IMG_20230116_131758.jpg', 'images/IMG_20230109_113445.jpg'
    ]
    const carHeadings = [
       { first: 'Volkswagen Polo Golf VII'}, { second : 'Tesla'}, { third : 'Ancient Car'}, {fourth : 'Highlander'}, { fifth: 'Electric Car'},
        {sixth: 'Lambourghini Sports Car'}, {elem: document.getElementById('col')}
    ]
    const carSpans = [
        '$20.00', '$30.00', '$10.00', '$40.00', '$60.00', '$70.00'
    ]
    const carPar = [
        "/per Day"
    ]
    // const CarCollection = [
    //     {
    //         id : '0',
    //         img: 'images/brandon-paul-ErH1LWnAKXg-unsplash.jpg',
    //         h6: 'Volkswagen Polo Golf VII',
    //         span : '$20.00',
    //         p: ' / per Day'
    //     },
    //     {
    //         id : '0',
    //         img: 'images/erik-mclean-ZRns2R5azu0-unsplash.jpg',
    //         h6: 'Tesla',
    //         span : '$30.00',
    //         p: ' / per Day'
    //     },
    //     {
    //         id : '0',
    //         img: 'images/gustavo-S-W9vDL5whU-unsplash.jpg',
    //         h6: 'Ancient Car',
    //         span : '$10.00',
    //         p: ' / per Day'
    //     },
    //     {
    //         id: '0',
    //         img: 'images/liz-fitch-r7iqwIe32RA-unsplash.jpg',
    //         h6: 'Highlander',
    //         span : '$40.00',
    //         p: ' / per Day'
    //     },
    //     {
    //         id: '0',
    //         img: 'images/IMG_20230116_131758.jpg',
    //         h6: 'Electric Car',
    //         span : '$60.00',
    //         p: ' / per Day'
    //     },
    //     {
    //         id : '0',
    //         img: 'images/IMG_20230109_113445.jpg',
    //         h6: 'Lambourghini Sports Car',
    //         span : '$70.00',
    //         p: ' / per Day'
    //     }
    // ];
    const {first, second, third, fourth, fifth, sixth  } = carHeadings[0];
    // // for (i = 0; i < CarCollection.filter(item => item.id === '0').length; i++ ) {
        
    // // }
    collectionCars.innerHTML += `
    <div class="row1">
    <div class="col1 col" id='col'>
    <img src=${carImagesArray[0]} alt="" class='image'>
        <h2 id='header2'>${first
        }
        </h2>
        <h6><span>${carSpans[0]}</span> ${carPar}</h6>
    </div>
    <div class="col2 col" id='col'>
    <img src=${carImagesArray[1]} alt="" class='image'>
    <h2 id='header2'>${carHeadings[1].second}</h2>
        <h6><span>${carSpans[1]}</span> ${carPar}</h6>
    </div>
    <div class="col3 col" id='col'>
    <img src=${carImagesArray[2]} alt="" class='image'>
    <h2 id='header2'>${carHeadings[2].third}</h2>
        <h6><span>${carSpans[2]}</span> ${carPar}</h6>
    </div>
</div>
<div class="row2">
    <div class="col4 col" id='col'>
    <img src=${carImagesArray[3]} alt="" class='image'>
    <h2 id='header2'>${carHeadings[3].fourth}</h2>
        <h6><span>${carSpans[3]}</span> ${carPar}</h6>
    </div>
    <div class="col5 col" id='col'>
    <img src=${carImagesArray[4]} alt="" class='image'>
    <h2 id='header2'>${carHeadings[4].fifth}</h2>
        <h6><span>${carSpans[4]}</span> ${carPar}</h6>
    </div>
    <div class="col6 col" id='col'>
    <img src=${carImagesArray[5]} alt="" class='image'>
    <h2 id='header2'>${carHeadings[5].sixth}</h2>
        <h6><span>${carSpans[5]}</span> ${carPar}</h6>
    </div>
</div>
    `
    const inputCarName = document.getElementById('carName');
    const inputCarPrice = document.getElementById('carPrice');
    const searchBtn = document.getElementById('submit');

    let headings = [];

    const elem = document.getElementById('col');
    headings = carHeadings.map(hid => {
       return {
        firstheading: hid.first,
        secondheading: hid.second,
        thirdHeading: hid.third,
        fourthheading: hid.fourth,
        fifthheading: hid.fifth,
        sixthheading: hid.sixth,
        element: elem
    }
    })

    inputCarName.addEventListener('input', e => {
    const elem = document.querySelectorAll('.col');
    console.log(elem)
        const value = e.target.value
        console.log(value);
        console.log(headings);
    
            const isVisible = 
            carHeadings[0].first.includes(value) || carHeadings[1].second.includes(value) || carHeadings[2].third.includes(value)
            || carHeadings[3].fourth.includes(value) || carHeadings[4].fifth.includes(value) || carHeadings[5].sixth.includes(value) ;
            console.log(isVisible)
            elem.forEach(element => {
                element.classList.toggle('hide', !isVisible) 
            });
          
                // elem1.classList.toggle('hide', !isVisible)          
    })