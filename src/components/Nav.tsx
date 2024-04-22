"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Nav() {
  const [loadedUserMenu, setLoadedUserMenu] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadedUserMenu(true);
    }, 1000);
  }, []);

  return (
    <div>
      <Link href="/">/ (index)</Link>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "1rem",
        }}
      >
        {loadedUserMenu ? (
          <>
            <p>
              <strong>App Router</strong>
            </p>
            <nav>
              <ul>
                <li>
                  <Link href="/a">/a</Link>
                </li>
                <li>
                  <Link href="/b">/b</Link>
                </li>
              </ul>
            </nav>
            <p>
              <strong>Pages Router</strong>
            </p>
            <nav>
              <ul>
                <li>
                  <Link href="/x">/x</Link>
                </li>
                <li>
                  <Link href="/y">/y</Link>
                </li>
              </ul>
            </nav>
          </>
        ) : (
          <p>
            <em>"Loading user menu..."</em>
          </p>
        )}
      </div>
    </div>
  );
}
