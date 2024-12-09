import Navbar from "../component/navbar";
import Footer from "@/component/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen flex flex-col items-center justify-center">
        <header className="text-4xl font-bold"></header>

        <main className="">hi my name items</main>
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
}
