import { signIn } from "@/auth"
 
export default function SignIn({label, provider}) {
  return (
    <form
      action={async () => {
        "use server"
        await signIn({provider})
      }}
    >
      <button type="submit">{label}</button>
    </form>
  )
} 