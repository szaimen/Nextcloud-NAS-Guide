module.exports = {
  title: 'Nextcloud-NAS-Guide',
  tagline: 'Instructions how to set up a home server',
  url: 'https://szaimen.github.io',
  baseUrl: '/Nextcloud-NAS-Guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.webp',
  organizationName: 'szaimen', // Usually your GitHub org/user name.
  projectName: 'Nextcloud-NAS-Guide', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Nextcloud-NAS',
      logo: {
        alt: 'My Site Logo',
        src: 'img/favicon.webp',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Guide',
          position: 'left',
        },
        //{to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/szaimen/Nextcloud-NAS-Guide/',
          label: 'GitHub',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Legal',
          items: [
            {
              label: 'Impressum',
              to: 'docs/impressum',
            },
            {
              label: 'Privacy Policy',
              to: 'docs/privacy',
            },
          ],
        },
        /*{
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/szaimen/Nextcloud-NAS-Guide',
            },
          ],
        },*/
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href='https://github.com/szaimen'>szaimen</a> - Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/szaimen/Nextcloud-NAS-Guide/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    // ... Your other plugins.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        hashed: true,
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
        // When applying `zh` in language, please install `nodejieba` in your project.
      },
    ],
  ],
};
