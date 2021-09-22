<a href="#main" class="skipToContent_1oUP">Skip to main content</a>

Menu

<a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a><a href="../../index.html" class="navbar__brand"><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--light_3UqQ navbar__logo" /><img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m navbar__logo" /><strong>Redux</strong></a>

- <a href="basic-reducer-structure.html" class="menu__link">Basic Reducer Structure</a>
  - <a href="splitting-reducer-logic.html" class="menu__link">Splitting Reducer Logic</a>
  - <a href="refactoring-reducer-example.html" class="menu__link">Refactoring Reducers Example</a>
  - <a href="using-combinereducers.html" class="menu__link">Using combineReducers</a>
  - <a href="beyond-combinereducers.html" class="menu__link menu__link--active active">Beyond combineReducers</a>
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

- <a href="#!" class="menu__link menu__link--sublist">Style Guide</a>
  - <a href="../../style-guide/style-guide.html" class="menu__link">Style Guide: Best Practices</a>
- <a href="#!" class="menu__link menu__link--sublist">API Reference</a>
  - <a href="../../api/api-reference.html" class="menu__link">API Reference</a># <span id="beyond-combinereducers" class="anchor enhancedAnchor_2LWZ"></span>Beyond `combineReducers`<a href="#beyond-combinereducers" class="hash-link" title="Direct link to heading">#</a>

The `combineReducers` utility included with Redux is very useful, but is deliberately limited to handle a single common use case: updating a state tree that is a plain Javascript object, by delegating the work of updating each slice of state to a specific slice reducer. It does _not_ handle other use cases, such as a state tree made up of Immutable.js Maps, trying to pass other portions of the state tree as an additional argument to a slice reducer, or performing "ordering" of slice reducer calls. It also does not care how a given slice reducer does its work.

The common question, then, is "How can I use `combineReducers` to handle these other use cases?". The answer to that is simply: "you don't - you probably need to use something else". **Once you go past the core use case for `combineReducers`, it's time to use more "custom" reducer logic**, whether it be specific logic for a one-off use case, or a reusable function that could be widely shared. Here's some suggestions for dealing with a couple of these typical use cases, but feel free to come up with your own approaches.

## <span id="sharing-data-between-slice-reducers" class="anchor enhancedAnchor_2LWZ"></span>Sharing data between slice reducers<a href="#sharing-data-between-slice-reducers" class="hash-link" title="Direct link to heading">#</a>

Similarly, if `sliceReducerA` happens to need some data from `sliceReducerB`'s slice of state in order to handle a particular action, or `sliceReducerB` happens to need the entire state as an argument, `combineReducers` does not handle that itself. This could be resolved by writing a custom function that knows to pass the needed data as an additional argument in those specific cases, such as:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combinedReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'A_TYPICAL_ACTION'</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> a</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerA</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">a</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> b</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerB</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">b</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SOME_SPECIAL_ACTION'</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// specifically pass state.b as an additional argument</span><span class="token plain"></span>

<span class="token plain"> a</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerA</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">a</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">b</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> b</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerB</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">b</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'ANOTHER_SPECIAL_ACTION'</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> a</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerA</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">a</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// specifically pass the entire state as an additional argument</span><span class="token plain"></span>

<span class="token plain"> b</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerB</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">b</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>Another alternative to the "shared-slice updates" issue would be to simply put more data into the action. This is easily accomplished using thunk functions or a similar approach, per this example:

<span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">someSpecialActionCreator</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">dispatch</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> getState</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token arrow operator" style="color: #f8f8f2">=&gt;</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> state </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">getState</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> dataFromB </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">selectImportantDataFromB</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"> </span><span class="token function" style="color: #e6d874">dispatch</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> type</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SOME_SPECIAL_ACTION'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> payload</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> dataFromB</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>Because the data from B's slice is already in the action, the parent reducer doesn't have to do anything special to make that data available to `sliceReducerA`.

A third approach would be to use the reducer generated by `combineReducers` to handle the "simple" cases where each slice reducer can update itself independently, but also use another reducer to handle the "special" cases where data needs to be shared across slices. Then, a wrapping function could call both of those reducers in turn to generate the final result:

