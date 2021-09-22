<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

-   <a href="../../introduction/getting-started.html" class="menu__link">Getting Started</a>
-   <a href="../../tutorials/essentials/part-1-overview-concepts.html" class="menu__link">Tutorial</a>
-   <a href="../../api/api-reference.html" class="menu__link">API</a>
-   <a href="../../faq.html" class="menu__link">FAQ</a>
-   <a href="../../style-guide/style-guide.html" class="menu__link">Best Practices</a>
-   <a href="../../../github.com/reduxjs/redux.html" class="menu__link">GitHub</a>
-   <a href="../../introduction/getting-started.html#help-and-discussion" class="menu__link">Need help?</a>

Menu

<span id="three-principles" class="anchor enhancedAnchor_2LWZ"></span>Three Principles<a href="#three-principles" class="hash-link" title="Direct link to heading">#</a>
========================================================================================================================================================================

Redux can be described in three fundamental principles:

### <span id="single-source-of-truth" class="anchor enhancedAnchor_2LWZ"></span>Single source of truth<a href="#single-source-of-truth" class="hash-link" title="Direct link to heading">#</a>

**The [global state](glossary.html#state) of your application is stored in an object tree within a single [store](glossary.html#store).**

This makes it easy to create universal apps, as the state from your server can be serialized and hydrated into the client with no extra coding effort. A single state tree also makes it easier to debug or inspect an application; it also enables you to persist your app’s state in development, for a faster development cycle. Some functionality which has been traditionally difficult to implement - Undo/Redo, for example - can suddenly become trivial to implement, if all of your state is stored in a single tree.

<span class="token console class-name">console</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">log</span><span class="token punctuation" style="color: #000000">(</span>store<span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">getState</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">)</span><span class="token punctuation" style="color: #000000">)</span>

<span style="display: inline-block"> </span>

<span class="token comment" style="color: #c6cad2">/\* Prints</span>

<span class="token comment" style="color: #c6cad2">{</span>

<span class="token comment" style="color: #c6cad2"> visibilityFilter: ‘SHOW\_ALL’,</span>

<span class="token comment" style="color: #c6cad2"> todos: \[</span>

<span class="token comment" style="color: #c6cad2"> {</span>

<span class="token comment" style="color: #c6cad2"> text: ‘Consider using Redux’,</span>

<span class="token comment" style="color: #c6cad2"> completed: true,</span>

<span class="token comment" style="color: #c6cad2"> },</span>

<span class="token comment" style="color: #c6cad2"> {</span>

<span class="token comment" style="color: #c6cad2"> text: ‘Keep all state in a single tree’,</span>

<span class="token comment" style="color: #c6cad2"> completed: false</span>

<span class="token comment" style="color: #c6cad2"> }</span>

<span class="token comment" style="color: #c6cad2"> \]</span>

<span class="token comment" style="color: #c6cad2">}</span>

<span class="token comment" style="color: #c6cad2">\*/</span>\#\#\# <span id="state-is-read-only" class="anchor enhancedAnchor_2LWZ"></span>State is read-only<a href="#state-is-read-only" class="hash-link" title="Direct link to heading">#</a>

**The only way to change the state is to emit an [action](glossary.html), an object describing what happened.**

This ensures that neither the views nor the network callbacks will ever write directly to the state. Instead, they express an intent to transform the state. Because all changes are centralized and happen one by one in a strict order, there are no subtle race conditions to watch out for. As actions are just plain objects, they can be logged, serialized, stored, and later replayed for debugging or testing purposes.

store<span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">dispatch</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span>

type<span class="token operator" style="color: #000000">:</span> <span class="token string" style="color: #a6e22e">‘COMPLETE\_TODO’</span><span class="token punctuation" style="color: #000000">,</span>

index<span class="token operator" style="color: #000000">:</span> <span class="token number" style="color: #ae81ff">1</span>

<span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>

<span style="display: inline-block"> </span>

store<span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">dispatch</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span>

type<span class="token operator" style="color: #000000">:</span> <span class="token string" style="color: #a6e22e">‘SET\_VISIBILITY\_FILTER’</span><span class="token punctuation" style="color: #000000">,</span>

filter<span class="token operator" style="color: #000000">:</span> <span class="token string" style="color: #a6e22e">‘SHOW\_COMPLETED’</span>

<span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>\#\#\# <span id="changes-are-made-with-pure-functions" class="anchor enhancedAnchor_2LWZ"></span>Changes are made with pure functions<a href="#changes-are-made-with-pure-functions" class="hash-link" title="Direct link to heading">#</a>

**To specify how the state tree is transformed by actions, you write pure [reducers](glossary.html#reducer).**

Reducers are just pure functions that take the previous state and an action, and return the next state. Remember to return new state objects, instead of mutating the previous state. You can start with a single reducer, and as your app grows, split it off into smaller reducers that manage specific parts of the state tree. Because reducers are just functions, you can control the order in which they are called, pass additional data, or even make reusable reducers for common tasks such as pagination.

<span class="token keyword" style="color: #f92672">function</span> <span class="token function" style="color: #e6d874">visibilityFilter</span><span class="token punctuation" style="color: #000000">(</span>state <span class="token operator" style="color: #000000">=</span> <span class="token string" style="color: #a6e22e">‘SHOW\_ALL’</span><span class="token punctuation" style="color: #000000">,</span> action<span class="token punctuation" style="color: #000000">)</span> <span class="token punctuation" style="color: #000000">{</span>

<span class="token keyword control-flow" style="color: #f92672">switch</span> <span class="token punctuation" style="color: #000000">(</span>action<span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span> <span class="token punctuation" style="color: #000000">{</span>

<span class="token keyword" style="color: #f92672">case</span> <span class="token string" style="color: #a6e22e">‘SET\_VISIBILITY\_FILTER’</span><span class="token operator" style="color: #000000">:</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> action<span class="token punctuation" style="color: #000000">.</span><span class="token property-access">filter</span>

<span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> state

<span class="token punctuation" style="color: #000000">}</span>

<span class="token punctuation" style="color: #000000">}</span>

<span style="display: inline-block"> </span>

<span class="token keyword" style="color: #f92672">function</span> <span class="token function" style="color: #e6d874">todos</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #000000">=</span><span class="token parameter"> </span><span class="token parameter punctuation" style="color: #000000">\[</span><span class="token parameter punctuation" style="color: #000000">\]</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #000000">)</span> <span class="token punctuation" style="color: #000000">{</span>

<span class="token keyword control-flow" style="color: #f92672">switch</span> <span class="token punctuation" style="color: #000000">(</span>action<span class="token punctuation" style="color: #000000">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #000000">)</span> <span class="token punctuation" style="color: #000000">{</span>

<span class="token keyword" style="color: #f92672">case</span> <span class="token string" style="color: #a6e22e">‘ADD\_TODO’</span><span class="token operator" style="color: #000000">:</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> <span class="token punctuation" style="color: #000000">\[</span>

<span class="token spread operator" style="color: #000000">…</span>state<span class="token punctuation" style="color: #000000">,</span>

<span class="token punctuation" style="color: #000000">{</span>

text<span class="token operator" style="color: #000000">:</span> action<span class="token punctuation" style="color: #000000">.</span><span class="token property-access">text</span><span class="token punctuation" style="color: #000000">,</span>

completed<span class="token operator" style="color: #000000">:</span> <span class="token boolean" style="color: #ae81ff">false</span>

<span class="token punctuation" style="color: #000000">}</span>

<span class="token punctuation" style="color: #000000">\]</span>

<span class="token keyword" style="color: #f92672">case</span> <span class="token string" style="color: #a6e22e">‘COMPLETE\_TODO’</span><span class="token operator" style="color: #000000">:</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> state<span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">map</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">(</span><span class="token parameter">todo</span><span class="token parameter punctuation" style="color: #000000">,</span><span class="token parameter"> index</span><span class="token punctuation" style="color: #000000">)</span> <span class="token arrow operator" style="color: #000000">=&gt;</span> <span class="token punctuation" style="color: #000000">{</span>

<span class="token keyword control-flow" style="color: #f92672">if</span> <span class="token punctuation" style="color: #000000">(</span>index <span class="token operator" style="color: #000000">===</span> action<span class="token punctuation" style="color: #000000">.</span><span class="token property-access">index</span><span class="token punctuation" style="color: #000000">)</span> <span class="token punctuation" style="color: #000000">{</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> <span class="token known-class-name class-name">Object</span><span class="token punctuation" style="color: #000000">.</span><span style="color: #e6d874">assign</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span><span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">,</span> todo<span class="token punctuation" style="color: #000000">,</span> <span class="token punctuation" style="color: #000000">{</span>

completed<span class="token operator" style="color: #000000">:</span> <span class="token boolean" style="color: #ae81ff">true</span>

<span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>

<span class="token punctuation" style="color: #000000">}</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> todo

<span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>

<span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #000000">:</span>

<span class="token keyword control-flow" style="color: #f92672">return</span> state

<span class="token punctuation" style="color: #000000">}</span>

<span class="token punctuation" style="color: #000000">}</span>

<span style="display: inline-block"> </span>

<span class="token keyword module" style="color: #f92672">import</span> <span class="token imports punctuation" style="color: #000000">{</span> combineReducers<span class="token imports punctuation" style="color: #000000">,</span> createStore <span class="token imports punctuation" style="color: #000000">}</span> <span class="token keyword module" style="color: #f92672">from</span> <span class="token string" style="color: #a6e22e">‘redux’</span>

<span class="token keyword" style="color: #f92672">const</span> reducer <span class="token operator" style="color: #000000">=</span> <span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #000000">(</span><span class="token punctuation" style="color: #000000">{</span> visibilityFilter<span class="token punctuation" style="color: #000000">,</span> todos <span class="token punctuation" style="color: #000000">}</span><span class="token punctuation" style="color: #000000">)</span>

<span class="token keyword" style="color: #f92672">const</span> store <span class="token operator" style="color: #000000">=</span> <span class="token function" style="color: #e6d874">createStore</span><span class="token punctuation" style="color: #000000">(</span>reducer<span class="token punctuation" style="color: #000000">)</span>That’s it! Now you know what Redux is all about.

<a href="motivation.html" class="pagination-nav__link"></a>

« Motivation

<a href="glossary.html" class="pagination-nav__link"></a>

Next

Glossary »

-   <a href="#single-source-of-truth" class="table-of-contents__link">Single source of truth</a>
-   <a href="#state-is-read-only" class="table-of-contents__link">State is read-only</a>
-   <a href="#changes-are-made-with-pure-functions" class="table-of-contents__link">Changes are made with pure functions</a>

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" />
