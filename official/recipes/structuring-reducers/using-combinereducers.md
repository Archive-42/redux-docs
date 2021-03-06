<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

-   <a href="basic-reducer-structure.html" class="menu__link">Basic Reducer Structure</a>
    -   <a href="splitting-reducer-logic.html" class="menu__link">Splitting Reducer Logic</a>
    -   <a href="refactoring-reducer-example.html" class="menu__link">Refactoring Reducers Example</a>
    -   <a href="using-combinereducers.html" class="menu__link menu__link--active active">Using combineReducers</a>
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
    -   <a href="../../api/api-reference.html" class="menu__link">API Reference</a>\# <span id="using-combinereducers" class="anchor enhancedAnchor_2LWZ"></span>Using `combineReducers`<a href="#using-combinereducers" class="hash-link" title="Direct link to heading">#</a>

<span id="core-concepts" class="anchor enhancedAnchor_2LWZ"></span>Core Concepts<a href="#core-concepts" class="hash-link" title="Direct link to heading">#</a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------

The most common state shape for a Redux app is a plain Javascript object containing ???slices??? of domain-specific data at each top-level key. Similarly, the most common approach to writing reducer logic for that state shape is to have ???slice reducer??? functions, each with the same `(state, action)` signature, and each responsible for managing all updates to that specific slice of state. Multiple slice reducers can respond to the same action, independently update their own slice as needed, and the updated slices are combined into the new state object.

Because this pattern is so common, Redux provides the `combineReducers` utility to implement that behavior. It is an example of a *higher-order reducer*, which takes an object full of slice reducer functions, and returns a new reducer function.

There are several important ideas to be aware of when using `combineReducers`:

-   First and foremost, `combineReducers` is simply **a utility function to simplify the most common use case when writing Redux reducers**. You are *not* required to use it in your own application, and it does *not* handle every possible scenario. It is entirely possible to write reducer logic without using it, and it is quite common to need to write custom reducer logic for cases that `combineReducer` does not handle. (See [Beyond `combineReducers`](beyond-combinereducers.html) for examples and suggestions.)
-   While Redux itself is not opinionated about how your state is organized, `combineReducers` enforces several rules to help users avoid common errors. (See [`combineReducers`](../../api/combinereducers.html) for details.)
-   One frequently asked question is whether Redux ???calls all reducers??? when dispatching an action. Since there really is only one root reducer function, the default answer is ???no, it does not???. However, `combineReducers` has specific behavior that *does* work that way. In order to assemble the new state tree, `combineReducers` will call each slice reducer with its current slice of state and the current action, giving the slice reducer a chance to respond and update its slice of state if needed. So, in that sense, using `combineReducers` *does* ???call all reducers???, or at least all of the slice reducers it is wrapping.
-   You can use it at all levels of your reducer structure, not just to create the root reducer. It???s very common to have multiple combined reducers in various places, which are composed together to create the root reducer.

<span id="defining-state-shape" class="anchor enhancedAnchor_2LWZ"></span>Defining State Shape<a href="#defining-state-shape" class="hash-link" title="Direct link to heading">#</a>
------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

There are two ways to define the initial shape and contents of your store???s state. First, the `createStore` function can take `preloadedState` as its second argument. This is primarily intended for initializing the store with state that was previously persisted elsewhere, such as the browser???s localStorage. The other way is for the root reducer to return the initial state value when the state argument is `undefined`. These two approaches are described in more detail in [Initializing State](initializing-state.html), but there are some additional concerns to be aware of when using `combineReducers`.

`combineReducers` takes an object full of slice reducer functions, and creates a function that outputs a corresponding state object with the same keys. This means that if no preloaded state is provided to `createStore`, the naming of the keys in the input slice reducer object will define the naming of the keys in the output state object. The correlation between these names is not always apparent, especially when using ES6 features such as default module exports and object literal shorthands.

Here???s an example of how use of ES6 object literal shorthand with `combineReducers` can define the state shape:

