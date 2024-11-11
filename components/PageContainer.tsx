import React from "react";

export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container min-h-screen  py-4 px-24">{children}</div>;
}
