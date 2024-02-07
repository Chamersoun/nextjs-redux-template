import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function middleware(req: NextRequest) {
  return NextResponse.next();
}
