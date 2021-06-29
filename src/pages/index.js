import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>hey there!</h1>
    <Link to="/blog/">Visit the Blog Page</Link> <br />
  </Layout>
)

export default IndexPage
