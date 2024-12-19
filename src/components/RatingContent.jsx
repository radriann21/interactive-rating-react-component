import iconStar from "../assets/icon-star.svg";

export const RatingContent = ({ buttons, handleClick, handleSend }) => {
  return (
    <>
      <div className="w-12 h-12 p-4 bg-neutral-very-dark-blue rounded-full">
        <img className="w-20" src={iconStar} alt="icon star" />
      </div>

      <div className="text-left text-white font-global">
        <h1 className="font-medium text-2xl">How did we do?</h1>
        <p className="text-neutral-light-grey mt-2">
          Please let us know how we did with your suppport request. All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>

      <div className="w-full flex items-center justify-between">
        {buttons.map((button, index) => (
          <button
            onClick={handleClick}
            key={index}
            className="w-10 h-10 md:w-16 md:h-16 md:p-2 bg-neutral-very-dark-blue rounded-full text-base md:text-lg text-white font-global transition-colors hover:bg-primary-orange focus:bg-white focus:text-neutral-very-dark-blue"
          >
            {button}
          </button>
        ))}
      </div>

      <button
        onClick={handleSend}
        className="mt-0 md:mt-4 w-full rounded-3xl uppercase bg-primary-orange font-bold text-neutral-very-dark-blue tracking-widest p-3 transition-colors hover:bg-white"
      >
        Submit
      </button>
    </>
  );
};
