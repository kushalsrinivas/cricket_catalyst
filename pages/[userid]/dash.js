import { useRouter } from "next/router";
import React from "react";

function dash(props) {
  const query = useRouter().query;
  console.log(query);

  return <div className="text-black text-3xl font-bold ">{query.userid}</div>;
}

export default dash;
