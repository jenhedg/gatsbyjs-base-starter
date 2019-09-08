import React from "react"
import { Link } from "gatsby"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/styles.scss"


const Nav = () => {
    const data = useStaticQuery(graphql`
    query NavQuery {
      site {
        siteMetadata {
          menuLinks {
            name
            link
          }
        }
      }
    } 
  `)
    return (
        <ul className="nav">
            {data.site.siteMetadata.menuLinks.map(link => (
                <li key={link.name}>
                    <Link to={link.link}>
                        {link.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
}

export default Nav