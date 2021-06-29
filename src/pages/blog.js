import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import { GatsbyImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const Blog = () => {
  const data = useStaticQuery(
    graphql`
      query {
        allContentfulBlogPost(sort: { fields: date, order: DESC }) {
          edges {
            node {
              title
              id
              slug
              date(formatString: "Do MMMM, YYYY")
              image {
                fluid(maxWidth: 750) {
                  ...GatsbyContentfulFluid
                }
              }
              excerpt {
                childMarkdownRemark {
                  excerpt(pruneLength: 150)
                }
              }
            }
          }
        }
      }
    `
  )

  return (
    <Layout>
      <Seo title="Blog" />
      <p>
        <Link to="/">Go back to the homepage</Link>
      </p>
      <ul className="posts">
        {data.allContentfulBlogPost.edges.map(edge => {
          return (
            <li className="post" key={edge.node.id}>
              <h2>
                <Link to={`/blog/${edge.node.slug}/`}>{edge.node.title}</Link>
              </h2>
              <div className="meta">
                <span>Posted on {edge.node.date}</span>
              </div>
              {edge.node.image && (
                <GatsbyImage
                  className="featured"
                  image={edge.node.image.fluid}
                  alt={edge.node.title}
                />
              )}
              <p className="excerpt">
                {edge.node.excerpt.childMarkdownRemark.excerpt}
              </p>
              <div className="button">
                <Link to={`/blog/${edge.node.slug}/`}>Read More</Link>
              </div>
            </li>
          )
        })}
      </ul>
    </Layout>
  )
}

export default Blog
