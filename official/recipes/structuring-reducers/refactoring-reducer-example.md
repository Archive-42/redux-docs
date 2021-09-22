

<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

  - <a href="basic-reducer-structure.html" class="menu__link">Basic Reducer Structure</a>
    - <a href="splitting-reducer-logic.html" class="menu__link">Splitting Reducer Logic</a>
    - <a href="refactoring-reducer-example.html" class="menu__link menu__link--active active">Refactoring Reducers Example</a>
    - <a href="using-combinereducers.html" class="menu__link">Using combineReducers</a>
    - <a href="beyond-combinereducers.html" class="menu__link">Beyond combineReducers</a>
    - <a href="normalizing-state-shape.html" class="menu__link">Normalizing State Shape</a>
    - <a href="updating-normalized-data.html" class="menu__link">Updating Normalized Data</a>
    - <a href="reusing-reducer-logic.html" class="menu__link">Reusing Reducer Logic</a>
    - <a href="immutable-update-patterns.html" class="menu__link">Immutable Update Patterns</a>
    - <a href="initializing-state.html" class="menu__link">Initializing State</a>
- <a href="#!" class="menu__link menu__link--sublist">Understanding Redux</a>
  - <a href="#!" class="menu__link menu__link--sublist">Thinking in Redux</a>
    - <a href="../../understanding/thinking-in-redux/motivation.html" class="menu__link">Motivation</a>
    - <a href="../../understanding/thinking-in-redux/three-principles.html" class="menu__link">Three Principles</a>
    - <a href="../../understanding/thinking-in-redux/glossary.html" class="menu__link">Glossary</a>
  - <a href="#!" class="menu__link menu__link--sublist">History and Design</a>
    - <a href="../../understanding/history-and-design/prior-art.html" class="menu__link">Prior Art</a>
    - <a href="../../understanding/history-and-design/middleware.html" class="menu__link">Middleware</a>
- <a href="#!" class="menu__link menu__link--sublist">FAQ</a>
  - <a href="../../faq.html" class="menu__link">FAQ Index</a>
  - <a href="../../faq/general.html" class="menu__link">General</a>
  - <a href="../../faq/reducers.html" class="menu__link">Reducers</a>
  - <a href="../../faq/organizing-state.html" class="menu__link">Organizing State</a>
  - <a href="../../faq/store-setup.html" class="menu__link">Store Setup</a>
  - <a href="../../faq/actions.html" class="menu__link">Actions</a>
  - <a href="../../faq/immutable-data.html" class="menu__link">Immutable Data</a>
  - <a href="../../faq/code-structure.html" class="menu__link">Code Structure</a>
  - <a href="../../faq/performance.html" class="menu__link">Performance</a>
  - <a href="../../faq/design-decisions.html" class="menu__link">Design Decisions</a>
  - <a href="../../faq/react-redux.html" class="menu__link">React Redux</a>
  - <a href="../../faq/miscellaneous.html" class="menu__link">Miscellaneous</a>
- <a href="#!" class="menu__link menu__link--sublist">Style Guide</a>
  - <a href="../../style-guide/style-guide.html" class="menu__link">Style Guide: Best Practices</a>
- <a href="#!" class="menu__link menu__link--sublist">API Reference</a>
  - <a href="../../api/api-reference.html" class="menu__link">API Reference</a># <span id="refactoring-reducer-logic-using-functional-decomposition-and-reducer-composition" class="anchor enhancedAnchor_2LWZ"></span>Refactoring Reducer Logic Using Functional Decomposition and Reducer Composition<a href="#refactoring-reducer-logic-using-functional-decomposition-and-reducer-composition" class="hash-link" title="Direct link to heading">#</a>

It may be helpful to see examples of what the different types of sub-reducer functions look like and how they fit together. Let's look at a demonstration of how a large single reducer function can be refactored into a composition of several smaller functions.

> **Note**: this example is deliberately written in a verbose style in order to illustrate the concepts and the process of refactoring, rather than perfectly concise code.

#### <span id="initial-reducer" class="anchor enhancedAnchor_2LWZ"></span>Initial Reducer<a href="#initial-reducer" class="hash-link" title="Direct link to heading">#</a>

Let's say that our initial reducer looks like this:

