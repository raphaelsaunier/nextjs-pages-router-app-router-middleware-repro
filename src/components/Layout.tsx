import Nav from "@/components/Nav";
import { ReactNode } from "react";
import Issues from "@/components/Issues";

export default function Layout(props: { children?: ReactNode }) {
  return (
    <div className="container mx-auto">
      <Nav />
      <div style={{ fontSize: "2rem" }}>Page: {props.children}</div>
      <Issues />
    </div>
  );
}
