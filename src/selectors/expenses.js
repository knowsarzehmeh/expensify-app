import moment from "moment";
// Get visible Expenses
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  // expenses is an array, lets filter tru it
  return expenses
    .filter(expense => {
      const createdAtMoment = moment(expense.createdAt);
      const textMatch = expense.description
        .toLowerCase()
        .includes(text.toLowerCase());
      const startDateMatch = startDate
        ? startDate.isSameOrBefore(createdAtMoment, "day")
        : true;
      const endDateMatch = endDate
        ? endDate.isSameOrAfter(createdAtMoment, "day")
        : true;
      // const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate ;
      // const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;

      return textMatch && startDateMatch && endDateMatch;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return a.createdAt < b.createdAt ? 1 : -1;
      } else if (sortBy === "amount") {
        return a.amount < b.amount ? 1 : -1;
      } else {
        return 0;
      } // equal date or amount
    });
};

export default getVisibleExpenses;
