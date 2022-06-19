// alert('done');

const allButton = document.getElementsByClassName('button-test');

const prime = document.getElementById('prime');
console.log(allButton);

for (const button of allButton) {
    // console.log(button);
    // console.log(button.target); //unfinished shoew korbe karon target bolte kichu khuje pae ni

    button.addEventListener('click', function (e) {

        console.log(e); //pointer ashbe
        if (e.target.id == "prime") {
            document.getElementById('title').style.color = "red";
        }
        else {
            document.getElementById('title').style.color = "green";
        }
    })

} //e = event = default parameter  