<span class="token comment" style="color: #c6cad2">// reducers.js</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword module" style="color: #f92672">export</span><span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token plain"> </span><span class="token function-variable function" style="color: #e6d874">theDefaultReducer</span><span class="token plain"> </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> state</span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword module" style="color: #f92672">export</span><span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> </span><span class="token function-variable function" style="color: #e6d874">firstNamedReducer</span><span class="token plain"> </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">1</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> state</span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword module" style="color: #f92672">export</span><span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> </span><span class="token function-variable function" style="color: #e6d874">secondNamedReducer</span><span class="token plain"> </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">2</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> state</span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// rootReducer.js</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword module" style="color: #f92672">import</span><span class="token plain"> </span><span class="token imports punctuation" style="color: #000000">{</span> combineReducers<span class="token imports punctuation" style="color: #000000">,</span> createStore <span class="token imports punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token keyword module" style="color: #f92672">from</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">???redux???</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword module" style="color: #f92672">import</span><span class="token plain"> </span>theDefaultReducer<span class="token imports punctuation" style="color: #000000">,</span> <span class="token imports punctuation" style="color: #000000">{</span>

firstNamedReducer<span class="token imports punctuation" style="color: #000000">,</span>

secondNamedReducer

<span class="token imports punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token keyword module" style="color: #f92672">from</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">???./reducers???</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Use ES6 object literal shorthand syntax to define the object shape</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> theDefaultReducer</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> firstNamedReducer</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> secondNamedReducer</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> store </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createStore</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">rootReducer</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token console class-name">console</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">log</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">store</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">getState</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// {theDefaultReducer : 0, firstNamedReducer : 1, secondNamedReducer : 2}</span>Notice that because we used the ES6 shorthand for defining an object literal, the key names in the resulting state are the same as the variable names from the imports. This may not always be the desired behavior, and is often a cause of confusion for those who aren???t as familiar with ES6 syntax.

Also, the resulting names are a bit odd. It???s generally not a good practice to actually include words like ???reducer??? in your state key names - the keys should simply reflect the domain or type of data they hold. This means we should either explicitly specify the names of the keys in the slice reducer object to define the keys in the output state object, or carefully rename the variables for the imported slice reducers to set up the keys when using the shorthand object literal syntax.

A better usage might look like:

<span class="token keyword module" style="color: #f92672">import</span><span class="token plain"> </span><span class="token imports punctuation" style="color: #000000">{</span> combineReducers<span class="token imports punctuation" style="color: #000000">,</span> createStore <span class="token imports punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token keyword module" style="color: #f92672">from</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">???redux???</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Rename the default import to whatever name we want. We can also rename a named import.</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword module" style="color: #f92672">import</span><span class="token plain"> </span>defaultState<span class="token imports punctuation" style="color: #000000">,</span> <span class="token imports punctuation" style="color: #000000">{</span>

firstNamedReducer<span class="token imports punctuation" style="color: #000000">,</span>

secondNamedReducer <span class="token imports keyword module" style="color: #f92672">as</span> secondState

<span class="token imports punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token keyword module" style="color: #f92672">from</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">???./reducers???</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> defaultState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// key name same as the carefully renamed default export</span><span class="token plain"></span>

<span class="token plain"> firstState</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> firstNamedReducer</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// specific key name instead of the variable name</span><span class="token plain"></span>

<span class="token plain"> secondState </span><span class="token comment" style="color: #c6cad2">// key name same as the carefully renamed named export</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> reducerInitializedStore </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createStore</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">rootReducer</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token console class-name">console</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">log</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">reducerInitializedStore</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">getState</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// {defaultState : 0, firstState : 1, secondState : 2}</span>This state shape better reflects the data involved, because we took care to set up the keys we passed to `combineReducers`.

<a href="refactoring-reducer-example.html" class="pagination-nav__link"></a>

?? Refactoring Reducers Example

<a href="beyond-combinereducers.html" class="pagination-nav__link"></a>

Next

Beyond combineReducers ??

-   <a href="#core-concepts" class="table-of-contents__link">Core Concepts</a>
-   <a href="#defining-state-shape" class="table-of-contents__link">Defining State Shape</a>

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" />