<span class="token keyword" style="color: #f92672">const</span><span class="token plain"> combinedReducer </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> a</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> sliceReducerA</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> b</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> sliceReducerB</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">crossSliceReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">switch</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">action</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">type</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">case</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'SOME_SPECIAL_ACTION'</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token comment" style="color: #c6cad2">// specifically pass state.b as an additional argument</span><span class="token plain"></span>

<span class="token plain"> a</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">handleSpecialCaseForA</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">a</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">b</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> b</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">sliceReducerB</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">.</span><span class="token property-access">b</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword module" style="color: #f92672">default</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> state</span>

<span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token plain"></span>

<span class="token plain" style="display: inline-block"> </span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">function</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">rootReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token parameter">state</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"> </span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> intermediateState </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combinedReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">state</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> finalState </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">crossSliceReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">intermediateState</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> action</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token keyword control-flow" style="color: #f92672">return</span><span class="token plain"> finalState</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span>As it turns out, there's a useful utility called [reduce-reducers](../../../github.com/redux-utilities/reduce-reducers.html) that can make that process easier. It simply takes multiple reducers and runs `reduce()` on them, passing the intermediate state values to the next reducer in line:

<span class="token comment" style="color: #c6cad2">// Same as the "manual" rootReducer above</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">reduceReducers</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain">combinedReducers</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> crossSliceReducer</span><span class="token punctuation" style="color: #f8f8f2">)</span>Note that if you use `reduceReducers`, you should make sure that the first reducer in the list is able to define the initial state, since the later reducers will generally assume that the entire state already exists and not try to provide defaults.

## <span id="further-suggestions" class="anchor enhancedAnchor_2LWZ"></span>Further Suggestions<a href="#further-suggestions" class="hash-link" title="Direct link to heading">#</a>

Again, it's important to understand that Redux reducers are _just_ functions. While `combineReducers` is useful, it's just one tool in the toolbox. Functions can contain conditional logic other than switch statements, functions can be composed to wrap each other, and functions can call other functions. Maybe you need one of your slice reducers to be able to reset its state, and to only respond to specific actions overall. You could do:

<span class="token keyword" style="color: #f92672">const</span><span class="token plain"> undoableFilteredSliceA </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">compose</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token plain"></span>

<span class="token plain"> undoReducer</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> </span><span class="token function" style="color: #e6d874">filterReducer</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token string" style="color: #a6e22e">'ACTION_1'</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"> </span><span class="token string" style="color: #a6e22e">'ACTION_2'</span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> sliceReducerA</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">)</span><span class="token plain"></span>

<span class="token plain"></span><span class="token keyword" style="color: #f92672">const</span><span class="token plain"> rootReducer </span><span class="token operator" style="color: #f8f8f2">=</span><span class="token plain"> </span><span class="token function" style="color: #e6d874">combineReducers</span><span class="token punctuation" style="color: #f8f8f2">(</span><span class="token punctuation" style="color: #f8f8f2">{</span><span class="token plain"></span>

<span class="token plain"> a</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> undoableFilteredSliceA</span><span class="token punctuation" style="color: #f8f8f2">,</span><span class="token plain"></span>

<span class="token plain"> b</span><span class="token operator" style="color: #f8f8f2">:</span><span class="token plain"> normalSliceReducerB</span>

<span class="token plain"></span><span class="token punctuation" style="color: #f8f8f2">}</span><span class="token punctuation" style="color: #f8f8f2">)</span>Note that `combineReducers` doesn't know or care that there's anything special about the reducer function that's responsible for managing `a`. We didn't need to modify `combineReducers` to specifically know how to undo things - we just built up the pieces we needed into a new composed function.

Also, while `combineReducers` is the one reducer utility function that's built into Redux, there's a wide variety of third-party reducer utilities that have published for reuse. The [Redux Addons Catalog](../../../github.com/markerikson/redux-ecosystem-links.html) lists many of the third-party utilities that are available. Or, if none of the published utilities solve your use case, you can always write a function yourself that does just exactly what you need.

<a href="using-combinereducers.html" class="pagination-nav__link"></a>

« Using combineReducers

<a href="normalizing-state-shape.html" class="pagination-nav__link"></a>

Next

Normalizing State Shape »

- <a href="#sharing-data-between-slice-reducers" class="table-of-contents__link">Sharing data between slice reducers</a>
- <a href="#further-suggestions" class="table-of-contents__link">Further Suggestions</a>

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" /></a>
