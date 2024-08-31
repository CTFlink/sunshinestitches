// dette API er wrapped af en higher order auth function der checker for om der er en session

import { auth } from "@/auth"
import { NextResponse } from "next/server"
 
export const GET = auth(function GET(req) {
  if (req.auth) return NextResponse.json(req.auth)
  return NextResponse.json({ message: "Not authenticated" }, { status: 401 })
})