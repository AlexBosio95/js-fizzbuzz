// Scrivi un programma che stampi in console i numeri da 1 a 100,
// ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
// Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.


for (let index = 1; index <= 100; index++) {

    if ((index % 3 == 0) && (index % 5 == 0) ) {
        console.log('FrizzBuzz')
    }
    else if (index % 3 == 0){
        console.log('Frizz')
    }
    else if (index % 5 == 0){
        console.log('Buzz')
    }
    else{
        console.log(index)
    }
}