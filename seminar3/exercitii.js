///exp1
const words = [
    "fox",
    "wolf",
    "snake",
    "crocodile",
    "lion",
    "cat",
    "crocodile",
    "horse"
]

const forbiddenWord = "crocodile"
const minLength = 4

const filterWords = (words, forbiddenWord, minLength) => {
    const result = words.filter((word) => {
        if (word !== forbiddenWord && word.length >= minLength) {
            return true
        }
        return false;
    })
    return result
}

console.log(filterWords(words, forbiddenWord, minLength));

///ex1
const years=[2000, 2003, 2017, 2008, 2013, 1999, 2005];

const filterYears = (years) =>{
    const result=years.filter(
        (year) => { 
            if(2025-year >= 18)
                return true;
            return false;
        })
    return result;
}

console.log(filterYears(years));

///exp2
const getTotalArea = (squareDimensions) => {
    return squareDimensions.map((side) => {
        return side * side;
    }).reduce((prev, current) => {
        return prev + current;
    }, 0)

}

const squareDimensions = [3, 5, 12, 3, 5, 3];

const result = getTotalArea(squareDimensions);
console.log("result: ", result);

///ex2
const calculeazaSuma = (arrayNumbere, divizor) =>{
    return arrayNumbere.map( (nrDivizat) =>{
        if(nrDivizat%divizor===0) return nrDivizat;
        else return 0;
    }).reduce((prev,current)=>{
        return prev+current;
    },0)
}

const arrayNumbere=[4, 7, 12, 9, 5, 21, 8, 1];
const rezultat=calculeazaSuma(arrayNumbere,3);
console.log("rezultat: "+rezultat);

///exp3
const formatString = (s, ...format) => {

    let modified = s;
    for (let i = 0; i < format.length; i++) {
        if (modified.indexOf('{' + i + '}') !== -1) {
            modified = modified.replace('{' + i + '}', format[i]);
        }
    }
    return modified;
}

console.log(formatString("this is a {0} string and we've {1} it ", 'nice', 'modified'));

///ex3
const formatareString = (stringInitial, ...format) =>{
    let s=stringInitial;
    for(let i=0;i<format.length;i++){
        if (s.indexOf('{substantiv}') !==-1)
            s=s.replace('{substantiv}', format[i]);
        else if(s.indexOf('{adjectiv}') !==-1)
            s=s.replace('{adjectiv}', format[i]);
    }
    return s;
}
const rez=formatareString("un {substantiv} este {adjectiv} ",'calut','dragut');
console.log(rez);

///exp4
const sampleArray = [1, 2, 3, 4, 5];

const map = (array, transformation) => {

    const result = [];
    for (const element of array) {
        result.push(transformation(element));
    }
    return result;
}
console.log(map(sampleArray, (x) => x * 2));


///ex4
const reduce = (array, func, initialValue) =>{
    let rez=initialValue;

    for(const element of array){
        rez=func(rez, element);
    }

    return rez;
}

const array=[2, 4, 6, 8, 10];

console.log(reduce(array, (x,y)=> x+y, 0));

///exp5
const sampleDictionary = ['the', 'quick', 'brown', 'fox', 'jumps', 'over', 'lazy', 'dog']

const sampleText = `
    best
    read
    on
    windy
    nights
`
const checkAcrostic = (text, dictionary) => {
    const candidate = text.split('\n').filter(e => e).map(e => e.trim()).map(e => e[0]).join('')

    return dictionary.indexOf(candidate) !== -1
}

console.log(checkAcrostic(sampleText, sampleDictionary))

///ex5
const textSample="java este minunat";
const dictionarSample=['este'];

const cenzurareText=(text,dictionar) =>{
    const cuvinte=text.split(' ');
    const cuvinteCenzurate=cuvinte.map( (word)=>{
        if(dictionar.includes(word)){
            if(word.length<=2) return word;
            return word[0]+ '*'.repeat(word.length-2)+word[word.length-1];
        }
        else return word;
    })
    return cuvinteCenzurate.join(' ');
}

console.log(cenzurareText(textSample,dictionarSample));

///exp6
const sortObjects = (array,key) =>{
    return array.sort((a,b)=>{
        if(a[key]<b[key]) return -1;
        else return 1;
    })
}
 
const laptops=[
    {
        brand: "HP", processor: "i5", ram: 8
    },
    {
        brand: "Lenovo", processor: "i7", ram: 32
    },
    {
        brand: "Acer", processor: "i5", ram: 16
    },
    {
        brand: "Asus", processor: "i7", ram: 8
    }
]

const result1=sortObjects(laptops,"ram");
console.log("result:", result1);

///ex7
const calculeazaMedie =(array) =>{
    if(array.length===0) return 0;

    const suma=array.reduce((prev,current)=> prev+current,0);
    return suma/array.length;
}

const numere=[2, 3, 4, 5, 6];
console.log(calculeazaMedie(numere));
