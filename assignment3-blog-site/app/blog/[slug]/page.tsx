import Image from "next/image";
const blogData = [
  {
    id: 1,
    slug: "amazon",
    description: "The Rise of Amazon: A Global Technology Powerhouse",
    details: `Introduction 
    In the realm of multinational technology companies, few have left an indelible mark on the world as Amazon. From its humble beginnings as an online bookstore to its current status as a global e-commerce and technology giant, Amazon's journey has been nothing short of remarkable. Inception and Early Days
    From Books to Everything
    Founded by Jeff Bezos in 1994, Amazon started as an online bookstore. Bezos envisioned a digital marketplace that could offer an extensive selection of books to customers worldwide. The success of this initial venture laid the groundwork for Amazon's expansion into other product categories. Evolution into a Tech Behemoth
    Diversification and Innovation
    Amazon's commitment to innovation and customer-centric services propelled it beyond e-commerce. The company diversified its offerings, venturing into cloud computing, artificial intelligence, and entertainment. Amazon Web Services (AWS) emerged as a leading cloud services provider, hosting websites and applications for businesses globally. Conclusion
    In the landscape of global technology and e-commerce, Amazon stands as a testament to the power of innovation, adaptability, and customer-centricity. From its roots as a virtual bookstore to its current status as a multifaceted technology giant, Amazon's journey continues to shape the way we live, work, and shop in the digital age. As Amazon ventures into new frontiers, its impact on industries and consumer behavior remains a compelling narrative in the ever-evolving story of technological progress.`,
    imageUrl: "/img/amazon.jpg", 
  },
  {
    id: 2,
    slug: "snapchat",
    description: "Unveiling the Phenomenon: Snapchat",
    details: `Introduction
    Snapchat, a trailblazing multimedia messaging app, has revolutionized the way we share moments, interact with friends, and consume content. With its ephemeral nature and innovative features, Snapchat has carved a unique niche in the realm of social media. In this blog, we delve into the captivating world of Snapchat, exploring its inception, standout features, and the cultural impact it has made. The Birth of Snapchat
    From Dorm Room to Global Sensation
    Snapchat was conceived in 2011 by Evan Spiegel, Bobby Murphy, and Reggie Brown while they were students at Stanford University. The trio, fueled by a desire to create a more authentic and fleeting form of communication, developed the concept of disappearing photos and videos. Little did they know that this idea would blossom into one of the most popular social media platforms worldwide. Conclusion
    Snapchat's journey from a dorm room project to a global phenomenon is a testament to its innovation and ability to adapt. With its emphasis on ephemeral messaging, creative features, and cultural impact, Snapchat continues to be a driving force in the ever-evolving world of social media. As we navigate the digital landscape, Snapchat remains a captivating platform, inviting users to share their stories in a way that is uniquely their own.`,
    imageUrl: "/img/sc.jpg",
  },
  {
    id: 3,
    slug: "instagram",
    description: "TUnveiling the World of Instagram: A Visual Odyssey",
    details: `Introduction
    In the vast landscape of social media platforms, Instagram stands out as a visual powerhouse, captivating billions of users worldwide. Since its inception in 2010, Instagram has evolved from a simple photo-sharing app into a multifaceted platform that influences culture, connects communities, and serves as a creative canvas for individuals and businesses alike. Chapter 1: The Birth of Instagram
    In the heart of Silicon Valley, Kevin Systrom and Mike Krieger co-founded Instagram, originally named "Burbn." The app aimed to combine elements of location-sharing and photo-sharing. Over time, it underwent transformations that eventually led to its rebirth as Instagram, a name derived from "instant camera" and "telegram."  Chapter 2: The Rise of Visual Storytelling
    Instagram's success can be attributed to its emphasis on visual storytelling. The platform allows users to share snapshots of their lives through photos and short videos, fostering a unique form of self-expression. The introduction of features like Stories and IGTV further enriched the storytelling experience, providing users with versatile tools to share their narratives. Conclusion: The Ever-Evolving Canvas
    As Instagram continues to evolve, it remains a dynamic canvas for creativity, connection, and cultural influence. From its humble beginnings to its current status as a global phenomenon, Instagram reflects the ever-changing landscape of digital communication. As users and content creators, we navigate this visual odyssey, contributing our stories to the rich tapestry that is Instagram.`,
    imageUrl: "/img/insta.jpg",
  },
  {
    id: 4,
    slug: "facebook",
    description: "Unraveling the Social Tapestry: A Deep Dive into Facebook",
    details: `Introduction
    In the vast landscape of the digital realm, few entities have left as profound an impact as Facebook. From its humble beginnings in a college dormitory to its current status as a global social media giant, Facebook has shaped the way we connect, share, and experience the world. In this blog, we'll explore the journey of Facebook, its impact on society, and the controversies that have accompanied its rise to prominence.
    
    The Genesis: From Dorm Room to Worldwide Connection
    Facebook was conceived in 2004 by Mark Zuckerberg and his college roommates at Harvard University. Originally designed as a platform for students to connect with one another, the social network quickly expanded beyond the confines of academia. Zuckerberg's vision was to create a digital space where people could share their lives, thoughts, and experiences with friends and family. Evolving Features and Innovations
    To stay at the forefront of the ever-evolving digital landscape, Facebook has continually introduced new features and innovations. The acquisition of Instagram and WhatsApp, the development of virtual reality technologies through Oculus, and the ongoing pursuit of AI advancements showcase Facebook's commitment to pushing the boundaries of what is possible in the realm of social connectivity.
    
    The Future of Facebook
    As Facebook continues to evolve, questions about its role in society, user privacy, and the ethical implications of its algorithms persist. The platform's ability to adapt to these challenges will undoubtedly shape its future trajectory.`,
    imageUrl: "/img/fb.jpg",
  },
  {
    id: 5,
    slug: "whatsapp",
    description: "Title: The Evolution and Impact of WhatsApp: Connecting the World Instantly",
    details: `Introduction
    In the realm of instant messaging, WhatsApp stands tall as a revolutionary communication tool that has transformed the way people connect globally. Since its inception, WhatsApp has grown from a simple messaging app to a multi-faceted platform that plays a pivotal role in both personal and business communication. In this blog post, we'll explore the journey of WhatsApp, its key features, and the profound impact it has had on the way we communicate.
    
    The Genesis of WhatsApp
    WhatsApp was founded in 2009 by Brian Acton and Jan Koum, both former employees of Yahoo!. The app was created with the aim of providing a simple, secure, and reliable messaging platform. Initially, it gained popularity for its user-friendly interface and the ability to send text messages, images, and videos over the internet, eliminating the need for traditional SMS. Challenges and Controversies
    While WhatsApp has undoubtedly been a game-changer in the communication landscape, it has not been without controversies. Issues related to misinformation, privacy concerns, and the introduction of the updated privacy policy in 2021 have sparked debates about user data protection and digital privacy.
    
    Conclusion
    WhatsApp's journey from a messaging app to a comprehensive communication platform reflects the dynamic nature of the digital era. Despite challenges, it remains a cornerstone of modern communication, connecting billions of people worldwide. As technology continues to evolve, WhatsApp's role in shaping the future of communication is sure to be a fascinating journey to observe.`,
    imageUrl: "/img/whatsapp.jpg",
  },
  {
    id: 6,
    slug: "spotify",
    description: "The Rhythmic Revolution: Unveiling the Magic of Spotify",
    details: `Introduction:

    In a world dominated by digital innovation, Spotify has emerged as a trailblazer in the realm of music streaming. Since its inception, the platform has not only transformed the way we consume music but has also become a cultural phenomenon in its own right. This blog takes a deep dive into the fascinating world of Spotify, exploring its origins, key features, and the impact it has had on the music industry and the lives of music enthusiasts worldwide.
    
    I. The Birth of Spotify: A Symphony of Innovation
    
    1.1 Inception and Founding:
    Spotify, the brainchild of Swedish entrepreneurs Daniel Ek and Martin Lorentzon, made its debut in 2008. The platform was conceptualized as a response to the growing issue of piracy within the music industry. Ek and Lorentzon envisioned a legal, accessible, and user-friendly alternative that would revolutionize the way people experienced music.
    
    1.2 The Freemium Model:
    One of Spotify's groundbreaking contributions was its introduction of the freemium model. Users could access a vast library of music for free, supported by ads, or opt for a premium subscription for an ad-free experience. This innovative approach played a pivotal role in attracting a massive user base, setting Spotify apart from its competitors.
    
    II. Navigating the Musical Cosmos: Features that Define Spotify
    
    2.1 Extensive Music Library:
    At the core of Spotify's appeal lies its extensive music library. With millions of tracks spanning genres, artists, and eras, users can explore and discover new music or rediscover old favorites with just a few clicks.
    
    2.2 Personalized Playlists:
    Spotify's algorithms are designed to understand the user's music preferences and curate personalized playlists. From the iconic "Discover Weekly" to "Release Radar," these playlists provide a tailored musical journey, making each user's experience unique.
    
    2.3 Collaborative Playlists and Social Integration:
    Spotify emphasizes the communal aspect of music by allowing users to create collaborative playlists with friends. Additionally, seamless integration with social media platforms enables users to share their favorite tracks and playlists, fostering a sense of musical community.
    
    III. Shaping the Soundtrack of Our Lives: The Impact of Spotify
    
    3.1 Empowering Independent Artists:
    Spotify has empowered independent and emerging artists by providing them with a global platform. With features like Spotify for Artists, musicians can track their listenership, gain insights, and connect with their fan base, democratizing the music industry.
    
    3.2 Music Consumption Trends:
    The rise of Spotify has significantly influenced how people consume music. The on-demand, streaming model has become the norm, marking a departure from traditional album sales. This shift has not only impacted revenue streams but has also reshaped the concept of album releases and artist promotion.
    
    IV. The Future Harmony: Evolving Trends and Innovations
    
    4.1 Podcast Domination:
    In recent years, Spotify has expanded its offerings beyond music to include a vast array of podcasts. With exclusive content and partnerships, the platform is shaping the future of digital audio consumption, positioning itself as a leading player in the podcasting landscape.
    
    4.2 AI and Personalization Advancements:
    Spotify continues to invest in artificial intelligence to enhance its recommendation algorithms. The goal is to provide an even more personalized and immersive music experience, keeping users engaged and delighted.
    
    Conclusion: The Ongoing Symphony of Spotify's Success
    
    As we traverse the dynamic landscape of the music industry, Spotify stands as a towering presence, orchestrating a symphony of innovation and cultural impact. From its humble beginnings to its current status as a global music powerhouse, Spotify remains at the forefront of technological and creative advancements. As the platform evolves and adapts to the ever-changing musical ecosystem, one thing is certain – the rhythm of Spotify will continue to resonate in the hearts and ears of music lovers worldwide.`,
    imageUrl: "/img/spotify.jpg",
  },
];

export default function Blog({ params }: { params: { slug: string } }) {
  const selectedBlog = blogData.filter((item) => item.slug === params.slug);

  if (selectedBlog.length === 0) {
    return <div>Blog not found</div>;
  }

  const blog = selectedBlog[0];

  return (
    <div>
      <section className="bg-cover bg-center"
      style={{ backgroundImage: `url(${blog.imageUrl})`,height: "550px", }}>
        </section>  
      <h1 className="text-4xl font-extrabold">{blog.description}</h1>
      <p className="font-extralight">{blog.details}</p>
      
    </div>
  );
}
