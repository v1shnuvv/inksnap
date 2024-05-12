import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) =>{
    try {
        // const {searchParams} = new URL(req.url);
        // const page = searchParams.get("page");
        // const postPerPage = 2;

        const page = 1;
        const postPerPage = 2;

        const query = {
          take: postPerPage,
          skip: postPerPage * (page - 1)
        }

        const [posts, count] = await prisma.$transaction([
          prisma.post.findMany(query),
          prisma.post.count()
        ]);
        return new NextResponse(
            JSON.stringify({posts, count},{status: 200})
        )
    } catch (e) {
      console.error(e);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!"}, {status: 500 })
      );
    }
  }