import Quiz from "../components/Quiz";
import Navbar from "../components/navbar";


export default function Home() {
  return (
    <div> 
            <Navbar />

    <main className="min-h-screen flex flex-col items-center  bg-white/98">
      <h1 className="text-5xl  mb-2 mt-20 text-black">📚 Quiz Game </h1>

      <Quiz />
    </main>
    </div>
  );
}
