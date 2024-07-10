class Klase1{
  private par1: number;
  public par2: string;
  readonly par3: string;
  constructor(par1:number, par2:string, par3: string = 'default'){
    this.par1 = par1;
    this.par2 = par2;
    this.par3 = par3;
  }
  // constructor(
  //   private par1: number,
  //   public par2: string,
  //   readonly par3: string
  // ){}
  getPar1(): number{
    return this.par1;
  }
  setPar1(arg:number): void{
    this.par1 = arg;
  }
  // setPar3(arg:string): void{
  //   this.par3 = arg;
  // }
}

const dummyTest = new Klase1(56, 'labas', 'hello');
const dummyTest1 = new Klase1(56, 'labas');
console.log(dummyTest);
console.log(dummyTest1);
  // private
// console.log(dummyTest.par1);
console.log(dummyTest.getPar1());
// console.log(dummyTest.par1 = 111);
dummyTest.setPar1(111);
console.log(dummyTest.getPar1());
  // public
console.log(dummyTest.par2);
dummyTest.par2 = '564';
console.log(dummyTest.par2);
  // readonly
console.log(dummyTest.par3);
// dummyTest.par3 = 'hello world';
// dummyTest.par3 += ' world';
// dummyTest.par3 = 54;