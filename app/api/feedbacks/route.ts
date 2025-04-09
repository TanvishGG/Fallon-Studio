import { NextResponse } from "next/server";
import sql from "@/db";
export async function GET() {
  const data = await sql`SELECT * FROM fallon ORDER BY id DESC`;
  return NextResponse.json(data);
}