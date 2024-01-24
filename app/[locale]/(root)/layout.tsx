import { getUserInfo } from "@/lib/actions";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Sidebar from "../components/sidebar";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const data = await getUserInfo();


  return (
    <div className="flex h-screen md:h-full flex-row">
      <div className="hidden w-[300px] md:block bgColor min-h-screen">
        <Sidebar name={data?.name} lastname={data?.lastname}/>
      </div>
      <main className="w-full md:flex-1 flex flex-col mx-2 mt-2 gap-2">
        <Navbar />
        <div className="w-full bgColor rounded-md p-2 flex min-h-[20vh]">
          {children}
        </div>
        <Footer />
      </main>
    </div>
  );
}
