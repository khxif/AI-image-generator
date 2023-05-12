import Image from "next/image";

export default function AIImage({imageUrl,isLoading}: ImageProps) {
  return (
    <div className="flex justify-center py-10">
        {
            imageUrl===''?(
                <div>
                  <Image
                  src='/defImage.png'
                  width={500}
                  height={500}
                  alt='image'
                  quality={100}
                  />
                </div>
            ):(
              <div>
                <Image
                  src={imageUrl}
                  width={512}
                  height={512}
                  alt='image'
                  quality={100}
                  placeholder="blur"
                  blurDataURL="/Rolling.svg"
                />
                </div>
            )
        }
    </div>
  )
}
