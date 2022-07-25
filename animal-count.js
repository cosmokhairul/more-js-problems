function animalCount(miles) {
    const animalsInFirst10Miles = 10;
    const animalsInSecond10Miles = 50;
    const animalsInThird10Miles = 100;
    if (miles <= 10) {
        const count = miles * animalsInFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const first10 = 10 * animalsInFirst10Miles;
        const restMiles = miles - 10;
        const second10 = restMiles * animalsInSecond10Miles;
        const totalAnimals = first10 + second10;
        return totalAnimals;
    }
    else {
        const first10 = 10 * animalsInFirst10Miles;
        const second10 = 10 * animalsInSecond10Miles;
        const restMiles = miles - 20;
        const third10 = restMiles * animalsInThird10Miles;
        const totalAnimals = first10 + second10 + third10;
        return totalAnimals;
    }
}

const animals = animalCount(25);
console.log(animals);