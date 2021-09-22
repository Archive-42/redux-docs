<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>- <a href="../../api/api-reference.html" class="menu__link">API</a>
- <a href="../../faq.html" class="menu__link">FAQ</a>
- <a href="../../style-guide/style-guide.html" class="menu__link">Best Practices</a>
- <a href="../../../github.com/reduxjs/redux.html" class="menu__link">GitHub</a>
- <a href="../../introduction/getting-started.html#help-and-discussion" class="menu__link">Need help?</a>

Menu

- <a href="#!" class="menu__link menu__link--sublist">Introduction</a>
  - <a href="../../introduction/getting-started.html" class="menu__link">Getting Started with Redux</a>
  - <a href="../../introduction/installation.html" class="menu__link">Installation</a>
  - <a href="../../introduction/core-concepts.html" class="menu__link">Core Concepts</a>
  - <a href="../../introduction/learning-resources.html" class="menu__link">Learning Resources</a>
  - <a href="../../introduction/ecosystem.html" class="menu__link">Ecosystem</a>
  - <a href="../../introduction/examples.html" class="menu__link">Examples</a>
- <a href="#!" class="menu__link menu__link--sublist">Tutorials</a>
  - <a href="../../tutorials/index.html" class="menu__link">Tutorials Index</a>
  - <a href="../../tutorials/quick-start.html" class="menu__link">Quick Start</a>
  - <a href="../../tutorials/typescript-quick-start.html" class="menu__link">TypeScript Quick Start</a>
  - <a href="#!" class="menu__link menu__link--sublist">Redux Essentials</a>
    - <a href="../../tutorials/essentials/part-1-overview-concepts.html" class="menu__link">Redux Overview and Concepts</a>
    - <a href="../../tutorials/essentials/part-2-app-structure.html" class="menu__link">Redux App Structure</a>
    - <a href="../../tutorials/essentials/part-3-data-flow.html" class="menu__link">Basic Redux Data Flow</a>
    - <a href="../../tutorials/essentials/part-4-using-data.html" class="menu__link">Using Redux Data</a>
    - <a href="../../tutorials/essentials/part-5-async-logic.html" class="menu__link">Async Logic and Data Fetching</a>
    - <a href="../../tutorials/essentials/part-6-performance-normalization.html" class="menu__link">Performance and Normalizing Data</a>

    - <a href="../../tutorials/fundamentals/part-1-overview.html" class="menu__link">Redux Overview</a>
    - <a href="../../tutorials/fundamentals/part-2-concepts-data-flow.html" class="menu__link">Redux Concepts and Data Flow</a>
    - <a href="../../tutorials/fundamentals/part-3-state-actions-reducers.html" class="menu__link">State, Actions, and Reducers</a>
    - <a href="../../tutorials/fundamentals/part-4-store.html" class="menu__link">Store</a>
    - <a href="../../tutorials/fundamentals/part-5-ui-react.html" class="menu__link">UI and React</a>
    - <a href="../../tutorials/fundamentals/part-6-async-logic.html" class="menu__link">Async Logic and Data Fetching</a>
    - <a href="../../tutorials/fundamentals/part-7-standard-patterns.html" class="menu__link">Standard Redux Patterns</a>
    - <a href="../../tutorials/fundamentals/part-8-modern-redux.html" class="menu__link">Modern Redux with Redux Toolkit</a>



    - <a href="motivation.html" class="menu__link menu__link--active active">Motivation</a>
    - <a href="three-principles.html" class="menu__link">Three Principles</a>


# <span id="motivation" class="anchor enhancedAnchor_2LWZ"></span>Motivation<a href="#motivation" class="hash-link" title="Direct link to heading">#</a>

As the requirements for JavaScript single-page applications have become increasingly complicated, **our code must manage more state than ever before**. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on.

Managing this ever-changing state is hard. If a model can update another model, then a view can update a model, which updates another model, and this, in turn, might cause another view to update. At some point, you no longer understand what happens in your app as you have **lost control over the when, why, and how of its state.** When a system is opaque and non-deterministic, it's hard to reproduce bugs or add new features.

As if this weren't bad enough, consider the **new requirements becoming common in front-end product development**. As developers, we are expected to handle optimistic updates, server-side rendering, fetching data before performing route transitions, and so on. We find ourselves trying to manage a complexity that we have never had to deal with before, and we inevitably ask the question: [is it time to give up?](../../../www.quirksmode.org/blog/archives/2015/07/stop_pushing_th.html) The answer is _no_.

This complexity is difficult to handle as **we're mixing two concepts** that are very hard for the human mind to reason about: **mutation and asynchronicity.** I call them [Mentos and Coke](../../../en.wikipedia.org/wiki/Diet_Coke_and_Mentos_eruption.html). Both can be great in separation, but together they create a mess. Libraries like [React](../../../reactjs.org/index.html) attempt to solve this problem in the view layer by removing both asynchrony and direct DOM manipulation. However, managing the state of your data is left up to you. This is where Redux enters.

Following in the steps of [Flux](../../../facebook.github.io/flux/index.html), [CQRS](../../../martinfowler.com/bliki/CQRS.html), and [Event Sourcing](../../../martinfowler.com/eaaDev/EventSourcing.html), **Redux attempts to make state mutations predictable** by imposing certain restrictions on how and when updates can happen. These restrictions are reflected in the [three principles](three-principles.html) of Redux.

<a href="../../recipes/structuring-reducers/initializing-state.html" class="pagination-nav__link"></a>

« Initializing State

<a href="three-principles.html" class="pagination-nav__link"></a>

Next

Three Principles »





<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" /></a>


