// document.addEventListener('keydown', (e) => {
//   console.log(e);
// });


let zodis = 'Labas Rytas';

console.log(zodis.at(6)); // r
console.log(zodis.at(-3)); // t
console.log(zodis[2]); // b
console.log(zodis.charAt(1)); // a

console.log(zodis.concat('hihi')); // 'labas rytashihi'

console.log(zodis.startsWith('l')); // true
console.log(zodis.endsWith('a')); // false

console.log(zodis.includes('as r')); // true

console.log(zodis.indexOf('b')); // 2
console.log(zodis.indexOf('k')); // -1
console.log(zodis.lastIndexOf('k')); // -1
console.log(zodis.lastIndexOf('a')); // 9

console.log(zodis.padStart(15, '-'));
console.log(zodis.padEnd(15, '123'));

console.log((zodis+' ').repeat(5));

console.log(zodis.replace('bi', 'oho'));
console.log(zodis.replaceAll('as', 'oho'));
// labas rytas
// 012345678910
console.log(zodis.slice(3, 7)); // as r
console.log(zodis.substring(3, 7)); // as r

console.log(zodis.split('')); // ['l', 'a', 'b', 'a', 's', ' ', 'r', 'y', 't', 'a', 's']
console.log(zodis.split(' ')); // ['labas', 'rytas']
console.log(zodis.split('a')); // ['l', 'b', 's ryt', 's']

// pakeičiau originalųjį string'ą, kad turėtų didžiųjų raidžių
console.log(zodis.toUpperCase()); // LABAS RYTAS
console.log(zodis.toLowerCase()); // labas rytas

let ilgasString = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, quis quia quidem at esse nisi voluptatibus suscipit sequi, sunt error sint harum, quos voluptates quo eum vitae. Ut in, accusamus dolore, ea magni sit dignissimos quas minus debitis laudantium assumenda! Quis in magni natus. Fugit maiores assumenda impedit accusantium beatae ad minus nisi reprehenderit distinctio, labore sed minima tempora pariatur sit quidem repellat quaerat rerum tenetur veritatis debitis architecto repudiandae obcaecati laudantium deleniti. Officiis illum totam odio quasi minima. Dicta debitis quaerat mollitia sapiente doloremque nisi iste. Labore, laborum odit exercitationem quam excepturi sequi aliquam. Assumenda unde ipsa, alias repudiandae a delectus vero voluptatum corrupti quidem iure veniam illum quam. Ut id in quod? Rem quo, fugit placeat omnis error pariatur quisquam laudantium officiis nam? Illum debitis voluptatibus quos qui ullam. Eligendi, nulla obcaecati quas consectetur rem deserunt maxime a dolor aspernatur laudantium ipsa porro fuga dolore commodi esse laboriosam eos et eaque placeat odit. Dicta, aspernatur recusandae molestias, perspiciatis hic harum consectetur omnis quo nam adipisci et optio at eligendi distinctio facere sequi impedit quaerat quam aliquam velit officia, tempore molestiae? Deleniti maiores consectetur esse quis dignissimos necessitatibus quisquam tempore fugiat excepturi eligendi a, illo sequi aliquam ipsa dolore et saepe veritatis itaque assumenda officiis praesentium! Incidunt deserunt explicabo sequi? Qui, rem! Ad esse earum eos officia quibusdam dolorum quod, nisi voluptate iure numquam soluta, eius quaerat nesciunt veritatis aspernatur sint ullam quae. Vero deserunt sed, quis voluptatem aliquid itaque fugit laborum consequatur totam necessitatibus ipsam asperiores. Officia officiis neque consequatur quae harum nam dignissimos molestiae, libero eum placeat asperiores molestias, repellat vero deleniti optio doloribus praesentium provident vel porro similique aut. Necessitatibus, omnis! Debitis rerum ratione soluta amet numquam possimus harum et nulla totam animi? Corporis aliquid maiores totam. Ipsum beatae labore magni illum. Quas eius quod earum.`;

let ilgasStringMasyve = ilgasString.split('. ');
console.log(ilgasStringMasyve);

for(let i = 0; i < ilgasStringMasyve.length; i+=2){
  ilgasStringMasyve[i] = ilgasStringMasyve[i].toUpperCase();
}
console.log(ilgasStringMasyve);

ilgasString = ilgasStringMasyve.join('. ');
console.log(ilgasString);