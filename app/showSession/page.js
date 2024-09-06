// test page to show current session 

import { auth } from "../api/auth/[...nextauth]/auth" 
 
export default async function Page() {
  const session = await auth()
  if (!session) return <div>Not authenticated</div>
 
  return (
    <div>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  )
}