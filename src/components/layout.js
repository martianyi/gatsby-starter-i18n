/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import flatten from "flat"
import { IntlProvider, addLocaleData } from "react-intl"

// Locale data
import enData from "react-intl/locale-data/en"

// Messages
import en from "../locales/en.json"

import "bootstrap/dist/css/bootstrap.css"
import "./layout.css"

import Header from "./header"

const messages = { en }

addLocaleData([...enData])

const Layout = ({ locale, children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <IntlProvider locale={locale} messages={flatten(messages[locale])}>
        <Fragment>
          <Header siteTitle={data.site.siteMetadata.title}/>
          <div
            style={{
              margin: `20px auto`,
              maxWidth: 960,
              padding: `0px 1.0875rem 1.45rem`,
              paddingTop: 0,
            }}
          >
            <main>{children}</main>
            <footer>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a> and
              {` `}
              <a href="https://github.com/reactstrap/reactstrap">Reactstrap</a>
            </footer>
          </div>
        </Fragment>
      </IntlProvider>
    )}
  />
)

Layout.propTypes = {
  locale: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Layout
