"use server";

import { redirect } from "next/navigation";

export async function authorize() {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
  const REDIRECT_URI = process.env.SPOTIFY_REDIRECT_URI!;
  const state = "zaakeenock";
  const scope =
    "user-read-private user-read-email ugc-image-upload user-read-playback-state user-modify-playback-state \
    user-read-currently-playing playlist-read-private playlist-read-collaborative playlist-modify-private user-read-playback-position user-top-read \
    user-read-recently-played user-library-modify user-library-read app-remote-control streaming user-follow-modify user-follow-read";

  const params = new URLSearchParams({
    response_type: "code",
    client_id: CLIENT_ID,
    scope: scope,
    redirect_uri: REDIRECT_URI,
    state: state,
  }).toString();

  const AUTHORIZE_URL = "https://accounts.spotify.com/authorize?" + params;

  redirect(AUTHORIZE_URL);
}

export async function getSpotifyToken() {
  const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID!;
  const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET!;

  const TOKEN_URL = "https://accounts.spotify.com/api/token";

  const BASIC_AUTH_CODE =
    "Basic " + Buffer.from(CLIENT_ID + ":" + CLIENT_SECRET).toString("base64");

  const res = await fetch(TOKEN_URL, {
    headers: {
      Authorization: BASIC_AUTH_CODE,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "code",
    }),
  });

  const json_data = await res.json();
  console.log("TOKEN:", json_data);
  // {
  //   access_token, token_type, expires_in;
  // }
}
