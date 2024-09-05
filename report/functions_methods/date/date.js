export const showDateTime = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    let hours = now.getHours();
    let minutes = now.getMinutes();

    // Add leading zero to hours and minutes if needed
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }

    const dateMonthYear = `${date}.${month}.${year}`;
    const time = `${hours}:${minutes}`;
    const fullTime = `${dateMonthYear} ${time}`;

    return fullTime;
};
