import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const data = await req.json();
  const filePath = path.join(process.cwd(), "feedbacks.json");

  const existing = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : [];

  const newEntry = {
    ...data,
    timestamp: new Date().toISOString(),
  };

  existing.push(newEntry);
  fs.writeFileSync(filePath, JSON.stringify(existing, null, 2));

  return NextResponse.json({ success: true });
}
