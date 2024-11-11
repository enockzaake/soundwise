import PageContainer from "@/components/PageContainer";
import React from "react";

export default async function Dashboard() {
  const ACCESS_TOKEN =
    "BQCZxlexON3IdZ2HLPisA0sBpj3IY-hmI5XvScSPd8voTUnaxr5I7N6B9X5HLPGY0jdfN4xT6WGe1iqfSZKP-Yi1LDw0Wzr8YTeIUDg14XgLNb13PMcZ1wNQTiLnvu8oIOGZrsEVkRVXTeofDfhTLnLMVOh5UVwckoHY0NvURTi7PYpcfi7UnZqVLJluknAVCnk2RqKSYMsa6m9-6NBIU4ZjmN4ngppqU6hAIiyrbe8NhLW0o2PWmWaMChZiCmlL5t_EFMwNpbHvOFs5Mby_yXbPicKb_6pS1msS8LYz2-dy8Zi3g8b7enT3wdk6Lu4";

  const res = await fetch("https://api.spotify.com/v1/me", {
    headers: {
      Authorization: "Bearer " + ACCESS_TOKEN,
    },
  });

  const user_albums = await res.json();
  return (
    <PageContainer>
      Dashboard
      <pre>{JSON.stringify(user_albums, null, 2)}</pre>
    </PageContainer>
  );
}
