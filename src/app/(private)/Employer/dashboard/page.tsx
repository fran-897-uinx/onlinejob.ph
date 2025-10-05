import { supabase } from "@/lib/supabaseClient";
import {Navbar}  from "../../../../components/sections/EmployersNav";
import Home from "@/components/sections/EmplyersHome";

export default async function DashboardPage() {
  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // if (!user) {
  //   return (
  //     <p className="text-red-600">
  //       {" "}
  //       Sorry You Can't Access This Page Until you are Login please Click the
  //       link to redirect you to he Login page
  //       <a className="text-blue-800" href="/login/">
  //         LINK
  //       </a>
  //     </p>
  //   );
  // }

  return <>
    <Navbar />
    <Home/>
  </>;
}
