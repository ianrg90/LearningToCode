import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import classes from "./Comments.module.css";
import NewCommentForm from "./NewCommentForm";
import useHttp from "../../hooks/use-http";
import { getAllComments } from "../../lib/api";
import LoadingSpinner from "../UI/LoadingSpinner";
import CommentsList from "./CommentsList"

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const { sendRequest, status, data: loadedComments } = useHttp(getAllComments);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };

  const { quoteId } = params;
  

  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId, sendRequest]);

  const addedCommentHandler = useCallback(() => {
    sendRequest(quoteId)
  }, [sendRequest, quoteId])

  let comment;
  if (status === "pending") {
    comment = (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }

  if(status === "completed" && (loadedComments && loadedComments.length > 0)){
    comment = <CommentsList comments = {loadedComments}/>
  }

  if(status === "completed" && (!loadedComments || loadedComments.length === 0)){
    comment = <p className = "centered">No comments were added yet</p>
  }

  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className="btn" onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && (
        <NewCommentForm
          quoteId={quoteId}
          onAddedComment={addedCommentHandler}
        />
      )}
      {comment}
    </section>
  );
};

export default Comments;
