import QuoteList from "./../components/quotes/QuoteList";

const QUOTES = [
  { id: "q1", author: "Cali", text: "I'm Working on Quotes Project" },
  { id: "q2", author: "Moris", text: "This Project is So Much Fun" },
  { id: "q3", author: "Madison", text: "It's Implemented in React" },
];

const AllQuotes = () => {
  return <QuoteList quotes={QUOTES} />;
};

export default AllQuotes;
