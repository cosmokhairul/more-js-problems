const phones = [
    { name: 'samsung', price: 45000, camera: 10, storage: 32 },
    { name: 'walton', price: 15000, camera: 8, storage: 8 },
    { name: 'xiaomi', price: 12000, camera: 8, storage: 16 },
    { name: 'oppo', price: 17000, camera: 8, storage: 32 },
    { name: 'nokia', price: 8000, camera: 8, storage: 4 },
    { name: 'htc', price: 25000, camera: 8, storage: 16 },
];

let cheapest = phones[0];
for (const phone of phones) {
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);