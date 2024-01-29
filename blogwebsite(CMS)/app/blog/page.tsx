"use client"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from "../config/contentful";
import Link from 'next/link';
import Image from 'next/image';
import Navbar from '../component/navbar/navbar'; // Import the Navbar component
import Footer from '../component/footer/footer';

const fetchBlog = async () => {
    let blogData = await client.getEntries({ content_type: 'blog' });
    const data = blogData.items.map((item: any) => {
        return {
            image: item.fields.image.fields.file.url,
            title: item.fields.title,
            description: documentToReactComponents(item.fields.description),
            id: item.fields.id,
            slug: item.fields.slug,
            detail:item.fields.detail
        };
    });
    return data;
};

export default async function Blogs() {
    try {
        const data = await fetchBlog();
        console.log(data);
        
        return (
            <div>
                
                <Navbar />
                
                <div className="container mx-auto px-4 py-8">
                    {/* <img src="/img/Blog.jpg" alt="Header Image" className="w-full mb-8 rounded-lg shadow-md h-45" /> */}
                    <h1 className="text-3xl font-bold mb-8">List of Blogs</h1>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {data.map((item:any) => (
                            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                                <Link href={`/blog/${item.title}`}>
                                    <img src={item.image} alt={item.title} className="w-full h-48 object-cover object-center" />
                                    <div className="p-4">
                                        <h2 className="text-lg font-semibold mb-2">{item.title}</h2>
                                        <div className="text-gray-700 mb-4">{item.description}</div>
                                        <a href="#" className="text-blue-500 hover:text-blue-700 transition duration-300 ease-in-out inline-block">Read more</a>
                                    </div>
                                </Link>
                                
                            </div>
                        ))}
                    </div>
                </div>
                <Footer/>
            </div>
        );
    } catch (error) {
        console.error("Error fetching blogs:", error);
        return <div>Error fetching blogs. Please try again later.</div>;
    }
}
