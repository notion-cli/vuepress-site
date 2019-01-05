module.exports = {
    title: 'Notion',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Reference', link: '/reference/' },
            { text: 'GitHub', link: 'https://github.com/notion-cli/notion' }
        ],
        sidebar: [
            {
                title: 'Guide',
                collapsable: true,
                children: [
                    '/guide/',
                    '/guide/getting-started',
                    '/guide/understanding'
                ]
            },
            {
                title: 'Reference',
                collapsable: true,
                children: [
                    '/reference/',
                    '/reference/fetch',
                    '/reference/install',
                    '/reference/pin',
                    '/reference/current',
                    '/reference/deactivate',
                    '/reference/activate',
                    '/reference/help',
                    '/reference/version'
                ]
            },
            {
                title: 'Advanced',
                collapsable: true,
                children: [
                    '/advanced/',
                    '/advanced/hooks'
                ]
            },
            {
                title: 'Contributing',
                collapsable: true,
                children: [
                    '/contributing/'
                ]
            }
        ]
    }
};