<span class="token keyword" style="color: #f92672">const</span><span class="token plain"> initialState </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SHOW_ALL'</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">\[</span><span class="token punctuation" style="color: #000000">\]</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">appReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SET_VISIBILITY_FILTER'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">filter</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'ADD_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">concat</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">false</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'TOGGLE_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">map</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> todo</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">completed</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'EDIT_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">map</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> todo</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span>That function is fairly short, but already becoming overly complex. We're dealing with two different areas of concern (filtering vs managing our list of todos), the nesting is making the update logic harder to read, and it's not exactly clear what's going on everywhere.

#### <span id="extracting-utility-functions" class="anchor enhancedAnchor_2LWZ"></span>Extracting Utility Functions<a href="#extracting-utility-functions" class="hash-link" title="Direct link to heading">#</a>

A good first step might be to break out a utility function to return a new object with updated fields. There's also a repeated pattern with trying to update a specific item in an array that we could extract to a function:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">oldObject</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Encapsulate the idea of passing a new object as the first parameter</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// to Object.assign to ensure we correctly copy data instead of mutating</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> oldObject</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">array</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> itemId</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> updateItemCallback</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> updatedItems </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> array</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">map</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">item</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">item</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> itemId</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Since we only want to update one item, preserve all others as they are now</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> item</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Use the provided callback to create an updated item</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> updatedItem </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemCallback</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">item</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> updatedItem</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> updatedItems</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">appReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SET_VISIBILITY_FILTER'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">filter</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'ADD_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">concat</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">false</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> newTodos </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'TOGGLE_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">completed</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> newTodos </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'EDIT_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> newTodos </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span>That reduced the duplication and made things a bit easier to read.

#### <span id="extracting-case-reducers" class="anchor enhancedAnchor_2LWZ"></span>Extracting Case Reducers<a href="#extracting-case-reducers" class="hash-link" title="Direct link to heading">#</a>

Next, we can split each specific case into its own function:

<span class="token comment" style="color: #c6cad2">// Omitted</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">oldObject</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">array</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> itemId</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> updateItemCallback</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">setVisibilityFilter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">filter</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">addTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">concat</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">false</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> newTodos </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">toggleTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">completed</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> newTodos </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">editTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> newTodos </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">appReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SET_VISIBILITY_FILTER'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">setVisibilityFilter</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'ADD_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">addTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'TOGGLE_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">toggleTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'EDIT_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">editTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span>Now it's _very_ clear what's happening in each case. We can also start to see some patterns emerging.

#### <span id="separating-data-handling-by-domain" class="anchor enhancedAnchor_2LWZ"></span>Separating Data Handling by Domain<a href="#separating-data-handling-by-domain" class="hash-link" title="Direct link to heading">#</a>

Our app reducer is still aware of all the different cases for our application. Let's try splitting things up so that the filter logic and the todo logic are separated:

<span class="token comment" style="color: #c6cad2">// Omitted</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">oldObject</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">array</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> itemId</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> updateItemCallback</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">setVisibilityFilter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">visibilityState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Technically, we don't even care about the previous state</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">filter</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">visibilityReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">visibilityState </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SHOW_ALL'</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SET_VISIBILITY_FILTER'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">setVisibilityFilter</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">visibilityState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> visibilityState</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">addTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> todosState</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">concat</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">false</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> newTodos</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">toggleTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> completed</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">completed</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> newTodos</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">editTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"> text</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> newTodos</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">todosReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter punctuation" style="color: #000000">\[</span><span class="token parameter punctuation" style="color: #000000">\]</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'ADD_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">addTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'TOGGLE_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">toggleTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'EDIT_TODO'</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">editTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> todosState</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">appReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">todosReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">visibilityReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">visibilityFilter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span>Notice that because the two "slice of state" reducers are now getting only their own part of the whole state as arguments, they no longer need to return complex nested state objects, and are now simpler as a result.

#### <span id="reducing-boilerplate" class="anchor enhancedAnchor_2LWZ"></span>Reducing Boilerplate<a href="#reducing-boilerplate" class="hash-link" title="Direct link to heading">#</a>

We're almost done. Since many people don't like switch statements, it's very common to use a function that creates a lookup table of action types to case functions. We'll use the `createReducer` function described in [Reducing Boilerplate](../reducing-boilerplate.html):

<span class="token comment" style="color: #c6cad2">// Omitted</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">oldObject</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">array</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> itemId</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> updateItemCallback</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> handlers</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">reducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">handlers</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">hasOwnProperty</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> handlers</span><span class="token punctuation" style="color: #000000">\[</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">\]</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">else</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Omitted</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">setVisibilityFilter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">visibilityState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> visibilityReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token string" style="color: #a6e22e">'SHOW_ALL'</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">SET_VISIBILITY_FILTER</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> setVisibilityFilter</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Omitted</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">addTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">toggleTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">editTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> todosReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">\[</span><span class="token punctuation" style="color: #000000">\]</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">ADD_TODO</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> addTodo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">TOGGLE_TODO</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> toggleTodo</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">EDIT_TODO</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> editTodo</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">appReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">todosReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">todos</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"></span>

