import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";

import { GatsbyImage, getImage } from "gatsby-plugin-image";
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
  const {
    allContentfulBlogPost: { nodes: posts },
  } = useStaticQuery(query);

  return (
    <Layout>
      <Seo title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {posts.map((item) => {
          const { id, slug, title, date, image, excerpt } = item;
          const pathToImage = getImage(image);
          return (
            <li className="post" key={id}>
              <h2>
                <Link to={`/blog/${slug}`}>{title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {date}</span>
              </div>
              {image && (
                <GatsbyImage
                  className="featured"
                  image={pathToImage}
                  alt={title}
                />
              )}
              <p className="excerpt">{excerpt.childMarkdownRemark.excerpt}</p>
              <div className="button">
                <Link to={`/blog/${slug}`}>Read More</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default Blog;
