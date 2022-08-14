import { Routes, Route } from "react-router-dom";
import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import NewQuote from "./pages/NewQuote";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Routes>
      <Route path="/" element={<AllQuotes />} />
      <Route path="/quotes" element={<AllQuotes />} />
      <Route path="/quotes/:quoteId" element={<QuoteDetail />} />
      <Route path="/new-quote" element={<NewQuote />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
