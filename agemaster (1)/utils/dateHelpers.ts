export interface AgeResult {
  years: number;
  months: number;
  days: number;
  totalDays: number;
  totalMonths: number;
  nextBirthdayDays: number;
  dayOfWeekBorn: string;
}

export const calculateAgeDetails = (dob: Date): AgeResult | null => {
  const today = new Date();
  
  // Validate future dates
  if (dob > today) {
    return null;
  }

  // Calculate Years, Months, Days
  let years = today.getFullYear() - dob.getFullYear();
  let months = today.getMonth() - dob.getMonth();
  let days = today.getDate() - dob.getDate();

  // Adjust if days are negative (borrow from previous month)
  if (days < 0) {
    months--;
    // Get days in the previous month relative to today
    const prevMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += prevMonth;
  }

  // Adjust if months are negative (borrow from previous year)
  if (months < 0) {
    years--;
    months += 12;
  }

  // Calculate Total Days
  const oneDay = 24 * 60 * 60 * 1000;
  const totalDays = Math.floor((today.getTime() - dob.getTime()) / oneDay);
  
  // Calculate Total Months
  const totalMonths = (years * 12) + months;

  // Day of Week Born
  const dayOfWeekBorn = dob.toLocaleDateString('en-US', { weekday: 'long' });

  // Calculate Next Birthday
  const currentYear = today.getFullYear();
  let nextBirthday = new Date(currentYear, dob.getMonth(), dob.getDate());
  
  // If birthday has passed this year, next one is next year
  if (today > nextBirthday) {
    nextBirthday = new Date(currentYear + 1, dob.getMonth(), dob.getDate());
  }
  
  const diffTime = nextBirthday.getTime() - today.getTime();
  const nextBirthdayDays = Math.ceil(diffTime / oneDay);

  return {
    years,
    months,
    days,
    totalDays,
    totalMonths,
    nextBirthdayDays,
    dayOfWeekBorn
  };
};

export const isValidDate = (d: any) => {
  return d instanceof Date && !isNaN(d.getTime());
};