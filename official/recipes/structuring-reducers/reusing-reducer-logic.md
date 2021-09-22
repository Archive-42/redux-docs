<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

-   <a href="basic-reducer-structure.html" class="menu__link">Basic Reducer Structure</a>
    -   <a href="splitting-reducer-logic.html" class="menu__link">Splitting Reducer Logic</a>
    -   <a href="refactoring-reducer-example.html" class="menu__link">Refactoring Reducers Example</a>
    -   <a href="using-combinereducers.html" class="menu__link">Using combineReducers</a>
    -   <a href="beyond-combinereducers.html" class="menu__link">Beyond combineReducers</a>
    -   <a href="normalizing-state-shape.html" class="menu__link">Normalizing State Shape</a>
    -   <a href="updating-normalized-data.html" class="menu__link">Updating Normalized Data</a>
    -   <a href="reusing-reducer-logic.html" class="menu__link menu__link--active active">Reusing Reducer Logic</a>
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
    -   <a href="../../api/api-reference.html" class="menu__link">API Reference</a>\# <span id="reusing-reducer-logic" class="anchor enhancedAnchor_2LWZ"></span>Reusing Reducer Logic<a href="#reusing-reducer-logic" class="hash-link" title="Direct link to heading">#</a>

As an application grows, common patterns in reducer logic will start to emerge. You may find several parts of your reducer logic doing the same kinds of work for different types of data, and want to reduce duplication by reusing the same common logic for each data type. Or, you may want to have multiple “instances” of a certain type of data being handled in the store. However, the global structure of a Redux store comes with some trade-offs: it makes it easy to track the overall state of an application, but can also make it harder to “target” actions that need to update a specific piece of state, particularly if you are using `combineReducers`.

As an example, let’s say that we want to track multiple counters in our application, named A, B, and C. We define our initial `counter` reducer, and we use `combineReducers` to set up our state:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘INCREMENT’</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘DECREMENT’</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> counterA</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> counterB</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> counterC</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> counter</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>Unfortunately, this setup has a problem. Because `combineReducers` will call each slice reducer with the same action, dispatching `{type : 'INCREMENT'}` will actually cause *all three* counter values to be incremented, not just one of them. We need some way to wrap the `counter` logic so that we can ensure that only the counter we care about is updated.

<span id="customizing-behavior-with-higher-order-reducers" class="anchor enhancedAnchor_2LWZ"></span>Customizing Behavior with Higher-Order Reducers<a href="#customizing-behavior-with-higher-order-reducers" class="hash-link" title="Direct link to heading">#</a>
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

As defined in [Splitting Reducer Logic](splitting-reducer-logic.html), a *higher-order reducer* is a function that takes a reducer function as an argument, and/or returns a new reducer function as a result. It can also be viewed as a “reducer factory”. `combineReducers` is one example of a higher-order reducer. We can use this pattern to create specialized versions of our own reducer functions, with each version only responding to specific actions.

The two most common ways to specialize a reducer are to generate new action constants with a given prefix or suffix, or to attach additional info inside the action object. Here’s what those might look like:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createCounterWithNamedType</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counterName </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">’’</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token template-string string" style="color: #a6e22e">INCREMENT\_</span><span class="token template-string interpolation interpolation-punctuation punctuation" style="color: #000000">${</span><span class="token template-string interpolation">counterName</span><span class="token template-string interpolation interpolation-punctuation punctuation" style="color: #000000">}</span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token template-string string" style="color: #a6e22e">DECREMENT\_</span><span class="token template-string interpolation interpolation-punctuation punctuation" style="color: #000000">${</span><span class="token template-string interpolation">counterName</span><span class="token template-string interpolation interpolation-punctuation punctuation" style="color: #000000">}</span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createCounterWithNameData</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counterName </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">’’</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> name </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> action</span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">name </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> counterName</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token template-string string" style="color: #a6e22e">INCREMENT</span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token template-string string" style="color: #a6e22e">DECREMENT</span><span class="token template-string template-punctuation string" style="color: #a6e22e">\`</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span>We should now be able to use either of these to generate our specialized counter reducers, and then dispatch actions that will affect the portion of the state that we care about:

