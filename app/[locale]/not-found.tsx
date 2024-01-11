import { Link } from "@/navigation";
export default function NotFoundPage() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col justify-center items-center">
        <span className="text-red-600 text-5xl tracking-wider">404</span>
        <div className="flex">
          <span>Nice try but ....</span>
          <Link href={"/"} className="underline">GoBack</Link>
        </div>
      </div>
    </div>
  );
}
