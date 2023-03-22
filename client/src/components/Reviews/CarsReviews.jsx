import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { postReview } from "../../redux/actions/actions";

function CarsReviews({ id, comment }) {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const [commentCar, setCommentCar] = useState("");
  const [reviewAdd, setReviewAdd] = useState(comment);
  //console.log(users)

  function handlerReviews(e) {
    e.preventDefault();
    const review = {
      email: user.email,
      idCar: id,
      comment: commentCar,
    };
    dispatch(postReview(review));
    setCommentCar("");
    setReviewAdd([...reviewAdd, review]);
  }

  function handlerComment(e) {
    e.preventDefault();
    setCommentCar(e.target.value);
  }

  return (
    <div>
      <div className="flex">
        <div className="flex-initial w-64">
          <textarea
            maxlength="250"
            autocomplete="off"
            className="text-white"
            name=""
            value={commentCar}
            placeholder="write your question..."
            id={id}
            cols="80"
            rows="3"
            onChange={handlerComment}
          ></textarea>
        </div>
        <div className="flex-none w-14 h-14" >
          {isAuthenticated && commentCar.length > 5 ? (
            <button onClick={handlerReviews} type="submit">
              Questions
            </button>
          ) : (
            <button disabled type="submit">
              Questions
            </button>
          )}
        </div>
      </div>
      <div>
        {reviewAdd?.map((e) => (
          <div key={e.id}>
            <span>{e.comment}</span>
            { e.request !== "" ? <span>{e.request}</span> : null }
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarsReviews;