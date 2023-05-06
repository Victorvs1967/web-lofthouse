export const age = birth => {
  const [day, month, year] = birth.split('-');
  const now = new Date();
  const bithDate = new Date(year, month - 1, day);

  let age = now.getFullYear() - bithDate.getFullYear();
  const mDiff = now.getMonth() - bithDate.getMonth();
  const dDiff = now.getDay() - bithDate.getDay();

  return (mDiff < 0 || (mDiff > 0 && dDiff < 0)) ? age - 1 : age;
};