import LoginForm from "@/components/Login";
import Image from "next/image";
export const metadata = {
  title:"Login"
}
const Form = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  p-4 my-5 justify-center ">
      <Image
        className="md:w-1/4"
        src="/login.svg"
        alt="menu"
        width="500"
        height="500"
      />
      <LoginForm />
    </div>
  );
};

export default Form;
