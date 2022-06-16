// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const boxUser = document.querySelector('#box');

for (let index = 1; index <= 100; index++) {

    const userSel = document.querySelector('#sel-user');
    const createBox = document.createElement('div');
    createBox.classList.add('col-2', 'm-3', 'shadow-sm', 'rounded-4' ,'ms_case');
    createBox.innerHTML = index;

    boxUser.append(createBox);

    if ((index % 3 == 0) && (index % 5 == 0) ) {
        console.log('FrizzBuzz');
        createBox.innerHTML = ('FrizzBuzz');
        createBox.classList.add('bg-success');
        document.addEventListener('click', function() {
            userSel.innerHTML = ('FrizzBuzz');
       });

    }
    else if (index % 3 == 0){
        console.log('Frizz')
        createBox.innerHTML = ('Frizz');
        createBox.classList.add('bg-danger');
        document.addEventListener('click', function() {
            userSel.innerHTML = ('Frizz');
       });
    }
    else if (index % 5 == 0){
        console.log('Buzz')
        createBox.innerHTML = ('Buzz');
        createBox.classList.add('bg-warning');
        document.addEventListener('click', function() {
            userSel.innerHTML = ('Buzz');
       });
    }
    else{
        console.log(index);
        createBox.innerHTML = index;
        createBox.classList.add('bg-secondary');
        document.addEventListener('click', function() {
            userSel.innerHTML = index;
       });
    }

}