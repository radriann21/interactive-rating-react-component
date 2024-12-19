import { useState } from "react";
import { ThanksScreen } from "./ThanksScreen";
import { RatingContent } from "./RatingContent";

export const RatingContainer = () => {
  const buttons = [1, 2, 3, 4, 5];

  const [rating, setRating] = useState(null);
  const [valid, isValid] = useState(false);

  const handleClick = (e) => {
    const value = e.target.textContent;
    setRating(value);
  };

  const handleSend = () => {
    if (rating) {
      isValid(true);
    } else {
      valid(false);
      return;
    }
  };

  return (
    <article className="w-full md:w-[440px] p-8 rounded-xl bg-neutral-dark-blue space-y-10">
      {valid ? (
        <ThanksScreen rating={rating} />
      ) : (
        <RatingContent
          buttons={buttons}
          handleClick={handleClick}
          handleSend={handleSend}
        />
      )}
    </article>
  );
};
