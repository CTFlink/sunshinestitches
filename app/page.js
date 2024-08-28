import Image from "next/image";
import styled from "styled-components";
import prisma from '../lib/prisma';
import SignIn from "@/components/signinButton";
import Test from "@/components/test";

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
      <div>
        hej
      </div>
      <SignIn label="Sign in with Github" provider="Github"></SignIn>
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
