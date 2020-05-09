import { differenceInMinutes, format } from 'date-fns';

const formatTimeDisplay = (time: Date, timeInitial: Date): string => {
  if (time.getHours() === 1) {
    return `${differenceInMinutes(time, timeInitial)}:${format(time, 'ss')}`;
  }
  return format(time, 'mm:ss');
};

export default formatTimeDisplay;
