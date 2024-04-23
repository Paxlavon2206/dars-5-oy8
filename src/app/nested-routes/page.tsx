import Link from "next/link"
 const NestedRoutes = () => {
  return (
    <div className=" p-4 flex justify-around ">
        <Link className="hover:underline text-red-500 hover:text-red-700" href="/nested-routes/nested1">Nested 1</Link>
        <Link className="hover:underline text-red-500 hover:text-red-700" href="/nested-routes/nested2">Nested 1</Link>
    </div>
  )
}

export default NestedRoutes