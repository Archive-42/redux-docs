

<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

  - <a href="basic-reducer-structure.html" class="menu__link menu__link--active active">Basic Reducer Structure</a>
    - <a href="splitting-reducer-logic.html" class="menu__link">Splitting Reducer Logic</a>
    - <a href="refactoring-reducer-example.html" class="menu__link">Refactoring Reducers Example</a>
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
  - <a href="../../api/api-reference.html" class="menu__link">API Reference</a># <span id="basic-reducer-structure-and-state-shape" class="anchor enhancedAnchor_2LWZ"></span>Basic Reducer Structure and State Shape<a href="#basic-reducer-structure-and-state-shape" class="hash-link" title="Direct link to heading">#</a>

## <span id="basic-reducer-structure" class="anchor enhancedAnchor_2LWZ"></span>Basic Reducer Structure<a href="#basic-reducer-structure" class="hash-link" title="Direct link to heading">#</a>

First and foremost, it's important to understand that your entire application really only has **one single reducer function**: the function that you've passed into `createStore` as the first argument. That one single reducer function ultimately needs to do several things:

- The first time the reducer is called, the `state` value will be `undefined`. The reducer needs to handle this case by supplying a default state value before handling the incoming action.
- It needs to look at the previous state and the dispatched action, and determine what kind of work needs to be done
- Assuming actual changes need to occur, it needs to create new objects and arrays with the updated data and return those
- If no changes are needed, it should return the existing state as-is.

The simplest possible approach to writing reducer logic is to put everything into a single function declaration, like this:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counter</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token keyword" style="color: #f92672">typeof</span><span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">===</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'undefined'</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">0</span><span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// If state is undefined, initialize it with a default value</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">type</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">===</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'INCREMENT'</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">else</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">if</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">type</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">===</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'DECREMENT'</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">else</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token comment" style="color: #c6cad2">// In case an action is passed in we don't understand</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>Notice that this simple function fulfills all the basic requirements. It returns a default value if none exists, initializing the store; it determines what sort of update needs to be done based on the type of the action, and returns new values; and it returns the previous state if no work needs to be done.

There are some simple tweaks that can be made to this reducer. First, repeated `if`/`switch` statements instead. Second, we can use ES6's default parameter values to handle the initial "no existing data" case. With those changes, the reducer would look like:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">counter</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #f8f8f2">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'INCREMENT'</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">+</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'DECREMENT'</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">-</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>This is the basic structure that a typical Redux reducer function uses.

## <span id="basic-state-shape" class="anchor enhancedAnchor_2LWZ"></span>Basic State Shape<a href="#basic-state-shape" class="hash-link" title="Direct link to heading">#</a>

Redux encourages you to think about your application in terms of the data you need to manage. The data at any given point in time is the "_state_" of your application, and the structure and organization of that state is typically referred to as its "_shape_". The shape of your state plays a major role in how you structure your reducer logic.

A Redux state usually has a plain Javascript object as the top of the state tree. (It is certainly possible to have another type of data instead, such as a single number, an array, or a specialized data structure, but most libraries assume that the top-level value is a plain object.) The most common way to organize data within that top-level object is to further divide data into sub-trees, where each top-level key represents some "domain" or "slice" of related data. For example, a basic Todo app's state might look like:

<span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> visibilityFilter</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SHOW_ALL'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> todos</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'Consider using Redux'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">true</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> text</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'Keep all state in a single tree'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> completed</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token boolean" style="color: #ae81ff">false</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>In this example, `todos` and `visibilityFilter` are both top-level keys in the state, and each represents a "slice" of data for some particular concept.

Most applications deal with multiple types of data, which can be broadly divided into three categories:

- _Domain data_: data that the application needs to show, use, or modify (such as "all of the Todos retrieved from the server")
- _App state_: data that is specific to the application's behavior (such as "Todo \#5 is currently selected", or "there is a request in progress to fetch Todos")
- _UI state_: data that represents how the UI is currently displayed (such as "The EditTodo modal dialog is currently open")

Because the store represents the core of your application, you should **define your state shape in terms of your domain data and app state, not your UI component tree**. As an example, a shape of `state.leftPane.todoList.todos` would be a bad idea, because the idea of "todos" is central to the whole application, not just a single part of the UI. The `todos` slice should be at the top of the state tree instead.

There will _rarely_ be a 1-to-1 correspondence between your UI tree and your state shape. The exception to that might be if you are explicitly tracking various aspects of UI data in your Redux store as well, but even then the shape of the UI data and the shape of the domain data would likely be different.

A typical app's state shape might look roughly like:

<span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> domainData1 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> domainData2 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> appState1 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> appState2 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> ui </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> uiState1 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> uiState2 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><a href="prerequisite-concepts.html" class="pagination-nav__link"></a>

« Prerequisite Concepts

<a href="splitting-reducer-logic.html" class="pagination-nav__link"></a>

Next

Splitting Reducer Logic »

- <a href="#basic-reducer-structure" class="table-of-contents__link">Basic Reducer Structure</a>
- <a href="#basic-state-shape" class="table-of-contents__link">Basic State Shape</a>





<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" /></a>


