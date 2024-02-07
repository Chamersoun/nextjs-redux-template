import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const cookieStore = cookies();

  // eslint-disable-next-line no-console
  console.log(cookieStore);

  return NextResponse.redirect(new URL("/", req.url), {
    status: 302,
  });
}
