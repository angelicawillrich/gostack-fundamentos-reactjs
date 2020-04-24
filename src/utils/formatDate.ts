const formatDate = (date: string): string => {
  const parsedDate = new Date(date);
  return `${parsedDate.getDate()}/${
    parsedDate.getMonth() + 1
  }/${parsedDate.getFullYear()}`;
};
export default formatDate;
