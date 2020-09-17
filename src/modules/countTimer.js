const countTimer = (deadline) => {
    let timerHours = document.getElementById('timer-hours'),
        timerMinutes = document.getElementById('timer-minutes'),
        timerSeconds = document.getElementById('timer-seconds');

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000,
            seconds = Math.floor(timeRemaining % 60),
            minutes = Math.floor((timeRemaining / 60) % 60),
            hours = Math.floor((timeRemaining / 60) / 60 % 24),
            days = Math.floor((timeRemaining / 60) / 60 / 24);

            if (seconds < 0) {
                seconds = 0;
            }
            if (minutes < 0) {
                minutes = 0;
            }
            if (hours < 0) {
                hours = 0;
            }

            return {timeRemaining, days, hours, minutes, seconds};
    }

    const addZero = (number) => {
        if (number < 10) {
            number = '0' + number;
        }
        return number;
    };

    const updateClock = () => {
        let timer = getTimeRemaining();
        timerHours.textContent = addZero(timer.days) + ' : ' + addZero(timer.hours);
        timerMinutes.textContent = addZero(timer.minutes);
        timerSeconds.textContent = addZero(timer.seconds);

        if (timer.timeRemaining < 0) {
            clearInterval(IntUpdateClock);
        }
    }

    const IntUpdateClock = setInterval(updateClock, 1000); 
    updateClock();
}

export default countTimer;
