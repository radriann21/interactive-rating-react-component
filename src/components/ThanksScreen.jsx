import illustration from "../assets/illustration-thank-you.svg";

export const ThanksScreen = ({ rating }) => {
  return (
    <>
      <div className="space-y-4 text-center">
        <img
          className="mx-auto"
          src={illustration}
          alt="illustration thank you"
        />
        <div className="w-fit px-4 py-2 text-primary-orange font-global text-sm bg-neutral-800 rounded-3xl mx-auto">
          You selected {rating} out of 5
        </div>
      </div>

      <div className="text-center font-global text-white">
        <h2 className="text-2xl mb-2">Thank you!</h2>
        <p className=" text-neutral-light-grey">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&apos;t hesitate to get in touch!
        </p>
      </div>
    </>
  );
};
