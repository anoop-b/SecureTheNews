// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`
const axios = require('axios')

module.exports = function (api) {
  api.loadSource(
    async actions => {
      const { data } = await axios.get('https://securethe.news/api/v1/sites/?limit=150')
  
      const collection = actions.addCollection({
        typeName: 'BlogPost',
      })
  
      for (const item of data.results) {
        collection.addNode({
          name: item.name,
          domain: item.domain,
          latest_scan:item.latest_scan,
          pageInfo:data.pageInfo,
        })
      }
    })

    // api.createPages(async ({ graphql, createPage }) => {
    //   const { data } = await graphql(`{
    //     allBlogPosts {
    //       edges {
    //         node {
    //           path
    //           id
    //           name
    //           domain
    //         }
    //       }
    //     }
    //   }`)
  
    //   data.allBlogPosts.edges.forEach(({ node }) => {
    //     createPage({
    //       path: `/about/${node.id}`,
    //       component: './src/templates/details.vue',
    //       context: {
    //         id: node.id
    //       }
    //     })
    //   })
    // })
}
