import React from "react"
//import { graphql, StaticQuery, Link } from "gatsby"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const data = {
    "site": {
      "siteMetadata": {
        "MenuLinks": [
          {
            "link": "/",
            "title": "Etusivu",
            "subMenu": null
          },
          {
            "link": "/metsan-otus",
            "title": "Minusta",
            "subMenu": null
          },
          {
            "link": "/vlogi",
            "title": "Vlogi",
            "subMenu": [
              {
                "link": "/vlogi/kirjakerho/",
                "title": "Kirjakerho"
              },
              {
                "link": "/vlogi/elamankoulu/",
                "title": "Elämänkoulu"
              },
              {
                "link": "/vlogi/saarnakirja/",
                "title": "Saarnakirja"
              },
              {
                "link": "/vlogi/hunajapurkki/",
                "title": "Hunajapurkki"
              },
              {
                "link": "/vlogi/pelihalli/",
                "title": "Pelihalli"
              },
              {
                "link": "/vlogi/karhuteatteri/",
                "title": "Karhuteatteri"
              }
            ]
          },
          {
            "link": "/yhteydenotto",
            "title": "Ota yhteyttä",
            "subMenu": null
          }
        ]
      }
    }
  }

function menuLinks() {
  return (   
      
        <ul>
          </ul>
     )
}


export default function Navigation() {
  return (
      <Navbar collapseOnSelect expand="md" className="site-navigation">
        <Navbar.Brand class="logo" href="/">Metsän Otus</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul>
            {data.site.siteMetadata.MenuLinks.map((path) => (
            <Nav.Link as="li" key={path.title}>
              
              <a href="{path.link}">
                  {path.title}
              </a>
              
              {path.subMenu && path.subMenu.length > 0 ? (
                <NavDropdown class="sub-items responsive-navbar-nav">
                  {path.subMenu.map((subpath) => (
                    <NavDropdown.Item a href={subpath.link}>
                      {subpath.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : null}
            </Nav.Link>))
          }
          </ul>
        </Navbar.Collapse>
      </Navbar >
    )
  
}


