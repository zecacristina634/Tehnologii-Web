let sayHello = (name) => `Hello, ${name}!`; 

//console.log(sayHello(process.argv[1]));

let stringArray = ["abc", "def", "ghi"];
let finalString = (array) => array[0]+array[1]+array[2];

//console.log(finalString(stringArray));

function checkDivisible(n, divisor) {
    if (n % divisor) {
        return false;
    } else {
        return true;
    }
}

console.log(checkDivisible(10, 2));
console.log(checkDivisible(10, 3));

function nrCaractereDiferite(string1,string2){
    if(string1.length != string2.length)
        return -1;
    else{
        let nr=0;
        for(let i=0;i< string1.length;i++)
            if(string1[i] != string2[i]){
                nr++;
            }
        return nr;
    }
}

console.log(nrCaractereDiferite("mama","mana"));
console.log(nrCaractereDiferite("apa","mama"));


/* function occurences(text, character) {
    let count = 0
    for (var i = 0; i < text.length; i++) {
        if (text.charAt(i) === character) {
            count++
        }
    }
    return count;
}
 */

let occurences = (text, character) =>
    text.split(character).length - 1;

console.log(occurences("sample text", "e"));

function createArrayFromList(listaNumere){
    let array = listaNumere.split(" ");
    return array;
}

//let array = (listaNumere) => listaNumere.split(" ");

/* console.log(createArrayFromList("1 2 3 4"));
console.log(array("5 6 7 8")); */

function addToArray(array, ...args) {
    for (var i = 0; i < args.length; i++) {
        array.push(args[i]);
    }

    return array;
}

let array = ["a"];
console.log(addToArray(array, "b", "c").join(", "));

function intercalareArray(array1, array2){
    if(array1.length != array2.length)
        return -1;
    else{
        let nou=[];
        let a1=0, a2=0;
        for(var i=0;i<array1.length * 2;i++)
        {
            if(i%2 ==0){
                nou[i]=array1[a1];
                a1++;
            }
            else{
                nou[i]=array2[a2];
                a2++;
            }
        }
        return nou;
    }
}

//console.log(intercalareArray([1,2,3,4],[0,0,0,0]));

const checkPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (!(n % i)) {
            return false;
        }
    }
    return true;
}

/* if (process.argv.length <= 2) {
    console.log('not enough parameters')
} else {
    console.log(checkPrime(parseInt(process.argv[2])))
} */

const Fibonacci = (n) => {
    if(n==0 || n==1) return n;
    let a=0, b=1, c, i=2;
    while(i<=n){
        c = a + b;
        a = b;
        b = c;
        i++;
    }
    return c;
}

/* if (process.argv.length < 3) {
    console.log('not enough parameters');
} else {
    console.log(Fibonacci(parseInt(process.argv[2])));
} */

const sampleString = 'the quick brown fox jumps over the lazy dog';

const getCounts = (text) => {
    const words = text.split(' ');
    const result = {};
    for (let word of words) {
        if (word in result) {
            result[word]++;
        } else {
            result[word] = 1;
        }

    }
    for (let word in result) {
        result[word] /= words.length;
    }
    return result;
}

//console.log(getCounts(sampleString));

const frecventeLitere = (text) =>{
    let frecventa = {};
    let totalLitere=0;

    for(let char of text){
        char=char.toLowerCase();
        if(char>='a' && char<='z')
            totalLitere++;
        if(frecventa[char])
            frecventa[char]++;
        else
            frecventa[char]=1;
    }
    
    for(let litera in frecventa){
        frecventa[litera] = frecventa[litera] / totalLitere;
    }
    return frecventa;
}

console.log(frecventeLitere("bedhbhe dhvdhbc"));