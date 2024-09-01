import Image from "next/image";
import styled from "styled-components";
import { Prisma } from "@prisma/client";
import SignIn from "@/components/signinButton";
import UserAvatar from "@/components/userAvatar";
import { SignOut } from "@/components/signOutButton";
import Link from "next/link";

export default async function Home() {
  const feeds = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  });

  console.log("dette er feed ", {...feeds})


  return (
    <main>
      
      <h1>Public</h1>
      <div>
        hej
      </div>
      
      <Link href="/protected">protected</Link>
      <SignIn label="Sign in with Github" provider="github"></SignIn>
      <SignIn label="Sign in with Google" provider="google"></SignIn>
      <SignIn label="Sign in with instagram" provider="instagram"></SignIn>
      {/* <UserAvKatar/> */}
      <SignOut/>
      <div>{feeds && feeds.map(feed =>
                        <ul key={feed.id}>
                            <li>Title: {feed.title} </li>
                            <li>content: {feed.content}</li>
                            <li>Published: {feed.published.toString()}</li>
                            <li>Author.name: {feed.author.name}</li>
                        </ul>
                    )}</div>
    </main>
  );
}
