import connectMongo from "@/libs/mongodb/connect";
import Products from "@/libs/mongodb/model/products_schema";
import { NextResponse } from "next/server";

export async function GET(request) {
  connectMongo().catch((error) =>
    NextResponse.json({ message: "Connection Failed...!" })
  );
  const id = request.url.slice(request.url.lastIndexOf('/') + 1)
  
  const res = await Products.findById(id);

  return NextResponse.json(res);
}

