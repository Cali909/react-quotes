import QuoteForm from "../components/quotes/QuoteForm";
import { useNavigate } from "react-router-dom";

const NewQuote = () => {
  const navigate = useNavigate();
  const handleAddQuote = (quoteData) => {
    //send data to database here
    console.log(quoteData);
    navigate("/quotes", { replace: true });
  };
  return <QuoteForm onAddQuote={handleAddQuote} />;
};

export default NewQuote;
