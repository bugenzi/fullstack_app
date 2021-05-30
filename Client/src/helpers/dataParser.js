import momment from "moment";

const parseDate = (date) => {
  return momment(date).format("MMMM Do YYYY, h:mm:ss a");
};
  export { parseDate };
