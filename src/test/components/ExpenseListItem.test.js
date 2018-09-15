import React from "react";
import ExpenseListItem from "../../components/ExpenseListItem";
import { shallow } from "enzyme";
import expenses from "../redux/fixtures/expenses";

test("should render expense list item component with a single expense", () => {
  const wrapper = shallow(
    <ExpenseListItem key={expenses[0].id} {...expenses[0]} />
  );
  expect(wrapper).toMatchSnapshot();
});
