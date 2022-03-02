let inp = document.querySelector('.field');
let out = document.querySelector('.out-city');

inp.addEventListener('keypress', function (event) {
    if (event.code == "Enter") check ();
});

let arr = [];

function check () {
    let x = inp.value.toLowerCase();


    // if (arr.length == 0) {
    //     arr.push(x);
    // }
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == inp) {
            console.log('This word has already been')
    }else {
            arr.push(x);
        }
    }




    inp.value = '';
    console.log(arr)




}



