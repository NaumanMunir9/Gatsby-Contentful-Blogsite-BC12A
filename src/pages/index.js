import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home Page" />
    <h1>Hey There! This is the Home Page</h1>
    <Link to="/blog/">Visit the Blog Page</Link> <br />
  </Layout>
)

export default IndexPage
