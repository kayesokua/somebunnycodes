export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fd3a338a46250160b5662dd',
                  title: 'Sanity Studio',
                  name: 'somebunnycodes-studio',
                  apiId: 'a899b604-1b86-4c19-b6a6-2841f30b7732'
                },
                {
                  buildHookId: '5fd3a338260f0517a730a85f',
                  title: 'Blog Website',
                  name: 'somebunnycodes',
                  apiId: 'a5851636-542d-4833-a4d8-b304714c4e9a'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kayesokua/somebunnycodes',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://somebunnycodes.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