<span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">visibilityReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">visibilityFilter</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span>#### <span id="combining-reducers-by-slice" class="anchor enhancedAnchor_2LWZ"></span>Combining Reducers by Slice<a href="#combining-reducers-by-slice" class="hash-link" title="Direct link to heading">#</a>

As our last step, we can now use Redux's built-in `combineReducers` utility to handle the "slice-of-state" logic for our top-level app reducer. Here's the final result:

<span class="token comment" style="color: #c6cad2">// Reusable utility functions</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">oldObject</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Encapsulate the idea of passing a new object as the first parameter</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// to Object.assign to ensure we correctly copy data instead of mutating</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> oldObject</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> newValues</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">array</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> itemId</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> updateItemCallback</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> updatedItems </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> array</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">map</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">item</span><span class="token plain"> </span><span class="token arrow operator" style="color: #000000">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">item</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">id</span><span class="token plain"> </span><span class="token operator" style="color: #000000">!==</span><span class="token plain"> itemId</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Since we only want to update one item, preserve all others as they are now</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> item</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Use the provided callback to create an updated item</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> updatedItem </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemCallback</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">item</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> updatedItem</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> updatedItems</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> handlers</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">reducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> initialState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">handlers</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">hasOwnProperty</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> handlers</span><span class="token punctuation" style="color: #000000">\[</span><span class="token plain">action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">\]</span><span class="token punctuation" style="color: #000000">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">else</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Handler for a specific case ("case reducer")</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">setVisibilityFilter</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">visibilityState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// Technically, we don't even care about the previous state</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> action</span><span class="token punctuation" style="color: #000000">.</span><span class="token property-access">filter</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Handler for an entire slice of state ("slice reducer")</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> visibilityReducer </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createReducer</span><span class="token punctuation" style="color: #000000">(</span><span class="token string" style="color: #a6e22e">'SHOW_ALL'</span><span class="token punctuation" style="color: #000000">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">SET_VISIBILITY_FILTER</span><span class="token operator" style="color: #000000">:</span><span class="token plain"> setVisibilityFilter</span>

<span class="token plain"></span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Case reducer</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">addTodo</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #000000">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #000000">=</span><span class="token plain"> todosState</span><span class="token punctuation" style="color: #000000">.</span><span  style="color: #e6d874">concat</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">text</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">false</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> newTodos</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Case reducer</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">toggleTodo</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #f8f8f2">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> completed</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">!</span><span class="token plain">todo</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">completed</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> newTodos</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Case reducer</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">editTodo</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">todosState</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> newTodos </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateItemInArray</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">todosState</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">id</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token parameter">todo</span><span class="token plain"> </span><span class="token arrow operator" style="color: #f8f8f2">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">updateObject</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">todo</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> text</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">text</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> newTodos</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// Slice reducer</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> todosReducer </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">createReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">ADD_TODO</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> addTodo</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">TOGGLE_TODO</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> toggleTodo</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token constant" style="color: #f92672">EDIT_TODO</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> editTodo</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token comment" style="color: #c6cad2">// "Root reducer"</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> appReducer </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> visibilityReducer</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> todosReducer</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span>We now have examples of several kinds of split-up reducer functions: helper utilities like `updateObject` and `createReducer`, handlers for specific cases like `setVisibilityFilter` and `addTodo`, and slice-of-state handlers like `visibilityReducer` and `todosReducer`. We also can see that `appReducer` is an example of a "root reducer".

Although the final result in this example is noticeably longer than the original version, this is primarily due to the extraction of the utility functions, the addition of comments, and some deliberate verbosity for the sake of clarity, such as separate return statements. Looking at each function individually, the amount of responsibility is now smaller, and the intent is hopefully clearer. Also, in a real application, these functions would probably then be split into separate files such as `reducerUtilities.js`, `visibilityReducer.js`, `todosReducer.js`, and `rootReducer.js`.

<a href="splitting-reducer-logic.html" class="pagination-nav__link"></a>

« Splitting Reducer Logic

<a href="using-combinereducers.html" class="pagination-nav__link"></a>

Next

Using combineReducers »





<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" /></a>


