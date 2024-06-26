import prisma from "@/utils/connect";
// import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
// const prisma = new PrismaClient();

export const GET = async () =>{
    try {
        const categories = await prisma.category.findMany();
        return new NextResponse(
            JSON.stringify(categories,{status: 200})
        )
    } catch (e) {
      console.error(e);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!"}, {status: 500 })
      );
    }
  }