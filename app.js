const dateInput = document.getElementById('date');
const resultElement = document.getElementById('result');

dateInput.addEventListener('change', function () {
    const selectedDateValue = dateInput.value;

    // Parse the selected date into year, month, and day
    const selectedDateObject = new Date(selectedDateValue);

    const day = selectedDateObject.getDate();
    const month = selectedDateObject.getMonth() + 1; // Month is 0-based, so add 1
    const year = selectedDateObject.getFullYear();

    // Calculate the astrological sign (You can add more date ranges)
    let astrologicalSign = "";
    if ((month === 3 && day >= 21) || (month === 4 && day <= 19)) {
        astrologicalSign = "Aries";
    } else if ((month === 4 && day >= 20) || (month === 5 && day <= 20)) {
        astrologicalSign = "Taurus";
    }

    const zodiacSigns = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];
    const chineseZodiacSign = zodiacSigns[(year - 1900) % 12];

    const birthstone = ["Garnet", "Amethyst", "Aquamarine", "Diamond", "Emerald", "Pearl", "Ruby", "Peridot", "Sapphire", "Opal", "Topaz", "Turquoise"];;
    const userBirthStone = birthstone[(year - 1900) % 12];
    const birthFlower = ["Monkey", "Rooster", "Dog", "Pig", "Rat", "Ox", "Tiger", "Rabbit", "Dragon", "Snake", "Horse", "Sheep"];;

    resultElement.innerHTML = `
        <p>Astrological Sign: ${astrologicalSign}</p>
        <p>Chinese Zodiac Sign: ${chineseZodiacSign}</p>
        <p>Birthstone: ${userBirthStone}</p>
        <p>Birth Flower: ${birthFlower}</p>
    `;
});
