import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";

const QuoteDetail = () => {
  const params = useParams();
  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
