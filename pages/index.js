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
import { useState, useContext } from "react";
import { StoreContext } from "@/store/store";
export default function Home() {
  const [newCos, setNewCos] = useState(false);
  const ctx = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  const [pwd, setPwd] = useState("");
  const handleLogin = () => {
    ctx.login(email, pwd);
  };

  return (
    <>
      <main className="bg-black h-screen w-screen  flex lg:flex-row flex-col justify-around align-middle  items-center">
        <div className="flex flex-col">
          <h1 className="text-white font-extrabold text-3xl text-left pb-10">
            Cricket Catalyst
          </h1>
          {newCos ? (
            <Card className="w-[350px] h-auto ">
              <CardHeader>
                <CardTitle>Hello 👋</CardTitle>
                <CardDescription>
                  signup with email and password
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Input
                  type="text"
                  value={name}
                  placeholder="name"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                ></Input>
              </CardContent>
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
              <CardFooter className="flex justify-between">
                <Button
                  onClick={() => {
                    ctx.register(email, pwd, name);
                  }}
                  className=" bg-black"
                >
                  register
                </Button>
                <Button
                  onClick={() => {
                    setNewCos(false);
                  }}
                  variant="outline"
                >
                  login
                </Button>
              </CardFooter>
            </Card>
          ) : (
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
              <CardFooter className="flex justify-between">
                <Button onClick={handleLogin} className=" bg-black">
                  login
                </Button>
                <Button
                  onClick={() => {
                    setNewCos(true);
                  }}
                  variant="outline"
                >
                  sign up
                </Button>
              </CardFooter>
            </Card>
          )}
        </div>
        <div>
          <Image
            src={require("../public/stock.png")}
            width={550}
            className="rounded-md lg:flex hidden "
            alt=""
          ></Image>
        </div>
      </main>
    </>
  );
}
