"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function AuthCallback() {
  const router = useRouter();

  useEffect(() => {
    const handleAuth = async () => {
      const { data: { user } } = await supabase.auth.getUser();

      if (!user) {
        router.push("/login");
        return;
      }

      // Fetch profile role
      const { data: profile } = await supabase
        .from("profile")
        .select("role")
        .eq("id", user.id)
        .single();

      if (profile?.role === "employer") {
        router.push("/dashboard/employer");
      } else if (profile?.role === "engineer") {
        router.push("/dashboard/engineer");
      } else {
        router.push("/onboarding"); // fallback page if no role assigned yet
      }
    };

    handleAuth();
  }, [router]);

  return <p className="text-center ">Finalizing login, please wait...</p>;
}
