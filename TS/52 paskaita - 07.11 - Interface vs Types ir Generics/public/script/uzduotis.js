"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
const people = [
    {
        name: 'Jonas',
        surname: 'Jonaitis',
        sex: 'male',
        age: 26,
        income: 1200,
        married: false,
        hasCar: false,
    }, {
        name: 'Severija',
        surname: 'Piktutytė',
        sex: 'female',
        age: 26,
        income: 1300,
        married: false,
        hasCar: true,
    }, {
        name: 'Valdas',
        surname: 'Vilktorinas',
        sex: 'male',
        age: 16,
        income: 0,
        married: false,
        hasCar: false,
    }, {
        name: 'Virginijus',
        surname: 'Uostauskas',
        sex: 'male',
        age: 32,
        income: 2400,
        married: true,
    }, {
        name: 'Samanta',
        surname: 'Uostauskienė',
        sex: 'female',
        age: 28,
        hasCar: true,
    }, {
        name: 'Janina',
        surname: 'Stalautinskienė',
        sex: 'female',
        age: 72
    }
];
console.groupCollapsed('1. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {name: string, surname: string} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą');
{
    const personToIdentity = (person) => {
        return {
            name: person.name,
            surname: person.surname
        };
    };
    const identities = people.map(personToIdentity);
    console.table(people);
    console.table(identities);
}
console.groupEnd();
console.groupCollapsed('2. Sukurkite funkciją, kuri paverčia žmogaus objektą -> {married: boolean, hasCar: boolean} objektu. Naudojant šią funkciją performuokite visą žmonių masyvą.');
{
    const result = people.map(({ hasCar, married }) => {
        const returnResult = {};
        if (typeof hasCar === 'boolean') {
            returnResult.hasCar = hasCar;
        }
        if (typeof married === 'boolean') {
            returnResult.married = married;
        }
        return returnResult;
    }).filter((person) => Object.keys(person).length);
    console.log(result);
}
console.groupEnd();
console.groupCollapsed('3. Sukurtite masyvą su vardais, pavardėmis ir lytimi, pagal pradinį žmonių masyvą');
{
    const task3Ats = people.map((person) => {
        return {
            vardas: person.name,
            pavarde: person.surname,
            lytis: person.sex === 'female' ? 'moteris' : 'vyras'
        };
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
{
}
console.groupEnd();
console.groupCollapsed('9. Performuokite žmonių masyvą, jog kiekvieno žmogaus savybė "income", taptų "salary"');
{
    const ats9 = people.map((_a) => {
        var { income } = _a, rest = __rest(_a, ["income"]);
        const result = rest;
        if (typeof income === 'number') {
            result.salary = income;
        }
        return result;
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
