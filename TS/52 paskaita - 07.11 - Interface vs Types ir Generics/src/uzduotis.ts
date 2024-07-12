/* eslint-disable no-empty */
/* eslint-disable no-console */
/* eslint-disable no-inner-declarations */
/* eslint-disable no-lone-blocks */

/*
  Užduočių atlikimo eiga:
  * Pirmiausiai perskaitykite visą užduotį:

  * Klauskite dėstytojo užduoties paaiškinimo, jeigu užduotis nėra aiški.

  * Galvoje susidarytkite sprendimo planą:
    * Kaip atliksiu užduotį? Galbūt verta pasibraižyti sprendimo idėją ant lapelio?
    * Kokių tipų reikės? Parametrų tipai, rezultatų tipai, funkcijų tipai.
    * Kaip aiškiai ir tvarkingai pateiksiu rezultatus?

  * Bandykite atlikti užduotį:
    * Pavyko:
      * Atspausdinkite rezultatus ir/arba veikimo pavyzdžius
      * Pabandykite patobulinti savo kodą:
        * pabandykite aiškiau aprašyti kintamųjų/tipų pavadinimus
        * sužiūrėkite ar tikrai naudojate vieningą sintaksę
      * Palyginkite savo sprendimą su užuočių atsakymų failu.
      * Suformuokite klausimus dėstytojui, pagal sprendimų skirtumus
    * Nepavyko:
      * pažiūrėkite atsakymų failą ir PO VIENĄ EILUTĘ nusirašykite sprendimą
      * rašant kiekvieną eilutę smulkmeniškai suformuokite klausimus.

    * Spręskite kitus uždavinius, o kai dėstytojas aiškins užduoties sprendimą, klausykitės
      * Po dėstytojo sprendimo ir aiškinimo užduokite klausimus, kurių vis dar nesuprantate.

  Patarimai:
    * Paspauskite komandą: ALT + Z - tai padės lengviau skaityti užduočių tekstą
    * Nežiūrėkite į atsakymų failus anksčiau laiko.
      jūsų tikslas lavinti inžinerinį mąstymą, o ne atlikti užduotis.
    * Nesedėkite prie kompiuterio ilgiau nei 1 val iš eilės, darykite pertraukas po 10 min
    * Klauskite visko ko nesuprantate. Neklausdami eikvojat savo laiką, kurį šie kursai taupo.
      Gerbiat savo laiką - gerbiat save.
    * Kodo tvarka ir aiškumas tiek pat svarbūs kiek funkcionalumas. Išmoksite tai dabar,
      arba kuomet negausite darbo dėl netvarkingo kodo.
    * Atlikę užduotį, užduokite sau klausimą: "Ar tai geriausia ką galėjau?"
    * Įsigilinimas jūsų žinias iš supratimo perkelia į suvokimą. Tik suvokiant dalykus, galite
      žinias pritaikyti kūrybiškai. Iš to seka, kad užduoties atlikimo kokybė >>> užduočių kiekis
    * Užduočių rezultatų pateikimas tike pat svarbus, kiek sprendimas.
*/
type Person = {
  readonly name: string,
  readonly surname: string,
  readonly sex: 'male' | 'female',
  age: number,
  income?: number,
  married?: boolean,
  hasCar?: boolean,
};

const people: Person[] = [
  {
    name: 'Jonas',
    surname: 'Jonaitis',
    sex: 'male',
    age: 26,
    income: 1200,
    married: false,
    hasCar: false,
  },{
    name: 'Severija',
    surname: 'Piktutytė',
    sex: 'female',
    age: 26,
    income: 1300,
    married: false,
    hasCar: true,
  },{
    name: 'Valdas',
    surname: 'Vilktorinas',
    sex: 'male',
    age: 16,
    income: 0,
    married: false,
    hasCar: false,
  },{
    name: 'Virginijus',
    surname: 'Uostauskas',
    sex: 'male',
    age: 32,
    income: 2400,
    married: true,
  },{
    name: 'Samanta',
    surname: 'Uostauskienė',
    sex: 'female',
    age: 28,
    hasCar: true,
  },{
    name: 'Janina',
    surname: 'Stalautinskienė',
    sex: 'female',
    age: 72
  }
];

/*
  Šių užduočių tikslas ne tik išspręsti užduotis, bet išmokti kurti tipus pagal jau esančius tipus
  Pirmos 2 užduotys pateikiamos kaip pavyzdžiai kaip turėtų būt sprendžiami uždaviniai:
    * Aprašome tipus
    * Aprašome funkcijas
    * (jeigu reikia aprašome naujus kintamuosius reikalingus sprendimui)
    * Atliekame užduoties sprendimą
    * Spausdiname sprendimo rezultatus

  Visas funkcijas ir kintamuosius reikia aprašyti tipais (net jei to ir nereikalauja TS compiler'is)

*/
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
  // Tipai:
  // type Identity = {
  //   name: Person['name'],
  //   surname: Person['surname'],
  // };
  type Identity = {
    name: string,
    surname: string
  };

  // Funkcijos:
  const personToIdentity = (person:Person):Identity => {
    return {
      name: person.name,
      surname: person.surname
    }
  };

  // Sprendimas:
  const identities: Identity[] = people.map(personToIdentity);

  // Spausdinimas:
  console.table(people);
  console.table(identities);
}
console.groupEnd();

