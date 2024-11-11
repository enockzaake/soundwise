"use client";
import { authorize } from "@/app/actions/auth";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Login() {
  async function spotifyLogin() {
    await authorize();
  }
  return (
    <div className="flex h-screen w-full items-center justify-center px-4 bg-black">
      <Card className="mx-auto max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Connect your spotify account to continue
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <Button onClick={spotifyLogin} variant="outline" className="w-full">
              <Image
                src={"/images/spotify.svg"}
                width={20}
                height={20}
                alt="Spotify logo"
              />
              Login with Spotify
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
