const documentsMd = [
    {
        name: 'Getting Started',
        content: 'documents/introduction.md',
        usageMode: 'expand',
        sections: [
            {
                name: 'Installation',
                content: 'documents/installation.md',
            },
            {
                name: 'Configuration',
                content: 'documents/configuration.md',
            },
        ],
    },
    {
        name: 'Components',
        content: 'documents/ui.md',
        components: 'src/components/**/[A-Z]*.js',
        exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
        name: 'Live Demo',
        external: true,
        href: 'https://muhimron90.github.io/muhi-ui/',
    },
]

module.exports = documentsMd
