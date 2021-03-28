import  { suma }  from './components/sum.js';
import { multiply as daugyba } from './components/multiply.js';

import {matematika} from './components/matematika.js'

const rez1 = suma(8, 5);
const rez2 = daugyba(8, 5);

const rez3lt = matematika.sudeti(8, 5);
const rez4lt = matematika.atimti(8, 5);
const rez5lt = matematika.sudauginti(8, 5);
const rez6lt = matematika.dalinti(8, 5);

const rez3en = matematika.sum(8, 5);
const rez4en = matematika.subbtrackt(8, 5);
const rez5en = matematika.multiply(8, 5);
const rez6en = matematika.devide(8, 5);


console.log(rez1);
console.log(rez2);

console.log(rez3lt);
console.log(rez4lt);
console.log(rez5lt);
console.log(rez6lt);

console.log(rez3en);
console.log(rez4en);
console.log(rez5en);
console.log(rez6en);


// IMPORT
//hero
//import {clock} from '';
//main
//footer


// FUNKCIJU PANAUDOJIMAS
//hero
//clock();
//main
//footer

