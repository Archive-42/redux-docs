

<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

  - <a href="basic-reducer-structure.html" class="menu__link">Basic Reducer Structure</a>
    - <a href="splitting-reducer-logic.html" class="menu__link">Splitting Reducer Logic</a>
    - <a href="refactoring-reducer-example.html" class="menu__link">Refactoring Reducers Example</a>
    - <a href="using-combinereducers.html" class="menu__link">Using combineReducers</a>
    - <a href="beyond-combinereducers.html" class="menu__link">Beyond combineReducers</a>
    - <a href="normalizing-state-shape.html" class="menu__link menu__link--active active">Normalizing State Shape</a>
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
  - <a href="../../api/api-reference.html" class="menu__link">API Reference</a># <span id="normalizing-state-shape" class="anchor enhancedAnchor_2LWZ"></span>Normalizing State Shape<a href="#normalizing-state-shape" class="hash-link" title="Direct link to heading">#</a>

Many applications deal with data that is nested or relational in nature. For example, a blog editor could have many Posts, each Post could have many Comments, and both Posts and Comments would be written by a User. Data for this kind of application might look like:

<span class="token keyword" style="color: #f92672">const</span><span class="token plain"> blogPosts </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'post1'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user1'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 1'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> body</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'......'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comments</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'comment1'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user2'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 2'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'.....'</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'comment2'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user3'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 3'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'.....'</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'post2'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user2'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 2'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> body</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'......'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comments</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'comment3'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user3'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 3'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'.....'</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'comment4'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user1'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 1'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'.....'</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'comment5'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> username</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'user3'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> name</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'User 3'</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'.....'</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// and repeat many times</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">\]</span>Notice that the structure of the data is a bit complex, and some of the data is repeated. This is a concern for several reasons:

- When a piece of data is duplicated in several places, it becomes harder to make sure that it is updated appropriately.
- Nested data means that the corresponding reducer logic has to be more nested and therefore more complex. In particular, trying to update a deeply nested field can become very ugly very fast.
- Since immutable data updates require all ancestors in the state tree to be copied and updated as well, and new object references will cause connected UI components to re-render, an update to a deeply nested data object could force totally unrelated UI components to re-render even if the data they're displaying hasn't actually changed.

Because of this, the recommended approach to managing relational or nested data in a Redux store is to treat a portion of your store as if it were a database, and keep that data in a _normalized_ form.

## <span id="designing-a-normalized-state" class="anchor enhancedAnchor_2LWZ"></span>Designing a Normalized State<a href="#designing-a-normalized-state" class="hash-link" title="Direct link to heading">#</a>

The basic concepts of normalizing data are:

- Each type of data gets its own "table" in the state.
- Each "data table" should store the individual items in an object, with the IDs of the items as keys and the items themselves as the values.
- Any references to individual items should be done by storing the item's ID.
- Arrays of IDs should be used to indicate ordering.

An example of a normalized state structure for the blog example above might look like:

<span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> posts </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> byId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"post1"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"post1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> body </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"......"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comments </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token string" style="color: #a6e22e">"comment1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment2"</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"post2"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"post2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> body </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"......"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comments </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token string" style="color: #a6e22e">"comment3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment4"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment5"</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> allIds </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token string" style="color: #a6e22e">"post1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"post2"</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comments </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> byId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment1"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"....."</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment2"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"....."</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment3"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"....."</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment4"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment4"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"....."</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment5"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment5"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> author </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> comment </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"....."</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> allIds </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token string" style="color: #a6e22e">"comment1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment4"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"comment5"</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> users </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> byId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user1"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> username </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> name </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"User 1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user2"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> username </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> name </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"User 2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user3"</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> username </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> name </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"User 3"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> allIds </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token string" style="color: #a6e22e">"user1"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user2"</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">"user3"</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>This state structure is much flatter overall. Compared to the original nested format, this is an improvement in several ways:

- Because each item is only defined in one place, we don't have to try to make changes in multiple places if that item is updated.
- The reducer logic doesn't have to deal with deep levels of nesting, so it will probably be much simpler.
- The logic for retrieving or updating a given item is now fairly simple and consistent. Given an item's type and its ID, we can directly look it up in a couple simple steps, without having to dig through other objects to find it.
- Since each data type is separated, an update like changing the text of a comment would only require new copies of the "comments &gt; byId &gt; comment" portion of the tree. This will generally mean fewer portions of the UI that need to update because their data has changed. In contrast, updating a comment in the original nested shape would have required updating the comment object, the parent post object, the array of all post objects, and likely have caused _all_ of the Post components and Comment components in the UI to re-render themselves.

