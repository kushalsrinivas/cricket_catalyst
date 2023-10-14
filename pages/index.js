import Image from "next/image";
import { Inter } from "next/font/google";
import { Button } from "@/components/ui/button";
const inter = Inter({ subsets: ["latin"] });
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Client } from "appwrite";
export default function Home() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const client = new Client();

  client
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject(process.env.NEXT_PUBLIC_PROJECT_ID);
  return (
    <>
      <main className="bg-black h-screen w-screen  flex lg:flex-row flex-col justify-around align-middle  items-center">
        <div>
          <Image
            src={require("../public/stock.png")}
            width={550}
            className="rounded-md lg:flex hidden "
            alt=""
          ></Image>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white font-extrabold text-3xl text-left pb-10">
            Cricket Catalyst
          </h1>
          <Card className="w-[350px] h-auto ">
            <CardHeader>
              <CardTitle>welcome back 👋</CardTitle>
              <CardDescription>login with email and password</CardDescription>
            </CardHeader>
            <CardContent>
              <Input
                type="email"
                value={email}
                placeholder="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></Input>
            </CardContent>
            <CardContent>
              <Input
                type="password"
                value={pwd}
                placeholder="password"
                onChange={(e) => {
                  setPwd(e.target.value);
                }}
              ></Input>
            </CardContent>
            <CardFooter className="">
              <Button className="w-full">login</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
