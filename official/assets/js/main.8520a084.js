/*! For license information please see main.8520a084.js.LICENSE.txt */
(self.webpackChunk = self.webpackChunk || []).push([
  [179],
  {
    4644: function (e) {
      "use strict";
      e.exports = {};
    },
    2122: function (e, t, n) {
      "use strict";
      function r() {
        return (r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    3552: function (e, t, n) {
      "use strict";
      function r(e, t) {
        return (r =
          Object.setPrototypeOf ||
          function (e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      function a(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          r(e, t);
      }
      n.d(t, {
        Z: function () {
          return a;
        },
      });
    },
    9756: function (e, t, n) {
      "use strict";
      function r(e, t) {
        if (null == e) return {};
        var n,
          r,
          a = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (a[n] = e[n]);
        return a;
      }
      n.d(t, {
        Z: function () {
          return r;
        },
      });
    },
    9782: function (e, t, n) {
      "use strict";
      n.r(t),
        (t.default = {
          title: "Redux",
          tagline: "A Predictable State Container for JS Apps",
          url: "https://redux.js.org",
          baseUrl: "/",
          favicon: "img/favicon/favicon.ico",
          organizationName: "reduxjs",
          projectName: "redux",
          themeConfig: {
            image: "img/redux-logo-landscape.png",
            metadatas: [{ name: "twitter:card", content: "summary" }],
            prism: {
              theme: {
                plain: { color: "#f8f8f2", backgroundColor: "#272822" },
                styles: [
                  {
                    types: ["comment", "prolog", "doctype", "cdata"],
                    style: { color: "#c6cad2" },
                  },
                  { types: ["punctuation"], style: { color: "#F8F8F2" } },
                  {
                    types: ["property", "tag", "constant", "symbol", "deleted"],
                    style: { color: "#F92672" },
                  },
                  { types: ["boolean", "number"], style: { color: "#AE81FF" } },
                  {
                    types: [
                      "selector",
                      "attr-name",
                      "string",
                      "char",
                      "builtin",
                      "inserted",
                    ],
                    style: { color: "#a6e22e" },
                  },
                  {
                    types: ["operator", "entity", "url", "variable"],
                    style: { color: "#F8F8F2" },
                  },
                  {
                    types: ["atrule", "attr-value", "function"],
                    style: { color: "#E6D874" },
                  },
                  { types: ["keyword"], style: { color: "#F92672" } },
                  {
                    types: ["regex", "important"],
                    style: { color: "#FD971F" },
                  },
                ],
              },
              additionalLanguages: [],
            },
            colorMode: {
              disableSwitch: !1,
              defaultMode: "light",
              respectPrefersColorScheme: !1,
              switchConfig: {
                darkIcon: "\ud83c\udf1c",
                darkIconStyle: {},
                lightIcon: "\ud83c\udf1e",
                lightIconStyle: {},
              },
            },
            navbar: {
              title: "Redux",
              logo: { alt: "Redux Logo", src: "img/redux.svg" },
              items: [
                {
                  label: "Getting Started",
                  to: "introduction/getting-started",
                  position: "right",
                },
                {
                  label: "Tutorial",
                  to: "tutorials/essentials/part-1-overview-concepts",
                  position: "right",
                },
                { label: "API", to: "api/api-reference", position: "right" },
                { label: "FAQ", to: "faq", position: "right" },
                {
                  label: "Best Practices",
                  to: "/style-guide/style-guide",
                  position: "right",
                },
                {
                  label: "GitHub",
                  href: "https://www.github.com/reduxjs/redux",
                  position: "right",
                },
                {
                  label: "Need help?",
                  to: "introduction/getting-started#help-and-discussion",
                  position: "right",
                },
              ],
              hideOnScroll: !1,
            },
            footer: {
              style: "light",
              links: [
                {
                  title: "Docs",
                  items: [
                    {
                      label: "Getting Started",
                      to: "introduction/getting-started",
                    },
                    {
                      label: "Tutorial",
                      to: "tutorials/essentials/part-1-overview-concepts",
                    },
                    { label: "FAQ", to: "faq" },
                    { label: "API Reference", to: "api/api-reference" },
                  ],
                },
                {
                  title: "Community",
                  items: [
                    {
                      label: "Reactiflux Discord",
                      href: "https://discord.gg/0ZcbPKXt5bZ6au5t",
                    },
                    {
                      label: "Stack Overflow",
                      href: "http://stackoverflow.com/questions/tagged/redux",
                    },
                    {
                      label: "Feedback",
                      to: "introduction/getting-started#help-and-discussion",
                    },
                  ],
                },
                {
                  title: "More",
                  items: [
                    {
                      label: "GitHub",
                      href: "https://github.com/reduxjs/redux",
                    },
                    {
                      html: '\n                <a href="https://www.netlify.com">\n                  <img\n                    src="https://www.netlify.com/img/global/badges/netlify-color-accent.svg"\n                    alt="Deploys by Netlify"\n                  />\n                </a>\n              ',
                    },
                  ],
                },
              ],
              logo: {
                alt: "Redux Logo",
                src: "img/redux.svg",
                href: "https://redux.js.org/",
              },
              copyright:
                "Copyright \xa9 2015\u20132021 Dan Abramov and the Redux documentation authors.",
            },
            algolia: {
              apiKey: "518c6e3c629811d8daa1d21dc8bcfa37",
              indexName: "redux",
              algoliaOptions: {},
              contextualSearch: !1,
              appId: "BH4D9OD16A",
              searchParameters: {},
            },
            googleAnalytics: { trackingID: "UA-130598673-1" },
            docs: { versionPersistence: "localStorage" },
            hideableSidebar: !1,
          },
          presets: [
            [
              "@docusaurus/preset-classic",
              {
                docs: {
                  path: "../docs",
                  routeBasePath: "/",
                  sidebarPath: "/opt/build/repo/website/sidebars.js",
                },
                theme: {
                  customCss: "/opt/build/repo/website/src/css/custom.css",
                },
              },
            ],
          ],
          baseUrlIssueBanner: !0,
          i18n: { defaultLocale: "en", locales: ["en"], localeConfigs: {} },
          onBrokenLinks: "throw",
          onBrokenMarkdownLinks: "warn",
          onDuplicateRoutes: "warn",
          customFields: {},
          plugins: [],
          themes: [],
          titleDelimiter: "|",
          noIndex: !1,
        });
    },
    850: function (e, t, n) {
      "use strict";
      var r = n(7294),
        a = n(3935),
        i = n(3727),
        o = n(2203),
        l = n.n(o),
        s = function (e) {
          var t = e.error,
            n = e.retry,
            a = e.pastDelay;
          return t
            ? r.createElement(
                "div",
                {
                  style: {
                    align: "center",
                    color: "#fff",
                    backgroundColor: "#fa383e",
                    borderColor: "#fa383e",
                    borderStyle: "solid",
                    borderRadius: "0.25rem",
                    borderWidth: "1px",
                    boxSizing: "border-box",
                    display: "block",
                    padding: "1rem",
                    flex: "0 0 50%",
                    marginLeft: "25%",
                    marginRight: "25%",
                    marginTop: "5rem",
                    maxWidth: "50%",
                    width: "100%",
                  },
                },
                r.createElement("p", null, t.message),
                r.createElement(
                  "div",
                  null,
                  r.createElement(
                    "button",
                    { type: "button", onClick: n },
                    "Retry"
                  )
                )
              )
            : a
            ? r.createElement(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100vh",
                  },
                },
                r.createElement(
                  "svg",
                  {
                    id: "loader",
                    style: {
                      width: 128,
                      height: 110,
                      position: "absolute",
                      top: "calc(100vh - 64%)",
                    },
                    viewBox: "0 0 45 45",
                    xmlns: "http://www.w3.org/2000/svg",
                    stroke: "#61dafb",
                  },
                  r.createElement(
                    "g",
                    {
                      fill: "none",
                      fillRule: "evenodd",
                      transform: "translate(1 1)",
                      strokeWidth: "2",
                    },
                    r.createElement(
                      "circle",
                      { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                      r.createElement("animate", {
                        attributeName: "r",
                        begin: "1.5s",
                        dur: "3s",
                        values: "6;22",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      r.createElement("animate", {
                        attributeName: "stroke-opacity",
                        begin: "1.5s",
                        dur: "3s",
                        values: "1;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      r.createElement("animate", {
                        attributeName: "stroke-width",
                        begin: "1.5s",
                        dur: "3s",
                        values: "2;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      })
                    ),
                    r.createElement(
                      "circle",
                      { cx: "22", cy: "22", r: "6", strokeOpacity: "0" },
                      r.createElement("animate", {
                        attributeName: "r",
                        begin: "3s",
                        dur: "3s",
                        values: "6;22",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      r.createElement("animate", {
                        attributeName: "stroke-opacity",
                        begin: "3s",
                        dur: "3s",
                        values: "1;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      }),
                      r.createElement("animate", {
                        attributeName: "stroke-width",
                        begin: "3s",
                        dur: "3s",
                        values: "2;0",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      })
                    ),
                    r.createElement(
                      "circle",
                      { cx: "22", cy: "22", r: "8" },
                      r.createElement("animate", {
                        attributeName: "r",
                        begin: "0s",
                        dur: "1.5s",
                        values: "6;1;2;3;4;5;6",
                        calcMode: "linear",
                        repeatCount: "indefinite",
                      })
                    )
                  )
                )
              )
            : null;
        },
        u = JSON.parse(
          '{"/-deb":{"component":"c4f5d8e4","config":"5e9f5e1a"},"/errors-08a":{"component":"c374de48","config":"5e9f5e1a"},"/search-1bb":{"component":"d7026474"},"/-72e":{"component":"1be78505","versionMetadata":"935f2afb"},"/api/api-reference-0cd":{"component":"17896441","content":"41bfb974"},"/api/applymiddleware-bdf":{"component":"17896441","content":"90b8c979"},"/api/bindactioncreators-187":{"component":"17896441","content":"7cb726bf"},"/api/combinereducers-8e5":{"component":"17896441","content":"a5a415a2"},"/api/compose-1b2":{"component":"17896441","content":"24ad1718"},"/api/createstore-498":{"component":"17896441","content":"5a142dc0"},"/api/store-e36":{"component":"17896441","content":"acff2704"},"/faq-fee":{"component":"17896441","content":"b67e346f"},"/faq/actions-845":{"component":"17896441","content":"f1e47877"},"/faq/code-structure-3fe":{"component":"17896441","content":"fab39a19"},"/faq/design-decisions-c35":{"component":"17896441","content":"23b8105f"},"/faq/general-845":{"component":"17896441","content":"18332a75"},"/faq/immutable-data-702":{"component":"17896441","content":"0604ec41"},"/faq/miscellaneous-d9e":{"component":"17896441","content":"0d70b181"},"/faq/organizing-state-e48":{"component":"17896441","content":"6f3ed655"},"/faq/performance-3b1":{"component":"17896441","content":"73514cec"},"/faq/react-redux-e49":{"component":"17896441","content":"a7ea628c"},"/faq/reducers-dbb":{"component":"17896441","content":"97a57d04"},"/faq/store-setup-106":{"component":"17896441","content":"85a2cf2c"},"/introduction/core-concepts-149":{"component":"17896441","content":"53675c58"},"/introduction/ecosystem-19e":{"component":"17896441","content":"8bbeb6cd"},"/introduction/examples-214":{"component":"17896441","content":"e63ccefe"},"/introduction/getting-started-307":{"component":"17896441","content":"5d5abd3d"},"/introduction/installation-011":{"component":"17896441","content":"9cedbede"},"/introduction/learning-resources-6c2":{"component":"17896441","content":"4a989b5d"},"/introduction/README-1a8":{"component":"17896441","content":"cd1a63fa"},"/recipes/code-splitting-68e":{"component":"17896441","content":"7d94cdb2"},"/recipes/computing-derived-data-6f6":{"component":"17896441","content":"fcc2861d"},"/recipes/configuring-your-store-76f":{"component":"17896441","content":"4e97a8e5"},"/recipes/implementing-undo-history-036":{"component":"17896441","content":"8e532af9"},"/recipes/isolating-redux-sub-apps-405":{"component":"17896441","content":"5a81eb9b"},"/recipes/migrating-to-redux-87e":{"component":"17896441","content":"8e4e2783"},"/recipes/recipe-index-c64":{"component":"17896441","content":"6fb1842e"},"/recipes/reducing-boilerplate-9c4":{"component":"17896441","content":"56989e19"},"/recipes/server-rendering-f8e":{"component":"17896441","content":"6d12da77"},"/recipes/structuring-reducers/basic-reducer-structure-3d4":{"component":"17896441","content":"9b9fc3a2"},"/recipes/structuring-reducers/beyond-combinereducers-60b":{"component":"17896441","content":"540d324d"},"/recipes/structuring-reducers/immutable-update-patterns-52d":{"component":"17896441","content":"f65c68cc"},"/recipes/structuring-reducers/initializing-state-b8b":{"component":"17896441","content":"37697993"},"/recipes/structuring-reducers/normalizing-state-shape-373":{"component":"17896441","content":"a7578db5"},"/recipes/structuring-reducers/prerequisite-concepts-2b1":{"component":"17896441","content":"8351d53d"},"/recipes/structuring-reducers/refactoring-reducer-example-88b":{"component":"17896441","content":"db3abe63"},"/recipes/structuring-reducers/reusing-reducer-logic-741":{"component":"17896441","content":"a2902d4d"},"/recipes/structuring-reducers/splitting-reducer-logic-dbb":{"component":"17896441","content":"28a0238b"},"/recipes/structuring-reducers/structuring-reducers-cf4":{"component":"17896441","content":"f1ad62c2"},"/recipes/structuring-reducers/updating-normalized-data-b23":{"component":"17896441","content":"19c44ca4"},"/recipes/structuring-reducers/using-combinereducers-255":{"component":"17896441","content":"740c6f4e"},"/recipes/troubleshooting-f72":{"component":"17896441","content":"53e06a6c"},"/recipes/usage-with-typescript-eb9":{"component":"17896441","content":"b1380c1e"},"/recipes/using-object-spread-operator-53c":{"component":"17896441","content":"94f24d71"},"/recipes/writing-tests-91e":{"component":"17896441","content":"bfd7c810"},"/redux-toolkit/overview-6fa":{"component":"17896441","content":"a885273f"},"/style-guide/style-guide-7ab":{"component":"17896441","content":"8281e42f"},"/tutorials/essentials/part-1-overview-concepts-bb6":{"component":"17896441","content":"b01a8152"},"/tutorials/essentials/part-2-app-structure-79c":{"component":"17896441","content":"eec52e28"},"/tutorials/essentials/part-3-data-flow-9c2":{"component":"17896441","content":"3fb85e0e"},"/tutorials/essentials/part-4-using-data-00f":{"component":"17896441","content":"3573ab49"},"/tutorials/essentials/part-5-async-logic-bc6":{"component":"17896441","content":"1f172ca5"},"/tutorials/essentials/part-6-performance-normalization-b2c":{"component":"17896441","content":"0ee6ee39"},"/tutorials/fundamentals/part-1-overview-18a":{"component":"17896441","content":"1a9771aa"},"/tutorials/fundamentals/part-2-concepts-data-flow-c72":{"component":"17896441","content":"5ab55e80"},"/tutorials/fundamentals/part-3-state-actions-reducers-e1a":{"component":"17896441","content":"11938ad8"},"/tutorials/fundamentals/part-4-store-174":{"component":"17896441","content":"f81b1e43"},"/tutorials/fundamentals/part-5-ui-react-3d5":{"component":"17896441","content":"fa5fc421"},"/tutorials/fundamentals/part-6-async-logic-b7c":{"component":"17896441","content":"052f08fe"},"/tutorials/fundamentals/part-7-standard-patterns-2da":{"component":"17896441","content":"93a592e4"},"/tutorials/fundamentals/part-8-modern-redux-ec4":{"component":"17896441","content":"385bf224"},"/tutorials/index-478":{"component":"17896441","content":"83a94416"},"/tutorials/quick-start-44e":{"component":"17896441","content":"7005c2b0"},"/tutorials/typescript-quick-start-561":{"component":"17896441","content":"0df8a05e"},"/understanding/history-and-design/middleware-3b4":{"component":"17896441","content":"6b7a9c37"},"/understanding/history-and-design/prior-art-0a4":{"component":"17896441","content":"58129a72"},"/understanding/thinking-in-redux/glossary-ba7":{"component":"17896441","content":"a323d880"},"/understanding/thinking-in-redux/motivation-4c0":{"component":"17896441","content":"cc5eedff"},"/understanding/thinking-in-redux/three-principles-17c":{"component":"17896441","content":"29ad7ab1"}}'
        ),
        c = {
          "052f08fe": [
            function () {
              return n.e(5822).then(n.bind(n, 1601));
            },
            "@site/../docs/tutorials/fundamentals/part-6-async-logic.md",
            1601,
          ],
          "0604ec41": [
            function () {
              return n.e(5003).then(n.bind(n, 5026));
            },
            "@site/../docs/faq/ImmutableData.md",
            5026,
          ],
          "0d70b181": [
            function () {
              return n.e(5484).then(n.bind(n, 8549));
            },
            "@site/../docs/faq/Miscellaneous.md",
            8549,
          ],
          "0df8a05e": [
            function () {
              return n.e(7854).then(n.bind(n, 3993));
            },
            "@site/../docs/tutorials/typescript.md",
            3993,
          ],
          "0ee6ee39": [
            function () {
              return n.e(1338).then(n.bind(n, 1717));
            },
            "@site/../docs/tutorials/essentials/part-6-performance-normalization.md",
            1717,
          ],
          "11938ad8": [
            function () {
              return n.e(3005).then(n.bind(n, 5395));
            },
            "@site/../docs/tutorials/fundamentals/part-3-state-actions-reducers.md",
            5395,
          ],
          17896441: [
            function () {
              return Promise.all([n.e(3312), n.e(5486), n.e(7918)]).then(
                n.bind(n, 3852)
              );
            },
            "@theme/DocItem",
            3852,
          ],
          "18332a75": [
            function () {
              return n.e(6050).then(n.bind(n, 162));
            },
            "@site/../docs/faq/General.md",
            162,
          ],
          "19c44ca4": [
            function () {
              return n.e(6653).then(n.bind(n, 3299));
            },
            "@site/../docs/recipes/structuring-reducers/UpdatingNormalizedData.md",
            3299,
          ],
          "1a9771aa": [
            function () {
              return n.e(1800).then(n.bind(n, 6534));
            },
            "@site/../docs/tutorials/fundamentals/part-1-overview.md",
            6534,
          ],
          "1be78505": [
            function () {
              return Promise.all([
                n.e(3312),
                n.e(5486),
                n.e(5888),
                n.e(9514),
              ]).then(n.bind(n, 767));
            },
            "@theme/DocPage",
            767,
          ],
          "1f172ca5": [
            function () {
              return n.e(1025).then(n.bind(n, 6953));
            },
            "@site/../docs/tutorials/essentials/part-5-async-logic.md",
            6953,
          ],
          "23b8105f": [
            function () {
              return n.e(933).then(n.bind(n, 542));
            },
            "@site/../docs/faq/DesignDecisions.md",
            542,
          ],
          "24ad1718": [
            function () {
              return n.e(637).then(n.bind(n, 45));
            },
            "@site/../docs/api/compose.md",
            45,
          ],
          "28a0238b": [
            function () {
              return n.e(3040).then(n.bind(n, 741));
            },
            "@site/../docs/recipes/structuring-reducers/SplittingReducerLogic.md",
            741,
          ],
          "29ad7ab1": [
            function () {
              return n.e(7842).then(n.bind(n, 4192));
            },
            "@site/../docs/understanding/thinking-in-redux/ThreePrinciples.md",
            4192,
          ],
          "3573ab49": [
            function () {
              return n.e(724).then(n.bind(n, 327));
            },
            "@site/../docs/tutorials/essentials/part-4-using-data.md",
            327,
          ],
          37697993: [
            function () {
              return n.e(7174).then(n.bind(n, 8617));
            },
            "@site/../docs/recipes/structuring-reducers/InitializingState.md",
            8617,
          ],
          "385bf224": [
            function () {
              return n.e(580).then(n.bind(n, 2338));
            },
            "@site/../docs/tutorials/fundamentals/part-8-modern-redux.md",
            2338,
          ],
          "3fb85e0e": [
            function () {
              return n.e(3257).then(n.bind(n, 2314));
            },
            "@site/../docs/tutorials/essentials/part-3-data-flow.md",
            2314,
          ],
          "41bfb974": [
            function () {
              return n.e(2043).then(n.bind(n, 4407));
            },
            "@site/../docs/api/README.md",
            4407,
          ],
          "4a989b5d": [
            function () {
              return n.e(2775).then(n.bind(n, 9067));
            },
            "@site/../docs/introduction/LearningResources.md",
            9067,
          ],
          "4e97a8e5": [
            function () {
              return n.e(4697).then(n.bind(n, 3577));
            },
            "@site/../docs/recipes/ConfiguringYourStore.md",
            3577,
          ],
          "53675c58": [
            function () {
              return n.e(2409).then(n.bind(n, 4954));
            },
            "@site/../docs/introduction/CoreConcepts.md",
            4954,
          ],
          "53e06a6c": [
            function () {
              return n.e(2221).then(n.bind(n, 6731));
            },
            "@site/../docs/recipes/Troubleshooting.md",
            6731,
          ],
          "540d324d": [
            function () {
              return n.e(1817).then(n.bind(n, 114));
            },
            "@site/../docs/recipes/structuring-reducers/BeyondCombineReducers.md",
            114,
          ],
          "56989e19": [
            function () {
              return n.e(2903).then(n.bind(n, 7809));
            },
            "@site/../docs/recipes/ReducingBoilerplate.md",
            7809,
          ],
          "58129a72": [
            function () {
              return n.e(4425).then(n.bind(n, 2046));
            },
            "@site/../docs/understanding/history-and-design/PriorArt.md",
            2046,
          ],
          "5a142dc0": [
            function () {
              return n.e(3666).then(n.bind(n, 9787));
            },
            "@site/../docs/api/createStore.md",
            9787,
          ],
          "5a81eb9b": [
            function () {
              return n.e(3875).then(n.bind(n, 9491));
            },
            "@site/../docs/recipes/IsolatingSubapps.md",
            9491,
          ],
          "5ab55e80": [
            function () {
              return n.e(7728).then(n.bind(n, 1720));
            },
            "@site/../docs/tutorials/fundamentals/part-2-concepts-data-flow.md",
            1720,
          ],
          "5d5abd3d": [
            function () {
              return Promise.all([n.e(3312), n.e(532)]).then(n.bind(n, 7536));
            },
            "@site/../docs/introduction/GettingStarted.md",
            7536,
          ],
          "5e9f5e1a": [
            function () {
              return Promise.resolve().then(n.bind(n, 9782));
            },
            "@generated/docusaurus.config",
            9782,
          ],
          "6b7a9c37": [
            function () {
              return n.e(6897).then(n.bind(n, 2623));
            },
            "@site/../docs/understanding/history-and-design/middleware.md",
            2623,
          ],
          "6d12da77": [
            function () {
              return n.e(2402).then(n.bind(n, 7351));
            },
            "@site/../docs/recipes/ServerRendering.md",
            7351,
          ],
          "6f3ed655": [
            function () {
              return n.e(3471).then(n.bind(n, 7853));
            },
            "@site/../docs/faq/OrganizingState.md",
            7853,
          ],
          "6fb1842e": [
            function () {
              return n.e(3348).then(n.bind(n, 6829));
            },
            "@site/../docs/recipes/README.md",
            6829,
          ],
          "7005c2b0": [
            function () {
              return n.e(2565).then(n.bind(n, 8052));
            },
            "@site/../docs/tutorials/quick-start.md",
            8052,
          ],
          "73514cec": [
            function () {
              return n.e(1506).then(n.bind(n, 3147));
            },
            "@site/../docs/faq/Performance.md",
            3147,
          ],
          "740c6f4e": [
            function () {
              return n.e(8401).then(n.bind(n, 7726));
            },
            "@site/../docs/recipes/structuring-reducers/UsingCombineReducers.md",
            7726,
          ],
          "7cb726bf": [
            function () {
              return n.e(3660).then(n.bind(n, 3029));
            },
            "@site/../docs/api/bindActionCreators.md",
            3029,
          ],
          "7d94cdb2": [
            function () {
              return n.e(942).then(n.bind(n, 6196));
            },
            "@site/../docs/recipes/CodeSplitting.md",
            6196,
          ],
          "8281e42f": [
            function () {
              return n.e(2406).then(n.bind(n, 2832));
            },
            "@site/../docs/style-guide/style-guide.md",
            2832,
          ],
          "8351d53d": [
            function () {
              return n.e(5080).then(n.bind(n, 4612));
            },
            "@site/../docs/recipes/structuring-reducers/PrerequisiteConcepts.md",
            4612,
          ],
          "83a94416": [
            function () {
              return Promise.all([n.e(3312), n.e(5266)]).then(n.bind(n, 3059));
            },
            "@site/../docs/tutorials/tutorials-index.md",
            3059,
          ],
          "85a2cf2c": [
            function () {
              return n.e(701).then(n.bind(n, 7777));
            },
            "@site/../docs/faq/StoreSetup.md",
            7777,
          ],
          "8bbeb6cd": [
            function () {
              return n.e(5673).then(n.bind(n, 4767));
            },
            "@site/../docs/introduction/Ecosystem.md",
            4767,
          ],
          "8e4e2783": [
            function () {
              return n.e(6486).then(n.bind(n, 9526));
            },
            "@site/../docs/recipes/MigratingToRedux.md",
            9526,
          ],
          "8e532af9": [
            function () {
              return n.e(5123).then(n.bind(n, 6920));
            },
            "@site/../docs/recipes/ImplementingUndoHistory.md",
            6920,
          ],
          "90b8c979": [
            function () {
              return n.e(6081).then(n.bind(n, 1094));
            },
            "@site/../docs/api/applyMiddleware.md",
            1094,
          ],
          "935f2afb": [
            function () {
              return n.e(53).then(n.t.bind(n, 9054, 19));
            },
            "~docs/default/version-current-metadata-prop-751.json",
            9054,
          ],
          "93a592e4": [
            function () {
              return n.e(2592).then(n.bind(n, 6174));
            },
            "@site/../docs/tutorials/fundamentals/part-7-standard-patterns.md",
            6174,
          ],
          "94f24d71": [
            function () {
              return n.e(622).then(n.bind(n, 9092));
            },
            "@site/../docs/recipes/UsingObjectSpreadOperator.md",
            9092,
          ],
          "97a57d04": [
            function () {
              return n.e(6157).then(n.bind(n, 3884));
            },
            "@site/../docs/faq/Reducers.md",
            3884,
          ],
          "9b9fc3a2": [
            function () {
              return n.e(7433).then(n.bind(n, 7697));
            },
            "@site/../docs/recipes/structuring-reducers/BasicReducerStructure.md",
            7697,
          ],
          "9cedbede": [
            function () {
              return n.e(155).then(n.bind(n, 2041));
            },
            "@site/../docs/introduction/Installation.md",
            2041,
          ],
          a2902d4d: [
            function () {
              return n.e(18).then(n.bind(n, 413));
            },
            "@site/../docs/recipes/structuring-reducers/ReusingReducerLogic.md",
            413,
          ],
          a323d880: [
            function () {
              return n.e(8718).then(n.bind(n, 4218));
            },
            "@site/../docs/understanding/thinking-in-redux/Glossary.md",
            4218,
          ],
          a5a415a2: [
            function () {
              return n.e(5415).then(n.bind(n, 1215));
            },
            "@site/../docs/api/combineReducers.md",
            1215,
          ],
          a7578db5: [
            function () {
              return n.e(1730).then(n.bind(n, 9573));
            },
            "@site/../docs/recipes/structuring-reducers/NormalizingStateShape.md",
            9573,
          ],
          a7ea628c: [
            function () {
              return n.e(5014).then(n.bind(n, 8452));
            },
            "@site/../docs/faq/ReactRedux.md",
            8452,
          ],
          a885273f: [
            function () {
              return n.e(7255).then(n.bind(n, 4911));
            },
            "@site/../docs/redux-toolkit/overview.md",
            4911,
          ],
          acff2704: [
            function () {
              return n.e(8206).then(n.bind(n, 4778));
            },
            "@site/../docs/api/Store.md",
            4778,
          ],
          b01a8152: [
            function () {
              return n.e(5052).then(n.bind(n, 5903));
            },
            "@site/../docs/tutorials/essentials/part-1-overview-concepts.md",
            5903,
          ],
          b1380c1e: [
            function () {
              return n.e(5004).then(n.bind(n, 6284));
            },
            "@site/../docs/recipes/UsageWithTypescript.md",
            6284,
          ],
          b67e346f: [
            function () {
              return n.e(4946).then(n.bind(n, 2185));
            },
            "@site/../docs/FAQ.md",
            2185,
          ],
          bfd7c810: [
            function () {
              return n.e(2826).then(n.bind(n, 60));
            },
            "@site/../docs/recipes/WritingTests.md",
            60,
          ],
          c374de48: [
            function () {
              return Promise.all([
                n.e(3312),
                n.e(5486),
                n.e(5888),
                n.e(2240),
              ]).then(n.bind(n, 7256));
            },
            "@site/src/pages/errors.js",
            7256,
          ],
          c4f5d8e4: [
            function () {
              return Promise.all([
                n.e(3312),
                n.e(5486),
                n.e(5888),
                n.e(4195),
              ]).then(n.bind(n, 2841));
            },
            "@site/src/pages/index.js",
            2841,
          ],
          cc5eedff: [
            function () {
              return n.e(3403).then(n.bind(n, 6446));
            },
            "@site/../docs/understanding/thinking-in-redux/Motivation.md",
            6446,
          ],
          cd1a63fa: [
            function () {
              return n.e(6949).then(n.bind(n, 1772));
            },
            "@site/../docs/introduction/README.md",
            1772,
          ],
          d7026474: [
            function () {
              return Promise.all([
                n.e(3312),
                n.e(5486),
                n.e(5888),
                n.e(4803),
              ]).then(n.bind(n, 9343));
            },
            "/opt/build/repo/website/node_modules/@docusaurus/theme-search-algolia/src/theme/SearchPage/index.js",
            9343,
          ],
          db3abe63: [
            function () {
              return n.e(6400).then(n.bind(n, 9124));
            },
            "@site/../docs/recipes/structuring-reducers/RefactoringReducersExample.md",
            9124,
          ],
          e63ccefe: [
            function () {
              return n.e(5143).then(n.bind(n, 5172));
            },
            "@site/../docs/introduction/Examples.md",
            5172,
          ],
          eec52e28: [
            function () {
              return n.e(5313).then(n.bind(n, 4115));
            },
            "@site/../docs/tutorials/essentials/part-2-app-structure.md",
            4115,
          ],
          f1ad62c2: [
            function () {
              return n.e(1528).then(n.bind(n, 997));
            },
            "@site/../docs/recipes/structuring-reducers/StructuringReducers.md",
            997,
          ],
          f1e47877: [
            function () {
              return n.e(2066).then(n.bind(n, 787));
            },
            "@site/../docs/faq/Actions.md",
            787,
          ],
          f65c68cc: [
            function () {
              return n.e(1435).then(n.bind(n, 5375));
            },
            "@site/../docs/recipes/structuring-reducers/ImmutableUpdatePatterns.md",
            5375,
          ],
          f81b1e43: [
            function () {
              return n.e(4490).then(n.bind(n, 1709));
            },
            "@site/../docs/tutorials/fundamentals/part-4-store.md",
            1709,
          ],
          fa5fc421: [
            function () {
              return n.e(6342).then(n.bind(n, 4431));
            },
            "@site/../docs/tutorials/fundamentals/part-5-ui-and-react.md",
            4431,
          ],
          fab39a19: [
            function () {
              return n.e(3967).then(n.bind(n, 197));
            },
            "@site/../docs/faq/CodeStructure.md",
            197,
          ],
          fcc2861d: [
            function () {
              return n.e(9925).then(n.bind(n, 2406));
            },
            "@site/../docs/recipes/ComputingDerivedData.md",
            2406,
          ],
        };
      var d = function (e) {
        var t = {};
        return (
          (function e(n, r) {
            Object.keys(n).forEach(function (a) {
              var i = n[a],
                o = r ? r + "." + a : a;
              "object" === typeof i && !!i && Object.keys(i).length
                ? e(i, o)
                : (t[o] = i);
            });
          })(e),
          t
        );
      };
      var p = function (e, t) {
          if ("*" === e)
            return l()({
              loading: s,
              loader: function () {
                return Promise.all([
                  n.e(3312),
                  n.e(5486),
                  n.e(5888),
                  n.e(4608),
                ]).then(n.bind(n, 4608));
              },
            });
          var a = u[e + "-" + t],
            i = [],
            o = [],
            p = {},
            f = d(a);
          return (
            Object.keys(f).forEach(function (e) {
              var t = c[f[e]];
              t && ((p[e] = t[0]), i.push(t[1]), o.push(t[2]));
            }),
            l().Map({
              loading: s,
              loader: p,
              modules: i,
              webpack: function () {
                return o;
              },
              render: function (e, t) {
                var n = JSON.parse(JSON.stringify(a));
                Object.keys(e).forEach(function (t) {
                  for (
                    var r = n, a = t.split("."), i = 0;
                    i < a.length - 1;
                    i += 1
                  )
                    r = r[a[i]];
                  r[a[a.length - 1]] = e[t].default;
                  var o = Object.keys(e[t]).filter(function (e) {
                    return "default" !== e;
                  });
                  o &&
                    o.length &&
                    o.forEach(function (n) {
                      r[a[a.length - 1]][n] = e[t][n];
                    });
                });
                var i = n.component;
                return (
                  delete n.component,
                  r.createElement(i, Object.assign({}, n, t))
                );
              },
            })
          );
        },
        f = [
          { path: "/", component: p("/", "deb"), exact: !0 },
          { path: "/errors", component: p("/errors", "08a"), exact: !0 },
          { path: "/search", component: p("/search", "1bb"), exact: !0 },
          {
            path: "/",
            component: p("/", "72e"),
            routes: [
              {
                path: "/api/api-reference",
                component: p("/api/api-reference", "0cd"),
                exact: !0,
              },
              {
                path: "/api/applymiddleware",
                component: p("/api/applymiddleware", "bdf"),
                exact: !0,
              },
              {
                path: "/api/bindactioncreators",
                component: p("/api/bindactioncreators", "187"),
                exact: !0,
              },
              {
                path: "/api/combinereducers",
                component: p("/api/combinereducers", "8e5"),
                exact: !0,
              },
              {
                path: "/api/compose",
                component: p("/api/compose", "1b2"),
                exact: !0,
              },
              {
                path: "/api/createstore",
                component: p("/api/createstore", "498"),
                exact: !0,
              },
              {
                path: "/api/store",
                component: p("/api/store", "e36"),
                exact: !0,
              },
              { path: "/faq", component: p("/faq", "fee"), exact: !0 },
              {
                path: "/faq/actions",
                component: p("/faq/actions", "845"),
                exact: !0,
              },
              {
                path: "/faq/code-structure",
                component: p("/faq/code-structure", "3fe"),
                exact: !0,
              },
              {
                path: "/faq/design-decisions",
                component: p("/faq/design-decisions", "c35"),
                exact: !0,
              },
              {
                path: "/faq/general",
                component: p("/faq/general", "845"),
                exact: !0,
              },
              {
                path: "/faq/immutable-data",
                component: p("/faq/immutable-data", "702"),
                exact: !0,
              },
              {
                path: "/faq/miscellaneous",
                component: p("/faq/miscellaneous", "d9e"),
                exact: !0,
              },
              {
                path: "/faq/organizing-state",
                component: p("/faq/organizing-state", "e48"),
                exact: !0,
              },
              {
                path: "/faq/performance",
                component: p("/faq/performance", "3b1"),
                exact: !0,
              },
              {
                path: "/faq/react-redux",
                component: p("/faq/react-redux", "e49"),
                exact: !0,
              },
              {
                path: "/faq/reducers",
                component: p("/faq/reducers", "dbb"),
                exact: !0,
              },
              {
                path: "/faq/store-setup",
                component: p("/faq/store-setup", "106"),
                exact: !0,
              },
              {
                path: "/introduction/core-concepts",
                component: p("/introduction/core-concepts", "149"),
                exact: !0,
              },
              {
                path: "/introduction/ecosystem",
                component: p("/introduction/ecosystem", "19e"),
                exact: !0,
              },
              {
                path: "/introduction/examples",
                component: p("/introduction/examples", "214"),
                exact: !0,
              },
              {
                path: "/introduction/getting-started",
                component: p("/introduction/getting-started", "307"),
                exact: !0,
              },
              {
                path: "/introduction/installation",
                component: p("/introduction/installation", "011"),
                exact: !0,
              },
              {
                path: "/introduction/learning-resources",
                component: p("/introduction/learning-resources", "6c2"),
                exact: !0,
              },
              {
                path: "/introduction/README",
                component: p("/introduction/README", "1a8"),
                exact: !0,
              },
              {
                path: "/recipes/code-splitting",
                component: p("/recipes/code-splitting", "68e"),
                exact: !0,
              },
              {
                path: "/recipes/computing-derived-data",
                component: p("/recipes/computing-derived-data", "6f6"),
                exact: !0,
              },
              {
                path: "/recipes/configuring-your-store",
                component: p("/recipes/configuring-your-store", "76f"),
                exact: !0,
              },
              {
                path: "/recipes/implementing-undo-history",
                component: p("/recipes/implementing-undo-history", "036"),
                exact: !0,
              },
              {
                path: "/recipes/isolating-redux-sub-apps",
                component: p("/recipes/isolating-redux-sub-apps", "405"),
                exact: !0,
              },
              {
                path: "/recipes/migrating-to-redux",
                component: p("/recipes/migrating-to-redux", "87e"),
                exact: !0,
              },
              {
                path: "/recipes/recipe-index",
                component: p("/recipes/recipe-index", "c64"),
                exact: !0,
              },
              {
                path: "/recipes/reducing-boilerplate",
                component: p("/recipes/reducing-boilerplate", "9c4"),
                exact: !0,
              },
              {
                path: "/recipes/server-rendering",
                component: p("/recipes/server-rendering", "f8e"),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/basic-reducer-structure",
                component: p(
                  "/recipes/structuring-reducers/basic-reducer-structure",
                  "3d4"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/beyond-combinereducers",
                component: p(
                  "/recipes/structuring-reducers/beyond-combinereducers",
                  "60b"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/immutable-update-patterns",
                component: p(
                  "/recipes/structuring-reducers/immutable-update-patterns",
                  "52d"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/initializing-state",
                component: p(
                  "/recipes/structuring-reducers/initializing-state",
                  "b8b"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/normalizing-state-shape",
                component: p(
                  "/recipes/structuring-reducers/normalizing-state-shape",
                  "373"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/prerequisite-concepts",
                component: p(
                  "/recipes/structuring-reducers/prerequisite-concepts",
                  "2b1"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/refactoring-reducer-example",
                component: p(
                  "/recipes/structuring-reducers/refactoring-reducer-example",
                  "88b"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/reusing-reducer-logic",
                component: p(
                  "/recipes/structuring-reducers/reusing-reducer-logic",
                  "741"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/splitting-reducer-logic",
                component: p(
                  "/recipes/structuring-reducers/splitting-reducer-logic",
                  "dbb"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/structuring-reducers",
                component: p(
                  "/recipes/structuring-reducers/structuring-reducers",
                  "cf4"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/updating-normalized-data",
                component: p(
                  "/recipes/structuring-reducers/updating-normalized-data",
                  "b23"
                ),
                exact: !0,
              },
              {
                path: "/recipes/structuring-reducers/using-combinereducers",
                component: p(
                  "/recipes/structuring-reducers/using-combinereducers",
                  "255"
                ),
                exact: !0,
              },
              {
                path: "/recipes/troubleshooting",
                component: p("/recipes/troubleshooting", "f72"),
                exact: !0,
              },
              {
                path: "/recipes/usage-with-typescript",
                component: p("/recipes/usage-with-typescript", "eb9"),
                exact: !0,
              },
              {
                path: "/recipes/using-object-spread-operator",
                component: p("/recipes/using-object-spread-operator", "53c"),
                exact: !0,
              },
              {
                path: "/recipes/writing-tests",
                component: p("/recipes/writing-tests", "91e"),
                exact: !0,
              },
              {
                path: "/redux-toolkit/overview",
                component: p("/redux-toolkit/overview", "6fa"),
                exact: !0,
              },
              {
                path: "/style-guide/style-guide",
                component: p("/style-guide/style-guide", "7ab"),
                exact: !0,
              },
              {
                path: "/tutorials/essentials/part-1-overview-concepts",
                component: p(
                  "/tutorials/essentials/part-1-overview-concepts",
                  "bb6"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/essentials/part-2-app-structure",
                component: p(
                  "/tutorials/essentials/part-2-app-structure",
                  "79c"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/essentials/part-3-data-flow",
                component: p("/tutorials/essentials/part-3-data-flow", "9c2"),
                exact: !0,
              },
              {
                path: "/tutorials/essentials/part-4-using-data",
                component: p("/tutorials/essentials/part-4-using-data", "00f"),
                exact: !0,
              },
              {
                path: "/tutorials/essentials/part-5-async-logic",
                component: p("/tutorials/essentials/part-5-async-logic", "bc6"),
                exact: !0,
              },
              {
                path: "/tutorials/essentials/part-6-performance-normalization",
                component: p(
                  "/tutorials/essentials/part-6-performance-normalization",
                  "b2c"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-1-overview",
                component: p("/tutorials/fundamentals/part-1-overview", "18a"),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-2-concepts-data-flow",
                component: p(
                  "/tutorials/fundamentals/part-2-concepts-data-flow",
                  "c72"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-3-state-actions-reducers",
                component: p(
                  "/tutorials/fundamentals/part-3-state-actions-reducers",
                  "e1a"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-4-store",
                component: p("/tutorials/fundamentals/part-4-store", "174"),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-5-ui-react",
                component: p("/tutorials/fundamentals/part-5-ui-react", "3d5"),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-6-async-logic",
                component: p(
                  "/tutorials/fundamentals/part-6-async-logic",
                  "b7c"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-7-standard-patterns",
                component: p(
                  "/tutorials/fundamentals/part-7-standard-patterns",
                  "2da"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/fundamentals/part-8-modern-redux",
                component: p(
                  "/tutorials/fundamentals/part-8-modern-redux",
                  "ec4"
                ),
                exact: !0,
              },
              {
                path: "/tutorials/index",
                component: p("/tutorials/index", "478"),
                exact: !0,
              },
              {
                path: "/tutorials/quick-start",
                component: p("/tutorials/quick-start", "44e"),
                exact: !0,
              },
              {
                path: "/tutorials/typescript-quick-start",
                component: p("/tutorials/typescript-quick-start", "561"),
                exact: !0,
              },
              {
                path: "/understanding/history-and-design/middleware",
                component: p(
                  "/understanding/history-and-design/middleware",
                  "3b4"
                ),
                exact: !0,
              },
              {
                path: "/understanding/history-and-design/prior-art",
                component: p(
                  "/understanding/history-and-design/prior-art",
                  "0a4"
                ),
                exact: !0,
              },
              {
                path: "/understanding/thinking-in-redux/glossary",
                component: p(
                  "/understanding/thinking-in-redux/glossary",
                  "ba7"
                ),
                exact: !0,
              },
              {
                path: "/understanding/thinking-in-redux/motivation",
                component: p(
                  "/understanding/thinking-in-redux/motivation",
                  "4c0"
                ),
                exact: !0,
              },
              {
                path: "/understanding/thinking-in-redux/three-principles",
                component: p(
                  "/understanding/thinking-in-redux/three-principles",
                  "17c"
                ),
                exact: !0,
              },
            ],
          },
          { path: "*", component: p("*") },
        ],
        m = n(412),
        h = n(9782),
        g = JSON.parse(
          '{"docusaurus-plugin-content-docs":{"default":{"path":"/","versions":[{"name":"current","label":"Next","isLast":true,"path":"/","mainDocId":"introduction/getting-started","docs":[{"id":"api/api-reference","path":"/api/api-reference","sidebar":"docs"},{"id":"api/applymiddleware","path":"/api/applymiddleware","sidebar":"docs"},{"id":"api/bindactioncreators","path":"/api/bindactioncreators","sidebar":"docs"},{"id":"api/combinereducers","path":"/api/combinereducers","sidebar":"docs"},{"id":"api/compose","path":"/api/compose","sidebar":"docs"},{"id":"api/createstore","path":"/api/createstore","sidebar":"docs"},{"id":"api/store","path":"/api/store","sidebar":"docs"},{"id":"faq","path":"/faq","sidebar":"docs"},{"id":"faq/actions","path":"/faq/actions","sidebar":"docs"},{"id":"faq/code-structure","path":"/faq/code-structure","sidebar":"docs"},{"id":"faq/design-decisions","path":"/faq/design-decisions","sidebar":"docs"},{"id":"faq/general","path":"/faq/general","sidebar":"docs"},{"id":"faq/immutable-data","path":"/faq/immutable-data","sidebar":"docs"},{"id":"faq/miscellaneous","path":"/faq/miscellaneous","sidebar":"docs"},{"id":"faq/organizing-state","path":"/faq/organizing-state","sidebar":"docs"},{"id":"faq/performance","path":"/faq/performance","sidebar":"docs"},{"id":"faq/react-redux","path":"/faq/react-redux","sidebar":"docs"},{"id":"faq/reducers","path":"/faq/reducers","sidebar":"docs"},{"id":"faq/store-setup","path":"/faq/store-setup","sidebar":"docs"},{"id":"introduction/core-concepts","path":"/introduction/core-concepts","sidebar":"docs"},{"id":"introduction/ecosystem","path":"/introduction/ecosystem","sidebar":"docs"},{"id":"introduction/examples","path":"/introduction/examples","sidebar":"docs"},{"id":"introduction/getting-started","path":"/introduction/getting-started","sidebar":"docs"},{"id":"introduction/installation","path":"/introduction/installation","sidebar":"docs"},{"id":"introduction/learning-resources","path":"/introduction/learning-resources","sidebar":"docs"},{"id":"introduction/README","path":"/introduction/README"},{"id":"recipes/code-splitting","path":"/recipes/code-splitting","sidebar":"docs"},{"id":"recipes/computing-derived-data","path":"/recipes/computing-derived-data","sidebar":"docs"},{"id":"recipes/configuring-your-store","path":"/recipes/configuring-your-store","sidebar":"docs"},{"id":"recipes/implementing-undo-history","path":"/recipes/implementing-undo-history","sidebar":"docs"},{"id":"recipes/isolating-redux-sub-apps","path":"/recipes/isolating-redux-sub-apps","sidebar":"docs"},{"id":"recipes/migrating-to-redux","path":"/recipes/migrating-to-redux","sidebar":"docs"},{"id":"recipes/recipe-index","path":"/recipes/recipe-index","sidebar":"docs"},{"id":"recipes/reducing-boilerplate","path":"/recipes/reducing-boilerplate","sidebar":"docs"},{"id":"recipes/server-rendering","path":"/recipes/server-rendering","sidebar":"docs"},{"id":"recipes/structuring-reducers/basic-reducer-structure","path":"/recipes/structuring-reducers/basic-reducer-structure","sidebar":"docs"},{"id":"recipes/structuring-reducers/beyond-combinereducers","path":"/recipes/structuring-reducers/beyond-combinereducers","sidebar":"docs"},{"id":"recipes/structuring-reducers/immutable-update-patterns","path":"/recipes/structuring-reducers/immutable-update-patterns","sidebar":"docs"},{"id":"recipes/structuring-reducers/initializing-state","path":"/recipes/structuring-reducers/initializing-state","sidebar":"docs"},{"id":"recipes/structuring-reducers/normalizing-state-shape","path":"/recipes/structuring-reducers/normalizing-state-shape","sidebar":"docs"},{"id":"recipes/structuring-reducers/prerequisite-concepts","path":"/recipes/structuring-reducers/prerequisite-concepts","sidebar":"docs"},{"id":"recipes/structuring-reducers/refactoring-reducer-example","path":"/recipes/structuring-reducers/refactoring-reducer-example","sidebar":"docs"},{"id":"recipes/structuring-reducers/reusing-reducer-logic","path":"/recipes/structuring-reducers/reusing-reducer-logic","sidebar":"docs"},{"id":"recipes/structuring-reducers/splitting-reducer-logic","path":"/recipes/structuring-reducers/splitting-reducer-logic","sidebar":"docs"},{"id":"recipes/structuring-reducers/structuring-reducers","path":"/recipes/structuring-reducers/structuring-reducers","sidebar":"docs"},{"id":"recipes/structuring-reducers/updating-normalized-data","path":"/recipes/structuring-reducers/updating-normalized-data","sidebar":"docs"},{"id":"recipes/structuring-reducers/using-combinereducers","path":"/recipes/structuring-reducers/using-combinereducers","sidebar":"docs"},{"id":"recipes/troubleshooting","path":"/recipes/troubleshooting","sidebar":"docs"},{"id":"recipes/usage-with-typescript","path":"/recipes/usage-with-typescript","sidebar":"docs"},{"id":"recipes/using-object-spread-operator","path":"/recipes/using-object-spread-operator","sidebar":"docs"},{"id":"recipes/writing-tests","path":"/recipes/writing-tests","sidebar":"docs"},{"id":"redux-toolkit/overview","path":"/redux-toolkit/overview","sidebar":"docs"},{"id":"style-guide/style-guide","path":"/style-guide/style-guide","sidebar":"docs"},{"id":"tutorials/essentials/part-1-overview-concepts","path":"/tutorials/essentials/part-1-overview-concepts","sidebar":"docs"},{"id":"tutorials/essentials/part-2-app-structure","path":"/tutorials/essentials/part-2-app-structure","sidebar":"docs"},{"id":"tutorials/essentials/part-3-data-flow","path":"/tutorials/essentials/part-3-data-flow","sidebar":"docs"},{"id":"tutorials/essentials/part-4-using-data","path":"/tutorials/essentials/part-4-using-data","sidebar":"docs"},{"id":"tutorials/essentials/part-5-async-logic","path":"/tutorials/essentials/part-5-async-logic","sidebar":"docs"},{"id":"tutorials/essentials/part-6-performance-normalization","path":"/tutorials/essentials/part-6-performance-normalization","sidebar":"docs"},{"id":"tutorials/fundamentals/part-1-overview","path":"/tutorials/fundamentals/part-1-overview","sidebar":"docs"},{"id":"tutorials/fundamentals/part-2-concepts-data-flow","path":"/tutorials/fundamentals/part-2-concepts-data-flow","sidebar":"docs"},{"id":"tutorials/fundamentals/part-3-state-actions-reducers","path":"/tutorials/fundamentals/part-3-state-actions-reducers","sidebar":"docs"},{"id":"tutorials/fundamentals/part-4-store","path":"/tutorials/fundamentals/part-4-store","sidebar":"docs"},{"id":"tutorials/fundamentals/part-5-ui-react","path":"/tutorials/fundamentals/part-5-ui-react","sidebar":"docs"},{"id":"tutorials/fundamentals/part-6-async-logic","path":"/tutorials/fundamentals/part-6-async-logic","sidebar":"docs"},{"id":"tutorials/fundamentals/part-7-standard-patterns","path":"/tutorials/fundamentals/part-7-standard-patterns","sidebar":"docs"},{"id":"tutorials/fundamentals/part-8-modern-redux","path":"/tutorials/fundamentals/part-8-modern-redux","sidebar":"docs"},{"id":"tutorials/quick-start","path":"/tutorials/quick-start","sidebar":"docs"},{"id":"tutorials/tutorials-index","path":"/tutorials/index","sidebar":"docs"},{"id":"tutorials/typescript-quick-start","path":"/tutorials/typescript-quick-start","sidebar":"docs"},{"id":"understanding/history-and-design/middleware","path":"/understanding/history-and-design/middleware","sidebar":"docs"},{"id":"understanding/history-and-design/prior-art","path":"/understanding/history-and-design/prior-art","sidebar":"docs"},{"id":"understanding/thinking-in-redux/glossary","path":"/understanding/thinking-in-redux/glossary","sidebar":"docs"},{"id":"understanding/thinking-in-redux/motivation","path":"/understanding/thinking-in-redux/motivation","sidebar":"docs"},{"id":"understanding/thinking-in-redux/three-principles","path":"/understanding/thinking-in-redux/three-principles","sidebar":"docs"}]}]}}}'
        ),
        b = JSON.parse(
          '{"defaultLocale":"en","locales":["en"],"currentLocale":"en","localeConfigs":{"en":{"label":"en","direction":"ltr"}}}'
        ),
        y = n(4644),
        v = JSON.parse(
          '{"docusaurusVersion":"2.0.0-beta.0","pluginVersions":{"docusaurus-plugin-content-docs":{"type":"package","name":"@docusaurus/plugin-content-docs","version":"2.0.0-beta.0"},"docusaurus-plugin-content-blog":{"type":"package","name":"@docusaurus/plugin-content-blog","version":"2.0.0-beta.0"},"docusaurus-plugin-content-pages":{"type":"package","name":"@docusaurus/plugin-content-pages","version":"2.0.0-beta.0"},"docusaurus-plugin-google-analytics":{"type":"package","name":"@docusaurus/plugin-google-analytics","version":"2.0.0-beta.0"},"docusaurus-plugin-sitemap":{"type":"package","name":"@docusaurus/plugin-sitemap","version":"2.0.0-beta.0"},"docusaurus-theme-classic":{"type":"package","name":"@docusaurus/theme-classic","version":"2.0.0-beta.0"},"docusaurus-theme-search-algolia":{"type":"package","name":"@docusaurus/theme-search-algolia","version":"2.0.0-beta.0"}}}'
        ),
        w = n(6291),
        k = n(4748),
        S = n(3552),
        E = n(5977),
        x = n(4865),
        T = n.n(x),
        C = [n(7771), n(7771), n(7771), n(5032), n(2497), n(5345), n(2295)];
      function A(e) {
        for (
          var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
          r < t;
          r++
        )
          n[r - 1] = arguments[r];
        C.forEach(function (t) {
          var r,
            a,
            i =
              null !==
                (a =
                  null === (r = null == t ? void 0 : t.default) || void 0 === r
                    ? void 0
                    : r[e]) && void 0 !== a
                ? a
                : t[e];
          i && i.apply(void 0, n);
        });
      }
      var _ = {
          onRouteUpdate: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            A.apply(void 0, ["onRouteUpdate"].concat(t));
          },
          onRouteUpdateDelayed: function () {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
              t[n] = arguments[n];
            A.apply(void 0, ["onRouteUpdateDelayed"].concat(t));
          },
        },
        O = n(8790);
      function R(e, t) {
        var n = (0, O.f)(e, t);
        return Promise.all(
          n.map(function (e) {
            var t = e.route.component;
            if (t && t.preload) return t.preload();
          })
        );
      }
      var P = {};
      var L = function (e) {
        if (P[e.pathname])
          return Object.assign({}, e, { pathname: P[e.pathname] });
        var t = e.pathname || "/";
        return (
          "" === (t = t.trim().replace(/\/index\.html$/, "")) && (t = "/"),
          (P[e.pathname] = t),
          Object.assign({}, e, { pathname: t })
        );
      };
      T().configure({ showSpinner: !1 });
      var N = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).previousLocation = null),
              (n.progressBarTimeout = null),
              (n.state = { nextRouteHasLoaded: !0 }),
              n
            );
          }
          (0, S.Z)(t, e);
          var n = t.prototype;
          return (
            (n.shouldComponentUpdate = function (e, t) {
              var n = this,
                r = e.location !== this.props.location,
                a = this.props,
                i = a.routes,
                o = a.delay,
                l = void 0 === o ? 1e3 : o;
              if (r) {
                var s = L(e.location);
                return (
                  this.startProgressBar(l),
                  (this.previousLocation = L(this.props.location)),
                  this.setState({ nextRouteHasLoaded: !1 }),
                  R(i, s.pathname)
                    .then(function () {
                      _.onRouteUpdate({
                        previousLocation: n.previousLocation,
                        location: s,
                      }),
                        (n.previousLocation = null),
                        n.setState(
                          { nextRouteHasLoaded: !0 },
                          n.stopProgressBar
                        );
                      var e = s.hash;
                      if (e) {
                        var t = decodeURIComponent(e.substring(1)),
                          r = document.getElementById(t);
                        r && r.scrollIntoView();
                      } else window.scrollTo(0, 0);
                    })
                    .catch(function (e) {
                      return console.warn(e);
                    }),
                  !1
                );
              }
              return !!t.nextRouteHasLoaded;
            }),
            (n.clearProgressBarTimeout = function () {
              this.progressBarTimeout &&
                (clearTimeout(this.progressBarTimeout),
                (this.progressBarTimeout = null));
            }),
            (n.startProgressBar = function (e) {
              var t = this;
              this.clearProgressBarTimeout(),
                (this.progressBarTimeout = setTimeout(function () {
                  _.onRouteUpdateDelayed({ location: L(t.props.location) }),
                    T().start();
                }, e));
            }),
            (n.stopProgressBar = function () {
              this.clearProgressBarTimeout(), T().done();
            }),
            (n.render = function () {
              var e = this.props,
                t = e.children,
                n = e.location;
              return r.createElement(E.AW, {
                location: L(n),
                render: function () {
                  return t;
                },
              });
            }),
            t
          );
        })(r.Component),
        I = (0, E.EN)(N),
        D = n(9105),
        F = n(2263),
        M = "docusaurus-base-url-issue-banner-container",
        j = "docusaurus-base-url-issue-banner-suggestion-container",
        B = "__DOCUSAURUS_INSERT_BASEURL_BANNER";
      function z(e) {
        return (
          "\nwindow['" +
          B +
          "'] = true;\n\ndocument.addEventListener('DOMContentLoaded', maybeInsertBanner);\n\nfunction maybeInsertBanner() {\n  var shouldInsert = window['" +
          B +
          "'];\n  shouldInsert && insertBanner();\n}\n\nfunction insertBanner() {\n  var bannerContainer = document.getElementById('" +
          M +
          "');\n  if (!bannerContainer) {\n    return;\n  }\n  var bannerHtml = " +
          JSON.stringify(
            (function (e) {
              return (
                '\n<div id="docusaurus-base-url-issue-banner" style="border: thick solid red; background-color: rgb(255, 230, 179); margin: 20px; padding: 20px; font-size: 20px;">\n   <p style="font-weight: bold; font-size: 30px;">Your Docusaurus site did not load properly.</p>\n   <p>A very common reason is a wrong site <a href="https://docusaurus.io/docs/docusaurus.config.js/#baseurl" style="font-weight: bold;">baseUrl configuration</a>.</p>\n   <p>Current configured baseUrl = <span style="font-weight: bold; color: red;">' +
                e +
                "</span> " +
                ("/" === e ? " (default value)" : "") +
                '</p>\n   <p>We suggest trying baseUrl = <span id="' +
                j +
                '" style="font-weight: bold; color: green;"></span></p>\n</div>\n'
              );
            })(e)
          ).replace(/</g, "\\<") +
          ";\n  bannerContainer.innerHTML = bannerHtml;\n  var suggestionContainer = document.getElementById('" +
          j +
          "');\n  var actualHomePagePath = window.location.pathname;\n  var suggestedBaseUrl = actualHomePagePath.substr(-1) === '/'\n        ? actualHomePagePath\n        : actualHomePagePath + '/';\n  suggestionContainer.innerHTML = suggestedBaseUrl;\n}\n"
        );
      }
      function q() {
        var e = (0, F.default)().siteConfig.baseUrl;
        return (
          (0, r.useLayoutEffect)(function () {
            window[B] = !1;
          }, []),
          r.createElement(
            r.Fragment,
            null,
            !m.Z.canUseDOM &&
              r.createElement(D.Z, null, r.createElement("script", null, z(e))),
            r.createElement("div", { id: M })
          )
        );
      }
      function U() {
        var e = (0, F.default)().siteConfig,
          t = e.baseUrl,
          n = e.baseUrlIssueBanner,
          a = (0, E.TH)().pathname;
        return n && a === t ? r.createElement(q, null) : null;
      }
      var $ = function (e) {
        var t = e.children;
        return r.createElement(r.Fragment, null, t);
      };
      var G = function () {
        var e = (0, r.useState)(!1),
          t = e[0],
          n = e[1];
        return (
          (0, r.useEffect)(function () {
            n(!0);
          }, []),
          r.createElement(
            k.Z.Provider,
            {
              value: {
                siteConfig: h.default,
                siteMetadata: v,
                globalData: g,
                i18n: b,
                codeTranslations: y,
                isClient: t,
              },
            },
            r.createElement(
              $,
              null,
              r.createElement(U, null),
              r.createElement(I, { routes: f }, (0, w.Z)(f))
            )
          )
        );
      };
      var H = (function (e) {
          if ("undefined" == typeof document) return !1;
          var t = document.createElement("link");
          try {
            if (t.relList && "function" == typeof t.relList.supports)
              return t.relList.supports(e);
          } catch (n) {
            return !1;
          }
          return !1;
        })("prefetch")
          ? function (e) {
              return new Promise(function (t, n) {
                if ("undefined" != typeof document) {
                  var r = document.createElement("link");
                  r.setAttribute("rel", "prefetch"),
                    r.setAttribute("href", e),
                    (r.onload = t),
                    (r.onerror = n),
                    (
                      document.getElementsByTagName("head")[0] ||
                      document.getElementsByName("script")[0].parentNode
                    ).appendChild(r);
                } else n();
              });
            }
          : function (e) {
              return new Promise(function (t, n) {
                var r = new XMLHttpRequest();
                r.open("GET", e, !0),
                  (r.withCredentials = !0),
                  (r.onload = function () {
                    200 === r.status ? t() : n();
                  }),
                  r.send(null);
              });
            },
        W = {};
      var V = function (e) {
          return new Promise(function (t) {
            W[e]
              ? t()
              : H(e)
                  .then(function () {
                    t(), (W[e] = !0);
                  })
                  .catch(function () {});
          });
        },
        Z = {},
        Y = {},
        K = function () {
          return !(
            !("connection" in navigator) ||
            -1 === (navigator.connection.effectiveType || "").indexOf("2g") ||
            !navigator.connection.saveData
          );
        },
        Q = function (e) {
          return Array.prototype.concat.apply([], e);
        },
        X = {
          prefetch: function (e) {
            if (
              !(function (e) {
                return !K() && !Y[e] && !Z[e];
              })(e)
            )
              return !1;
            Z[e] = !0;
            var t = (0, O.f)(f, e);
            return (
              Q(
                t.map(function (e) {
                  return (
                    (t = e.route.path),
                    Q(
                      Object.entries(u)
                        .filter(function (e) {
                          return e[0].replace(/(-[^-]+)$/, "") === t;
                        })
                        .map(function (e) {
                          var t = e[1];
                          return Object.values(d(t));
                        })
                    )
                  );
                  var t;
                })
              ).forEach(function (e) {
                var t = n.gca(e);
                t && !/undefined/.test(t) && V(t);
              }),
              !0
            );
          },
          preload: function (e) {
            return (
              !!(function (e) {
                return !K() && !Y[e];
              })(e) && ((Y[e] = !0), R(f, e), !0)
            );
          },
        };
      if (m.Z.canUseDOM) {
        window.docusaurus = X;
        var J = a.hydrate;
        R(f, window.location.pathname).then(function () {
          J(
            r.createElement(i.VK, null, r.createElement(G, null)),
            document.getElementById("__docusaurus")
          );
        });
      }
    },
    412: function (e, t) {
      "use strict";
      var n = !(
          "undefined" == typeof window ||
          !window.document ||
          !window.document.createElement
        ),
        r = {
          canUseDOM: n,
          canUseEventListeners:
            n && !(!window.addEventListener && !window.attachEvent),
          canUseIntersectionObserver: n && "IntersectionObserver" in window,
          canUseViewport: n && !!window.screen,
        };
      t.Z = r;
    },
    9105: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return ge;
        },
      });
      var r,
        a,
        i,
        o,
        l = n(7294),
        s = n(5697),
        u = n.n(s),
        c = n(3524),
        d = n.n(c),
        p = n(9590),
        f = n.n(p),
        m = n(7418),
        h = n.n(m),
        g = "bodyAttributes",
        b = "htmlAttributes",
        y = "titleAttributes",
        v = {
          BASE: "base",
          BODY: "body",
          HEAD: "head",
          HTML: "html",
          LINK: "link",
          META: "meta",
          NOSCRIPT: "noscript",
          SCRIPT: "script",
          STYLE: "style",
          TITLE: "title",
        },
        w =
          (Object.keys(v).map(function (e) {
            return v[e];
          }),
          "charset"),
        k = "cssText",
        S = "href",
        E = "http-equiv",
        x = "innerHTML",
        T = "itemprop",
        C = "name",
        A = "property",
        _ = "rel",
        O = "src",
        R = "target",
        P = {
          accesskey: "accessKey",
          charset: "charSet",
          class: "className",
          contenteditable: "contentEditable",
          contextmenu: "contextMenu",
          "http-equiv": "httpEquiv",
          itemprop: "itemProp",
          tabindex: "tabIndex",
        },
        L = "defaultTitle",
        N = "defer",
        I = "encodeSpecialCharacters",
        D = "onChangeClientState",
        F = "titleTemplate",
        M = Object.keys(P).reduce(function (e, t) {
          return (e[P[t]] = t), e;
        }, {}),
        j = [v.NOSCRIPT, v.SCRIPT, v.STYLE],
        B = "data-react-helmet",
        z =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        q = function (e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function");
        },
        U = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        $ =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        G = function (e, t) {
          var n = {};
          for (var r in e)
            t.indexOf(r) >= 0 ||
              (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
          return n;
        },
        H = function (e, t) {
          if (!e)
            throw new ReferenceError(
              "this hasn't been initialised - super() hasn't been called"
            );
          return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
        },
        W = function (e) {
          var t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return !1 === t
            ? String(e)
            : String(e)
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#x27;");
        },
        V = function (e) {
          var t = X(e, v.TITLE),
            n = X(e, F);
          if (n && t)
            return n.replace(/%s/g, function () {
              return Array.isArray(t) ? t.join("") : t;
            });
          var r = X(e, L);
          return t || r || void 0;
        },
        Z = function (e) {
          return X(e, D) || function () {};
        },
        Y = function (e, t) {
          return t
            .filter(function (t) {
              return void 0 !== t[e];
            })
            .map(function (t) {
              return t[e];
            })
            .reduce(function (e, t) {
              return $({}, e, t);
            }, {});
        },
        K = function (e, t) {
          return t
            .filter(function (e) {
              return void 0 !== e[v.BASE];
            })
            .map(function (e) {
              return e[v.BASE];
            })
            .reverse()
            .reduce(function (t, n) {
              if (!t.length)
                for (var r = Object.keys(n), a = 0; a < r.length; a++) {
                  var i = r[a].toLowerCase();
                  if (-1 !== e.indexOf(i) && n[i]) return t.concat(n);
                }
              return t;
            }, []);
        },
        Q = function (e, t, n) {
          var r = {};
          return n
            .filter(function (t) {
              return (
                !!Array.isArray(t[e]) ||
                (void 0 !== t[e] &&
                  re(
                    "Helmet: " +
                      e +
                      ' should be of type "Array". Instead found type "' +
                      z(t[e]) +
                      '"'
                  ),
                !1)
              );
            })
            .map(function (t) {
              return t[e];
            })
            .reverse()
            .reduce(function (e, n) {
              var a = {};
              n.filter(function (e) {
                for (
                  var n = void 0, i = Object.keys(e), o = 0;
                  o < i.length;
                  o++
                ) {
                  var l = i[o],
                    s = l.toLowerCase();
                  -1 === t.indexOf(s) ||
                    (n === _ && "canonical" === e[n].toLowerCase()) ||
                    (s === _ && "stylesheet" === e[s].toLowerCase()) ||
                    (n = s),
                    -1 === t.indexOf(l) ||
                      (l !== x && l !== k && l !== T) ||
                      (n = l);
                }
                if (!n || !e[n]) return !1;
                var u = e[n].toLowerCase();
                return (
                  r[n] || (r[n] = {}),
                  a[n] || (a[n] = {}),
                  !r[n][u] && ((a[n][u] = !0), !0)
                );
              })
                .reverse()
                .forEach(function (t) {
                  return e.push(t);
                });
              for (var i = Object.keys(a), o = 0; o < i.length; o++) {
                var l = i[o],
                  s = h()({}, r[l], a[l]);
                r[l] = s;
              }
              return e;
            }, [])
            .reverse();
        },
        X = function (e, t) {
          for (var n = e.length - 1; n >= 0; n--) {
            var r = e[n];
            if (r.hasOwnProperty(t)) return r[t];
          }
          return null;
        },
        J =
          ((r = Date.now()),
          function (e) {
            var t = Date.now();
            t - r > 16
              ? ((r = t), e(t))
              : setTimeout(function () {
                  J(e);
                }, 0);
          }),
        ee = function (e) {
          return clearTimeout(e);
        },
        te =
          "undefined" != typeof window
            ? (window.requestAnimationFrame &&
                window.requestAnimationFrame.bind(window)) ||
              window.webkitRequestAnimationFrame ||
              window.mozRequestAnimationFrame ||
              J
            : n.g.requestAnimationFrame || J,
        ne =
          "undefined" != typeof window
            ? window.cancelAnimationFrame ||
              window.webkitCancelAnimationFrame ||
              window.mozCancelAnimationFrame ||
              ee
            : n.g.cancelAnimationFrame || ee,
        re = function (e) {
          return (
            console && "function" == typeof console.warn && console.warn(e)
          );
        },
        ae = null,
        ie = function (e, t) {
          var n = e.baseTag,
            r = e.bodyAttributes,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.onChangeClientState,
            u = e.scriptTags,
            c = e.styleTags,
            d = e.title,
            p = e.titleAttributes;
          se(v.BODY, r), se(v.HTML, a), le(d, p);
          var f = {
              baseTag: ue(v.BASE, n),
              linkTags: ue(v.LINK, i),
              metaTags: ue(v.META, o),
              noscriptTags: ue(v.NOSCRIPT, l),
              scriptTags: ue(v.SCRIPT, u),
              styleTags: ue(v.STYLE, c),
            },
            m = {},
            h = {};
          Object.keys(f).forEach(function (e) {
            var t = f[e],
              n = t.newTags,
              r = t.oldTags;
            n.length && (m[e] = n), r.length && (h[e] = f[e].oldTags);
          }),
            t && t(),
            s(e, m, h);
        },
        oe = function (e) {
          return Array.isArray(e) ? e.join("") : e;
        },
        le = function (e, t) {
          void 0 !== e && document.title !== e && (document.title = oe(e)),
            se(v.TITLE, t);
        },
        se = function (e, t) {
          var n = document.getElementsByTagName(e)[0];
          if (n) {
            for (
              var r = n.getAttribute(B),
                a = r ? r.split(",") : [],
                i = [].concat(a),
                o = Object.keys(t),
                l = 0;
              l < o.length;
              l++
            ) {
              var s = o[l],
                u = t[s] || "";
              n.getAttribute(s) !== u && n.setAttribute(s, u),
                -1 === a.indexOf(s) && a.push(s);
              var c = i.indexOf(s);
              -1 !== c && i.splice(c, 1);
            }
            for (var d = i.length - 1; d >= 0; d--) n.removeAttribute(i[d]);
            a.length === i.length
              ? n.removeAttribute(B)
              : n.getAttribute(B) !== o.join(",") &&
                n.setAttribute(B, o.join(","));
          }
        },
        ue = function (e, t) {
          var n = document.head || document.querySelector(v.HEAD),
            r = n.querySelectorAll(e + "[" + "data-react-helmet]"),
            a = Array.prototype.slice.call(r),
            i = [],
            o = void 0;
          return (
            t &&
              t.length &&
              t.forEach(function (t) {
                var n = document.createElement(e);
                for (var r in t)
                  if (t.hasOwnProperty(r))
                    if (r === x) n.innerHTML = t.innerHTML;
                    else if (r === k)
                      n.styleSheet
                        ? (n.styleSheet.cssText = t.cssText)
                        : n.appendChild(document.createTextNode(t.cssText));
                    else {
                      var l = void 0 === t[r] ? "" : t[r];
                      n.setAttribute(r, l);
                    }
                n.setAttribute(B, "true"),
                  a.some(function (e, t) {
                    return (o = t), n.isEqualNode(e);
                  })
                    ? a.splice(o, 1)
                    : i.push(n);
              }),
            a.forEach(function (e) {
              return e.parentNode.removeChild(e);
            }),
            i.forEach(function (e) {
              return n.appendChild(e);
            }),
            { oldTags: a, newTags: i }
          );
        },
        ce = function (e) {
          return Object.keys(e).reduce(function (t, n) {
            var r = void 0 !== e[n] ? n + '="' + e[n] + '"' : "" + n;
            return t ? t + " " + r : r;
          }, "");
        },
        de = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          return Object.keys(e).reduce(function (t, n) {
            return (t[P[n] || n] = e[n]), t;
          }, t);
        },
        pe = function (e, t, n) {
          switch (e) {
            case v.TITLE:
              return {
                toComponent: function () {
                  return (
                    (e = t.title),
                    (n = t.titleAttributes),
                    ((r = { key: e })[B] = !0),
                    (a = de(n, r)),
                    [l.createElement(v.TITLE, a, e)]
                  );
                  var e, n, r, a;
                },
                toString: function () {
                  return (function (e, t, n, r) {
                    var a = ce(n),
                      i = oe(t);
                    return a
                      ? "<" +
                          e +
                          ' data-react-helmet="true" ' +
                          a +
                          ">" +
                          W(i, r) +
                          "</" +
                          e +
                          ">"
                      : "<" +
                          e +
                          ' data-react-helmet="true">' +
                          W(i, r) +
                          "</" +
                          e +
                          ">";
                  })(e, t.title, t.titleAttributes, n);
                },
              };
            case g:
            case b:
              return {
                toComponent: function () {
                  return de(t);
                },
                toString: function () {
                  return ce(t);
                },
              };
            default:
              return {
                toComponent: function () {
                  return (function (e, t) {
                    return t.map(function (t, n) {
                      var r,
                        a = (((r = { key: n })[B] = !0), r);
                      return (
                        Object.keys(t).forEach(function (e) {
                          var n = P[e] || e;
                          if (n === x || n === k) {
                            var r = t.innerHTML || t.cssText;
                            a.dangerouslySetInnerHTML = { __html: r };
                          } else a[n] = t[e];
                        }),
                        l.createElement(e, a)
                      );
                    });
                  })(e, t);
                },
                toString: function () {
                  return (function (e, t, n) {
                    return t.reduce(function (t, r) {
                      var a = Object.keys(r)
                          .filter(function (e) {
                            return !(e === x || e === k);
                          })
                          .reduce(function (e, t) {
                            var a =
                              void 0 === r[t] ? t : t + '="' + W(r[t], n) + '"';
                            return e ? e + " " + a : a;
                          }, ""),
                        i = r.innerHTML || r.cssText || "",
                        o = -1 === j.indexOf(e);
                      return (
                        t +
                        "<" +
                        e +
                        ' data-react-helmet="true" ' +
                        a +
                        (o ? "/>" : ">" + i + "</" + e + ">")
                      );
                    }, "");
                  })(e, t, n);
                },
              };
          }
        },
        fe = function (e) {
          var t = e.baseTag,
            n = e.bodyAttributes,
            r = e.encode,
            a = e.htmlAttributes,
            i = e.linkTags,
            o = e.metaTags,
            l = e.noscriptTags,
            s = e.scriptTags,
            u = e.styleTags,
            c = e.title,
            d = void 0 === c ? "" : c,
            p = e.titleAttributes;
          return {
            base: pe(v.BASE, t, r),
            bodyAttributes: pe(g, n, r),
            htmlAttributes: pe(b, a, r),
            link: pe(v.LINK, i, r),
            meta: pe(v.META, o, r),
            noscript: pe(v.NOSCRIPT, l, r),
            script: pe(v.SCRIPT, s, r),
            style: pe(v.STYLE, u, r),
            title: pe(v.TITLE, { title: d, titleAttributes: p }, r),
          };
        },
        me = d()(
          function (e) {
            return {
              baseTag: K([S, R], e),
              bodyAttributes: Y(g, e),
              defer: X(e, N),
              encode: X(e, I),
              htmlAttributes: Y(b, e),
              linkTags: Q(v.LINK, [_, S], e),
              metaTags: Q(v.META, [C, w, E, A, T], e),
              noscriptTags: Q(v.NOSCRIPT, [x], e),
              onChangeClientState: Z(e),
              scriptTags: Q(v.SCRIPT, [O, x], e),
              styleTags: Q(v.STYLE, [k], e),
              title: V(e),
              titleAttributes: Y(y, e),
            };
          },
          function (e) {
            ae && ne(ae),
              e.defer
                ? (ae = te(function () {
                    ie(e, function () {
                      ae = null;
                    });
                  }))
                : (ie(e), (ae = null));
          },
          fe
        )(function () {
          return null;
        }),
        he =
          ((a = me),
          (o = i =
            (function (e) {
              function t() {
                return q(this, t), H(this, e.apply(this, arguments));
              }
              return (
                (function (e, t) {
                  if ("function" != typeof t && null !== t)
                    throw new TypeError(
                      "Super expression must either be null or a function, not " +
                        typeof t
                    );
                  (e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                      value: e,
                      enumerable: !1,
                      writable: !0,
                      configurable: !0,
                    },
                  })),
                    t &&
                      (Object.setPrototypeOf
                        ? Object.setPrototypeOf(e, t)
                        : (e.__proto__ = t));
                })(t, e),
                (t.prototype.shouldComponentUpdate = function (e) {
                  return !f()(this.props, e);
                }),
                (t.prototype.mapNestedChildrenToProps = function (e, t) {
                  if (!t) return null;
                  switch (e.type) {
                    case v.SCRIPT:
                    case v.NOSCRIPT:
                      return { innerHTML: t };
                    case v.STYLE:
                      return { cssText: t };
                  }
                  throw new Error(
                    "<" +
                      e.type +
                      " /> elements are self-closing and can not contain children. Refer to our API for more information."
                  );
                }),
                (t.prototype.flattenArrayTypeChildren = function (e) {
                  var t,
                    n = e.child,
                    r = e.arrayTypeChildren,
                    a = e.newChildProps,
                    i = e.nestedChildren;
                  return $(
                    {},
                    r,
                    (((t = {})[n.type] = [].concat(r[n.type] || [], [
                      $({}, a, this.mapNestedChildrenToProps(n, i)),
                    ])),
                    t)
                  );
                }),
                (t.prototype.mapObjectTypeChildren = function (e) {
                  var t,
                    n,
                    r = e.child,
                    a = e.newProps,
                    i = e.newChildProps,
                    o = e.nestedChildren;
                  switch (r.type) {
                    case v.TITLE:
                      return $(
                        {},
                        a,
                        (((t = {})[r.type] = o),
                        (t.titleAttributes = $({}, i)),
                        t)
                      );
                    case v.BODY:
                      return $({}, a, { bodyAttributes: $({}, i) });
                    case v.HTML:
                      return $({}, a, { htmlAttributes: $({}, i) });
                  }
                  return $({}, a, (((n = {})[r.type] = $({}, i)), n));
                }),
                (t.prototype.mapArrayTypeChildrenToProps = function (e, t) {
                  var n = $({}, t);
                  return (
                    Object.keys(e).forEach(function (t) {
                      var r;
                      n = $({}, n, (((r = {})[t] = e[t]), r));
                    }),
                    n
                  );
                }),
                (t.prototype.warnOnInvalidChildren = function (e, t) {
                  return !0;
                }),
                (t.prototype.mapChildrenToProps = function (e, t) {
                  var n = this,
                    r = {};
                  return (
                    l.Children.forEach(e, function (e) {
                      if (e && e.props) {
                        var a = e.props,
                          i = a.children,
                          o = (function (e) {
                            var t =
                              arguments.length > 1 && void 0 !== arguments[1]
                                ? arguments[1]
                                : {};
                            return Object.keys(e).reduce(function (t, n) {
                              return (t[M[n] || n] = e[n]), t;
                            }, t);
                          })(G(a, ["children"]));
                        switch ((n.warnOnInvalidChildren(e, i), e.type)) {
                          case v.LINK:
                          case v.META:
                          case v.NOSCRIPT:
                          case v.SCRIPT:
                          case v.STYLE:
                            r = n.flattenArrayTypeChildren({
                              child: e,
                              arrayTypeChildren: r,
                              newChildProps: o,
                              nestedChildren: i,
                            });
                            break;
                          default:
                            t = n.mapObjectTypeChildren({
                              child: e,
                              newProps: t,
                              newChildProps: o,
                              nestedChildren: i,
                            });
                        }
                      }
                    }),
                    (t = this.mapArrayTypeChildrenToProps(r, t))
                  );
                }),
                (t.prototype.render = function () {
                  var e = this.props,
                    t = e.children,
                    n = G(e, ["children"]),
                    r = $({}, n);
                  return (
                    t && (r = this.mapChildrenToProps(t, r)),
                    l.createElement(a, r)
                  );
                }),
                U(t, null, [
                  {
                    key: "canUseDOM",
                    set: function (e) {
                      a.canUseDOM = e;
                    },
                  },
                ]),
                t
              );
            })(l.Component)),
          (i.propTypes = {
            base: u().object,
            bodyAttributes: u().object,
            children: u().oneOfType([u().arrayOf(u().node), u().node]),
            defaultTitle: u().string,
            defer: u().bool,
            encodeSpecialCharacters: u().bool,
            htmlAttributes: u().object,
            link: u().arrayOf(u().object),
            meta: u().arrayOf(u().object),
            noscript: u().arrayOf(u().object),
            onChangeClientState: u().func,
            script: u().arrayOf(u().object),
            style: u().arrayOf(u().object),
            title: u().string,
            titleAttributes: u().object,
            titleTemplate: u().string,
          }),
          (i.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
          (i.peek = a.peek),
          (i.rewind = function () {
            var e = a.rewind();
            return (
              e ||
                (e = fe({
                  baseTag: [],
                  bodyAttributes: {},
                  encodeSpecialCharacters: !0,
                  htmlAttributes: {},
                  linkTags: [],
                  metaTags: [],
                  noscriptTags: [],
                  scriptTags: [],
                  styleTags: [],
                  title: "",
                  titleAttributes: {},
                })),
              e
            );
          }),
          o);
      he.renderStatic = he.rewind;
      var ge = function (e) {
        return l.createElement(he, Object.assign({}, e));
      };
    },
    4748: function (e, t, n) {
      "use strict";
      var r = n(7294);
      t.Z = r.createContext(null);
    },
    6291: function (e, t, n) {
      "use strict";
      var r = n(8790);
      t.Z = r.H;
    },
    2263: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(7294),
        a = n(4748);
      t.default = function () {
        var e = (0, r.useContext)(a.Z);
        if (null === e) throw new Error("Docusaurus context not provided");
        return e;
      };
    },
    5032: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(412);
      t.default = r.Z.canUseDOM
        ? {
            onRouteUpdate: function (e) {
              var t = e.location;
              window.ga("set", "page", t.pathname),
                window.ga("send", "pageview");
            },
          }
        : null;
    },
    2203: function (e, t, n) {
      "use strict";
      function r(e, t) {
        (e.prototype = Object.create(t.prototype)),
          (e.prototype.constructor = e),
          (e.__proto__ = t);
      }
      function a(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function i(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      function o() {
        return (o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          }).apply(this, arguments);
      }
      var l = n(7294),
        s = n(5697),
        u = [],
        c = [];
      function d(e) {
        var t = e(),
          n = { loading: !0, loaded: null, error: null };
        return (
          (n.promise = t
            .then(function (e) {
              return (n.loading = !1), (n.loaded = e), e;
            })
            .catch(function (e) {
              throw ((n.loading = !1), (n.error = e), e);
            })),
          n
        );
      }
      function p(e) {
        var t = { loading: !1, loaded: {}, error: null },
          n = [];
        try {
          Object.keys(e).forEach(function (r) {
            var a = d(e[r]);
            a.loading
              ? (t.loading = !0)
              : ((t.loaded[r] = a.loaded), (t.error = a.error)),
              n.push(a.promise),
              a.promise
                .then(function (e) {
                  t.loaded[r] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (r) {
          t.error = r;
        }
        return (
          (t.promise = Promise.all(n)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function f(e, t) {
        return l.createElement((n = e) && n.__esModule ? n.default : n, t);
        var n;
      }
      function m(e, t) {
        var d, p;
        if (!t.loading)
          throw new Error("react-loadable requires a `loading` component");
        var m = o(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: f,
              webpack: null,
              modules: null,
            },
            t
          ),
          h = null;
        function g() {
          return h || (h = e(m.loader)), h.promise;
        }
        return (
          u.push(g),
          "function" == typeof m.webpack &&
            c.push(function () {
              if (
                (0, m.webpack)().every(function (e) {
                  return void 0 !== e && void 0 !== n.m[e];
                })
              )
                return g();
            }),
          (p = d =
            (function (t) {
              function n(n) {
                var r;
                return (
                  i(a(a((r = t.call(this, n) || this))), "retry", function () {
                    r.setState({ error: null, loading: !0, timedOut: !1 }),
                      (h = e(m.loader)),
                      r._loadModule();
                  }),
                  g(),
                  (r.state = {
                    error: h.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: h.loading,
                    loaded: h.loaded,
                  }),
                  r
                );
              }
              r(n, t),
                (n.preload = function () {
                  return g();
                });
              var o = n.prototype;
              return (
                (o.UNSAFE_componentWillMount = function () {
                  this._loadModule();
                }),
                (o.componentDidMount = function () {
                  this._mounted = !0;
                }),
                (o._loadModule = function () {
                  var e = this;
                  if (
                    (this.context.loadable &&
                      Array.isArray(m.modules) &&
                      m.modules.forEach(function (t) {
                        e.context.loadable.report(t);
                      }),
                    h.loading)
                  ) {
                    var t = function (t) {
                      e._mounted && e.setState(t);
                    };
                    "number" == typeof m.delay &&
                      (0 === m.delay
                        ? this.setState({ pastDelay: !0 })
                        : (this._delay = setTimeout(function () {
                            t({ pastDelay: !0 });
                          }, m.delay))),
                      "number" == typeof m.timeout &&
                        (this._timeout = setTimeout(function () {
                          t({ timedOut: !0 });
                        }, m.timeout));
                    var n = function () {
                      t({
                        error: h.error,
                        loaded: h.loaded,
                        loading: h.loading,
                      }),
                        e._clearTimeouts();
                    };
                    h.promise
                      .then(function () {
                        return n(), null;
                      })
                      .catch(function (e) {
                        return n(), null;
                      });
                  }
                }),
                (o.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (o._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (o.render = function () {
                  return this.state.loading || this.state.error
                    ? l.createElement(m.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                        retry: this.retry,
                      })
                    : this.state.loaded
                    ? m.render(this.state.loaded, this.props)
                    : null;
                }),
                n
              );
            })(l.Component)),
          i(d, "contextTypes", {
            loadable: s.shape({ report: s.func.isRequired }),
          }),
          p
        );
      }
      function h(e) {
        return m(d, e);
      }
      h.Map = function (e) {
        if ("function" != typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return m(p, e);
      };
      var g = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        r(t, e);
        var n = t.prototype;
        return (
          (n.getChildContext = function () {
            return { loadable: { report: this.props.report } };
          }),
          (n.render = function () {
            return l.Children.only(this.props.children);
          }),
          t
        );
      })(l.Component);
      function b(e) {
        for (var t = []; e.length; ) {
          var n = e.pop();
          t.push(n());
        }
        return Promise.all(t).then(function () {
          if (e.length) return b(e);
        });
      }
      i(g, "propTypes", { report: s.func.isRequired }),
        i(g, "childContextTypes", {
          loadable: s.shape({ report: s.func.isRequired }).isRequired,
        }),
        (h.Capture = g),
        (h.preloadAll = function () {
          return new Promise(function (e, t) {
            b(u).then(e, t);
          });
        }),
        (h.preloadReady = function () {
          return new Promise(function (e, t) {
            b(c).then(e, e);
          });
        }),
        (e.exports = h);
    },
    5345: function (e, t, n) {
      "use strict";
      n.r(t);
      var r = n(7410),
        a = n(412),
        i = n(9782);
      (function (e) {
        if (a.Z.canUseDOM) {
          var t = i.default.themeConfig.prism,
            r = (t = void 0 === t ? {} : t).additionalLanguages,
            o = void 0 === r ? [] : r;
          (window.Prism = e),
            o.forEach(function (e) {
              n(6500)("./prism-" + e);
            }),
            delete window.Prism;
        }
      })(r.Z);
    },
    71: function (e, t, n) {
      "use strict";
      n.d(t, {
        lX: function () {
          return E;
        },
        q_: function () {
          return O;
        },
        ob: function () {
          return h;
        },
        PP: function () {
          return P;
        },
        Ep: function () {
          return m;
        },
        Hp: function () {
          return g;
        },
      });
      var r = n(2122);
      function a(e) {
        return "/" === e.charAt(0);
      }
      function i(e, t) {
        for (var n = t, r = n + 1, a = e.length; r < a; n += 1, r += 1)
          e[n] = e[r];
        e.pop();
      }
      var o = function (e, t) {
        void 0 === t && (t = "");
        var n,
          r = (e && e.split("/")) || [],
          o = (t && t.split("/")) || [],
          l = e && a(e),
          s = t && a(t),
          u = l || s;
        if (
          (e && a(e) ? (o = r) : r.length && (o.pop(), (o = o.concat(r))),
          !o.length)
        )
          return "/";
        if (o.length) {
          var c = o[o.length - 1];
          n = "." === c || ".." === c || "" === c;
        } else n = !1;
        for (var d = 0, p = o.length; p >= 0; p--) {
          var f = o[p];
          "." === f
            ? i(o, p)
            : ".." === f
            ? (i(o, p), d++)
            : d && (i(o, p), d--);
        }
        if (!u) for (; d--; d) o.unshift("..");
        !u || "" === o[0] || (o[0] && a(o[0])) || o.unshift("");
        var m = o.join("/");
        return n && "/" !== m.substr(-1) && (m += "/"), m;
      };
      function l(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      var s = function e(t, n) {
          if (t === n) return !0;
          if (null == t || null == n) return !1;
          if (Array.isArray(t))
            return (
              Array.isArray(n) &&
              t.length === n.length &&
              t.every(function (t, r) {
                return e(t, n[r]);
              })
            );
          if ("object" == typeof t || "object" == typeof n) {
            var r = l(t),
              a = l(n);
            return r !== t || a !== n
              ? e(r, a)
              : Object.keys(Object.assign({}, t, n)).every(function (r) {
                  return e(t[r], n[r]);
                });
          }
          return !1;
        },
        u = n(2177);
      function c(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function d(e) {
        return "/" === e.charAt(0) ? e.substr(1) : e;
      }
      function p(e, t) {
        return (function (e, t) {
          return (
            0 === e.toLowerCase().indexOf(t.toLowerCase()) &&
            -1 !== "/?#".indexOf(e.charAt(t.length))
          );
        })(e, t)
          ? e.substr(t.length)
          : e;
      }
      function f(e) {
        return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e;
      }
      function m(e) {
        var t = e.pathname,
          n = e.search,
          r = e.hash,
          a = t || "/";
        return (
          n && "?" !== n && (a += "?" === n.charAt(0) ? n : "?" + n),
          r && "#" !== r && (a += "#" === r.charAt(0) ? r : "#" + r),
          a
        );
      }
      function h(e, t, n, a) {
        var i;
        "string" == typeof e
          ? ((i = (function (e) {
              var t = e || "/",
                n = "",
                r = "",
                a = t.indexOf("#");
              -1 !== a && ((r = t.substr(a)), (t = t.substr(0, a)));
              var i = t.indexOf("?");
              return (
                -1 !== i && ((n = t.substr(i)), (t = t.substr(0, i))),
                {
                  pathname: t,
                  search: "?" === n ? "" : n,
                  hash: "#" === r ? "" : r,
                }
              );
            })(e)).state = t)
          : (void 0 === (i = (0, r.Z)({}, e)).pathname && (i.pathname = ""),
            i.search
              ? "?" !== i.search.charAt(0) && (i.search = "?" + i.search)
              : (i.search = ""),
            i.hash
              ? "#" !== i.hash.charAt(0) && (i.hash = "#" + i.hash)
              : (i.hash = ""),
            void 0 !== t && void 0 === i.state && (i.state = t));
        try {
          i.pathname = decodeURI(i.pathname);
        } catch (l) {
          throw l instanceof URIError
            ? new URIError(
                'Pathname "' +
                  i.pathname +
                  '" could not be decoded. This is likely caused by an invalid percent-encoding.'
              )
            : l;
        }
        return (
          n && (i.key = n),
          a
            ? i.pathname
              ? "/" !== i.pathname.charAt(0) &&
                (i.pathname = o(i.pathname, a.pathname))
              : (i.pathname = a.pathname)
            : i.pathname || (i.pathname = "/"),
          i
        );
      }
      function g(e, t) {
        return (
          e.pathname === t.pathname &&
          e.search === t.search &&
          e.hash === t.hash &&
          e.key === t.key &&
          s(e.state, t.state)
        );
      }
      function b() {
        var e = null;
        var t = [];
        return {
          setPrompt: function (t) {
            return (
              (e = t),
              function () {
                e === t && (e = null);
              }
            );
          },
          confirmTransitionTo: function (t, n, r, a) {
            if (null != e) {
              var i = "function" == typeof e ? e(t, n) : e;
              "string" == typeof i
                ? "function" == typeof r
                  ? r(i, a)
                  : a(!0)
                : a(!1 !== i);
            } else a(!0);
          },
          appendListener: function (e) {
            var n = !0;
            function r() {
              n && e.apply(void 0, arguments);
            }
            return (
              t.push(r),
              function () {
                (n = !1),
                  (t = t.filter(function (e) {
                    return e !== r;
                  }));
              }
            );
          },
          notifyListeners: function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r];
            t.forEach(function (e) {
              return e.apply(void 0, n);
            });
          },
        };
      }
      var y = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      function v(e, t) {
        t(window.confirm(e));
      }
      var w = "popstate",
        k = "hashchange";
      function S() {
        try {
          return window.history.state || {};
        } catch (e) {
          return {};
        }
      }
      function E(e) {
        void 0 === e && (e = {}), y || (0, u.Z)(!1);
        var t,
          n = window.history,
          a =
            ((-1 === (t = window.navigator.userAgent).indexOf("Android 2.") &&
              -1 === t.indexOf("Android 4.0")) ||
              -1 === t.indexOf("Mobile Safari") ||
              -1 !== t.indexOf("Chrome") ||
              -1 !== t.indexOf("Windows Phone")) &&
            window.history &&
            "pushState" in window.history,
          i = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          o = e,
          l = o.forceRefresh,
          s = void 0 !== l && l,
          d = o.getUserConfirmation,
          g = void 0 === d ? v : d,
          E = o.keyLength,
          x = void 0 === E ? 6 : E,
          T = e.basename ? f(c(e.basename)) : "";
        function C(e) {
          var t = e || {},
            n = t.key,
            r = t.state,
            a = window.location,
            i = a.pathname + a.search + a.hash;
          return T && (i = p(i, T)), h(i, r, n);
        }
        function A() {
          return Math.random().toString(36).substr(2, x);
        }
        var _ = b();
        function O(e) {
          (0, r.Z)(q, e),
            (q.length = n.length),
            _.notifyListeners(q.location, q.action);
        }
        function R(e) {
          (function (e) {
            return (
              void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
            );
          })(e) || N(C(e.state));
        }
        function P() {
          N(C(S()));
        }
        var L = !1;
        function N(e) {
          if (L) (L = !1), O();
          else {
            _.confirmTransitionTo(e, "POP", g, function (t) {
              t
                ? O({ action: "POP", location: e })
                : (function (e) {
                    var t = q.location,
                      n = D.indexOf(t.key);
                    -1 === n && (n = 0);
                    var r = D.indexOf(e.key);
                    -1 === r && (r = 0);
                    var a = n - r;
                    a && ((L = !0), M(a));
                  })(e);
            });
          }
        }
        var I = C(S()),
          D = [I.key];
        function F(e) {
          return T + m(e);
        }
        function M(e) {
          n.go(e);
        }
        var j = 0;
        function B(e) {
          1 === (j += e) && 1 === e
            ? (window.addEventListener(w, R),
              i && window.addEventListener(k, P))
            : 0 === j &&
              (window.removeEventListener(w, R),
              i && window.removeEventListener(k, P));
        }
        var z = !1;
        var q = {
          length: n.length,
          action: "POP",
          location: I,
          createHref: F,
          push: function (e, t) {
            var r = "PUSH",
              i = h(e, t, A(), q.location);
            _.confirmTransitionTo(i, r, g, function (e) {
              if (e) {
                var t = F(i),
                  o = i.key,
                  l = i.state;
                if (a)
                  if ((n.pushState({ key: o, state: l }, null, t), s))
                    window.location.href = t;
                  else {
                    var u = D.indexOf(q.location.key),
                      c = D.slice(0, u + 1);
                    c.push(i.key), (D = c), O({ action: r, location: i });
                  }
                else window.location.href = t;
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              i = h(e, t, A(), q.location);
            _.confirmTransitionTo(i, r, g, function (e) {
              if (e) {
                var t = F(i),
                  o = i.key,
                  l = i.state;
                if (a)
                  if ((n.replaceState({ key: o, state: l }, null, t), s))
                    window.location.replace(t);
                  else {
                    var u = D.indexOf(q.location.key);
                    -1 !== u && (D[u] = i.key), O({ action: r, location: i });
                  }
                else window.location.replace(t);
              }
            });
          },
          go: M,
          goBack: function () {
            M(-1);
          },
          goForward: function () {
            M(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = _.setPrompt(e);
            return (
              z || (B(1), (z = !0)),
              function () {
                return z && ((z = !1), B(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = _.appendListener(e);
            return (
              B(1),
              function () {
                B(-1), t();
              }
            );
          },
        };
        return q;
      }
      var x = "hashchange",
        T = {
          hashbang: {
            encodePath: function (e) {
              return "!" === e.charAt(0) ? e : "!/" + d(e);
            },
            decodePath: function (e) {
              return "!" === e.charAt(0) ? e.substr(1) : e;
            },
          },
          noslash: { encodePath: d, decodePath: c },
          slash: { encodePath: c, decodePath: c },
        };
      function C(e) {
        var t = e.indexOf("#");
        return -1 === t ? e : e.slice(0, t);
      }
      function A() {
        var e = window.location.href,
          t = e.indexOf("#");
        return -1 === t ? "" : e.substring(t + 1);
      }
      function _(e) {
        window.location.replace(C(window.location.href) + "#" + e);
      }
      function O(e) {
        void 0 === e && (e = {}), y || (0, u.Z)(!1);
        var t = window.history,
          n = (window.navigator.userAgent.indexOf("Firefox"), e),
          a = n.getUserConfirmation,
          i = void 0 === a ? v : a,
          o = n.hashType,
          l = void 0 === o ? "slash" : o,
          s = e.basename ? f(c(e.basename)) : "",
          d = T[l],
          g = d.encodePath,
          w = d.decodePath;
        function k() {
          var e = w(A());
          return s && (e = p(e, s)), h(e);
        }
        var S = b();
        function E(e) {
          (0, r.Z)(z, e),
            (z.length = t.length),
            S.notifyListeners(z.location, z.action);
        }
        var O = !1,
          R = null;
        function P() {
          var e,
            t,
            n = A(),
            r = g(n);
          if (n !== r) _(r);
          else {
            var a = k(),
              o = z.location;
            if (
              !O &&
              ((t = a),
              (e = o).pathname === t.pathname &&
                e.search === t.search &&
                e.hash === t.hash)
            )
              return;
            if (R === m(a)) return;
            (R = null),
              (function (e) {
                if (O) (O = !1), E();
                else {
                  var t = "POP";
                  S.confirmTransitionTo(e, t, i, function (n) {
                    n
                      ? E({ action: t, location: e })
                      : (function (e) {
                          var t = z.location,
                            n = D.lastIndexOf(m(t));
                          -1 === n && (n = 0);
                          var r = D.lastIndexOf(m(e));
                          -1 === r && (r = 0);
                          var a = n - r;
                          a && ((O = !0), F(a));
                        })(e);
                  });
                }
              })(a);
          }
        }
        var L = A(),
          N = g(L);
        L !== N && _(N);
        var I = k(),
          D = [m(I)];
        function F(e) {
          t.go(e);
        }
        var M = 0;
        function j(e) {
          1 === (M += e) && 1 === e
            ? window.addEventListener(x, P)
            : 0 === M && window.removeEventListener(x, P);
        }
        var B = !1;
        var z = {
          length: t.length,
          action: "POP",
          location: I,
          createHref: function (e) {
            var t = document.querySelector("base"),
              n = "";
            return (
              t && t.getAttribute("href") && (n = C(window.location.href)),
              n + "#" + g(s + m(e))
            );
          },
          push: function (e, t) {
            var n = "PUSH",
              r = h(e, void 0, void 0, z.location);
            S.confirmTransitionTo(r, n, i, function (e) {
              if (e) {
                var t = m(r),
                  a = g(s + t);
                if (A() !== a) {
                  (R = t),
                    (function (e) {
                      window.location.hash = e;
                    })(a);
                  var i = D.lastIndexOf(m(z.location)),
                    o = D.slice(0, i + 1);
                  o.push(t), (D = o), E({ action: n, location: r });
                } else E();
              }
            });
          },
          replace: function (e, t) {
            var n = "REPLACE",
              r = h(e, void 0, void 0, z.location);
            S.confirmTransitionTo(r, n, i, function (e) {
              if (e) {
                var t = m(r),
                  a = g(s + t);
                A() !== a && ((R = t), _(a));
                var i = D.indexOf(m(z.location));
                -1 !== i && (D[i] = t), E({ action: n, location: r });
              }
            });
          },
          go: F,
          goBack: function () {
            F(-1);
          },
          goForward: function () {
            F(1);
          },
          block: function (e) {
            void 0 === e && (e = !1);
            var t = S.setPrompt(e);
            return (
              B || (j(1), (B = !0)),
              function () {
                return B && ((B = !1), j(-1)), t();
              }
            );
          },
          listen: function (e) {
            var t = S.appendListener(e);
            return (
              j(1),
              function () {
                j(-1), t();
              }
            );
          },
        };
        return z;
      }
      function R(e, t, n) {
        return Math.min(Math.max(e, t), n);
      }
      function P(e) {
        void 0 === e && (e = {});
        var t = e,
          n = t.getUserConfirmation,
          a = t.initialEntries,
          i = void 0 === a ? ["/"] : a,
          o = t.initialIndex,
          l = void 0 === o ? 0 : o,
          s = t.keyLength,
          u = void 0 === s ? 6 : s,
          c = b();
        function d(e) {
          (0, r.Z)(w, e),
            (w.length = w.entries.length),
            c.notifyListeners(w.location, w.action);
        }
        function p() {
          return Math.random().toString(36).substr(2, u);
        }
        var f = R(l, 0, i.length - 1),
          g = i.map(function (e) {
            return h(e, void 0, "string" == typeof e ? p() : e.key || p());
          }),
          y = m;
        function v(e) {
          var t = R(w.index + e, 0, w.entries.length - 1),
            r = w.entries[t];
          c.confirmTransitionTo(r, "POP", n, function (e) {
            e ? d({ action: "POP", location: r, index: t }) : d();
          });
        }
        var w = {
          length: g.length,
          action: "POP",
          location: g[f],
          index: f,
          entries: g,
          createHref: y,
          push: function (e, t) {
            var r = "PUSH",
              a = h(e, t, p(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              if (e) {
                var t = w.index + 1,
                  n = w.entries.slice(0);
                n.length > t ? n.splice(t, n.length - t, a) : n.push(a),
                  d({ action: r, location: a, index: t, entries: n });
              }
            });
          },
          replace: function (e, t) {
            var r = "REPLACE",
              a = h(e, t, p(), w.location);
            c.confirmTransitionTo(a, r, n, function (e) {
              e && ((w.entries[w.index] = a), d({ action: r, location: a }));
            });
          },
          go: v,
          goBack: function () {
            v(-1);
          },
          goForward: function () {
            v(1);
          },
          canGo: function (e) {
            var t = w.index + e;
            return t >= 0 && t < w.entries.length;
          },
          block: function (e) {
            return void 0 === e && (e = !1), c.setPrompt(e);
          },
          listen: function (e) {
            return c.appendListener(e);
          },
        };
        return w;
      }
    },
    8679: function (e, t, n) {
      "use strict";
      var r = n(9864),
        a = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        l = {};
      function s(e) {
        return r.isMemo(e) ? o : l[e.$$typeof] || a;
      }
      (l[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (l[r.Memo] = o);
      var u = Object.defineProperty,
        c = Object.getOwnPropertyNames,
        d = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (m) {
            var a = f(n);
            a && a !== m && e(t, a, r);
          }
          var o = c(n);
          d && (o = o.concat(d(n)));
          for (var l = s(t), h = s(n), g = 0; g < o.length; ++g) {
            var b = o[g];
            if (!(i[b] || (r && r[b]) || (h && h[b]) || (l && l[b]))) {
              var y = p(n, b);
              try {
                u(t, b, y);
              } catch (v) {}
            }
          }
        }
        return t;
      };
    },
    2497: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    7771: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    2295: function (e, t, n) {
      "use strict";
      n.r(t);
    },
    4865: function (e, t, n) {
      var r, a;
      void 0 ===
        (a =
          "function" ==
          typeof (r = function () {
            var e,
              t,
              n = { version: "0.2.0" },
              r = (n.settings = {
                minimum: 0.08,
                easing: "ease",
                positionUsing: "",
                speed: 200,
                trickle: !0,
                trickleRate: 0.02,
                trickleSpeed: 800,
                showSpinner: !0,
                barSelector: '[role="bar"]',
                spinnerSelector: '[role="spinner"]',
                parent: "body",
                template:
                  '<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>',
              });
            function a(e, t, n) {
              return e < t ? t : e > n ? n : e;
            }
            function i(e) {
              return 100 * (-1 + e);
            }
            function o(e, t, n) {
              var a;
              return (
                ((a =
                  "translate3d" === r.positionUsing
                    ? { transform: "translate3d(" + i(e) + "%,0,0)" }
                    : "translate" === r.positionUsing
                    ? { transform: "translate(" + i(e) + "%,0)" }
                    : { "margin-left": i(e) + "%" }).transition =
                  "all " + t + "ms " + n),
                a
              );
            }
            (n.configure = function (e) {
              var t, n;
              for (t in e)
                void 0 !== (n = e[t]) && e.hasOwnProperty(t) && (r[t] = n);
              return this;
            }),
              (n.status = null),
              (n.set = function (e) {
                var t = n.isStarted();
                (e = a(e, r.minimum, 1)), (n.status = 1 === e ? null : e);
                var i = n.render(!t),
                  u = i.querySelector(r.barSelector),
                  c = r.speed,
                  d = r.easing;
                return (
                  i.offsetWidth,
                  l(function (t) {
                    "" === r.positionUsing &&
                      (r.positionUsing = n.getPositioningCSS()),
                      s(u, o(e, c, d)),
                      1 === e
                        ? (s(i, { transition: "none", opacity: 1 }),
                          i.offsetWidth,
                          setTimeout(function () {
                            s(i, {
                              transition: "all " + c + "ms linear",
                              opacity: 0,
                            }),
                              setTimeout(function () {
                                n.remove(), t();
                              }, c);
                          }, c))
                        : setTimeout(t, c);
                  }),
                  this
                );
              }),
              (n.isStarted = function () {
                return "number" == typeof n.status;
              }),
              (n.start = function () {
                n.status || n.set(0);
                var e = function () {
                  setTimeout(function () {
                    n.status && (n.trickle(), e());
                  }, r.trickleSpeed);
                };
                return r.trickle && e(), this;
              }),
              (n.done = function (e) {
                return e || n.status
                  ? n.inc(0.3 + 0.5 * Math.random()).set(1)
                  : this;
              }),
              (n.inc = function (e) {
                var t = n.status;
                return t
                  ? ("number" != typeof e &&
                      (e = (1 - t) * a(Math.random() * t, 0.1, 0.95)),
                    (t = a(t + e, 0, 0.994)),
                    n.set(t))
                  : n.start();
              }),
              (n.trickle = function () {
                return n.inc(Math.random() * r.trickleRate);
              }),
              (e = 0),
              (t = 0),
              (n.promise = function (r) {
                return r && "resolved" !== r.state()
                  ? (0 === t && n.start(),
                    e++,
                    t++,
                    r.always(function () {
                      0 == --t ? ((e = 0), n.done()) : n.set((e - t) / e);
                    }),
                    this)
                  : this;
              }),
              (n.render = function (e) {
                if (n.isRendered()) return document.getElementById("nprogress");
                c(document.documentElement, "nprogress-busy");
                var t = document.createElement("div");
                (t.id = "nprogress"), (t.innerHTML = r.template);
                var a,
                  o = t.querySelector(r.barSelector),
                  l = e ? "-100" : i(n.status || 0),
                  u = document.querySelector(r.parent);
                return (
                  s(o, {
                    transition: "all 0 linear",
                    transform: "translate3d(" + l + "%,0,0)",
                  }),
                  r.showSpinner ||
                    ((a = t.querySelector(r.spinnerSelector)) && f(a)),
                  u != document.body && c(u, "nprogress-custom-parent"),
                  u.appendChild(t),
                  t
                );
              }),
              (n.remove = function () {
                d(document.documentElement, "nprogress-busy"),
                  d(
                    document.querySelector(r.parent),
                    "nprogress-custom-parent"
                  );
                var e = document.getElementById("nprogress");
                e && f(e);
              }),
              (n.isRendered = function () {
                return !!document.getElementById("nprogress");
              }),
              (n.getPositioningCSS = function () {
                var e = document.body.style,
                  t =
                    "WebkitTransform" in e
                      ? "Webkit"
                      : "MozTransform" in e
                      ? "Moz"
                      : "msTransform" in e
                      ? "ms"
                      : "OTransform" in e
                      ? "O"
                      : "";
                return t + "Perspective" in e
                  ? "translate3d"
                  : t + "Transform" in e
                  ? "translate"
                  : "margin";
              });
            var l = (function () {
                var e = [];
                function t() {
                  var n = e.shift();
                  n && n(t);
                }
                return function (n) {
                  e.push(n), 1 == e.length && t();
                };
              })(),
              s = (function () {
                var e = ["Webkit", "O", "Moz", "ms"],
                  t = {};
                function n(e) {
                  return e
                    .replace(/^-ms-/, "ms-")
                    .replace(/-([\da-z])/gi, function (e, t) {
                      return t.toUpperCase();
                    });
                }
                function r(t) {
                  var n = document.body.style;
                  if (t in n) return t;
                  for (
                    var r,
                      a = e.length,
                      i = t.charAt(0).toUpperCase() + t.slice(1);
                    a--;

                  )
                    if ((r = e[a] + i) in n) return r;
                  return t;
                }
                function a(e) {
                  return (e = n(e)), t[e] || (t[e] = r(e));
                }
                function i(e, t, n) {
                  (t = a(t)), (e.style[t] = n);
                }
                return function (e, t) {
                  var n,
                    r,
                    a = arguments;
                  if (2 == a.length)
                    for (n in t)
                      void 0 !== (r = t[n]) &&
                        t.hasOwnProperty(n) &&
                        i(e, n, r);
                  else i(e, a[1], a[2]);
                };
              })();
            function u(e, t) {
              return (
                ("string" == typeof e ? e : p(e)).indexOf(" " + t + " ") >= 0
              );
            }
            function c(e, t) {
              var n = p(e),
                r = n + t;
              u(n, t) || (e.className = r.substring(1));
            }
            function d(e, t) {
              var n,
                r = p(e);
              u(e, t) &&
                ((n = r.replace(" " + t + " ", " ")),
                (e.className = n.substring(1, n.length - 1)));
            }
            function p(e) {
              return (" " + (e.className || "") + " ").replace(/\s+/gi, " ");
            }
            function f(e) {
              e && e.parentNode && e.parentNode.removeChild(e);
            }
            return n;
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = a);
    },
    7418: function (e) {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        n = Object.prototype.hasOwnProperty,
        r = Object.prototype.propertyIsEnumerable;
      function a(e) {
        if (null == e)
          throw new TypeError(
            "Object.assign cannot be called with null or undefined"
          );
        return Object(e);
      }
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, n = 0; n < 10; n++)
            t["_" + String.fromCharCode(n)] = n;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var r = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              r[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, r)).join("")
          );
        } catch (a) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, i) {
            for (var o, l, s = a(e), u = 1; u < arguments.length; u++) {
              for (var c in (o = Object(arguments[u])))
                n.call(o, c) && (s[c] = o[c]);
              if (t) {
                l = t(o);
                for (var d = 0; d < l.length; d++)
                  r.call(o, l[d]) && (s[l[d]] = o[l[d]]);
              }
            }
            return s;
          };
    },
    7410: function (e, t) {
      "use strict";
      var n,
        r,
        a,
        i =
          ((n = 0),
          (r = {
            util: {
              encode: function (e) {
                return e instanceof a
                  ? new a(e.type, r.util.encode(e.content), e.alias)
                  : "Array" === r.util.type(e)
                  ? e.map(r.util.encode)
                  : e
                      .replace(/&/g, "&amp;")
                      .replace(/</g, "&lt;")
                      .replace(/\u00a0/g, " ");
              },
              type: function (e) {
                return Object.prototype.toString
                  .call(e)
                  .match(/\[object (\w+)\]/)[1];
              },
              objId: function (e) {
                return (
                  e.__id || Object.defineProperty(e, "__id", { value: ++n }),
                  e.__id
                );
              },
              clone: function (e, t) {
                var n = r.util.type(e);
                switch (((t = t || {}), n)) {
                  case "Object":
                    if (t[r.util.objId(e)]) return t[r.util.objId(e)];
                    var a = {};
                    for (var i in ((t[r.util.objId(e)] = a), e))
                      e.hasOwnProperty(i) && (a[i] = r.util.clone(e[i], t));
                    return a;
                  case "Array":
                    return t[r.util.objId(e)]
                      ? t[r.util.objId(e)]
                      : ((a = []),
                        (t[r.util.objId(e)] = a),
                        e.forEach(function (e, n) {
                          a[n] = r.util.clone(e, t);
                        }),
                        a);
                }
                return e;
              },
            },
            languages: {
              extend: function (e, t) {
                var n = r.util.clone(r.languages[e]);
                for (var a in t) n[a] = t[a];
                return n;
              },
              insertBefore: function (e, t, n, a) {
                var i = (a = a || r.languages)[e];
                if (2 == arguments.length) {
                  for (var o in (n = arguments[1]))
                    n.hasOwnProperty(o) && (i[o] = n[o]);
                  return i;
                }
                var l = {};
                for (var s in i)
                  if (i.hasOwnProperty(s)) {
                    if (s == t)
                      for (var o in n) n.hasOwnProperty(o) && (l[o] = n[o]);
                    l[s] = i[s];
                  }
                return (
                  r.languages.DFS(r.languages, function (t, n) {
                    n === a[e] && t != e && (this[t] = l);
                  }),
                  (a[e] = l)
                );
              },
              DFS: function (e, t, n, a) {
                for (var i in ((a = a || {}), e))
                  e.hasOwnProperty(i) &&
                    (t.call(e, i, e[i], n || i),
                    "Object" !== r.util.type(e[i]) || a[r.util.objId(e[i])]
                      ? "Array" !== r.util.type(e[i]) ||
                        a[r.util.objId(e[i])] ||
                        ((a[r.util.objId(e[i])] = !0),
                        r.languages.DFS(e[i], t, i, a))
                      : ((a[r.util.objId(e[i])] = !0),
                        r.languages.DFS(e[i], t, null, a)));
              },
            },
            plugins: {},
            highlight: function (e, t, n) {
              var i = { code: e, grammar: t, language: n };
              return (
                r.hooks.run("before-tokenize", i),
                (i.tokens = r.tokenize(i.code, i.grammar)),
                r.hooks.run("after-tokenize", i),
                a.stringify(r.util.encode(i.tokens), i.language)
              );
            },
            matchGrammar: function (e, t, n, a, i, o, l) {
              var s = r.Token;
              for (var u in n)
                if (n.hasOwnProperty(u) && n[u]) {
                  if (u == l) return;
                  var c = n[u];
                  c = "Array" === r.util.type(c) ? c : [c];
                  for (var d = 0; d < c.length; ++d) {
                    var p = c[d],
                      f = p.inside,
                      m = !!p.lookbehind,
                      h = !!p.greedy,
                      g = 0,
                      b = p.alias;
                    if (h && !p.pattern.global) {
                      var y = p.pattern.toString().match(/[imuy]*$/)[0];
                      p.pattern = RegExp(p.pattern.source, y + "g");
                    }
                    p = p.pattern || p;
                    for (
                      var v = a, w = i;
                      v < t.length;
                      w += t[v].length, ++v
                    ) {
                      var k = t[v];
                      if (t.length > e.length) return;
                      if (!(k instanceof s)) {
                        if (h && v != t.length - 1) {
                          if (((p.lastIndex = w), !(A = p.exec(e)))) break;
                          for (
                            var S = A.index + (m ? A[1].length : 0),
                              E = A.index + A[0].length,
                              x = v,
                              T = w,
                              C = t.length;
                            x < C &&
                            (T < E || (!t[x].type && !t[x - 1].greedy));
                            ++x
                          )
                            S >= (T += t[x].length) && (++v, (w = T));
                          if (t[v] instanceof s) continue;
                          (_ = x - v), (k = e.slice(w, T)), (A.index -= w);
                        } else {
                          p.lastIndex = 0;
                          var A = p.exec(k),
                            _ = 1;
                        }
                        if (A) {
                          m && (g = A[1] ? A[1].length : 0),
                            (E =
                              (S = A.index + g) + (A = A[0].slice(g)).length);
                          var O = k.slice(0, S),
                            R = k.slice(E),
                            P = [v, _];
                          O && (++v, (w += O.length), P.push(O));
                          var L = new s(u, f ? r.tokenize(A, f) : A, b, A, h);
                          if (
                            (P.push(L),
                            R && P.push(R),
                            Array.prototype.splice.apply(t, P),
                            1 != _ && r.matchGrammar(e, t, n, v, w, !0, u),
                            o)
                          )
                            break;
                        } else if (o) break;
                      }
                    }
                  }
                }
            },
            hooks: { add: function () {}, run: function (e, t) {} },
            tokenize: function (e, t, n) {
              var a = [e],
                i = t.rest;
              if (i) {
                for (var o in i) t[o] = i[o];
                delete t.rest;
              }
              return r.matchGrammar(e, a, t, 0, 0, !1), a;
            },
          }),
          ((a = r.Token =
            function (e, t, n, r, a) {
              (this.type = e),
                (this.content = t),
                (this.alias = n),
                (this.length = 0 | (r || "").length),
                (this.greedy = !!a);
            }).stringify = function (e, t, n) {
            if ("string" == typeof e) return e;
            if ("Array" === r.util.type(e))
              return e
                .map(function (n) {
                  return a.stringify(n, t, e);
                })
                .join("");
            var i = {
              type: e.type,
              content: a.stringify(e.content, t, n),
              tag: "span",
              classes: ["token", e.type],
              attributes: {},
              language: t,
              parent: n,
            };
            if (e.alias) {
              var o = "Array" === r.util.type(e.alias) ? e.alias : [e.alias];
              Array.prototype.push.apply(i.classes, o);
            }
            var l = Object.keys(i.attributes)
              .map(function (e) {
                return (
                  e +
                  '="' +
                  (i.attributes[e] || "").replace(/"/g, "&quot;") +
                  '"'
                );
              })
              .join(" ");
            return (
              "<" +
              i.tag +
              ' class="' +
              i.classes.join(" ") +
              '"' +
              (l ? " " + l : "") +
              ">" +
              i.content +
              "</" +
              i.tag +
              ">"
            );
          }),
          r);
      (i.languages.markup = {
        comment: /<!--[\s\S]*?-->/,
        prolog: /<\?[\s\S]+?\?>/,
        doctype: {
          pattern:
            /<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,
          greedy: !0,
          inside: {
            "internal-subset": {
              pattern: /(\[)[\s\S]+(?=\]>$)/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            string: { pattern: /"[^"]*"|'[^']*'/, greedy: !0 },
            punctuation: /^<!|>$|[[\]]/,
            "doctype-tag": /^DOCTYPE/,
            name: /[^\s<>'"]+/,
          },
        },
        cdata: /<!\[CDATA\[[\s\S]*?]]>/i,
        tag: {
          pattern:
            /<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,
          greedy: !0,
          inside: {
            tag: {
              pattern: /^<\/?[^\s>\/]+/,
              inside: { punctuation: /^<\/?/, namespace: /^[^\s>\/:]+:/ },
            },
            "attr-value": {
              pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
              inside: {
                punctuation: [{ pattern: /^=/, alias: "attr-equals" }, /"|'/],
              },
            },
            punctuation: /\/?>/,
            "attr-name": {
              pattern: /[^\s>\/]+/,
              inside: { namespace: /^[^\s>\/:]+:/ },
            },
          },
        },
        entity: [
          { pattern: /&[\da-z]{1,8};/i, alias: "named-entity" },
          /&#x?[\da-f]{1,8};/i,
        ],
      }),
        (i.languages.markup.tag.inside["attr-value"].inside.entity =
          i.languages.markup.entity),
        (i.languages.markup.doctype.inside["internal-subset"].inside =
          i.languages.markup),
        i.hooks.add("wrap", function (e) {
          "entity" === e.type &&
            (e.attributes.title = e.content.replace(/&amp;/, "&"));
        }),
        Object.defineProperty(i.languages.markup.tag, "addInlined", {
          value: function (e, t) {
            var n = {};
            (n["language-" + t] = {
              pattern: /(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,
              lookbehind: !0,
              inside: i.languages[t],
            }),
              (n.cdata = /^<!\[CDATA\[|\]\]>$/i);
            var r = {
              "included-cdata": {
                pattern: /<!\[CDATA\[[\s\S]*?\]\]>/i,
                inside: n,
              },
            };
            r["language-" + t] = { pattern: /[\s\S]+/, inside: i.languages[t] };
            var a = {};
            (a[e] = {
              pattern: RegExp(
                /(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(
                  /__/g,
                  function () {
                    return e;
                  }
                ),
                "i"
              ),
              lookbehind: !0,
              greedy: !0,
              inside: r,
            }),
              i.languages.insertBefore("markup", "cdata", a);
          },
        }),
        (i.languages.html = i.languages.markup),
        (i.languages.mathml = i.languages.markup),
        (i.languages.svg = i.languages.markup),
        (i.languages.xml = i.languages.extend("markup", {})),
        (i.languages.ssml = i.languages.xml),
        (i.languages.atom = i.languages.xml),
        (i.languages.rss = i.languages.xml),
        (function (e) {
          var t =
              "\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",
            n = {
              pattern: /(^(["']?)\w+\2)[ \t]+\S.*/,
              lookbehind: !0,
              alias: "punctuation",
              inside: null,
            },
            r = {
              bash: n,
              environment: { pattern: RegExp("\\$" + t), alias: "constant" },
              variable: [
                {
                  pattern: /\$?\(\([\s\S]+?\)\)/,
                  greedy: !0,
                  inside: {
                    variable: [
                      { pattern: /(^\$\(\([\s\S]+)\)\)/, lookbehind: !0 },
                      /^\$\(\(/,
                    ],
                    number:
                      /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,
                    operator:
                      /--?|-=|\+\+?|\+=|!=?|~|\*\*?|\*=|\/=?|%=?|<<=?|>>=?|<=?|>=?|==?|&&?|&=|\^=?|\|\|?|\|=|\?|:/,
                    punctuation: /\(\(?|\)\)?|,|;/,
                  },
                },
                {
                  pattern: /\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,
                  greedy: !0,
                  inside: { variable: /^\$\(|^`|\)$|`$/ },
                },
                {
                  pattern: /\$\{[^}]+\}/,
                  greedy: !0,
                  inside: {
                    operator: /:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,
                    punctuation: /[\[\]]/,
                    environment: {
                      pattern: RegExp("(\\{)" + t),
                      lookbehind: !0,
                      alias: "constant",
                    },
                  },
                },
                /\$(?:\w+|[#?*!@$])/,
              ],
              entity:
                /\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|x[0-9a-fA-F]{1,2}|u[0-9a-fA-F]{4}|U[0-9a-fA-F]{8})/,
            };
          (e.languages.bash = {
            shebang: { pattern: /^#!\s*\/.*/, alias: "important" },
            comment: { pattern: /(^|[^"{\\$])#.*/, lookbehind: !0 },
            "function-name": [
              {
                pattern: /(\bfunction\s+)\w+(?=(?:\s*\(?:\s*\))?\s*\{)/,
                lookbehind: !0,
                alias: "function",
              },
              { pattern: /\b\w+(?=\s*\(\s*\)\s*\{)/, alias: "function" },
            ],
            "for-or-select": {
              pattern: /(\b(?:for|select)\s+)\w+(?=\s+in\s)/,
              alias: "variable",
              lookbehind: !0,
            },
            "assign-left": {
              pattern: /(^|[\s;|&]|[<>]\()\w+(?=\+?=)/,
              inside: {
                environment: {
                  pattern: RegExp("(^|[\\s;|&]|[<>]\\()" + t),
                  lookbehind: !0,
                  alias: "constant",
                },
              },
              alias: "variable",
              lookbehind: !0,
            },
            string: [
              {
                pattern: /((?:^|[^<])<<-?\s*)(\w+?)\s[\s\S]*?(?:\r?\n|\r)\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
              {
                pattern:
                  /((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,
                lookbehind: !0,
                greedy: !0,
                inside: { bash: n },
              },
              {
                pattern:
                  /(^|[^\\](?:\\\\)*)(["'])(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|(?!\2)[^\\`$])*\2/,
                lookbehind: !0,
                greedy: !0,
                inside: r,
              },
            ],
            environment: { pattern: RegExp("\\$?" + t), alias: "constant" },
            variable: r.variable,
            function: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:add|apropos|apt|aptitude|apt-cache|apt-get|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            keyword: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:if|then|else|elif|fi|for|while|in|case|esac|function|select|do|done|until)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            builtin: {
              pattern:
                /(^|[\s;|&]|[<>]\()(?:\.|:|break|cd|continue|eval|exec|exit|export|getopts|hash|pwd|readonly|return|shift|test|times|trap|umask|unset|alias|bind|builtin|caller|command|declare|echo|enable|help|let|local|logout|mapfile|printf|read|readarray|source|type|typeset|ulimit|unalias|set|shopt)(?=$|[)\s;|&])/,
              lookbehind: !0,
              alias: "class-name",
            },
            boolean: {
              pattern: /(^|[\s;|&]|[<>]\()(?:true|false)(?=$|[)\s;|&])/,
              lookbehind: !0,
            },
            "file-descriptor": { pattern: /\B&\d\b/, alias: "important" },
            operator: {
              pattern:
                /\d?<>|>\||\+=|==?|!=?|=~|<<[<-]?|[&\d]?>>|\d?[<>]&?|&[>&]?|\|[&|]?|<=?|>=?/,
              inside: {
                "file-descriptor": { pattern: /^\d/, alias: "important" },
              },
            },
            punctuation: /\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,
            number: {
              pattern: /(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,
              lookbehind: !0,
            },
          }),
            (n.inside = e.languages.bash);
          for (
            var a = [
                "comment",
                "function-name",
                "for-or-select",
                "assign-left",
                "string",
                "environment",
                "function",
                "keyword",
                "builtin",
                "boolean",
                "file-descriptor",
                "operator",
                "punctuation",
                "number",
              ],
              i = r.variable[1].inside,
              o = 0;
            o < a.length;
            o++
          )
            i[a[o]] = e.languages.bash[a[o]];
          e.languages.shell = e.languages.bash;
        })(i),
        (i.languages.clike = {
          comment: [
            {
              pattern: /(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,
              lookbehind: !0,
              greedy: !0,
            },
            { pattern: /(^|[^\\:])\/\/.*/, lookbehind: !0, greedy: !0 },
          ],
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,
            lookbehind: !0,
            inside: { punctuation: /[.\\]/ },
          },
          keyword:
            /\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,
          boolean: /\b(?:true|false)\b/,
          function: /\w+(?=\()/,
          number: /\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,
          operator: /[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.c = i.languages.extend("clike", {
          comment: {
            pattern:
              /\/\/(?:[^\r\n\\]|\\(?:\r\n?|\n|(?![\r\n])))*|\/\*[\s\S]*?(?:\*\/|$)/,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|struct)\s+(?:__attribute__\s*\(\([\s\S]*?\)\)\s*)?)\w+|\b[a-z]\w*_t\b/,
            lookbehind: !0,
          },
          keyword:
            /\b(?:__attribute__|_Alignas|_Alignof|_Atomic|_Bool|_Complex|_Generic|_Imaginary|_Noreturn|_Static_assert|_Thread_local|asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,
          function: /[a-z_]\w*(?=\s*\()/i,
          number:
            /(?:\b0x(?:[\da-f]+(?:\.[\da-f]*)?|\.[\da-f]+)(?:p[+-]?\d+)?|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?)[ful]{0,4}/i,
          operator: />>=?|<<=?|->|([-+&|:])\1|[?:~]|[-+*/%&|^!=<>]=?/,
        })),
        i.languages.insertBefore("c", "string", {
          macro: {
            pattern:
              /(^\s*)#\s*[a-z](?:[^\r\n\\/]|\/(?!\*)|\/\*(?:[^*]|\*(?!\/))*\*\/|\\(?:\r\n|[\s\S]))*/im,
            lookbehind: !0,
            greedy: !0,
            alias: "property",
            inside: {
              string: [
                { pattern: /^(#\s*include\s*)<[^>]+>/, lookbehind: !0 },
                i.languages.c.string,
              ],
              comment: i.languages.c.comment,
              "macro-name": [
                { pattern: /(^#\s*define\s+)\w+\b(?!\()/i, lookbehind: !0 },
                {
                  pattern: /(^#\s*define\s+)\w+\b(?=\()/i,
                  lookbehind: !0,
                  alias: "function",
                },
              ],
              directive: {
                pattern: /^(#\s*)[a-z]+/,
                lookbehind: !0,
                alias: "keyword",
              },
              "directive-hash": /^#/,
              punctuation: /##|\\(?=[\r\n])/,
              expression: { pattern: /\S[\s\S]*/, inside: i.languages.c },
            },
          },
          constant:
            /\b(?:__FILE__|__LINE__|__DATE__|__TIME__|__TIMESTAMP__|__func__|EOF|NULL|SEEK_CUR|SEEK_END|SEEK_SET|stdin|stdout|stderr)\b/,
        }),
        delete i.languages.c.boolean,
        (function (e) {
          var t =
            /\b(?:alignas|alignof|asm|auto|bool|break|case|catch|char|char8_t|char16_t|char32_t|class|compl|concept|const|consteval|constexpr|constinit|const_cast|continue|co_await|co_return|co_yield|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|int8_t|int16_t|int32_t|int64_t|uint8_t|uint16_t|uint32_t|uint64_t|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|requires|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/;
          (e.languages.cpp = e.languages.extend("c", {
            "class-name": [
              {
                pattern: RegExp(
                  /(\b(?:class|concept|enum|struct|typename)\s+)(?!<keyword>)\w+/.source.replace(
                    /<keyword>/g,
                    function () {
                      return t.source;
                    }
                  )
                ),
                lookbehind: !0,
              },
              /\b[A-Z]\w*(?=\s*::\s*\w+\s*\()/,
              /\b[A-Z_]\w*(?=\s*::\s*~\w+\s*\()/i,
              /\w+(?=\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>\s*::\s*\w+\s*\()/,
            ],
            keyword: t,
            number: {
              pattern:
                /(?:\b0b[01']+|\b0x(?:[\da-f']+(?:\.[\da-f']*)?|\.[\da-f']+)(?:p[+-]?[\d']+)?|(?:\b[\d']+(?:\.[\d']*)?|\B\.[\d']+)(?:e[+-]?[\d']+)?)[ful]{0,4}/i,
              greedy: !0,
            },
            operator:
              />>=?|<<=?|->|([-+&|:])\1|[?:~]|<=>|[-+*/%&|^!=<>]=?|\b(?:and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/,
            boolean: /\b(?:true|false)\b/,
          })),
            e.languages.insertBefore("cpp", "string", {
              "raw-string": {
                pattern: /R"([^()\\ ]{0,16})\([\s\S]*?\)\1"/,
                alias: "string",
                greedy: !0,
              },
            }),
            e.languages.insertBefore("cpp", "class-name", {
              "base-clause": {
                pattern:
                  /(\b(?:class|struct)\s+\w+\s*:\s*)[^;{}"'\s]+(?:\s+[^;{}"'\s]+)*(?=\s*[;{])/,
                lookbehind: !0,
                greedy: !0,
                inside: e.languages.extend("cpp", {}),
              },
            }),
            e.languages.insertBefore(
              "inside",
              "operator",
              { "class-name": /\b[a-z_]\w*\b(?!\s*::)/i },
              e.languages.cpp["base-clause"]
            );
        })(i),
        (function (e) {
          var t = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css = {
            comment: /\/\*[\s\S]*?\*\//,
            atrule: {
              pattern: /@[\w-](?:[^;{\s]|\s+(?![\s{]))*(?:;|(?=\s*\{))/,
              inside: {
                rule: /^@[\w-]+/,
                "selector-function-argument": {
                  pattern:
                    /(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,
                  lookbehind: !0,
                  alias: "selector",
                },
                keyword: {
                  pattern: /(^|[^\w-])(?:and|not|only|or)(?![\w-])/,
                  lookbehind: !0,
                },
              },
            },
            url: {
              pattern: RegExp(
                "\\burl\\((?:" +
                  t.source +
                  "|" +
                  /(?:[^\\\r\n()"']|\\[\s\S])*/.source +
                  ")\\)",
                "i"
              ),
              greedy: !0,
              inside: {
                function: /^url/i,
                punctuation: /^\(|\)$/,
                string: { pattern: RegExp("^" + t.source + "$"), alias: "url" },
              },
            },
            selector: RegExp(
              "[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|" +
                t.source +
                ")*(?=\\s*\\{)"
            ),
            string: { pattern: t, greedy: !0 },
            property:
              /(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,
            important: /!important\b/i,
            function: /[-a-z0-9]+(?=\()/i,
            punctuation: /[(){};:,]/,
          }),
            (e.languages.css.atrule.inside.rest = e.languages.css);
          var n = e.languages.markup;
          n &&
            (n.tag.addInlined("style", "css"),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                "style-attr": {
                  pattern: /(^|["'\s])style\s*=\s*(?:"[^"]*"|'[^']*')/i,
                  lookbehind: !0,
                  inside: {
                    "attr-value": {
                      pattern: /=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,
                      inside: {
                        style: {
                          pattern: /(["'])[\s\S]+(?=["']$)/,
                          lookbehind: !0,
                          alias: "language-css",
                          inside: e.languages.css,
                        },
                        punctuation: [
                          { pattern: /^=/, alias: "attr-equals" },
                          /"|'/,
                        ],
                      },
                    },
                    "attr-name": /^style/i,
                  },
                },
              },
              n.tag
            ));
        })(i),
        (function (e) {
          var t,
            n = /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;
          (e.languages.css.selector = {
            pattern: e.languages.css.selector,
            inside: (t = {
              "pseudo-element":
                /:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,
              "pseudo-class": /:[-\w]+/,
              class: /\.[-\w]+/,
              id: /#[-\w]+/,
              attribute: {
                pattern: RegExp("\\[(?:[^[\\]\"']|" + n.source + ")*\\]"),
                greedy: !0,
                inside: {
                  punctuation: /^\[|\]$/,
                  "case-sensitivity": {
                    pattern: /(\s)[si]$/i,
                    lookbehind: !0,
                    alias: "keyword",
                  },
                  namespace: {
                    pattern: /^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,
                    lookbehind: !0,
                    inside: { punctuation: /\|$/ },
                  },
                  "attr-name": {
                    pattern: /^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,
                    lookbehind: !0,
                  },
                  "attr-value": [
                    n,
                    {
                      pattern: /(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,
                      lookbehind: !0,
                    },
                  ],
                  operator: /[|~*^$]?=/,
                },
              },
              "n-th": [
                {
                  pattern: /(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,
                  lookbehind: !0,
                  inside: { number: /[\dn]+/, operator: /[+-]/ },
                },
                { pattern: /(\(\s*)(?:even|odd)(?=\s*\))/i, lookbehind: !0 },
              ],
              combinator: />|\+|~|\|\|/,
              punctuation: /[(),]/,
            }),
          }),
            (e.languages.css.atrule.inside[
              "selector-function-argument"
            ].inside = t),
            e.languages.insertBefore("css", "property", {
              variable: {
                pattern:
                  /(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,
                lookbehind: !0,
              },
            });
          var r = { pattern: /(\b\d+)(?:%|[a-z]+\b)/, lookbehind: !0 },
            a = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            };
          e.languages.insertBefore("css", "function", {
            operator: { pattern: /(\s)[+\-*\/](?=\s)/, lookbehind: !0 },
            hexcode: { pattern: /\B#(?:[\da-f]{1,2}){3,4}\b/i, alias: "color" },
            color: [
              /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
              {
                pattern:
                  /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                inside: {
                  unit: r,
                  number: a,
                  function: /[\w-]+(?=\()/,
                  punctuation: /[(),]/,
                },
              },
            ],
            entity: /\\[\da-f]{1,8}/i,
            unit: r,
            number: a,
          });
        })(i),
        (i.languages.javascript = i.languages.extend("clike", {
          "class-name": [
            i.languages.clike["class-name"],
            {
              pattern:
                /(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:prototype|constructor))/,
              lookbehind: !0,
            },
          ],
          keyword: [
            { pattern: /((?:^|})\s*)(?:catch|finally)\b/, lookbehind: !0 },
            {
              pattern:
                /(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|(?:get|set)(?=\s*[\[$\w\xA0-\uFFFF])|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,
              lookbehind: !0,
            },
          ],
          function:
            /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,
          number:
            /\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,
          operator:
            /--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/,
        })),
        (i.languages.javascript["class-name"][0].pattern =
          /(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/),
        i.languages.insertBefore("javascript", "keyword", {
          regex: {
            pattern:
              /((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,
            lookbehind: !0,
            greedy: !0,
            inside: {
              "regex-source": {
                pattern: /^(\/)[\s\S]+(?=\/[a-z]*$)/,
                lookbehind: !0,
                alias: "language-regex",
                inside: i.languages.regex,
              },
              "regex-flags": /[a-z]+$/,
              "regex-delimiter": /^\/|\/$/,
            },
          },
          "function-variable": {
            pattern:
              /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,
            alias: "function",
          },
          parameter: [
            {
              pattern:
                /(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
            {
              pattern:
                /((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,
              lookbehind: !0,
              inside: i.languages.javascript,
            },
          ],
          constant: /\b[A-Z](?:[A-Z_]|\dx?)*\b/,
        }),
        i.languages.insertBefore("javascript", "string", {
          "template-string": {
            pattern:
              /`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,
            greedy: !0,
            inside: {
              "template-punctuation": { pattern: /^`|`$/, alias: "string" },
              interpolation: {
                pattern:
                  /((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,
                lookbehind: !0,
                inside: {
                  "interpolation-punctuation": {
                    pattern: /^\${|}$/,
                    alias: "punctuation",
                  },
                  rest: i.languages.javascript,
                },
              },
              string: /[\s\S]+/,
            },
          },
        }),
        i.languages.markup &&
          i.languages.markup.tag.addInlined("script", "javascript"),
        (i.languages.js = i.languages.javascript),
        (function (e) {
          var t = e.util.clone(e.languages.javascript);
          (e.languages.jsx = e.languages.extend("markup", t)),
            (e.languages.jsx.tag.pattern =
              /<\/?(?:[\w.:-]+(?:\s+(?:[\w.:$-]+(?:=(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s{'">=]+|\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i),
            (e.languages.jsx.tag.inside.tag.pattern = /^<\/?[^\s>\/]*/i),
            (e.languages.jsx.tag.inside["attr-value"].pattern =
              /=(?!\{)(?:"(?:\\[^]|[^\\"])*"|'(?:\\[^]|[^\\'])*'|[^\s'">]+)/i),
            (e.languages.jsx.tag.inside.tag.inside["class-name"] =
              /^[A-Z]\w*(?:\.[A-Z]\w*)*$/),
            e.languages.insertBefore(
              "inside",
              "attr-name",
              {
                spread: {
                  pattern:
                    /\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,
                  inside: { punctuation: /\.{3}|[{}.]/, "attr-value": /\w+/ },
                },
              },
              e.languages.jsx.tag
            ),
            e.languages.insertBefore(
              "inside",
              "attr-value",
              {
                script: {
                  pattern: /=(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])+\})/i,
                  inside: {
                    "script-punctuation": {
                      pattern: /^=(?={)/,
                      alias: "punctuation",
                    },
                    rest: e.languages.jsx,
                  },
                  alias: "language-javascript",
                },
              },
              e.languages.jsx.tag
            );
          var n = function (e) {
              return e
                ? "string" == typeof e
                  ? e
                  : "string" == typeof e.content
                  ? e.content
                  : e.content.map(n).join("")
                : "";
            },
            r = function (t) {
              for (var a = [], i = 0; i < t.length; i++) {
                var o = t[i],
                  l = !1;
                if (
                  ("string" != typeof o &&
                    ("tag" === o.type &&
                    o.content[0] &&
                    "tag" === o.content[0].type
                      ? "</" === o.content[0].content[0].content
                        ? a.length > 0 &&
                          a[a.length - 1].tagName ===
                            n(o.content[0].content[1]) &&
                          a.pop()
                        : "/>" === o.content[o.content.length - 1].content ||
                          a.push({
                            tagName: n(o.content[0].content[1]),
                            openedBraces: 0,
                          })
                      : a.length > 0 &&
                        "punctuation" === o.type &&
                        "{" === o.content
                      ? a[a.length - 1].openedBraces++
                      : a.length > 0 &&
                        a[a.length - 1].openedBraces > 0 &&
                        "punctuation" === o.type &&
                        "}" === o.content
                      ? a[a.length - 1].openedBraces--
                      : (l = !0)),
                  (l || "string" == typeof o) &&
                    a.length > 0 &&
                    0 === a[a.length - 1].openedBraces)
                ) {
                  var s = n(o);
                  i < t.length - 1 &&
                    ("string" == typeof t[i + 1] ||
                      "plain-text" === t[i + 1].type) &&
                    ((s += n(t[i + 1])), t.splice(i + 1, 1)),
                    i > 0 &&
                      ("string" == typeof t[i - 1] ||
                        "plain-text" === t[i - 1].type) &&
                      ((s = n(t[i - 1]) + s), t.splice(i - 1, 1), i--),
                    (t[i] = new e.Token("plain-text", s, null, s));
                }
                o.content && "string" != typeof o.content && r(o.content);
              }
            };
          e.hooks.add("after-tokenize", function (e) {
            ("jsx" !== e.language && "tsx" !== e.language) || r(e.tokens);
          });
        })(i),
        (function (e) {
          function t(e, t) {
            return RegExp(
              e.replace(/<ID>/g, function () {
                return /(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/
                  .source;
              }),
              t
            );
          }
          e.languages.insertBefore("javascript", "function-variable", {
            "method-variable": {
              pattern: RegExp(
                "(\\.\\s*)" +
                  e.languages.javascript["function-variable"].pattern.source
              ),
              lookbehind: !0,
              alias: [
                "function-variable",
                "method",
                "function",
                "property-access",
              ],
            },
          }),
            e.languages.insertBefore("javascript", "function", {
              method: {
                pattern: RegExp(
                  "(\\.\\s*)" + e.languages.javascript.function.source
                ),
                lookbehind: !0,
                alias: ["function", "property-access"],
              },
            }),
            e.languages.insertBefore("javascript", "constant", {
              "known-class-name": [
                {
                  pattern:
                    /\b(?:(?:(?:Uint|Int)(?:8|16|32)|Uint8Clamped|Float(?:32|64))?Array|ArrayBuffer|BigInt|Boolean|DataView|Date|Error|Function|Intl|JSON|Math|Number|Object|Promise|Proxy|Reflect|RegExp|String|Symbol|(?:Weak)?(?:Set|Map)|WebAssembly)\b/,
                  alias: "class-name",
                },
                { pattern: /\b(?:[A-Z]\w*)Error\b/, alias: "class-name" },
              ],
            }),
            e.languages.insertBefore("javascript", "keyword", {
              imports: {
                pattern: t(
                  /(\bimport\b\s*)(?:<ID>(?:\s*,\s*(?:\*\s*as\s+<ID>|\{[^{}]*\}))?|\*\s*as\s+<ID>|\{[^{}]*\})(?=\s*\bfrom\b)/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
              exports: {
                pattern: t(
                  /(\bexport\b\s*)(?:\*(?:\s*as\s+<ID>)?(?=\s*\bfrom\b)|\{[^{}]*\})/
                    .source
                ),
                lookbehind: !0,
                inside: e.languages.javascript,
              },
            }),
            e.languages.javascript.keyword.unshift(
              {
                pattern: /\b(?:as|default|export|from|import)\b/,
                alias: "module",
              },
              {
                pattern:
                  /\b(?:await|break|catch|continue|do|else|for|finally|if|return|switch|throw|try|while|yield)\b/,
                alias: "control-flow",
              },
              { pattern: /\bnull\b/, alias: ["null", "nil"] },
              { pattern: /\bundefined\b/, alias: "nil" }
            ),
            e.languages.insertBefore("javascript", "operator", {
              spread: { pattern: /\.{3}/, alias: "operator" },
              arrow: { pattern: /=>/, alias: "operator" },
            }),
            e.languages.insertBefore("javascript", "punctuation", {
              "property-access": {
                pattern: t(/(\.\s*)#?<ID>/.source),
                lookbehind: !0,
              },
              "maybe-class-name": {
                pattern: /(^|[^$\w\xA0-\uFFFF])[A-Z][$\w\xA0-\uFFFF]+/,
                lookbehind: !0,
              },
              dom: {
                pattern:
                  /\b(?:document|location|navigator|performance|(?:local|session)Storage|window)\b/,
                alias: "variable",
              },
              console: { pattern: /\bconsole(?=\s*\.)/, alias: "class-name" },
            });
          for (
            var n = [
                "function",
                "function-variable",
                "method",
                "method-variable",
                "property-access",
              ],
              r = 0;
            r < n.length;
            r++
          ) {
            var a = n[r],
              i = e.languages.javascript[a];
            "RegExp" === e.util.type(i) &&
              (i = e.languages.javascript[a] = { pattern: i });
            var o = i.inside || {};
            (i.inside = o), (o["maybe-class-name"] = /^[A-Z][\s\S]*/);
          }
        })(i),
        (function (e) {
          var t = /#(?!\{).+/,
            n = { pattern: /#\{[^}]+\}/, alias: "variable" };
          (e.languages.coffeescript = e.languages.extend("javascript", {
            comment: t,
            string: [
              { pattern: /'(?:\\[\s\S]|[^\\'])*'/, greedy: !0 },
              {
                pattern: /"(?:\\[\s\S]|[^\\"])*"/,
                greedy: !0,
                inside: { interpolation: n },
              },
            ],
            keyword:
              /\b(?:and|break|by|catch|class|continue|debugger|delete|do|each|else|extend|extends|false|finally|for|if|in|instanceof|is|isnt|let|loop|namespace|new|no|not|null|of|off|on|or|own|return|super|switch|then|this|throw|true|try|typeof|undefined|unless|until|when|while|window|with|yes|yield)\b/,
            "class-member": { pattern: /@(?!\d)\w+/, alias: "variable" },
          })),
            e.languages.insertBefore("coffeescript", "comment", {
              "multiline-comment": {
                pattern: /###[\s\S]+?###/,
                alias: "comment",
              },
              "block-regex": {
                pattern: /\/{3}[\s\S]*?\/{3}/,
                alias: "regex",
                inside: { comment: t, interpolation: n },
              },
            }),
            e.languages.insertBefore("coffeescript", "string", {
              "inline-javascript": {
                pattern: /`(?:\\[\s\S]|[^\\`])*`/,
                inside: {
                  delimiter: { pattern: /^`|`$/, alias: "punctuation" },
                  script: {
                    pattern: /[\s\S]+/,
                    alias: "language-javascript",
                    inside: e.languages.javascript,
                  },
                },
              },
              "multiline-string": [
                { pattern: /'''[\s\S]*?'''/, greedy: !0, alias: "string" },
                {
                  pattern: /"""[\s\S]*?"""/,
                  greedy: !0,
                  alias: "string",
                  inside: { interpolation: n },
                },
              ],
            }),
            e.languages.insertBefore("coffeescript", "keyword", {
              property: /(?!\d)\w+(?=\s*:(?!:))/,
            }),
            delete e.languages.coffeescript["template-string"],
            (e.languages.coffee = e.languages.coffeescript);
        })(i),
        (function (e) {
          e.languages.diff = {
            coord: [/^(?:\*{3}|-{3}|\+{3}).*$/m, /^@@.*@@$/m, /^\d.*$/m],
          };
          var t = {
            "deleted-sign": "-",
            "deleted-arrow": "<",
            "inserted-sign": "+",
            "inserted-arrow": ">",
            unchanged: " ",
            diff: "!",
          };
          Object.keys(t).forEach(function (n) {
            var r = t[n],
              a = [];
            /^\w+$/.test(n) || a.push(/\w+/.exec(n)[0]),
              "diff" === n && a.push("bold"),
              (e.languages.diff[n] = {
                pattern: RegExp(
                  "^(?:[" + r + "].*(?:\r\n?|\n|(?![\\s\\S])))+",
                  "m"
                ),
                alias: a,
                inside: {
                  line: {
                    pattern: /(.)(?=[\s\S]).*(?:\r\n?|\n)?/,
                    lookbehind: !0,
                  },
                  prefix: { pattern: /[\s\S]/, alias: /\w+/.exec(n)[0] },
                },
              });
          }),
            Object.defineProperty(e.languages.diff, "PREFIXES", { value: t });
        })(i),
        (i.languages.git = {
          comment: /^#.*/m,
          deleted: /^[-\u2013].*/m,
          inserted: /^\+.*/m,
          string: /("|')(?:\\.|(?!\1)[^\\\r\n])*\1/m,
          command: {
            pattern: /^.*\$ git .*$/m,
            inside: { parameter: /\s--?\w+/m },
          },
          coord: /^@@.*@@$/m,
          "commit-sha1": /^commit \w{40}$/m,
        }),
        (i.languages.go = i.languages.extend("clike", {
          string: { pattern: /(["'`])(?:\\[\s\S]|(?!\1)[^\\])*\1/, greedy: !0 },
          keyword:
            /\b(?:break|case|chan|const|continue|default|defer|else|fallthrough|for|func|go(?:to)?|if|import|interface|map|package|range|return|select|struct|switch|type|var)\b/,
          boolean: /\b(?:_|iota|nil|true|false)\b/,
          number:
            /(?:\b0x[a-f\d]+|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[-+]?\d+)?)i?/i,
          operator:
            /[*\/%^!=]=?|\+[=+]?|-[=-]?|\|[=|]?|&(?:=|&|\^=?)?|>(?:>=?|=)?|<(?:<=?|=|-)?|:=|\.\.\./,
          builtin:
            /\b(?:bool|byte|complex(?:64|128)|error|float(?:32|64)|rune|string|u?int(?:8|16|32|64)?|uintptr|append|cap|close|complex|copy|delete|imag|len|make|new|panic|print(?:ln)?|real|recover)\b/,
        })),
        delete i.languages.go["class-name"],
        (i.languages.graphql = {
          comment: /#.*/,
          description: {
            pattern:
              /(?:"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*")(?=\s*[a-z_])/i,
            greedy: !0,
            alias: "string",
            inside: {
              "language-markdown": {
                pattern: /(^"(?:"")?)(?!\1)[\s\S]+(?=\1$)/,
                lookbehind: !0,
                inside: i.languages.markdown,
              },
            },
          },
          string: {
            pattern: /"""(?:[^"]|(?!""")")*"""|"(?:\\.|[^\\"\r\n])*"/,
            greedy: !0,
          },
          number: /(?:\B-|\b)\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          boolean: /\b(?:true|false)\b/,
          variable: /\$[a-z_]\w*/i,
          directive: { pattern: /@[a-z_]\w*/i, alias: "function" },
          "attr-name": {
            pattern:
              /[a-z_]\w*(?=\s*(?:\((?:[^()"]|"(?:\\.|[^\\"\r\n])*")*\))?:)/i,
            greedy: !0,
          },
          "class-name": {
            pattern:
              /(\b(?:enum|implements|interface|on|scalar|type|union)\s+|&\s*)[a-zA-Z_]\w*/,
            lookbehind: !0,
          },
          fragment: {
            pattern: /(\bfragment\s+|\.{3}\s*(?!on\b))[a-zA-Z_]\w*/,
            lookbehind: !0,
            alias: "function",
          },
          keyword:
            /\b(?:directive|enum|extend|fragment|implements|input|interface|mutation|on|query|repeatable|scalar|schema|subscription|type|union)\b/,
          operator: /[!=|&]|\.{3}/,
          punctuation: /[!(){}\[\]:=,]/,
          constant: /\b(?!ID\b)[A-Z][A-Z_\d]*\b/,
        }),
        (function (e) {
          function t(e, t) {
            return "___" + e.toUpperCase() + t + "___";
          }
          Object.defineProperties((e.languages["markup-templating"] = {}), {
            buildPlaceholders: {
              value: function (n, r, a, i) {
                if (n.language === r) {
                  var o = (n.tokenStack = []);
                  (n.code = n.code.replace(a, function (e) {
                    if ("function" == typeof i && !i(e)) return e;
                    for (
                      var a, l = o.length;
                      -1 !== n.code.indexOf((a = t(r, l)));

                    )
                      ++l;
                    return (o[l] = e), a;
                  })),
                    (n.grammar = e.languages.markup);
                }
              },
            },
            tokenizePlaceholders: {
              value: function (n, r) {
                if (n.language === r && n.tokenStack) {
                  n.grammar = e.languages[r];
                  var a = 0,
                    i = Object.keys(n.tokenStack);
                  !(function o(l) {
                    for (var s = 0; s < l.length && !(a >= i.length); s++) {
                      var u = l[s];
                      if (
                        "string" == typeof u ||
                        (u.content && "string" == typeof u.content)
                      ) {
                        var c = i[a],
                          d = n.tokenStack[c],
                          p = "string" == typeof u ? u : u.content,
                          f = t(r, c),
                          m = p.indexOf(f);
                        if (m > -1) {
                          ++a;
                          var h = p.substring(0, m),
                            g = new e.Token(
                              r,
                              e.tokenize(d, n.grammar),
                              "language-" + r,
                              d
                            ),
                            b = p.substring(m + f.length),
                            y = [];
                          h && y.push.apply(y, o([h])),
                            y.push(g),
                            b && y.push.apply(y, o([b])),
                            "string" == typeof u
                              ? l.splice.apply(l, [s, 1].concat(y))
                              : (u.content = y);
                        }
                      } else u.content && o(u.content);
                    }
                    return l;
                  })(n.tokens);
                }
              },
            },
          });
        })(i),
        (function (e) {
          (e.languages.handlebars = {
            comment: /\{\{![\s\S]*?\}\}/,
            delimiter: { pattern: /^\{\{\{?|\}\}\}?$/i, alias: "punctuation" },
            string: /(["'])(?:\\.|(?!\1)[^\\\r\n])*\1/,
            number:
              /\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee][+-]?\d+)?/,
            boolean: /\b(?:true|false)\b/,
            block: {
              pattern: /^(\s*(?:~\s*)?)[#\/]\S+?(?=\s*(?:~\s*)?$|\s)/i,
              lookbehind: !0,
              alias: "keyword",
            },
            brackets: {
              pattern: /\[[^\]]+\]/,
              inside: { punctuation: /\[|\]/, variable: /[\s\S]+/ },
            },
            punctuation: /[!"#%&':()*+,.\/;<=>@\[\\\]^`{|}~]/,
            variable: /[^!"#%&'()*+,\/;<=>@\[\\\]^`{|}~\s]+/,
          }),
            e.hooks.add("before-tokenize", function (t) {
              e.languages["markup-templating"].buildPlaceholders(
                t,
                "handlebars",
                /\{\{\{[\s\S]+?\}\}\}|\{\{[\s\S]+?\}\}/g
              );
            }),
            e.hooks.add("after-tokenize", function (t) {
              e.languages["markup-templating"].tokenizePlaceholders(
                t,
                "handlebars"
              );
            });
        })(i),
        (i.languages.json = {
          property: { pattern: /"(?:\\.|[^\\"\r\n])*"(?=\s*:)/, greedy: !0 },
          string: { pattern: /"(?:\\.|[^\\"\r\n])*"(?!\s*:)/, greedy: !0 },
          comment: { pattern: /\/\/.*|\/\*[\s\S]*?(?:\*\/|$)/, greedy: !0 },
          number: /-?\b\d+(?:\.\d+)?(?:e[+-]?\d+)?\b/i,
          punctuation: /[{}[\],]/,
          operator: /:/,
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
        }),
        (i.languages.webmanifest = i.languages.json),
        (i.languages.less = i.languages.extend("css", {
          comment: [
            /\/\*[\s\S]*?\*\//,
            { pattern: /(^|[^\\])\/\/.*/, lookbehind: !0 },
          ],
          atrule: {
            pattern:
              /@[\w-](?:\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { punctuation: /[:()]/ },
          },
          selector: {
            pattern:
              /(?:@\{[\w-]+\}|[^{};\s@])(?:@\{[\w-]+\}|\((?:[^(){}]|\([^(){}]*\))*\)|[^(){};@\s]|\s+(?!\s))*?(?=\s*\{)/,
            inside: { variable: /@+[\w-]+/ },
          },
          property: /(?:@\{[\w-]+\}|[\w-])+(?:\+_?)?(?=\s*:)/i,
          operator: /[+\-*\/]/,
        })),
        i.languages.insertBefore("less", "property", {
          variable: [
            { pattern: /@[\w-]+\s*:/, inside: { punctuation: /:/ } },
            /@@?[\w-]+/,
          ],
          "mixin-usage": {
            pattern: /([{;]\s*)[.#](?!\d)[\w-].*?(?=[(;])/,
            lookbehind: !0,
            alias: "function",
          },
        }),
        (i.languages.makefile = {
          comment: {
            pattern: /(^|[^\\])#(?:\\(?:\r\n|[\s\S])|[^\\\r\n])*/,
            lookbehind: !0,
          },
          string: {
            pattern: /(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,
            greedy: !0,
          },
          builtin: /\.[A-Z][^:#=\s]+(?=\s*:(?!=))/,
          symbol: {
            pattern: /^(?:[^:=\s]|[ \t]+(?![\s:]))+(?=\s*:(?!=))/m,
            inside: { variable: /\$+(?:(?!\$)[^(){}:#=\s]+|(?=[({]))/ },
          },
          variable: /\$+(?:(?!\$)[^(){}:#=\s]+|\([@*%<^+?][DF]\)|(?=[({]))/,
          keyword: [
            /-include\b|\b(?:define|else|endef|endif|export|ifn?def|ifn?eq|include|override|private|sinclude|undefine|unexport|vpath)\b/,
            {
              pattern:
                /(\()(?:addsuffix|abspath|and|basename|call|dir|error|eval|file|filter(?:-out)?|findstring|firstword|flavor|foreach|guile|if|info|join|lastword|load|notdir|or|origin|patsubst|realpath|shell|sort|strip|subst|suffix|value|warning|wildcard|word(?:s|list)?)(?=[ \t])/,
              lookbehind: !0,
            },
          ],
          operator: /(?:::|[?:+!])?=|[|@]/,
          punctuation: /[:;(){}]/,
        }),
        (function (e) {
          var t = /(?:\\.|[^\\\n\r]|(?:\n|\r\n?)(?!\n|\r\n?))/.source;
          function n(e) {
            return (
              (e = e.replace(/<inner>/g, function () {
                return t;
              })),
              RegExp(/((?:^|[^\\])(?:\\{2})*)/.source + "(?:" + e + ")")
            );
          }
          var r = /(?:\\.|``(?:[^`\r\n]|`(?!`))+``|`[^`\r\n]+`|[^\\|\r\n`])+/
              .source,
            a = /\|?__(?:\|__)+\|?(?:(?:\n|\r\n?)|(?![\s\S]))/.source.replace(
              /__/g,
              function () {
                return r;
              }
            ),
            i =
              /\|?[ \t]*:?-{3,}:?[ \t]*(?:\|[ \t]*:?-{3,}:?[ \t]*)+\|?(?:\n|\r\n?)/
                .source;
          (e.languages.markdown = e.languages.extend("markup", {})),
            e.languages.insertBefore("markdown", "prolog", {
              "front-matter-block": {
                pattern: /(^(?:\s*[\r\n])?)---(?!.)[\s\S]*?[\r\n]---(?!.)/,
                lookbehind: !0,
                greedy: !0,
                inside: {
                  punctuation: /^---|---$/,
                  "font-matter": {
                    pattern: /\S+(?:\s+\S+)*/,
                    alias: ["yaml", "language-yaml"],
                    inside: e.languages.yaml,
                  },
                },
              },
              blockquote: { pattern: /^>(?:[\t ]*>)*/m, alias: "punctuation" },
              table: {
                pattern: RegExp("^" + a + i + "(?:" + a + ")*", "m"),
                inside: {
                  "table-data-rows": {
                    pattern: RegExp("^(" + a + i + ")(?:" + a + ")*$"),
                    lookbehind: !0,
                    inside: {
                      "table-data": {
                        pattern: RegExp(r),
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                  "table-line": {
                    pattern: RegExp("^(" + a + ")" + i + "$"),
                    lookbehind: !0,
                    inside: { punctuation: /\||:?-{3,}:?/ },
                  },
                  "table-header-row": {
                    pattern: RegExp("^" + a + "$"),
                    inside: {
                      "table-header": {
                        pattern: RegExp(r),
                        alias: "important",
                        inside: e.languages.markdown,
                      },
                      punctuation: /\|/,
                    },
                  },
                },
              },
              code: [
                {
                  pattern:
                    /((?:^|\n)[ \t]*\n|(?:^|\r\n?)[ \t]*\r\n?)(?: {4}|\t).+(?:(?:\n|\r\n?)(?: {4}|\t).+)*/,
                  lookbehind: !0,
                  alias: "keyword",
                },
                { pattern: /``.+?``|`[^`\r\n]+`/, alias: "keyword" },
                {
                  pattern: /^```[\s\S]*?^```$/m,
                  greedy: !0,
                  inside: {
                    "code-block": {
                      pattern:
                        /^(```.*(?:\n|\r\n?))[\s\S]+?(?=(?:\n|\r\n?)^```$)/m,
                      lookbehind: !0,
                    },
                    "code-language": { pattern: /^(```).+/, lookbehind: !0 },
                    punctuation: /```/,
                  },
                },
              ],
              title: [
                {
                  pattern: /\S.*(?:\n|\r\n?)(?:==+|--+)(?=[ \t]*$)/m,
                  alias: "important",
                  inside: { punctuation: /==+$|--+$/ },
                },
                {
                  pattern: /(^\s*)#.+/m,
                  lookbehind: !0,
                  alias: "important",
                  inside: { punctuation: /^#+|#+$/ },
                },
              ],
              hr: {
                pattern: /(^\s*)([*-])(?:[\t ]*\2){2,}(?=\s*$)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              list: {
                pattern: /(^\s*)(?:[*+-]|\d+\.)(?=[\t ].)/m,
                lookbehind: !0,
                alias: "punctuation",
              },
              "url-reference": {
                pattern:
                  /!?\[[^\]]+\]:[\t ]+(?:\S+|<(?:\\.|[^>\\])+>)(?:[\t ]+(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\)))?/,
                inside: {
                  variable: { pattern: /^(!?\[)[^\]]+/, lookbehind: !0 },
                  string:
                    /(?:"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\((?:\\.|[^)\\])*\))$/,
                  punctuation: /^[\[\]!:]|[<>]/,
                },
                alias: "url",
              },
              bold: {
                pattern: n(
                  /\b__(?:(?!_)<inner>|_(?:(?!_)<inner>)+_)+__\b|\*\*(?:(?!\*)<inner>|\*(?:(?!\*)<inner>)+\*)+\*\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^..)[\s\S]+(?=..$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /\*\*|__/,
                },
              },
              italic: {
                pattern: n(
                  /\b_(?:(?!_)<inner>|__(?:(?!_)<inner>)+__)+_\b|\*(?:(?!\*)<inner>|\*\*(?:(?!\*)<inner>)+\*\*)+\*/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^.)[\s\S]+(?=.$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /[*_]/,
                },
              },
              strike: {
                pattern: n(/(~~?)(?:(?!~)<inner>)+?\2/.source),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  content: {
                    pattern: /(^~~?)[\s\S]+(?=\1$)/,
                    lookbehind: !0,
                    inside: {},
                  },
                  punctuation: /~~?/,
                },
              },
              url: {
                pattern: n(
                  /!?\[(?:(?!\])<inner>)+\](?:\([^\s)]+(?:[\t ]+"(?:\\.|[^"\\])*")?\)|[ \t]?\[(?:(?!\])<inner>)+\])/
                    .source
                ),
                lookbehind: !0,
                greedy: !0,
                inside: {
                  operator: /^!/,
                  content: {
                    pattern: /(^\[)[^\]]+(?=\])/,
                    lookbehind: !0,
                    inside: {},
                  },
                  variable: {
                    pattern: /(^\][ \t]?\[)[^\]]+(?=\]$)/,
                    lookbehind: !0,
                  },
                  url: { pattern: /(^\]\()[^\s)]+/, lookbehind: !0 },
                  string: {
                    pattern: /(^[ \t]+)"(?:\\.|[^"\\])*"(?=\)$)/,
                    lookbehind: !0,
                  },
                },
              },
            }),
            ["url", "bold", "italic", "strike"].forEach(function (t) {
              ["url", "bold", "italic", "strike"].forEach(function (n) {
                t !== n &&
                  (e.languages.markdown[t].inside.content.inside[n] =
                    e.languages.markdown[n]);
              });
            }),
            e.hooks.add("after-tokenize", function (e) {
              ("markdown" !== e.language && "md" !== e.language) ||
                (function e(t) {
                  if (t && "string" != typeof t)
                    for (var n = 0, r = t.length; n < r; n++) {
                      var a = t[n];
                      if ("code" === a.type) {
                        var i = a.content[1],
                          o = a.content[3];
                        if (
                          i &&
                          o &&
                          "code-language" === i.type &&
                          "code-block" === o.type &&
                          "string" == typeof i.content
                        ) {
                          var l = i.content
                              .replace(/\b#/g, "sharp")
                              .replace(/\b\+\+/g, "pp"),
                            s =
                              "language-" +
                              (l = (/[a-z][\w-]*/i.exec(l) || [
                                "",
                              ])[0].toLowerCase());
                          o.alias
                            ? "string" == typeof o.alias
                              ? (o.alias = [o.alias, s])
                              : o.alias.push(s)
                            : (o.alias = [s]);
                        }
                      } else e(a.content);
                    }
                })(e.tokens);
            }),
            e.hooks.add("wrap", function (t) {
              if ("code-block" === t.type) {
                for (var n = "", r = 0, a = t.classes.length; r < a; r++) {
                  var i = t.classes[r],
                    o = /language-(.+)/.exec(i);
                  if (o) {
                    n = o[1];
                    break;
                  }
                }
                var l = e.languages[n];
                if (l) {
                  var s = t.content
                    .replace(/&lt;/g, "<")
                    .replace(/&amp;/g, "&");
                  t.content = e.highlight(s, l, n);
                } else if (n && "none" !== n && e.plugins.autoloader) {
                  var u =
                    "md-" +
                    new Date().valueOf() +
                    "-" +
                    Math.floor(1e16 * Math.random());
                  (t.attributes.id = u),
                    e.plugins.autoloader.loadLanguages(n, function () {
                      var t = document.getElementById(u);
                      t &&
                        (t.innerHTML = e.highlight(
                          t.textContent,
                          e.languages[n],
                          n
                        ));
                    });
                }
              }
            }),
            (e.languages.md = e.languages.markdown);
        })(i),
        (i.languages.objectivec = i.languages.extend("c", {
          string:
            /("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1|@"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"/,
          keyword:
            /\b(?:asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while|in|self|super)\b|(?:@interface|@end|@implementation|@protocol|@class|@public|@protected|@private|@property|@try|@catch|@finally|@throw|@synthesize|@dynamic|@selector)\b/,
          operator: /-[->]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|\|?|[~^%?*\/@]/,
        })),
        delete i.languages.objectivec["class-name"],
        (i.languages.objc = i.languages.objectivec),
        (i.languages.ocaml = {
          comment: /\(\*[\s\S]*?\*\)/,
          string: [
            { pattern: /"(?:\\.|[^\\\r\n"])*"/, greedy: !0 },
            {
              pattern: /(['`])(?:\\(?:\d+|x[\da-f]+|.)|(?!\1)[^\\\r\n])\1/i,
              greedy: !0,
            },
          ],
          number:
            /\b(?:0x[\da-f][\da-f_]+|(?:0[bo])?\d[\d_]*(?:\.[\d_]*)?(?:e[+-]?[\d_]+)?)/i,
          directive: { pattern: /\B#\w+/, alias: "important" },
          label: { pattern: /\B~\w+/, alias: "function" },
          "type-variable": { pattern: /\B'\w+/, alias: "function" },
          variant: { pattern: /`\w+/, alias: "variable" },
          module: { pattern: /\b[A-Z]\w+/, alias: "variable" },
          keyword:
            /\b(?:as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|match|method|module|mutable|new|nonrec|object|of|open|private|rec|sig|struct|then|to|try|type|val|value|virtual|when|where|while|with)\b/,
          boolean: /\b(?:false|true)\b/,
          operator:
            /:=|[=<>@^|&+\-*\/$%!?~][!$%&*+\-.\/:<=>?@^|~]*|\b(?:and|asr|land|lor|lsl|lsr|lxor|mod|or)\b/,
          punctuation: /[(){}\[\]|.,:;]|\b_\b/,
        }),
        (i.languages.python = {
          comment: { pattern: /(^|[^\\])#.*/, lookbehind: !0 },
          "string-interpolation": {
            pattern:
              /(?:f|rf|fr)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,
            greedy: !0,
            inside: {
              interpolation: {
                pattern:
                  /((?:^|[^{])(?:{{)*){(?!{)(?:[^{}]|{(?!{)(?:[^{}]|{(?!{)(?:[^{}])+})+})+}/,
                lookbehind: !0,
                inside: {
                  "format-spec": {
                    pattern: /(:)[^:(){}]+(?=}$)/,
                    lookbehind: !0,
                  },
                  "conversion-option": {
                    pattern: /![sra](?=[:}]$)/,
                    alias: "punctuation",
                  },
                  rest: null,
                },
              },
              string: /[\s\S]+/,
            },
          },
          "triple-quoted-string": {
            pattern: /(?:[rub]|rb|br)?("""|''')[\s\S]*?\1/i,
            greedy: !0,
            alias: "string",
          },
          string: {
            pattern: /(?:[rub]|rb|br)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,
            greedy: !0,
          },
          function: {
            pattern: /((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,
            lookbehind: !0,
          },
          "class-name": { pattern: /(\bclass\s+)\w+/i, lookbehind: !0 },
          decorator: {
            pattern: /(^\s*)@\w+(?:\.\w+)*/im,
            lookbehind: !0,
            alias: ["annotation", "punctuation"],
            inside: { punctuation: /\./ },
          },
          keyword:
            /\b(?:and|as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,
          builtin:
            /\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,
          boolean: /\b(?:True|False|None)\b/,
          number:
            /(?:\b(?=\d)|\B(?=\.))(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?j?\b/i,
          operator: /[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,
          punctuation: /[{}[\];(),.:]/,
        }),
        (i.languages.python[
          "string-interpolation"
        ].inside.interpolation.inside.rest = i.languages.python),
        (i.languages.py = i.languages.python),
        (i.languages.reason = i.languages.extend("clike", {
          string: {
            pattern: /"(?:\\(?:\r\n|[\s\S])|[^\\\r\n"])*"/,
            greedy: !0,
          },
          "class-name": /\b[A-Z]\w*/,
          keyword:
            /\b(?:and|as|assert|begin|class|constraint|do|done|downto|else|end|exception|external|for|fun|function|functor|if|in|include|inherit|initializer|lazy|let|method|module|mutable|new|nonrec|object|of|open|or|private|rec|sig|struct|switch|then|to|try|type|val|virtual|when|while|with)\b/,
          operator:
            /\.{3}|:[:=]|\|>|->|=(?:==?|>)?|<=?|>=?|[|^?'#!~`]|[+\-*\/]\.?|\b(?:mod|land|lor|lxor|lsl|lsr|asr)\b/,
        })),
        i.languages.insertBefore("reason", "class-name", {
          character: {
            pattern:
              /'(?:\\x[\da-f]{2}|\\o[0-3][0-7][0-7]|\\\d{3}|\\.|[^'\\\r\n])'/,
            alias: "string",
          },
          constructor: { pattern: /\b[A-Z]\w*\b(?!\s*\.)/, alias: "variable" },
          label: { pattern: /\b[a-z]\w*(?=::)/, alias: "symbol" },
        }),
        delete i.languages.reason.function,
        (function (e) {
          (e.languages.sass = e.languages.extend("css", {
            comment: {
              pattern: /^([ \t]*)\/[\/*].*(?:(?:\r?\n|\r)\1[ \t].+)*/m,
              lookbehind: !0,
            },
          })),
            e.languages.insertBefore("sass", "atrule", {
              "atrule-line": {
                pattern: /^(?:[ \t]*)[@+=].+/m,
                inside: { atrule: /(?:@[\w-]+|[+=])/m },
              },
            }),
            delete e.languages.sass.atrule;
          var t = /\$[-\w]+|#\{\$[-\w]+\}/,
            n = [
              /[+*\/%]|[=!]=|<=?|>=?|\b(?:and|or|not)\b/,
              { pattern: /(\s+)-(?=\s)/, lookbehind: !0 },
            ];
          e.languages.insertBefore("sass", "property", {
            "variable-line": {
              pattern: /^[ \t]*\$.+/m,
              inside: { punctuation: /:/, variable: t, operator: n },
            },
            "property-line": {
              pattern: /^[ \t]*(?:[^:\s]+ *:.*|:[^:\s].*)/m,
              inside: {
                property: [
                  /[^:\s]+(?=\s*:)/,
                  { pattern: /(:)[^:\s]+/, lookbehind: !0 },
                ],
                punctuation: /:/,
                variable: t,
                operator: n,
                important: e.languages.sass.important,
              },
            },
          }),
            delete e.languages.sass.property,
            delete e.languages.sass.important,
            e.languages.insertBefore("sass", "punctuation", {
              selector: {
                pattern:
                  /([ \t]*)\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*(?:,(?:\r?\n|\r)\1[ \t]+\S(?:,[^,\r\n]+|[^,\r\n]*)(?:,[^,\r\n]+)*)*/,
                lookbehind: !0,
              },
            });
        })(i),
        (i.languages.scss = i.languages.extend("css", {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
            lookbehind: !0,
          },
          atrule: {
            pattern: /@[\w-](?:\([^()]+\)|[^()\s]|\s+(?!\s))*?(?=\s+[{;])/,
            inside: { rule: /@[\w-]+/ },
          },
          url: /(?:[-a-z]+-)?url(?=\()/i,
          selector: {
            pattern:
              /(?=\S)[^@;{}()]?(?:[^@;{}()\s]|\s+(?!\s)|#\{\$[-\w]+\})+(?=\s*\{(?:\}|\s|[^}][^:{}]*[:{][^}]+))/m,
            inside: {
              parent: { pattern: /&/, alias: "important" },
              placeholder: /%[-\w]+/,
              variable: /\$[-\w]+|#\{\$[-\w]+\}/,
            },
          },
          property: {
            pattern: /(?:[-\w]|\$[-\w]|#\{\$[-\w]+\})+(?=\s*:)/,
            inside: { variable: /\$[-\w]+|#\{\$[-\w]+\}/ },
          },
        })),
        i.languages.insertBefore("scss", "atrule", {
          keyword: [
            /@(?:if|else(?: if)?|forward|for|each|while|import|use|extend|debug|warn|mixin|include|function|return|content)\b/i,
            { pattern: /( +)(?:from|through)(?= )/, lookbehind: !0 },
          ],
        }),
        i.languages.insertBefore("scss", "important", {
          variable: /\$[-\w]+|#\{\$[-\w]+\}/,
        }),
        i.languages.insertBefore("scss", "function", {
          "module-modifier": {
            pattern: /\b(?:as|with|show|hide)\b/i,
            alias: "keyword",
          },
          placeholder: { pattern: /%[-\w]+/, alias: "selector" },
          statement: {
            pattern: /\B!(?:default|optional)\b/i,
            alias: "keyword",
          },
          boolean: /\b(?:true|false)\b/,
          null: { pattern: /\bnull\b/, alias: "keyword" },
          operator: {
            pattern: /(\s)(?:[-+*\/%]|[=!]=|<=?|>=?|and|or|not)(?=\s)/,
            lookbehind: !0,
          },
        }),
        (i.languages.scss.atrule.inside.rest = i.languages.scss),
        (i.languages.sql = {
          comment: {
            pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|(?:--|\/\/|#).*)/,
            lookbehind: !0,
          },
          variable: [
            { pattern: /@(["'`])(?:\\[\s\S]|(?!\1)[^\\])+\1/, greedy: !0 },
            /@[\w.$]+/,
          ],
          string: {
            pattern: /(^|[^@\\])("|')(?:\\[\s\S]|(?!\2)[^\\]|\2\2)*\2/,
            greedy: !0,
            lookbehind: !0,
          },
          function:
            /\b(?:AVG|COUNT|FIRST|FORMAT|LAST|LCASE|LEN|MAX|MID|MIN|MOD|NOW|ROUND|SUM|UCASE)(?=\s*\()/i,
          keyword:
            /\b(?:ACTION|ADD|AFTER|ALGORITHM|ALL|ALTER|ANALYZE|ANY|APPLY|AS|ASC|AUTHORIZATION|AUTO_INCREMENT|BACKUP|BDB|BEGIN|BERKELEYDB|BIGINT|BINARY|BIT|BLOB|BOOL|BOOLEAN|BREAK|BROWSE|BTREE|BULK|BY|CALL|CASCADED?|CASE|CHAIN|CHAR(?:ACTER|SET)?|CHECK(?:POINT)?|CLOSE|CLUSTERED|COALESCE|COLLATE|COLUMNS?|COMMENT|COMMIT(?:TED)?|COMPUTE|CONNECT|CONSISTENT|CONSTRAINT|CONTAINS(?:TABLE)?|CONTINUE|CONVERT|CREATE|CROSS|CURRENT(?:_DATE|_TIME|_TIMESTAMP|_USER)?|CURSOR|CYCLE|DATA(?:BASES?)?|DATE(?:TIME)?|DAY|DBCC|DEALLOCATE|DEC|DECIMAL|DECLARE|DEFAULT|DEFINER|DELAYED|DELETE|DELIMITERS?|DENY|DESC|DESCRIBE|DETERMINISTIC|DISABLE|DISCARD|DISK|DISTINCT|DISTINCTROW|DISTRIBUTED|DO|DOUBLE|DROP|DUMMY|DUMP(?:FILE)?|DUPLICATE|ELSE(?:IF)?|ENABLE|ENCLOSED|END|ENGINE|ENUM|ERRLVL|ERRORS|ESCAPED?|EXCEPT|EXEC(?:UTE)?|EXISTS|EXIT|EXPLAIN|EXTENDED|FETCH|FIELDS|FILE|FILLFACTOR|FIRST|FIXED|FLOAT|FOLLOWING|FOR(?: EACH ROW)?|FORCE|FOREIGN|FREETEXT(?:TABLE)?|FROM|FULL|FUNCTION|GEOMETRY(?:COLLECTION)?|GLOBAL|GOTO|GRANT|GROUP|HANDLER|HASH|HAVING|HOLDLOCK|HOUR|IDENTITY(?:_INSERT|COL)?|IF|IGNORE|IMPORT|INDEX|INFILE|INNER|INNODB|INOUT|INSERT|INT|INTEGER|INTERSECT|INTERVAL|INTO|INVOKER|ISOLATION|ITERATE|JOIN|KEYS?|KILL|LANGUAGE|LAST|LEAVE|LEFT|LEVEL|LIMIT|LINENO|LINES|LINESTRING|LOAD|LOCAL|LOCK|LONG(?:BLOB|TEXT)|LOOP|MATCH(?:ED)?|MEDIUM(?:BLOB|INT|TEXT)|MERGE|MIDDLEINT|MINUTE|MODE|MODIFIES|MODIFY|MONTH|MULTI(?:LINESTRING|POINT|POLYGON)|NATIONAL|NATURAL|NCHAR|NEXT|NO|NONCLUSTERED|NULLIF|NUMERIC|OFF?|OFFSETS?|ON|OPEN(?:DATASOURCE|QUERY|ROWSET)?|OPTIMIZE|OPTION(?:ALLY)?|ORDER|OUT(?:ER|FILE)?|OVER|PARTIAL|PARTITION|PERCENT|PIVOT|PLAN|POINT|POLYGON|PRECEDING|PRECISION|PREPARE|PREV|PRIMARY|PRINT|PRIVILEGES|PROC(?:EDURE)?|PUBLIC|PURGE|QUICK|RAISERROR|READS?|REAL|RECONFIGURE|REFERENCES|RELEASE|RENAME|REPEAT(?:ABLE)?|REPLACE|REPLICATION|REQUIRE|RESIGNAL|RESTORE|RESTRICT|RETURN(?:S|ING)?|REVOKE|RIGHT|ROLLBACK|ROUTINE|ROW(?:COUNT|GUIDCOL|S)?|RTREE|RULE|SAVE(?:POINT)?|SCHEMA|SECOND|SELECT|SERIAL(?:IZABLE)?|SESSION(?:_USER)?|SET(?:USER)?|SHARE|SHOW|SHUTDOWN|SIMPLE|SMALLINT|SNAPSHOT|SOME|SONAME|SQL|START(?:ING)?|STATISTICS|STATUS|STRIPED|SYSTEM_USER|TABLES?|TABLESPACE|TEMP(?:ORARY|TABLE)?|TERMINATED|TEXT(?:SIZE)?|THEN|TIME(?:STAMP)?|TINY(?:BLOB|INT|TEXT)|TOP?|TRAN(?:SACTIONS?)?|TRIGGER|TRUNCATE|TSEQUAL|TYPES?|UNBOUNDED|UNCOMMITTED|UNDEFINED|UNION|UNIQUE|UNLOCK|UNPIVOT|UNSIGNED|UPDATE(?:TEXT)?|USAGE|USE|USER|USING|VALUES?|VAR(?:BINARY|CHAR|CHARACTER|YING)|VIEW|WAITFOR|WARNINGS|WHEN|WHERE|WHILE|WITH(?: ROLLUP|IN)?|WORK|WRITE(?:TEXT)?|YEAR)\b/i,
          boolean: /\b(?:TRUE|FALSE|NULL)\b/i,
          number: /\b0x[\da-f]+\b|\b\d+(?:\.\d*)?|\B\.\d+\b/i,
          operator:
            /[-+*\/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?|\b(?:AND|BETWEEN|IN|LIKE|NOT|OR|IS|DIV|REGEXP|RLIKE|SOUNDS LIKE|XOR)\b/i,
          punctuation: /[;[\]()`,.]/,
        }),
        (function (e) {
          var t = { pattern: /(\b\d+)(?:%|[a-z]+)/, lookbehind: !0 },
            n = {
              pattern: /(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,
              lookbehind: !0,
            },
            r = {
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
              },
              url: { pattern: /url\((["']?).*?\1\)/i, greedy: !0 },
              string: {
                pattern: /("|')(?:(?!\1)[^\\\r\n]|\\(?:\r\n|[\s\S]))*\1/,
                greedy: !0,
              },
              interpolation: null,
              func: null,
              important: /\B!(?:important|optional)\b/i,
              keyword: {
                pattern:
                  /(^|\s+)(?:(?:if|else|for|return|unless)(?=\s+|$)|@[\w-]+)/,
                lookbehind: !0,
              },
              hexcode: /#[\da-f]{3,6}/i,
              color: [
                /\b(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)\b/i,
                {
                  pattern:
                    /\b(?:rgb|hsl)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:rgb|hsl)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,
                  inside: {
                    unit: t,
                    number: n,
                    function: /[\w-]+(?=\()/,
                    punctuation: /[(),]/,
                  },
                },
              ],
              entity: /\\[\da-f]{1,8}/i,
              unit: t,
              boolean: /\b(?:true|false)\b/,
              operator: [
                /~|[+!\/%<>?=]=?|[-:]=|\*[*=]?|\.{2,3}|&&|\|\||\B-\B|\b(?:and|in|is(?: a| defined| not|nt)?|not|or)\b/,
              ],
              number: n,
              punctuation: /[{}()\[\];:,]/,
            };
          (r.interpolation = {
            pattern: /\{[^\r\n}:]+\}/,
            alias: "variable",
            inside: {
              delimiter: { pattern: /^{|}$/, alias: "punctuation" },
              rest: r,
            },
          }),
            (r.func = {
              pattern: /[\w-]+\([^)]*\).*/,
              inside: { function: /^[^(]+/, rest: r },
            }),
            (e.languages.stylus = {
              "atrule-declaration": {
                pattern: /(^\s*)@.+/m,
                lookbehind: !0,
                inside: { atrule: /^@[\w-]+/, rest: r },
              },
              "variable-declaration": {
                pattern: /(^[ \t]*)[\w$-]+\s*.?=[ \t]*(?:\{[^{}]*\}|\S.*|$)/m,
                lookbehind: !0,
                inside: { variable: /^\S+/, rest: r },
              },
              statement: {
                pattern: /(^[ \t]*)(?:if|else|for|return|unless)[ \t].+/m,
                lookbehind: !0,
                inside: { keyword: /^\S+/, rest: r },
              },
              "property-declaration": {
                pattern:
                  /((?:^|\{)([ \t]*))(?:[\w-]|\{[^}\r\n]+\})+(?:\s*:\s*|[ \t]+)(?!\s)[^{\r\n]*(?:;|[^{\r\n,](?=$)(?!(?:\r?\n|\r)(?:\{|\2[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  property: {
                    pattern: /^[^\s:]+/,
                    inside: { interpolation: r.interpolation },
                  },
                  rest: r,
                },
              },
              selector: {
                pattern:
                  /(^[ \t]*)(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)(?:(?:\r?\n|\r)(?:\1(?:(?=\S)(?:[^{}\r\n:()]|::?[\w-]+(?:\([^)\r\n]*\)|(?![\w-]))|\{[^}\r\n]+\})+)))*(?:,$|\{|(?=(?:\r?\n|\r)(?:\{|\1[ \t]+)))/m,
                lookbehind: !0,
                inside: {
                  interpolation: r.interpolation,
                  comment: r.comment,
                  punctuation: /[{},]/,
                },
              },
              func: r.func,
              string: r.string,
              comment: {
                pattern: /(^|[^\\])(?:\/\*[\s\S]*?\*\/|\/\/.*)/,
                lookbehind: !0,
                greedy: !0,
              },
              interpolation: r.interpolation,
              punctuation: /[{}()\[\];:.]/,
            });
        })(i),
        (function (e) {
          (e.languages.typescript = e.languages.extend("javascript", {
            "class-name": {
              pattern:
                /(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,
              lookbehind: !0,
              greedy: !0,
              inside: null,
            },
            keyword:
              /\b(?:abstract|as|asserts|async|await|break|case|catch|class|const|constructor|continue|debugger|declare|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|is|keyof|let|module|namespace|new|null|of|package|private|protected|public|readonly|return|require|set|static|super|switch|this|throw|try|type|typeof|undefined|var|void|while|with|yield)\b/,
            builtin:
              /\b(?:string|Function|any|number|boolean|Array|symbol|console|Promise|unknown|never)\b/,
          })),
            delete e.languages.typescript.parameter;
          var t = e.languages.extend("typescript", {});
          delete t["class-name"],
            (e.languages.typescript["class-name"].inside = t),
            e.languages.insertBefore("typescript", "function", {
              "generic-function": {
                pattern:
                  /#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,
                greedy: !0,
                inside: {
                  function:
                    /^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,
                  generic: {
                    pattern: /<[\s\S]+/,
                    alias: "class-name",
                    inside: t,
                  },
                },
              },
            }),
            (e.languages.ts = e.languages.typescript);
        })(i),
        (function (e) {
          var t = e.util.clone(e.languages.typescript);
          e.languages.tsx = e.languages.extend("jsx", t);
          var n = e.languages.tsx.tag;
          (n.pattern = RegExp(
            /(^|[^\w$]|(?=<\/))/.source + "(?:" + n.pattern.source + ")",
            n.pattern.flags
          )),
            (n.lookbehind = !0);
        })(i),
        (i.languages.wasm = {
          comment: [/\(;[\s\S]*?;\)/, { pattern: /;;.*/, greedy: !0 }],
          string: { pattern: /"(?:\\[\s\S]|[^"\\])*"/, greedy: !0 },
          keyword: [
            { pattern: /\b(?:align|offset)=/, inside: { operator: /=/ } },
            {
              pattern:
                /\b(?:(?:f32|f64|i32|i64)(?:\.(?:abs|add|and|ceil|clz|const|convert_[su]\/i(?:32|64)|copysign|ctz|demote\/f64|div(?:_[su])?|eqz?|extend_[su]\/i32|floor|ge(?:_[su])?|gt(?:_[su])?|le(?:_[su])?|load(?:(?:8|16|32)_[su])?|lt(?:_[su])?|max|min|mul|nearest|neg?|or|popcnt|promote\/f32|reinterpret\/[fi](?:32|64)|rem_[su]|rot[lr]|shl|shr_[su]|store(?:8|16|32)?|sqrt|sub|trunc(?:_[su]\/f(?:32|64))?|wrap\/i64|xor))?|memory\.(?:grow|size))\b/,
              inside: { punctuation: /\./ },
            },
            /\b(?:anyfunc|block|br(?:_if|_table)?|call(?:_indirect)?|data|drop|elem|else|end|export|func|get_(?:global|local)|global|if|import|local|loop|memory|module|mut|nop|offset|param|result|return|select|set_(?:global|local)|start|table|tee_local|then|type|unreachable)\b/,
          ],
          variable: /\$[\w!#$%&'*+\-./:<=>?@\\^_`|~]+/i,
          number:
            /[+-]?\b(?:\d(?:_?\d)*(?:\.\d(?:_?\d)*)?(?:[eE][+-]?\d(?:_?\d)*)?|0x[\da-fA-F](?:_?[\da-fA-F])*(?:\.[\da-fA-F](?:_?[\da-fA-D])*)?(?:[pP][+-]?\d(?:_?\d)*)?)\b|\binf\b|\bnan(?::0x[\da-fA-F](?:_?[\da-fA-D])*)?\b/,
          punctuation: /[()]/,
        }),
        (function (e) {
          var t = /[*&][^\s[\]{},]+/,
            n =
              /!(?:<[\w\-%#;/?:@&=+$,.!~*'()[\]]+>|(?:[a-zA-Z\d-]*!)?[\w\-%#;/?:@&=+$.~*'()]+)?/,
            r =
              "(?:" +
              n.source +
              "(?:[ \t]+" +
              t.source +
              ")?|" +
              t.source +
              "(?:[ \t]+" +
              n.source +
              ")?)",
            a =
              /(?:[^\s\x00-\x08\x0e-\x1f!"#%&'*,\-:>?@[\]`{|}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]|[?:-]<PLAIN>)(?:[ \t]*(?:(?![#:])<PLAIN>|:<PLAIN>))*/.source.replace(
                /<PLAIN>/g,
                function () {
                  return /[^\s\x00-\x08\x0e-\x1f,[\]{}\x7f-\x84\x86-\x9f\ud800-\udfff\ufffe\uffff]/
                    .source;
                }
              ),
            i = /"(?:[^"\\\r\n]|\\.)*"|'(?:[^'\\\r\n]|\\.)*'/.source;
          function o(e, t) {
            t = (t || "").replace(/m/g, "") + "m";
            var n =
              /([:\-,[{]\s*(?:\s<<prop>>[ \t]+)?)(?:<<value>>)(?=[ \t]*(?:$|,|]|}|(?:[\r\n]\s*)?#))/.source
                .replace(/<<prop>>/g, function () {
                  return r;
                })
                .replace(/<<value>>/g, function () {
                  return e;
                });
            return RegExp(n, t);
          }
          (e.languages.yaml = {
            scalar: {
              pattern: RegExp(
                /([\-:]\s*(?:\s<<prop>>[ \t]+)?[|>])[ \t]*(?:((?:\r?\n|\r)[ \t]+)\S[^\r\n]*(?:\2[^\r\n]+)*)/.source.replace(
                  /<<prop>>/g,
                  function () {
                    return r;
                  }
                )
              ),
              lookbehind: !0,
              alias: "string",
            },
            comment: /#.*/,
            key: {
              pattern: RegExp(
                /((?:^|[:\-,[{\r\n?])[ \t]*(?:<<prop>>[ \t]+)?)<<key>>(?=\s*:\s)/.source
                  .replace(/<<prop>>/g, function () {
                    return r;
                  })
                  .replace(/<<key>>/g, function () {
                    return "(?:" + a + "|" + i + ")";
                  })
              ),
              lookbehind: !0,
              greedy: !0,
              alias: "atrule",
            },
            directive: {
              pattern: /(^[ \t]*)%.+/m,
              lookbehind: !0,
              alias: "important",
            },
            datetime: {
              pattern: o(
                /\d{4}-\d\d?-\d\d?(?:[tT]|[ \t]+)\d\d?:\d{2}:\d{2}(?:\.\d*)?(?:[ \t]*(?:Z|[-+]\d\d?(?::\d{2})?))?|\d{4}-\d{2}-\d{2}|\d\d?:\d{2}(?::\d{2}(?:\.\d*)?)?/
                  .source
              ),
              lookbehind: !0,
              alias: "number",
            },
            boolean: {
              pattern: o(/true|false/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            null: {
              pattern: o(/null|~/.source, "i"),
              lookbehind: !0,
              alias: "important",
            },
            string: { pattern: o(i), lookbehind: !0, greedy: !0 },
            number: {
              pattern: o(
                /[+-]?(?:0x[\da-f]+|0o[0-7]+|(?:\d+(?:\.\d*)?|\.?\d+)(?:e[+-]?\d+)?|\.inf|\.nan)/
                  .source,
                "i"
              ),
              lookbehind: !0,
            },
            tag: n,
            important: t,
            punctuation: /---|[:[\]{}\-,|>?]|\.\.\./,
          }),
            (e.languages.yml = e.languages.yaml);
        })(i),
        (t.Z = i);
    },
    9901: function (e) {
      e.exports &&
        (e.exports = {
          core: {
            meta: { path: "components/prism-core.js", option: "mandatory" },
            core: "Core",
          },
          themes: {
            meta: {
              path: "themes/{id}.css",
              link: "index.html?theme={id}",
              exclusive: !0,
            },
            prism: { title: "Default", option: "default" },
            "prism-dark": "Dark",
            "prism-funky": "Funky",
            "prism-okaidia": { title: "Okaidia", owner: "ocodia" },
            "prism-twilight": { title: "Twilight", owner: "remybach" },
            "prism-coy": { title: "Coy", owner: "tshedor" },
            "prism-solarizedlight": {
              title: "Solarized Light",
              owner: "hectormatos2011 ",
            },
            "prism-tomorrow": { title: "Tomorrow Night", owner: "Rosey" },
          },
          languages: {
            meta: {
              path: "components/prism-{id}",
              noCSS: !0,
              examplesPath: "examples/prism-{id}",
              addCheckAll: !0,
            },
            markup: {
              title: "Markup",
              alias: ["html", "xml", "svg", "mathml", "ssml", "atom", "rss"],
              aliasTitles: {
                html: "HTML",
                xml: "XML",
                svg: "SVG",
                mathml: "MathML",
                ssml: "SSML",
                atom: "Atom",
                rss: "RSS",
              },
              option: "default",
            },
            css: { title: "CSS", option: "default", modify: "markup" },
            clike: { title: "C-like", option: "default" },
            javascript: {
              title: "JavaScript",
              require: "clike",
              modify: "markup",
              optional: "regex",
              alias: "js",
              option: "default",
            },
            abap: { title: "ABAP", owner: "dellagustin" },
            abnf: { title: "ABNF", owner: "RunDevelopment" },
            actionscript: {
              title: "ActionScript",
              require: "javascript",
              modify: "markup",
              owner: "Golmote",
            },
            ada: { title: "Ada", owner: "Lucretia" },
            agda: { title: "Agda", owner: "xy-ren" },
            al: { title: "AL", owner: "RunDevelopment" },
            antlr4: { title: "ANTLR4", alias: "g4", owner: "RunDevelopment" },
            apacheconf: { title: "Apache Configuration", owner: "GuiTeK" },
            apex: {
              title: "Apex",
              require: ["clike", "sql"],
              owner: "RunDevelopment",
            },
            apl: { title: "APL", owner: "ngn" },
            applescript: { title: "AppleScript", owner: "Golmote" },
            aql: { title: "AQL", owner: "RunDevelopment" },
            arduino: { title: "Arduino", require: "cpp", owner: "dkern" },
            arff: { title: "ARFF", owner: "Golmote" },
            asciidoc: { alias: "adoc", title: "AsciiDoc", owner: "Golmote" },
            aspnet: {
              title: "ASP.NET (C#)",
              require: ["markup", "csharp"],
              owner: "nauzilus",
            },
            asm6502: { title: "6502 Assembly", owner: "kzurawel" },
            autohotkey: { title: "AutoHotkey", owner: "aviaryan" },
            autoit: { title: "AutoIt", owner: "Golmote" },
            bash: {
              title: "Bash",
              alias: "shell",
              aliasTitles: { shell: "Shell" },
              owner: "zeitgeist87",
            },
            basic: { title: "BASIC", owner: "Golmote" },
            batch: { title: "Batch", owner: "Golmote" },
            bbcode: {
              title: "BBcode",
              alias: "shortcode",
              aliasTitles: { shortcode: "Shortcode" },
              owner: "RunDevelopment",
            },
            birb: { title: "Birb", require: "clike", owner: "Calamity210" },
            bison: { title: "Bison", require: "c", owner: "Golmote" },
            bnf: {
              title: "BNF",
              alias: "rbnf",
              aliasTitles: { rbnf: "RBNF" },
              owner: "RunDevelopment",
            },
            brainfuck: { title: "Brainfuck", owner: "Golmote" },
            brightscript: { title: "BrightScript", owner: "RunDevelopment" },
            bro: { title: "Bro", owner: "wayward710" },
            bsl: {
              title: "BSL (1C:Enterprise)",
              alias: "oscript",
              aliasTitles: { oscript: "OneScript" },
              owner: "Diversus23",
            },
            c: { title: "C", require: "clike", owner: "zeitgeist87" },
            csharp: {
              title: "C#",
              require: "clike",
              alias: ["cs", "dotnet"],
              owner: "mvalipour",
            },
            cpp: { title: "C++", require: "c", owner: "zeitgeist87" },
            cil: { title: "CIL", owner: "sbrl" },
            clojure: { title: "Clojure", owner: "troglotit" },
            cmake: { title: "CMake", owner: "mjrogozinski" },
            coffeescript: {
              title: "CoffeeScript",
              require: "javascript",
              alias: "coffee",
              owner: "R-osey",
            },
            concurnas: {
              title: "Concurnas",
              alias: "conc",
              owner: "jasontatton",
            },
            csp: { title: "Content-Security-Policy", owner: "ScottHelme" },
            crystal: {
              title: "Crystal",
              require: "ruby",
              owner: "MakeNowJust",
            },
            "css-extras": {
              title: "CSS Extras",
              require: "css",
              modify: "css",
              owner: "milesj",
            },
            cypher: { title: "Cypher", owner: "RunDevelopment" },
            d: { title: "D", require: "clike", owner: "Golmote" },
            dart: { title: "Dart", require: "clike", owner: "Golmote" },
            dataweave: { title: "DataWeave", owner: "machaval" },
            dax: { title: "DAX", owner: "peterbud" },
            dhall: { title: "Dhall", owner: "RunDevelopment" },
            diff: { title: "Diff", owner: "uranusjr" },
            django: {
              title: "Django/Jinja2",
              require: "markup-templating",
              alias: "jinja2",
              owner: "romanvm",
            },
            "dns-zone-file": {
              title: "DNS zone file",
              owner: "RunDevelopment",
              alias: "dns-zone",
            },
            docker: {
              title: "Docker",
              alias: "dockerfile",
              owner: "JustinBeckwith",
            },
            ebnf: { title: "EBNF", owner: "RunDevelopment" },
            editorconfig: { title: "EditorConfig", owner: "osipxd" },
            eiffel: { title: "Eiffel", owner: "Conaclos" },
            ejs: {
              title: "EJS",
              require: ["javascript", "markup-templating"],
              owner: "RunDevelopment",
              alias: "eta",
              aliasTitles: { eta: "Eta" },
            },
            elixir: { title: "Elixir", owner: "Golmote" },
            elm: { title: "Elm", owner: "zwilias" },
            etlua: {
              title: "Embedded Lua templating",
              require: ["lua", "markup-templating"],
              owner: "RunDevelopment",
            },
            erb: {
              title: "ERB",
              require: ["ruby", "markup-templating"],
              owner: "Golmote",
            },
            erlang: { title: "Erlang", owner: "Golmote" },
            "excel-formula": {
              title: "Excel Formula",
              alias: ["xlsx", "xls"],
              owner: "RunDevelopment",
            },
            fsharp: { title: "F#", require: "clike", owner: "simonreynolds7" },
            factor: { title: "Factor", owner: "catb0t" },
            "firestore-security-rules": {
              title: "Firestore security rules",
              require: "clike",
              owner: "RunDevelopment",
            },
            flow: { title: "Flow", require: "javascript", owner: "Golmote" },
            fortran: { title: "Fortran", owner: "Golmote" },
            ftl: {
              title: "FreeMarker Template Language",
              require: "markup-templating",
              owner: "RunDevelopment",
            },
            gml: {
              title: "GameMaker Language",
              alias: "gamemakerlanguage",
              require: "clike",
              owner: "LiarOnce",
            },
            gcode: { title: "G-code", owner: "RunDevelopment" },
            gdscript: { title: "GDScript", owner: "RunDevelopment" },
            gedcom: { title: "GEDCOM", owner: "Golmote" },
            gherkin: { title: "Gherkin", owner: "hason" },
            git: { title: "Git", owner: "lgiraudel" },
            glsl: { title: "GLSL", require: "c", owner: "Golmote" },
            go: { title: "Go", require: "clike", owner: "arnehormann" },
            graphql: {
              title: "GraphQL",
              optional: ["markdown"],
              owner: "Golmote",
            },
            groovy: { title: "Groovy", require: "clike", owner: "robfletcher" },
            haml: {
              title: "Haml",
              require: "ruby",
              optional: [
                "css",
                "css-extras",
                "coffeescript",
                "erb",
                "javascript",
                "less",
                "markdown",
                "scss",
                "textile",
              ],
              owner: "Golmote",
            },
            handlebars: {
              title: "Handlebars",
              require: "markup-templating",
              owner: "Golmote",
            },
            haskell: { title: "Haskell", alias: "hs", owner: "bholst" },
            haxe: { title: "Haxe", require: "clike", owner: "Golmote" },
            hcl: { title: "HCL", owner: "outsideris" },
            hlsl: { title: "HLSL", require: "c", owner: "RunDevelopment" },
            http: {
              title: "HTTP",
              optional: ["css", "javascript", "json", "markup"],
              owner: "danielgtaylor",
            },
            hpkp: { title: "HTTP Public-Key-Pins", owner: "ScottHelme" },
            hsts: {
              title: "HTTP Strict-Transport-Security",
              owner: "ScottHelme",
            },
            ichigojam: { title: "IchigoJam", owner: "BlueCocoa" },
            icon: { title: "Icon", owner: "Golmote" },
            ignore: {
              title: ".ignore",
              owner: "osipxd",
              alias: ["gitignore", "hgignore", "npmignore"],
              aliasTitles: {
                gitignore: ".gitignore",
                hgignore: ".hgignore",
                npmignore: ".npmignore",
              },
            },
            inform7: { title: "Inform 7", owner: "Golmote" },
            ini: { title: "Ini", owner: "aviaryan" },
            io: { title: "Io", owner: "AlesTsurko" },
            j: { title: "J", owner: "Golmote" },
            java: { title: "Java", require: "clike", owner: "sherblot" },
            javadoc: {
              title: "JavaDoc",
              require: ["markup", "java", "javadoclike"],
              modify: "java",
              optional: "scala",
              owner: "RunDevelopment",
            },
            javadoclike: {
              title: "JavaDoc-like",
              modify: ["java", "javascript", "php"],
              owner: "RunDevelopment",
            },
            javastacktrace: {
              title: "Java stack trace",
              owner: "RunDevelopment",
            },
            jolie: { title: "Jolie", require: "clike", owner: "thesave" },
            jq: { title: "JQ", owner: "RunDevelopment" },
            jsdoc: {
              title: "JSDoc",
              require: ["javascript", "javadoclike", "typescript"],
              modify: "javascript",
              optional: ["actionscript", "coffeescript"],
              owner: "RunDevelopment",
            },
            "js-extras": {
              title: "JS Extras",
              require: "javascript",
              modify: "javascript",
              optional: [
                "actionscript",
                "coffeescript",
                "flow",
                "n4js",
                "typescript",
              ],
              owner: "RunDevelopment",
            },
            json: {
              title: "JSON",
              alias: "webmanifest",
              aliasTitles: { webmanifest: "Web App Manifest" },
              owner: "CupOfTea696",
            },
            json5: { title: "JSON5", require: "json", owner: "RunDevelopment" },
            jsonp: { title: "JSONP", require: "json", owner: "RunDevelopment" },
            jsstacktrace: { title: "JS stack trace", owner: "sbrl" },
            "js-templates": {
              title: "JS Templates",
              require: "javascript",
              modify: "javascript",
              optional: ["css", "css-extras", "graphql", "markdown", "markup"],
              owner: "RunDevelopment",
            },
            julia: { title: "Julia", owner: "cdagnino" },
            keyman: { title: "Keyman", owner: "mcdurdin" },
            kotlin: {
              title: "Kotlin",
              alias: ["kt", "kts"],
              aliasTitles: { kts: "Kotlin Script" },
              require: "clike",
              owner: "Golmote",
            },
            latex: {
              title: "LaTeX",
              alias: ["tex", "context"],
              aliasTitles: { tex: "TeX", context: "ConTeXt" },
              owner: "japborst",
            },
            latte: {
              title: "Latte",
              require: ["clike", "markup-templating", "php"],
              owner: "nette",
            },
            less: {
              title: "Less",
              require: "css",
              optional: "css-extras",
              owner: "Golmote",
            },
            lilypond: {
              title: "LilyPond",
              require: "scheme",
              alias: "ly",
              owner: "RunDevelopment",
            },
            liquid: { title: "Liquid", owner: "cinhtau" },
            lisp: {
              title: "Lisp",
              alias: ["emacs", "elisp", "emacs-lisp"],
              owner: "JuanCaicedo",
            },
            livescript: { title: "LiveScript", owner: "Golmote" },
            llvm: { title: "LLVM IR", owner: "porglezomp" },
            lolcode: { title: "LOLCODE", owner: "Golmote" },
            lua: { title: "Lua", owner: "Golmote" },
            makefile: { title: "Makefile", owner: "Golmote" },
            markdown: {
              title: "Markdown",
              require: "markup",
              optional: "yaml",
              alias: "md",
              owner: "Golmote",
            },
            "markup-templating": {
              title: "Markup templating",
              require: "markup",
              owner: "Golmote",
            },
            matlab: { title: "MATLAB", owner: "Golmote" },
            mel: { title: "MEL", owner: "Golmote" },
            mizar: { title: "Mizar", owner: "Golmote" },
            mongodb: {
              title: "MongoDB",
              owner: "airs0urce",
              require: "javascript",
            },
            monkey: { title: "Monkey", owner: "Golmote" },
            moonscript: {
              title: "MoonScript",
              alias: "moon",
              owner: "RunDevelopment",
            },
            n1ql: { title: "N1QL", owner: "TMWilds" },
            n4js: {
              title: "N4JS",
              require: "javascript",
              optional: "jsdoc",
              alias: "n4jsd",
              owner: "bsmith-n4",
            },
            "nand2tetris-hdl": {
              title: "Nand To Tetris HDL",
              owner: "stephanmax",
            },
            naniscript: {
              title: "Naninovel Script",
              owner: "Elringus",
              alias: "nani",
            },
            nasm: { title: "NASM", owner: "rbmj" },
            neon: { title: "NEON", owner: "nette" },
            nginx: { title: "nginx", owner: "westonganger", require: "clike" },
            nim: { title: "Nim", owner: "Golmote" },
            nix: { title: "Nix", owner: "Golmote" },
            nsis: { title: "NSIS", owner: "idleberg" },
            objectivec: {
              title: "Objective-C",
              require: "c",
              alias: "objc",
              owner: "uranusjr",
            },
            ocaml: { title: "OCaml", owner: "Golmote" },
            opencl: {
              title: "OpenCL",
              require: "c",
              modify: ["c", "cpp"],
              owner: "Milania1",
            },
            oz: { title: "Oz", owner: "Golmote" },
            parigp: { title: "PARI/GP", owner: "Golmote" },
            parser: { title: "Parser", require: "markup", owner: "Golmote" },
            pascal: {
              title: "Pascal",
              alias: "objectpascal",
              aliasTitles: { objectpascal: "Object Pascal" },
              owner: "Golmote",
            },
            pascaligo: { title: "Pascaligo", owner: "DefinitelyNotAGoat" },
            pcaxis: { title: "PC-Axis", alias: "px", owner: "RunDevelopment" },
            peoplecode: {
              title: "PeopleCode",
              alias: "pcode",
              owner: "RunDevelopment",
            },
            perl: { title: "Perl", owner: "Golmote" },
            php: {
              title: "PHP",
              require: "markup-templating",
              owner: "milesj",
            },
            phpdoc: {
              title: "PHPDoc",
              require: ["php", "javadoclike"],
              modify: "php",
              owner: "RunDevelopment",
            },
            "php-extras": {
              title: "PHP Extras",
              require: "php",
              modify: "php",
              owner: "milesj",
            },
            plsql: { title: "PL/SQL", require: "sql", owner: "Golmote" },
            powerquery: {
              title: "PowerQuery",
              alias: ["pq", "mscript"],
              owner: "peterbud",
            },
            powershell: { title: "PowerShell", owner: "nauzilus" },
            processing: {
              title: "Processing",
              require: "clike",
              owner: "Golmote",
            },
            prolog: { title: "Prolog", owner: "Golmote" },
            promql: { title: "PromQL", owner: "arendjr" },
            properties: { title: ".properties", owner: "Golmote" },
            protobuf: {
              title: "Protocol Buffers",
              require: "clike",
              owner: "just-boris",
            },
            pug: {
              title: "Pug",
              require: ["markup", "javascript"],
              optional: [
                "coffeescript",
                "ejs",
                "handlebars",
                "less",
                "livescript",
                "markdown",
                "scss",
                "stylus",
                "twig",
              ],
              owner: "Golmote",
            },
            puppet: { title: "Puppet", owner: "Golmote" },
            pure: {
              title: "Pure",
              optional: ["c", "cpp", "fortran"],
              owner: "Golmote",
            },
            purebasic: {
              title: "PureBasic",
              require: "clike",
              alias: "pbfasm",
              owner: "HeX0R101",
            },
            purescript: {
              title: "PureScript",
              require: "haskell",
              alias: "purs",
              owner: "sriharshachilakapati",
            },
            python: { title: "Python", alias: "py", owner: "multipetros" },
            q: { title: "Q (kdb+ database)", owner: "Golmote" },
            qml: {
              title: "QML",
              require: "javascript",
              owner: "RunDevelopment",
            },
            qore: { title: "Qore", require: "clike", owner: "temnroegg" },
            r: { title: "R", owner: "Golmote" },
            racket: {
              title: "Racket",
              require: "scheme",
              alias: "rkt",
              owner: "RunDevelopment",
            },
            jsx: {
              title: "React JSX",
              require: ["markup", "javascript"],
              optional: ["jsdoc", "js-extras", "js-templates"],
              owner: "vkbansal",
            },
            tsx: { title: "React TSX", require: ["jsx", "typescript"] },
            reason: { title: "Reason", require: "clike", owner: "Golmote" },
            regex: { title: "Regex", owner: "RunDevelopment" },
            renpy: { title: "Ren'py", alias: "rpy", owner: "HyuchiaDiego" },
            rest: { title: "reST (reStructuredText)", owner: "Golmote" },
            rip: { title: "Rip", owner: "ravinggenius" },
            roboconf: { title: "Roboconf", owner: "Golmote" },
            robotframework: {
              title: "Robot Framework",
              alias: "robot",
              owner: "RunDevelopment",
            },
            ruby: {
              title: "Ruby",
              require: "clike",
              alias: "rb",
              owner: "samflores",
            },
            rust: { title: "Rust", owner: "Golmote" },
            sas: {
              title: "SAS",
              optional: ["groovy", "lua", "sql"],
              owner: "Golmote",
            },
            sass: { title: "Sass (Sass)", require: "css", owner: "Golmote" },
            scss: {
              title: "Sass (Scss)",
              require: "css",
              optional: "css-extras",
              owner: "MoOx",
            },
            scala: { title: "Scala", require: "java", owner: "jozic" },
            scheme: { title: "Scheme", owner: "bacchus123" },
            "shell-session": {
              title: "Shell session",
              require: "bash",
              alias: ["sh-session", "shellsession"],
              owner: "RunDevelopment",
            },
            smali: { title: "Smali", owner: "RunDevelopment" },
            smalltalk: { title: "Smalltalk", owner: "Golmote" },
            smarty: {
              title: "Smarty",
              require: "markup-templating",
              owner: "Golmote",
            },
            sml: {
              title: "SML",
              alias: "smlnj",
              aliasTitles: { smlnj: "SML/NJ" },
              owner: "RunDevelopment",
            },
            solidity: {
              title: "Solidity (Ethereum)",
              alias: "sol",
              require: "clike",
              owner: "glachaud",
            },
            "solution-file": {
              title: "Solution file",
              alias: "sln",
              owner: "RunDevelopment",
            },
            soy: {
              title: "Soy (Closure Template)",
              require: "markup-templating",
              owner: "Golmote",
            },
            sparql: {
              title: "SPARQL",
              require: "turtle",
              owner: "Triply-Dev",
              alias: "rq",
            },
            "splunk-spl": { title: "Splunk SPL", owner: "RunDevelopment" },
            sqf: {
              title: "SQF: Status Quo Function (Arma 3)",
              require: "clike",
              owner: "RunDevelopment",
            },
            sql: { title: "SQL", owner: "multipetros" },
            stan: { title: "Stan", owner: "RunDevelopment" },
            iecst: {
              title: "Structured Text (IEC 61131-3)",
              owner: "serhioromano",
            },
            stylus: { title: "Stylus", owner: "vkbansal" },
            swift: { title: "Swift", require: "clike", owner: "chrischares" },
            "t4-templating": {
              title: "T4 templating",
              owner: "RunDevelopment",
            },
            "t4-cs": {
              title: "T4 Text Templates (C#)",
              require: ["t4-templating", "csharp"],
              alias: "t4",
              owner: "RunDevelopment",
            },
            "t4-vb": {
              title: "T4 Text Templates (VB)",
              require: ["t4-templating", "vbnet"],
              owner: "RunDevelopment",
            },
            tap: { title: "TAP", owner: "isaacs", require: "yaml" },
            tcl: { title: "Tcl", owner: "PeterChaplin" },
            tt2: {
              title: "Template Toolkit 2",
              require: ["clike", "markup-templating"],
              owner: "gflohr",
            },
            textile: {
              title: "Textile",
              require: "markup",
              optional: "css",
              owner: "Golmote",
            },
            toml: { title: "TOML", owner: "RunDevelopment" },
            turtle: {
              title: "Turtle",
              alias: "trig",
              aliasTitles: { trig: "TriG" },
              owner: "jakubklimek",
            },
            twig: { title: "Twig", require: "markup", owner: "brandonkelly" },
            typescript: {
              title: "TypeScript",
              require: "javascript",
              optional: "js-templates",
              alias: "ts",
              owner: "vkbansal",
            },
            typoscript: {
              title: "TypoScript",
              alias: "tsconfig",
              aliasTitles: { tsconfig: "TSConfig" },
              owner: "dkern",
            },
            unrealscript: {
              title: "UnrealScript",
              alias: ["uscript", "uc"],
              owner: "RunDevelopment",
            },
            vala: {
              title: "Vala",
              require: "clike",
              optional: "regex",
              owner: "TemplarVolk",
            },
            vbnet: { title: "VB.Net", require: "basic", owner: "Bigsby" },
            velocity: {
              title: "Velocity",
              require: "markup",
              owner: "Golmote",
            },
            verilog: { title: "Verilog", owner: "a-rey" },
            vhdl: { title: "VHDL", owner: "a-rey" },
            vim: { title: "vim", owner: "westonganger" },
            "visual-basic": {
              title: "Visual Basic",
              alias: ["vb", "vba"],
              aliasTitles: { vba: "VBA" },
              owner: "Golmote",
            },
            warpscript: { title: "WarpScript", owner: "RunDevelopment" },
            wasm: { title: "WebAssembly", owner: "Golmote" },
            wiki: { title: "Wiki markup", require: "markup", owner: "Golmote" },
            xeora: {
              title: "Xeora",
              require: "markup",
              alias: "xeoracube",
              aliasTitles: { xeoracube: "XeoraCube" },
              owner: "freakmaxi",
            },
            "xml-doc": {
              title: "XML doc (.net)",
              require: "markup",
              modify: ["csharp", "fsharp", "vbnet"],
              owner: "RunDevelopment",
            },
            xojo: { title: "Xojo (REALbasic)", owner: "Golmote" },
            xquery: { title: "XQuery", require: "markup", owner: "Golmote" },
            yaml: { title: "YAML", alias: "yml", owner: "hason" },
            yang: { title: "YANG", owner: "RunDevelopment" },
            zig: { title: "Zig", owner: "RunDevelopment" },
          },
          plugins: {
            meta: { path: "plugins/{id}/prism-{id}", link: "plugins/{id}/" },
            "line-highlight": {
              title: "Line Highlight",
              description: "Highlights specific lines and/or line ranges.",
            },
            "line-numbers": {
              title: "Line Numbers",
              description: "Line number at the beginning of code lines.",
              owner: "kuba-kubula",
            },
            "show-invisibles": {
              title: "Show Invisibles",
              description:
                "Show hidden characters such as tabs and line breaks.",
              optional: ["autolinker", "data-uri-highlight"],
            },
            autolinker: {
              title: "Autolinker",
              description:
                "Converts URLs and emails in code to clickable links. Parses Markdown links in comments.",
            },
            wpd: {
              title: "WebPlatform Docs",
              description:
                'Makes tokens link to <a href="https://webplatform.github.io/docs/">WebPlatform.org documentation</a>. The links open in a new tab.',
            },
            "custom-class": {
              title: "Custom Class",
              description:
                "This plugin allows you to prefix Prism's default classes (<code class="language-js >.comment</code> can become <code class="language-js >.namespace--comment</code>) or replace them with your defined ones (like <code class="language-js >.editor__comment</code>). You can even add new classes.",
              owner: "dvkndn",
              noCSS: !0,
            },
            "file-highlight": {
              title: "File Highlight",
              description:
                "Fetch external files and highlight them with Prism. Used on the Prism website itself.",
              noCSS: !0,
            },
            "show-language": {
              title: "Show Language",
              description:
                "Display the highlighted language in code blocks (inline code does not show the label).",
              owner: "nauzilus",
              noCSS: !0,
              require: "toolbar",
            },
            "jsonp-highlight": {
              title: "JSONP Highlight",
              description:
                "Fetch content with JSONP and highlight some interesting content (e.g. GitHub/Gists or Bitbucket API).",
              noCSS: !0,
              owner: "nauzilus",
            },
            "highlight-keywords": {
              title: "Highlight Keywords",
              description:
                "Adds special CSS classes for each keyword matched in the code. For example, the keyword <code class="language-js >if</code> will have the class <code class="language-js >keyword-if</code> as well. You can have fine grained control over the appearance of each keyword by providing your own CSS rules.",
              owner: "vkbansal",
              noCSS: !0,
            },
            "remove-initial-line-feed": {
              title: "Remove initial line feed",
              description: "Removes the initial line feed in code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "inline-color": {
              title: "Inline color",
              description:
                "Adds a small inline preview for colors in style sheets.",
              require: "css-extras",
              owner: "RunDevelopment",
            },
            previewers: {
              title: "Previewers",
              description:
                "Previewers for angles, colors, gradients, easing and time.",
              require: "css-extras",
              owner: "Golmote",
            },
            autoloader: {
              title: "Autoloader",
              description:
                "Automatically loads the needed languages to highlight the code blocks.",
              owner: "Golmote",
              noCSS: !0,
            },
            "keep-markup": {
              title: "Keep Markup",
              description:
                "Prevents custom markup from being dropped out during highlighting.",
              owner: "Golmote",
              optional: "normalize-whitespace",
              noCSS: !0,
            },
            "command-line": {
              title: "Command Line",
              description:
                "Display a command line with a prompt and, optionally, the output/response from the commands.",
              owner: "chriswells0",
            },
            "unescaped-markup": {
              title: "Unescaped Markup",
              description: "Write markup without having to escape anything.",
            },
            "normalize-whitespace": {
              title: "Normalize Whitespace",
              description:
                "Supports multiple operations to normalize whitespace in code blocks.",
              owner: "zeitgeist87",
              optional: "unescaped-markup",
              noCSS: !0,
            },
            "data-uri-highlight": {
              title: "Data-URI Highlight",
              description: "Highlights data-URI contents.",
              owner: "Golmote",
              noCSS: !0,
            },
            toolbar: {
              title: "Toolbar",
              description:
                "Attach a toolbar for plugins to easily register buttons on the top of a code block.",
              owner: "mAAdhaTTah",
            },
            "copy-to-clipboard": {
              title: "Copy to Clipboard Button",
              description:
                "Add a button that copies the code block to the clipboard when clicked.",
              owner: "mAAdhaTTah",
              require: "toolbar",
              noCSS: !0,
            },
            "download-button": {
              title: "Download Button",
              description:
                "A button in the toolbar of a code block adding a convenient way to download a code file.",
              owner: "Golmote",
              require: "toolbar",
              noCSS: !0,
            },
            "match-braces": {
              title: "Match braces",
              description: "Highlights matching braces.",
              owner: "RunDevelopment",
            },
            "diff-highlight": {
              title: "Diff Highlight",
              description: "Highlights the code inside diff blocks.",
              owner: "RunDevelopment",
              require: "diff",
            },
            "filter-highlight-all": {
              title: "Filter highlightAll",
              description:
                "Filters the elements the <code class="language-js >highlightAll</code> and <code class="language-js >highlightAllUnder</code> methods actually highlight.",
              owner: "RunDevelopment",
              noCSS: !0,
            },
            treeview: {
              title: "Treeview",
              description:
                "A language with special styles to highlight file system tree structures.",
              owner: "Golmote",
            },
          },
        });
    },
    2885: function (e, t, n) {
      const r = n(9901),
        a = n(9642),
        i = new Set();
      function o(e) {
        void 0 === e
          ? (e = Object.keys(r.languages).filter((e) => "meta" != e))
          : Array.isArray(e) || (e = [e]);
        const t = [...i, ...Object.keys(Prism.languages)];
        a(r, e, t).load((e) => {
          if (!(e in r.languages))
            return void (
              o.silent || console.warn("Language does not exist: " + e)
            );
          const t = "./prism-" + e;
          delete n.c[n(6500).resolve(t)],
            delete Prism.languages[e],
            n(6500)(t),
            i.add(e);
        });
      }
      (o.silent = !1), (e.exports = o);
    },
    6500: function (e, t, n) {
      var r = { "./": 2885 };
      function a(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 6500);
    },
    9642: function (e) {
      "use strict";
      var t = (function () {
        var e = function () {};
        function t(e, t) {
          Array.isArray(e) ? e.forEach(t) : null != e && t(e, 0);
        }
        function n(e) {
          for (var t = {}, n = 0, r = e.length; n < r; n++) t[e[n]] = !0;
          return t;
        }
        function r(e) {
          var n = {},
            r = [];
          function a(r, i) {
            if (!(r in n)) {
              i.push(r);
              var o = i.indexOf(r);
              if (o < i.length - 1)
                throw new Error(
                  "Circular dependency: " + i.slice(o).join(" -> ")
                );
              var l = {},
                s = e[r];
              if (s) {
                function u(t) {
                  if (!(t in e))
                    throw new Error(
                      r + " depends on an unknown component " + t
                    );
                  if (!(t in l))
                    for (var o in (a(t, i), (l[t] = !0), n[t])) l[o] = !0;
                }
                t(s.require, u), t(s.optional, u), t(s.modify, u);
              }
              (n[r] = l), i.pop();
            }
          }
          return function (e) {
            var t = n[e];
            return t || (a(e, r), (t = n[e])), t;
          };
        }
        function a(e) {
          for (var t in e) return !0;
          return !1;
        }
        return function (i, o, l) {
          var s = (function (e) {
              var t = {};
              for (var n in e) {
                var r = e[n];
                for (var a in r)
                  if ("meta" != a) {
                    var i = r[a];
                    t[a] = "string" == typeof i ? { title: i } : i;
                  }
              }
              return t;
            })(i),
            u = (function (e) {
              var n;
              return function (r) {
                if (r in e) return r;
                if (!n)
                  for (var a in ((n = {}), e)) {
                    var i = e[a];
                    t(i && i.alias, function (t) {
                      if (t in n)
                        throw new Error(
                          t + " cannot be alias for both " + a + " and " + n[t]
                        );
                      if (t in e)
                        throw new Error(
                          t +
                            " cannot be alias of " +
                            a +
                            " because it is a component."
                        );
                      n[t] = a;
                    });
                  }
                return n[r] || r;
              };
            })(s);
          (o = o.map(u)), (l = (l || []).map(u));
          var c = n(o),
            d = n(l);
          o.forEach(function e(n) {
            var r = s[n];
            t(r && r.require, function (t) {
              t in d || ((c[t] = !0), e(t));
            });
          });
          for (var p, f = r(s), m = c; a(m); ) {
            for (var h in ((p = {}), m)) {
              var g = s[h];
              t(g && g.modify, function (e) {
                e in d && (p[e] = !0);
              });
            }
            for (var b in d)
              if (!(b in c))
                for (var y in f(b))
                  if (y in c) {
                    p[b] = !0;
                    break;
                  }
            for (var v in (m = p)) c[v] = !0;
          }
          var w = {
            getIds: function () {
              var e = [];
              return (
                w.load(function (t) {
                  e.push(t);
                }),
                e
              );
            },
            load: function (t, n) {
              return (function (t, n, r, a) {
                const i = a ? a.series : void 0,
                  o = a ? a.parallel : e;
                var l = {},
                  s = {};
                function u(e) {
                  if (e in l) return l[e];
                  s[e] = !0;
                  var a,
                    c = [];
                  for (var d in t(e)) d in n && c.push(d);
                  if (0 === c.length) a = r(e);
                  else {
                    var p = o(
                      c.map(function (e) {
                        var t = u(e);
                        return delete s[e], t;
                      })
                    );
                    i
                      ? (a = i(p, function () {
                          return r(e);
                        }))
                      : r(e);
                  }
                  return (l[e] = a);
                }
                for (var c in n) u(c);
                var d = [];
                for (var p in s) d.push(l[p]);
                return o(d);
              })(f, c, t, n);
            },
          };
          return w;
        };
      })();
      e.exports = t;
    },
    2703: function (e, t, n) {
      "use strict";
      var r = n(414);
      function a() {}
      function i() {}
      (i.resetWarningCache = a),
        (e.exports = function () {
          function e(e, t, n, a, i, o) {
            if (o !== r) {
              var l = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((l.name = "Invariant Violation"), l);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var n = {
            array: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: i,
            resetWarningCache: a,
          };
          return (n.PropTypes = n), n;
        });
    },
    5697: function (e, t, n) {
      e.exports = n(2703)();
    },
    414: function (e) {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    4448: function (e, t, n) {
      "use strict";
      var r = n(7294),
        a = n(7418),
        i = n(3840);
      function o(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      if (!r) throw Error(o(227));
      var l = new Set(),
        s = {};
      function u(e, t) {
        c(e, t), c(e + "Capture", t);
      }
      function c(e, t) {
        for (s[e] = t, e = 0; e < t.length; e++) l.add(t[e]);
      }
      var d = !(
          "undefined" == typeof window ||
          void 0 === window.document ||
          void 0 === window.document.createElement
        ),
        p =
          /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
        f = Object.prototype.hasOwnProperty,
        m = {},
        h = {};
      function g(e, t, n, r, a, i, o) {
        (this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
          (this.attributeName = r),
          (this.attributeNamespace = a),
          (this.mustUseProperty = n),
          (this.propertyName = e),
          (this.type = t),
          (this.sanitizeURL = i),
          (this.removeEmptyString = o);
      }
      var b = {};
      "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
        .split(" ")
        .forEach(function (e) {
          b[e] = new g(e, 0, !1, e, null, !1, !1);
        }),
        [
          ["acceptCharset", "accept-charset"],
          ["className", "class"],
          ["htmlFor", "for"],
          ["httpEquiv", "http-equiv"],
        ].forEach(function (e) {
          var t = e[0];
          b[t] = new g(t, 1, !1, e[1], null, !1, !1);
        }),
        ["contentEditable", "draggable", "spellCheck", "value"].forEach(
          function (e) {
            b[e] = new g(e, 2, !1, e.toLowerCase(), null, !1, !1);
          }
        ),
        [
          "autoReverse",
          "externalResourcesRequired",
          "focusable",
          "preserveAlpha",
        ].forEach(function (e) {
          b[e] = new g(e, 2, !1, e, null, !1, !1);
        }),
        "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
          .split(" ")
          .forEach(function (e) {
            b[e] = new g(e, 3, !1, e.toLowerCase(), null, !1, !1);
          }),
        ["checked", "multiple", "muted", "selected"].forEach(function (e) {
          b[e] = new g(e, 3, !0, e, null, !1, !1);
        }),
        ["capture", "download"].forEach(function (e) {
          b[e] = new g(e, 4, !1, e, null, !1, !1);
        }),
        ["cols", "rows", "size", "span"].forEach(function (e) {
          b[e] = new g(e, 6, !1, e, null, !1, !1);
        }),
        ["rowSpan", "start"].forEach(function (e) {
          b[e] = new g(e, 5, !1, e.toLowerCase(), null, !1, !1);
        });
      var y = /[\-:]([a-z])/g;
      function v(e) {
        return e[1].toUpperCase();
      }
      function w(e, t, n, r) {
        var a = b.hasOwnProperty(t) ? b[t] : null;
        (null !== a
          ? 0 === a.type
          : !r &&
            2 < t.length &&
            ("o" === t[0] || "O" === t[0]) &&
            ("n" === t[1] || "N" === t[1])) ||
          ((function (e, t, n, r) {
            if (
              null == t ||
              (function (e, t, n, r) {
                if (null !== n && 0 === n.type) return !1;
                switch (typeof t) {
                  case "function":
                  case "symbol":
                    return !0;
                  case "boolean":
                    return (
                      !r &&
                      (null !== n
                        ? !n.acceptsBooleans
                        : "data-" !== (e = e.toLowerCase().slice(0, 5)) &&
                          "aria-" !== e)
                    );
                  default:
                    return !1;
                }
              })(e, t, n, r)
            )
              return !0;
            if (r) return !1;
            if (null !== n)
              switch (n.type) {
                case 3:
                  return !t;
                case 4:
                  return !1 === t;
                case 5:
                  return isNaN(t);
                case 6:
                  return isNaN(t) || 1 > t;
              }
            return !1;
          })(t, n, a, r) && (n = null),
          r || null === a
            ? (function (e) {
                return (
                  !!f.call(h, e) ||
                  (!f.call(m, e) &&
                    (p.test(e) ? (h[e] = !0) : ((m[e] = !0), !1)))
                );
              })(t) &&
              (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : a.mustUseProperty
            ? (e[a.propertyName] = null === n ? 3 !== a.type && "" : n)
            : ((t = a.attributeName),
              (r = a.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (a = a.type) || (4 === a && !0 === n) ? "" : "" + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
      }
      "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
        .split(" ")
        .forEach(function (e) {
          var t = e.replace(y, v);
          b[t] = new g(t, 1, !1, e, null, !1, !1);
        }),
        "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
          .split(" ")
          .forEach(function (e) {
            var t = e.replace(y, v);
            b[t] = new g(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
          }),
        ["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
          var t = e.replace(y, v);
          b[t] = new g(
            t,
            1,
            !1,
            e,
            "http://www.w3.org/XML/1998/namespace",
            !1,
            !1
          );
        }),
        ["tabIndex", "crossOrigin"].forEach(function (e) {
          b[e] = new g(e, 1, !1, e.toLowerCase(), null, !1, !1);
        }),
        (b.xlinkHref = new g(
          "xlinkHref",
          1,
          !1,
          "xlink:href",
          "http://www.w3.org/1999/xlink",
          !0,
          !1
        )),
        ["src", "href", "action", "formAction"].forEach(function (e) {
          b[e] = new g(e, 1, !1, e.toLowerCase(), null, !0, !0);
        });
      var k = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
        S = 60103,
        E = 60106,
        x = 60107,
        T = 60108,
        C = 60114,
        A = 60109,
        _ = 60110,
        O = 60112,
        R = 60113,
        P = 60120,
        L = 60115,
        N = 60116,
        I = 60121,
        D = 60128,
        F = 60129,
        M = 60130,
        j = 60131;
      if ("function" == typeof Symbol && Symbol.for) {
        var B = Symbol.for;
        (S = B("react.element")),
          (E = B("react.portal")),
          (x = B("react.fragment")),
          (T = B("react.strict_mode")),
          (C = B("react.profiler")),
          (A = B("react.provider")),
          (_ = B("react.context")),
          (O = B("react.forward_ref")),
          (R = B("react.suspense")),
          (P = B("react.suspense_list")),
          (L = B("react.memo")),
          (N = B("react.lazy")),
          (I = B("react.block")),
          B("react.scope"),
          (D = B("react.opaque.id")),
          (F = B("react.debug_trace_mode")),
          (M = B("react.offscreen")),
          (j = B("react.legacy_hidden"));
      }
      var z,
        q = "function" == typeof Symbol && Symbol.iterator;
      function U(e) {
        return null === e || "object" != typeof e
          ? null
          : "function" == typeof (e = (q && e[q]) || e["@@iterator"])
          ? e
          : null;
      }
      function $(e) {
        if (void 0 === z)
          try {
            throw Error();
          } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            z = (t && t[1]) || "";
          }
        return "\n" + z + e;
      }
      var G = !1;
      function H(e, t) {
        if (!e || G) return "";
        G = !0;
        var n = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        try {
          if (t)
            if (
              ((t = function () {
                throw Error();
              }),
              Object.defineProperty(t.prototype, "props", {
                set: function () {
                  throw Error();
                },
              }),
              "object" == typeof Reflect && Reflect.construct)
            ) {
              try {
                Reflect.construct(t, []);
              } catch (s) {
                var r = s;
              }
              Reflect.construct(e, [], t);
            } else {
              try {
                t.call();
              } catch (s) {
                r = s;
              }
              e.call(t.prototype);
            }
          else {
            try {
              throw Error();
            } catch (s) {
              r = s;
            }
            e();
          }
        } catch (s) {
          if (s && r && "string" == typeof s.stack) {
            for (
              var a = s.stack.split("\n"),
                i = r.stack.split("\n"),
                o = a.length - 1,
                l = i.length - 1;
              1 <= o && 0 <= l && a[o] !== i[l];

            )
              l--;
            for (; 1 <= o && 0 <= l; o--, l--)
              if (a[o] !== i[l]) {
                if (1 !== o || 1 !== l)
                  do {
                    if ((o--, 0 > --l || a[o] !== i[l]))
                      return "\n" + a[o].replace(" at new ", " at ");
                  } while (1 <= o && 0 <= l);
                break;
              }
          }
        } finally {
          (G = !1), (Error.prepareStackTrace = n);
        }
        return (e = e ? e.displayName || e.name : "") ? $(e) : "";
      }
      function W(e) {
        switch (e.tag) {
          case 5:
            return $(e.type);
          case 16:
            return $("Lazy");
          case 13:
            return $("Suspense");
          case 19:
            return $("SuspenseList");
          case 0:
          case 2:
          case 15:
            return (e = H(e.type, !1));
          case 11:
            return (e = H(e.type.render, !1));
          case 22:
            return (e = H(e.type._render, !1));
          case 1:
            return (e = H(e.type, !0));
          default:
            return "";
        }
      }
      function V(e) {
        if (null == e) return null;
        if ("function" == typeof e) return e.displayName || e.name || null;
        if ("string" == typeof e) return e;
        switch (e) {
          case x:
            return "Fragment";
          case E:
            return "Portal";
          case C:
            return "Profiler";
          case T:
            return "StrictMode";
          case R:
            return "Suspense";
          case P:
            return "SuspenseList";
        }
        if ("object" == typeof e)
          switch (e.$$typeof) {
            case _:
              return (e.displayName || "Context") + ".Consumer";
            case A:
              return (e._context.displayName || "Context") + ".Provider";
            case O:
              var t = e.render;
              return (
                (t = t.displayName || t.name || ""),
                e.displayName ||
                  ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef")
              );
            case L:
              return V(e.type);
            case I:
              return V(e._render);
            case N:
              (t = e._payload), (e = e._init);
              try {
                return V(e(t));
              } catch (n) {}
          }
        return null;
      }
      function Z(e) {
        switch (typeof e) {
          case "boolean":
          case "number":
          case "object":
          case "string":
          case "undefined":
            return e;
          default:
            return "";
        }
      }
      function Y(e) {
        var t = e.type;
        return (
          (e = e.nodeName) &&
          "input" === e.toLowerCase() &&
          ("checkbox" === t || "radio" === t)
        );
      }
      function K(e) {
        e._valueTracker ||
          (e._valueTracker = (function (e) {
            var t = Y(e) ? "checked" : "value",
              n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
              r = "" + e[t];
            if (
              !e.hasOwnProperty(t) &&
              void 0 !== n &&
              "function" == typeof n.get &&
              "function" == typeof n.set
            ) {
              var a = n.get,
                i = n.set;
              return (
                Object.defineProperty(e, t, {
                  configurable: !0,
                  get: function () {
                    return a.call(this);
                  },
                  set: function (e) {
                    (r = "" + e), i.call(this, e);
                  },
                }),
                Object.defineProperty(e, t, { enumerable: n.enumerable }),
                {
                  getValue: function () {
                    return r;
                  },
                  setValue: function (e) {
                    r = "" + e;
                  },
                  stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                  },
                }
              );
            }
          })(e));
      }
      function Q(e) {
        if (!e) return !1;
        var t = e._valueTracker;
        if (!t) return !0;
        var n = t.getValue(),
          r = "";
        return (
          e && (r = Y(e) ? (e.checked ? "true" : "false") : e.value),
          (e = r) !== n && (t.setValue(e), !0)
        );
      }
      function X(e) {
        if (
          void 0 ===
          (e = e || ("undefined" != typeof document ? document : void 0))
        )
          return null;
        try {
          return e.activeElement || e.body;
        } catch (t) {
          return e.body;
        }
      }
      function J(e, t) {
        var n = t.checked;
        return a({}, t, {
          defaultChecked: void 0,
          defaultValue: void 0,
          value: void 0,
          checked: null != n ? n : e._wrapperState.initialChecked,
        });
      }
      function ee(e, t) {
        var n = null == t.defaultValue ? "" : t.defaultValue,
          r = null != t.checked ? t.checked : t.defaultChecked;
        (n = Z(null != t.value ? t.value : n)),
          (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
              "checkbox" === t.type || "radio" === t.type
                ? null != t.checked
                : null != t.value,
          });
      }
      function te(e, t) {
        null != (t = t.checked) && w(e, "checked", t, !1);
      }
      function ne(e, t) {
        te(e, t);
        var n = Z(t.value),
          r = t.type;
        if (null != n)
          "number" === r
            ? ((0 === n && "" === e.value) || e.value != n) &&
              (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
        else if ("submit" === r || "reset" === r)
          return void e.removeAttribute("value");
        t.hasOwnProperty("value")
          ? ae(e, t.type, n)
          : t.hasOwnProperty("defaultValue") &&
            ae(e, t.type, Z(t.defaultValue)),
          null == t.checked &&
            null != t.defaultChecked &&
            (e.defaultChecked = !!t.defaultChecked);
      }
      function re(e, t, n) {
        if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
          var r = t.type;
          if (
            !(
              ("submit" !== r && "reset" !== r) ||
              (void 0 !== t.value && null !== t.value)
            )
          )
            return;
          (t = "" + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t);
        }
        "" !== (n = e.name) && (e.name = ""),
          (e.defaultChecked = !!e._wrapperState.initialChecked),
          "" !== n && (e.name = n);
      }
      function ae(e, t, n) {
        ("number" === t && X(e.ownerDocument) === e) ||
          (null == n
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
      }
      function ie(e, t) {
        return (
          (e = a({ children: void 0 }, t)),
          (t = (function (e) {
            var t = "";
            return (
              r.Children.forEach(e, function (e) {
                null != e && (t += e);
              }),
              t
            );
          })(t.children)) && (e.children = t),
          e
        );
      }
      function oe(e, t, n, r) {
        if (((e = e.options), t)) {
          t = {};
          for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
          for (n = 0; n < e.length; n++)
            (a = t.hasOwnProperty("$" + e[n].value)),
              e[n].selected !== a && (e[n].selected = a),
              a && r && (e[n].defaultSelected = !0);
        } else {
          for (n = "" + Z(n), t = null, a = 0; a < e.length; a++) {
            if (e[a].value === n)
              return (
                (e[a].selected = !0), void (r && (e[a].defaultSelected = !0))
              );
            null !== t || e[a].disabled || (t = e[a]);
          }
          null !== t && (t.selected = !0);
        }
      }
      function le(e, t) {
        if (null != t.dangerouslySetInnerHTML) throw Error(o(91));
        return a({}, t, {
          value: void 0,
          defaultValue: void 0,
          children: "" + e._wrapperState.initialValue,
        });
      }
      function se(e, t) {
        var n = t.value;
        if (null == n) {
          if (((n = t.children), (t = t.defaultValue), null != n)) {
            if (null != t) throw Error(o(92));
            if (Array.isArray(n)) {
              if (!(1 >= n.length)) throw Error(o(93));
              n = n[0];
            }
            t = n;
          }
          null == t && (t = ""), (n = t);
        }
        e._wrapperState = { initialValue: Z(n) };
      }
      function ue(e, t) {
        var n = Z(t.value),
          r = Z(t.defaultValue);
        null != n &&
          ((n = "" + n) !== e.value && (e.value = n),
          null == t.defaultValue &&
            e.defaultValue !== n &&
            (e.defaultValue = n)),
          null != r && (e.defaultValue = "" + r);
      }
      function ce(e) {
        var t = e.textContent;
        t === e._wrapperState.initialValue &&
          "" !== t &&
          null !== t &&
          (e.value = t);
      }
      var de = "http://www.w3.org/1999/xhtml",
        pe = "http://www.w3.org/2000/svg";
      function fe(e) {
        switch (e) {
          case "svg":
            return "http://www.w3.org/2000/svg";
          case "math":
            return "http://www.w3.org/1998/Math/MathML";
          default:
            return "http://www.w3.org/1999/xhtml";
        }
      }
      function me(e, t) {
        return null == e || "http://www.w3.org/1999/xhtml" === e
          ? fe(t)
          : "http://www.w3.org/2000/svg" === e && "foreignObject" === t
          ? "http://www.w3.org/1999/xhtml"
          : e;
      }
      var he,
        ge,
        be =
          ((ge = function (e, t) {
            if (e.namespaceURI !== pe || "innerHTML" in e) e.innerHTML = t;
            else {
              for (
                (he = he || document.createElement("div")).innerHTML =
                  "<svg>" + t.valueOf().toString() + "</svg>",
                  t = he.firstChild;
                e.firstChild;

              )
                e.removeChild(e.firstChild);
              for (; t.firstChild; ) e.appendChild(t.firstChild);
            }
          }),
          "undefined" != typeof MSApp && MSApp.execUnsafeLocalFunction
            ? function (e, t, n, r) {
                MSApp.execUnsafeLocalFunction(function () {
                  return ge(e, t);
                });
              }
            : ge);
      function ye(e, t) {
        if (t) {
          var n = e.firstChild;
          if (n && n === e.lastChild && 3 === n.nodeType)
            return void (n.nodeValue = t);
        }
        e.textContent = t;
      }
      var ve = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridArea: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0,
        },
        we = ["Webkit", "ms", "Moz", "O"];
      function ke(e, t, n) {
        return null == t || "boolean" == typeof t || "" === t
          ? ""
          : n ||
            "number" != typeof t ||
            0 === t ||
            (ve.hasOwnProperty(e) && ve[e])
          ? ("" + t).trim()
          : t + "px";
      }
      function Se(e, t) {
        for (var n in ((e = e.style), t))
          if (t.hasOwnProperty(n)) {
            var r = 0 === n.indexOf("--"),
              a = ke(n, t[n], r);
            "float" === n && (n = "cssFloat"),
              r ? e.setProperty(n, a) : (e[n] = a);
          }
      }
      Object.keys(ve).forEach(function (e) {
        we.forEach(function (t) {
          (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ve[t] = ve[e]);
        });
      });
      var Ee = a(
        { menuitem: !0 },
        {
          area: !0,
          base: !0,
          br: !0,
          col: !0,
          embed: !0,
          hr: !0,
          img: !0,
          input: !0,
          keygen: !0,
          link: !0,
          meta: !0,
          param: !0,
          source: !0,
          track: !0,
          wbr: !0,
        }
      );
      function xe(e, t) {
        if (t) {
          if (
            Ee[e] &&
            (null != t.children || null != t.dangerouslySetInnerHTML)
          )
            throw Error(o(137, e));
          if (null != t.dangerouslySetInnerHTML) {
            if (null != t.children) throw Error(o(60));
            if (
              "object" != typeof t.dangerouslySetInnerHTML ||
              !("__html" in t.dangerouslySetInnerHTML)
            )
              throw Error(o(61));
          }
          if (null != t.style && "object" != typeof t.style) throw Error(o(62));
        }
      }
      function Te(e, t) {
        if (-1 === e.indexOf("-")) return "string" == typeof t.is;
        switch (e) {
          case "annotation-xml":
          case "color-profile":
          case "font-face":
          case "font-face-src":
          case "font-face-uri":
          case "font-face-format":
          case "font-face-name":
          case "missing-glyph":
            return !1;
          default:
            return !0;
        }
      }
      function Ce(e) {
        return (
          (e = e.target || e.srcElement || window).correspondingUseElement &&
            (e = e.correspondingUseElement),
          3 === e.nodeType ? e.parentNode : e
        );
      }
      var Ae = null,
        _e = null,
        Oe = null;
      function Re(e) {
        if ((e = ea(e))) {
          if ("function" != typeof Ae) throw Error(o(280));
          var t = e.stateNode;
          t && ((t = na(t)), Ae(e.stateNode, e.type, t));
        }
      }
      function Pe(e) {
        _e ? (Oe ? Oe.push(e) : (Oe = [e])) : (_e = e);
      }
      function Le() {
        if (_e) {
          var e = _e,
            t = Oe;
          if (((Oe = _e = null), Re(e), t))
            for (e = 0; e < t.length; e++) Re(t[e]);
        }
      }
      function Ne(e, t) {
        return e(t);
      }
      function Ie(e, t, n, r, a) {
        return e(t, n, r, a);
      }
      function De() {}
      var Fe = Ne,
        Me = !1,
        je = !1;
      function Be() {
        (null === _e && null === Oe) || (De(), Le());
      }
      function ze(e, t) {
        var n = e.stateNode;
        if (null === n) return null;
        var r = na(n);
        if (null === r) return null;
        n = r[t];
        e: switch (t) {
          case "onClick":
          case "onClickCapture":
          case "onDoubleClick":
          case "onDoubleClickCapture":
          case "onMouseDown":
          case "onMouseDownCapture":
          case "onMouseMove":
          case "onMouseMoveCapture":
          case "onMouseUp":
          case "onMouseUpCapture":
          case "onMouseEnter":
            (r = !r.disabled) ||
              (r = !(
                "button" === (e = e.type) ||
                "input" === e ||
                "select" === e ||
                "textarea" === e
              )),
              (e = !r);
            break e;
          default:
            e = !1;
        }
        if (e) return null;
        if (n && "function" != typeof n) throw Error(o(231, t, typeof n));
        return n;
      }
      var qe = !1;
      if (d)
        try {
          var Ue = {};
          Object.defineProperty(Ue, "passive", {
            get: function () {
              qe = !0;
            },
          }),
            window.addEventListener("test", Ue, Ue),
            window.removeEventListener("test", Ue, Ue);
        } catch (ge) {
          qe = !1;
        }
      function $e(e, t, n, r, a, i, o, l, s) {
        var u = Array.prototype.slice.call(arguments, 3);
        try {
          t.apply(n, u);
        } catch (c) {
          this.onError(c);
        }
      }
      var Ge = !1,
        He = null,
        We = !1,
        Ve = null,
        Ze = {
          onError: function (e) {
            (Ge = !0), (He = e);
          },
        };
      function Ye(e, t, n, r, a, i, o, l, s) {
        (Ge = !1), (He = null), $e.apply(Ze, arguments);
      }
      function Ke(e) {
        var t = e,
          n = e;
        if (e.alternate) for (; t.return; ) t = t.return;
        else {
          e = t;
          do {
            0 != (1026 & (t = e).flags) && (n = t.return), (e = t.return);
          } while (e);
        }
        return 3 === t.tag ? n : null;
      }
      function Qe(e) {
        if (13 === e.tag) {
          var t = e.memoizedState;
          if (
            (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
            null !== t)
          )
            return t.dehydrated;
        }
        return null;
      }
      function Xe(e) {
        if (Ke(e) !== e) throw Error(o(188));
      }
      function Je(e) {
        if (
          !(e = (function (e) {
            var t = e.alternate;
            if (!t) {
              if (null === (t = Ke(e))) throw Error(o(188));
              return t !== e ? null : e;
            }
            for (var n = e, r = t; ; ) {
              var a = n.return;
              if (null === a) break;
              var i = a.alternate;
              if (null === i) {
                if (null !== (r = a.return)) {
                  n = r;
                  continue;
                }
                break;
              }
              if (a.child === i.child) {
                for (i = a.child; i; ) {
                  if (i === n) return Xe(a), e;
                  if (i === r) return Xe(a), t;
                  i = i.sibling;
                }
                throw Error(o(188));
              }
              if (n.return !== r.return) (n = a), (r = i);
              else {
                for (var l = !1, s = a.child; s; ) {
                  if (s === n) {
                    (l = !0), (n = a), (r = i);
                    break;
                  }
                  if (s === r) {
                    (l = !0), (r = a), (n = i);
                    break;
                  }
                  s = s.sibling;
                }
                if (!l) {
                  for (s = i.child; s; ) {
                    if (s === n) {
                      (l = !0), (n = i), (r = a);
                      break;
                    }
                    if (s === r) {
                      (l = !0), (r = i), (n = a);
                      break;
                    }
                    s = s.sibling;
                  }
                  if (!l) throw Error(o(189));
                }
              }
              if (n.alternate !== r) throw Error(o(190));
            }
            if (3 !== n.tag) throw Error(o(188));
            return n.stateNode.current === n ? e : t;
          })(e))
        )
          return null;
        for (var t = e; ; ) {
          if (5 === t.tag || 6 === t.tag) return t;
          if (t.child) (t.child.return = t), (t = t.child);
          else {
            if (t === e) break;
            for (; !t.sibling; ) {
              if (!t.return || t.return === e) return null;
              t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
          }
        }
        return null;
      }
      function et(e, t) {
        for (var n = e.alternate; null !== t; ) {
          if (t === e || t === n) return !0;
          t = t.return;
        }
        return !1;
      }
      var tt,
        nt,
        rt,
        at,
        it = !1,
        ot = [],
        lt = null,
        st = null,
        ut = null,
        ct = new Map(),
        dt = new Map(),
        pt = [],
        ft =
          "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
          );
      function mt(e, t, n, r, a) {
        return {
          blockedOn: e,
          domEventName: t,
          eventSystemFlags: 16 | n,
          nativeEvent: a,
          targetContainers: [r],
        };
      }
      function ht(e, t) {
        switch (e) {
          case "focusin":
          case "focusout":
            lt = null;
            break;
          case "dragenter":
          case "dragleave":
            st = null;
            break;
          case "mouseover":
          case "mouseout":
            ut = null;
            break;
          case "pointerover":
          case "pointerout":
            ct.delete(t.pointerId);
            break;
          case "gotpointercapture":
          case "lostpointercapture":
            dt.delete(t.pointerId);
        }
      }
      function gt(e, t, n, r, a, i) {
        return null === e || e.nativeEvent !== i
          ? ((e = mt(t, n, r, a, i)),
            null !== t && null !== (t = ea(t)) && nt(t),
            e)
          : ((e.eventSystemFlags |= r),
            (t = e.targetContainers),
            null !== a && -1 === t.indexOf(a) && t.push(a),
            e);
      }
      function bt(e) {
        var t = Jr(e.target);
        if (null !== t) {
          var n = Ke(t);
          if (null !== n)
            if (13 === (t = n.tag)) {
              if (null !== (t = Qe(n)))
                return (
                  (e.blockedOn = t),
                  void at(e.lanePriority, function () {
                    i.unstable_runWithPriority(e.priority, function () {
                      rt(n);
                    });
                  })
                );
            } else if (3 === t && n.stateNode.hydrate)
              return void (e.blockedOn =
                3 === n.tag ? n.stateNode.containerInfo : null);
        }
        e.blockedOn = null;
      }
      function yt(e) {
        if (null !== e.blockedOn) return !1;
        for (var t = e.targetContainers; 0 < t.length; ) {
          var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
          if (null !== n)
            return null !== (t = ea(n)) && nt(t), (e.blockedOn = n), !1;
          t.shift();
        }
        return !0;
      }
      function vt(e, t, n) {
        yt(e) && n.delete(t);
      }
      function wt() {
        for (it = !1; 0 < ot.length; ) {
          var e = ot[0];
          if (null !== e.blockedOn) {
            null !== (e = ea(e.blockedOn)) && tt(e);
            break;
          }
          for (var t = e.targetContainers; 0 < t.length; ) {
            var n = Jt(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
            if (null !== n) {
              e.blockedOn = n;
              break;
            }
            t.shift();
          }
          null === e.blockedOn && ot.shift();
        }
        null !== lt && yt(lt) && (lt = null),
          null !== st && yt(st) && (st = null),
          null !== ut && yt(ut) && (ut = null),
          ct.forEach(vt),
          dt.forEach(vt);
      }
      function kt(e, t) {
        e.blockedOn === t &&
          ((e.blockedOn = null),
          it ||
            ((it = !0),
            i.unstable_scheduleCallback(i.unstable_NormalPriority, wt)));
      }
      function St(e) {
        function t(t) {
          return kt(t, e);
        }
        if (0 < ot.length) {
          kt(ot[0], e);
          for (var n = 1; n < ot.length; n++) {
            var r = ot[n];
            r.blockedOn === e && (r.blockedOn = null);
          }
        }
        for (
          null !== lt && kt(lt, e),
            null !== st && kt(st, e),
            null !== ut && kt(ut, e),
            ct.forEach(t),
            dt.forEach(t),
            n = 0;
          n < pt.length;
          n++
        )
          (r = pt[n]).blockedOn === e && (r.blockedOn = null);
        for (; 0 < pt.length && null === (n = pt[0]).blockedOn; )
          bt(n), null === n.blockedOn && pt.shift();
      }
      function Et(e, t) {
        var n = {};
        return (
          (n[e.toLowerCase()] = t.toLowerCase()),
          (n["Webkit" + e] = "webkit" + t),
          (n["Moz" + e] = "moz" + t),
          n
        );
      }
      var xt = {
          animationend: Et("Animation", "AnimationEnd"),
          animationiteration: Et("Animation", "AnimationIteration"),
          animationstart: Et("Animation", "AnimationStart"),
          transitionend: Et("Transition", "TransitionEnd"),
        },
        Tt = {},
        Ct = {};
      function At(e) {
        if (Tt[e]) return Tt[e];
        if (!xt[e]) return e;
        var t,
          n = xt[e];
        for (t in n) if (n.hasOwnProperty(t) && t in Ct) return (Tt[e] = n[t]);
        return e;
      }
      d &&
        ((Ct = document.createElement("div").style),
        "AnimationEvent" in window ||
          (delete xt.animationend.animation,
          delete xt.animationiteration.animation,
          delete xt.animationstart.animation),
        "TransitionEvent" in window || delete xt.transitionend.transition);
      var _t = At("animationend"),
        Ot = At("animationiteration"),
        Rt = At("animationstart"),
        Pt = At("transitionend"),
        Lt = new Map(),
        Nt = new Map(),
        It = [
          "abort",
          "abort",
          _t,
          "animationEnd",
          Ot,
          "animationIteration",
          Rt,
          "animationStart",
          "canplay",
          "canPlay",
          "canplaythrough",
          "canPlayThrough",
          "durationchange",
          "durationChange",
          "emptied",
          "emptied",
          "encrypted",
          "encrypted",
          "ended",
          "ended",
          "error",
          "error",
          "gotpointercapture",
          "gotPointerCapture",
          "load",
          "load",
          "loadeddata",
          "loadedData",
          "loadedmetadata",
          "loadedMetadata",
          "loadstart",
          "loadStart",
          "lostpointercapture",
          "lostPointerCapture",
          "playing",
          "playing",
          "progress",
          "progress",
          "seeking",
          "seeking",
          "stalled",
          "stalled",
          "suspend",
          "suspend",
          "timeupdate",
          "timeUpdate",
          Pt,
          "transitionEnd",
          "waiting",
          "waiting",
        ];
      function Dt(e, t) {
        for (var n = 0; n < e.length; n += 2) {
          var r = e[n],
            a = e[n + 1];
          (a = "on" + (a[0].toUpperCase() + a.slice(1))),
            Nt.set(r, t),
            Lt.set(r, a),
            u(a, [r]);
        }
      }
      (0, i.unstable_now)();
      var Ft = 8;
      function Mt(e) {
        if (0 != (1 & e)) return (Ft = 15), 1;
        if (0 != (2 & e)) return (Ft = 14), 2;
        if (0 != (4 & e)) return (Ft = 13), 4;
        var t = 24 & e;
        return 0 !== t
          ? ((Ft = 12), t)
          : 0 != (32 & e)
          ? ((Ft = 11), 32)
          : 0 !== (t = 192 & e)
          ? ((Ft = 10), t)
          : 0 != (256 & e)
          ? ((Ft = 9), 256)
          : 0 !== (t = 3584 & e)
          ? ((Ft = 8), t)
          : 0 != (4096 & e)
          ? ((Ft = 7), 4096)
          : 0 !== (t = 4186112 & e)
          ? ((Ft = 6), t)
          : 0 !== (t = 62914560 & e)
          ? ((Ft = 5), t)
          : 67108864 & e
          ? ((Ft = 4), 67108864)
          : 0 != (134217728 & e)
          ? ((Ft = 3), 134217728)
          : 0 !== (t = 805306368 & e)
          ? ((Ft = 2), t)
          : 0 != (1073741824 & e)
          ? ((Ft = 1), 1073741824)
          : ((Ft = 8), e);
      }
      function jt(e, t) {
        var n = e.pendingLanes;
        if (0 === n) return (Ft = 0);
        var r = 0,
          a = 0,
          i = e.expiredLanes,
          o = e.suspendedLanes,
          l = e.pingedLanes;
        if (0 !== i) (r = i), (a = Ft = 15);
        else if (0 !== (i = 134217727 & n)) {
          var s = i & ~o;
          0 !== s
            ? ((r = Mt(s)), (a = Ft))
            : 0 !== (l &= i) && ((r = Mt(l)), (a = Ft));
        } else
          0 !== (i = n & ~o)
            ? ((r = Mt(i)), (a = Ft))
            : 0 !== l && ((r = Mt(l)), (a = Ft));
        if (0 === r) return 0;
        if (
          ((r = n & (((0 > (r = 31 - Gt(r)) ? 0 : 1 << r) << 1) - 1)),
          0 !== t && t !== r && 0 == (t & o))
        ) {
          if ((Mt(t), a <= Ft)) return t;
          Ft = a;
        }
        if (0 !== (t = e.entangledLanes))
          for (e = e.entanglements, t &= r; 0 < t; )
            (a = 1 << (n = 31 - Gt(t))), (r |= e[n]), (t &= ~a);
        return r;
      }
      function Bt(e) {
        return 0 !== (e = -1073741825 & e.pendingLanes)
          ? e
          : 1073741824 & e
          ? 1073741824
          : 0;
      }
      function zt(e, t) {
        switch (e) {
          case 15:
            return 1;
          case 14:
            return 2;
          case 12:
            return 0 === (e = qt(24 & ~t)) ? zt(10, t) : e;
          case 10:
            return 0 === (e = qt(192 & ~t)) ? zt(8, t) : e;
          case 8:
            return (
              0 === (e = qt(3584 & ~t)) &&
                0 === (e = qt(4186112 & ~t)) &&
                (e = 512),
              e
            );
          case 2:
            return 0 === (t = qt(805306368 & ~t)) && (t = 268435456), t;
        }
        throw Error(o(358, e));
      }
      function qt(e) {
        return e & -e;
      }
      function Ut(e) {
        for (var t = [], n = 0; 31 > n; n++) t.push(e);
        return t;
      }
      function $t(e, t, n) {
        e.pendingLanes |= t;
        var r = t - 1;
        (e.suspendedLanes &= r),
          (e.pingedLanes &= r),
          ((e = e.eventTimes)[(t = 31 - Gt(t))] = n);
      }
      var Gt = Math.clz32
          ? Math.clz32
          : function (e) {
              return 0 === e ? 32 : (31 - ((Ht(e) / Wt) | 0)) | 0;
            },
        Ht = Math.log,
        Wt = Math.LN2;
      var Vt = i.unstable_UserBlockingPriority,
        Zt = i.unstable_runWithPriority,
        Yt = !0;
      function Kt(e, t, n, r) {
        Me || De();
        var a = Xt,
          i = Me;
        Me = !0;
        try {
          Ie(a, e, t, n, r);
        } finally {
          (Me = i) || Be();
        }
      }
      function Qt(e, t, n, r) {
        Zt(Vt, Xt.bind(null, e, t, n, r));
      }
      function Xt(e, t, n, r) {
        var a;
        if (Yt)
          if ((a = 0 == (4 & t)) && 0 < ot.length && -1 < ft.indexOf(e))
            (e = mt(null, e, t, n, r)), ot.push(e);
          else {
            var i = Jt(e, t, n, r);
            if (null === i) a && ht(e, r);
            else {
              if (a) {
                if (-1 < ft.indexOf(e))
                  return (e = mt(i, e, t, n, r)), void ot.push(e);
                if (
                  (function (e, t, n, r, a) {
                    switch (t) {
                      case "focusin":
                        return (lt = gt(lt, e, t, n, r, a)), !0;
                      case "dragenter":
                        return (st = gt(st, e, t, n, r, a)), !0;
                      case "mouseover":
                        return (ut = gt(ut, e, t, n, r, a)), !0;
                      case "pointerover":
                        var i = a.pointerId;
                        return (
                          ct.set(i, gt(ct.get(i) || null, e, t, n, r, a)), !0
                        );
                      case "gotpointercapture":
                        return (
                          (i = a.pointerId),
                          dt.set(i, gt(dt.get(i) || null, e, t, n, r, a)),
                          !0
                        );
                    }
                    return !1;
                  })(i, e, t, n, r)
                )
                  return;
                ht(e, r);
              }
              Lr(e, t, r, null, n);
            }
          }
      }
      function Jt(e, t, n, r) {
        var a = Ce(r);
        if (null !== (a = Jr(a))) {
          var i = Ke(a);
          if (null === i) a = null;
          else {
            var o = i.tag;
            if (13 === o) {
              if (null !== (a = Qe(i))) return a;
              a = null;
            } else if (3 === o) {
              if (i.stateNode.hydrate)
                return 3 === i.tag ? i.stateNode.containerInfo : null;
              a = null;
            } else i !== a && (a = null);
          }
        }
        return Lr(e, t, r, a, n), null;
      }
      var en = null,
        tn = null,
        nn = null;
      function rn() {
        if (nn) return nn;
        var e,
          t,
          n = tn,
          r = n.length,
          a = "value" in en ? en.value : en.textContent,
          i = a.length;
        for (e = 0; e < r && n[e] === a[e]; e++);
        var o = r - e;
        for (t = 1; t <= o && n[r - t] === a[i - t]; t++);
        return (nn = a.slice(e, 1 < t ? 1 - t : void 0));
      }
      function an(e) {
        var t = e.keyCode;
        return (
          "charCode" in e
            ? 0 === (e = e.charCode) && 13 === t && (e = 13)
            : (e = t),
          10 === e && (e = 13),
          32 <= e || 13 === e ? e : 0
        );
      }
      function on() {
        return !0;
      }
      function ln() {
        return !1;
      }
      function sn(e) {
        function t(t, n, r, a, i) {
          for (var o in ((this._reactName = t),
          (this._targetInst = r),
          (this.type = n),
          (this.nativeEvent = a),
          (this.target = i),
          (this.currentTarget = null),
          e))
            e.hasOwnProperty(o) && ((t = e[o]), (this[o] = t ? t(a) : a[o]));
          return (
            (this.isDefaultPrevented = (
              null != a.defaultPrevented
                ? a.defaultPrevented
                : !1 === a.returnValue
            )
              ? on
              : ln),
            (this.isPropagationStopped = ln),
            this
          );
        }
        return (
          a(t.prototype, {
            preventDefault: function () {
              this.defaultPrevented = !0;
              var e = this.nativeEvent;
              e &&
                (e.preventDefault
                  ? e.preventDefault()
                  : "unknown" != typeof e.returnValue && (e.returnValue = !1),
                (this.isDefaultPrevented = on));
            },
            stopPropagation: function () {
              var e = this.nativeEvent;
              e &&
                (e.stopPropagation
                  ? e.stopPropagation()
                  : "unknown" != typeof e.cancelBubble && (e.cancelBubble = !0),
                (this.isPropagationStopped = on));
            },
            persist: function () {},
            isPersistent: on,
          }),
          t
        );
      }
      var un,
        cn,
        dn,
        pn = {
          eventPhase: 0,
          bubbles: 0,
          cancelable: 0,
          timeStamp: function (e) {
            return e.timeStamp || Date.now();
          },
          defaultPrevented: 0,
          isTrusted: 0,
        },
        fn = sn(pn),
        mn = a({}, pn, { view: 0, detail: 0 }),
        hn = sn(mn),
        gn = a({}, mn, {
          screenX: 0,
          screenY: 0,
          clientX: 0,
          clientY: 0,
          pageX: 0,
          pageY: 0,
          ctrlKey: 0,
          shiftKey: 0,
          altKey: 0,
          metaKey: 0,
          getModifierState: An,
          button: 0,
          buttons: 0,
          relatedTarget: function (e) {
            return void 0 === e.relatedTarget
              ? e.fromElement === e.srcElement
                ? e.toElement
                : e.fromElement
              : e.relatedTarget;
          },
          movementX: function (e) {
            return "movementX" in e
              ? e.movementX
              : (e !== dn &&
                  (dn && "mousemove" === e.type
                    ? ((un = e.screenX - dn.screenX),
                      (cn = e.screenY - dn.screenY))
                    : (cn = un = 0),
                  (dn = e)),
                un);
          },
          movementY: function (e) {
            return "movementY" in e ? e.movementY : cn;
          },
        }),
        bn = sn(gn),
        yn = sn(a({}, gn, { dataTransfer: 0 })),
        vn = sn(a({}, mn, { relatedTarget: 0 })),
        wn = sn(
          a({}, pn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        kn = sn(
          a({}, pn, {
            clipboardData: function (e) {
              return "clipboardData" in e
                ? e.clipboardData
                : window.clipboardData;
            },
          })
        ),
        Sn = sn(a({}, pn, { data: 0 })),
        En = {
          Esc: "Escape",
          Spacebar: " ",
          Left: "ArrowLeft",
          Up: "ArrowUp",
          Right: "ArrowRight",
          Down: "ArrowDown",
          Del: "Delete",
          Win: "OS",
          Menu: "ContextMenu",
          Apps: "ContextMenu",
          Scroll: "ScrollLock",
          MozPrintableKey: "Unidentified",
        },
        xn = {
          8: "Backspace",
          9: "Tab",
          12: "Clear",
          13: "Enter",
          16: "Shift",
          17: "Control",
          18: "Alt",
          19: "Pause",
          20: "CapsLock",
          27: "Escape",
          32: " ",
          33: "PageUp",
          34: "PageDown",
          35: "End",
          36: "Home",
          37: "ArrowLeft",
          38: "ArrowUp",
          39: "ArrowRight",
          40: "ArrowDown",
          45: "Insert",
          46: "Delete",
          112: "F1",
          113: "F2",
          114: "F3",
          115: "F4",
          116: "F5",
          117: "F6",
          118: "F7",
          119: "F8",
          120: "F9",
          121: "F10",
          122: "F11",
          123: "F12",
          144: "NumLock",
          145: "ScrollLock",
          224: "Meta",
        },
        Tn = {
          Alt: "altKey",
          Control: "ctrlKey",
          Meta: "metaKey",
          Shift: "shiftKey",
        };
      function Cn(e) {
        var t = this.nativeEvent;
        return t.getModifierState
          ? t.getModifierState(e)
          : !!(e = Tn[e]) && !!t[e];
      }
      function An() {
        return Cn;
      }
      var _n = sn(
          a({}, mn, {
            key: function (e) {
              if (e.key) {
                var t = En[e.key] || e.key;
                if ("Unidentified" !== t) return t;
              }
              return "keypress" === e.type
                ? 13 === (e = an(e))
                  ? "Enter"
                  : String.fromCharCode(e)
                : "keydown" === e.type || "keyup" === e.type
                ? xn[e.keyCode] || "Unidentified"
                : "";
            },
            code: 0,
            location: 0,
            ctrlKey: 0,
            shiftKey: 0,
            altKey: 0,
            metaKey: 0,
            repeat: 0,
            locale: 0,
            getModifierState: An,
            charCode: function (e) {
              return "keypress" === e.type ? an(e) : 0;
            },
            keyCode: function (e) {
              return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0;
            },
            which: function (e) {
              return "keypress" === e.type
                ? an(e)
                : "keydown" === e.type || "keyup" === e.type
                ? e.keyCode
                : 0;
            },
          })
        ),
        On = sn(
          a({}, gn, {
            pointerId: 0,
            width: 0,
            height: 0,
            pressure: 0,
            tangentialPressure: 0,
            tiltX: 0,
            tiltY: 0,
            twist: 0,
            pointerType: 0,
            isPrimary: 0,
          })
        ),
        Rn = sn(
          a({}, mn, {
            touches: 0,
            targetTouches: 0,
            changedTouches: 0,
            altKey: 0,
            metaKey: 0,
            ctrlKey: 0,
            shiftKey: 0,
            getModifierState: An,
          })
        ),
        Pn = sn(
          a({}, pn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })
        ),
        Ln = sn(
          a({}, gn, {
            deltaX: function (e) {
              return "deltaX" in e
                ? e.deltaX
                : "wheelDeltaX" in e
                ? -e.wheelDeltaX
                : 0;
            },
            deltaY: function (e) {
              return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                ? -e.wheelDeltaY
                : "wheelDelta" in e
                ? -e.wheelDelta
                : 0;
            },
            deltaZ: 0,
            deltaMode: 0,
          })
        ),
        Nn = [9, 13, 27, 32],
        In = d && "CompositionEvent" in window,
        Dn = null;
      d && "documentMode" in document && (Dn = document.documentMode);
      var Fn = d && "TextEvent" in window && !Dn,
        Mn = d && (!In || (Dn && 8 < Dn && 11 >= Dn)),
        jn = String.fromCharCode(32),
        Bn = !1;
      function zn(e, t) {
        switch (e) {
          case "keyup":
            return -1 !== Nn.indexOf(t.keyCode);
          case "keydown":
            return 229 !== t.keyCode;
          case "keypress":
          case "mousedown":
          case "focusout":
            return !0;
          default:
            return !1;
        }
      }
      function qn(e) {
        return "object" == typeof (e = e.detail) && "data" in e ? e.data : null;
      }
      var Un = !1;
      var $n = {
        color: !0,
        date: !0,
        datetime: !0,
        "datetime-local": !0,
        email: !0,
        month: !0,
        number: !0,
        password: !0,
        range: !0,
        search: !0,
        tel: !0,
        text: !0,
        time: !0,
        url: !0,
        week: !0,
      };
      function Gn(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return "input" === t ? !!$n[e.type] : "textarea" === t;
      }
      function Hn(e, t, n, r) {
        Pe(r),
          0 < (t = Ir(t, "onChange")).length &&
            ((n = new fn("onChange", "change", null, n, r)),
            e.push({ event: n, listeners: t }));
      }
      var Wn = null,
        Vn = null;
      function Zn(e) {
        Cr(e, 0);
      }
      function Yn(e) {
        if (Q(ta(e))) return e;
      }
      function Kn(e, t) {
        if ("change" === e) return t;
      }
      var Qn = !1;
      if (d) {
        var Xn;
        if (d) {
          var Jn = "oninput" in document;
          if (!Jn) {
            var er = document.createElement("div");
            er.setAttribute("oninput", "return;"),
              (Jn = "function" == typeof er.oninput);
          }
          Xn = Jn;
        } else Xn = !1;
        Qn = Xn && (!document.documentMode || 9 < document.documentMode);
      }
      function tr() {
        Wn && (Wn.detachEvent("onpropertychange", nr), (Vn = Wn = null));
      }
      function nr(e) {
        if ("value" === e.propertyName && Yn(Vn)) {
          var t = [];
          if ((Hn(t, Vn, e, Ce(e)), (e = Zn), Me)) e(t);
          else {
            Me = !0;
            try {
              Ne(e, t);
            } finally {
              (Me = !1), Be();
            }
          }
        }
      }
      function rr(e, t, n) {
        "focusin" === e
          ? (tr(), (Vn = n), (Wn = t).attachEvent("onpropertychange", nr))
          : "focusout" === e && tr();
      }
      function ar(e) {
        if ("selectionchange" === e || "keyup" === e || "keydown" === e)
          return Yn(Vn);
      }
      function ir(e, t) {
        if ("click" === e) return Yn(t);
      }
      function or(e, t) {
        if ("input" === e || "change" === e) return Yn(t);
      }
      var lr =
          "function" == typeof Object.is
            ? Object.is
            : function (e, t) {
                return (
                  (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
                );
              },
        sr = Object.prototype.hasOwnProperty;
      function ur(e, t) {
        if (lr(e, t)) return !0;
        if (
          "object" != typeof e ||
          null === e ||
          "object" != typeof t ||
          null === t
        )
          return !1;
        var n = Object.keys(e),
          r = Object.keys(t);
        if (n.length !== r.length) return !1;
        for (r = 0; r < n.length; r++)
          if (!sr.call(t, n[r]) || !lr(e[n[r]], t[n[r]])) return !1;
        return !0;
      }
      function cr(e) {
        for (; e && e.firstChild; ) e = e.firstChild;
        return e;
      }
      function dr(e, t) {
        var n,
          r = cr(e);
        for (e = 0; r; ) {
          if (3 === r.nodeType) {
            if (((n = e + r.textContent.length), e <= t && n >= t))
              return { node: r, offset: t - e };
            e = n;
          }
          e: {
            for (; r; ) {
              if (r.nextSibling) {
                r = r.nextSibling;
                break e;
              }
              r = r.parentNode;
            }
            r = void 0;
          }
          r = cr(r);
        }
      }
      function pr(e, t) {
        return (
          !(!e || !t) &&
          (e === t ||
            ((!e || 3 !== e.nodeType) &&
              (t && 3 === t.nodeType
                ? pr(e, t.parentNode)
                : "contains" in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
        );
      }
      function fr() {
        for (var e = window, t = X(); t instanceof e.HTMLIFrameElement; ) {
          try {
            var n = "string" == typeof t.contentWindow.location.href;
          } catch (r) {
            n = !1;
          }
          if (!n) break;
          t = X((e = t.contentWindow).document);
        }
        return t;
      }
      function mr(e) {
        var t = e && e.nodeName && e.nodeName.toLowerCase();
        return (
          t &&
          (("input" === t &&
            ("text" === e.type ||
              "search" === e.type ||
              "tel" === e.type ||
              "url" === e.type ||
              "password" === e.type)) ||
            "textarea" === t ||
            "true" === e.contentEditable)
        );
      }
      var hr = d && "documentMode" in document && 11 >= document.documentMode,
        gr = null,
        br = null,
        yr = null,
        vr = !1;
      function wr(e, t, n) {
        var r =
          n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument;
        vr ||
          null == gr ||
          gr !== X(r) ||
          ("selectionStart" in (r = gr) && mr(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : (r = {
                anchorNode: (r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
                ).getSelection()).anchorNode,
                anchorOffset: r.anchorOffset,
                focusNode: r.focusNode,
                focusOffset: r.focusOffset,
              }),
          (yr && ur(yr, r)) ||
            ((yr = r),
            0 < (r = Ir(br, "onSelect")).length &&
              ((t = new fn("onSelect", "select", null, t, n)),
              e.push({ event: t, listeners: r }),
              (t.target = gr))));
      }
      Dt(
        "cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(
          " "
        ),
        0
      ),
        Dt(
          "drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(
            " "
          ),
          1
        ),
        Dt(It, 2);
      for (
        var kr =
            "change selectionchange textInput compositionstart compositionend compositionupdate".split(
              " "
            ),
          Sr = 0;
        Sr < kr.length;
        Sr++
      )
        Nt.set(kr[Sr], 0);
      c("onMouseEnter", ["mouseout", "mouseover"]),
        c("onMouseLeave", ["mouseout", "mouseover"]),
        c("onPointerEnter", ["pointerout", "pointerover"]),
        c("onPointerLeave", ["pointerout", "pointerover"]),
        u(
          "onChange",
          "change click focusin focusout input keydown keyup selectionchange".split(
            " "
          )
        ),
        u(
          "onSelect",
          "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
            " "
          )
        ),
        u("onBeforeInput", [
          "compositionend",
          "keypress",
          "textInput",
          "paste",
        ]),
        u(
          "onCompositionEnd",
          "compositionend focusout keydown keypress keyup mousedown".split(" ")
        ),
        u(
          "onCompositionStart",
          "compositionstart focusout keydown keypress keyup mousedown".split(
            " "
          )
        ),
        u(
          "onCompositionUpdate",
          "compositionupdate focusout keydown keypress keyup mousedown".split(
            " "
          )
        );
      var Er =
          "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
          ),
        xr = new Set(
          "cancel close invalid load scroll toggle".split(" ").concat(Er)
        );
      function Tr(e, t, n) {
        var r = e.type || "unknown-event";
        (e.currentTarget = n),
          (function (e, t, n, r, a, i, l, s, u) {
            if ((Ye.apply(this, arguments), Ge)) {
              if (!Ge) throw Error(o(198));
              var c = He;
              (Ge = !1), (He = null), We || ((We = !0), (Ve = c));
            }
          })(r, t, void 0, e),
          (e.currentTarget = null);
      }
      function Cr(e, t) {
        t = 0 != (4 & t);
        for (var n = 0; n < e.length; n++) {
          var r = e[n],
            a = r.event;
          r = r.listeners;
          e: {
            var i = void 0;
            if (t)
              for (var o = r.length - 1; 0 <= o; o--) {
                var l = r[o],
                  s = l.instance,
                  u = l.currentTarget;
                if (((l = l.listener), s !== i && a.isPropagationStopped()))
                  break e;
                Tr(a, l, u), (i = s);
              }
            else
              for (o = 0; o < r.length; o++) {
                if (
                  ((s = (l = r[o]).instance),
                  (u = l.currentTarget),
                  (l = l.listener),
                  s !== i && a.isPropagationStopped())
                )
                  break e;
                Tr(a, l, u), (i = s);
              }
          }
        }
        if (We) throw ((e = Ve), (We = !1), (Ve = null), e);
      }
      function Ar(e, t) {
        var n = ra(t),
          r = e + "__bubble";
        n.has(r) || (Pr(t, e, 2, !1), n.add(r));
      }
      var _r = "_reactListening" + Math.random().toString(36).slice(2);
      function Or(e) {
        e[_r] ||
          ((e[_r] = !0),
          l.forEach(function (t) {
            xr.has(t) || Rr(t, !1, e, null), Rr(t, !0, e, null);
          }));
      }
      function Rr(e, t, n, r) {
        var a =
            4 < arguments.length && void 0 !== arguments[4] ? arguments[4] : 0,
          i = n;
        if (
          ("selectionchange" === e && 9 !== n.nodeType && (i = n.ownerDocument),
          null !== r && !t && xr.has(e))
        ) {
          if ("scroll" !== e) return;
          (a |= 2), (i = r);
        }
        var o = ra(i),
          l = e + "__" + (t ? "capture" : "bubble");
        o.has(l) || (t && (a |= 4), Pr(i, e, a, t), o.add(l));
      }
      function Pr(e, t, n, r) {
        var a = Nt.get(t);
        switch (void 0 === a ? 2 : a) {
          case 0:
            a = Kt;
            break;
          case 1:
            a = Qt;
            break;
          default:
            a = Xt;
        }
        (n = a.bind(null, t, n, e)),
          (a = void 0),
          !qe ||
            ("touchstart" !== t && "touchmove" !== t && "wheel" !== t) ||
            (a = !0),
          r
            ? void 0 !== a
              ? e.addEventListener(t, n, { capture: !0, passive: a })
              : e.addEventListener(t, n, !0)
            : void 0 !== a
            ? e.addEventListener(t, n, { passive: a })
            : e.addEventListener(t, n, !1);
      }
      function Lr(e, t, n, r, a) {
        var i = r;
        if (0 == (1 & t) && 0 == (2 & t) && null !== r)
          e: for (;;) {
            if (null === r) return;
            var o = r.tag;
            if (3 === o || 4 === o) {
              var l = r.stateNode.containerInfo;
              if (l === a || (8 === l.nodeType && l.parentNode === a)) break;
              if (4 === o)
                for (o = r.return; null !== o; ) {
                  var s = o.tag;
                  if (
                    (3 === s || 4 === s) &&
                    ((s = o.stateNode.containerInfo) === a ||
                      (8 === s.nodeType && s.parentNode === a))
                  )
                    return;
                  o = o.return;
                }
              for (; null !== l; ) {
                if (null === (o = Jr(l))) return;
                if (5 === (s = o.tag) || 6 === s) {
                  r = i = o;
                  continue e;
                }
                l = l.parentNode;
              }
            }
            r = r.return;
          }
        !(function (e, t, n) {
          if (je) return e(t, n);
          je = !0;
          try {
            Fe(e, t, n);
          } finally {
            (je = !1), Be();
          }
        })(function () {
          var r = i,
            a = Ce(n),
            o = [];
          e: {
            var l = Lt.get(e);
            if (void 0 !== l) {
              var s = fn,
                u = e;
              switch (e) {
                case "keypress":
                  if (0 === an(n)) break e;
                case "keydown":
                case "keyup":
                  s = _n;
                  break;
                case "focusin":
                  (u = "focus"), (s = vn);
                  break;
                case "focusout":
                  (u = "blur"), (s = vn);
                  break;
                case "beforeblur":
                case "afterblur":
                  s = vn;
                  break;
                case "click":
                  if (2 === n.button) break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                  s = bn;
                  break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                  s = yn;
                  break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                  s = Rn;
                  break;
                case _t:
                case Ot:
                case Rt:
                  s = wn;
                  break;
                case Pt:
                  s = Pn;
                  break;
                case "scroll":
                  s = hn;
                  break;
                case "wheel":
                  s = Ln;
                  break;
                case "copy":
                case "cut":
                case "paste":
                  s = kn;
                  break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                  s = On;
              }
              var c = 0 != (4 & t),
                d = !c && "scroll" === e,
                p = c ? (null !== l ? l + "Capture" : null) : l;
              c = [];
              for (var f, m = r; null !== m; ) {
                var h = (f = m).stateNode;
                if (
                  (5 === f.tag &&
                    null !== h &&
                    ((f = h),
                    null !== p &&
                      null != (h = ze(m, p)) &&
                      c.push(Nr(m, h, f))),
                  d)
                )
                  break;
                m = m.return;
              }
              0 < c.length &&
                ((l = new s(l, u, null, n, a)),
                o.push({ event: l, listeners: c }));
            }
          }
          if (0 == (7 & t)) {
            if (
              ((s = "mouseout" === e || "pointerout" === e),
              (!(l = "mouseover" === e || "pointerover" === e) ||
                0 != (16 & t) ||
                !(u = n.relatedTarget || n.fromElement) ||
                (!Jr(u) && !u[Qr])) &&
                (s || l) &&
                ((l =
                  a.window === a
                    ? a
                    : (l = a.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
                s
                  ? ((s = r),
                    null !==
                      (u = (u = n.relatedTarget || n.toElement)
                        ? Jr(u)
                        : null) &&
                      (u !== (d = Ke(u)) || (5 !== u.tag && 6 !== u.tag)) &&
                      (u = null))
                  : ((s = null), (u = r)),
                s !== u))
            ) {
              if (
                ((c = bn),
                (h = "onMouseLeave"),
                (p = "onMouseEnter"),
                (m = "mouse"),
                ("pointerout" !== e && "pointerover" !== e) ||
                  ((c = On),
                  (h = "onPointerLeave"),
                  (p = "onPointerEnter"),
                  (m = "pointer")),
                (d = null == s ? l : ta(s)),
                (f = null == u ? l : ta(u)),
                ((l = new c(h, m + "leave", s, n, a)).target = d),
                (l.relatedTarget = f),
                (h = null),
                Jr(a) === r &&
                  (((c = new c(p, m + "enter", u, n, a)).target = f),
                  (c.relatedTarget = d),
                  (h = c)),
                (d = h),
                s && u)
              )
                e: {
                  for (p = u, m = 0, f = c = s; f; f = Dr(f)) m++;
                  for (f = 0, h = p; h; h = Dr(h)) f++;
                  for (; 0 < m - f; ) (c = Dr(c)), m--;
                  for (; 0 < f - m; ) (p = Dr(p)), f--;
                  for (; m--; ) {
                    if (c === p || (null !== p && c === p.alternate)) break e;
                    (c = Dr(c)), (p = Dr(p));
                  }
                  c = null;
                }
              else c = null;
              null !== s && Fr(o, l, s, c, !1),
                null !== u && null !== d && Fr(o, d, u, c, !0);
            }
            if (
              "select" ===
                (s =
                  (l = r ? ta(r) : window).nodeName &&
                  l.nodeName.toLowerCase()) ||
              ("input" === s && "file" === l.type)
            )
              var g = Kn;
            else if (Gn(l))
              if (Qn) g = or;
              else {
                g = ar;
                var b = rr;
              }
            else
              (s = l.nodeName) &&
                "input" === s.toLowerCase() &&
                ("checkbox" === l.type || "radio" === l.type) &&
                (g = ir);
            switch (
              (g && (g = g(e, r))
                ? Hn(o, g, n, a)
                : (b && b(e, l, r),
                  "focusout" === e &&
                    (b = l._wrapperState) &&
                    b.controlled &&
                    "number" === l.type &&
                    ae(l, "number", l.value)),
              (b = r ? ta(r) : window),
              e)
            ) {
              case "focusin":
                (Gn(b) || "true" === b.contentEditable) &&
                  ((gr = b), (br = r), (yr = null));
                break;
              case "focusout":
                yr = br = gr = null;
                break;
              case "mousedown":
                vr = !0;
                break;
              case "contextmenu":
              case "mouseup":
              case "dragend":
                (vr = !1), wr(o, n, a);
                break;
              case "selectionchange":
                if (hr) break;
              case "keydown":
              case "keyup":
                wr(o, n, a);
            }
            var y;
            if (In)
              e: {
                switch (e) {
                  case "compositionstart":
                    var v = "onCompositionStart";
                    break e;
                  case "compositionend":
                    v = "onCompositionEnd";
                    break e;
                  case "compositionupdate":
                    v = "onCompositionUpdate";
                    break e;
                }
                v = void 0;
              }
            else
              Un
                ? zn(e, n) && (v = "onCompositionEnd")
                : "keydown" === e &&
                  229 === n.keyCode &&
                  (v = "onCompositionStart");
            v &&
              (Mn &&
                "ko" !== n.locale &&
                (Un || "onCompositionStart" !== v
                  ? "onCompositionEnd" === v && Un && (y = rn())
                  : ((tn = "value" in (en = a) ? en.value : en.textContent),
                    (Un = !0))),
              0 < (b = Ir(r, v)).length &&
                ((v = new Sn(v, e, null, n, a)),
                o.push({ event: v, listeners: b }),
                y ? (v.data = y) : null !== (y = qn(n)) && (v.data = y))),
              (y = Fn
                ? (function (e, t) {
                    switch (e) {
                      case "compositionend":
                        return qn(t);
                      case "keypress":
                        return 32 !== t.which ? null : ((Bn = !0), jn);
                      case "textInput":
                        return (e = t.data) === jn && Bn ? null : e;
                      default:
                        return null;
                    }
                  })(e, n)
                : (function (e, t) {
                    if (Un)
                      return "compositionend" === e || (!In && zn(e, t))
                        ? ((e = rn()), (nn = tn = en = null), (Un = !1), e)
                        : null;
                    switch (e) {
                      case "paste":
                        return null;
                      case "keypress":
                        if (
                          !(t.ctrlKey || t.altKey || t.metaKey) ||
                          (t.ctrlKey && t.altKey)
                        ) {
                          if (t.char && 1 < t.char.length) return t.char;
                          if (t.which) return String.fromCharCode(t.which);
                        }
                        return null;
                      case "compositionend":
                        return Mn && "ko" !== t.locale ? null : t.data;
                      default:
                        return null;
                    }
                  })(e, n)) &&
                0 < (r = Ir(r, "onBeforeInput")).length &&
                ((a = new Sn("onBeforeInput", "beforeinput", null, n, a)),
                o.push({ event: a, listeners: r }),
                (a.data = y));
          }
          Cr(o, t);
        });
      }
      function Nr(e, t, n) {
        return { instance: e, listener: t, currentTarget: n };
      }
      function Ir(e, t) {
        for (var n = t + "Capture", r = []; null !== e; ) {
          var a = e,
            i = a.stateNode;
          5 === a.tag &&
            null !== i &&
            ((a = i),
            null != (i = ze(e, n)) && r.unshift(Nr(e, i, a)),
            null != (i = ze(e, t)) && r.push(Nr(e, i, a))),
            (e = e.return);
        }
        return r;
      }
      function Dr(e) {
        if (null === e) return null;
        do {
          e = e.return;
        } while (e && 5 !== e.tag);
        return e || null;
      }
      function Fr(e, t, n, r, a) {
        for (var i = t._reactName, o = []; null !== n && n !== r; ) {
          var l = n,
            s = l.alternate,
            u = l.stateNode;
          if (null !== s && s === r) break;
          5 === l.tag &&
            null !== u &&
            ((l = u),
            a
              ? null != (s = ze(n, i)) && o.unshift(Nr(n, s, l))
              : a || (null != (s = ze(n, i)) && o.push(Nr(n, s, l)))),
            (n = n.return);
        }
        0 !== o.length && e.push({ event: t, listeners: o });
      }
      function Mr() {}
      var jr = null,
        Br = null;
      function zr(e, t) {
        switch (e) {
          case "button":
          case "input":
          case "select":
          case "textarea":
            return !!t.autoFocus;
        }
        return !1;
      }
      function qr(e, t) {
        return (
          "textarea" === e ||
          "option" === e ||
          "noscript" === e ||
          "string" == typeof t.children ||
          "number" == typeof t.children ||
          ("object" == typeof t.dangerouslySetInnerHTML &&
            null !== t.dangerouslySetInnerHTML &&
            null != t.dangerouslySetInnerHTML.__html)
        );
      }
      var Ur = "function" == typeof setTimeout ? setTimeout : void 0,
        $r = "function" == typeof clearTimeout ? clearTimeout : void 0;
      function Gr(e) {
        1 === e.nodeType
          ? (e.textContent = "")
          : 9 === e.nodeType && null != (e = e.body) && (e.textContent = "");
      }
      function Hr(e) {
        for (; null != e; e = e.nextSibling) {
          var t = e.nodeType;
          if (1 === t || 3 === t) break;
        }
        return e;
      }
      function Wr(e) {
        e = e.previousSibling;
        for (var t = 0; e; ) {
          if (8 === e.nodeType) {
            var n = e.data;
            if ("$" === n || "$!" === n || "$?" === n) {
              if (0 === t) return e;
              t--;
            } else "/$" === n && t++;
          }
          e = e.previousSibling;
        }
        return null;
      }
      var Vr = 0;
      var Zr = Math.random().toString(36).slice(2),
        Yr = "__reactFiber$" + Zr,
        Kr = "__reactProps$" + Zr,
        Qr = "__reactContainer$" + Zr,
        Xr = "__reactEvents$" + Zr;
      function Jr(e) {
        var t = e[Yr];
        if (t) return t;
        for (var n = e.parentNode; n; ) {
          if ((t = n[Qr] || n[Yr])) {
            if (
              ((n = t.alternate),
              null !== t.child || (null !== n && null !== n.child))
            )
              for (e = Wr(e); null !== e; ) {
                if ((n = e[Yr])) return n;
                e = Wr(e);
              }
            return t;
          }
          n = (e = n).parentNode;
        }
        return null;
      }
      function ea(e) {
        return !(e = e[Yr] || e[Qr]) ||
          (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
          ? null
          : e;
      }
      function ta(e) {
        if (5 === e.tag || 6 === e.tag) return e.stateNode;
        throw Error(o(33));
      }
      function na(e) {
        return e[Kr] || null;
      }
      function ra(e) {
        var t = e[Xr];
        return void 0 === t && (t = e[Xr] = new Set()), t;
      }
      var aa = [],
        ia = -1;
      function oa(e) {
        return { current: e };
      }
      function la(e) {
        0 > ia || ((e.current = aa[ia]), (aa[ia] = null), ia--);
      }
      function sa(e, t) {
        ia++, (aa[ia] = e.current), (e.current = t);
      }
      var ua = {},
        ca = oa(ua),
        da = oa(!1),
        pa = ua;
      function fa(e, t) {
        var n = e.type.contextTypes;
        if (!n) return ua;
        var r = e.stateNode;
        if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
          return r.__reactInternalMemoizedMaskedChildContext;
        var a,
          i = {};
        for (a in n) i[a] = t[a];
        return (
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          i
        );
      }
      function ma(e) {
        return null != (e = e.childContextTypes);
      }
      function ha() {
        la(da), la(ca);
      }
      function ga(e, t, n) {
        if (ca.current !== ua) throw Error(o(168));
        sa(ca, t), sa(da, n);
      }
      function ba(e, t, n) {
        var r = e.stateNode;
        if (((e = t.childContextTypes), "function" != typeof r.getChildContext))
          return n;
        for (var i in (r = r.getChildContext()))
          if (!(i in e)) throw Error(o(108, V(t) || "Unknown", i));
        return a({}, n, r);
      }
      function ya(e) {
        return (
          (e =
            ((e = e.stateNode) &&
              e.__reactInternalMemoizedMergedChildContext) ||
            ua),
          (pa = ca.current),
          sa(ca, e),
          sa(da, da.current),
          !0
        );
      }
      function va(e, t, n) {
        var r = e.stateNode;
        if (!r) throw Error(o(169));
        n
          ? ((e = ba(e, t, pa)),
            (r.__reactInternalMemoizedMergedChildContext = e),
            la(da),
            la(ca),
            sa(ca, e))
          : la(da),
          sa(da, n);
      }
      var wa = null,
        ka = null,
        Sa = i.unstable_runWithPriority,
        Ea = i.unstable_scheduleCallback,
        xa = i.unstable_cancelCallback,
        Ta = i.unstable_shouldYield,
        Ca = i.unstable_requestPaint,
        Aa = i.unstable_now,
        _a = i.unstable_getCurrentPriorityLevel,
        Oa = i.unstable_ImmediatePriority,
        Ra = i.unstable_UserBlockingPriority,
        Pa = i.unstable_NormalPriority,
        La = i.unstable_LowPriority,
        Na = i.unstable_IdlePriority,
        Ia = {},
        Da = void 0 !== Ca ? Ca : function () {},
        Fa = null,
        Ma = null,
        ja = !1,
        Ba = Aa(),
        za =
          1e4 > Ba
            ? Aa
            : function () {
                return Aa() - Ba;
              };
      function qa() {
        switch (_a()) {
          case Oa:
            return 99;
          case Ra:
            return 98;
          case Pa:
            return 97;
          case La:
            return 96;
          case Na:
            return 95;
          default:
            throw Error(o(332));
        }
      }
      function Ua(e) {
        switch (e) {
          case 99:
            return Oa;
          case 98:
            return Ra;
          case 97:
            return Pa;
          case 96:
            return La;
          case 95:
            return Na;
          default:
            throw Error(o(332));
        }
      }
      function $a(e, t) {
        return (e = Ua(e)), Sa(e, t);
      }
      function Ga(e, t, n) {
        return (e = Ua(e)), Ea(e, t, n);
      }
      function Ha() {
        if (null !== Ma) {
          var e = Ma;
          (Ma = null), xa(e);
        }
        Wa();
      }
      function Wa() {
        if (!ja && null !== Fa) {
          ja = !0;
          var e = 0;
          try {
            var t = Fa;
            $a(99, function () {
              for (; e < t.length; e++) {
                var n = t[e];
                do {
                  n = n(!0);
                } while (null !== n);
              }
            }),
              (Fa = null);
          } catch (n) {
            throw (null !== Fa && (Fa = Fa.slice(e + 1)), Ea(Oa, Ha), n);
          } finally {
            ja = !1;
          }
        }
      }
      var Va = k.ReactCurrentBatchConfig;
      function Za(e, t) {
        if (e && e.defaultProps) {
          for (var n in ((t = a({}, t)), (e = e.defaultProps)))
            void 0 === t[n] && (t[n] = e[n]);
          return t;
        }
        return t;
      }
      var Ya = oa(null),
        Ka = null,
        Qa = null,
        Xa = null;
      function Ja() {
        Xa = Qa = Ka = null;
      }
      function ei(e) {
        var t = Ya.current;
        la(Ya), (e.type._context._currentValue = t);
      }
      function ti(e, t) {
        for (; null !== e; ) {
          var n = e.alternate;
          if ((e.childLanes & t) === t) {
            if (null === n || (n.childLanes & t) === t) break;
            n.childLanes |= t;
          } else (e.childLanes |= t), null !== n && (n.childLanes |= t);
          e = e.return;
        }
      }
      function ni(e, t) {
        (Ka = e),
          (Xa = Qa = null),
          null !== (e = e.dependencies) &&
            null !== e.firstContext &&
            (0 != (e.lanes & t) && (Io = !0), (e.firstContext = null));
      }
      function ri(e, t) {
        if (Xa !== e && !1 !== t && 0 !== t)
          if (
            (("number" == typeof t && 1073741823 !== t) ||
              ((Xa = e), (t = 1073741823)),
            (t = { context: e, observedBits: t, next: null }),
            null === Qa)
          ) {
            if (null === Ka) throw Error(o(308));
            (Qa = t),
              (Ka.dependencies = {
                lanes: 0,
                firstContext: t,
                responders: null,
              });
          } else Qa = Qa.next = t;
        return e._currentValue;
      }
      var ai = !1;
      function ii(e) {
        e.updateQueue = {
          baseState: e.memoizedState,
          firstBaseUpdate: null,
          lastBaseUpdate: null,
          shared: { pending: null },
          effects: null,
        };
      }
      function oi(e, t) {
        (e = e.updateQueue),
          t.updateQueue === e &&
            (t.updateQueue = {
              baseState: e.baseState,
              firstBaseUpdate: e.firstBaseUpdate,
              lastBaseUpdate: e.lastBaseUpdate,
              shared: e.shared,
              effects: e.effects,
            });
      }
      function li(e, t) {
        return {
          eventTime: e,
          lane: t,
          tag: 0,
          payload: null,
          callback: null,
          next: null,
        };
      }
      function si(e, t) {
        if (null !== (e = e.updateQueue)) {
          var n = (e = e.shared).pending;
          null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
            (e.pending = t);
        }
      }
      function ui(e, t) {
        var n = e.updateQueue,
          r = e.alternate;
        if (null !== r && n === (r = r.updateQueue)) {
          var a = null,
            i = null;
          if (null !== (n = n.firstBaseUpdate)) {
            do {
              var o = {
                eventTime: n.eventTime,
                lane: n.lane,
                tag: n.tag,
                payload: n.payload,
                callback: n.callback,
                next: null,
              };
              null === i ? (a = i = o) : (i = i.next = o), (n = n.next);
            } while (null !== n);
            null === i ? (a = i = t) : (i = i.next = t);
          } else a = i = t;
          return (
            (n = {
              baseState: r.baseState,
              firstBaseUpdate: a,
              lastBaseUpdate: i,
              shared: r.shared,
              effects: r.effects,
            }),
            void (e.updateQueue = n)
          );
        }
        null === (e = n.lastBaseUpdate)
          ? (n.firstBaseUpdate = t)
          : (e.next = t),
          (n.lastBaseUpdate = t);
      }
      function ci(e, t, n, r) {
        var i = e.updateQueue;
        ai = !1;
        var o = i.firstBaseUpdate,
          l = i.lastBaseUpdate,
          s = i.shared.pending;
        if (null !== s) {
          i.shared.pending = null;
          var u = s,
            c = u.next;
          (u.next = null), null === l ? (o = c) : (l.next = c), (l = u);
          var d = e.alternate;
          if (null !== d) {
            var p = (d = d.updateQueue).lastBaseUpdate;
            p !== l &&
              (null === p ? (d.firstBaseUpdate = c) : (p.next = c),
              (d.lastBaseUpdate = u));
          }
        }
        if (null !== o) {
          for (p = i.baseState, l = 0, d = c = u = null; ; ) {
            s = o.lane;
            var f = o.eventTime;
            if ((r & s) === s) {
              null !== d &&
                (d = d.next =
                  {
                    eventTime: f,
                    lane: 0,
                    tag: o.tag,
                    payload: o.payload,
                    callback: o.callback,
                    next: null,
                  });
              e: {
                var m = e,
                  h = o;
                switch (((s = t), (f = n), h.tag)) {
                  case 1:
                    if ("function" == typeof (m = h.payload)) {
                      p = m.call(f, p, s);
                      break e;
                    }
                    p = m;
                    break e;
                  case 3:
                    m.flags = (-4097 & m.flags) | 64;
                  case 0:
                    if (
                      null ==
                      (s =
                        "function" == typeof (m = h.payload)
                          ? m.call(f, p, s)
                          : m)
                    )
                      break e;
                    p = a({}, p, s);
                    break e;
                  case 2:
                    ai = !0;
                }
              }
              null !== o.callback &&
                ((e.flags |= 32),
                null === (s = i.effects) ? (i.effects = [o]) : s.push(o));
            } else
              (f = {
                eventTime: f,
                lane: s,
                tag: o.tag,
                payload: o.payload,
                callback: o.callback,
                next: null,
              }),
                null === d ? ((c = d = f), (u = p)) : (d = d.next = f),
                (l |= s);
            if (null === (o = o.next)) {
              if (null === (s = i.shared.pending)) break;
              (o = s.next),
                (s.next = null),
                (i.lastBaseUpdate = s),
                (i.shared.pending = null);
            }
          }
          null === d && (u = p),
            (i.baseState = u),
            (i.firstBaseUpdate = c),
            (i.lastBaseUpdate = d),
            (jl |= l),
            (e.lanes = l),
            (e.memoizedState = p);
        }
      }
      function di(e, t, n) {
        if (((e = t.effects), (t.effects = null), null !== e))
          for (t = 0; t < e.length; t++) {
            var r = e[t],
              a = r.callback;
            if (null !== a) {
              if (((r.callback = null), (r = n), "function" != typeof a))
                throw Error(o(191, a));
              a.call(r);
            }
          }
      }
      var pi = new r.Component().refs;
      function fi(e, t, n, r) {
        (n = null == (n = n(r, (t = e.memoizedState))) ? t : a({}, t, n)),
          (e.memoizedState = n),
          0 === e.lanes && (e.updateQueue.baseState = n);
      }
      var mi = {
        isMounted: function (e) {
          return !!(e = e._reactInternals) && Ke(e) === e;
        },
        enqueueSetState: function (e, t, n) {
          e = e._reactInternals;
          var r = us(),
            a = cs(e),
            i = li(r, a);
          (i.payload = t), null != n && (i.callback = n), si(e, i), ds(e, a, r);
        },
        enqueueReplaceState: function (e, t, n) {
          e = e._reactInternals;
          var r = us(),
            a = cs(e),
            i = li(r, a);
          (i.tag = 1),
            (i.payload = t),
            null != n && (i.callback = n),
            si(e, i),
            ds(e, a, r);
        },
        enqueueForceUpdate: function (e, t) {
          e = e._reactInternals;
          var n = us(),
            r = cs(e),
            a = li(n, r);
          (a.tag = 2), null != t && (a.callback = t), si(e, a), ds(e, r, n);
        },
      };
      function hi(e, t, n, r, a, i, o) {
        return "function" == typeof (e = e.stateNode).shouldComponentUpdate
          ? e.shouldComponentUpdate(r, i, o)
          : !t.prototype ||
              !t.prototype.isPureReactComponent ||
              !ur(n, r) ||
              !ur(a, i);
      }
      function gi(e, t, n) {
        var r = !1,
          a = ua,
          i = t.contextType;
        return (
          "object" == typeof i && null !== i
            ? (i = ri(i))
            : ((a = ma(t) ? pa : ca.current),
              (i = (r = null != (r = t.contextTypes)) ? fa(e, a) : ua)),
          (t = new t(n, i)),
          (e.memoizedState =
            null !== t.state && void 0 !== t.state ? t.state : null),
          (t.updater = mi),
          (e.stateNode = t),
          (t._reactInternals = e),
          r &&
            (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext =
              a),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
          t
        );
      }
      function bi(e, t, n, r) {
        (e = t.state),
          "function" == typeof t.componentWillReceiveProps &&
            t.componentWillReceiveProps(n, r),
          "function" == typeof t.UNSAFE_componentWillReceiveProps &&
            t.UNSAFE_componentWillReceiveProps(n, r),
          t.state !== e && mi.enqueueReplaceState(t, t.state, null);
      }
      function yi(e, t, n, r) {
        var a = e.stateNode;
        (a.props = n), (a.state = e.memoizedState), (a.refs = pi), ii(e);
        var i = t.contextType;
        "object" == typeof i && null !== i
          ? (a.context = ri(i))
          : ((i = ma(t) ? pa : ca.current), (a.context = fa(e, i))),
          ci(e, n, a, r),
          (a.state = e.memoizedState),
          "function" == typeof (i = t.getDerivedStateFromProps) &&
            (fi(e, t, i, n), (a.state = e.memoizedState)),
          "function" == typeof t.getDerivedStateFromProps ||
            "function" == typeof a.getSnapshotBeforeUpdate ||
            ("function" != typeof a.UNSAFE_componentWillMount &&
              "function" != typeof a.componentWillMount) ||
            ((t = a.state),
            "function" == typeof a.componentWillMount && a.componentWillMount(),
            "function" == typeof a.UNSAFE_componentWillMount &&
              a.UNSAFE_componentWillMount(),
            t !== a.state && mi.enqueueReplaceState(a, a.state, null),
            ci(e, n, a, r),
            (a.state = e.memoizedState)),
          "function" == typeof a.componentDidMount && (e.flags |= 4);
      }
      var vi = Array.isArray;
      function wi(e, t, n) {
        if (
          null !== (e = n.ref) &&
          "function" != typeof e &&
          "object" != typeof e
        ) {
          if (n._owner) {
            if ((n = n._owner)) {
              if (1 !== n.tag) throw Error(o(309));
              var r = n.stateNode;
            }
            if (!r) throw Error(o(147, e));
            var a = "" + e;
            return null !== t &&
              null !== t.ref &&
              "function" == typeof t.ref &&
              t.ref._stringRef === a
              ? t.ref
              : (((t = function (e) {
                  var t = r.refs;
                  t === pi && (t = r.refs = {}),
                    null === e ? delete t[a] : (t[a] = e);
                })._stringRef = a),
                t);
          }
          if ("string" != typeof e) throw Error(o(284));
          if (!n._owner) throw Error(o(290, e));
        }
        return e;
      }
      function ki(e, t) {
        if ("textarea" !== e.type)
          throw Error(
            o(
              31,
              "[object Object]" === Object.prototype.toString.call(t)
                ? "object with keys {" + Object.keys(t).join(", ") + "}"
                : t
            )
          );
      }
      function Si(e) {
        function t(t, n) {
          if (e) {
            var r = t.lastEffect;
            null !== r
              ? ((r.nextEffect = n), (t.lastEffect = n))
              : (t.firstEffect = t.lastEffect = n),
              (n.nextEffect = null),
              (n.flags = 8);
          }
        }
        function n(n, r) {
          if (!e) return null;
          for (; null !== r; ) t(n, r), (r = r.sibling);
          return null;
        }
        function r(e, t) {
          for (e = new Map(); null !== t; )
            null !== t.key ? e.set(t.key, t) : e.set(t.index, t),
              (t = t.sibling);
          return e;
        }
        function a(e, t) {
          return ((e = $s(e, t)).index = 0), (e.sibling = null), e;
        }
        function i(t, n, r) {
          return (
            (t.index = r),
            e
              ? null !== (r = t.alternate)
                ? (r = r.index) < n
                  ? ((t.flags = 2), n)
                  : r
                : ((t.flags = 2), n)
              : n
          );
        }
        function l(t) {
          return e && null === t.alternate && (t.flags = 2), t;
        }
        function s(e, t, n, r) {
          return null === t || 6 !== t.tag
            ? (((t = Vs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function u(e, t, n, r) {
          return null !== t && t.elementType === n.type
            ? (((r = a(t, n.props)).ref = wi(e, t, n)), (r.return = e), r)
            : (((r = Gs(n.type, n.key, n.props, null, e.mode, r)).ref = wi(
                e,
                t,
                n
              )),
              (r.return = e),
              r);
        }
        function c(e, t, n, r) {
          return null === t ||
            4 !== t.tag ||
            t.stateNode.containerInfo !== n.containerInfo ||
            t.stateNode.implementation !== n.implementation
            ? (((t = Zs(n, e.mode, r)).return = e), t)
            : (((t = a(t, n.children || [])).return = e), t);
        }
        function d(e, t, n, r, i) {
          return null === t || 7 !== t.tag
            ? (((t = Hs(n, e.mode, r, i)).return = e), t)
            : (((t = a(t, n)).return = e), t);
        }
        function p(e, t, n) {
          if ("string" == typeof t || "number" == typeof t)
            return ((t = Vs("" + t, e.mode, n)).return = e), t;
          if ("object" == typeof t && null !== t) {
            switch (t.$$typeof) {
              case S:
                return (
                  ((n = Gs(t.type, t.key, t.props, null, e.mode, n)).ref = wi(
                    e,
                    null,
                    t
                  )),
                  (n.return = e),
                  n
                );
              case E:
                return ((t = Zs(t, e.mode, n)).return = e), t;
            }
            if (vi(t) || U(t))
              return ((t = Hs(t, e.mode, n, null)).return = e), t;
            ki(e, t);
          }
          return null;
        }
        function f(e, t, n, r) {
          var a = null !== t ? t.key : null;
          if ("string" == typeof n || "number" == typeof n)
            return null !== a ? null : s(e, t, "" + n, r);
          if ("object" == typeof n && null !== n) {
            switch (n.$$typeof) {
              case S:
                return n.key === a
                  ? n.type === x
                    ? d(e, t, n.props.children, r, a)
                    : u(e, t, n, r)
                  : null;
              case E:
                return n.key === a ? c(e, t, n, r) : null;
            }
            if (vi(n) || U(n)) return null !== a ? null : d(e, t, n, r, null);
            ki(e, n);
          }
          return null;
        }
        function m(e, t, n, r, a) {
          if ("string" == typeof r || "number" == typeof r)
            return s(t, (e = e.get(n) || null), "" + r, a);
          if ("object" == typeof r && null !== r) {
            switch (r.$$typeof) {
              case S:
                return (
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r.type === x
                    ? d(t, e, r.props.children, a, r.key)
                    : u(t, e, r, a)
                );
              case E:
                return c(
                  t,
                  (e = e.get(null === r.key ? n : r.key) || null),
                  r,
                  a
                );
            }
            if (vi(r) || U(r)) return d(t, (e = e.get(n) || null), r, a, null);
            ki(t, r);
          }
          return null;
        }
        function h(a, o, l, s) {
          for (
            var u = null, c = null, d = o, h = (o = 0), g = null;
            null !== d && h < l.length;
            h++
          ) {
            d.index > h ? ((g = d), (d = null)) : (g = d.sibling);
            var b = f(a, d, l[h], s);
            if (null === b) {
              null === d && (d = g);
              break;
            }
            e && d && null === b.alternate && t(a, d),
              (o = i(b, o, h)),
              null === c ? (u = b) : (c.sibling = b),
              (c = b),
              (d = g);
          }
          if (h === l.length) return n(a, d), u;
          if (null === d) {
            for (; h < l.length; h++)
              null !== (d = p(a, l[h], s)) &&
                ((o = i(d, o, h)),
                null === c ? (u = d) : (c.sibling = d),
                (c = d));
            return u;
          }
          for (d = r(a, d); h < l.length; h++)
            null !== (g = m(d, a, h, l[h], s)) &&
              (e &&
                null !== g.alternate &&
                d.delete(null === g.key ? h : g.key),
              (o = i(g, o, h)),
              null === c ? (u = g) : (c.sibling = g),
              (c = g));
          return (
            e &&
              d.forEach(function (e) {
                return t(a, e);
              }),
            u
          );
        }
        function g(a, l, s, u) {
          var c = U(s);
          if ("function" != typeof c) throw Error(o(150));
          if (null == (s = c.call(s))) throw Error(o(151));
          for (
            var d = (c = null), h = l, g = (l = 0), b = null, y = s.next();
            null !== h && !y.done;
            g++, y = s.next()
          ) {
            h.index > g ? ((b = h), (h = null)) : (b = h.sibling);
            var v = f(a, h, y.value, u);
            if (null === v) {
              null === h && (h = b);
              break;
            }
            e && h && null === v.alternate && t(a, h),
              (l = i(v, l, g)),
              null === d ? (c = v) : (d.sibling = v),
              (d = v),
              (h = b);
          }
          if (y.done) return n(a, h), c;
          if (null === h) {
            for (; !y.done; g++, y = s.next())
              null !== (y = p(a, y.value, u)) &&
                ((l = i(y, l, g)),
                null === d ? (c = y) : (d.sibling = y),
                (d = y));
            return c;
          }
          for (h = r(a, h); !y.done; g++, y = s.next())
            null !== (y = m(h, a, g, y.value, u)) &&
              (e &&
                null !== y.alternate &&
                h.delete(null === y.key ? g : y.key),
              (l = i(y, l, g)),
              null === d ? (c = y) : (d.sibling = y),
              (d = y));
          return (
            e &&
              h.forEach(function (e) {
                return t(a, e);
              }),
            c
          );
        }
        return function (e, r, i, s) {
          var u =
            "object" == typeof i &&
            null !== i &&
            i.type === x &&
            null === i.key;
          u && (i = i.props.children);
          var c = "object" == typeof i && null !== i;
          if (c)
            switch (i.$$typeof) {
              case S:
                e: {
                  for (c = i.key, u = r; null !== u; ) {
                    if (u.key === c) {
                      switch (u.tag) {
                        case 7:
                          if (i.type === x) {
                            n(e, u.sibling),
                              ((r = a(u, i.props.children)).return = e),
                              (e = r);
                            break e;
                          }
                          break;
                        default:
                          if (u.elementType === i.type) {
                            n(e, u.sibling),
                              ((r = a(u, i.props)).ref = wi(e, u, i)),
                              (r.return = e),
                              (e = r);
                            break e;
                          }
                      }
                      n(e, u);
                      break;
                    }
                    t(e, u), (u = u.sibling);
                  }
                  i.type === x
                    ? (((r = Hs(i.props.children, e.mode, s, i.key)).return =
                        e),
                      (e = r))
                    : (((s = Gs(i.type, i.key, i.props, null, e.mode, s)).ref =
                        wi(e, r, i)),
                      (s.return = e),
                      (e = s));
                }
                return l(e);
              case E:
                e: {
                  for (u = i.key; null !== r; ) {
                    if (r.key === u) {
                      if (
                        4 === r.tag &&
                        r.stateNode.containerInfo === i.containerInfo &&
                        r.stateNode.implementation === i.implementation
                      ) {
                        n(e, r.sibling),
                          ((r = a(r, i.children || [])).return = e),
                          (e = r);
                        break e;
                      }
                      n(e, r);
                      break;
                    }
                    t(e, r), (r = r.sibling);
                  }
                  ((r = Zs(i, e.mode, s)).return = e), (e = r);
                }
                return l(e);
            }
          if ("string" == typeof i || "number" == typeof i)
            return (
              (i = "" + i),
              null !== r && 6 === r.tag
                ? (n(e, r.sibling), ((r = a(r, i)).return = e), (e = r))
                : (n(e, r), ((r = Vs(i, e.mode, s)).return = e), (e = r)),
              l(e)
            );
          if (vi(i)) return h(e, r, i, s);
          if (U(i)) return g(e, r, i, s);
          if ((c && ki(e, i), void 0 === i && !u))
            switch (e.tag) {
              case 1:
              case 22:
              case 0:
              case 11:
              case 15:
                throw Error(o(152, V(e.type) || "Component"));
            }
          return n(e, r);
        };
      }
      var Ei = Si(!0),
        xi = Si(!1),
        Ti = {},
        Ci = oa(Ti),
        Ai = oa(Ti),
        _i = oa(Ti);
      function Oi(e) {
        if (e === Ti) throw Error(o(174));
        return e;
      }
      function Ri(e, t) {
        switch ((sa(_i, t), sa(Ai, e), sa(Ci, Ti), (e = t.nodeType))) {
          case 9:
          case 11:
            t = (t = t.documentElement) ? t.namespaceURI : me(null, "");
            break;
          default:
            t = me(
              (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
              (e = e.tagName)
            );
        }
        la(Ci), sa(Ci, t);
      }
      function Pi() {
        la(Ci), la(Ai), la(_i);
      }
      function Li(e) {
        Oi(_i.current);
        var t = Oi(Ci.current),
          n = me(t, e.type);
        t !== n && (sa(Ai, e), sa(Ci, n));
      }
      function Ni(e) {
        Ai.current === e && (la(Ci), la(Ai));
      }
      var Ii = oa(0);
      function Di(e) {
        for (var t = e; null !== t; ) {
          if (13 === t.tag) {
            var n = t.memoizedState;
            if (
              null !== n &&
              (null === (n = n.dehydrated) ||
                "$?" === n.data ||
                "$!" === n.data)
            )
              return t;
          } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
            if (0 != (64 & t.flags)) return t;
          } else if (null !== t.child) {
            (t.child.return = t), (t = t.child);
            continue;
          }
          if (t === e) break;
          for (; null === t.sibling; ) {
            if (null === t.return || t.return === e) return null;
            t = t.return;
          }
          (t.sibling.return = t.return), (t = t.sibling);
        }
        return null;
      }
      var Fi = null,
        Mi = null,
        ji = !1;
      function Bi(e, t) {
        var n = qs(5, null, null, 0);
        (n.elementType = "DELETED"),
          (n.type = "DELETED"),
          (n.stateNode = t),
          (n.return = e),
          (n.flags = 8),
          null !== e.lastEffect
            ? ((e.lastEffect.nextEffect = n), (e.lastEffect = n))
            : (e.firstEffect = e.lastEffect = n);
      }
      function zi(e, t) {
        switch (e.tag) {
          case 5:
            var n = e.type;
            return (
              null !==
                (t =
                  1 !== t.nodeType ||
                  n.toLowerCase() !== t.nodeName.toLowerCase()
                    ? null
                    : t) && ((e.stateNode = t), !0)
            );
          case 6:
            return (
              null !==
                (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) &&
              ((e.stateNode = t), !0)
            );
          case 13:
          default:
            return !1;
        }
      }
      function qi(e) {
        if (ji) {
          var t = Mi;
          if (t) {
            var n = t;
            if (!zi(e, t)) {
              if (!(t = Hr(n.nextSibling)) || !zi(e, t))
                return (
                  (e.flags = (-1025 & e.flags) | 2), (ji = !1), void (Fi = e)
                );
              Bi(Fi, n);
            }
            (Fi = e), (Mi = Hr(t.firstChild));
          } else (e.flags = (-1025 & e.flags) | 2), (ji = !1), (Fi = e);
        }
      }
      function Ui(e) {
        for (
          e = e.return;
          null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

        )
          e = e.return;
        Fi = e;
      }
      function $i(e) {
        if (e !== Fi) return !1;
        if (!ji) return Ui(e), (ji = !0), !1;
        var t = e.type;
        if (
          5 !== e.tag ||
          ("head" !== t && "body" !== t && !qr(t, e.memoizedProps))
        )
          for (t = Mi; t; ) Bi(e, t), (t = Hr(t.nextSibling));
        if ((Ui(e), 13 === e.tag)) {
          if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
            throw Error(o(317));
          e: {
            for (e = e.nextSibling, t = 0; e; ) {
              if (8 === e.nodeType) {
                var n = e.data;
                if ("/$" === n) {
                  if (0 === t) {
                    Mi = Hr(e.nextSibling);
                    break e;
                  }
                  t--;
                } else ("$" !== n && "$!" !== n && "$?" !== n) || t++;
              }
              e = e.nextSibling;
            }
            Mi = null;
          }
        } else Mi = Fi ? Hr(e.stateNode.nextSibling) : null;
        return !0;
      }
      function Gi() {
        (Mi = Fi = null), (ji = !1);
      }
      var Hi = [];
      function Wi() {
        for (var e = 0; e < Hi.length; e++)
          Hi[e]._workInProgressVersionPrimary = null;
        Hi.length = 0;
      }
      var Vi = k.ReactCurrentDispatcher,
        Zi = k.ReactCurrentBatchConfig,
        Yi = 0,
        Ki = null,
        Qi = null,
        Xi = null,
        Ji = !1,
        eo = !1;
      function to() {
        throw Error(o(321));
      }
      function no(e, t) {
        if (null === t) return !1;
        for (var n = 0; n < t.length && n < e.length; n++)
          if (!lr(e[n], t[n])) return !1;
        return !0;
      }
      function ro(e, t, n, r, a, i) {
        if (
          ((Yi = i),
          (Ki = t),
          (t.memoizedState = null),
          (t.updateQueue = null),
          (t.lanes = 0),
          (Vi.current = null === e || null === e.memoizedState ? Ro : Po),
          (e = n(r, a)),
          eo)
        ) {
          i = 0;
          do {
            if (((eo = !1), !(25 > i))) throw Error(o(301));
            (i += 1),
              (Xi = Qi = null),
              (t.updateQueue = null),
              (Vi.current = Lo),
              (e = n(r, a));
          } while (eo);
        }
        if (
          ((Vi.current = Oo),
          (t = null !== Qi && null !== Qi.next),
          (Yi = 0),
          (Xi = Qi = Ki = null),
          (Ji = !1),
          t)
        )
          throw Error(o(300));
        return e;
      }
      function ao() {
        var e = {
          memoizedState: null,
          baseState: null,
          baseQueue: null,
          queue: null,
          next: null,
        };
        return (
          null === Xi ? (Ki.memoizedState = Xi = e) : (Xi = Xi.next = e), Xi
        );
      }
      function io() {
        if (null === Qi) {
          var e = Ki.alternate;
          e = null !== e ? e.memoizedState : null;
        } else e = Qi.next;
        var t = null === Xi ? Ki.memoizedState : Xi.next;
        if (null !== t) (Xi = t), (Qi = e);
        else {
          if (null === e) throw Error(o(310));
          (e = {
            memoizedState: (Qi = e).memoizedState,
            baseState: Qi.baseState,
            baseQueue: Qi.baseQueue,
            queue: Qi.queue,
            next: null,
          }),
            null === Xi ? (Ki.memoizedState = Xi = e) : (Xi = Xi.next = e);
        }
        return Xi;
      }
      function oo(e, t) {
        return "function" == typeof t ? t(e) : t;
      }
      function lo(e) {
        var t = io(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = Qi,
          a = r.baseQueue,
          i = n.pending;
        if (null !== i) {
          if (null !== a) {
            var l = a.next;
            (a.next = i.next), (i.next = l);
          }
          (r.baseQueue = a = i), (n.pending = null);
        }
        if (null !== a) {
          (a = a.next), (r = r.baseState);
          var s = (l = i = null),
            u = a;
          do {
            var c = u.lane;
            if ((Yi & c) === c)
              null !== s &&
                (s = s.next =
                  {
                    lane: 0,
                    action: u.action,
                    eagerReducer: u.eagerReducer,
                    eagerState: u.eagerState,
                    next: null,
                  }),
                (r = u.eagerReducer === e ? u.eagerState : e(r, u.action));
            else {
              var d = {
                lane: c,
                action: u.action,
                eagerReducer: u.eagerReducer,
                eagerState: u.eagerState,
                next: null,
              };
              null === s ? ((l = s = d), (i = r)) : (s = s.next = d),
                (Ki.lanes |= c),
                (jl |= c);
            }
            u = u.next;
          } while (null !== u && u !== a);
          null === s ? (i = r) : (s.next = l),
            lr(r, t.memoizedState) || (Io = !0),
            (t.memoizedState = r),
            (t.baseState = i),
            (t.baseQueue = s),
            (n.lastRenderedState = r);
        }
        return [t.memoizedState, n.dispatch];
      }
      function so(e) {
        var t = io(),
          n = t.queue;
        if (null === n) throw Error(o(311));
        n.lastRenderedReducer = e;
        var r = n.dispatch,
          a = n.pending,
          i = t.memoizedState;
        if (null !== a) {
          n.pending = null;
          var l = (a = a.next);
          do {
            (i = e(i, l.action)), (l = l.next);
          } while (l !== a);
          lr(i, t.memoizedState) || (Io = !0),
            (t.memoizedState = i),
            null === t.baseQueue && (t.baseState = i),
            (n.lastRenderedState = i);
        }
        return [i, r];
      }
      function uo(e, t, n) {
        var r = t._getVersion;
        r = r(t._source);
        var a = t._workInProgressVersionPrimary;
        if (
          (null !== a
            ? (e = a === r)
            : ((e = e.mutableReadLanes),
              (e = (Yi & e) === e) &&
                ((t._workInProgressVersionPrimary = r), Hi.push(t))),
          e)
        )
          return n(t._source);
        throw (Hi.push(t), Error(o(350)));
      }
      function co(e, t, n, r) {
        var a = Rl;
        if (null === a) throw Error(o(349));
        var i = t._getVersion,
          l = i(t._source),
          s = Vi.current,
          u = s.useState(function () {
            return uo(a, t, n);
          }),
          c = u[1],
          d = u[0];
        u = Xi;
        var p = e.memoizedState,
          f = p.refs,
          m = f.getSnapshot,
          h = p.source;
        p = p.subscribe;
        var g = Ki;
        return (
          (e.memoizedState = { refs: f, source: t, subscribe: r }),
          s.useEffect(
            function () {
              (f.getSnapshot = n), (f.setSnapshot = c);
              var e = i(t._source);
              if (!lr(l, e)) {
                (e = n(t._source)),
                  lr(d, e) ||
                    (c(e),
                    (e = cs(g)),
                    (a.mutableReadLanes |= e & a.pendingLanes)),
                  (e = a.mutableReadLanes),
                  (a.entangledLanes |= e);
                for (var r = a.entanglements, o = e; 0 < o; ) {
                  var s = 31 - Gt(o),
                    u = 1 << s;
                  (r[s] |= e), (o &= ~u);
                }
              }
            },
            [n, t, r]
          ),
          s.useEffect(
            function () {
              return r(t._source, function () {
                var e = f.getSnapshot,
                  n = f.setSnapshot;
                try {
                  n(e(t._source));
                  var r = cs(g);
                  a.mutableReadLanes |= r & a.pendingLanes;
                } catch (i) {
                  n(function () {
                    throw i;
                  });
                }
              });
            },
            [t, r]
          ),
          (lr(m, n) && lr(h, t) && lr(p, r)) ||
            (((e = {
              pending: null,
              dispatch: null,
              lastRenderedReducer: oo,
              lastRenderedState: d,
            }).dispatch = c =
              _o.bind(null, Ki, e)),
            (u.queue = e),
            (u.baseQueue = null),
            (d = uo(a, t, n)),
            (u.memoizedState = u.baseState = d)),
          d
        );
      }
      function po(e, t, n) {
        return co(io(), e, t, n);
      }
      function fo(e) {
        var t = ao();
        return (
          "function" == typeof e && (e = e()),
          (t.memoizedState = t.baseState = e),
          (e = (e = t.queue =
            {
              pending: null,
              dispatch: null,
              lastRenderedReducer: oo,
              lastRenderedState: e,
            }).dispatch =
            _o.bind(null, Ki, e)),
          [t.memoizedState, e]
        );
      }
      function mo(e, t, n, r) {
        return (
          (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
          null === (t = Ki.updateQueue)
            ? ((t = { lastEffect: null }),
              (Ki.updateQueue = t),
              (t.lastEffect = e.next = e))
            : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
          e
        );
      }
      function ho(e) {
        return (e = { current: e }), (ao().memoizedState = e);
      }
      function go() {
        return io().memoizedState;
      }
      function bo(e, t, n, r) {
        var a = ao();
        (Ki.flags |= e),
          (a.memoizedState = mo(1 | t, n, void 0, void 0 === r ? null : r));
      }
      function yo(e, t, n, r) {
        var a = io();
        r = void 0 === r ? null : r;
        var i = void 0;
        if (null !== Qi) {
          var o = Qi.memoizedState;
          if (((i = o.destroy), null !== r && no(r, o.deps)))
            return void mo(t, n, i, r);
        }
        (Ki.flags |= e), (a.memoizedState = mo(1 | t, n, i, r));
      }
      function vo(e, t) {
        return bo(516, 4, e, t);
      }
      function wo(e, t) {
        return yo(516, 4, e, t);
      }
      function ko(e, t) {
        return yo(4, 2, e, t);
      }
      function So(e, t) {
        return "function" == typeof t
          ? ((e = e()),
            t(e),
            function () {
              t(null);
            })
          : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null;
            })
          : void 0;
      }
      function Eo(e, t, n) {
        return (
          (n = null != n ? n.concat([e]) : null),
          yo(4, 2, So.bind(null, t, e), n)
        );
      }
      function xo() {}
      function To(e, t) {
        var n = io();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1])
          ? r[0]
          : ((n.memoizedState = [e, t]), e);
      }
      function Co(e, t) {
        var n = io();
        t = void 0 === t ? null : t;
        var r = n.memoizedState;
        return null !== r && null !== t && no(t, r[1])
          ? r[0]
          : ((e = e()), (n.memoizedState = [e, t]), e);
      }
      function Ao(e, t) {
        var n = qa();
        $a(98 > n ? 98 : n, function () {
          e(!0);
        }),
          $a(97 < n ? 97 : n, function () {
            var n = Zi.transition;
            Zi.transition = 1;
            try {
              e(!1), t();
            } finally {
              Zi.transition = n;
            }
          });
      }
      function _o(e, t, n) {
        var r = us(),
          a = cs(e),
          i = {
            lane: a,
            action: n,
            eagerReducer: null,
            eagerState: null,
            next: null,
          },
          o = t.pending;
        if (
          (null === o ? (i.next = i) : ((i.next = o.next), (o.next = i)),
          (t.pending = i),
          (o = e.alternate),
          e === Ki || (null !== o && o === Ki))
        )
          eo = Ji = !0;
        else {
          if (
            0 === e.lanes &&
            (null === o || 0 === o.lanes) &&
            null !== (o = t.lastRenderedReducer)
          )
            try {
              var l = t.lastRenderedState,
                s = o(l, n);
              if (((i.eagerReducer = o), (i.eagerState = s), lr(s, l))) return;
            } catch (u) {}
          ds(e, a, r);
        }
      }
      var Oo = {
          readContext: ri,
          useCallback: to,
          useContext: to,
          useEffect: to,
          useImperativeHandle: to,
          useLayoutEffect: to,
          useMemo: to,
          useReducer: to,
          useRef: to,
          useState: to,
          useDebugValue: to,
          useDeferredValue: to,
          useTransition: to,
          useMutableSource: to,
          useOpaqueIdentifier: to,
          unstable_isNewReconciler: !1,
        },
        Ro = {
          readContext: ri,
          useCallback: function (e, t) {
            return (ao().memoizedState = [e, void 0 === t ? null : t]), e;
          },
          useContext: ri,
          useEffect: vo,
          useImperativeHandle: function (e, t, n) {
            return (
              (n = null != n ? n.concat([e]) : null),
              bo(4, 2, So.bind(null, t, e), n)
            );
          },
          useLayoutEffect: function (e, t) {
            return bo(4, 2, e, t);
          },
          useMemo: function (e, t) {
            var n = ao();
            return (
              (t = void 0 === t ? null : t),
              (e = e()),
              (n.memoizedState = [e, t]),
              e
            );
          },
          useReducer: function (e, t, n) {
            var r = ao();
            return (
              (t = void 0 !== n ? n(t) : t),
              (r.memoizedState = r.baseState = t),
              (e = (e = r.queue =
                {
                  pending: null,
                  dispatch: null,
                  lastRenderedReducer: e,
                  lastRenderedState: t,
                }).dispatch =
                _o.bind(null, Ki, e)),
              [r.memoizedState, e]
            );
          },
          useRef: ho,
          useState: fo,
          useDebugValue: xo,
          useDeferredValue: function (e) {
            var t = fo(e),
              n = t[0],
              r = t[1];
            return (
              vo(
                function () {
                  var t = Zi.transition;
                  Zi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Zi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = fo(!1),
              t = e[0];
            return ho((e = Ao.bind(null, e[1]))), [e, t];
          },
          useMutableSource: function (e, t, n) {
            var r = ao();
            return (
              (r.memoizedState = {
                refs: { getSnapshot: t, setSnapshot: null },
                source: e,
                subscribe: n,
              }),
              co(r, e, t, n)
            );
          },
          useOpaqueIdentifier: function () {
            if (ji) {
              var e = !1,
                t = (function (e) {
                  return { $$typeof: D, toString: e, valueOf: e };
                })(function () {
                  throw (
                    (e || ((e = !0), n("r:" + (Vr++).toString(36))),
                    Error(o(355)))
                  );
                }),
                n = fo(t)[1];
              return (
                0 == (2 & Ki.mode) &&
                  ((Ki.flags |= 516),
                  mo(
                    5,
                    function () {
                      n("r:" + (Vr++).toString(36));
                    },
                    void 0,
                    null
                  )),
                t
              );
            }
            return fo((t = "r:" + (Vr++).toString(36))), t;
          },
          unstable_isNewReconciler: !1,
        },
        Po = {
          readContext: ri,
          useCallback: To,
          useContext: ri,
          useEffect: wo,
          useImperativeHandle: Eo,
          useLayoutEffect: ko,
          useMemo: Co,
          useReducer: lo,
          useRef: go,
          useState: function () {
            return lo(oo);
          },
          useDebugValue: xo,
          useDeferredValue: function (e) {
            var t = lo(oo),
              n = t[0],
              r = t[1];
            return (
              wo(
                function () {
                  var t = Zi.transition;
                  Zi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Zi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = lo(oo)[0];
            return [go().current, e];
          },
          useMutableSource: po,
          useOpaqueIdentifier: function () {
            return lo(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        Lo = {
          readContext: ri,
          useCallback: To,
          useContext: ri,
          useEffect: wo,
          useImperativeHandle: Eo,
          useLayoutEffect: ko,
          useMemo: Co,
          useReducer: so,
          useRef: go,
          useState: function () {
            return so(oo);
          },
          useDebugValue: xo,
          useDeferredValue: function (e) {
            var t = so(oo),
              n = t[0],
              r = t[1];
            return (
              wo(
                function () {
                  var t = Zi.transition;
                  Zi.transition = 1;
                  try {
                    r(e);
                  } finally {
                    Zi.transition = t;
                  }
                },
                [e]
              ),
              n
            );
          },
          useTransition: function () {
            var e = so(oo)[0];
            return [go().current, e];
          },
          useMutableSource: po,
          useOpaqueIdentifier: function () {
            return so(oo)[0];
          },
          unstable_isNewReconciler: !1,
        },
        No = k.ReactCurrentOwner,
        Io = !1;
      function Do(e, t, n, r) {
        t.child = null === e ? xi(t, null, n, r) : Ei(t, e.child, n, r);
      }
      function Fo(e, t, n, r, a) {
        n = n.render;
        var i = t.ref;
        return (
          ni(t, a),
          (r = ro(e, t, n, r, i, a)),
          null === e || Io
            ? ((t.flags |= 1), Do(e, t, r, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              nl(e, t, a))
        );
      }
      function Mo(e, t, n, r, a, i) {
        if (null === e) {
          var o = n.type;
          return "function" != typeof o ||
            Us(o) ||
            void 0 !== o.defaultProps ||
            null !== n.compare ||
            void 0 !== n.defaultProps
            ? (((e = Gs(n.type, null, r, t, t.mode, i)).ref = t.ref),
              (e.return = t),
              (t.child = e))
            : ((t.tag = 15), (t.type = o), jo(e, t, o, r, a, i));
        }
        return (
          (o = e.child),
          0 == (a & i) &&
          ((a = o.memoizedProps),
          (n = null !== (n = n.compare) ? n : ur)(a, r) && e.ref === t.ref)
            ? nl(e, t, i)
            : ((t.flags |= 1),
              ((e = $s(o, r)).ref = t.ref),
              (e.return = t),
              (t.child = e))
        );
      }
      function jo(e, t, n, r, a, i) {
        if (null !== e && ur(e.memoizedProps, r) && e.ref === t.ref) {
          if (((Io = !1), 0 == (i & a)))
            return (t.lanes = e.lanes), nl(e, t, i);
          0 != (16384 & e.flags) && (Io = !0);
        }
        return qo(e, t, n, r, i);
      }
      function Bo(e, t, n) {
        var r = t.pendingProps,
          a = r.children,
          i = null !== e ? e.memoizedState : null;
        if ("hidden" === r.mode || "unstable-defer-without-hiding" === r.mode)
          if (0 == (4 & t.mode)) (t.memoizedState = { baseLanes: 0 }), vs(t, n);
          else {
            if (0 == (1073741824 & n))
              return (
                (e = null !== i ? i.baseLanes | n : n),
                (t.lanes = t.childLanes = 1073741824),
                (t.memoizedState = { baseLanes: e }),
                vs(t, e),
                null
              );
            (t.memoizedState = { baseLanes: 0 }),
              vs(t, null !== i ? i.baseLanes : n);
          }
        else
          null !== i
            ? ((r = i.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            vs(t, r);
        return Do(e, t, a, n), t.child;
      }
      function zo(e, t) {
        var n = t.ref;
        ((null === e && null !== n) || (null !== e && e.ref !== n)) &&
          (t.flags |= 128);
      }
      function qo(e, t, n, r, a) {
        var i = ma(n) ? pa : ca.current;
        return (
          (i = fa(t, i)),
          ni(t, a),
          (n = ro(e, t, n, r, i, a)),
          null === e || Io
            ? ((t.flags |= 1), Do(e, t, n, a), t.child)
            : ((t.updateQueue = e.updateQueue),
              (t.flags &= -517),
              (e.lanes &= ~a),
              nl(e, t, a))
        );
      }
      function Uo(e, t, n, r, a) {
        if (ma(n)) {
          var i = !0;
          ya(t);
        } else i = !1;
        if ((ni(t, a), null === t.stateNode))
          null !== e &&
            ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
            gi(t, n, r),
            yi(t, n, r, a),
            (r = !0);
        else if (null === e) {
          var o = t.stateNode,
            l = t.memoizedProps;
          o.props = l;
          var s = o.context,
            u = n.contextType;
          "object" == typeof u && null !== u
            ? (u = ri(u))
            : (u = fa(t, (u = ma(n) ? pa : ca.current)));
          var c = n.getDerivedStateFromProps,
            d =
              "function" == typeof c ||
              "function" == typeof o.getSnapshotBeforeUpdate;
          d ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((l !== r || s !== u) && bi(t, o, r, u)),
            (ai = !1);
          var p = t.memoizedState;
          (o.state = p),
            ci(t, r, o, a),
            (s = t.memoizedState),
            l !== r || p !== s || da.current || ai
              ? ("function" == typeof c &&
                  (fi(t, n, c, r), (s = t.memoizedState)),
                (l = ai || hi(t, n, l, r, p, s, u))
                  ? (d ||
                      ("function" != typeof o.UNSAFE_componentWillMount &&
                        "function" != typeof o.componentWillMount) ||
                      ("function" == typeof o.componentWillMount &&
                        o.componentWillMount(),
                      "function" == typeof o.UNSAFE_componentWillMount &&
                        o.UNSAFE_componentWillMount()),
                    "function" == typeof o.componentDidMount && (t.flags |= 4))
                  : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                    (t.memoizedProps = r),
                    (t.memoizedState = s)),
                (o.props = r),
                (o.state = s),
                (o.context = u),
                (r = l))
              : ("function" == typeof o.componentDidMount && (t.flags |= 4),
                (r = !1));
        } else {
          (o = t.stateNode),
            oi(e, t),
            (l = t.memoizedProps),
            (u = t.type === t.elementType ? l : Za(t.type, l)),
            (o.props = u),
            (d = t.pendingProps),
            (p = o.context),
            "object" == typeof (s = n.contextType) && null !== s
              ? (s = ri(s))
              : (s = fa(t, (s = ma(n) ? pa : ca.current)));
          var f = n.getDerivedStateFromProps;
          (c =
            "function" == typeof f ||
            "function" == typeof o.getSnapshotBeforeUpdate) ||
            ("function" != typeof o.UNSAFE_componentWillReceiveProps &&
              "function" != typeof o.componentWillReceiveProps) ||
            ((l !== d || p !== s) && bi(t, o, r, s)),
            (ai = !1),
            (p = t.memoizedState),
            (o.state = p),
            ci(t, r, o, a);
          var m = t.memoizedState;
          l !== d || p !== m || da.current || ai
            ? ("function" == typeof f &&
                (fi(t, n, f, r), (m = t.memoizedState)),
              (u = ai || hi(t, n, u, r, p, m, s))
                ? (c ||
                    ("function" != typeof o.UNSAFE_componentWillUpdate &&
                      "function" != typeof o.componentWillUpdate) ||
                    ("function" == typeof o.componentWillUpdate &&
                      o.componentWillUpdate(r, m, s),
                    "function" == typeof o.UNSAFE_componentWillUpdate &&
                      o.UNSAFE_componentWillUpdate(r, m, s)),
                  "function" == typeof o.componentDidUpdate && (t.flags |= 4),
                  "function" == typeof o.getSnapshotBeforeUpdate &&
                    (t.flags |= 256))
                : ("function" != typeof o.componentDidUpdate ||
                    (l === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 4),
                  "function" != typeof o.getSnapshotBeforeUpdate ||
                    (l === e.memoizedProps && p === e.memoizedState) ||
                    (t.flags |= 256),
                  (t.memoizedProps = r),
                  (t.memoizedState = m)),
              (o.props = r),
              (o.state = m),
              (o.context = s),
              (r = u))
            : ("function" != typeof o.componentDidUpdate ||
                (l === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 4),
              "function" != typeof o.getSnapshotBeforeUpdate ||
                (l === e.memoizedProps && p === e.memoizedState) ||
                (t.flags |= 256),
              (r = !1));
        }
        return $o(e, t, n, r, i, a);
      }
      function $o(e, t, n, r, a, i) {
        zo(e, t);
        var o = 0 != (64 & t.flags);
        if (!r && !o) return a && va(t, n, !1), nl(e, t, i);
        (r = t.stateNode), (No.current = t);
        var l =
          o && "function" != typeof n.getDerivedStateFromError
            ? null
            : r.render();
        return (
          (t.flags |= 1),
          null !== e && o
            ? ((t.child = Ei(t, e.child, null, i)),
              (t.child = Ei(t, null, l, i)))
            : Do(e, t, l, i),
          (t.memoizedState = r.state),
          a && va(t, n, !0),
          t.child
        );
      }
      function Go(e) {
        var t = e.stateNode;
        t.pendingContext
          ? ga(0, t.pendingContext, t.pendingContext !== t.context)
          : t.context && ga(0, t.context, !1),
          Ri(e, t.containerInfo);
      }
      var Ho,
        Wo,
        Vo,
        Zo = { dehydrated: null, retryLane: 0 };
      function Yo(e, t, n) {
        var r,
          a = t.pendingProps,
          i = Ii.current,
          o = !1;
        return (
          (r = 0 != (64 & t.flags)) ||
            (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
          r
            ? ((o = !0), (t.flags &= -65))
            : (null !== e && null === e.memoizedState) ||
              void 0 === a.fallback ||
              !0 === a.unstable_avoidThisFallback ||
              (i |= 1),
          sa(Ii, 1 & i),
          null === e
            ? (void 0 !== a.fallback && qi(t),
              (e = a.children),
              (i = a.fallback),
              o
                ? ((e = Ko(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Zo),
                  e)
                : "number" == typeof a.unstable_expectedLoadTime
                ? ((e = Ko(t, e, i, n)),
                  (t.child.memoizedState = { baseLanes: n }),
                  (t.memoizedState = Zo),
                  (t.lanes = 33554432),
                  e)
                : (((n = Ws(
                    { mode: "visible", children: e },
                    t.mode,
                    n,
                    null
                  )).return = t),
                  (t.child = n)))
            : (e.memoizedState,
              o
                ? ((a = Xo(e, t, a.children, a.fallback, n)),
                  (o = t.child),
                  (i = e.child.memoizedState),
                  (o.memoizedState =
                    null === i
                      ? { baseLanes: n }
                      : { baseLanes: i.baseLanes | n }),
                  (o.childLanes = e.childLanes & ~n),
                  (t.memoizedState = Zo),
                  a)
                : ((n = Qo(e, t, a.children, n)), (t.memoizedState = null), n))
        );
      }
      function Ko(e, t, n, r) {
        var a = e.mode,
          i = e.child;
        return (
          (t = { mode: "hidden", children: t }),
          0 == (2 & a) && null !== i
            ? ((i.childLanes = 0), (i.pendingProps = t))
            : (i = Ws(t, a, 0, null)),
          (n = Hs(n, a, r, null)),
          (i.return = e),
          (n.return = e),
          (i.sibling = n),
          (e.child = i),
          n
        );
      }
      function Qo(e, t, n, r) {
        var a = e.child;
        return (
          (e = a.sibling),
          (n = $s(a, { mode: "visible", children: n })),
          0 == (2 & t.mode) && (n.lanes = r),
          (n.return = t),
          (n.sibling = null),
          null !== e &&
            ((e.nextEffect = null),
            (e.flags = 8),
            (t.firstEffect = t.lastEffect = e)),
          (t.child = n)
        );
      }
      function Xo(e, t, n, r, a) {
        var i = t.mode,
          o = e.child;
        e = o.sibling;
        var l = { mode: "hidden", children: n };
        return (
          0 == (2 & i) && t.child !== o
            ? (((n = t.child).childLanes = 0),
              (n.pendingProps = l),
              null !== (o = n.lastEffect)
                ? ((t.firstEffect = n.firstEffect),
                  (t.lastEffect = o),
                  (o.nextEffect = null))
                : (t.firstEffect = t.lastEffect = null))
            : (n = $s(o, l)),
          null !== e ? (r = $s(e, r)) : ((r = Hs(r, i, a, null)).flags |= 2),
          (r.return = t),
          (n.return = t),
          (n.sibling = r),
          (t.child = n),
          r
        );
      }
      function Jo(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        null !== n && (n.lanes |= t), ti(e.return, t);
      }
      function el(e, t, n, r, a, i) {
        var o = e.memoizedState;
        null === o
          ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: a,
              lastEffect: i,
            })
          : ((o.isBackwards = t),
            (o.rendering = null),
            (o.renderingStartTime = 0),
            (o.last = r),
            (o.tail = n),
            (o.tailMode = a),
            (o.lastEffect = i));
      }
      function tl(e, t, n) {
        var r = t.pendingProps,
          a = r.revealOrder,
          i = r.tail;
        if ((Do(e, t, r.children, n), 0 != (2 & (r = Ii.current))))
          (r = (1 & r) | 2), (t.flags |= 64);
        else {
          if (null !== e && 0 != (64 & e.flags))
            e: for (e = t.child; null !== e; ) {
              if (13 === e.tag) null !== e.memoizedState && Jo(e, n);
              else if (19 === e.tag) Jo(e, n);
              else if (null !== e.child) {
                (e.child.return = e), (e = e.child);
                continue;
              }
              if (e === t) break e;
              for (; null === e.sibling; ) {
                if (null === e.return || e.return === t) break e;
                e = e.return;
              }
              (e.sibling.return = e.return), (e = e.sibling);
            }
          r &= 1;
        }
        if ((sa(Ii, r), 0 == (2 & t.mode))) t.memoizedState = null;
        else
          switch (a) {
            case "forwards":
              for (n = t.child, a = null; null !== n; )
                null !== (e = n.alternate) && null === Di(e) && (a = n),
                  (n = n.sibling);
              null === (n = a)
                ? ((a = t.child), (t.child = null))
                : ((a = n.sibling), (n.sibling = null)),
                el(t, !1, a, n, i, t.lastEffect);
              break;
            case "backwards":
              for (n = null, a = t.child, t.child = null; null !== a; ) {
                if (null !== (e = a.alternate) && null === Di(e)) {
                  t.child = a;
                  break;
                }
                (e = a.sibling), (a.sibling = n), (n = a), (a = e);
              }
              el(t, !0, n, null, i, t.lastEffect);
              break;
            case "together":
              el(t, !1, null, null, void 0, t.lastEffect);
              break;
            default:
              t.memoizedState = null;
          }
        return t.child;
      }
      function nl(e, t, n) {
        if (
          (null !== e && (t.dependencies = e.dependencies),
          (jl |= t.lanes),
          0 != (n & t.childLanes))
        ) {
          if (null !== e && t.child !== e.child) throw Error(o(153));
          if (null !== t.child) {
            for (
              n = $s((e = t.child), e.pendingProps), t.child = n, n.return = t;
              null !== e.sibling;

            )
              (e = e.sibling),
                ((n = n.sibling = $s(e, e.pendingProps)).return = t);
            n.sibling = null;
          }
          return t.child;
        }
        return null;
      }
      function rl(e, t) {
        if (!ji)
          switch (e.tailMode) {
            case "hidden":
              t = e.tail;
              for (var n = null; null !== t; )
                null !== t.alternate && (n = t), (t = t.sibling);
              null === n ? (e.tail = null) : (n.sibling = null);
              break;
            case "collapsed":
              n = e.tail;
              for (var r = null; null !== n; )
                null !== n.alternate && (r = n), (n = n.sibling);
              null === r
                ? t || null === e.tail
                  ? (e.tail = null)
                  : (e.tail.sibling = null)
                : (r.sibling = null);
          }
      }
      function al(e, t, n) {
        var r = t.pendingProps;
        switch (t.tag) {
          case 2:
          case 16:
          case 15:
          case 0:
          case 11:
          case 7:
          case 8:
          case 12:
          case 9:
          case 14:
            return null;
          case 1:
            return ma(t.type) && ha(), null;
          case 3:
            return (
              Pi(),
              la(da),
              la(ca),
              Wi(),
              (r = t.stateNode).pendingContext &&
                ((r.context = r.pendingContext), (r.pendingContext = null)),
              (null !== e && null !== e.child) ||
                ($i(t) ? (t.flags |= 4) : r.hydrate || (t.flags |= 256)),
              null
            );
          case 5:
            Ni(t);
            var i = Oi(_i.current);
            if (((n = t.type), null !== e && null != t.stateNode))
              Wo(e, t, n, r), e.ref !== t.ref && (t.flags |= 128);
            else {
              if (!r) {
                if (null === t.stateNode) throw Error(o(166));
                return null;
              }
              if (((e = Oi(Ci.current)), $i(t))) {
                (r = t.stateNode), (n = t.type);
                var l = t.memoizedProps;
                switch (((r[Yr] = t), (r[Kr] = l), n)) {
                  case "dialog":
                    Ar("cancel", r), Ar("close", r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ar("load", r);
                    break;
                  case "video":
                  case "audio":
                    for (e = 0; e < Er.length; e++) Ar(Er[e], r);
                    break;
                  case "source":
                    Ar("error", r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ar("error", r), Ar("load", r);
                    break;
                  case "details":
                    Ar("toggle", r);
                    break;
                  case "input":
                    ee(r, l), Ar("invalid", r);
                    break;
                  case "select":
                    (r._wrapperState = { wasMultiple: !!l.multiple }),
                      Ar("invalid", r);
                    break;
                  case "textarea":
                    se(r, l), Ar("invalid", r);
                }
                for (var u in (xe(n, l), (e = null), l))
                  l.hasOwnProperty(u) &&
                    ((i = l[u]),
                    "children" === u
                      ? "string" == typeof i
                        ? r.textContent !== i && (e = ["children", i])
                        : "number" == typeof i &&
                          r.textContent !== "" + i &&
                          (e = ["children", "" + i])
                      : s.hasOwnProperty(u) &&
                        null != i &&
                        "onScroll" === u &&
                        Ar("scroll", r));
                switch (n) {
                  case "input":
                    K(r), re(r, l, !0);
                    break;
                  case "textarea":
                    K(r), ce(r);
                    break;
                  case "select":
                  case "option":
                    break;
                  default:
                    "function" == typeof l.onClick && (r.onclick = Mr);
                }
                (r = e), (t.updateQueue = r), null !== r && (t.flags |= 4);
              } else {
                switch (
                  ((u = 9 === i.nodeType ? i : i.ownerDocument),
                  e === de && (e = fe(n)),
                  e === de
                    ? "script" === n
                      ? (((e = u.createElement("div")).innerHTML =
                          "<script></script>"),
                        (e = e.removeChild(e.firstChild)))
                      : "string" == typeof r.is
                      ? (e = u.createElement(n, { is: r.is }))
                      : ((e = u.createElement(n)),
                        "select" === n &&
                          ((u = e),
                          r.multiple
                            ? (u.multiple = !0)
                            : r.size && (u.size = r.size)))
                    : (e = u.createElementNS(e, n)),
                  (e[Yr] = t),
                  (e[Kr] = r),
                  Ho(e, t),
                  (t.stateNode = e),
                  (u = Te(n, r)),
                  n)
                ) {
                  case "dialog":
                    Ar("cancel", e), Ar("close", e), (i = r);
                    break;
                  case "iframe":
                  case "object":
                  case "embed":
                    Ar("load", e), (i = r);
                    break;
                  case "video":
                  case "audio":
                    for (i = 0; i < Er.length; i++) Ar(Er[i], e);
                    i = r;
                    break;
                  case "source":
                    Ar("error", e), (i = r);
                    break;
                  case "img":
                  case "image":
                  case "link":
                    Ar("error", e), Ar("load", e), (i = r);
                    break;
                  case "details":
                    Ar("toggle", e), (i = r);
                    break;
                  case "input":
                    ee(e, r), (i = J(e, r)), Ar("invalid", e);
                    break;
                  case "option":
                    i = ie(e, r);
                    break;
                  case "select":
                    (e._wrapperState = { wasMultiple: !!r.multiple }),
                      (i = a({}, r, { value: void 0 })),
                      Ar("invalid", e);
                    break;
                  case "textarea":
                    se(e, r), (i = le(e, r)), Ar("invalid", e);
                    break;
                  default:
                    i = r;
                }
                xe(n, i);
                var c = i;
                for (l in c)
                  if (c.hasOwnProperty(l)) {
                    var d = c[l];
                    "style" === l
                      ? Se(e, d)
                      : "dangerouslySetInnerHTML" === l
                      ? null != (d = d ? d.__html : void 0) && be(e, d)
                      : "children" === l
                      ? "string" == typeof d
                        ? ("textarea" !== n || "" !== d) && ye(e, d)
                        : "number" == typeof d && ye(e, "" + d)
                      : "suppressContentEditableWarning" !== l &&
                        "suppressHydrationWarning" !== l &&
                        "autoFocus" !== l &&
                        (s.hasOwnProperty(l)
                          ? null != d && "onScroll" === l && Ar("scroll", e)
                          : null != d && w(e, l, d, u));
                  }
                switch (n) {
                  case "input":
                    K(e), re(e, r, !1);
                    break;
                  case "textarea":
                    K(e), ce(e);
                    break;
                  case "option":
                    null != r.value && e.setAttribute("value", "" + Z(r.value));
                    break;
                  case "select":
                    (e.multiple = !!r.multiple),
                      null != (l = r.value)
                        ? oe(e, !!r.multiple, l, !1)
                        : null != r.defaultValue &&
                          oe(e, !!r.multiple, r.defaultValue, !0);
                    break;
                  default:
                    "function" == typeof i.onClick && (e.onclick = Mr);
                }
                zr(n, r) && (t.flags |= 4);
              }
              null !== t.ref && (t.flags |= 128);
            }
            return null;
          case 6:
            if (e && null != t.stateNode) Vo(0, t, e.memoizedProps, r);
            else {
              if ("string" != typeof r && null === t.stateNode)
                throw Error(o(166));
              (n = Oi(_i.current)),
                Oi(Ci.current),
                $i(t)
                  ? ((r = t.stateNode),
                    (n = t.memoizedProps),
                    (r[Yr] = t),
                    r.nodeValue !== n && (t.flags |= 4))
                  : (((r = (
                      9 === n.nodeType ? n : n.ownerDocument
                    ).createTextNode(r))[Yr] = t),
                    (t.stateNode = r));
            }
            return null;
          case 13:
            return (
              la(Ii),
              (r = t.memoizedState),
              0 != (64 & t.flags)
                ? ((t.lanes = n), t)
                : ((r = null !== r),
                  (n = !1),
                  null === e
                    ? void 0 !== t.memoizedProps.fallback && $i(t)
                    : (n = null !== e.memoizedState),
                  r &&
                    !n &&
                    0 != (2 & t.mode) &&
                    ((null === e &&
                      !0 !== t.memoizedProps.unstable_avoidThisFallback) ||
                    0 != (1 & Ii.current)
                      ? 0 === Dl && (Dl = 3)
                      : ((0 !== Dl && 3 !== Dl) || (Dl = 4),
                        null === Rl ||
                          (0 == (134217727 & jl) && 0 == (134217727 & Bl)) ||
                          hs(Rl, Ll))),
                  (r || n) && (t.flags |= 4),
                  null)
            );
          case 4:
            return Pi(), null === e && Or(t.stateNode.containerInfo), null;
          case 10:
            return ei(t), null;
          case 17:
            return ma(t.type) && ha(), null;
          case 19:
            if ((la(Ii), null === (r = t.memoizedState))) return null;
            if (((l = 0 != (64 & t.flags)), null === (u = r.rendering)))
              if (l) rl(r, !1);
              else {
                if (0 !== Dl || (null !== e && 0 != (64 & e.flags)))
                  for (e = t.child; null !== e; ) {
                    if (null !== (u = Di(e))) {
                      for (
                        t.flags |= 64,
                          rl(r, !1),
                          null !== (l = u.updateQueue) &&
                            ((t.updateQueue = l), (t.flags |= 4)),
                          null === r.lastEffect && (t.firstEffect = null),
                          t.lastEffect = r.lastEffect,
                          r = n,
                          n = t.child;
                        null !== n;

                      )
                        (e = r),
                          ((l = n).flags &= 2),
                          (l.nextEffect = null),
                          (l.firstEffect = null),
                          (l.lastEffect = null),
                          null === (u = l.alternate)
                            ? ((l.childLanes = 0),
                              (l.lanes = e),
                              (l.child = null),
                              (l.memoizedProps = null),
                              (l.memoizedState = null),
                              (l.updateQueue = null),
                              (l.dependencies = null),
                              (l.stateNode = null))
                            : ((l.childLanes = u.childLanes),
                              (l.lanes = u.lanes),
                              (l.child = u.child),
                              (l.memoizedProps = u.memoizedProps),
                              (l.memoizedState = u.memoizedState),
                              (l.updateQueue = u.updateQueue),
                              (l.type = u.type),
                              (e = u.dependencies),
                              (l.dependencies =
                                null === e
                                  ? null
                                  : {
                                      lanes: e.lanes,
                                      firstContext: e.firstContext,
                                    })),
                          (n = n.sibling);
                      return sa(Ii, (1 & Ii.current) | 2), t.child;
                    }
                    e = e.sibling;
                  }
                null !== r.tail &&
                  za() > $l &&
                  ((t.flags |= 64), (l = !0), rl(r, !1), (t.lanes = 33554432));
              }
            else {
              if (!l)
                if (null !== (e = Di(u))) {
                  if (
                    ((t.flags |= 64),
                    (l = !0),
                    null !== (n = e.updateQueue) &&
                      ((t.updateQueue = n), (t.flags |= 4)),
                    rl(r, !0),
                    null === r.tail &&
                      "hidden" === r.tailMode &&
                      !u.alternate &&
                      !ji)
                  )
                    return (
                      null !== (t = t.lastEffect = r.lastEffect) &&
                        (t.nextEffect = null),
                      null
                    );
                } else
                  2 * za() - r.renderingStartTime > $l &&
                    1073741824 !== n &&
                    ((t.flags |= 64),
                    (l = !0),
                    rl(r, !1),
                    (t.lanes = 33554432));
              r.isBackwards
                ? ((u.sibling = t.child), (t.child = u))
                : (null !== (n = r.last) ? (n.sibling = u) : (t.child = u),
                  (r.last = u));
            }
            return null !== r.tail
              ? ((n = r.tail),
                (r.rendering = n),
                (r.tail = n.sibling),
                (r.lastEffect = t.lastEffect),
                (r.renderingStartTime = za()),
                (n.sibling = null),
                (t = Ii.current),
                sa(Ii, l ? (1 & t) | 2 : 1 & t),
                n)
              : null;
          case 23:
          case 24:
            return (
              ws(),
              null !== e &&
                (null !== e.memoizedState) != (null !== t.memoizedState) &&
                "unstable-defer-without-hiding" !== r.mode &&
                (t.flags |= 4),
              null
            );
        }
        throw Error(o(156, t.tag));
      }
      function il(e) {
        switch (e.tag) {
          case 1:
            ma(e.type) && ha();
            var t = e.flags;
            return 4096 & t ? ((e.flags = (-4097 & t) | 64), e) : null;
          case 3:
            if ((Pi(), la(da), la(ca), Wi(), 0 != (64 & (t = e.flags))))
              throw Error(o(285));
            return (e.flags = (-4097 & t) | 64), e;
          case 5:
            return Ni(e), null;
          case 13:
            return (
              la(Ii),
              4096 & (t = e.flags) ? ((e.flags = (-4097 & t) | 64), e) : null
            );
          case 19:
            return la(Ii), null;
          case 4:
            return Pi(), null;
          case 10:
            return ei(e), null;
          case 23:
          case 24:
            return ws(), null;
          default:
            return null;
        }
      }
      function ol(e, t) {
        try {
          var n = "",
            r = t;
          do {
            (n += W(r)), (r = r.return);
          } while (r);
          var a = n;
        } catch (i) {
          a = "\nError generating stack: " + i.message + "\n" + i.stack;
        }
        return { value: e, source: t, stack: a };
      }
      function ll(e, t) {
        try {
          console.error(t.value);
        } catch (n) {
          setTimeout(function () {
            throw n;
          });
        }
      }
      (Ho = function (e, t) {
        for (var n = t.child; null !== n; ) {
          if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
          else if (4 !== n.tag && null !== n.child) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === t) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === t) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }),
        (Wo = function (e, t, n, r) {
          var i = e.memoizedProps;
          if (i !== r) {
            (e = t.stateNode), Oi(Ci.current);
            var o,
              l = null;
            switch (n) {
              case "input":
                (i = J(e, i)), (r = J(e, r)), (l = []);
                break;
              case "option":
                (i = ie(e, i)), (r = ie(e, r)), (l = []);
                break;
              case "select":
                (i = a({}, i, { value: void 0 })),
                  (r = a({}, r, { value: void 0 })),
                  (l = []);
                break;
              case "textarea":
                (i = le(e, i)), (r = le(e, r)), (l = []);
                break;
              default:
                "function" != typeof i.onClick &&
                  "function" == typeof r.onClick &&
                  (e.onclick = Mr);
            }
            for (d in (xe(n, r), (n = null), i))
              if (!r.hasOwnProperty(d) && i.hasOwnProperty(d) && null != i[d])
                if ("style" === d) {
                  var u = i[d];
                  for (o in u)
                    u.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
                } else
                  "dangerouslySetInnerHTML" !== d &&
                    "children" !== d &&
                    "suppressContentEditableWarning" !== d &&
                    "suppressHydrationWarning" !== d &&
                    "autoFocus" !== d &&
                    (s.hasOwnProperty(d)
                      ? l || (l = [])
                      : (l = l || []).push(d, null));
            for (d in r) {
              var c = r[d];
              if (
                ((u = null != i ? i[d] : void 0),
                r.hasOwnProperty(d) && c !== u && (null != c || null != u))
              )
                if ("style" === d)
                  if (u) {
                    for (o in u)
                      !u.hasOwnProperty(o) ||
                        (c && c.hasOwnProperty(o)) ||
                        (n || (n = {}), (n[o] = ""));
                    for (o in c)
                      c.hasOwnProperty(o) &&
                        u[o] !== c[o] &&
                        (n || (n = {}), (n[o] = c[o]));
                  } else n || (l || (l = []), l.push(d, n)), (n = c);
                else
                  "dangerouslySetInnerHTML" === d
                    ? ((c = c ? c.__html : void 0),
                      (u = u ? u.__html : void 0),
                      null != c && u !== c && (l = l || []).push(d, c))
                    : "children" === d
                    ? ("string" != typeof c && "number" != typeof c) ||
                      (l = l || []).push(d, "" + c)
                    : "suppressContentEditableWarning" !== d &&
                      "suppressHydrationWarning" !== d &&
                      (s.hasOwnProperty(d)
                        ? (null != c && "onScroll" === d && Ar("scroll", e),
                          l || u === c || (l = []))
                        : "object" == typeof c && null !== c && c.$$typeof === D
                        ? c.toString()
                        : (l = l || []).push(d, c));
            }
            n && (l = l || []).push("style", n);
            var d = l;
            (t.updateQueue = d) && (t.flags |= 4);
          }
        }),
        (Vo = function (e, t, n, r) {
          n !== r && (t.flags |= 4);
        });
      var sl = "function" == typeof WeakMap ? WeakMap : Map;
      function ul(e, t, n) {
        ((n = li(-1, n)).tag = 3), (n.payload = { element: null });
        var r = t.value;
        return (
          (n.callback = function () {
            Vl || ((Vl = !0), (Zl = r)), ll(0, t);
          }),
          n
        );
      }
      function cl(e, t, n) {
        (n = li(-1, n)).tag = 3;
        var r = e.type.getDerivedStateFromError;
        if ("function" == typeof r) {
          var a = t.value;
          n.payload = function () {
            return ll(0, t), r(a);
          };
        }
        var i = e.stateNode;
        return (
          null !== i &&
            "function" == typeof i.componentDidCatch &&
            (n.callback = function () {
              "function" != typeof r &&
                (null === Yl ? (Yl = new Set([this])) : Yl.add(this), ll(0, t));
              var e = t.stack;
              this.componentDidCatch(t.value, {
                componentStack: null !== e ? e : "",
              });
            }),
          n
        );
      }
      var dl = "function" == typeof WeakSet ? WeakSet : Set;
      function pl(e) {
        var t = e.ref;
        if (null !== t)
          if ("function" == typeof t)
            try {
              t(null);
            } catch (n) {
              Ms(e, n);
            }
          else t.current = null;
      }
      function fl(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            return;
          case 1:
            if (256 & t.flags && null !== e) {
              var n = e.memoizedProps,
                r = e.memoizedState;
              (t = (e = t.stateNode).getSnapshotBeforeUpdate(
                t.elementType === t.type ? n : Za(t.type, n),
                r
              )),
                (e.__reactInternalSnapshotBeforeUpdate = t);
            }
            return;
          case 3:
            return void (256 & t.flags && Gr(t.stateNode.containerInfo));
          case 5:
          case 6:
          case 4:
          case 17:
            return;
        }
        throw Error(o(163));
      }
      function ml(e, t, n) {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
          case 22:
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                if (3 == (3 & e.tag)) {
                  var r = e.create;
                  e.destroy = r();
                }
                e = e.next;
              } while (e !== t);
            }
            if (
              null !== (t = null !== (t = n.updateQueue) ? t.lastEffect : null)
            ) {
              e = t = t.next;
              do {
                var a = e;
                (r = a.next),
                  0 != (4 & (a = a.tag)) &&
                    0 != (1 & a) &&
                    (Is(n, e), Ns(n, e)),
                  (e = r);
              } while (e !== t);
            }
            return;
          case 1:
            return (
              (e = n.stateNode),
              4 & n.flags &&
                (null === t
                  ? e.componentDidMount()
                  : ((r =
                      n.elementType === n.type
                        ? t.memoizedProps
                        : Za(n.type, t.memoizedProps)),
                    e.componentDidUpdate(
                      r,
                      t.memoizedState,
                      e.__reactInternalSnapshotBeforeUpdate
                    ))),
              void (null !== (t = n.updateQueue) && di(n, t, e))
            );
          case 3:
            if (null !== (t = n.updateQueue)) {
              if (((e = null), null !== n.child))
                switch (n.child.tag) {
                  case 5:
                    e = n.child.stateNode;
                    break;
                  case 1:
                    e = n.child.stateNode;
                }
              di(n, t, e);
            }
            return;
          case 5:
            return (
              (e = n.stateNode),
              void (
                null === t &&
                4 & n.flags &&
                zr(n.type, n.memoizedProps) &&
                e.focus()
              )
            );
          case 6:
          case 4:
          case 12:
            return;
          case 13:
            return void (
              null === n.memoizedState &&
              ((n = n.alternate),
              null !== n &&
                ((n = n.memoizedState),
                null !== n && ((n = n.dehydrated), null !== n && St(n))))
            );
          case 19:
          case 17:
          case 20:
          case 21:
          case 23:
          case 24:
            return;
        }
        throw Error(o(163));
      }
      function hl(e, t) {
        for (var n = e; ; ) {
          if (5 === n.tag) {
            var r = n.stateNode;
            if (t)
              "function" == typeof (r = r.style).setProperty
                ? r.setProperty("display", "none", "important")
                : (r.display = "none");
            else {
              r = n.stateNode;
              var a = n.memoizedProps.style;
              (a = null != a && a.hasOwnProperty("display") ? a.display : null),
                (r.style.display = ke("display", a));
            }
          } else if (6 === n.tag)
            n.stateNode.nodeValue = t ? "" : n.memoizedProps;
          else if (
            ((23 !== n.tag && 24 !== n.tag) ||
              null === n.memoizedState ||
              n === e) &&
            null !== n.child
          ) {
            (n.child.return = n), (n = n.child);
            continue;
          }
          if (n === e) break;
          for (; null === n.sibling; ) {
            if (null === n.return || n.return === e) return;
            n = n.return;
          }
          (n.sibling.return = n.return), (n = n.sibling);
        }
      }
      function gl(e, t) {
        if (ka && "function" == typeof ka.onCommitFiberUnmount)
          try {
            ka.onCommitFiberUnmount(wa, t);
          } catch (i) {}
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            if (null !== (e = t.updateQueue) && null !== (e = e.lastEffect)) {
              var n = (e = e.next);
              do {
                var r = n,
                  a = r.destroy;
                if (((r = r.tag), void 0 !== a))
                  if (0 != (4 & r)) Is(t, n);
                  else {
                    r = t;
                    try {
                      a();
                    } catch (i) {
                      Ms(r, i);
                    }
                  }
                n = n.next;
              } while (n !== e);
            }
            break;
          case 1:
            if (
              (pl(t),
              "function" == typeof (e = t.stateNode).componentWillUnmount)
            )
              try {
                (e.props = t.memoizedProps),
                  (e.state = t.memoizedState),
                  e.componentWillUnmount();
              } catch (i) {
                Ms(t, i);
              }
            break;
          case 5:
            pl(t);
            break;
          case 4:
            Sl(e, t);
        }
      }
      function bl(e) {
        (e.alternate = null),
          (e.child = null),
          (e.dependencies = null),
          (e.firstEffect = null),
          (e.lastEffect = null),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.pendingProps = null),
          (e.return = null),
          (e.updateQueue = null);
      }
      function yl(e) {
        return 5 === e.tag || 3 === e.tag || 4 === e.tag;
      }
      function vl(e) {
        e: {
          for (var t = e.return; null !== t; ) {
            if (yl(t)) break e;
            t = t.return;
          }
          throw Error(o(160));
        }
        var n = t;
        switch (((t = n.stateNode), n.tag)) {
          case 5:
            var r = !1;
            break;
          case 3:
          case 4:
            (t = t.containerInfo), (r = !0);
            break;
          default:
            throw Error(o(161));
        }
        16 & n.flags && (ye(t, ""), (n.flags &= -17));
        e: t: for (n = e; ; ) {
          for (; null === n.sibling; ) {
            if (null === n.return || yl(n.return)) {
              n = null;
              break e;
            }
            n = n.return;
          }
          for (
            n.sibling.return = n.return, n = n.sibling;
            5 !== n.tag && 6 !== n.tag && 18 !== n.tag;

          ) {
            if (2 & n.flags) continue t;
            if (null === n.child || 4 === n.tag) continue t;
            (n.child.return = n), (n = n.child);
          }
          if (!(2 & n.flags)) {
            n = n.stateNode;
            break e;
          }
        }
        r ? wl(e, n, t) : kl(e, n, t);
      }
      function wl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t
              ? 8 === n.nodeType
                ? n.parentNode.insertBefore(e, t)
                : n.insertBefore(e, t)
              : (8 === n.nodeType
                  ? (t = n.parentNode).insertBefore(e, n)
                  : (t = n).appendChild(e),
                null != (n = n._reactRootContainer) ||
                  null !== t.onclick ||
                  (t.onclick = Mr));
        else if (4 !== r && null !== (e = e.child))
          for (wl(e, t, n), e = e.sibling; null !== e; )
            wl(e, t, n), (e = e.sibling);
      }
      function kl(e, t, n) {
        var r = e.tag,
          a = 5 === r || 6 === r;
        if (a)
          (e = a ? e.stateNode : e.stateNode.instance),
            t ? n.insertBefore(e, t) : n.appendChild(e);
        else if (4 !== r && null !== (e = e.child))
          for (kl(e, t, n), e = e.sibling; null !== e; )
            kl(e, t, n), (e = e.sibling);
      }
      function Sl(e, t) {
        for (var n, r, a = t, i = !1; ; ) {
          if (!i) {
            i = a.return;
            e: for (;;) {
              if (null === i) throw Error(o(160));
              switch (((n = i.stateNode), i.tag)) {
                case 5:
                  r = !1;
                  break e;
                case 3:
                case 4:
                  (n = n.containerInfo), (r = !0);
                  break e;
              }
              i = i.return;
            }
            i = !0;
          }
          if (5 === a.tag || 6 === a.tag) {
            e: for (var l = e, s = a, u = s; ; )
              if ((gl(l, u), null !== u.child && 4 !== u.tag))
                (u.child.return = u), (u = u.child);
              else {
                if (u === s) break e;
                for (; null === u.sibling; ) {
                  if (null === u.return || u.return === s) break e;
                  u = u.return;
                }
                (u.sibling.return = u.return), (u = u.sibling);
              }
            r
              ? ((l = n),
                (s = a.stateNode),
                8 === l.nodeType
                  ? l.parentNode.removeChild(s)
                  : l.removeChild(s))
              : n.removeChild(a.stateNode);
          } else if (4 === a.tag) {
            if (null !== a.child) {
              (n = a.stateNode.containerInfo),
                (r = !0),
                (a.child.return = a),
                (a = a.child);
              continue;
            }
          } else if ((gl(e, a), null !== a.child)) {
            (a.child.return = a), (a = a.child);
            continue;
          }
          if (a === t) break;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === t) return;
            4 === (a = a.return).tag && (i = !1);
          }
          (a.sibling.return = a.return), (a = a.sibling);
        }
      }
      function El(e, t) {
        switch (t.tag) {
          case 0:
          case 11:
          case 14:
          case 15:
          case 22:
            var n = t.updateQueue;
            if (null !== (n = null !== n ? n.lastEffect : null)) {
              var r = (n = n.next);
              do {
                3 == (3 & r.tag) &&
                  ((e = r.destroy), (r.destroy = void 0), void 0 !== e && e()),
                  (r = r.next);
              } while (r !== n);
            }
            return;
          case 1:
            return;
          case 5:
            if (null != (n = t.stateNode)) {
              r = t.memoizedProps;
              var a = null !== e ? e.memoizedProps : r;
              e = t.type;
              var i = t.updateQueue;
              if (((t.updateQueue = null), null !== i)) {
                for (
                  n[Kr] = r,
                    "input" === e &&
                      "radio" === r.type &&
                      null != r.name &&
                      te(n, r),
                    Te(e, a),
                    t = Te(e, r),
                    a = 0;
                  a < i.length;
                  a += 2
                ) {
                  var l = i[a],
                    s = i[a + 1];
                  "style" === l
                    ? Se(n, s)
                    : "dangerouslySetInnerHTML" === l
                    ? be(n, s)
                    : "children" === l
                    ? ye(n, s)
                    : w(n, l, s, t);
                }
                switch (e) {
                  case "input":
                    ne(n, r);
                    break;
                  case "textarea":
                    ue(n, r);
                    break;
                  case "select":
                    (e = n._wrapperState.wasMultiple),
                      (n._wrapperState.wasMultiple = !!r.multiple),
                      null != (i = r.value)
                        ? oe(n, !!r.multiple, i, !1)
                        : e !== !!r.multiple &&
                          (null != r.defaultValue
                            ? oe(n, !!r.multiple, r.defaultValue, !0)
                            : oe(n, !!r.multiple, r.multiple ? [] : "", !1));
                }
              }
            }
            return;
          case 6:
            if (null === t.stateNode) throw Error(o(162));
            return void (t.stateNode.nodeValue = t.memoizedProps);
          case 3:
            return void (
              (n = t.stateNode).hydrate &&
              ((n.hydrate = !1), St(n.containerInfo))
            );
          case 12:
            return;
          case 13:
            return (
              null !== t.memoizedState && ((Ul = za()), hl(t.child, !0)),
              void xl(t)
            );
          case 19:
            return void xl(t);
          case 17:
            return;
          case 23:
          case 24:
            return void hl(t, null !== t.memoizedState);
        }
        throw Error(o(163));
      }
      function xl(e) {
        var t = e.updateQueue;
        if (null !== t) {
          e.updateQueue = null;
          var n = e.stateNode;
          null === n && (n = e.stateNode = new dl()),
            t.forEach(function (t) {
              var r = Bs.bind(null, e, t);
              n.has(t) || (n.add(t), t.then(r, r));
            });
        }
      }
      function Tl(e, t) {
        return (
          null !== e &&
          (null === (e = e.memoizedState) || null !== e.dehydrated) &&
          null !== (t = t.memoizedState) &&
          null === t.dehydrated
        );
      }
      var Cl = Math.ceil,
        Al = k.ReactCurrentDispatcher,
        _l = k.ReactCurrentOwner,
        Ol = 0,
        Rl = null,
        Pl = null,
        Ll = 0,
        Nl = 0,
        Il = oa(0),
        Dl = 0,
        Fl = null,
        Ml = 0,
        jl = 0,
        Bl = 0,
        zl = 0,
        ql = null,
        Ul = 0,
        $l = 1 / 0;
      function Gl() {
        $l = za() + 500;
      }
      var Hl,
        Wl = null,
        Vl = !1,
        Zl = null,
        Yl = null,
        Kl = !1,
        Ql = null,
        Xl = 90,
        Jl = [],
        es = [],
        ts = null,
        ns = 0,
        rs = null,
        as = -1,
        is = 0,
        os = 0,
        ls = null,
        ss = !1;
      function us() {
        return 0 != (48 & Ol) ? za() : -1 !== as ? as : (as = za());
      }
      function cs(e) {
        if (0 == (2 & (e = e.mode))) return 1;
        if (0 == (4 & e)) return 99 === qa() ? 1 : 2;
        if ((0 === is && (is = Ml), 0 !== Va.transition)) {
          0 !== os && (os = null !== ql ? ql.pendingLanes : 0), (e = is);
          var t = 4186112 & ~os;
          return (
            0 === (t &= -t) &&
              0 === (t = (e = 4186112 & ~e) & -e) &&
              (t = 8192),
            t
          );
        }
        return (
          (e = qa()),
          0 != (4 & Ol) && 98 === e
            ? (e = zt(12, is))
            : (e = zt(
                (e = (function (e) {
                  switch (e) {
                    case 99:
                      return 15;
                    case 98:
                      return 10;
                    case 97:
                    case 96:
                      return 8;
                    case 95:
                      return 2;
                    default:
                      return 0;
                  }
                })(e)),
                is
              )),
          e
        );
      }
      function ds(e, t, n) {
        if (50 < ns) throw ((ns = 0), (rs = null), Error(o(185)));
        if (null === (e = ps(e, t))) return null;
        $t(e, t, n), e === Rl && ((Bl |= t), 4 === Dl && hs(e, Ll));
        var r = qa();
        1 === t
          ? 0 != (8 & Ol) && 0 == (48 & Ol)
            ? gs(e)
            : (fs(e, n), 0 === Ol && (Gl(), Ha()))
          : (0 == (4 & Ol) ||
              (98 !== r && 99 !== r) ||
              (null === ts ? (ts = new Set([e])) : ts.add(e)),
            fs(e, n)),
          (ql = e);
      }
      function ps(e, t) {
        e.lanes |= t;
        var n = e.alternate;
        for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
          (e.childLanes |= t),
            null !== (n = e.alternate) && (n.childLanes |= t),
            (n = e),
            (e = e.return);
        return 3 === n.tag ? n.stateNode : null;
      }
      function fs(e, t) {
        for (
          var n = e.callbackNode,
            r = e.suspendedLanes,
            a = e.pingedLanes,
            i = e.expirationTimes,
            l = e.pendingLanes;
          0 < l;

        ) {
          var s = 31 - Gt(l),
            u = 1 << s,
            c = i[s];
          if (-1 === c) {
            if (0 == (u & r) || 0 != (u & a)) {
              (c = t), Mt(u);
              var d = Ft;
              i[s] = 10 <= d ? c + 250 : 6 <= d ? c + 5e3 : -1;
            }
          } else c <= t && (e.expiredLanes |= u);
          l &= ~u;
        }
        if (((r = jt(e, e === Rl ? Ll : 0)), (t = Ft), 0 === r))
          null !== n &&
            (n !== Ia && xa(n),
            (e.callbackNode = null),
            (e.callbackPriority = 0));
        else {
          if (null !== n) {
            if (e.callbackPriority === t) return;
            n !== Ia && xa(n);
          }
          15 === t
            ? ((n = gs.bind(null, e)),
              null === Fa ? ((Fa = [n]), (Ma = Ea(Oa, Wa))) : Fa.push(n),
              (n = Ia))
            : 14 === t
            ? (n = Ga(99, gs.bind(null, e)))
            : (n = Ga(
                (n = (function (e) {
                  switch (e) {
                    case 15:
                    case 14:
                      return 99;
                    case 13:
                    case 12:
                    case 11:
                    case 10:
                      return 98;
                    case 9:
                    case 8:
                    case 7:
                    case 6:
                    case 4:
                    case 5:
                      return 97;
                    case 3:
                    case 2:
                    case 1:
                      return 95;
                    case 0:
                      return 90;
                    default:
                      throw Error(o(358, e));
                  }
                })(t)),
                ms.bind(null, e)
              )),
            (e.callbackPriority = t),
            (e.callbackNode = n);
        }
      }
      function ms(e) {
        if (((as = -1), (os = is = 0), 0 != (48 & Ol))) throw Error(o(327));
        var t = e.callbackNode;
        if (Ls() && e.callbackNode !== t) return null;
        var n = jt(e, e === Rl ? Ll : 0);
        if (0 === n) return null;
        var r = n,
          a = Ol;
        Ol |= 16;
        var i = Es();
        for ((Rl === e && Ll === r) || (Gl(), ks(e, r)); ; )
          try {
            Cs();
            break;
          } catch (s) {
            Ss(e, s);
          }
        if (
          (Ja(),
          (Al.current = i),
          (Ol = a),
          null !== Pl ? (r = 0) : ((Rl = null), (Ll = 0), (r = Dl)),
          0 != (Ml & Bl))
        )
          ks(e, 0);
        else if (0 !== r) {
          if (
            (2 === r &&
              ((Ol |= 64),
              e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)),
              0 !== (n = Bt(e)) && (r = xs(e, n))),
            1 === r)
          )
            throw ((t = Fl), ks(e, 0), hs(e, n), fs(e, za()), t);
          switch (
            ((e.finishedWork = e.current.alternate), (e.finishedLanes = n), r)
          ) {
            case 0:
            case 1:
              throw Error(o(345));
            case 2:
              Os(e);
              break;
            case 3:
              if (
                (hs(e, n), (62914560 & n) === n && 10 < (r = Ul + 500 - za()))
              ) {
                if (0 !== jt(e, 0)) break;
                if (((a = e.suspendedLanes) & n) !== n) {
                  us(), (e.pingedLanes |= e.suspendedLanes & a);
                  break;
                }
                e.timeoutHandle = Ur(Os.bind(null, e), r);
                break;
              }
              Os(e);
              break;
            case 4:
              if ((hs(e, n), (4186112 & n) === n)) break;
              for (r = e.eventTimes, a = -1; 0 < n; ) {
                var l = 31 - Gt(n);
                (i = 1 << l), (l = r[l]) > a && (a = l), (n &= ~i);
              }
              if (
                ((n = a),
                10 <
                  (n =
                    (120 > (n = za() - n)
                      ? 120
                      : 480 > n
                      ? 480
                      : 1080 > n
                      ? 1080
                      : 1920 > n
                      ? 1920
                      : 3e3 > n
                      ? 3e3
                      : 4320 > n
                      ? 4320
                      : 1960 * Cl(n / 1960)) - n))
              ) {
                e.timeoutHandle = Ur(Os.bind(null, e), n);
                break;
              }
              Os(e);
              break;
            case 5:
              Os(e);
              break;
            default:
              throw Error(o(329));
          }
        }
        return fs(e, za()), e.callbackNode === t ? ms.bind(null, e) : null;
      }
      function hs(e, t) {
        for (
          t &= ~zl,
            t &= ~Bl,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
          0 < t;

        ) {
          var n = 31 - Gt(t),
            r = 1 << n;
          (e[n] = -1), (t &= ~r);
        }
      }
      function gs(e) {
        if (0 != (48 & Ol)) throw Error(o(327));
        if ((Ls(), e === Rl && 0 != (e.expiredLanes & Ll))) {
          var t = Ll,
            n = xs(e, t);
          0 != (Ml & Bl) && (n = xs(e, (t = jt(e, t))));
        } else n = xs(e, (t = jt(e, 0)));
        if (
          (0 !== e.tag &&
            2 === n &&
            ((Ol |= 64),
            e.hydrate && ((e.hydrate = !1), Gr(e.containerInfo)),
            0 !== (t = Bt(e)) && (n = xs(e, t))),
          1 === n)
        )
          throw ((n = Fl), ks(e, 0), hs(e, t), fs(e, za()), n);
        return (
          (e.finishedWork = e.current.alternate),
          (e.finishedLanes = t),
          Os(e),
          fs(e, za()),
          null
        );
      }
      function bs(e, t) {
        var n = Ol;
        Ol |= 1;
        try {
          return e(t);
        } finally {
          0 === (Ol = n) && (Gl(), Ha());
        }
      }
      function ys(e, t) {
        var n = Ol;
        (Ol &= -2), (Ol |= 8);
        try {
          return e(t);
        } finally {
          0 === (Ol = n) && (Gl(), Ha());
        }
      }
      function vs(e, t) {
        sa(Il, Nl), (Nl |= t), (Ml |= t);
      }
      function ws() {
        (Nl = Il.current), la(Il);
      }
      function ks(e, t) {
        (e.finishedWork = null), (e.finishedLanes = 0);
        var n = e.timeoutHandle;
        if ((-1 !== n && ((e.timeoutHandle = -1), $r(n)), null !== Pl))
          for (n = Pl.return; null !== n; ) {
            var r = n;
            switch (r.tag) {
              case 1:
                null != (r = r.type.childContextTypes) && ha();
                break;
              case 3:
                Pi(), la(da), la(ca), Wi();
                break;
              case 5:
                Ni(r);
                break;
              case 4:
                Pi();
                break;
              case 13:
              case 19:
                la(Ii);
                break;
              case 10:
                ei(r);
                break;
              case 23:
              case 24:
                ws();
            }
            n = n.return;
          }
        (Rl = e),
          (Pl = $s(e.current, null)),
          (Ll = Nl = Ml = t),
          (Dl = 0),
          (Fl = null),
          (zl = Bl = jl = 0);
      }
      function Ss(e, t) {
        for (;;) {
          var n = Pl;
          try {
            if ((Ja(), (Vi.current = Oo), Ji)) {
              for (var r = Ki.memoizedState; null !== r; ) {
                var a = r.queue;
                null !== a && (a.pending = null), (r = r.next);
              }
              Ji = !1;
            }
            if (
              ((Yi = 0),
              (Xi = Qi = Ki = null),
              (eo = !1),
              (_l.current = null),
              null === n || null === n.return)
            ) {
              (Dl = 1), (Fl = t), (Pl = null);
              break;
            }
            e: {
              var i = e,
                o = n.return,
                l = n,
                s = t;
              if (
                ((t = Ll),
                (l.flags |= 2048),
                (l.firstEffect = l.lastEffect = null),
                null !== s &&
                  "object" == typeof s &&
                  "function" == typeof s.then)
              ) {
                var u = s;
                if (0 == (2 & l.mode)) {
                  var c = l.alternate;
                  c
                    ? ((l.updateQueue = c.updateQueue),
                      (l.memoizedState = c.memoizedState),
                      (l.lanes = c.lanes))
                    : ((l.updateQueue = null), (l.memoizedState = null));
                }
                var d = 0 != (1 & Ii.current),
                  p = o;
                do {
                  var f;
                  if ((f = 13 === p.tag)) {
                    var m = p.memoizedState;
                    if (null !== m) f = null !== m.dehydrated;
                    else {
                      var h = p.memoizedProps;
                      f =
                        void 0 !== h.fallback &&
                        (!0 !== h.unstable_avoidThisFallback || !d);
                    }
                  }
                  if (f) {
                    var g = p.updateQueue;
                    if (null === g) {
                      var b = new Set();
                      b.add(u), (p.updateQueue = b);
                    } else g.add(u);
                    if (0 == (2 & p.mode)) {
                      if (
                        ((p.flags |= 64),
                        (l.flags |= 16384),
                        (l.flags &= -2981),
                        1 === l.tag)
                      )
                        if (null === l.alternate) l.tag = 17;
                        else {
                          var y = li(-1, 1);
                          (y.tag = 2), si(l, y);
                        }
                      l.lanes |= 1;
                      break e;
                    }
                    (s = void 0), (l = t);
                    var v = i.pingCache;
                    if (
                      (null === v
                        ? ((v = i.pingCache = new sl()),
                          (s = new Set()),
                          v.set(u, s))
                        : void 0 === (s = v.get(u)) &&
                          ((s = new Set()), v.set(u, s)),
                      !s.has(l))
                    ) {
                      s.add(l);
                      var w = js.bind(null, i, u, l);
                      u.then(w, w);
                    }
                    (p.flags |= 4096), (p.lanes = t);
                    break e;
                  }
                  p = p.return;
                } while (null !== p);
                s = Error(
                  (V(l.type) || "A React component") +
                    " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display."
                );
              }
              5 !== Dl && (Dl = 2), (s = ol(s, l)), (p = o);
              do {
                switch (p.tag) {
                  case 3:
                    (i = s),
                      (p.flags |= 4096),
                      (t &= -t),
                      (p.lanes |= t),
                      ui(p, ul(0, i, t));
                    break e;
                  case 1:
                    i = s;
                    var k = p.type,
                      S = p.stateNode;
                    if (
                      0 == (64 & p.flags) &&
                      ("function" == typeof k.getDerivedStateFromError ||
                        (null !== S &&
                          "function" == typeof S.componentDidCatch &&
                          (null === Yl || !Yl.has(S))))
                    ) {
                      (p.flags |= 4096),
                        (t &= -t),
                        (p.lanes |= t),
                        ui(p, cl(p, i, t));
                      break e;
                    }
                }
                p = p.return;
              } while (null !== p);
            }
            _s(n);
          } catch (E) {
            (t = E), Pl === n && null !== n && (Pl = n = n.return);
            continue;
          }
          break;
        }
      }
      function Es() {
        var e = Al.current;
        return (Al.current = Oo), null === e ? Oo : e;
      }
      function xs(e, t) {
        var n = Ol;
        Ol |= 16;
        var r = Es();
        for ((Rl === e && Ll === t) || ks(e, t); ; )
          try {
            Ts();
            break;
          } catch (a) {
            Ss(e, a);
          }
        if ((Ja(), (Ol = n), (Al.current = r), null !== Pl))
          throw Error(o(261));
        return (Rl = null), (Ll = 0), Dl;
      }
      function Ts() {
        for (; null !== Pl; ) As(Pl);
      }
      function Cs() {
        for (; null !== Pl && !Ta(); ) As(Pl);
      }
      function As(e) {
        var t = Hl(e.alternate, e, Nl);
        (e.memoizedProps = e.pendingProps),
          null === t ? _s(e) : (Pl = t),
          (_l.current = null);
      }
      function _s(e) {
        var t = e;
        do {
          var n = t.alternate;
          if (((e = t.return), 0 == (2048 & t.flags))) {
            if (null !== (n = al(n, t, Nl))) return void (Pl = n);
            if (
              (24 !== (n = t).tag && 23 !== n.tag) ||
              null === n.memoizedState ||
              0 != (1073741824 & Nl) ||
              0 == (4 & n.mode)
            ) {
              for (var r = 0, a = n.child; null !== a; )
                (r |= a.lanes | a.childLanes), (a = a.sibling);
              n.childLanes = r;
            }
            null !== e &&
              0 == (2048 & e.flags) &&
              (null === e.firstEffect && (e.firstEffect = t.firstEffect),
              null !== t.lastEffect &&
                (null !== e.lastEffect &&
                  (e.lastEffect.nextEffect = t.firstEffect),
                (e.lastEffect = t.lastEffect)),
              1 < t.flags &&
                (null !== e.lastEffect
                  ? (e.lastEffect.nextEffect = t)
                  : (e.firstEffect = t),
                (e.lastEffect = t)));
          } else {
            if (null !== (n = il(t))) return (n.flags &= 2047), void (Pl = n);
            null !== e &&
              ((e.firstEffect = e.lastEffect = null), (e.flags |= 2048));
          }
          if (null !== (t = t.sibling)) return void (Pl = t);
          Pl = t = e;
        } while (null !== t);
        0 === Dl && (Dl = 5);
      }
      function Os(e) {
        var t = qa();
        return $a(99, Rs.bind(null, e, t)), null;
      }
      function Rs(e, t) {
        do {
          Ls();
        } while (null !== Ql);
        if (0 != (48 & Ol)) throw Error(o(327));
        var n = e.finishedWork;
        if (null === n) return null;
        if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
          throw Error(o(177));
        e.callbackNode = null;
        var r = n.lanes | n.childLanes,
          a = r,
          i = e.pendingLanes & ~a;
        (e.pendingLanes = a),
          (e.suspendedLanes = 0),
          (e.pingedLanes = 0),
          (e.expiredLanes &= a),
          (e.mutableReadLanes &= a),
          (e.entangledLanes &= a),
          (a = e.entanglements);
        for (var l = e.eventTimes, s = e.expirationTimes; 0 < i; ) {
          var u = 31 - Gt(i),
            c = 1 << u;
          (a[u] = 0), (l[u] = -1), (s[u] = -1), (i &= ~c);
        }
        if (
          (null !== ts && 0 == (24 & r) && ts.has(e) && ts.delete(e),
          e === Rl && ((Pl = Rl = null), (Ll = 0)),
          1 < n.flags
            ? null !== n.lastEffect
              ? ((n.lastEffect.nextEffect = n), (r = n.firstEffect))
              : (r = n)
            : (r = n.firstEffect),
          null !== r)
        ) {
          if (
            ((a = Ol),
            (Ol |= 32),
            (_l.current = null),
            (jr = Yt),
            mr((l = fr())))
          ) {
            if ("selectionStart" in l)
              s = { start: l.selectionStart, end: l.selectionEnd };
            else
              e: if (
                ((s = ((s = l.ownerDocument) && s.defaultView) || window),
                (c = s.getSelection && s.getSelection()) && 0 !== c.rangeCount)
              ) {
                (s = c.anchorNode),
                  (i = c.anchorOffset),
                  (u = c.focusNode),
                  (c = c.focusOffset);
                try {
                  s.nodeType, u.nodeType;
                } catch (C) {
                  s = null;
                  break e;
                }
                var d = 0,
                  p = -1,
                  f = -1,
                  m = 0,
                  h = 0,
                  g = l,
                  b = null;
                t: for (;;) {
                  for (
                    var y;
                    g !== s || (0 !== i && 3 !== g.nodeType) || (p = d + i),
                      g !== u || (0 !== c && 3 !== g.nodeType) || (f = d + c),
                      3 === g.nodeType && (d += g.nodeValue.length),
                      null !== (y = g.firstChild);

                  )
                    (b = g), (g = y);
                  for (;;) {
                    if (g === l) break t;
                    if (
                      (b === s && ++m === i && (p = d),
                      b === u && ++h === c && (f = d),
                      null !== (y = g.nextSibling))
                    )
                      break;
                    b = (g = b).parentNode;
                  }
                  g = y;
                }
                s = -1 === p || -1 === f ? null : { start: p, end: f };
              } else s = null;
            s = s || { start: 0, end: 0 };
          } else s = null;
          (Br = { focusedElem: l, selectionRange: s }),
            (Yt = !1),
            (ls = null),
            (ss = !1),
            (Wl = r);
          do {
            try {
              Ps();
            } catch (C) {
              if (null === Wl) throw Error(o(330));
              Ms(Wl, C), (Wl = Wl.nextEffect);
            }
          } while (null !== Wl);
          (ls = null), (Wl = r);
          do {
            try {
              for (l = e; null !== Wl; ) {
                var v = Wl.flags;
                if ((16 & v && ye(Wl.stateNode, ""), 128 & v)) {
                  var w = Wl.alternate;
                  if (null !== w) {
                    var k = w.ref;
                    null !== k &&
                      ("function" == typeof k ? k(null) : (k.current = null));
                  }
                }
                switch (1038 & v) {
                  case 2:
                    vl(Wl), (Wl.flags &= -3);
                    break;
                  case 6:
                    vl(Wl), (Wl.flags &= -3), El(Wl.alternate, Wl);
                    break;
                  case 1024:
                    Wl.flags &= -1025;
                    break;
                  case 1028:
                    (Wl.flags &= -1025), El(Wl.alternate, Wl);
                    break;
                  case 4:
                    El(Wl.alternate, Wl);
                    break;
                  case 8:
                    Sl(l, (s = Wl));
                    var S = s.alternate;
                    bl(s), null !== S && bl(S);
                }
                Wl = Wl.nextEffect;
              }
            } catch (C) {
              if (null === Wl) throw Error(o(330));
              Ms(Wl, C), (Wl = Wl.nextEffect);
            }
          } while (null !== Wl);
          if (
            ((k = Br),
            (w = fr()),
            (v = k.focusedElem),
            (l = k.selectionRange),
            w !== v &&
              v &&
              v.ownerDocument &&
              pr(v.ownerDocument.documentElement, v))
          ) {
            null !== l &&
              mr(v) &&
              ((w = l.start),
              void 0 === (k = l.end) && (k = w),
              "selectionStart" in v
                ? ((v.selectionStart = w),
                  (v.selectionEnd = Math.min(k, v.value.length)))
                : (k =
                    ((w = v.ownerDocument || document) && w.defaultView) ||
                    window).getSelection &&
                  ((k = k.getSelection()),
                  (s = v.textContent.length),
                  (S = Math.min(l.start, s)),
                  (l = void 0 === l.end ? S : Math.min(l.end, s)),
                  !k.extend && S > l && ((s = l), (l = S), (S = s)),
                  (s = dr(v, S)),
                  (i = dr(v, l)),
                  s &&
                    i &&
                    (1 !== k.rangeCount ||
                      k.anchorNode !== s.node ||
                      k.anchorOffset !== s.offset ||
                      k.focusNode !== i.node ||
                      k.focusOffset !== i.offset) &&
                    ((w = w.createRange()).setStart(s.node, s.offset),
                    k.removeAllRanges(),
                    S > l
                      ? (k.addRange(w), k.extend(i.node, i.offset))
                      : (w.setEnd(i.node, i.offset), k.addRange(w))))),
              (w = []);
            for (k = v; (k = k.parentNode); )
              1 === k.nodeType &&
                w.push({ element: k, left: k.scrollLeft, top: k.scrollTop });
            for (
              "function" == typeof v.focus && v.focus(), v = 0;
              v < w.length;
              v++
            )
              ((k = w[v]).element.scrollLeft = k.left),
                (k.element.scrollTop = k.top);
          }
          (Yt = !!jr), (Br = jr = null), (e.current = n), (Wl = r);
          do {
            try {
              for (v = e; null !== Wl; ) {
                var E = Wl.flags;
                if ((36 & E && ml(v, Wl.alternate, Wl), 128 & E)) {
                  w = void 0;
                  var x = Wl.ref;
                  if (null !== x) {
                    var T = Wl.stateNode;
                    switch (Wl.tag) {
                      case 5:
                        w = T;
                        break;
                      default:
                        w = T;
                    }
                    "function" == typeof x ? x(w) : (x.current = w);
                  }
                }
                Wl = Wl.nextEffect;
              }
            } catch (C) {
              if (null === Wl) throw Error(o(330));
              Ms(Wl, C), (Wl = Wl.nextEffect);
            }
          } while (null !== Wl);
          (Wl = null), Da(), (Ol = a);
        } else e.current = n;
        if (Kl) (Kl = !1), (Ql = e), (Xl = t);
        else
          for (Wl = r; null !== Wl; )
            (t = Wl.nextEffect),
              (Wl.nextEffect = null),
              8 & Wl.flags && (((E = Wl).sibling = null), (E.stateNode = null)),
              (Wl = t);
        if (
          (0 === (r = e.pendingLanes) && (Yl = null),
          1 === r ? (e === rs ? ns++ : ((ns = 0), (rs = e))) : (ns = 0),
          (n = n.stateNode),
          ka && "function" == typeof ka.onCommitFiberRoot)
        )
          try {
            ka.onCommitFiberRoot(wa, n, void 0, 64 == (64 & n.current.flags));
          } catch (C) {}
        if ((fs(e, za()), Vl)) throw ((Vl = !1), (e = Zl), (Zl = null), e);
        return 0 != (8 & Ol) || Ha(), null;
      }
      function Ps() {
        for (; null !== Wl; ) {
          var e = Wl.alternate;
          ss ||
            null === ls ||
            (0 != (8 & Wl.flags)
              ? et(Wl, ls) && (ss = !0)
              : 13 === Wl.tag && Tl(e, Wl) && et(Wl, ls) && (ss = !0));
          var t = Wl.flags;
          0 != (256 & t) && fl(e, Wl),
            0 == (512 & t) ||
              Kl ||
              ((Kl = !0),
              Ga(97, function () {
                return Ls(), null;
              })),
            (Wl = Wl.nextEffect);
        }
      }
      function Ls() {
        if (90 !== Xl) {
          var e = 97 < Xl ? 97 : Xl;
          return (Xl = 90), $a(e, Ds);
        }
        return !1;
      }
      function Ns(e, t) {
        Jl.push(t, e),
          Kl ||
            ((Kl = !0),
            Ga(97, function () {
              return Ls(), null;
            }));
      }
      function Is(e, t) {
        es.push(t, e),
          Kl ||
            ((Kl = !0),
            Ga(97, function () {
              return Ls(), null;
            }));
      }
      function Ds() {
        if (null === Ql) return !1;
        var e = Ql;
        if (((Ql = null), 0 != (48 & Ol))) throw Error(o(331));
        var t = Ol;
        Ol |= 32;
        var n = es;
        es = [];
        for (var r = 0; r < n.length; r += 2) {
          var a = n[r],
            i = n[r + 1],
            l = a.destroy;
          if (((a.destroy = void 0), "function" == typeof l))
            try {
              l();
            } catch (u) {
              if (null === i) throw Error(o(330));
              Ms(i, u);
            }
        }
        for (n = Jl, Jl = [], r = 0; r < n.length; r += 2) {
          (a = n[r]), (i = n[r + 1]);
          try {
            var s = a.create;
            a.destroy = s();
          } catch (u) {
            if (null === i) throw Error(o(330));
            Ms(i, u);
          }
        }
        for (s = e.current.firstEffect; null !== s; )
          (e = s.nextEffect),
            (s.nextEffect = null),
            8 & s.flags && ((s.sibling = null), (s.stateNode = null)),
            (s = e);
        return (Ol = t), Ha(), !0;
      }
      function Fs(e, t, n) {
        si(e, (t = ul(0, (t = ol(n, t)), 1))),
          (t = us()),
          null !== (e = ps(e, 1)) && ($t(e, 1, t), fs(e, t));
      }
      function Ms(e, t) {
        if (3 === e.tag) Fs(e, e, t);
        else
          for (var n = e.return; null !== n; ) {
            if (3 === n.tag) {
              Fs(n, e, t);
              break;
            }
            if (1 === n.tag) {
              var r = n.stateNode;
              if (
                "function" == typeof n.type.getDerivedStateFromError ||
                ("function" == typeof r.componentDidCatch &&
                  (null === Yl || !Yl.has(r)))
              ) {
                var a = cl(n, (e = ol(t, e)), 1);
                if ((si(n, a), (a = us()), null !== (n = ps(n, 1))))
                  $t(n, 1, a), fs(n, a);
                else if (
                  "function" == typeof r.componentDidCatch &&
                  (null === Yl || !Yl.has(r))
                )
                  try {
                    r.componentDidCatch(t, e);
                  } catch (i) {}
                break;
              }
            }
            n = n.return;
          }
      }
      function js(e, t, n) {
        var r = e.pingCache;
        null !== r && r.delete(t),
          (t = us()),
          (e.pingedLanes |= e.suspendedLanes & n),
          Rl === e &&
            (Ll & n) === n &&
            (4 === Dl || (3 === Dl && (62914560 & Ll) === Ll && 500 > za() - Ul)
              ? ks(e, 0)
              : (zl |= n)),
          fs(e, t);
      }
      function Bs(e, t) {
        var n = e.stateNode;
        null !== n && n.delete(t),
          0 === (t = 0) &&
            (0 == (2 & (t = e.mode))
              ? (t = 1)
              : 0 == (4 & t)
              ? (t = 99 === qa() ? 1 : 2)
              : (0 === is && (is = Ml),
                0 === (t = qt(62914560 & ~is)) && (t = 4194304))),
          (n = us()),
          null !== (e = ps(e, t)) && ($t(e, t, n), fs(e, n));
      }
      function zs(e, t, n, r) {
        (this.tag = e),
          (this.key = n),
          (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
              null),
          (this.index = 0),
          (this.ref = null),
          (this.pendingProps = t),
          (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
              null),
          (this.mode = r),
          (this.flags = 0),
          (this.lastEffect = this.firstEffect = this.nextEffect = null),
          (this.childLanes = this.lanes = 0),
          (this.alternate = null);
      }
      function qs(e, t, n, r) {
        return new zs(e, t, n, r);
      }
      function Us(e) {
        return !(!(e = e.prototype) || !e.isReactComponent);
      }
      function $s(e, t) {
        var n = e.alternate;
        return (
          null === n
            ? (((n = qs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.nextEffect = null),
              (n.firstEffect = null),
              (n.lastEffect = null)),
          (n.childLanes = e.childLanes),
          (n.lanes = e.lanes),
          (n.child = e.child),
          (n.memoizedProps = e.memoizedProps),
          (n.memoizedState = e.memoizedState),
          (n.updateQueue = e.updateQueue),
          (t = e.dependencies),
          (n.dependencies =
            null === t
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext }),
          (n.sibling = e.sibling),
          (n.index = e.index),
          (n.ref = e.ref),
          n
        );
      }
      function Gs(e, t, n, r, a, i) {
        var l = 2;
        if (((r = e), "function" == typeof e)) Us(e) && (l = 1);
        else if ("string" == typeof e) l = 5;
        else
          e: switch (e) {
            case x:
              return Hs(n.children, a, i, t);
            case F:
              (l = 8), (a |= 16);
              break;
            case T:
              (l = 8), (a |= 1);
              break;
            case C:
              return (
                ((e = qs(12, n, t, 8 | a)).elementType = C),
                (e.type = C),
                (e.lanes = i),
                e
              );
            case R:
              return (
                ((e = qs(13, n, t, a)).type = R),
                (e.elementType = R),
                (e.lanes = i),
                e
              );
            case P:
              return ((e = qs(19, n, t, a)).elementType = P), (e.lanes = i), e;
            case M:
              return Ws(n, a, i, t);
            case j:
              return ((e = qs(24, n, t, a)).elementType = j), (e.lanes = i), e;
            default:
              if ("object" == typeof e && null !== e)
                switch (e.$$typeof) {
                  case A:
                    l = 10;
                    break e;
                  case _:
                    l = 9;
                    break e;
                  case O:
                    l = 11;
                    break e;
                  case L:
                    l = 14;
                    break e;
                  case N:
                    (l = 16), (r = null);
                    break e;
                  case I:
                    l = 22;
                    break e;
                }
              throw Error(o(130, null == e ? e : typeof e, ""));
          }
        return (
          ((t = qs(l, n, t, a)).elementType = e), (t.type = r), (t.lanes = i), t
        );
      }
      function Hs(e, t, n, r) {
        return ((e = qs(7, e, r, t)).lanes = n), e;
      }
      function Ws(e, t, n, r) {
        return ((e = qs(23, e, r, t)).elementType = M), (e.lanes = n), e;
      }
      function Vs(e, t, n) {
        return ((e = qs(6, e, null, t)).lanes = n), e;
      }
      function Zs(e, t, n) {
        return (
          ((t = qs(4, null !== e.children ? e.children : [], e.key, t)).lanes =
            n),
          (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
          }),
          t
        );
      }
      function Ys(e, t, n) {
        (this.tag = t),
          (this.containerInfo = e),
          (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
              null),
          (this.timeoutHandle = -1),
          (this.pendingContext = this.context = null),
          (this.hydrate = n),
          (this.callbackNode = null),
          (this.callbackPriority = 0),
          (this.eventTimes = Ut(0)),
          (this.expirationTimes = Ut(-1)),
          (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
              0),
          (this.entanglements = Ut(0)),
          (this.mutableSourceEagerHydrationData = null);
      }
      function Ks(e, t, n) {
        var r =
          3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
        return {
          $$typeof: E,
          key: null == r ? null : "" + r,
          children: e,
          containerInfo: t,
          implementation: n,
        };
      }
      function Qs(e, t, n, r) {
        var a = t.current,
          i = us(),
          l = cs(a);
        e: if (n) {
          t: {
            if (Ke((n = n._reactInternals)) !== n || 1 !== n.tag)
              throw Error(o(170));
            var s = n;
            do {
              switch (s.tag) {
                case 3:
                  s = s.stateNode.context;
                  break t;
                case 1:
                  if (ma(s.type)) {
                    s = s.stateNode.__reactInternalMemoizedMergedChildContext;
                    break t;
                  }
              }
              s = s.return;
            } while (null !== s);
            throw Error(o(171));
          }
          if (1 === n.tag) {
            var u = n.type;
            if (ma(u)) {
              n = ba(n, u, s);
              break e;
            }
          }
          n = s;
        } else n = ua;
        return (
          null === t.context ? (t.context = n) : (t.pendingContext = n),
          ((t = li(i, l)).payload = { element: e }),
          null !== (r = void 0 === r ? null : r) && (t.callback = r),
          si(a, t),
          ds(a, l, i),
          l
        );
      }
      function Xs(e) {
        if (!(e = e.current).child) return null;
        switch (e.child.tag) {
          case 5:
          default:
            return e.child.stateNode;
        }
      }
      function Js(e, t) {
        if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
          var n = e.retryLane;
          e.retryLane = 0 !== n && n < t ? n : t;
        }
      }
      function eu(e, t) {
        Js(e, t), (e = e.alternate) && Js(e, t);
      }
      function tu(e, t, n) {
        var r =
          (null != n &&
            null != n.hydrationOptions &&
            n.hydrationOptions.mutableSources) ||
          null;
        if (
          ((n = new Ys(e, t, null != n && !0 === n.hydrate)),
          (t = qs(3, null, null, 2 === t ? 7 : 1 === t ? 3 : 0)),
          (n.current = t),
          (t.stateNode = n),
          ii(t),
          (e[Qr] = n.current),
          Or(8 === e.nodeType ? e.parentNode : e),
          r)
        )
          for (e = 0; e < r.length; e++) {
            var a = (t = r[e])._getVersion;
            (a = a(t._source)),
              null == n.mutableSourceEagerHydrationData
                ? (n.mutableSourceEagerHydrationData = [t, a])
                : n.mutableSourceEagerHydrationData.push(t, a);
          }
        this._internalRoot = n;
      }
      function nu(e) {
        return !(
          !e ||
          (1 !== e.nodeType &&
            9 !== e.nodeType &&
            11 !== e.nodeType &&
            (8 !== e.nodeType ||
              " react-mount-point-unstable " !== e.nodeValue))
        );
      }
      function ru(e, t, n, r, a) {
        var i = n._reactRootContainer;
        if (i) {
          var o = i._internalRoot;
          if ("function" == typeof a) {
            var l = a;
            a = function () {
              var e = Xs(o);
              l.call(e);
            };
          }
          Qs(t, o, e, a);
        } else {
          if (
            ((i = n._reactRootContainer =
              (function (e, t) {
                if (
                  (t ||
                    (t = !(
                      !(t = e
                        ? 9 === e.nodeType
                          ? e.documentElement
                          : e.firstChild
                        : null) ||
                      1 !== t.nodeType ||
                      !t.hasAttribute("data-reactroot")
                    )),
                  !t)
                )
                  for (var n; (n = e.lastChild); ) e.removeChild(n);
                return new tu(e, 0, t ? { hydrate: !0 } : void 0);
              })(n, r)),
            (o = i._internalRoot),
            "function" == typeof a)
          ) {
            var s = a;
            a = function () {
              var e = Xs(o);
              s.call(e);
            };
          }
          ys(function () {
            Qs(t, o, e, a);
          });
        }
        return Xs(o);
      }
      function au(e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
        if (!nu(t)) throw Error(o(200));
        return Ks(e, t, null, n);
      }
      (Hl = function (e, t, n) {
        var r = t.lanes;
        if (null !== e)
          if (e.memoizedProps !== t.pendingProps || da.current) Io = !0;
          else {
            if (0 == (n & r)) {
              switch (((Io = !1), t.tag)) {
                case 3:
                  Go(t), Gi();
                  break;
                case 5:
                  Li(t);
                  break;
                case 1:
                  ma(t.type) && ya(t);
                  break;
                case 4:
                  Ri(t, t.stateNode.containerInfo);
                  break;
                case 10:
                  r = t.memoizedProps.value;
                  var a = t.type._context;
                  sa(Ya, a._currentValue), (a._currentValue = r);
                  break;
                case 13:
                  if (null !== t.memoizedState)
                    return 0 != (n & t.child.childLanes)
                      ? Yo(e, t, n)
                      : (sa(Ii, 1 & Ii.current),
                        null !== (t = nl(e, t, n)) ? t.sibling : null);
                  sa(Ii, 1 & Ii.current);
                  break;
                case 19:
                  if (((r = 0 != (n & t.childLanes)), 0 != (64 & e.flags))) {
                    if (r) return tl(e, t, n);
                    t.flags |= 64;
                  }
                  if (
                    (null !== (a = t.memoizedState) &&
                      ((a.rendering = null),
                      (a.tail = null),
                      (a.lastEffect = null)),
                    sa(Ii, Ii.current),
                    r)
                  )
                    break;
                  return null;
                case 23:
                case 24:
                  return (t.lanes = 0), Bo(e, t, n);
              }
              return nl(e, t, n);
            }
            Io = 0 != (16384 & e.flags);
          }
        else Io = !1;
        switch (((t.lanes = 0), t.tag)) {
          case 2:
            if (
              ((r = t.type),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (e = t.pendingProps),
              (a = fa(t, ca.current)),
              ni(t, n),
              (a = ro(null, t, r, e, a, n)),
              (t.flags |= 1),
              "object" == typeof a &&
                null !== a &&
                "function" == typeof a.render &&
                void 0 === a.$$typeof)
            ) {
              if (
                ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                ma(r))
              ) {
                var i = !0;
                ya(t);
              } else i = !1;
              (t.memoizedState =
                null !== a.state && void 0 !== a.state ? a.state : null),
                ii(t);
              var l = r.getDerivedStateFromProps;
              "function" == typeof l && fi(t, r, l, e),
                (a.updater = mi),
                (t.stateNode = a),
                (a._reactInternals = t),
                yi(t, r, e, n),
                (t = $o(null, t, r, !0, i, n));
            } else (t.tag = 0), Do(null, t, a, n), (t = t.child);
            return t;
          case 16:
            a = t.elementType;
            e: {
              switch (
                (null !== e &&
                  ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
                (e = t.pendingProps),
                (a = (i = a._init)(a._payload)),
                (t.type = a),
                (i = t.tag =
                  (function (e) {
                    if ("function" == typeof e) return Us(e) ? 1 : 0;
                    if (null != e) {
                      if ((e = e.$$typeof) === O) return 11;
                      if (e === L) return 14;
                    }
                    return 2;
                  })(a)),
                (e = Za(a, e)),
                i)
              ) {
                case 0:
                  t = qo(null, t, a, e, n);
                  break e;
                case 1:
                  t = Uo(null, t, a, e, n);
                  break e;
                case 11:
                  t = Fo(null, t, a, e, n);
                  break e;
                case 14:
                  t = Mo(null, t, a, Za(a.type, e), r, n);
                  break e;
              }
              throw Error(o(306, a, ""));
            }
            return t;
          case 0:
            return (
              (r = t.type),
              (a = t.pendingProps),
              qo(e, t, r, (a = t.elementType === r ? a : Za(r, a)), n)
            );
          case 1:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Uo(e, t, r, (a = t.elementType === r ? a : Za(r, a)), n)
            );
          case 3:
            if ((Go(t), (r = t.updateQueue), null === e || null === r))
              throw Error(o(282));
            if (
              ((r = t.pendingProps),
              (a = null !== (a = t.memoizedState) ? a.element : null),
              oi(e, t),
              ci(t, r, null, n),
              (r = t.memoizedState.element) === a)
            )
              Gi(), (t = nl(e, t, n));
            else {
              if (
                ((i = (a = t.stateNode).hydrate) &&
                  ((Mi = Hr(t.stateNode.containerInfo.firstChild)),
                  (Fi = t),
                  (i = ji = !0)),
                i)
              ) {
                if (null != (e = a.mutableSourceEagerHydrationData))
                  for (a = 0; a < e.length; a += 2)
                    ((i = e[a])._workInProgressVersionPrimary = e[a + 1]),
                      Hi.push(i);
                for (n = xi(t, null, r, n), t.child = n; n; )
                  (n.flags = (-3 & n.flags) | 1024), (n = n.sibling);
              } else Do(e, t, r, n), Gi();
              t = t.child;
            }
            return t;
          case 5:
            return (
              Li(t),
              null === e && qi(t),
              (r = t.type),
              (a = t.pendingProps),
              (i = null !== e ? e.memoizedProps : null),
              (l = a.children),
              qr(r, a) ? (l = null) : null !== i && qr(r, i) && (t.flags |= 16),
              zo(e, t),
              Do(e, t, l, n),
              t.child
            );
          case 6:
            return null === e && qi(t), null;
          case 13:
            return Yo(e, t, n);
          case 4:
            return (
              Ri(t, t.stateNode.containerInfo),
              (r = t.pendingProps),
              null === e ? (t.child = Ei(t, null, r, n)) : Do(e, t, r, n),
              t.child
            );
          case 11:
            return (
              (r = t.type),
              (a = t.pendingProps),
              Fo(e, t, r, (a = t.elementType === r ? a : Za(r, a)), n)
            );
          case 7:
            return Do(e, t, t.pendingProps, n), t.child;
          case 8:
          case 12:
            return Do(e, t, t.pendingProps.children, n), t.child;
          case 10:
            e: {
              (r = t.type._context),
                (a = t.pendingProps),
                (l = t.memoizedProps),
                (i = a.value);
              var s = t.type._context;
              if ((sa(Ya, s._currentValue), (s._currentValue = i), null !== l))
                if (
                  ((s = l.value),
                  0 ===
                    (i = lr(s, i)
                      ? 0
                      : 0 |
                        ("function" == typeof r._calculateChangedBits
                          ? r._calculateChangedBits(s, i)
                          : 1073741823)))
                ) {
                  if (l.children === a.children && !da.current) {
                    t = nl(e, t, n);
                    break e;
                  }
                } else
                  for (null !== (s = t.child) && (s.return = t); null !== s; ) {
                    var u = s.dependencies;
                    if (null !== u) {
                      l = s.child;
                      for (var c = u.firstContext; null !== c; ) {
                        if (c.context === r && 0 != (c.observedBits & i)) {
                          1 === s.tag &&
                            (((c = li(-1, n & -n)).tag = 2), si(s, c)),
                            (s.lanes |= n),
                            null !== (c = s.alternate) && (c.lanes |= n),
                            ti(s.return, n),
                            (u.lanes |= n);
                          break;
                        }
                        c = c.next;
                      }
                    } else
                      l = 10 === s.tag && s.type === t.type ? null : s.child;
                    if (null !== l) l.return = s;
                    else
                      for (l = s; null !== l; ) {
                        if (l === t) {
                          l = null;
                          break;
                        }
                        if (null !== (s = l.sibling)) {
                          (s.return = l.return), (l = s);
                          break;
                        }
                        l = l.return;
                      }
                    s = l;
                  }
              Do(e, t, a.children, n), (t = t.child);
            }
            return t;
          case 9:
            return (
              (a = t.type),
              (r = (i = t.pendingProps).children),
              ni(t, n),
              (r = r((a = ri(a, i.unstable_observedBits)))),
              (t.flags |= 1),
              Do(e, t, r, n),
              t.child
            );
          case 14:
            return (
              (i = Za((a = t.type), t.pendingProps)),
              Mo(e, t, a, (i = Za(a.type, i)), r, n)
            );
          case 15:
            return jo(e, t, t.type, t.pendingProps, r, n);
          case 17:
            return (
              (r = t.type),
              (a = t.pendingProps),
              (a = t.elementType === r ? a : Za(r, a)),
              null !== e &&
                ((e.alternate = null), (t.alternate = null), (t.flags |= 2)),
              (t.tag = 1),
              ma(r) ? ((e = !0), ya(t)) : (e = !1),
              ni(t, n),
              gi(t, r, a),
              yi(t, r, a, n),
              $o(null, t, r, !0, e, n)
            );
          case 19:
            return tl(e, t, n);
          case 23:
          case 24:
            return Bo(e, t, n);
        }
        throw Error(o(156, t.tag));
      }),
        (tu.prototype.render = function (e) {
          Qs(e, this._internalRoot, null, null);
        }),
        (tu.prototype.unmount = function () {
          var e = this._internalRoot,
            t = e.containerInfo;
          Qs(null, e, null, function () {
            t[Qr] = null;
          });
        }),
        (tt = function (e) {
          13 === e.tag && (ds(e, 4, us()), eu(e, 4));
        }),
        (nt = function (e) {
          13 === e.tag && (ds(e, 67108864, us()), eu(e, 67108864));
        }),
        (rt = function (e) {
          if (13 === e.tag) {
            var t = us(),
              n = cs(e);
            ds(e, n, t), eu(e, n);
          }
        }),
        (at = function (e, t) {
          return t();
        }),
        (Ae = function (e, t, n) {
          switch (t) {
            case "input":
              if ((ne(e, n), (t = n.name), "radio" === n.type && null != t)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                  n = n.querySelectorAll(
                    "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
                  ),
                    t = 0;
                  t < n.length;
                  t++
                ) {
                  var r = n[t];
                  if (r !== e && r.form === e.form) {
                    var a = na(r);
                    if (!a) throw Error(o(90));
                    Q(r), ne(r, a);
                  }
                }
              }
              break;
            case "textarea":
              ue(e, n);
              break;
            case "select":
              null != (t = n.value) && oe(e, !!n.multiple, t, !1);
          }
        }),
        (Ne = bs),
        (Ie = function (e, t, n, r, a) {
          var i = Ol;
          Ol |= 4;
          try {
            return $a(98, e.bind(null, t, n, r, a));
          } finally {
            0 === (Ol = i) && (Gl(), Ha());
          }
        }),
        (De = function () {
          0 == (49 & Ol) &&
            ((function () {
              if (null !== ts) {
                var e = ts;
                (ts = null),
                  e.forEach(function (e) {
                    (e.expiredLanes |= 24 & e.pendingLanes), fs(e, za());
                  });
              }
              Ha();
            })(),
            Ls());
        }),
        (Fe = function (e, t) {
          var n = Ol;
          Ol |= 2;
          try {
            return e(t);
          } finally {
            0 === (Ol = n) && (Gl(), Ha());
          }
        });
      var iu = { Events: [ea, ta, na, Pe, Le, Ls, { current: !1 }] },
        ou = {
          findFiberByHostInstance: Jr,
          bundleType: 0,
          version: "17.0.2",
          rendererPackageName: "react-dom",
        },
        lu = {
          bundleType: ou.bundleType,
          version: ou.version,
          rendererPackageName: ou.rendererPackageName,
          rendererConfig: ou.rendererConfig,
          overrideHookState: null,
          overrideHookStateDeletePath: null,
          overrideHookStateRenamePath: null,
          overrideProps: null,
          overridePropsDeletePath: null,
          overridePropsRenamePath: null,
          setSuspenseHandler: null,
          scheduleUpdate: null,
          currentDispatcherRef: k.ReactCurrentDispatcher,
          findHostInstanceByFiber: function (e) {
            return null === (e = Je(e)) ? null : e.stateNode;
          },
          findFiberByHostInstance:
            ou.findFiberByHostInstance ||
            function () {
              return null;
            },
          findHostInstancesForRefresh: null,
          scheduleRefresh: null,
          scheduleRoot: null,
          setRefreshHandler: null,
          getCurrentFiber: null,
        };
      if ("undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
        var su = __REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (!su.isDisabled && su.supportsFiber)
          try {
            (wa = su.inject(lu)), (ka = su);
          } catch (ge) {}
      }
      (t.createPortal = au),
        (t.hydrate = function (e, t, n) {
          if (!nu(t)) throw Error(o(200));
          return ru(null, e, t, !0, n);
        });
    },
    3935: function (e, t, n) {
      "use strict";
      !(function e() {
        if (
          "undefined" != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
          "function" == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
        )
          try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e);
          } catch (t) {
            console.error(t);
          }
      })(),
        (e.exports = n(4448));
    },
    9590: function (e) {
      var t = "undefined" != typeof Element,
        n = "function" == typeof Map,
        r = "function" == typeof Set,
        a = "function" == typeof ArrayBuffer && !!ArrayBuffer.isView;
      function i(e, o) {
        if (e === o) return !0;
        if (e && o && "object" == typeof e && "object" == typeof o) {
          if (e.constructor !== o.constructor) return !1;
          var l, s, u, c;
          if (Array.isArray(e)) {
            if ((l = e.length) != o.length) return !1;
            for (s = l; 0 != s--; ) if (!i(e[s], o[s])) return !1;
            return !0;
          }
          if (n && e instanceof Map && o instanceof Map) {
            if (e.size !== o.size) return !1;
            for (c = e.entries(); !(s = c.next()).done; )
              if (!o.has(s.value[0])) return !1;
            for (c = e.entries(); !(s = c.next()).done; )
              if (!i(s.value[1], o.get(s.value[0]))) return !1;
            return !0;
          }
          if (r && e instanceof Set && o instanceof Set) {
            if (e.size !== o.size) return !1;
            for (c = e.entries(); !(s = c.next()).done; )
              if (!o.has(s.value[0])) return !1;
            return !0;
          }
          if (a && ArrayBuffer.isView(e) && ArrayBuffer.isView(o)) {
            if ((l = e.length) != o.length) return !1;
            for (s = l; 0 != s--; ) if (e[s] !== o[s]) return !1;
            return !0;
          }
          if (e.constructor === RegExp)
            return e.source === o.source && e.flags === o.flags;
          if (e.valueOf !== Object.prototype.valueOf)
            return e.valueOf() === o.valueOf();
          if (e.toString !== Object.prototype.toString)
            return e.toString() === o.toString();
          if ((l = (u = Object.keys(e)).length) !== Object.keys(o).length)
            return !1;
          for (s = l; 0 != s--; )
            if (!Object.prototype.hasOwnProperty.call(o, u[s])) return !1;
          if (t && e instanceof Element) return !1;
          for (s = l; 0 != s--; )
            if (
              (("_owner" !== u[s] && "__v" !== u[s] && "__o" !== u[s]) ||
                !e.$$typeof) &&
              !i(e[u[s]], o[u[s]])
            )
              return !1;
          return !0;
        }
        return e != e && o != o;
      }
      e.exports = function (e, t) {
        try {
          return i(e, t);
        } catch (n) {
          if ((n.message || "").match(/stack|recursion/i))
            return (
              console.warn("react-fast-compare cannot handle circular refs"), !1
            );
          throw n;
        }
      };
    },
    9921: function (e, t) {
      "use strict";
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        a = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        o = n ? Symbol.for("react.strict_mode") : 60108,
        l = n ? Symbol.for("react.profiler") : 60114,
        s = n ? Symbol.for("react.provider") : 60109,
        u = n ? Symbol.for("react.context") : 60110,
        c = n ? Symbol.for("react.async_mode") : 60111,
        d = n ? Symbol.for("react.concurrent_mode") : 60111,
        p = n ? Symbol.for("react.forward_ref") : 60112,
        f = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        h = n ? Symbol.for("react.memo") : 60115,
        g = n ? Symbol.for("react.lazy") : 60116,
        b = n ? Symbol.for("react.block") : 60121,
        y = n ? Symbol.for("react.fundamental") : 60117,
        v = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;
      function k(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch ((e = e.type)) {
                case c:
                case d:
                case i:
                case l:
                case o:
                case f:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case u:
                    case p:
                    case g:
                    case h:
                    case s:
                      return e;
                    default:
                      return t;
                  }
              }
            case a:
              return t;
          }
        }
      }
      function S(e) {
        return k(e) === d;
      }
      (t.AsyncMode = c),
        (t.ConcurrentMode = d),
        (t.ContextConsumer = u),
        (t.ContextProvider = s),
        (t.Element = r),
        (t.ForwardRef = p),
        (t.Fragment = i),
        (t.Lazy = g),
        (t.Memo = h),
        (t.Portal = a),
        (t.Profiler = l),
        (t.StrictMode = o),
        (t.Suspense = f),
        (t.isAsyncMode = function (e) {
          return S(e) || k(e) === c;
        }),
        (t.isConcurrentMode = S),
        (t.isContextConsumer = function (e) {
          return k(e) === u;
        }),
        (t.isContextProvider = function (e) {
          return k(e) === s;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === r;
        }),
        (t.isForwardRef = function (e) {
          return k(e) === p;
        }),
        (t.isFragment = function (e) {
          return k(e) === i;
        }),
        (t.isLazy = function (e) {
          return k(e) === g;
        }),
        (t.isMemo = function (e) {
          return k(e) === h;
        }),
        (t.isPortal = function (e) {
          return k(e) === a;
        }),
        (t.isProfiler = function (e) {
          return k(e) === l;
        }),
        (t.isStrictMode = function (e) {
          return k(e) === o;
        }),
        (t.isSuspense = function (e) {
          return k(e) === f;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === i ||
            e === d ||
            e === l ||
            e === o ||
            e === f ||
            e === m ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === g ||
                e.$$typeof === h ||
                e.$$typeof === s ||
                e.$$typeof === u ||
                e.$$typeof === p ||
                e.$$typeof === y ||
                e.$$typeof === v ||
                e.$$typeof === w ||
                e.$$typeof === b))
          );
        }),
        (t.typeOf = k);
    },
    9864: function (e, t, n) {
      "use strict";
      e.exports = n(9921);
    },
    8790: function (e, t, n) {
      "use strict";
      n.d(t, {
        f: function () {
          return o;
        },
        H: function () {
          return l;
        },
      });
      var r = n(5977),
        a = n(2122),
        i = n(7294);
      function o(e, t, n) {
        return (
          void 0 === n && (n = []),
          e.some(function (e) {
            var a = e.path
              ? (0, r.LX)(t, e)
              : n.length
              ? n[n.length - 1].match
              : r.F0.computeRootMatch(t);
            return (
              a &&
                (n.push({ route: e, match: a }), e.routes && o(e.routes, t, n)),
              a
            );
          }),
          n
        );
      }
      function l(e, t, n) {
        return (
          void 0 === t && (t = {}),
          void 0 === n && (n = {}),
          e
            ? i.createElement(
                r.rs,
                n,
                e.map(function (e, n) {
                  return i.createElement(r.AW, {
                    key: e.key || n,
                    path: e.path,
                    exact: e.exact,
                    strict: e.strict,
                    render: function (n) {
                      return e.render
                        ? e.render((0, a.Z)({}, n, {}, t, { route: e }))
                        : i.createElement(
                            e.component,
                            (0, a.Z)({}, n, t, { route: e })
                          );
                    },
                  });
                })
              )
            : null
        );
      }
    },
    3727: function (e, t, n) {
      "use strict";
      n.d(t, {
        VA: function () {
          return r.VA;
        },
        NL: function () {
          return r.NL;
        },
        l_: function () {
          return r.l_;
        },
        AW: function () {
          return r.AW;
        },
        F0: function () {
          return r.F0;
        },
        gx: function () {
          return r.gx;
        },
        rs: function () {
          return r.rs;
        },
        Gn: function () {
          return r.Gn;
        },
        LX: function () {
          return r.LX;
        },
        k6: function () {
          return r.k6;
        },
        TH: function () {
          return r.TH;
        },
        UO: function () {
          return r.UO;
        },
        $B: function () {
          return r.$B;
        },
        EN: function () {
          return r.EN;
        },
        VK: function () {
          return c;
        },
        UT: function () {
          return d;
        },
        rU: function () {
          return b;
        },
        OL: function () {
          return w;
        },
      });
      var r = n(5977),
        a = n(3552),
        i = n(7294),
        o = n(71),
        l = (n(5697), n(2122)),
        s = n(9756),
        u = n(2177),
        c = (function (e) {
          function t() {
            for (
              var t, n = arguments.length, r = new Array(n), a = 0;
              a < n;
              a++
            )
              r[a] = arguments[a];
            return (
              ((t = e.call.apply(e, [this].concat(r)) || this).history = (0,
              o.lX)(t.props)),
              t
            );
          }
          return (
            (0, a.Z)(t, e),
            (t.prototype.render = function () {
              return i.createElement(r.F0, {
                history: this.history,
                children: this.props.children,
              });
            }),
            t
          );
        })(i.Component);
      var d = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).history = (0,
            o.q_)(t.props)),
            t
          );
        }
        return (
          (0, a.Z)(t, e),
          (t.prototype.render = function () {
            return i.createElement(r.F0, {
              history: this.history,
              children: this.props.children,
            });
          }),
          t
        );
      })(i.Component);
      var p = function (e, t) {
          return "function" == typeof e ? e(t) : e;
        },
        f = function (e, t) {
          return "string" == typeof e ? (0, o.ob)(e, null, null, t) : e;
        },
        m = function (e) {
          return e;
        },
        h = i.forwardRef;
      void 0 === h && (h = m);
      var g = h(function (e, t) {
        var n = e.innerRef,
          r = e.navigate,
          a = e.onClick,
          o = (0, s.Z)(e, ["innerRef", "navigate", "onClick"]),
          u = o.target,
          c = (0, l.Z)({}, o, {
            onClick: function (e) {
              try {
                a && a(e);
              } catch (t) {
                throw (e.preventDefault(), t);
              }
              e.defaultPrevented ||
                0 !== e.button ||
                (u && "_self" !== u) ||
                (function (e) {
                  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
                })(e) ||
                (e.preventDefault(), r());
            },
          });
        return (c.ref = (m !== h && t) || n), i.createElement("a", c);
      });
      var b = h(function (e, t) {
          var n = e.component,
            a = void 0 === n ? g : n,
            o = e.replace,
            c = e.to,
            d = e.innerRef,
            b = (0, s.Z)(e, ["component", "replace", "to", "innerRef"]);
          return i.createElement(r.s6.Consumer, null, function (e) {
            e || (0, u.Z)(!1);
            var n = e.history,
              r = f(p(c, e.location), e.location),
              s = r ? n.createHref(r) : "",
              g = (0, l.Z)({}, b, {
                href: s,
                navigate: function () {
                  var t = p(c, e.location);
                  (o ? n.replace : n.push)(t);
                },
              });
            return (
              m !== h ? (g.ref = t || d) : (g.innerRef = d),
              i.createElement(a, g)
            );
          });
        }),
        y = function (e) {
          return e;
        },
        v = i.forwardRef;
      void 0 === v && (v = y);
      var w = v(function (e, t) {
        var n = e["aria-current"],
          a = void 0 === n ? "page" : n,
          o = e.activeClassName,
          c = void 0 === o ? "active" : o,
          d = e.activeStyle,
          m = e.className,
          h = e.exact,
          g = e.isActive,
          w = e.location,
          k = e.sensitive,
          S = e.strict,
          E = e.style,
          x = e.to,
          T = e.innerRef,
          C = (0, s.Z)(e, [
            "aria-current",
            "activeClassName",
            "activeStyle",
            "className",
            "exact",
            "isActive",
            "location",
            "sensitive",
            "strict",
            "style",
            "to",
            "innerRef",
          ]);
        return i.createElement(r.s6.Consumer, null, function (e) {
          e || (0, u.Z)(!1);
          var n = w || e.location,
            o = f(p(x, n), n),
            s = o.pathname,
            A = s && s.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1"),
            _ = A
              ? (0, r.LX)(n.pathname, {
                  path: A,
                  exact: h,
                  sensitive: k,
                  strict: S,
                })
              : null,
            O = !!(g ? g(_, n) : _),
            R = O
              ? (function () {
                  for (
                    var e = arguments.length, t = new Array(e), n = 0;
                    n < e;
                    n++
                  )
                    t[n] = arguments[n];
                  return t
                    .filter(function (e) {
                      return e;
                    })
                    .join(" ");
                })(m, c)
              : m,
            P = O ? (0, l.Z)({}, E, {}, d) : E,
            L = (0, l.Z)(
              {
                "aria-current": (O && a) || null,
                className: R,
                style: P,
                to: o,
              },
              C
            );
          return (
            y !== v ? (L.ref = t || T) : (L.innerRef = T), i.createElement(b, L)
          );
        });
      });
    },
    5977: function (e, t, n) {
      "use strict";
      n.d(t, {
        VA: function () {
          return S;
        },
        NL: function () {
          return x;
        },
        l_: function () {
          return _;
        },
        AW: function () {
          return L;
        },
        F0: function () {
          return k;
        },
        gx: function () {
          return j;
        },
        rs: function () {
          return B;
        },
        s6: function () {
          return w;
        },
        Gn: function () {
          return A;
        },
        LX: function () {
          return P;
        },
        k6: function () {
          return U;
        },
        TH: function () {
          return $;
        },
        UO: function () {
          return G;
        },
        $B: function () {
          return H;
        },
        EN: function () {
          return z;
        },
      });
      var r = n(3552),
        a = n(7294),
        i = n(5697),
        o = n.n(i),
        l = n(71),
        s = 1073741823,
        u =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== n.g
            ? n.g
            : {};
      function c(e) {
        var t = [];
        return {
          on: function (e) {
            t.push(e);
          },
          off: function (e) {
            t = t.filter(function (t) {
              return t !== e;
            });
          },
          get: function () {
            return e;
          },
          set: function (n, r) {
            (e = n),
              t.forEach(function (t) {
                return t(e, r);
              });
          },
        };
      }
      var d =
          a.createContext ||
          function (e, t) {
            var n,
              i,
              l =
                "__create-react-context-" +
                (function () {
                  var e = "__global_unique_id__";
                  return (u[e] = (u[e] || 0) + 1);
                })() +
                "__",
              d = (function (e) {
                function n() {
                  var t;
                  return (
                    ((t = e.apply(this, arguments) || this).emitter = c(
                      t.props.value
                    )),
                    t
                  );
                }
                (0, r.Z)(n, e);
                var a = n.prototype;
                return (
                  (a.getChildContext = function () {
                    var e;
                    return ((e = {})[l] = this.emitter), e;
                  }),
                  (a.componentWillReceiveProps = function (e) {
                    if (this.props.value !== e.value) {
                      var n,
                        r = this.props.value,
                        a = e.value;
                      (
                        (i = r) === (o = a)
                          ? 0 !== i || 1 / i == 1 / o
                          : i != i && o != o
                      )
                        ? (n = 0)
                        : ((n = "function" == typeof t ? t(r, a) : s),
                          0 !== (n |= 0) && this.emitter.set(e.value, n));
                    }
                    var i, o;
                  }),
                  (a.render = function () {
                    return this.props.children;
                  }),
                  n
                );
              })(a.Component);
            d.childContextTypes = (((n = {})[l] = o().object.isRequired), n);
            var p = (function (t) {
              function n() {
                var e;
                return (
                  ((e = t.apply(this, arguments) || this).state = {
                    value: e.getValue(),
                  }),
                  (e.onUpdate = function (t, n) {
                    0 != ((0 | e.observedBits) & n) &&
                      e.setState({ value: e.getValue() });
                  }),
                  e
                );
              }
              (0, r.Z)(n, t);
              var a = n.prototype;
              return (
                (a.componentWillReceiveProps = function (e) {
                  var t = e.observedBits;
                  this.observedBits = null == t ? s : t;
                }),
                (a.componentDidMount = function () {
                  this.context[l] && this.context[l].on(this.onUpdate);
                  var e = this.props.observedBits;
                  this.observedBits = null == e ? s : e;
                }),
                (a.componentWillUnmount = function () {
                  this.context[l] && this.context[l].off(this.onUpdate);
                }),
                (a.getValue = function () {
                  return this.context[l] ? this.context[l].get() : e;
                }),
                (a.render = function () {
                  return ((e = this.props.children),
                  Array.isArray(e) ? e[0] : e)(this.state.value);
                  var e;
                }),
                n
              );
            })(a.Component);
            return (
              (p.contextTypes = (((i = {})[l] = o().object), i)),
              { Provider: d, Consumer: p }
            );
          },
        p = n(2177),
        f = n(2122),
        m = n(9658),
        h = n.n(m),
        g = (n(9864), n(9756)),
        b = n(8679),
        y = n.n(b),
        v = (function (e) {
          var t = d();
          return (t.displayName = e), t;
        })("Router-History"),
        w = (function (e) {
          var t = d();
          return (t.displayName = e), t;
        })("Router"),
        k = (function (e) {
          function t(t) {
            var n;
            return (
              ((n = e.call(this, t) || this).state = {
                location: t.history.location,
              }),
              (n._isMounted = !1),
              (n._pendingLocation = null),
              t.staticContext ||
                (n.unlisten = t.history.listen(function (e) {
                  n._isMounted
                    ? n.setState({ location: e })
                    : (n._pendingLocation = e);
                })),
              n
            );
          }
          (0, r.Z)(t, e),
            (t.computeRootMatch = function (e) {
              return { path: "/", url: "/", params: {}, isExact: "/" === e };
            });
          var n = t.prototype;
          return (
            (n.componentDidMount = function () {
              (this._isMounted = !0),
                this._pendingLocation &&
                  this.setState({ location: this._pendingLocation });
            }),
            (n.componentWillUnmount = function () {
              this.unlisten && this.unlisten();
            }),
            (n.render = function () {
              return a.createElement(
                w.Provider,
                {
                  value: {
                    history: this.props.history,
                    location: this.state.location,
                    match: t.computeRootMatch(this.state.location.pathname),
                    staticContext: this.props.staticContext,
                  },
                },
                a.createElement(v.Provider, {
                  children: this.props.children || null,
                  value: this.props.history,
                })
              );
            }),
            t
          );
        })(a.Component);
      var S = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).history = (0,
            l.PP)(t.props)),
            t
          );
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            return a.createElement(k, {
              history: this.history,
              children: this.props.children,
            });
          }),
          t
        );
      })(a.Component);
      var E = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        (0, r.Z)(t, e);
        var n = t.prototype;
        return (
          (n.componentDidMount = function () {
            this.props.onMount && this.props.onMount.call(this, this);
          }),
          (n.componentDidUpdate = function (e) {
            this.props.onUpdate && this.props.onUpdate.call(this, this, e);
          }),
          (n.componentWillUnmount = function () {
            this.props.onUnmount && this.props.onUnmount.call(this, this);
          }),
          (n.render = function () {
            return null;
          }),
          t
        );
      })(a.Component);
      function x(e) {
        var t = e.message,
          n = e.when,
          r = void 0 === n || n;
        return a.createElement(w.Consumer, null, function (e) {
          if ((e || (0, p.Z)(!1), !r || e.staticContext)) return null;
          var n = e.history.block;
          return a.createElement(E, {
            onMount: function (e) {
              e.release = n(t);
            },
            onUpdate: function (e, r) {
              r.message !== t && (e.release(), (e.release = n(t)));
            },
            onUnmount: function (e) {
              e.release();
            },
            message: t,
          });
        });
      }
      var T = {},
        C = 0;
      function A(e, t) {
        return (
          void 0 === e && (e = "/"),
          void 0 === t && (t = {}),
          "/" === e
            ? e
            : (function (e) {
                if (T[e]) return T[e];
                var t = h().compile(e);
                return C < 1e4 && ((T[e] = t), C++), t;
              })(e)(t, { pretty: !0 })
        );
      }
      function _(e) {
        var t = e.computedMatch,
          n = e.to,
          r = e.push,
          i = void 0 !== r && r;
        return a.createElement(w.Consumer, null, function (e) {
          e || (0, p.Z)(!1);
          var r = e.history,
            o = e.staticContext,
            s = i ? r.push : r.replace,
            u = (0, l.ob)(
              t
                ? "string" == typeof n
                  ? A(n, t.params)
                  : (0, f.Z)({}, n, { pathname: A(n.pathname, t.params) })
                : n
            );
          return o
            ? (s(u), null)
            : a.createElement(E, {
                onMount: function () {
                  s(u);
                },
                onUpdate: function (e, t) {
                  var n = (0, l.ob)(t.to);
                  (0, l.Hp)(n, (0, f.Z)({}, u, { key: n.key })) || s(u);
                },
                to: n,
              });
        });
      }
      var O = {},
        R = 0;
      function P(e, t) {
        void 0 === t && (t = {}),
          ("string" == typeof t || Array.isArray(t)) && (t = { path: t });
        var n = t,
          r = n.path,
          a = n.exact,
          i = void 0 !== a && a,
          o = n.strict,
          l = void 0 !== o && o,
          s = n.sensitive,
          u = void 0 !== s && s;
        return [].concat(r).reduce(function (t, n) {
          if (!n && "" !== n) return null;
          if (t) return t;
          var r = (function (e, t) {
              var n = "" + t.end + t.strict + t.sensitive,
                r = O[n] || (O[n] = {});
              if (r[e]) return r[e];
              var a = [],
                i = { regexp: h()(e, a, t), keys: a };
              return R < 1e4 && ((r[e] = i), R++), i;
            })(n, { end: i, strict: l, sensitive: u }),
            a = r.regexp,
            o = r.keys,
            s = a.exec(e);
          if (!s) return null;
          var c = s[0],
            d = s.slice(1),
            p = e === c;
          return i && !p
            ? null
            : {
                path: n,
                url: "/" === n && "" === c ? "/" : c,
                isExact: p,
                params: o.reduce(function (e, t, n) {
                  return (e[t.name] = d[n]), e;
                }, {}),
              };
        }, null);
      }
      var L = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(w.Consumer, null, function (t) {
              t || (0, p.Z)(!1);
              var n = e.props.location || t.location,
                r = e.props.computedMatch
                  ? e.props.computedMatch
                  : e.props.path
                  ? P(n.pathname, e.props)
                  : t.match,
                i = (0, f.Z)({}, t, { location: n, match: r }),
                o = e.props,
                l = o.children,
                s = o.component,
                u = o.render;
              return (
                Array.isArray(l) && 0 === l.length && (l = null),
                a.createElement(
                  w.Provider,
                  { value: i },
                  i.match
                    ? l
                      ? "function" == typeof l
                        ? l(i)
                        : l
                      : s
                      ? a.createElement(s, i)
                      : u
                      ? u(i)
                      : null
                    : "function" == typeof l
                    ? l(i)
                    : null
                )
              );
            });
          }),
          t
        );
      })(a.Component);
      function N(e) {
        return "/" === e.charAt(0) ? e : "/" + e;
      }
      function I(e, t) {
        if (!e) return t;
        var n = N(e);
        return 0 !== t.pathname.indexOf(n)
          ? t
          : (0, f.Z)({}, t, { pathname: t.pathname.substr(n.length) });
      }
      function D(e) {
        return "string" == typeof e ? e : (0, l.Ep)(e);
      }
      function F(e) {
        return function () {
          (0, p.Z)(!1);
        };
      }
      function M() {}
      var j = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
            r[a] = arguments[a];
          return (
            ((t = e.call.apply(e, [this].concat(r)) || this).handlePush =
              function (e) {
                return t.navigateTo(e, "PUSH");
              }),
            (t.handleReplace = function (e) {
              return t.navigateTo(e, "REPLACE");
            }),
            (t.handleListen = function () {
              return M;
            }),
            (t.handleBlock = function () {
              return M;
            }),
            t
          );
        }
        (0, r.Z)(t, e);
        var n = t.prototype;
        return (
          (n.navigateTo = function (e, t) {
            var n = this.props,
              r = n.basename,
              a = void 0 === r ? "" : r,
              i = n.context,
              o = void 0 === i ? {} : i;
            (o.action = t),
              (o.location = (function (e, t) {
                return e ? (0, f.Z)({}, t, { pathname: N(e) + t.pathname }) : t;
              })(a, (0, l.ob)(e))),
              (o.url = D(o.location));
          }),
          (n.render = function () {
            var e = this.props,
              t = e.basename,
              n = void 0 === t ? "" : t,
              r = e.context,
              i = void 0 === r ? {} : r,
              o = e.location,
              s = void 0 === o ? "/" : o,
              u = (0, g.Z)(e, ["basename", "context", "location"]),
              c = {
                createHref: function (e) {
                  return N(n + D(e));
                },
                action: "POP",
                location: I(n, (0, l.ob)(s)),
                push: this.handlePush,
                replace: this.handleReplace,
                go: F(),
                goBack: F(),
                goForward: F(),
                listen: this.handleListen,
                block: this.handleBlock,
              };
            return a.createElement(
              k,
              (0, f.Z)({}, u, { history: c, staticContext: i })
            );
          }),
          t
        );
      })(a.Component);
      var B = (function (e) {
        function t() {
          return e.apply(this, arguments) || this;
        }
        return (
          (0, r.Z)(t, e),
          (t.prototype.render = function () {
            var e = this;
            return a.createElement(w.Consumer, null, function (t) {
              t || (0, p.Z)(!1);
              var n,
                r,
                i = e.props.location || t.location;
              return (
                a.Children.forEach(e.props.children, function (e) {
                  if (null == r && a.isValidElement(e)) {
                    n = e;
                    var o = e.props.path || e.props.from;
                    r = o
                      ? P(i.pathname, (0, f.Z)({}, e.props, { path: o }))
                      : t.match;
                  }
                }),
                r ? a.cloneElement(n, { location: i, computedMatch: r }) : null
              );
            });
          }),
          t
        );
      })(a.Component);
      function z(e) {
        var t = "withRouter(" + (e.displayName || e.name) + ")",
          n = function (t) {
            var n = t.wrappedComponentRef,
              r = (0, g.Z)(t, ["wrappedComponentRef"]);
            return a.createElement(w.Consumer, null, function (t) {
              return (
                t || (0, p.Z)(!1),
                a.createElement(e, (0, f.Z)({}, r, t, { ref: n }))
              );
            });
          };
        return (n.displayName = t), (n.WrappedComponent = e), y()(n, e);
      }
      var q = a.useContext;
      function U() {
        return q(v);
      }
      function $() {
        return q(w).location;
      }
      function G() {
        var e = q(w).match;
        return e ? e.params : {};
      }
      function H(e) {
        var t = $(),
          n = q(w).match;
        return e ? P(t.pathname, e) : n;
      }
    },
    6585: function (e) {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    9658: function (e, t, n) {
      var r = n(6585);
      (e.exports = f),
        (e.exports.parse = i),
        (e.exports.compile = function (e, t) {
          return l(i(e, t), t);
        }),
        (e.exports.tokensToFunction = l),
        (e.exports.tokensToRegExp = p);
      var a = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function i(e, t) {
        for (
          var n, r = [], i = 0, o = 0, l = "", c = (t && t.delimiter) || "/";
          null != (n = a.exec(e));

        ) {
          var d = n[0],
            p = n[1],
            f = n.index;
          if (((l += e.slice(o, f)), (o = f + d.length), p)) l += p[1];
          else {
            var m = e[o],
              h = n[2],
              g = n[3],
              b = n[4],
              y = n[5],
              v = n[6],
              w = n[7];
            l && (r.push(l), (l = ""));
            var k = null != h && null != m && m !== h,
              S = "+" === v || "*" === v,
              E = "?" === v || "*" === v,
              x = n[2] || c,
              T = b || y;
            r.push({
              name: g || i++,
              prefix: h || "",
              delimiter: x,
              optional: E,
              repeat: S,
              partial: k,
              asterisk: !!w,
              pattern: T ? u(T) : w ? ".*" : "[^" + s(x) + "]+?",
            });
          }
        }
        return o < e.length && (l += e.substr(o)), l && r.push(l), r;
      }
      function o(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function l(e, t) {
        for (var n = new Array(e.length), a = 0; a < e.length; a++)
          "object" == typeof e[a] &&
            (n[a] = new RegExp("^(?:" + e[a].pattern + ")$", d(t)));
        return function (t, a) {
          for (
            var i = "",
              l = t || {},
              s = (a || {}).pretty ? o : encodeURIComponent,
              u = 0;
            u < e.length;
            u++
          ) {
            var c = e[u];
            if ("string" != typeof c) {
              var d,
                p = l[c.name];
              if (null == p) {
                if (c.optional) {
                  c.partial && (i += c.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + c.name + '" to be defined');
              }
              if (r(p)) {
                if (!c.repeat)
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(p) +
                      "`"
                  );
                if (0 === p.length) {
                  if (c.optional) continue;
                  throw new TypeError(
                    'Expected "' + c.name + '" to not be empty'
                  );
                }
                for (var f = 0; f < p.length; f++) {
                  if (((d = s(p[f])), !n[u].test(d)))
                    throw new TypeError(
                      'Expected all "' +
                        c.name +
                        '" to match "' +
                        c.pattern +
                        '", but received `' +
                        JSON.stringify(d) +
                        "`"
                    );
                  i += (0 === f ? c.prefix : c.delimiter) + d;
                }
              } else {
                if (
                  ((d = c.asterisk
                    ? encodeURI(p).replace(/[?#]/g, function (e) {
                        return "%" + e.charCodeAt(0).toString(16).toUpperCase();
                      })
                    : s(p)),
                  !n[u].test(d))
                )
                  throw new TypeError(
                    'Expected "' +
                      c.name +
                      '" to match "' +
                      c.pattern +
                      '", but received "' +
                      d +
                      '"'
                  );
                i += c.prefix + d;
              }
            } else i += c;
          }
          return i;
        };
      }
      function s(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function u(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function c(e, t) {
        return (e.keys = t), e;
      }
      function d(e) {
        return e && e.sensitive ? "" : "i";
      }
      function p(e, t, n) {
        r(t) || ((n = t || n), (t = []));
        for (
          var a = (n = n || {}).strict, i = !1 !== n.end, o = "", l = 0;
          l < e.length;
          l++
        ) {
          var u = e[l];
          if ("string" == typeof u) o += s(u);
          else {
            var p = s(u.prefix),
              f = "(?:" + u.pattern + ")";
            t.push(u),
              u.repeat && (f += "(?:" + p + f + ")*"),
              (o += f =
                u.optional
                  ? u.partial
                    ? p + "(" + f + ")?"
                    : "(?:" + p + "(" + f + "))?"
                  : p + "(" + f + ")");
          }
        }
        var m = s(n.delimiter || "/"),
          h = o.slice(-m.length) === m;
        return (
          a || (o = (h ? o.slice(0, -m.length) : o) + "(?:" + m + "(?=$))?"),
          (o += i ? "$" : a && h ? "" : "(?=" + m + "|$)"),
          c(new RegExp("^" + o, d(n)), t)
        );
      }
      function f(e, t, n) {
        return (
          r(t) || ((n = t || n), (t = [])),
          (n = n || {}),
          e instanceof RegExp
            ? (function (e, t) {
                var n = e.source.match(/\((?!\?)/g);
                if (n)
                  for (var r = 0; r < n.length; r++)
                    t.push({
                      name: r,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return c(e, t);
              })(e, t)
            : r(e)
            ? (function (e, t, n) {
                for (var r = [], a = 0; a < e.length; a++)
                  r.push(f(e[a], t, n).source);
                return c(new RegExp("(?:" + r.join("|") + ")", d(n)), t);
              })(e, t, n)
            : (function (e, t, n) {
                return p(i(e, n), t, n);
              })(e, t, n)
        );
      }
    },
    3524: function (e, t, n) {
      "use strict";
      var r,
        a = n(7294),
        i = (r = a) && "object" == typeof r && "default" in r ? r.default : r;
      function o(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var l = !(
        "undefined" == typeof window ||
        !window.document ||
        !window.document.createElement
      );
      e.exports = function (e, t, n) {
        if ("function" != typeof e)
          throw new Error("Expected reducePropsToState to be a function.");
        if ("function" != typeof t)
          throw new Error(
            "Expected handleStateChangeOnClient to be a function."
          );
        if (void 0 !== n && "function" != typeof n)
          throw new Error(
            "Expected mapStateOnServer to either be undefined or a function."
          );
        return function (r) {
          if ("function" != typeof r)
            throw new Error(
              "Expected WrappedComponent to be a React component."
            );
          var s,
            u = [];
          function c() {
            (s = e(
              u.map(function (e) {
                return e.props;
              })
            )),
              d.canUseDOM ? t(s) : n && (s = n(s));
          }
          var d = (function (e) {
            var t, n;
            function a() {
              return e.apply(this, arguments) || this;
            }
            (n = e),
              ((t = a).prototype = Object.create(n.prototype)),
              (t.prototype.constructor = t),
              (t.__proto__ = n),
              (a.peek = function () {
                return s;
              }),
              (a.rewind = function () {
                if (a.canUseDOM)
                  throw new Error(
                    "You may only call rewind() on the server. Call peek() to read the current state."
                  );
                var e = s;
                return (s = void 0), (u = []), e;
              });
            var o = a.prototype;
            return (
              (o.UNSAFE_componentWillMount = function () {
                u.push(this), c();
              }),
              (o.componentDidUpdate = function () {
                c();
              }),
              (o.componentWillUnmount = function () {
                var e = u.indexOf(this);
                u.splice(e, 1), c();
              }),
              (o.render = function () {
                return i.createElement(r, this.props);
              }),
              a
            );
          })(a.PureComponent);
          return (
            o(
              d,
              "displayName",
              "SideEffect(" +
                (function (e) {
                  return e.displayName || e.name || "Component";
                })(r) +
                ")"
            ),
            o(d, "canUseDOM", l),
            d
          );
        };
      };
    },
    2408: function (e, t, n) {
      "use strict";
      var r = n(7418),
        a = 60103,
        i = 60106;
      (t.Fragment = 60107), (t.StrictMode = 60108), (t.Profiler = 60114);
      var o = 60109,
        l = 60110,
        s = 60112;
      t.Suspense = 60113;
      var u = 60115,
        c = 60116;
      if ("function" == typeof Symbol && Symbol.for) {
        var d = Symbol.for;
        (a = d("react.element")),
          (i = d("react.portal")),
          (t.Fragment = d("react.fragment")),
          (t.StrictMode = d("react.strict_mode")),
          (t.Profiler = d("react.profiler")),
          (o = d("react.provider")),
          (l = d("react.context")),
          (s = d("react.forward_ref")),
          (t.Suspense = d("react.suspense")),
          (u = d("react.memo")),
          (c = d("react.lazy"));
      }
      var p = "function" == typeof Symbol && Symbol.iterator;
      function f(e) {
        for (
          var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
            n = 1;
          n < arguments.length;
          n++
        )
          t += "&args[]=" + encodeURIComponent(arguments[n]);
        return (
          "Minified React error #" +
          e +
          "; visit " +
          t +
          " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
        );
      }
      var m = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        h = {};
      function g(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      function b() {}
      function y(e, t, n) {
        (this.props = e),
          (this.context = t),
          (this.refs = h),
          (this.updater = n || m);
      }
      (g.prototype.isReactComponent = {}),
        (g.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(f(85));
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (g.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (b.prototype = g.prototype);
      var v = (y.prototype = new b());
      (v.constructor = y), r(v, g.prototype), (v.isPureReactComponent = !0);
      var w = { current: null },
        k = Object.prototype.hasOwnProperty,
        S = { key: !0, ref: !0, __self: !0, __source: !0 };
      function E(e, t, n) {
        var r,
          i = {},
          o = null,
          l = null;
        if (null != t)
          for (r in (void 0 !== t.ref && (l = t.ref),
          void 0 !== t.key && (o = "" + t.key),
          t))
            k.call(t, r) && !S.hasOwnProperty(r) && (i[r] = t[r]);
        var s = arguments.length - 2;
        if (1 === s) i.children = n;
        else if (1 < s) {
          for (var u = Array(s), c = 0; c < s; c++) u[c] = arguments[c + 2];
          i.children = u;
        }
        if (e && e.defaultProps)
          for (r in (s = e.defaultProps)) void 0 === i[r] && (i[r] = s[r]);
        return {
          $$typeof: a,
          type: e,
          key: o,
          ref: l,
          props: i,
          _owner: w.current,
        };
      }
      function x(e) {
        return "object" == typeof e && null !== e && e.$$typeof === a;
      }
      var T = /\/+/g;
      function C(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = { "=": "=0", ":": "=2" };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function A(e, t, n, r, o) {
        var l = typeof e;
        ("undefined" !== l && "boolean" !== l) || (e = null);
        var s = !1;
        if (null === e) s = !0;
        else
          switch (l) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case a:
                case i:
                  s = !0;
              }
          }
        if (s)
          return (
            (o = o((s = e))),
            (e = "" === r ? "." + C(s, 0) : r),
            Array.isArray(o)
              ? ((n = ""),
                null != e && (n = e.replace(T, "$&/") + "/"),
                A(o, t, n, "", function (e) {
                  return e;
                }))
              : null != o &&
                (x(o) &&
                  (o = (function (e, t) {
                    return {
                      $$typeof: a,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    o,
                    n +
                      (!o.key || (s && s.key === o.key)
                        ? ""
                        : ("" + o.key).replace(T, "$&/") + "/") +
                      e
                  )),
                t.push(o)),
            1
          );
        if (((s = 0), (r = "" === r ? "." : r + ":"), Array.isArray(e)))
          for (var u = 0; u < e.length; u++) {
            var c = r + C((l = e[u]), u);
            s += A(l, t, n, c, o);
          }
        else if (
          "function" ==
          typeof (c = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (p && e[p]) || e["@@iterator"])
              ? e
              : null;
          })(e))
        )
          for (e = c.call(e), u = 0; !(l = e.next()).done; )
            s += A((l = l.value), t, n, (c = r + C(l, u++)), o);
        else if ("object" === l)
          throw (
            ((t = "" + e),
            Error(
              f(
                31,
                "[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t
              )
            ))
          );
        return s;
      }
      function _(e, t, n) {
        if (null == e) return e;
        var r = [],
          a = 0;
        return (
          A(e, r, "", "", function (e) {
            return t.call(n, e, a++);
          }),
          r
        );
      }
      function O(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()),
            (e._status = 0),
            (e._result = t),
            t.then(
              function (t) {
                0 === e._status &&
                  ((t = t.default), (e._status = 1), (e._result = t));
              },
              function (t) {
                0 === e._status && ((e._status = 2), (e._result = t));
              }
            );
        }
        if (1 === e._status) return e._result;
        throw e._result;
      }
      var R = { current: null };
      function P() {
        var e = R.current;
        if (null === e) throw Error(f(321));
        return e;
      }
      var L = {
        ReactCurrentDispatcher: R,
        ReactCurrentBatchConfig: { transition: 0 },
        ReactCurrentOwner: w,
        IsSomeRendererActing: { current: !1 },
        assign: r,
      };
      (t.Children = {
        map: _,
        forEach: function (e, t, n) {
          _(
            e,
            function () {
              t.apply(this, arguments);
            },
            n
          );
        },
        count: function (e) {
          var t = 0;
          return (
            _(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            _(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!x(e)) throw Error(f(143));
          return e;
        },
      }),
        (t.Component = g),
        (t.PureComponent = y),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = L),
        (t.cloneElement = function (e, t, n) {
          if (null == e) throw Error(f(267, e));
          var i = r({}, e.props),
            o = e.key,
            l = e.ref,
            s = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((l = t.ref), (s = w.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var u = e.type.defaultProps;
            for (c in t)
              k.call(t, c) &&
                !S.hasOwnProperty(c) &&
                (i[c] = void 0 === t[c] && void 0 !== u ? u[c] : t[c]);
          }
          var c = arguments.length - 2;
          if (1 === c) i.children = n;
          else if (1 < c) {
            u = Array(c);
            for (var d = 0; d < c; d++) u[d] = arguments[d + 2];
            i.children = u;
          }
          return {
            $$typeof: a,
            type: e.type,
            key: o,
            ref: l,
            props: i,
            _owner: s,
          };
        }),
        (t.createContext = function (e, t) {
          return (
            void 0 === t && (t = null),
            ((e = {
              $$typeof: l,
              _calculateChangedBits: t,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
            }).Provider = { $$typeof: o, _context: e }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = E),
        (t.createFactory = function (e) {
          var t = E.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return { current: null };
        }),
        (t.forwardRef = function (e) {
          return { $$typeof: s, render: e };
        }),
        (t.isValidElement = x),
        (t.lazy = function (e) {
          return {
            $$typeof: c,
            _payload: { _status: -1, _result: e },
            _init: O,
          };
        }),
        (t.memo = function (e, t) {
          return { $$typeof: u, type: e, compare: void 0 === t ? null : t };
        }),
        (t.useCallback = function (e, t) {
          return P().useCallback(e, t);
        }),
        (t.useContext = function (e, t) {
          return P().useContext(e, t);
        }),
        (t.useDebugValue = function () {}),
        (t.useEffect = function (e, t) {
          return P().useEffect(e, t);
        }),
        (t.useImperativeHandle = function (e, t, n) {
          return P().useImperativeHandle(e, t, n);
        }),
        (t.useLayoutEffect = function (e, t) {
          return P().useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return P().useMemo(e, t);
        }),
        (t.useReducer = function (e, t, n) {
          return P().useReducer(e, t, n);
        }),
        (t.useRef = function (e) {
          return P().useRef(e);
        }),
        (t.useState = function (e) {
          return P().useState(e);
        }),
        (t.version = "17.0.2");
    },
    7294: function (e, t, n) {
      "use strict";
      e.exports = n(2408);
    },
    53: function (e, t) {
      "use strict";
      var n, r, a, i;
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var o = performance;
        t.unstable_now = function () {
          return o.now();
        };
      } else {
        var l = Date,
          s = l.now();
        t.unstable_now = function () {
          return l.now() - s;
        };
      }
      if ("undefined" == typeof window || "function" != typeof MessageChannel) {
        var u = null,
          c = null,
          d = function () {
            if (null !== u)
              try {
                var e = t.unstable_now();
                u(!0, e), (u = null);
              } catch (n) {
                throw (setTimeout(d, 0), n);
              }
          };
        (n = function (e) {
          null !== u ? setTimeout(n, 0, e) : ((u = e), setTimeout(d, 0));
        }),
          (r = function (e, t) {
            c = setTimeout(e, t);
          }),
          (a = function () {
            clearTimeout(c);
          }),
          (t.unstable_shouldYield = function () {
            return !1;
          }),
          (i = t.unstable_forceFrameRate = function () {});
      } else {
        var p = window.setTimeout,
          f = window.clearTimeout;
        if ("undefined" != typeof console) {
          var m = window.cancelAnimationFrame;
          "function" != typeof window.requestAnimationFrame &&
            console.error(
              "This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
            ),
            "function" != typeof m &&
              console.error(
                "This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"
              );
        }
        var h = !1,
          g = null,
          b = -1,
          y = 5,
          v = 0;
        (t.unstable_shouldYield = function () {
          return t.unstable_now() >= v;
        }),
          (i = function () {}),
          (t.unstable_forceFrameRate = function (e) {
            0 > e || 125 < e
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (y = 0 < e ? Math.floor(1e3 / e) : 5);
          });
        var w = new MessageChannel(),
          k = w.port2;
        (w.port1.onmessage = function () {
          if (null !== g) {
            var e = t.unstable_now();
            v = e + y;
            try {
              g(!0, e) ? k.postMessage(null) : ((h = !1), (g = null));
            } catch (n) {
              throw (k.postMessage(null), n);
            }
          } else h = !1;
        }),
          (n = function (e) {
            (g = e), h || ((h = !0), k.postMessage(null));
          }),
          (r = function (e, n) {
            b = p(function () {
              e(t.unstable_now());
            }, n);
          }),
          (a = function () {
            f(b), (b = -1);
          });
      }
      function S(e, t) {
        var n = e.length;
        e.push(t);
        e: for (;;) {
          var r = (n - 1) >>> 1,
            a = e[r];
          if (!(void 0 !== a && 0 < T(a, t))) break e;
          (e[r] = t), (e[n] = a), (n = r);
        }
      }
      function E(e) {
        return void 0 === (e = e[0]) ? null : e;
      }
      function x(e) {
        var t = e[0];
        if (void 0 !== t) {
          var n = e.pop();
          if (n !== t) {
            e[0] = n;
            e: for (var r = 0, a = e.length; r < a; ) {
              var i = 2 * (r + 1) - 1,
                o = e[i],
                l = i + 1,
                s = e[l];
              if (void 0 !== o && 0 > T(o, n))
                void 0 !== s && 0 > T(s, o)
                  ? ((e[r] = s), (e[l] = n), (r = l))
                  : ((e[r] = o), (e[i] = n), (r = i));
              else {
                if (!(void 0 !== s && 0 > T(s, n))) break e;
                (e[r] = s), (e[l] = n), (r = l);
              }
            }
          }
          return t;
        }
        return null;
      }
      function T(e, t) {
        var n = e.sortIndex - t.sortIndex;
        return 0 !== n ? n : e.id - t.id;
      }
      var C = [],
        A = [],
        _ = 1,
        O = null,
        R = 3,
        P = !1,
        L = !1,
        N = !1;
      function I(e) {
        for (var t = E(A); null !== t; ) {
          if (null === t.callback) x(A);
          else {
            if (!(t.startTime <= e)) break;
            x(A), (t.sortIndex = t.expirationTime), S(C, t);
          }
          t = E(A);
        }
      }
      function D(e) {
        if (((N = !1), I(e), !L))
          if (null !== E(C)) (L = !0), n(F);
          else {
            var t = E(A);
            null !== t && r(D, t.startTime - e);
          }
      }
      function F(e, n) {
        (L = !1), N && ((N = !1), a()), (P = !0);
        var i = R;
        try {
          for (
            I(n), O = E(C);
            null !== O &&
            (!(O.expirationTime > n) || (e && !t.unstable_shouldYield()));

          ) {
            var o = O.callback;
            if ("function" == typeof o) {
              (O.callback = null), (R = O.priorityLevel);
              var l = o(O.expirationTime <= n);
              (n = t.unstable_now()),
                "function" == typeof l ? (O.callback = l) : O === E(C) && x(C),
                I(n);
            } else x(C);
            O = E(C);
          }
          if (null !== O) var s = !0;
          else {
            var u = E(A);
            null !== u && r(D, u.startTime - n), (s = !1);
          }
          return s;
        } finally {
          (O = null), (R = i), (P = !1);
        }
      }
      var M = i;
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          L || P || ((L = !0), n(F));
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return R;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return E(C);
        }),
        (t.unstable_next = function (e) {
          switch (R) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = R;
          }
          var n = R;
          R = t;
          try {
            return e();
          } finally {
            R = n;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = M),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var n = R;
          R = e;
          try {
            return t();
          } finally {
            R = n;
          }
        }),
        (t.unstable_scheduleCallback = function (e, i, o) {
          var l = t.unstable_now();
          switch (
            ("object" == typeof o && null !== o
              ? (o = "number" == typeof (o = o.delay) && 0 < o ? l + o : l)
              : (o = l),
            e)
          ) {
            case 1:
              var s = -1;
              break;
            case 2:
              s = 250;
              break;
            case 5:
              s = 1073741823;
              break;
            case 4:
              s = 1e4;
              break;
            default:
              s = 5e3;
          }
          return (
            (e = {
              id: _++,
              callback: i,
              priorityLevel: e,
              startTime: o,
              expirationTime: (s = o + s),
              sortIndex: -1,
            }),
            o > l
              ? ((e.sortIndex = o),
                S(A, e),
                null === E(C) &&
                  e === E(A) &&
                  (N ? a() : (N = !0), r(D, o - l)))
              : ((e.sortIndex = s), S(C, e), L || P || ((L = !0), n(F))),
            e
          );
        }),
        (t.unstable_wrapCallback = function (e) {
          var t = R;
          return function () {
            var n = R;
            R = t;
            try {
              return e.apply(this, arguments);
            } finally {
              R = n;
            }
          };
        });
    },
    3840: function (e, t, n) {
      "use strict";
      e.exports = n(53);
    },
    2177: function (e, t) {
      "use strict";
      var n = "Invariant failed";
      t.Z = function (e, t) {
        if (!e) throw new Error(n);
      };
    },
  },
  function (e) {
    "use strict";
    e.O(0, [3312], function () {
      return (t = 850), e((e.s = t));
      var t;
    });
    e.O();
  },
]);
