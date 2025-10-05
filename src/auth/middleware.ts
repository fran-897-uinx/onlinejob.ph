import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabaseClient";

export async function middleware(req: Request) {
  const token = req.headers.get("authorization")?.replace("Bearer ", "");
  if (!token) return NextResponse.redirect(new URL("/login", req.url));

  const { data, error } = await supabase.auth.getUser(token);
  if (error || !data.user) return NextResponse.redirect(new URL("/login", req.url));

  // Optional: check role from DB
  // Redirect based on role if needed
}
