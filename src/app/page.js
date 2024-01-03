import { connectDB } from "@/utils/db"

export default function Home() {
  connectDB();
  return (
    <>
    <h1>Hello World</h1>
    </>
  )
}
