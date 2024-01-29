
"use client"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { client } from "../../config/contentful";
import Navbar from '@/app/component/navbar/navbar';
import Footer from '@/app/component/footer/footer';

const fetchBlogData = async () => {
    let blogData = await client.getEntries({ content_type: "blog" });
    const data = blogData.items.map((item: any) => {
        return {
            image: item.fields.image.fields.file.url,
            title: item.fields.title,
            description: documentToReactComponents(item.fields.description), // Assuming 'description' is a rich text field
            id: item.fields.id,
            slug: item.fields.slug,
            detail:item.fields.detail
        };
    });
    return data;
  };
  
  export default async function Blog({ params }: any) {
    const data = await fetchBlogData();
    const post: any = data.find((p: any) => 
    p.slug === params.slug );
  
  
    // Check if post is defined before accessing its properties
    if (!post) {
      return (
        <div>
          {/* <Navbar /> */}
          <p>Blog not found</p>
        </div>
      );
    }
  
    return (
      <div>
        <Navbar/>
        <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <div className="text-gray-500 mb-2">Blog ID: {post.id}</div>
      <div className="w-full max-w-screen-lg bg-white rounded-lg overflow-hidden shadow-lg">
          <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 object-cover object-center"
          />
          <div className="p-6">
              <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
              <p className="text-gray-600 mb-8">{post.detail}</p>
          </div>
      </div>
  </section>
    <Footer/>
      </div>
    );
  }
  