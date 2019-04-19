import React from "react"
import uuidv4 from "uuid/v4"

import { LinkList, LinkItem, Link } from "../shared/linksAndButtons"

export default ({ navLinks, ...props }) => (
  <LinkList {...props}>
    {navLinks.map(link => {
      if (Array.isArray(link.to)) {
        return (
          <div key={uuidv4()}>
            {link.name}
            <LinkList indent>
              {link.to.map(innerLink => (
                <LinkItem key={uuidv4()}>
                  <Link to={innerLink.to}>{innerLink.name}</Link>
                </LinkItem>
              ))}
            </LinkList>
          </div>
        )
      } else {
        return (
          <LinkItem key={uuidv4()}>
            <Link to={link.to}>{link.name}</Link>
          </LinkItem>
        )
      }
    })}
  </LinkList>
)
