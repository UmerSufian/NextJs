import Link from "next/link";
import styles from './Footer.module.css';

// components/Footer.tsx
const Footer = () => {
    return (
        <footer className={`${styles.footer} py-8`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <h2 className="text-xl font-semibold text-white mb-4">Contact Us</h2>
                        <p className="text-gray-300">123 Main Street</p>
                        <p className="text-gray-300">New York, NY 10001</p>
                        <p className="text-gray-300">contact@example.com</p>
                    </div>
                    <div>
                        <h2 className="text-xl font-semibold text-white mb-4">Links</h2>
                        <ul className="text-gray-400">
                            <Link href="/">
                                <li className="mb-2">
                                    <span className="hover:text-gray-300 transition duration-300">Home</span>
                                </li>
                            </Link>
                            <Link href="/blog">
                                <li className="mb-2">
                                    <span className="hover:text-gray-300 transition duration-300">Blog</span>
                                </li>
                            </Link>
                            <Link href="#">
                                <li className="mb-2">
                                    <span className="hover:text-gray-300 transition duration-300">About</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
