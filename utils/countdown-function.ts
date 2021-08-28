// Add a 0 if Time Unit is < 10
const setDoubleDigits = (number: number): string =>
  (number < 10 ? "0" : "") + number.toString();

export interface TimeObject {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

// Count Time left until Midnight
const countdown = (): TimeObject => {
  const todayMS = new Date().getTime();

  // Next Midnight
  const nextMidnight = new Date().setHours(24, 0, 0, 0);

  // Gap between Now and next Midnight - in milliseconds
  const msToMidnight = nextMidnight - todayMS;

  // Time Units
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Days, Hours, Minutes and Seconds left until Midnight
  const textDays = Math.floor(msToMidnight / day);
  const textHours = Math.floor(msToMidnight / hour);
  const textMinutes = Math.floor((msToMidnight % hour) / minute);
  const textSeconds = Math.floor((msToMidnight % minute) / second);

  // Return Object with Time Units
  return {
    days: textDays.toString(),
    hours: setDoubleDigits(textHours),
    minutes: setDoubleDigits(textMinutes),
    seconds: setDoubleDigits(textSeconds),
  };
};

export default countdown;
