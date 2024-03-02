function isLeapYear(year) {
    // Leap year condition:
    // 1. If the year is evenly divisible by 4,
    // 2. AND the year is not evenly divisible by 100,
    // OR 3. The year is evenly divisible by 400.
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}
function main() {
    var year = 2024; // Change this to the year you want to check
    if (isLeapYear(year)) {
        console.log("".concat(year, " is a leap year."));
    }
    else {
        console.log("".concat(year, " is not a leap year."));
    }
}
main();
