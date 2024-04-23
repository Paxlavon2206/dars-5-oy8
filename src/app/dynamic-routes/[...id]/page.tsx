"use client";
import { data } from "@/app/store/store";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { StoreType } from "@/app/store/store";

const ItemPage = () => {
  const router = useRouter();
  const changeRoute = () => {
    router.push("/dynamic-router/1");
  }
  const [item, setItem] = useState<StoreType>();

  useEffect(() => {
    if (typeof window !== 'undefined') {
    }
  }, []);

  
  if (!item) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-4">
      <h1>{item.title}</h1>
      <img className="w-[300px] h-[250px]" src={item.url} alt={item.title} />
    </div>
  );
};

export default ItemPage;
