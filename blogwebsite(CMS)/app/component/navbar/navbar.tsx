// components/Navbar.tsx
import Link from 'next/link';
import styles from './Navbar.module.css'; 

const Navbar = () => {
    return (
        <nav className={`${styles.navbar} ${styles.animate}`}>
            <div className="max-w-7xl mx-auto px-4 py-6">
                <div className="flex justify-between items-center">
                    <div>
                        <Link href="/">
                            <span className="text-gray-300 text-2xl font-medium">ThoughtfulTales</span>
                        </Link>
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="/">
                                <span className="text-white hover:text-gray-300 transition duration-300">Home</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog">
                                <span className="text-white hover:text-gray-300 transition duration-300">Blog</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#">
                                <span className="text-white hover:text-gray-300 transition duration-300">About</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