console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
  // type TaskProps = {
  //   married: NonNullable<Person["married"]>,
  //   hasCar: NonNullable<Person["hasCar"]>,
  // }

  // type TaskProps = Pick<Required<Person>, 'hasCar' | 'married'>;

  // type TaskProps = {
  //   married: boolean | 'nenudoryta',
  //   hasCar: boolean | 'nenurodyta'
  // }

  type TaskProps = {
    married?: boolean,
    hasCar?: boolean
  }

  // const selectTaskProps = ({ married, hasCar }: Person): TaskProps => ({
  //   married: Boolean(married),
  //   hasCar: Boolean(hasCar),
  // });
  // const result: TaskProps[] = people.map(selectTaskProps);

  // const result: TaskProps[] = people.map((person: Person): TaskProps => {
  //   return {
  //     married: Boolean(person.married),
  //     hasCar: Boolean(person.hasCar),
  //   }
  // });

  // const result: TaskProps[] = people.map((person: Person): TaskProps => {
  //   console.log(person.hasCar, person.married);
  //   if(typeof person.married === 'boolean' && typeof person.hasCar === 'boolean'){
  //     return {
  //       married: person.married,
  //       hasCar: person.hasCar
  //     }
  //   } else if(typeof person.married === 'boolean'){
  //     return {
  //       married: person.married
  //     }
  //   } else if(typeof person.hasCar === 'boolean'){
  //     return {
  //       hasCar: person.hasCar
  //     }
  //   } else {
  //     return {}
  //   }
  // });

  const result: TaskProps[] = people.map(({ hasCar, married }: Person): TaskProps => {
    const returnResult:TaskProps = {};
    if(typeof hasCar === 'boolean'){
      returnResult.hasCar = hasCar;
    }
    if(typeof married === 'boolean'){
      returnResult.married = married;
    }
    return returnResult;
  }).filter((person: TaskProps) => Object.keys(person).length);

  console.log(result);
}
console.groupEnd();

console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
  type Task3 = {
    vardas: Person["name"]
    pavarde: Person["surname"],
    lytis: 'vyras' | 'moteris'  //Person["sex"] // 'male' | 'female'
  };

  const task3Ats: Task3[] = people.map((person:Person):Task3 =>{
    return {
      vardas: person.name,
      pavarde: person.surname,
      lytis: person.sex === 'female' ? 'moteris' : 'vyras'
    }
  });
  console.table(task3Ats);
}
console.groupEnd();

console.groupCollapsed('4. Suformuokite visų vyrų masyvą');
{

}
console.groupEnd();

console.groupCollapsed('5. Suformuokite visų moterų masyvą');
{

}
console.groupEnd();

console.groupCollapsed('6. Suformuokite objektų masyvą su žmonių vardais ir pavardėm, kurie turi mašinas');
{

}
console.groupEnd();

console.groupCollapsed('7. Suformuokite objektų masyvą iš žmonių kurie yra susituokę');
{

}
console.groupEnd();

console.groupCollapsed('8. Sukurkite objektą, kuriame būtų apskaičiuotas vairuojančių žmonių kiekis pagal lytį');
/*
  {
    male: 7,
    female: 8
  }
*/
{

}
console.groupEnd();

console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
  type Person9 = {
    readonly name: string,
    readonly surname: string,
    readonly sex: 'male' | 'female',
    age: number,
    salary?: number,
    married?: boolean,
    hasCar?: boolean,
  };
  // type PersonBritish = Omit<Person, 'income'> & {
  //   salary?: Person['income']
  // }

  const ats9: Person9[] = people.map((/*person*/{ income, ...rest }:Person):Person9 => {
    const result:Person9 = rest;
    if (typeof income === 'number') {
      result.salary = income;
    }
    return result;
    // return {
    //   ...rest,
    //   salary: income
    // }
    // return {
    //   name: person.name,
    //   surname: person.surname,
    //   sex: person.sex,
    //   age: person.age,
    //   salary: person.income || 0,
    //   married: person.married || false,
    //   hasCar: person.hasCar || false
    // }
  });
  console.table(ats9);
}
console.groupEnd();

console.groupCollapsed('10. Suformuokite žmonių masyvą, kuriame nebūtų lyties, vardo ir pavardės');
{

}
console.groupEnd();

console.groupCollapsed('11. Suformuokite žmonių masyvą, kuriame "name" ir "surname" savybės, būtų pakeistos "fullname" savybe');
{

}
console.groupEnd();