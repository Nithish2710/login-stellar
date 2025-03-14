import BackgroundImage from "./BackgroundImage";
import ForgotPasswordForm from "./ForgotPasswordForm";

function ForgotPassword() {
  return (
    <main className="flex justify-center items-center bg-blue-950 min-h-screen">
      <div className="relative max-md:h-auto max-sm:h-auto">
        <BackgroundImage />
        <ForgotPasswordForm />
      </div>
    </main>
  );
}

export default ForgotPassword;