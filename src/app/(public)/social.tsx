import Link from "next/link";
import { supabase } from "@/lib/supabaseClient";
import { FaGoogle, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialAuth() {
        async function loginWithGoogle() {
            await supabase.auth.signInWithOAuth({ provider: "google" });
        }

        async function loginWithGitHub() {
            await supabase.auth.signInWithOAuth({ provider: "github" });
        }

        async function loginWithLinkedIn() {
            await supabase.auth.signInWithOAuth({ provider: "linkedin" });
        }
  return (
    <div className="flex flex-col space-y-3 w-full max-w-sm mx-auto">
          <Link href="http://localhost:3000/auth/google" className="flex items-center justify-center w-full py-2 px-4 rounded-lg bg-white border border-gray-300 text-gray-700 shadow hover:bg-gray-50 transition"
              onClick={loginWithGoogle}
           >
        <FaGoogle className="mr-2 text-red-500 text-lg" />
        Continue with Google
      </Link>

          <Link href="http://localhost:3000/auth/linkedin" className="flex items-center justify-center w-full py-2 px-4 rounded-lg bg-[#0A66C2] text-white shadow hover:bg-[#004182] transition"
              onClick={loginWithLinkedIn}
           >
        <FaLinkedin className="mr-2 text-lg" />
        Continue with LinkedIn
      </Link>

          <Link href="http://localhost:3000/auth/github" className="flex items-center justify-center w-full py-2 px-4 rounded-lg bg-gray-900 text-white shadow hover:bg-gray-800 transition"
              onClick={loginWithGitHub}
           >
        <FaGithub className="mr-2 text-lg" />
        Continue with GitHub
      </Link>
    </div>
  );
}
