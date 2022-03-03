<<<<<<< HEAD
let inp = document.querySelector('.field');
let out = document.querySelector('.out-city');

inp.addEventListener('keypress', function (event) {
    if (event.code == "Enter") check ();
});

let arr = [];


function check () {
    let x = inp.value.toUpperCase();

    if (arr.length == 0) {
        arr.push(x);
        out.innerHTML = arr[arr.length-1].toUpperCase();
        inp.value = '';
    }else if (arr.includes(x)){
        out.innerHTML = `${x.toUpperCase()} has already been`;
        inp.value = '';
    }else if (lastLetter() == x[0]){
        arr.push(x);
        out.innerHTML = arr[arr.length-1];
        inp.value = '';
    }else {
        out.innerHTML = `You should start with ${lastLetter().toUpperCase()}`;
        inp.value = '';
    }

    lastLetter();
}


function lastLetter () {
    let lastWord = arr[arr.length-1];
    // let o = lastWord.split('');
    // let last = o[o.length-1]
    let lastL = lastWord[lastWord.length-1]
    return lastL;
}
=======
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



>>>>>>> c56d18e3b138441edf1d5e07be7946aacf6f925c
