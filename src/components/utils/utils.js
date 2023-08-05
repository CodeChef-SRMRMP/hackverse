export const calculateTimeLeft = () => {
  let year = new Date().getFullYear();
  let month = 10;
  let day = 17;
  let hour = 16;

  const difference = new Date(`${year}-${month}-${day} ${hour}:00:00`) - new Date();

  let timeLeft = {days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  }

  return timeLeft;
};
