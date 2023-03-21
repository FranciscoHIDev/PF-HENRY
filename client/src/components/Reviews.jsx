import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { postReview } from "../../redux/actions/actions";

function CarsReviews({ id, comment }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [commentCar, setCommentCar] = useState();
  //console.log(users)
  const review = {
    email: user.email,
    idCar: id,
    comment: commentCar,
  };

  function handlerReviews(e) {
    e.preventDefault();
    dispatch(postReview(review));
    setCommentCar("");
  }

  function handlerComment(e) {
    e.preventDefault();
    setCommentCar(e.target.value);
  }

  return (
    <div>
      <div>
        {isAuthenticated ? (
          <button onClick={handlerReviews} type="submit">Questions</button>
          ) : (<button disabled type="submit">Questions</button>)}
        <textarea
          value={commentCar}
          placeholder="write your question..."
          id={id}
          cols="30"
          rows="10"
          onChange={handlerComment}
        ></textarea>
      </div>
      <div>
        {comment?.map((e) => (
          <div>
            <span>{e.comment}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsReviews;