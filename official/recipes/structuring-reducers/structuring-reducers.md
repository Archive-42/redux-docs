<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

-   <a href="../using-object-spread-operator.html" class="menu__link">Using Object Spread Operator</a>
-   <a href="../reducing-boilerplate.html" class="menu__link">Reducing Boilerplate</a>
-   <a href="../server-rendering.html" class="menu__link">Server Rendering</a>
-   <a href="../writing-tests.html" class="menu__link">Writing Tests</a>
-   <a href="../computing-derived-data.html" class="menu__link">Computing Derived Data</a>
-   <a href="../implementing-undo-history.html" class="menu__link">Implementing Undo History</a>
-   <a href="../isolating-redux-sub-apps.html" class="menu__link">Isolating Redux Sub-Apps</a>
-   <a href="../code-splitting.html" class="menu__link">Code Splitting</a>
-   <a href="../troubleshooting.html" class="menu__link">Troubleshooting</a>
-   <a href="#!" class="menu__link menu__link--sublist menu__link--active">Structuring Reducers</a>
    -   <a href="structuring-reducers.html" class="menu__link menu__link--active active">Structuring Reducers</a>
    -   <a href="prerequisite-concepts.html" class="menu__link">Prerequisite Concepts</a>
        -   <a href="immutable-update-patterns.html" class="menu__link">Immutable Update Patterns</a>
    -   <a href="initializing-state.html" class="menu__link">Initializing State</a>
-   <a href="#!" class="menu__link menu__link--sublist">Understanding Redux</a>
    -   <a href="#!" class="menu__link menu__link--sublist">Thinking in Redux</a>
        -   <a href="../../understanding/thinking-in-redux/motivation.html" class="menu__link">Motivation</a>
        -   <a href="../../understanding/thinking-in-redux/three-principles.html" class="menu__link">Three Principles</a>
        -   <a href="../../understanding/thinking-in-redux/glossary.html" class="menu__link">Glossary</a>
    -   <a href="#!" class="menu__link menu__link--sublist">History and Design</a>
        -   <a href="../../understanding/history-and-design/prior-art.html" class="menu__link">Prior Art</a>
        -   <a href="../../understanding/history-and-design/middleware.html" class="menu__link">Middleware</a>
-   <a href="#!" class="menu__link menu__link--sublist">FAQ</a>

    -   <a href="../../faq.html" class="menu__link">FAQ Index</a>
    -   <a href="../../faq/general.html" class="menu__link">General</a>
    -   <a href="../../faq/reducers.html" class="menu__link">Reducers</a>
    -   <a href="../../faq/organizing-state.html" class="menu__link">Organizing State</a>
    -   <a href="../../faq/store-setup.html" class="menu__link">Store Setup</a>
    -   <a href="../../faq/actions.html" class="menu__link">Actions</a>
    -   <a href="../../faq/immutable-data.html" class="menu__link">Immutable Data</a>
    -   <a href="../../faq/code-structure.html" class="menu__link">Code Structure</a>
    -   <a href="../../faq/performance.html" class="menu__link">Performance</a>
    -   <a href="../../faq/design-decisions.html" class="menu__link">Design Decisions</a>

-   <a href="#!" class="menu__link menu__link--sublist">Style Guide</a>
    -   <a href="../../style-guide/style-guide.html" class="menu__link">Style Guide: Best Practices</a>
-   <a href="#!" class="menu__link menu__link--sublist">API Reference</a>
    -   <a href="../../api/api-reference.html" class="menu__link">API Reference</a>\# <span id="structuring-reducers" class="anchor enhancedAnchor_2LWZ"></span>Structuring Reducers<a href="#structuring-reducers" class="hash-link" title="Direct link to heading">#</a>

At its core, Redux is really a fairly simple design pattern: all your “write” logic goes into a single function, and the only way to run that logic is to give Redux a plain object that describes something that has happened. The Redux store calls that write logic function and passes in the current state tree and the descriptive object, the write logic function returns some new state tree, and the Redux store notifies any subscribers that the state tree has changed.

Redux puts some basic constraints on how that write logic function should work. As described in [“Redux Fundamentals” Part 3: State, Actions, and Reducers](../../tutorials/fundamentals/part-3-state-actions-reducers.html), it has to have a signature of `(previousState, action) => newState`, is known as a ***reducer function***, and must be *pure* and predictable.

Beyond that, Redux does not really care how you actually structure your logic inside that reducer function, as long as it obeys those basic rules. This is both a source of freedom and a source of confusion. However, there are a number of common patterns that are widely used when writing reducers, as well as a number of related topics and concepts to be aware of. As an application grows, these patterns play a crucial role in managing reducer code complexity, handling real-world data, and optimizing UI performance.

### <span id="prerequisite-concepts-for-writing-reducers" class="anchor enhancedAnchor_2LWZ"></span>Prerequisite Concepts for Writing Reducers<a href="#prerequisite-concepts-for-writing-reducers" class="hash-link" title="Direct link to heading">#</a>

Some of these concepts are already described elsewhere in the Redux documentation. Others are generic and applicable outside of Redux itself, and there are numerous existing articles that cover these concepts in detail. These concepts and techniques form the foundation of writing solid Redux reducer logic.

It is vital that these Prerequisite Concepts are **thoroughly understood** before moving on to more advanced and Redux-specific techniques. A recommended reading list is available at:

#### <span id="prerequisite-concepts" class="anchor enhancedAnchor_2LWZ"></span>[Prerequisite Concepts](prerequisite-concepts.html)<a href="#prerequisite-concepts" class="hash-link" title="Direct link to heading">#</a>

Standard Redux architecture relies on using plain JS objects and arrays for your state. If you’re using an alternate approach for some reason, the details may differ based on your approach, but many of the principles will still apply.

### <span id="reducer-concepts-and-techniques" class="anchor enhancedAnchor_2LWZ"></span>Reducer Concepts and Techniques<a href="#reducer-concepts-and-techniques" class="hash-link" title="Direct link to heading">#</a>

-   [Basic Reducer Structure](basic-reducer-structure.html)
-   [Splitting Reducer Logic](splitting-reducer-logic.html)
-   [Refactoring Reducers Example](refactoring-reducer-example.html)
-   [Using `combineReducers`](using-combinereducers.html)
-   [Beyond `combineReducers`](beyond-combinereducers.html)
-   [Normalizing State Shape](normalizing-state-shape.html)
-   [Updating Normalized Data](updating-normalized-data.html)
-   [Reusing Reducer Logic](reusing-reducer-logic.html)
-   [Immutable Update Patterns](immutable-update-patterns.html)
-   [Initializing State](initializing-state.html)

<a href="../troubleshooting.html" class="pagination-nav__link"></a>

« Troubleshooting

<a href="prerequisite-concepts.html" class="pagination-nav__link"></a>

Next

Prerequisite Concepts »

-   <a href="#prerequisite-concepts-for-writing-reducers" class="table-of-contents__link">Prerequisite Concepts for Writing Reducers</a>
-   <a href="#reducer-concepts-and-techniques" class="table-of-contents__link">Reducer Concepts and Techniques</a>

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" />
