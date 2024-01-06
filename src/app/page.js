import Image from "next/image";

export const metadata = {
  title:"Home"
};

export default function Home() {
  return (
    <>
    <div className="md:flex md:justify-center md:items-center md:gap-10 md:mt-20 mt-5">
      <div className="md:flex md:justify-center md:items-center flex flex-col">
        <div class="text-center font-extrabold ">
          <p class="inline-block md:block md:text-4xl text-3xl">
          A simple to do <br/> list to manage it all
          </p>
        </div>
        <p className="text-center mt-9 text-lg md:text-xl">"Unleash your potential. Create your to-do list."</p>
      </div>

      <Image className="md:w-1/4 w-5/6 mx-auto md:mx-0" src="/hero.png" alt="menu" width="500" height="500"/>
    </div>
    </>
  )
}
