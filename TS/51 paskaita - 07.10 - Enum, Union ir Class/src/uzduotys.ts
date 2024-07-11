// Alikite užduotis, ir atspausdinkite konsolėje savo sprendimo pavyzdžius užduoties bloke
console.group('Tuples - užduotys');
{
  // ↓↓↓↓ Tipus apraškite čia ↓↓↓↓
  type KuroTipai = 'benzinas' | 'dyzelinas' | 'dujos' | 'elektra';
  type Zmogus = [string, number]; // vardas ir amzius
  type Seimininkas = [string, number]; // vardas ir amzius
  type Suo = [string, string]; // vardas ir veisle
  type Bendras = [Seimininkas, Suo]; // junginys
  type Taskas2D = [number, number]; // x ir y koordinatės
  type Trikampis2D = [Taskas2D, Taskas2D, Taskas2D];
  // ↑↑↑↑ Tipus apraškite čia ↑↑↑↑
  const masina: KuroTipai = 'benzinas';
  console.log(masina);

  console.group('1. Sukurkite žmogaus vardo ir amžiaus rinkinį');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const zmogus: Zmogus = ['Petras', 24];
    console.log(zmogus);
  }

  console.groupEnd();
  console.group('2. Sukurkite šuns šeimininko ir šuns rinkinį(pradžioje teks sukurti Šuns ir Šeiminiko tipus)');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const suoSeimininkas: Bendras = [["Petras", 54], ["Čiči", "Pudelis"]];
    console.log(suoSeimininkas);
  }
  console.groupEnd();
  console.group('3. Sukurkite trikampio taškų 2D erdvėje rinkinį(pradžioje teks sukurti 2D Taško tipą)');
  {
    // sprendimo pavyzdžius spausdinkite čia 
    const trikampis: Trikampis2D = [[0,1],[5,4],[8,3]];
    console.log(trikampis);
  }
  console.groupEnd();
}