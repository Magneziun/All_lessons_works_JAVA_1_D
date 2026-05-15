const getRandomChar = (min, max) => String.fromCharCode(Math.floor(Math.random() * (max - min + 1)) + min);

const generate = () => {
    const length = parseInt(document.getElementById('length').value);
    const useDigits = document.getElementById('digits').checked;
    const useUpper = document.getElementById('upper').checked;
    const useLower = document.getElementById('lower').checked;

    let chars = [];
    if (useDigits) chars.push(() => getRandomChar(48, 57));
    if (useUpper) chars.push(() => getRandomChar(65, 90));
    if (useLower) chars.push(() => getRandomChar(97, 122));

    if (chars.length === 0) chars = [() => ''];

    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        result += chars[randomIndex]();
    }
    document.getElementById('result').value = result;
};

document.getElementById('generate').addEventListener('click', generate);