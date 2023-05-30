import connectMongo from "@/libs/mongodb/connect";
import Products from "@/libs/mongodb/model/products_schema";
import { NextResponse } from "next/server";

export async function GET() {
  connectMongo().catch((error) =>
    NextResponse.json({ message: "Connection Failed...!" })
  );

  const res = await Products.find({});
  

  return NextResponse.json(res);
}
