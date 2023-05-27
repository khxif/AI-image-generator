import Card from "@/components/Card ";
import  {prisma}  from "../../../prisma/Prisma";

export default async function page() {
    async function getPosts() {
        const res = await fetch('https://ai-image-generator-khxif.vercel.app/api/openai',{ cache:'no-store'})
        const posts  = await res.json()
        //console.log(posts.posts);
        return posts.posts
        //const post = await prisma.user.findMany()
        //console.log(post);
        //return post;
        
    } 
    const posts = await getPosts()
  return (
        <main className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 px-3 md:px-14 gap-4 py-6 md:py-14 justify-center">
            {
                posts.map((post)=>{
                    return <Card key={post.id} post={post} />
                })
            }
        </main>
  )
}
