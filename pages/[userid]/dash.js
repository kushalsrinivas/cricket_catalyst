import { useRouter } from "next/router";
import React from "react";
import Dashboard from "@/components/Dashboard";

function Dash(props) {
  const router = useRouter();
  const query = useRouter().query;
  console.log(query);

  return <div className="text-black text-3xl font-bold ">{query.userid}</div>;
}

export default Dash;
