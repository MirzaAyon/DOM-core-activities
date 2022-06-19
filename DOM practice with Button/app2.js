// alert('done');

const allButton = document.getElementsByClassName('button-test');

const prime = document.getElementById('prime');
console.log(allButton);

for (const button of allButton) {
    // console.log(button);
    // console.log(button.target); //unfinished shoew korbe karon target bolte kichu khuje pae ni

    button.addEventListener('click', function (e) {
        // console.log(e)
        // console.log(e.target)
        // console.log(e.target.id) //first button e click korle prime show krbe,2nd tae click korle kichu show korbe na 
        // console.log(e.target.parentNode); //div ashbe
        // console.log(e.target.parentNode.parentNode); //body ashbe
    })
}//ekhn normal function diye korlam pore shikhe arrow function use 
//ekhn inspact kore jetae click korbo shetar event show krbe
//e/event same jinish,event likhleo hbe
//event.target dile target er property gula access korte parbo

