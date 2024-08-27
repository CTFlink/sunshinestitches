import prisma from '../lib/prisma';
 
async function getPosts() {
    const res = await prisma.post.findMany(); 
    return res.json()
}

async function getAuthors() {
    const res = await prisma.post.findMany() 
    return res.json()
}

export default async function Page() {
  const authorData = getAuthor(author)
  const postData = getPosts()
 
  // Initiate both requests in parallel
  const [author, posts] = await Promise.all([authorData, postData])
 
  return (
    <>
      <h1>{artist.name}</h1>
      <Albums list={albums} />
    </>
  )
}