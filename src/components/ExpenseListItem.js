import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({
  dispatch,
  id,
  description,
  note,
  amount,
  createdAt
}) => {
  return (
    <div>
      <ul>
        <li>
          <h4>
            <Link to={`/edit/${id}`}>{description} </Link>
          </h4>
          {amount} - {createdAt}{" "}
        </li>
      </ul>
    </div>
  );
};

export default ExpenseListItem;
