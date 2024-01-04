import { connectDB } from "@/utils/db"

export const metadata = {
  title:"Home:Work Manager"
};

export default function Home() {
  connectDB();
  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}
