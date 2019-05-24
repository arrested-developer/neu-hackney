const customNormaliser = require("./normalise")

module.exports = {
  siteMetadata: {
    title: `NEU Hackney`,
    description: `Hackney branch of the National Education Union.`,
    author: `@arrested-developer`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-twitter`,
    {
      resolve: "gatsby-source-wordpress",
      options: {
        baseUrl: "localhost:8001",
        protocol: "http",
        hostingWPCOM: false,
        useACF: false,
        acfOptionPageIds: [],
        auth: {
          // If auth.user and auth.pass are filled, then the source plugin will be allowed
          // to access endpoints that are protected with .htaccess.
          // htaccess_user: "your-htaccess-username",
          // htaccess_pass: "your-htaccess-password",
          // htaccess_sendImmediately: false,
          // If hostingWPCOM is true then you will need to communicate with wordpress.com API
          // in order to do that you need to create an app (of type Web) at https://developer.wordpress.com/apps/
          // then add your clientId, clientSecret, username, and password here
          // Learn about environment variables: https://www.gatsbyjs.org/docs/environment-variables
          // If two-factor authentication is enabled then you need to create an Application-Specific Password,
          // see https://en.support.wordpress.com/security/two-step-authentication/#application-specific-passwords
          // wpcom_app_clientSecret: process.env.WORDPRESS_CLIENT_SECRET,
          // wpcom_app_clientId: "54793",
          // wpcom_user: "gatsbyjswpexample@gmail.com",
          // wpcom_pass: process.env.WORDPRESS_PASSWORD,
          // If you use "JWT Authentication for WP REST API" (https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/)
          // or (https://github.com/jonathan-dejong/simple-jwt-authentication) requires jwt_base_path, path can be found in wordpress wp-api.
          // plugin, you can specify user and password to obtain access token and use authenticated requests against wordpress REST API.
          // jwt_user: process.env.JWT_USER,
          // jwt_pass: process.env.JWT_PASSWORD,
          // jwt_base_path: "/jwt-auth/v1/token", // Default - can skip if you are using https://wordpress.org/plugins/jwt-authentication-for-wp-rest-api/
        },
        verboseOutput: false,
        perPage: 100,
        // Search and Replace Urls across WordPress content.
        // searchAndReplaceContentUrls: {
        //   sourceUrl: "https://source-url.com",
        //   replacementUrl: "https://replacement-url.com",
        // },
        // Set how many simultaneous requests are sent at once.
        concurrentRequests: 10,
        // Set WP REST API routes whitelists
        // and blacklists using glob patterns.
        // Defaults to whitelist the routes shown
        // in the example below.
        // See: https://github.com/isaacs/minimatch
        // Example:  `["/*/*/comments", "/yoast/**"]`
        // ` will either include or exclude routes ending in `comments` and
        // all routes that begin with `yoast` from fetch.
        // Whitelisted routes using glob patterns
        includedRoutes: [
          "**/pages",
          "**/media",
          "**/taxonomies",
          "**/categories",
          "**/member-page",
          "**/gallery",
          "**/position",
          "**/users",
          "**/newsletters",
          "**/events",
          "**/campaigns",
          "**/team",
          "**/useful-resources",
          "**/site-settings",
        ],
        // Blacklisted routes using glob patterns
        // excludedRoutes: ["**/posts/1456"],
        // use a custom normalizer which is applied after the built-in ones.
        normalizer: customNormaliser,
        plugins: [
          {
            resolve: `gatsby-wordpress-inline-images`,
            options: {
              baseUrl: "localhost:8001",
              protocol: "http",
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        ssr: true,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://michaelwatts.us20.list-manage.com/subscribe/post?u=3ea0ee74b884e6b7b37f689f7&amp;id=07843bfe37", // see instructions section below
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
