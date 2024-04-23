import Link from "next/link";


export default function Home() {
  return (
   <div className="container p-5 bg-[#f5f5f5] w-full h-screen">
    <ul className="flex justify-evenly">
      <li><Link className="hover:underline text-blue-500 hover:text-blue-700" href="/home">Home</Link></li>
      <li><Link className="hover:underline text-blue-500 hover:text-blue-700" href="/about">About</Link></li>
      <li><Link className="hover:underline text-green-500 hover:text-green-700" href="/dynamic-routes">Dynamic-route</Link></li>
      <li><Link className="hover:underline text-red-500 hover:text-red-700" href="/nested-routes">Nested-routes</Link></li>
    </ul>
   </div>
  );
}
