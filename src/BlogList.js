import { Link } from "react-router-dom";

const BlogList = ({blogs,title}) => {   

    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <Link  to={`/blogs/${blog.id}`}>
                  <h2>{blog.title}</h2>
                  <h3 className="authore">writen by {blog.author}</h3>
                </Link>
               
            </div>
        ))}
        </div>

     );
}
 
export default BlogList;