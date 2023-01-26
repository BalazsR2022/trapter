/*
* File: app.js
* Author: Balázs Réka
* Copyright: 2023, Balázs Réka
* Group: Szoft I-2 E
* Date: 2023-01-26
* Github: https://github.com/BalazsR2022/
* Licenc: GNU GPL
*/

const asideElem = document.querySelector("#aside");
const bsideElem = document.querySelector("#bside");
const csideElem = document.querySelector("#cside");
const dsideElem = document.querySelector("#dside");
const calcButton = document.querySelector("#calcButton");
const areaElem = document.querySelector("#area");

calcButton.addEventListener('click', () =>{
    console.log('Működik')
    let aside = Number(asideElem.value);
    let bside = Number(bsideElem.value);
    let cside = Number(csideElem.value);
    let dside = Number(dsideElem.value);
   // console.log(typeof aside)
   //13,4,7,4
    let area = calcArea(aside, bside, cside, dside);
    areaElem.value = area;
    console.log(area)
});

function calcArea(a, b, c, d){
    let terulet = (  (a + c)/(4*(a - c))  ) * Math.sqrt(
        (a + b - c + d)*
        (a - b - c + d)*
        (a + b - c - d)*
        (-a + b + c + d)
    )
    return terulet;
}