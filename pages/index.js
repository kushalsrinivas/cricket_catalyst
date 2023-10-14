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
export default function Home() {
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");

  return (
    <>
      <main className="bg-black h-screen w-screen">
        <h1 className="text-4xl font-extrabold text-white w-[48] text-center flex  align-middle justify-center">
          crciket
        </h1>
        <Card className="w-[350px] ">
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>email and password</CardDescription>
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
        </Card>
      </main>
    </>
  );
}
