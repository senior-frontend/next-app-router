import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  console.log("GET request sent");

  const { searchParams, href, host, port, protocol } = new URL(req.url);
  const id = searchParams.get("id") || "";

  const data = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  const post = await data.json();

  // return new Response(
  //   JSON.stringify({
  //     response: "response",
  //   }),
  //   { status: 200 }
  // );
  return NextResponse.json({ post });
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  console.log("POST request sent", body);

  return NextResponse.json("ok");
}
