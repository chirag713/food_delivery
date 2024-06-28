
import { restaurantSchema } from "@/app/lib/RestaurantsModel";
import { ConnectDb } from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    ConnectDb();
    let success = false;
    let result = await restaurantSchema.find();
    result = result.map((item)=>item.city.charAt(0).toUpperCase()+ item.city.slice(1));
    result=[...new Set(result.map((item)=>item))];
    if (result) success = true;
    return NextResponse.json({ result , success });
}