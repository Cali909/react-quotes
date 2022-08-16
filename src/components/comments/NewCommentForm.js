import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./NewCommentForm.module.css";

const NewCommentForm = () => {
  const navigate = useNavigate();
  const commentTextRef = useRef();
  const [commentIsValid, setCommentIsValid] = useState(false);
  const [commentIsTouched, setCommentIsTouched] = useState(false);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setCommentIsTouched(true);

    const enteredComment = commentTextRef.current.value;
    if (enteredComment.trim() === "") {
      setCommentIsValid(false);
      return;
    }
    console.log(enteredComment);
    setCommentIsValid(true);
    navigate("/quotes", { replace: true });
  };

  const commentFieldIsInvalid = commentIsTouched && !commentIsValid;

  return (
    <form className={classes.form} onSubmit={handleSubmitForm}>
      <div className={classes.control} onSubmit={handleSubmitForm}>
        <label htmlFor="comment">Your Comment</label>
        <textarea id="comment" rows="5" ref={commentTextRef}></textarea>
        {commentFieldIsInvalid ? (
          <p className={classes.error}>You Can't Add an Empty Comment</p>
        ) : (
          ""
        )}
      </div>
      <div className={classes.actions}>
        <button className="btn">Add Comment</button>
      </div>
    </form>
  );
};

export default NewCommentForm;
