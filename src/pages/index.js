import React from "react"
import PropTypes from 'prop-types'
import { FormattedMessage } from "react-intl"

import Layout from "../components/layout"
import LocalizedLink from '../components/localized-link'
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ pageContext: { locale } }) => (
  <Layout locale={locale}>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]}/>
    <h1><FormattedMessage id="org.massnet.pages.index.hi" /></h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image/>
    </div>
    <LocalizedLink to="/page-2/">
      <FormattedMessage id="org.massnet.pages.index.to_page_2"/>
    </LocalizedLink>
  </Layout>
)

IndexPage.propTypes = {
  pageContext: PropTypes.shape({
    locale: PropTypes.string.isRequired
  }).isRequired
}

export default IndexPage
