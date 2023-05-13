import { NextResponse } from "next/server";
import { Configuration, OpenAIApi } from 'openai'
import {prisma}  from "../../../../prisma/Prisma";

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

export async function GET(request: Request){
    const posts = await prisma.user.findMany()
    //console.log(posts);
    return NextResponse.json({posts},{status:200})
    
}

export async function POST(req:Request){
    const {description} = await req.json()
    //console.log(description)
    const openAiResponse = await openai.createImage({
        prompt: description,
        n: 1,
        size: '512x512'
    });
    const imageUrl = openAiResponse.data.data[0].url;
    //console.log(imageUrl);
    return new NextResponse(imageUrl)
}