import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <section
        className="bg-cover bg-center"
        style={{
          backgroundImage: "url('/img/nature.jpg')",
          height: "550px",
        }}
      ></section>
      <section className="mt-6">
        <p className="text-white font-bold text-3xl text-center">Services</p>
        <div className="flex justify-center mt-4">
          {/* Service Box 1 */}
          <div className="bg-cyan-800 text-white p-4 m-2 w-64 rounded-md transition-colors hover:bg-blue-600">
            <p className="font-bold">Custom Design</p>
            <p>Unlock unparalleled customization for your wallet cards with our services, blending unique designs and advanced features for a distinctive and memorable user experience.</p>
          </div>

          {/* Service Box 2 */}
          <div className="bg-cyan-800 text-white p-4 m-2 w-64 rounded-md transition-colors hover:bg-blue-600">
            <p className="font-bold">Personalization</p>
            <p>Tailor your cards to perfection with our expertise in crafting personalized and innovative solutions.</p>
          </div>

          {/* Service Box 3 */}
          <div className="bg-cyan-800 text-white p-4 m-2 w-64 rounded-md transition-colors hover:bg-blue-600">
            <p className="font-bold">Security Features</p>
            <p>Enhance card security with advanced features, ensuring the utmost protection for your wallet cards.</p>
          </div>
        </div>
      </section>
      <section className="mt-6">
        <div className="flex justify-center mt-4">
          {/* Service Box 4 */}
          <div className="bg-cyan-800 text-white p-4 m-2 w-64 rounded-md transition-colors hover:bg-blue-600">
            <p className="font-bold">Quality Materials</p>
            <p>Utilize premium materials to ensure durability and longevity, creating wallet cards that stand the test of time.</p>
          </div>

          {/* Service Box 5 */}
          <div className="bg-cyan-800 text-white p-4 m-2 w-64 rounded-md transition-colors hover:bg-blue-600">
            <p className="font-bold">Fast Turnaround</p>
            <p>Experience quick and efficient service delivery, with a focus on meeting your deadlines and exceeding expectations.</p>
          </div>

          {/* Service Box 6 */}
          <div className="bg-cyan-800 text-white p-4 m-2 w-64 rounded-md transition-colors hover:bg-blue-600">
            <p className="font-bold">Global Shipping</p>
            <p>Reach a worldwide audience with our reliable global shipping services, ensuring your wallet cards reach their destination swiftly and securely.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
