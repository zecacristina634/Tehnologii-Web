///exp1
class Stream {
    #value;
    #nextvalue

    static #count = 0
    constructor(value, nextValue) {
        this.#value = value
        this.#nextvalue = nextValue
        Stream.#count++
    }

    get value() {
        return this.#value
    }

    get next() {
        this.#value = this.#nextvalue(this.#value)
        return this.#value
    }

    static get count() {
        return Stream.#count
    }
}

class ConstantStream extends Stream {
    constructor(value) {
        super(value, value => value)
    }
}

class NextIntegerStream extends Stream {
    constructor() {
        super(0, value => value + 1)
    }
}

const constant = new ConstantStream(1)
const nextInteger = new NextIntegerStream()

for (let i = 0; i < 10; i++) {
    console.log(`constant[${i}] = ${constant.next}`)
    console.log(`nextInteger[${i}] = ${nextInteger.next}`)

}

console.log(Stream.count)
console.log('/////////////////////////////////////');

///ex1
class StreamPar{
    #value;

    constructor(valInitiala){
        if(valInitiala%2!==0)
            valInitiala++;
        this.#value=valInitiala;
    }

    get next(){
        const current=this.#value;
        this.#value+=2;
        return current;
    }
}

const sir=new StreamPar(5);
for(let i=0;i<=4;i++){
    console.log(`sir[${i}] = ${sir.next}`);
}


///exp2
class Robot {
    constructor(name) {
        this.name = name

    }

    move() {
        console.log(`${this.name} is moving`)
    }

}

const r0 = new Robot('some robot')
r0.move()

class Weapon {
    constructor(description) {
        this.description = description
    }

    fire() {
        console.log(`${this.description} is firing`)
    }
}

const w0 = new Weapon('laser')
w0.fire()

class CombatRobot extends Robot {
    constructor(name) {
        super(name)
        this.weapons = []
    }

    addWeapons(w) {
        this.weapons.push(w)
    }

    fire() {
        console.log('firing all weapons')
        this.weapons.forEach(element => {
            element.fire()
        });
    }
}

const r1 = new CombatRobot('some combat robot')
r1.addWeapons(w0)
r1.move()
r1.fire()

Robot.prototype.fly = function () {
    console.log(`${this.name} is flying`)
}

r1.fly()

console.log('//////////////////////////////////');

///ex2
class Software{
    constructor(name){
        this.name=name;
    }

    run(){
        console.log(`${this.name} is running`);
    }
}

class Plugin{
    constructor(name){
        this.name=name;
    }

    activate(){
        console.log(`Plugin ${this.name} is active`);
    }
}

class Browser extends Software{
    constructor(name){
        super(name);
        this.plugins=[];
    }

    installPlugin(p){
        this.plugins.push(p);
        console.log(`Plugin ${p.name} was installed in ${this.name}`);
    }

    activatePlugins(){
        console.log(`Activating all ${this.name}'s plugins`);
        this.plugins.forEach(p => p.activate());
    }
}

const b1=new Browser('Chrome');
b1.run();

const p1=new Plugin('DarkMode');
const p2=new Plugin('LightMode');

b1.installPlugin(p1);
b1.installPlugin(p2);
b1.activatePlugins();

console.log('//////////////////////////////////');

///exp3
function fibGen() {
    const cache = [1, 1]
    const fib = (index) => {
        if (index < cache.length) {
            console.log('found ' + index)
            return cache[index]
        } else {
            console.log('calculated ' + index)
            cache[index] = fib(index - 1) + fib(index - 2)
            return cache[index]
        }
    }
    return fib
}

const fib = fibGen()
console.log(fib(1))
console.log(fib(5))
console.log(fib(3))

console.log('//////////////////////////////////');

///ex3
function generareExponentiere(){
    const cache={};

    const exp=(baza, exponent) =>{
        const key=`${baza}_${exponent}`;

        if(cache[key]!==undefined){
            console.log(`found ${key}`);
            return cache[key];
        }

        let result;
        if(exponent===0){
            return 1;
        }else{
            console.log(`calculated ${key}`);
            result=baza* exp(baza,exponent-1);
        }
        cache[key]=result;
        return result;
    }

    return exp;
}

const exp = generareExponentiere();
console.log(exp(2,4));
console.log(exp(3,3));
console.log(exp(2,3));
console.log(exp(3,2));

console.log('//////////////////////////////////');


///exp4
String.prototype.capitalizedWords = function () {
    return this.replace(/\b[a-z]/g, match => match.toUpperCase())
}

console.log("these words will be calipalized".capitalizedWords())

console.log('//////////////////////////////////');

///ex4
Number.prototype.times = function(functie){
    for(let i=0;i< this;i++){
        functie(i);
    }
}

const n=3;
n.times( (x)=>{
    console.log(`executia numarul #${x + 1}`);
});

console.log('//////////////////////////////////');


///exp5
const orderCoffee = (type) => {

    const types = {
        REGULAR: 'REGULAR',
        SPECIAL: 'SPECIAL'
    }

    if (Object.values(types).indexOf(type) === -1) {
        throw new Error('coffee error')
    } else {
        console.log(`preparing ${type} coffee`)
    }
}

try {
    orderCoffee('REGULAR')
    orderCoffee('SWEET_COFFEE_NO_SUGAR')
} catch (err) {
    console.log(err)
}

console.log('//////////////////////////////////');

///ex5
const increaseSalary = (salarii, procent) =>{
    if(!Array.isArray(salarii)){
        throw new Error('Primul parametru trebuie sa fie un array!');
    }

    if(typeof procent !== "number" || isNaN(procent)){
        throw new Error('Al doilea parametru trebuie sa fie un numar!');
    }

    return salarii.map(salariu => salariu+(salariu*procent/100));
}

try{
    const salarii=increaseSalary([2000,1000,2500],10);
    console.log('Salarii marite: '+salarii);
    console.log();
    const salarii2=increaseSalary(10,10);
    console.log('Salarii marite: '+salarii2);
}catch(err){
    console.log(err);
}

console.log('//////////////////////////////////');

///exp6
