// const person = {
//     name: 'BRATVOG3L',
//     age: 28,
//     location: {
//         city: 'Berlin',
//         temp: 1
//     }
// };
// const { name: firstName = 'Everyone', age } = person;
// console.log(`${firstName} is ${age}.`);
//
//
// const { city, temp: temperature } = person.location;
// if (city && temperature) {
//     console.info(`It's ${temperature}°C in ${city}. Brrr.`);
// }
//
//
// const book = {
//     title: 'Harry Potter and the bratwurst of blind magic',
//     author: 'Jo Rowling',
//     publisher: {
//         name: 'Flourish & Blotts'
//     }
// };
//
// const { name: publisherName = 'self-published' } = book.publisher;
//
// console.log(publisherName);


const address = [
    'Blorgstreet 23', 'Berlin', '11011', 'Tschörmani'
];

const [, city, zip, state = 'Walpurgistanhausen'] = address;

console.log(`You are in ${zip} ${state}.`);



const item = ['Coffee (iced)', '1,99€', '2,99€', '7000,50€'];

const [itemName = 'Iced coffee', , medium] = item;

console.log(`A medium ${itemName} costs ${medium}`);
