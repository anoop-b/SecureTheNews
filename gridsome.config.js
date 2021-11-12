// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Secure The News',
  siteUrl: 'https://anoop-b.github.io',
  pathPrefix: '/SecureTheNews',
  templates: {
    // BlogPost: [
    //   {
    //     path: '/about/:id',
    //     component:  './src/templates/BlogPost.vue'
    //   }
    // ],
    EventPage: [
      {
        path: '/breach/:id',
        component:  './src/templates/EventPage.vue'
      }
    ],
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      /* These are the default options. You don't need to set any options to get going.
      options: {
        tailwindConfig: './some/file/js',
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true,
        shouldPurgeUnusedKeyframes: true,
      }
      */
    },
    {
      use: "@gridsome/source-airtable",
      options: {
        apiKey: "KEY", //required
        baseId: "BASEID", //required
        tables: [
          {
            name: "Tracker",
            typeName: "EventPage", //required - needs to match template name
            select: {}, //optional
            links: [], //optional
          },
          // Comment in this section and the line in `templates` for multiple tables!
          // {
          //   name: "Parties",
          //   typeName: "Parties", //required - needs to match template name
          //   select: {}, //optional
          //   links: [], //optional
          // },
        ],
      },
    },
  ]
}
