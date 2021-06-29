import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { GatsbyImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Seo from "../components/seo";

const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: date, order: DESC }) {
      nodes {
        id
        title
        slug
        date(formatString: "DD MMMM, YYYY")
        excerpt {
          childMarkdownRemark {
            excerpt(pruneLength: 150)
          }
        }
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
        }
      }
    }
  }
`;

const Blog = () => {
  const data = useStaticQuery(query);

  return (
    <Layout>
      <Seo title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.nodes.map((item) => {
          return (
            <li className="post" key={item.id}>
              <h2>
                <Link to={`/blog/${item.slug}/`}>{item.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {item.date}</span>
              </div>
              {item.image && (
                <GatsbyImage
                  className="featured"
                  image={item.image.gatsbyImageData}
                  alt={item.title}
                />
              )}
              <p className="excerpt">
                {item.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${item.slug}/`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;
