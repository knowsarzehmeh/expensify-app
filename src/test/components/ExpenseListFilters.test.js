import React from "react";
import { shallow } from "enzyme";
import moment from "moment";
import { ExpenseListFilters } from "../../components/ExpenseListFilters.js";
import { filters, altFilters } from "../redux/fixtures/filters.js";

let wrapper, setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate;

beforeEach(() => {
  setTextFilter = jest.fn();
  sortByDate = jest.fn();
  sortByAmount = jest.fn();
  setStartDate = jest.fn();
  setEndDate = jest.fn();
  wrapper = shallow(
    <ExpenseListFilters
      filters={filters}
      setTextFilter={setTextFilter}
      sortByDate={sortByDate}
      sortByAmount={sortByAmount}
      setStartDate={setStartDate}
      setEndDate={setEndDate}
    />
  );
});

test("should render ExpenseListFilter correctly", () => {
  expect(wrapper).toMatchSnapshot();
});

test("should render ExpenseListFilters with alt data correctly", () => {
  wrapper.setProps({
    filters: altFilters
  });
  expect(wrapper).toMatchSnapshot();
});

test("should handle text change", () => {
  const value = "rent";
  wrapper.find("input").simulate("change", {
    target: { value }
  });
  expect(setTextFilter).toHaveBeenLastCalledWith(value);
});

test("should sort by date", () => {
  const value = "date";
  wrapper.setProps({
    filters: altFilters
  });
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByDate).toHaveBeenCalled();
});

test("should sort by amount", () => {
  const value = "date";
  wrapper.find("select").simulate("change", {
    target: { value }
  });
  expect(sortByAmount).toHaveBeenCalled();
});

test("should handle date changes", () => {
  const startDate = moment(0).add(4, "years");
  const endDate = moment(0).add(8, "years");
  wrapper.find("DateRangePicker").prop("onDateChange")({ startDate, endDate });
  expect(setStartDate).toHaveBeenLastCalledWith(startDate);
  expect(setEndDate).toHaveBeenLastCalledWith(setEndDate);
});

test("should handle date focused changes", () => {
  const calendarFocused = "startDate";
  wrapper.find("DateRangePicker").prop("onFocusChange")(calendarFocused);
  expect(wrapper.state("calenderFocused")).toBe(calendarFocused);
});
