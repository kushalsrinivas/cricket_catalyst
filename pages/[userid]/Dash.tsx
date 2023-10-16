import React, { useContext } from "react";
import { useRouter } from "next/router";
import Dashboard from "@/components/Dashboard";
import { StoreContext } from "@/store/store"; // Replace UserContextType with the actual type for user context

function Dash() {
  const router = useRouter();
  const query = router.query;
  const ctx = useContext(StoreContext);

  return (
    <div>
      <Dashboard user={ctx?.finduser(Number(query.userid))} />
    </div>
  );
}

export default Dash;