Note that a normalized state structure generally implies that more components are connected and each component is responsible for looking up its own data, as opposed to a few connected components looking up large amounts of data and passing all that data downwards. As it turns out, having connected parent components simply pass item IDs to connected children is a good pattern for optimizing UI performance in a React Redux application, so keeping state normalized plays a key role in improving performance.

## <span id="organizing-normalized-data-in-state" class="anchor enhancedAnchor_2LWZ"></span>Organizing Normalized Data in State<a href="#organizing-normalized-data-in-state" class="hash-link" title="Direct link to heading">#</a>

A typical application will likely have a mixture of relational data and non-relational data. While there is no single rule for exactly how those different types of data should be organized, one common pattern is to put the relational "tables" under a common parent key, such as "entities". A state structure using this approach might look like:

<span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> simpleDomainData1</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token spread operator" style="color: #f8f8f2">...</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> simpleDomainData2</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token spread operator" style="color: #f8f8f2">...</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> entities </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> entityType1 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token spread operator" style="color: #f8f8f2">...</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> entityType2 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token spread operator" style="color: #f8f8f2">...</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> ui </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> uiSection1 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token spread operator" style="color: #f8f8f2">...</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> uiSection2 </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token spread operator" style="color: #f8f8f2">...</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>This could be expanded in a number of ways. For example, an application that does a lot of editing of entities might want to keep two sets of "tables" in the state, one for the "current" item values and one for the "work-in-progress" item values. When an item is edited, its values could be copied into the "work-in-progress" section, and any actions that update it would be applied to the "work-in-progress" copy, allowing the editing form to be controlled by that set of data while another part of the UI still refers to the original version. "Resetting" the edit form would simply require removing the item from the "work-in-progress" section and re-copying the original data from "current" to "work-in-progress", while "applying" the edits would involve copying the values from the "work-in-progress" section to the "current" section.

## <span id="relationships-and-tables" class="anchor enhancedAnchor_2LWZ"></span>Relationships and Tables<a href="#relationships-and-tables" class="hash-link" title="Direct link to heading">#</a>

Because we're treating a portion of our Redux store as a "database", many of the principles of database design also apply here as well. For example, if we have a many-to-many relationship, we can model that using an intermediate table that stores the IDs of the corresponding items (often known as a "join table" or an "associative table"). For consistency, we would probably also want to use the same `allIds` approach that we used for the actual item tables, like this:

<span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> entities</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> authors </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> byId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> allIds </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> books </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"> byId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> allIds </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> authorBook </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> byId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">1</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> authorId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">5</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> bookId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">22</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token number" style="color: #ae81ff">2</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">2</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> authorId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">5</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> bookId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">15</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token number" style="color: #ae81ff">3</span><span class="token plain"> </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> id </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">3</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> authorId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">42</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> bookId </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">12</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> allIds </span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">\[</span><span class="token number" style="color: #ae81ff">1</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">2</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token number" style="color: #ae81ff">3</span><span class="token punctuation" style="color: #f8f8f2">\]</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>Operations like "Look up all books by this author", can then be accomplished easily with a single loop over the join table. Given the typical amounts of data in a client application and the speed of Javascript engines, this kind of operation is likely to have sufficiently fast performance for most use cases.

## <span id="normalizing-nested-data" class="anchor enhancedAnchor_2LWZ"></span>Normalizing Nested Data<a href="#normalizing-nested-data" class="hash-link" title="Direct link to heading">#</a>

Because APIs frequently send back data in a nested form, that data needs to be transformed into a normalized shape before it can be included in the state tree. The [Normalizr](../../../github.com/paularmstrong/normalizr.html) library is usually used for this task. You can define schema types and relations, feed the schema and the response data to Normalizr, and it will output a normalized transformation of the response. That output can then be included in an action and used to update the store. See the Normalizr documentation for more details on its usage.

<a href="beyond-combinereducers.html" class="pagination-nav__link"></a>

« Beyond combineReducers

<a href="updating-normalized-data.html" class="pagination-nav__link"></a>

Next

Updating Normalized Data »

- <a href="#designing-a-normalized-state" class="table-of-contents__link">Designing a Normalized State</a>
- <a href="#organizing-normalized-data-in-state" class="table-of-contents__link">Organizing Normalized Data in State</a>
- <a href="#relationships-and-tables" class="table-of-contents__link">Relationships and Tables</a>
- <a href="#normalizing-nested-data" class="table-of-contents__link">Normalizing Nested Data</a>





<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" /></a>


