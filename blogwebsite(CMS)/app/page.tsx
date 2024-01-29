import Head from 'next/head';
import Navbar from './component/navbar/navbar';
import Footer from './component/footer/footer';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="gradient-background min-h-screen bg-gray-700 flex justify-center items-center">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl text-white font-bold mb-6">Welcome to ThoughtfulTales</h1>
          <p className="text-lg md:text-xl text-gray-400 mb-8">Where stories come to life</p>
          <Link href="/blog">
            <span className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition duration-300 ease-in-out">Explore Blog</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
