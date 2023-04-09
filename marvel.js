const open = document.querySelector('.drops');
const close = document.querySelector('.close');
const dropdowncontent = document.querySelector('.dropdown-content')

open.onclick = function(){
    dropdowncontent.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
        left: 0;
        height: 100%
    `;

    document.body.style.cssText = 'overflow:hidden;'
}

close.onclick = function(){
    dropdowncontent.style.cssText = 'left: -1200px;height: 100%'
    document.body.style.cssText = 'overflow:auto;'
}   

let img1 = document.querySelector('.main-inside-1');
let img2 = document.querySelector('.main-inside-2');
let img3 = document.querySelector('.main-inside-3');
let img4 = document.querySelector('.main-inside-4');
let img5 = document.querySelector('.main-inside-5');
let img6 = document.querySelector('.main-inside-6');

const arr = [img1,img2,img3,img4,img5];
const main = document.querySelector('#main');
let i = 0;

main.appendChild(arr[i])

setTimeout(function change(){
    main.appendChild(arr[i]);
    i++;
    if(i === 5){
        i = 0;
    }
    setTimeout(change,2500)
},1000)

const swipText = document.querySelectorAll('.swip-text');
swipText[0].onclick = function(){
    main.appendChild(img1);
}
swipText[1].onclick = function(){
    main.appendChild(img2);
}
swipText[2].onclick = function(){
    main.appendChild(img3);
}
swipText[3].onclick = function(){
    main.appendChild(img4);
}
swipText[4].onclick = function(){
    main.appendChild(img5);
}


const closeAd = document.querySelector('.fa-times-circle');
const ad = document.querySelector('.reklam-img');
const spaceAd = document.querySelector('.reklam-1');

closeAd.onclick = function(){
    ad.style.cssText = 'display: none;'
    spaceAd.style.cssText = 'height: 50px'
}