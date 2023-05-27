import { NextResponse } from "next/server";
import  {prisma}  from "../../../../prisma/Prisma"

export async function POST (request: Request){
    const {title,tag,description,imageUrl} = await request.json()
    console.log(title,tag,description,imageUrl);
    
    const data = await prisma.user.create({
        data:{
            title,
            tag,
            description,
            imageUrl,
        }
    })
    return NextResponse.json({data},{status:200})
}