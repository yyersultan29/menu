import { useRouter } from "next/navigation"

export default function Page() {

  const router = useRouter();

  const handleClick = () => router.push("/some");

  return (
    <div>
      <h6>page/react </h6>
      <h1>Test page</h1>

      <button onClick={handleClick}>Click to go some page</button>
    </div>
  )
}