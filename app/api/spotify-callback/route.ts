import { redirect } from "next/navigation";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code");
  const state = request.nextUrl.searchParams.get("state");

  if (!code || state !== "zaakeenock") {
    redirect("/auth/login?error=Login failed");
  }

  const CLIENT_ID: string = process.env.SPOTIFY_CLIENT_ID!;
  const CLIENT_SECRET: string = process.env.SPOTIFY_CLIENT_SECRET!;
  const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!;
  console.log("REDIRECT_URI:", REDIRECT_URI);

  const TOKEN_URL = "https://accounts.spotify.com/api/token";
  const BASIC_AUTH_CODE =
    "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64");

  const res = await fetch(TOKEN_URL, {
    method: "POST",
    headers: {
      Authorization: BASIC_AUTH_CODE,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      code: code,
      redirect_uri: REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  console.log("TOKENS:", await res.json());

  redirect("/dashboard");
}
