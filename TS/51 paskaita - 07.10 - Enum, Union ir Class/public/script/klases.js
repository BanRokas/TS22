"use strict";
class Klase1 {
    constructor(par1, par2, par3 = 'default') {
        this.par1 = par1;
        this.par2 = par2;
        this.par3 = par3;
    }
    getPar1() {
        return this.par1;
    }
    setPar1(arg) {
        this.par1 = arg;
    }
}
const dummyTest = new Klase1(56, 'labas', 'hello');
const dummyTest1 = new Klase1(56, 'labas');
console.log(dummyTest);
console.log(dummyTest1);
console.log(dummyTest.getPar1());
dummyTest.setPar1(111);
console.log(dummyTest.getPar1());
console.log(dummyTest.par2);
dummyTest.par2 = '564';
console.log(dummyTest.par2);
console.log(dummyTest.par3);
