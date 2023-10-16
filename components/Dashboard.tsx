import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface User {
  name: string;
  info: {
    type: string;
    subType: string;
  };
}

interface DashboardProps {
  user: User;
}

const Dashboard: React.FC<DashboardProps> = (props) => {
  return (
    <div className="flex flex-row">
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>{props.user.name}</h1>
        </CardHeader>
        <CardContent>
          <h1>{props.user.info.type}</h1>
          <h2>{props.user.info.subType}</h2>
        </CardContent>
      </Card>
      <Card>
        <CardHeader className="flex flex-row justify-between">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1>{props.user.name}</h1>
        </CardHeader>
        <CardContent>
          <h1>{props.user.info.type}</h1>
          <h2>{props.user.info.subType}</h2>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
