import ActionLink from "./ActionLink";

const EmailSentMessage = () => {
  const handleResendEmail = () => {
    // Handle resend email logic
    console.log("Resending email...");
  };

  const handleChangeEmail = () => {
    // Handle change email logic
    console.log("Changing email...");
  };

  return (
    <section className="flex flex-col items-start  py-1 w-full rounded-3xl border border-white border-solid bg-zinc-100 max-md:px-5 max-md:max-w-full">
      <header className="flex gap-5 items-start text-3xl text-blue-950 pl-10 pt-2">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f4f34b9a4a46bb525a3ad1624d665ece34a33fa00a543bcd604c06571787574?placeholderIfAbsent=true"
          alt="Email sent confirmation icon"
          className="object-contain shrink-0 rounded-md aspect-[1.39] w-[30px]"
        />
        <h1 className="basis-auto text-xl pr-2">Email Sent</h1>
      </header>

      <p className=" mt-7 m-2 text-l leading-3text-blue-950 ">
        We have sent you an email at <strong>myemailid@gmail.com</strong>, check{" "}
        your inbox and follow up the instruction to reset your <br />
        account password
      </p>
<div className="">
      <div className="flex gap-2 mt-16 ml-5 max-md:mt-10 max-md:ml-2.5 my-1 mt-[-1px] pt-3">
        <p className="text-lg basis-auto text-blue-950">
          Did not receive the email?{" "}
        </p>
        <ActionLink text="Resend Email" onClick={handleResendEmail} />
      </div>

      <div className="flex gap-2 mt-16 ml-5 max-md:mt-10 max-md:ml-2.5 my-1 mt-[-1px] pt-8">
        <p className="text-lg basis-auto text-stone-950">
          Wrong Email Address?{" "}
        </p>
        <ActionLink text="Change Email Address" onClick={handleChangeEmail} />
      </div></div>
    </section>
  );
};

export default EmailSentMessage;
