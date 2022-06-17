// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


const boxUser = document.querySelector('#box');

for (let index = 1; index <= 100; index++) {

    const userSel = document.querySelector('#sel-user');
    
    // creo l'elemento
    const createBox = document.createElement('div');
    
    // aggiungo le classi all'elemto
    createBox.classList.add('col-2', 'm-3', 'shadow-sm', 'rounded-3' ,'ms_case');
    
    // Rapprento sul DOM 
    createBox.innerHTML = index;



// si può scrivere anche (index % == 15) 3 * 5
    if ((index % 3 == 0) && (index % 5 == 0) ) {
        console.log('FrizzBuzz');
        // aggiunta classe all'elemto
        createBox.innerHTML = ('FrizzBuzz');
        createBox.classList.add('bg-success');
    }
    else if (index % 3 == 0){
        console.log('Frizz')
        createBox.innerHTML = ('Frizz');
        // aggiunta classe all'elemto
        createBox.classList.add('bg-danger');
    }
    else if (index % 5 == 0){
        console.log('Buzz');
        createBox.innerHTML = ('Buzz');
        // aggiunta classe all'elemto
        createBox.classList.add('bg-warning');
    }
    else{
        console.log(index);
        createBox.innerHTML = index;
        // aggiunta classe all'elemto
        createBox.classList.add('bg-secondary');
    }

    createBox.addEventListener('click', function(){
        // alert(createBox.innerHTML)
        userSel.innerHTML = (createBox.innerHTML);
    })

    boxUser.append(createBox);


}