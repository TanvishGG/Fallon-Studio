import { NextResponse } from "next/server";
import sql from "@/db";

export async function POST(req: Request) {
  const data = await req.json();
  const { name, email, message } = data;

  // Use parameterized query to prevent SQL injection
  const query = await sql`
    INSERT INTO fallon (name, email, feedback) 
    VALUES (${name}, ${email}, ${message})
  `;
  return NextResponse.json({ success: true });
}
