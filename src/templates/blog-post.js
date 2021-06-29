import React from "react";
import { graphql, Link } from "gatsby";

import Layout from "../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Seo from "../components/seo";

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      date(formatString: "DD MMMM, YYYY")
      image {
        gatsbyImageData(layout: CONSTRAINED, placeholder: TRACED_SVG)
      }
    }
  }
`;

const BlogPost = (props) => {
  console.log(props);
  const { title, date, image } = props.data.contentfulBlogPost;
  const pathToImage = getImage(image);

  return (
    <Layout>
      <Seo title={title} />
      <Link to="/blog">Visit the Blog Page</Link>

      <div className="content">
        <h1>{title}</h1>
        <span className="meta">Posted on {date}</span>

        {image && <GatsbyImage image={pathToImage} alt={title} />}
      </div>
    </Layout>
  );
};

export default BlogPost;
