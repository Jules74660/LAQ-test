// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Manuel d\'utilisation pour LAQ',
  tagline: 'Pour commencer la qualification de vos données cliquez ici : lien LAQ',
  favicon: 'img/logo_LAQ.png',

  url: 'https://your-docusaurus-site.example.com',
  baseUrl: '/',

  organizationName: 'facebook',
  projectName: 'docusaurus',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },


  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/docs', 
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Manuel d\'utilisation LAQ',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo_LAQ.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Guide',
          to: 'docs/guide-utilisateur',
        },
        {
          html: `<img src="/img/logos_ensemble.png" alt="Second Logo"`, 
          position: 'right', // Places it on the right side
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      logo: {
        alt: 'logos_ensemble.png',
        src: '/img/logos_ensemble.png',
        href: '/',
      },
      copyright: `Copyright © ${new Date().getFullYear()} Guide utilisateur pour LAQ`,
    },
  }),
};

// **Export the config at the bottom**
module.exports = config;
