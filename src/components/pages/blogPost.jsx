import { useParams } from "react-router-dom";
import blogPosts from "../../../public/json/blogPosts.json";
import Header from "../reusable-components/header";
import Footer from "../reusable-components/footer";


const BlogPost = () => {
    const { slug } = useParams();

    // Find the blog post by its slug
    const post = blogPosts.find((post) => post.slug === slug);

    // Check if post exists
    if (!post) {
        return <h1>Post Not Found</h1>;
    }

    return (
        <>
            <Header />
            <div className="blog-post">
                {/* Banner Section */}
                <div className="banner">
                    <img src={post.bannerImage} alt={post.title} />
                </div>

                {/* Blog Content */}
                <div className="content">
                    <h1>{post.title}</h1>
                    {post.content.map((section, index) => (
                        <div key={index} className="section">
                            <h2>{section.heading}</h2>
                            <p>{section.text}</p>

                            {/* Render links if present */}
                            {section.links && (
                                <ul className="useful-links">
                                    {section.links.map((link, i) => (
                                        <li key={i}>
                                            <a href={link.url} target="_blank" rel="noopener noreferrer">
                                                {link.text}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
};

export default BlogPost;
