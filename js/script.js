// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const boxUser = document.querySelector('#box');

for (let index = 1; index <= 100; index++) {

    const createBox = document.createElement('div');
    createBox.classList.add('col-2');
    createBox.innerHTML = index;

    if ((index % 3 == 0) && (index % 5 == 0) ) {
        console.log('FrizzBuzz');
        boxUser.append('FrizzBuzz');
    }
    else if (index % 3 == 0){
        console.log('Frizz')
        boxUser.append('Frizz');
    }
    else if (index % 5 == 0){
        console.log('Buzz')
        boxUser.append('Buzz');
    }
    else{
        console.log(index);
        boxUser.append(createBox);
    }

    

    

    

    

}