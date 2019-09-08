import { Link } from "gatsby"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import Nav from "./nav"
import "../styles/styles.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      site {
        siteMetadata {
          title
          description
          author
          menuLinks {
            name
            link
          }
        }
      }
    } 
  `)

  return (
    <header className="header">
      <h1>{data.site.siteMetadata.title}</h1>
      <Nav />   
    </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
