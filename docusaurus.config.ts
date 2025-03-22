import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import contributors from './contributors.json';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Ptero Egg Docs',
  tagline: 'Pterosaurs are cool',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.itz.sh',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'itzminey', // Usually your GitHub org/user name.
  projectName: 'eggdocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/itzminey/eggdocs/tree/master/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Ptero Egg Docs',
      logo: {
        alt: 'Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'gettingStartedSidebar',
          position: 'left',
          label: 'Getting Started',
        },
        {
          type: 'docSidebar',
          sidebarId: 'basicSidebar',
          position: 'left',
          label: 'Egg Basics',
          to: '/docs/category/egg-basics',
        },
        {
          type: 'docSidebar',
          sidebarId: 'advancedSidebar',
          position: 'left',
          label: 'Advanced Egg Scripting',
          to: '/docs/category/advanced-egg-scripting',
        },
        {
          type: 'docSidebar',
          sidebarId: 'tutorialsSidebar',
          position: 'right',
          label: 'Tutorials',
          to: '/docs/category/tutorials',
        },
        {
          href: 'https://github.com/itzminey/eggdocs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: '/docs/getting-started',
            },
            {
              label: 'Egg Basics',
              to: '/docs/category/egg-basics',
            },
            {
              label: 'Advanced Egg Scripting',
              to: '/docs/category/advanced-egg-scripting',
            }
          ],
        },
        {
          title: 'Tutorials',
          items: [
            {
              label: 'Making your first Egg',
              to: '/docs/tutorials/first-egg',
            }
          ],
        },
        {
          title: 'Other Pterodactyl Related Sites',
          items: [
            {
              label: 'Pterodactyl Homepage',
              href: 'https://pterodactyl.io',
            },
            {
              label: 'Community Egg Repository',
              href: 'https://pterodactyleggs.com',
            },
            {
              label: 'Official Project Discord',
              href: 'https://discord.gg/pterodactyl',
            },
          ],
        },
        {
          title: 'Contributors',
          items: contributors.map((contributor: { name: string, profileUrl: string }) => ({
            label: contributor.name,
            href: contributor.profileUrl,
          })),
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Ptero Egg Docs and Contributors. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
