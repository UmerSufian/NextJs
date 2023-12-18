
import Counter from "./component/counter/counter";

export default function Home() {
  return (
    <div className="bg-gray-600 y-200 h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl mb-8">Displaying Names</h1>
      <Counter />
    </div>
  );
}
