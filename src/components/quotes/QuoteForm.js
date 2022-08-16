import { useRef, useState } from "react";

import Card from "../UI/Card";
import classes from "./QuoteForm.module.css";

const QuoteForm = (props) => {
  const authorInputRef = useRef();
  const textInputRef = useRef();

  const [formIsValid, setFormIsValid] = useState(false);
  const [formIsTouched, setFormIsTouched] = useState(false);

  function submitFormHandler(event) {
    event.preventDefault();

    setFormIsTouched(true);

    const enteredAuthor = authorInputRef.current.value;
    const enteredText = textInputRef.current.value;

    if (enteredAuthor.trim() === "" || enteredText.trim() === "") {
      setFormIsValid(false);
      return;
    }
    setFormIsValid(true);

    props.onAddQuote({ author: enteredAuthor, text: enteredText });
  }

  const overallFromIsInvalid = formIsTouched && !formIsValid;

  return (
    <Card>
      <form className={classes.form} onSubmit={submitFormHandler}>
        <div className={classes.control}>
          <label htmlFor="author">Author</label>
          <input type="text" id="author" ref={authorInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor="text">Text</label>
          <textarea id="text" rows="5" ref={textInputRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button className="btn">Add Quote</button>
          {overallFromIsInvalid ? (
            <p className={classes.error}>Either Author or Text is Empty!</p>
          ) : (
            ""
          )}
        </div>
      </form>
    </Card>
  );
};

export default QuoteForm;
