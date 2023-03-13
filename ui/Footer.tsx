"use client"

import Image from "next/image"
import GitHubButton from "react-github-btn"
import userLogo from "../public/assets/user.jpg"

export function Footer() {
  return (
    <footer className="mx-auto mt-auto max-w-4xl py-3 text-gray-one/70">
      <div className="flex items-center justify-center">
        <p className="group flex items-center text-xs">
          {"</> with <3 by sooraj"}
        </p>
      </div>
    </footer>
  )
}
