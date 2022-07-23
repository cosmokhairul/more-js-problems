/* const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'fabul', 'gabul', 'habul', 'babul', 'dabul', 'abul', 'gabul']

function removeDuplicate(names) {
    const unique = [];

    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames); */

const numbers = [23, 25, 27, 31, 65, 45, 45, 27, 25, 60];

function removeDuplicate(numbers) {
    const unique = [];

    for (const element of numbers) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNumbers = removeDuplicate(numbers);
console.log(uniqueNumbers);