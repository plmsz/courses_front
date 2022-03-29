const username = "Ana";

console.log({ username });

//{ username: 'Ana' }

const ana = {
	name: "Ana",
	member: true,
	id: 1,
	position: "Dev Junior",
	memberType: "Preimium",
	time: "2008",
};
const jasmin = { name: "Jasmin", member: true, id: 2 };

console.log({ ana , jasmin });

//{
//   ana: { name: 'Ana', member: true, id: 1 },
//   jasmin: { name: 'Jasmin', member: true, id: 2 }
// }
console.table({ ana }, { jasmin });

/* 
    ┌─────────┬──────────┬────────┬────┐
    │(index)  │   name   │ member │ id │
    ├─────────┼──────────┼────────┼────┤
    │   ana   │  'Ana'   │  true  │ 1  │
    │ jasmin  │ 'Jasmin' │  true  │ 2  │
    └─────────┴──────────┴────────┴────┘
 */

console.group("User Detail");
console.log(`name :${ana.name}`);
console.log(`position :${ana.position}`);
console.group("Account");
console.log(`memberType :${ana.memberType}`);
console.log(`time :${ana.time}`);
console.groupEnd();
console.groupEnd();

/* User Detail
  name :Ana
  position :Dev Junior
    Account
        memberType :Preimium
        time :2008
 */

// console.warn("This function will be deprecated in the next release"); //yellow background
// console.error("Your code is broken, go back and fix it!"); //red background

console.log(
	"%c React ",
	"color: white; background-color: #61dbfb",
	"Have fun using React!"
);

//

let i = 0;
console.time("while loop");

while (i < 10) {
	i++;
}
console.timeEnd("while loop");
console.time("for loop");
for (let i = 0; i < 10; i++) {}
console.timeEnd("for loop");

// while loop: 0.162ms
// for loop: 0.006ms

// outputs a stack trace to the console and displays how the code ended up at a certain point.
// This can really come in handy when trying to debug complex code that might be making calls in lots of different places.
const sunil = { name: "Sunil", member: true, id: 134323 };
function getName(person) {
	console.trace();
	return person.name;
}
function sayHi(person) {
	let _name = getName(person);
	return `Hi ${_name}`;
}
