const DaysE1 = document.getElementById('Days');
const HoursE1 = document.getElementById('Hours');
const MinsE1 = document.getElementById('Mins');
const SecondsE1 = document.getElementById('Seconds');

const newYears = "1 jan 2023";

function countdown() {
    const newYearsDate = new Date(newYears);
    const currentDate = new Date();

    const totalSeconds = (newYearsDate - currentDate) / 1000;

    const Days = Math.floor(totalSeconds / 3600 / 24);
    const Hours = Math.floor(totalSeconds / 3600) % 24;
    const Mins = Math.floor(totalSeconds / 60) % 60;
    const Seconds = Math.floor(totalSeconds) % 60;

    DaysE1.innerHTML = (Days);
    HoursE1.innerHTML = (Hours);
    MinsE1.innerHTML = (Mins);
    SecondsE1.innerHTML = (Seconds);
}

countdown();

setInterval(countdown, 1000);