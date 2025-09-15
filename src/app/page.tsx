import Quiz from "../components/Quiz";
import Navbar from "../components/navbar";


export default function Home() {
  return (
    <div> 
            <Navbar />

    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <h1 className="text-6xl font-bold mb-6 text-white">📚 Quiz Game Project</h1>

      <Quiz />
    </main>
    </div>
  );
}
