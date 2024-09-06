import { handlers } from "./auth" // Referring to the auth.js config file

export const { GET, POST } = handlers
// export const runtime = "edge" // optional 
// will fail without doing specific extra installation of middleware adapter software : https://github.com/ndom91/authjs-prisma-edge-example/tree/main
// read more here https://authjs.dev/guides/edge-compatibility#middleware 