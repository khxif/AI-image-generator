import Image from "next/image";

export default function Card({post}: any) {
  //console.log(post);
  
  return (
    <div className="p-4 border border-black dark:border-gray-300 flex flex-col justify-center items-center space-y-1
    rounded-lg hover:shadow-md shadow-black dark:shadow-gray-300 transition-colors duration-200 ">
        <Image
        src={post.imageUrl}
        alt="AI generated image"
        width={250}
        height={250}
        className="object-contain rounded-t-lg"
        placeholder="blur"
        blurDataURL="/Rolling.svg"
        /> 
        <h1 className="font-bold text-lg">{post.title}</h1>
        <p className="text-blue-700 max-w-full whitespace-normal line-clamp-3 md:line-clamp-none">{post.tag}</p>
        <p>{post.description}</p>
    </div>
  )
}
