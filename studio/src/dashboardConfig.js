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
                  buildHookId: '5fb7fce3087b4d226a5ecd39',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-p45nstd2',
                  apiId: '909aad6c-b785-49aa-9e6b-d6b271253579'
                },
                {
                  buildHookId: '5fb7fce492dc0f25f534fd28',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-bjgiyvgv',
                  apiId: '289df150-ae4b-4ec1-bac1-8995b53510f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ElSidney/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-bjgiyvgv.netlify.app', category: 'apps' }
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
