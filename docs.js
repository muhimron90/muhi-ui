const documentsMd = [
    {
        name: 'introduction',
        content: 'documents/introduction.md',
    },
    {
        name: 'Getting Started',
        usageMode: 'hide',
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
        components: 'src/components/[A-Z]**/*.js',
        exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
        usageMode: 'expand', // 'hide' | 'collapse' | 'expand'
    },
    {
        name: 'Live Demo',
        external: true,
        href: '#',
    },
]

module.exports = documentsMd
