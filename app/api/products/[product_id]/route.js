import connectMongo from "@/libs/mongodb/connect";
import Products from "@/libs/mongodb/model/products_schema";
import { NextResponse } from "next/server";

export async function GET({params}) {
  connectMongo().catch((error) =>
    NextResponse.json({ message: "Connection Failed...!" })
  );
  const {product_id}=params
  const res = await Products.findById(product_id);
  

  return NextResponse.json(res);
}
