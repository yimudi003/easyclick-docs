// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion


/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EasyClick官网_安卓_鸿蒙Next脚本_苹果_iOS脚本_iOS手机自动化脚本编写_安卓免root_iOS免越狱_游戏自动化_营销自动化_自动化测试_自动化脚本开发_自动化办公',
  tagline: '自动化测试，自动化脚本领导者，自动化营销专家,鸿蒙Next脚本',
  url: 'https://ieasyclick.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/easyclick.png',
  organizationName: 'easyclick', // Usually your GitHub org/user name.
  projectName: 'easyclick-docs', // Usually your repo name.
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    localeConfigs: {
      zh: {
        label: '简体中文',
      },
      en: {
        label: 'English',
      },
    },
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          // routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateAuthor: false,
          showLastUpdateTime: false,
        },
        blog: {
          routeBasePath: '/blog',
          path: 'blog',
          blogTitle: '博客',
          postsPerPage: 10,
          blogSidebarCount: 'ALL',
          blogSidebarTitle: '所有文章',
          sortPosts: 'descending'
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve('./src/css/base.css')
          ]
        }
      })
    ]
  ],
  themes: [
    // ... Your other themes.
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      {
        // ... Your options.
        // `hashed` is recommended as long-term-cache of index file is possible.
        indexDocs: true,
        hashed: 'filename',
        language: ["zh", "en"],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        searchContextByPaths: ["docs", "iosdocs", "iostjdocs","hmdocs"],
        docsRouteBasePath: ["/docs", "/iosdocs", "/iostjdocs","/hmdocs"],
        docsDir: ["docs", "iosdocs", "iostjdocs","hmdocs"]
        // For Docs using Chinese, The `language` is recommended to set to:
        // ```
        // language: ["en", "zh"],
        // ```
      },
    ],
  ],
  themeConfig:
  /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      metadata: [
        {
          name: 'keywords',
          content: '安卓免root手机自动化,鸿蒙Next脚本自动化,苹果免越狱手机自动化脚本,自动化脚本编写软件,EasyClick破解,按键精灵,触动精灵,autojs,EasyClick官网,自动化测试,自动化办公,自动化脚本开发'
        },
        {
          name: 'description',
          content: 'EasyClick 是专门用于安卓免root,鸿蒙Next脚本自动化,iOS免越狱、免硬件驱动的自动化脚本编写软件，轻松做出比按键精灵、触动精灵强大的软件，与生态圈中的云控、群控产品搭配组合，让自动化脚本开发更容易,相对于市面上其他的产品，EasyClick编写代码更加智能，函数功能更丰富，兼容性更高，同时更新的速度以及问题解决能力更强'
        }
      ],
      navbar: {
        title: 'EasyClick',
        logo: {
          alt: 'EasyClick Logo',
          src: 'img/easyclick.png',
          href: '/'
        },
        hideOnScroll: false,
        // navbar的选项卡
        items: [
          {
            position: 'left',
            to: '/docs',
            label: '安卓文档',
          },
          {
            position: 'left',
            to: '/hmdocs',
            label: '鸿蒙Next USB版',
          },
          {
            position: 'left',
            type: 'dropdown',
            label: 'iOS文档',
            items: [
              {
                label: 'iOS USB版',
                href: '/iosdocs',
              },
              {
                label: 'iOS 脱机版',
                href: '/iostjdocs',
              }
            ],
          },
          {
            type: 'dropdown',
            label: '企业版产品',
            position: 'left',
            items: [
              {
                label: '企业版安卓中控投屏',
                href: '/android_center_screen',
              },
              {
                label: '企业版安卓iOS云控',
                href: '/enterprise_server',
              },
              {
                label: '企业版iOS USB投屏',
                href: '/local_ctrl_server',
              },

              {
                label: '企业版iOS无线中控投屏',
                href: '/ios_wifi_server',
              },
              {
                label: '企业版鸿蒙Next USB投屏',
                href: '/hm_ctrl_server',
              },
              {
                label: '安卓HID小主机',
                href: '/docs/zh-cn/centerscreen/hidlinux',
              }
            ],
          },
          {
            type: 'dropdown',
            label: '技术交流',
            position: 'left',
            items: [
              {
                label: '技术交流/IP代理',
                href: 'https://bbs.ieasyclick.com',
              },
              {
                label: '官方客服&脚本定制',
                href: '/community/support',
              },
              {
                to: 'https://www.zhizhuip.com/?ref=ieasyclick',
                label: '全球IP代理',

              }
            ],
          },
          {
            position: 'left',
            to: '/community/download_area',
            label: '软件下载区',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/easy-click/easyclick-libs',
            position: 'right',
            className: 'header-github-link',
            'aria-label': 'GitHub repository'
          }
        ]
      },
      docs: {
        sidebar: {
          hideable: true,
          autoCollapseCategories: true
        }
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true, // 黑白切换按钮
        respectPrefersColorScheme: false
      },
      algolia: {
        appId: 'dd',
        apiKey: 'dd',
        indexName: 'easyclick'
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: '产品文档',
            items: [
              {
                label: '安卓开发文档',
                to: 'docs/'
              },
              {
                label: '鸿蒙Next USB版文档',
                to: 'hmdocs/'
              },
              {
                label: 'iOS USB版文档',
                to: 'iosdocs/'
              },
              {
                label: 'iOS 脱机版文档',
                to: 'iostjdocs/'
              },
              {
                label: '企业版安卓中控投屏',
                to: 'docs/zh-cn/centerscreen/openscreen'
              },
              {
                label: '企业版安卓iOS云控',
                to: 'docs/zh-cn/ecloud2/installcloud'
              },
              {
                label: '企业版鸿蒙Next USB投屏',
                to: 'hm_ctrl_server'
              },
              {
                label: '企业版iOS USB投屏',
                to: 'local_ctrl_server'
              },

              {
                label: '企业版iOS无线中控投屏',
                to: 'ios_wifi_server',
              },
              {
                label: '安卓HID小主机',
                href: '/docs/zh-cn/centerscreen/hidlinux',
              },
              {
                label: '网络验证平台',
                to: 'https://uc.ieasyclick.com'
              },
              {
                label: '全球IP代理',
                to: 'https://www.zhizhuip.com/?ref=ieasyclick'
              }
            ]
          },
          {
            title: '联系客服',
            items: [
              {
                label: '加客服联系',
                to: '/community/support'
              },
              {
                label: '联系我们',
                to: '/docs/zh-cn/joinus'
              },
              {
                label: '用户协议',
                to: '/docs/zh-cn/agreement'
              },
              {
                label: '免责声明',
                to: '/docs/zh-cn/declare'
              },
              {
                label: '软件下载区',
                to: '/community/download_area'
              },
            ]
          },
          {
            title: '更多',
            items: [

              {
                label: '论坛交流',
                to: 'https://bbs.ieasyclick.com'
              },
              {
                label: '合作伙伴',
                to: '/docs/zh-cn/partner'
              },
            ]
          }
        ],
        copyright: `<a href="http://www.shixianlaw.com/" target="_blank" style="color:white">安徽时宪律师事务所提供法务支持</a><br/>Copyright © ${new Date().getFullYear()} 易点新媒, Inc. All Rights Reserved. <br/><a href="https://beian.miit.gov.cn/" target="_blank" style="color:white">皖ICP备2023020527号-4</a> `
      },
      imageViewer: {
        // 图片选择器，默认为 img
        imageSelector: 'img',
        // viewerjs 配置
        // see: https://github.com/fengyuanchen/viewerjs/blob/main/README.md
        options: {
          transition: false,
          toolbar: {
            zoomIn: 4,
            zoomOut: 4,
            oneToOne: 4,
            reset: 4,
            prev: 0,
            play: 0,
            next: 0,
            rotateLeft: 4,
            rotateRight: 4,
            flipHorizontal: 4,
            flipVertical: 4,
          },
          navbar: false,
          title: false,
          fullscreen: false,
        },
      },
      // prism: {
      //   darkTheme: darkCodeTheme
      // },
      announcementBar: {
        id: 'start',
        content: '⭐️ EasyClick 纯血鸿蒙Next自动化支持，<a target="_blank" href="/hmdocs/">详细请点击此处</a>， iOS已全面支持iOS17+系统，包括USB和脱机版本的自动化脚本、投屏等功能<a target="_blank" href="/iosdocs/zh-cn/otherinc/ios17"> 详细请点击此处</a>',
        // '⭐️ If you like Rainbond,<a target="_blank" href="https://github.com/goodrain/rainbond"> give it a star on GitHub</a> !',
        isCloseable: false,
      }
    }),
  scripts: [
    '/js/baidu.js',
    //'https://static.goodrain.com/docusaurus/posthog.js'
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebarsCommunity.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'hmdocs',
        path: 'hmdocs',
        routeBasePath: 'hmdocs',
        sidebarPath: require.resolve('./sidebarsHm.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iosdocs',
        path: 'iosdocs',
        routeBasePath: 'iosdocs',
        sidebarPath: require.resolve('./sidebarsIos.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'iostjdocs',
        path: 'iostjdocs',
        routeBasePath: 'iostjdocs',
        sidebarPath: require.resolve('./sidebarsIostj.js'),
        showLastUpdateAuthor: false,
        showLastUpdateTime: false,
      }
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        createRedirects(existingPath) {
          // if (existingPath.includes('docs/use-manual/component-create')) {
          //   return [
          //     existingPath.replace(
          //       'docs/use-manual/component-create',
          //       'docs/component-create'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/use-manual/enterprise-manager')) {
          //   return [
          //     existingPath.replace(
          //       'docs/use-manual/enterprise-manager',
          //       'docs/enterprise-manager'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/use-manual/user-manual')) {
          //   return [
          //     existingPath.replace(
          //       'docs/use-manual/user-manual',
          //       'docs/user-manual'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/quick-start/get-start')) {
          //   return [
          //     existingPath.replace(
          //       'docs/quick-start/get-start',
          //       'docs/get-start'
          //     )
          //   ];
          // }
          // if (existingPath.includes('docs/quick-start/architecture/')) {
          //   return [
          //     existingPath.replace(
          //       'docs/quick-start/architecture/',
          //       'docs/architecture/'
          //     )
          //   ];
          // }
          if (existingPath.includes('docs/expand/practices')) {
            return [
              existingPath.replace('docs/expand/practices', 'docs/practices')
            ];
          }
          if (existingPath.includes('docs/expand/opensource-app')) {
            return [
              existingPath.replace(
                'docs/expand/opensource-app',
                'docs/opensource-app'
              )
            ];
          }
          // 配置组件自动构建部署重新 URL
          if (existingPath.includes('docs/use-manual/component-manage/build-source/auto_build')) {
            return [
              existingPath.replace(
                'docs/use-manual/component-manage/build-source/auto_build',
                'docs/user-manual/component-dev/auto_build'
              )
            ];
          }
          return undefined;
        }
      }
    ],
    'docusaurus-plugin-sass',
    'docusaurus-plugin-image-viewer'
  ]
};

module.exports = config;
