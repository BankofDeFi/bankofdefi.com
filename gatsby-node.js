// Gatsby NodeAPI Reference: https://www.gatsbyjs.org/docs/node-apis/
const path = require('path')


exports.createPages = async ({ actions, graphql, reporter }) => {
    const { createPage } = actions

    const newsPostTemplate = require.resolve(`./src/templates/newsPost.js`)

    const result = await graphql(`
        {
            allGhostPost(sort: { order: DESC, fields: published_at }) {
                edges {
                    previous {
                        slug
                    }
                    node {
                        slug
                        title
                    }
                    next {
                        slug
                    }
                }
            }
        }
    
    `)

        // Handle errors
    if (result.errors) {
        reporter.panicOnBuild(`Error while running GraphQL query.`)
        return
    }

    result.data.allGhostPost.edges.forEach(({ previous, node, next }) => {
        createPage({
            path: `/blog/${node.slug}`,
            pathPrefix: `/blog`,
            component: newsPostTemplate,
            context: {
                title: node.title,
                slug: node.slug,
                prevPostSlug: previous,
                nextPostSlug: next,
            }, // additional data can be passed via context
        })
    })
}





exports.onCreateWebpackConfig = ({ stage, actions }) => {
  actions.setWebpackConfig({
        module: {
            rules: [
                {
                    test: /\.xml$/,
                    use: [ 'xml-loader' ],
                },
            ],
        },
    })
}