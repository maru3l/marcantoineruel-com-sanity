export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5cdad114d3e01dcd2f4e116f',
                  title: 'Sanity Studio',
                  name: 'marcantoineruel-com-sanity-studio',
                  apiId: '9407b4e0-396e-45e4-9d0f-59fedde52576'
                },
                {
                  buildHookId: '5cdad114d3a3d9c8eb53c7d5',
                  title: 'Portfolio Website',
                  name: 'marcantoineruel-com-sanity',
                  apiId: 'fdef6868-1fbd-48ce-a4e5-4d2c239f75fb'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/maru3l/marcantoineruel-com-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://marcantoineruel-com-sanity.netlify.com', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['project']},
      layout: {width: 'medium'}
    }
  ]
}
