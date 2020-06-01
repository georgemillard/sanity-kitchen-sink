export default {
  widgets: [
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
                  buildHookId: '5ed4b1e3987c7a48083569fc',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ws7f2gsj',
                  apiId: '87b42ece-048d-4631-8a17-1ffb63cd43d2'
                },
                {
                  buildHookId: '5ed4b1e387e8c7dc903a8400',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-2xh81gv7',
                  apiId: 'd760f942-7b63-4589-8a1e-facf63959b04'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/georgemillard/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-2xh81gv7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
