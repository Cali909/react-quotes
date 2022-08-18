import { Fragment } from "react";
import { useParams, Outlet } from "react-router-dom";
import FullscreenViewQuote from "../components/quotes/FullscreenViewQuote";

const QUOTES = [
  { id: "q1", author: "Cali", text: "I'm Working on Quotes Project" },
  { id: "q2", author: "Moris", text: "This Project is So Much Fun" },
  { id: "q3", author: "Madison", text: "It's Implemented in React" },
];

const QuoteDetail = () => {
  const params = useParams();
  const wantedQuote = QUOTES.find((quote) => quote.id === params.quoteId);

  if (!wantedQuote) {
    return (
      <p style={{ color: "red", fontSize: "1.5rem" }}>
        No Quote Found With This ID
      </p>
    );
  }
  return (
    <Fragment>
      <FullscreenViewQuote
        author={wantedQuote.author}
        text={wantedQuote.text}
      />
      <Outlet />
    </Fragment>
  );
};

export default QuoteDetail;
