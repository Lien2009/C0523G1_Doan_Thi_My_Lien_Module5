let findPrime = (number) => {
    if(number < 2){
        return false;
    } else {
        for (let i = 2; i < number-1; i++) {
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
}
let array = [1,2,3,4,5,6,7,8,9,10,17,100];
let result = array.filter(element => findPrime(element));
console.log(result);