<span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> counterA</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createCounterWithNamedType</span><span class="token punctuation" style="color: #000000">(</span><span class="token string" style="color: #a6e22e">‘A’</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> counterB</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createCounterWithNamedType</span><span class="token punctuation" style="color: #000000">(</span><span class="token string" style="color: #a6e22e">‘B’</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> counterC</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createCounterWithNamedType</span><span class="token punctuation" style="color: #000000">(</span><span class="token string" style="color: #a6e22e">‘C’</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain">store</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">dispatch</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> type</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘INCREMENT\_B’</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token console class-name">console</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">log</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">store</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">getState</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// {counterA : 0, counterB : 1, counterC : 0}</span>We could also vary the approach somewhat, and create a more generic higher-order reducer that accepts both a given reducer function and a name or identifier:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘INCREMENT’</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘DECREMENT’</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createNamedWrapperReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">reducerFunction</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> reducerName</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> name </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> action</span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> isInitializationCall </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">===</span><span class="token plain"> </span><span class="token keyword nil" style="color: #f92672">undefined</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">name </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> reducerName </span><span class="token operator" style="color: #000000">&&</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!</span><span class="token plain">isInitializationCall</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">reducerFunction</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> counterA</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createNamedWrapperReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘A’</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> counterB</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createNamedWrapperReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘B’</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> counterC</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createNamedWrapperReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘C’</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>You could even go as far as to make a generic filtering higher-order reducer:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createFilteredReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">reducerFunction</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> reducerPredicate</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> isInitializationCall </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">===</span><span class="token plain"> </span><span class="token keyword nil" style="color: #f92672">undefined</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> shouldRunWrappedReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">reducerPredicate</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token operator" style="color: #000000">||</span><span class="token plain"> isInitializationCall</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> shouldRunWrappedReducer </span><span class="token operator" style="color: #000000">?</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">reducerFunction</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// check for suffixed strings</span><span class="token plain"></span>

<span class="token plain"> counterA </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createFilteredReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">action</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">endsWith</span><span class="token punctuation" style="color: #000000">(</span><span class="token string" style="color: #a6e22e">‘\_A’</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// check for extra data in the action</span><span class="token plain"></span>

<span class="token plain"> counterB </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createFilteredReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">action</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">name</span><span class="token plain"> </span><span class="token operator" style="color: #000000">===</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘B’</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// respond to all ‘INCREMENT’ actions, but never ‘DECREMENT’</span><span class="token plain"></span>

<span class="token plain"> counterC </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createFilteredReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">action</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token plain"> </span><span class="token operator" style="color: #000000">===</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">‘INCREMENT’</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">;</span>These basic patterns allow you to do things like having multiple instances of a smart connected component within the UI, or reuse common logic for generic capabilities such as pagination or sorting.

In addition to generating reducers this way, you might also want to generate action creators using the same approach, and could generate them both at the same time with helper functions. See [Action/Reducer Generators](../../../github.com/markerikson/redux-ecosystem-links/blob/master/action-reducer-generators.html) and [Reducers](../../../github.com/markerikson/redux-ecosystem-links/blob/master/reducers.html) libraries for action/reducer utilities.

<span id="collection--item-reducer-pattern" class="anchor enhancedAnchor_2LWZ"></span>Collection / Item Reducer Pattern<a href="#collection--item-reducer-pattern" class="hash-link" title="Direct link to heading">#</a>
-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

This pattern allows you to have multiple states and use a common reducer to update each state based on an additional parameter inside the action object.

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counterReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">“INCREMENT”</span><span class="token plain"> </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">“DECREMENT”</span><span class="token plain"> </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #000000">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">countersArrayReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">“INCREMENT”</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">“DECREMENT”</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">map</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">counter</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> index</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">index </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">index</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> counter</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counterReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">counter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">countersMapReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">“INCREMENT”</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">“DECREMENT”</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token spread operator" style="color: #000000">…</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> state</span><span class="token punctuation" style="color: #000000">\[</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">name</span><span class="token punctuation" style="color: #000000">\]</span><span class="token plain"> </span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counterReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">\[</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">name</span><span class="token punctuation" style="color: #000000">\]</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">;</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><a href="updating-normalized-data.html" class="pagination-nav__link"></a>

« Updating Normalized Data

<a href="immutable-update-patterns.html" class="pagination-nav__link"></a>

Next

Immutable Update Patterns »

-   <a href="#customizing-behavior-with-higher-order-reducers" class="table-of-contents__link">Customizing Behavior with Higher-Order Reducers</a>
-   <a href="#collection--item-reducer-pattern" class="table-of-contents__link">Collection / Item Reducer Pattern</a>

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" />
