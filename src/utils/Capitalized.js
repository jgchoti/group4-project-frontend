export const Capitalized = (text) => {
    let array = text.split('_')
    const capitalizedArray = array.map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedArray.join(' ');
}