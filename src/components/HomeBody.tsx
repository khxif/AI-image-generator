"use client"

import { FormEvent, useState } from "react";
import InputField from "./InputField";
import AIImage from "./AIImage";
import Buttons from "./Buttons";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function HomeBody() {
  const router = useRouter()
  const[userInputs,setUserInputs] = useState<UserInputProps>({
    title:"",
    tag:'',
    description:'',
  })
  const[userInputsCache,setUserInputsCache] = useState<UserInputProps>({
    title:"",
    tag:'',
    description:'',
  })
  
  const[isLoading,setIsLoading] = useState(false)
  const[imageUrl,setImageUrl] = useState('')
  const handleSubmit = async(e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setIsLoading(true)
      try {
        const { data } = await axios.post(
          `https://ai-image-generator-khxif.vercel.app/api/openai`,
          {
            description: userInputs.description,
          },
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setImageUrl(data);
        setUserInputsCache({...userInputs})
        setUserInputs({
          title:"",
          tag:"",
          description:""
        })
       } catch (error) {
        let message = "Unkown error";
			  if (error instanceof Error) message = error.message;
			  alert(message);
       } finally {
        setIsLoading(false);
      }
  }
  const handleShare = async(e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault()
        try {
          const { data } = await axios.post(
            `https://ai-image-generator-khxif.vercel.app/api/sharepost`,
            {
              title:userInputsCache.title,
              tag:userInputsCache.tag,
              description:userInputsCache.description,
              imageUrl:imageUrl,
            },
            {
              headers: { "Content-Type": "application/json" },
            }
          );
         } catch (error) {
          let message = "Unkown error";
          if (error instanceof Error) message = error.message;
          alert(message);
         }
         router.push('/gallery')
  }
  return (
      <div>
        <div className="flex justify-center flex-col items-center w-[95vw] bg-black py-6 px-4 md:px-10 mx-auto mt-6">
          <InputField userInputs={userInputs} isLoading={isLoading}
          handleSubmit={handleSubmit} setUserInputs={setUserInputs}/>
        </div>
        <AIImage imageUrl={imageUrl} isLoading={isLoading} />
        {imageUrl !=='' && <Buttons handleShare={handleShare} imageUrl={imageUrl} /> }
      </div>
  )
}
