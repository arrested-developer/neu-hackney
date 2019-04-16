/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// Wrap root element with Styled Components theme
import React from "react"
import { ThemeProvider } from "styled-components"

import siteTheme from "./src/theme"

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider theme={siteTheme}>{element}</ThemeProvider>
}
