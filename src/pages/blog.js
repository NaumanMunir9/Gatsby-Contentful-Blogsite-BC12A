import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const BlogPage = () => (
  <Layout>
    <Seo title="Blog Page" />
    <h1>Hey There! This is the Blog Page</h1>
    <p>Welcome to Blog Page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default BlogPage
