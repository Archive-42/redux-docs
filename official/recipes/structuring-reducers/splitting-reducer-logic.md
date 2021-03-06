<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

-   <a href="basic-reducer-structure.html" class="menu__link">Basic Reducer Structure</a>
    -   <a href="splitting-reducer-logic.html" class="menu__link menu__link--active active">Splitting Reducer Logic</a>
    -   <a href="refactoring-reducer-example.html" class="menu__link">Refactoring Reducers Example</a>
    -   <a href="using-combinereducers.html" class="menu__link">Using combineReducers</a>
    -   <a href="beyond-combinereducers.html" class="menu__link">Beyond combineReducers</a>
    -   <a href="normalizing-state-shape.html" class="menu__link">Normalizing State Shape</a>
    -   <a href="updating-normalized-data.html" class="menu__link">Updating Normalized Data</a>
    -   <a href="reusing-reducer-logic.html" class="menu__link">Reusing Reducer Logic</a>
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
    -   <a href="../../api/api-reference.html" class="menu__link">API Reference</a>\# <span id="splitting-up-reducer-logic" class="anchor enhancedAnchor_2LWZ"></span>Splitting Up Reducer Logic<a href="#splitting-up-reducer-logic" class="hash-link" title="Direct link to heading">#</a>

For any meaningful application, putting *all* your update logic into a single reducer function is quickly going to become unmaintainable. While there???s no single rule for how long a function should be, it???s generally agreed that functions should be relatively short and ideally only do one specific thing. Because of this, it???s good programming practice to take pieces of code that are very long or do many different things, and break them into smaller pieces that are easier to understand.

Since a Redux reducer is *just* a function, the same concept applies. You can split some of your reducer logic out into another function, and call that new function from the parent function.

These new functions would typically fall into one of three categories:

1.  Small utility functions containing some reusable chunk of logic that is needed in multiple places (which may or may not be actually related to the specific business logic)
2.  Functions for handling a specific update case, which often need parameters other than the typical `(state, action)` pair
3.  Functions which handle *all* updates for a given slice of state. These functions do generally have the typical `(state, action)` parameter signature

For clarity, these terms will be used to distinguish between different types of functions and different use cases:

-   ***reducer***: any function with the signature `(state, action) -> newState` (ie, any function that *could* be used as an argument to `Array.prototype.reduce`)
-   ***root reducer***: the reducer function that is actually passed as the first argument to `createStore`. This is the only part of the reducer logic that *must* have the `(state, action) -> newState` signature.
-   ***slice reducer***: a reducer that is being used to handle updates to one specific slice of the state tree, usually done by passing it to `combineReducers`
-   ***case function***: a function that is being used to handle the update logic for a specific action. This may actually be a reducer function, or it may require other parameters to do its work properly.
-   ***higher-order reducer***: a function that takes a reducer function as an argument, and/or returns a new reducer function as a result (such as `combineReducers`, or `redux-undo`)

The term ???*sub-reducer*??? has also been used in various discussions to mean any function that is not the root reducer, although the term is not very precise. Some people may also refer to some functions as ???*business logic*??? (functions that relate to application-specific behavior) or ???*utility functions*??? (generic functions that are not application-specific).

Breaking down a complex process into smaller, more understandable parts is usually described with the term ***[functional decomposition](../../../stackoverflow.com/questions/947874/what-is-functional-decomposition.html)***. This term and concept can be applied generically to any code. However, in Redux it is *very* common to structure reducer logic using approach \#3, where update logic is delegated to other functions based on slice of state. Redux refers to this concept as ***reducer composition***, and it is by far the most widely-used approach to structuring reducer logic. In fact, it???s so common that Redux includes a utility function called [`combineReducers()`](../../api/combinereducers.html), which specifically abstracts the process of delegating work to other reducer functions based on slices of state. However, it???s important to note that it is not the *only* pattern that can be used. In fact, it???s entirely possible to use all three approaches for splitting up logic into functions, and usually a good idea as well. The [Refactoring Reducers](refactoring-reducer-example.html) section shows some examples of this in action.

<a href="basic-reducer-structure.html" class="pagination-nav__link"></a>

?? Basic Reducer Structure

<a href="refactoring-reducer-example.html" class="pagination-nav__link"></a>

Next

Refactoring Reducers Example ??

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" />
