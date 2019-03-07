import React from "react"
import PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LocalizedLink from '../components/localized-link'

const SecondPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <SEO title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <LocalizedLink to="/">Go back to the homepage</LocalizedLink>
  </Layout>
)

SecondPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired
}

export default SecondPage
