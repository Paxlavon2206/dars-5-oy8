// src/app/dynamic-routes/page.tsx
import { data } from "../store/store"
import Link from "next/link"
 const DynamicPage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-4">
      {data.map((item) => (
        <div key={item.id}>
          <Link href={`/dynamic-routes/${item.id}`}>
            <h1>{item.title}</h1>
            <img className="w-[300px] h-[250px]" src={item.url} alt={item.title} />
          </Link>
        </div>
      ))}
      </div>
    </div>
  )
}
export default DynamicPage
