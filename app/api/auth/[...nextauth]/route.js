import { handlers } from "./auth" // Referring to the auth.js in root folder

export const { GET, POST } = handlers
export const runtime = "edge" // optional