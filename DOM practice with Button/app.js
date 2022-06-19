// alert('done');

const allButton = document.getElementsByClassName('button-test');

const prime = document.getElementById('prime');
// console.log(allButton); //class er khetre inspact e html collection sho korbe 
//class er khetre ekta array dibe 
//array pelei amra loop chalae dite parbo
console.log(prime); // but id er khetre inspact korle object er moto ekta button group show korbe
//id er khetre .value ba .innerText diye kichu ekta likhe felte pari but class rt khetre ta parbo na 

for (const button of allButton) {
    console.log(button); //class diye dhore je button gula petam she gula ashche
}

// for (let i = 0; i < allButton.length; i++) {
//     const element = allButton[i];
//     console.log(element);
// }
//eta holo for of loop tar elaborate form