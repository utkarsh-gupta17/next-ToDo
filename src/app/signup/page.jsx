import SignupForm from "@/components/Signup";
import Image from "next/image";
export const metadata = {
  title:"SignUp"
}
const Signup = () => {
  return (
    <div className="w-full flex flex-col md:flex-row  p-4 my-5 justify-center">
      <Image
        className="md:w-1/4"
        src="/signup.svg"
        alt="menu"
        width="500"
        height="500"
      />
      <SignupForm />
    </div>
  )
}

export default Signup
