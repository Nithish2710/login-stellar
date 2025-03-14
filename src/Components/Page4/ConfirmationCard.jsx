import EmailSentMessage from "./EmailSentMessage";

const ConfirmationCard = () => {
  return (
    <article className="flex relative flex-col justify-center self-center px-12 py-12 mt-5 mb-0 max-w-full rounded-3xl border border-solid bg-zinc-100 bg-opacity-60 border-white border-opacity-30 w-[500px] h-[400px] max-md:px-5 max-md:mb-2.5">
      <EmailSentMessage />
    </article>
  );
};

export default ConfirmationCard;
