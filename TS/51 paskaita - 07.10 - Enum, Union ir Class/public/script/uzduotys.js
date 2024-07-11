"use strict";
console.group('Tuples - užduotys');
{
    const masina = 'benzinas';
    console.log(masina);
    console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
    {
        const zmogus = ['Petras', 24];
        console.log(zmogus);
    }
    console.groupEnd();
    console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
    {
        const suoSeimininkas = [["Petras", 54], ["Čiči", "Pudelis"]];
        console.log(suoSeimininkas);
    }
    console.groupEnd();
    console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
    {
        const trikampis = [[0, 1], [5, 4], [8, 3]];
        console.log(trikampis);
    }
    console.groupEnd();
}
