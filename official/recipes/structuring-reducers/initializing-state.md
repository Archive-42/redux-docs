
# <span id="initializing-state" class="anchor enhancedAnchor_2LWZ"></span>Initializing State<a href="#initializing-state" class="hash-link" title="Direct link to heading">#</a>

There are two main ways to initialize state for your application. The `createStore` method can accept an optional `preloadedState` value as its second argument. Reducers can also specify an initial value by looking for an incoming state argument that is `undefined`, and returning the value they'd like to use as a default. This can either be done with an explicit check inside the reducer, or by using the ES6 default argument value syntax: `Summary# `

Without `combineReducers()` or similar manual code, `preloadedState` always wins over `state = ...` in the reducer because the `state` passed to the reducer _is_ `preloadedState` and _is not_ `undefined`, so the ES6 argument syntax doesn't apply.

With `combineReducers()` the behavior is more nuanced. Those reducers whose state is specified in `preloadedState` will receive that state. Other reducers will receive `undefined` _and because of that_ will fall back to the `state = ...` default argument they specify.

**In general, `preloadedState` wins over the state specified by the reducer. This lets reducers specify initial data that makes sense _to them_ as default arguments, but also allows loading existing data (fully or partially) when you're hydrating the store from some persistent storage or the server.**

_Note: Reducers whose initial state is populated using `preloadedState` will **still need to provide a default value** to handle when passed a `state` of `undefined`. All reducers are passed `undefined` on initialization, so they should be written such that when given `undefined`, some value should be returned. This can be any non-`undefined` value; there's no need to duplicate the section of `preloadedState` here as the default._

## <span id="in-depth" class="anchor enhancedAnchor_2LWZ"></span>In Depth<a href="#in-depth" class="hash-link" title="Direct link to heading">#</a>

### <span id="single-simple-reducer" class="anchor enhancedAnchor_2LWZ"></span>Single Simple Reducer<a href="#single-simple-reducer" class="hash-link" title="Direct link to heading">#</a>

First let's consider a case where you have a single reducer. Say you don't use `combineReducers()`.

Then your reducer might look like this:

<span  style="color: #f92672">function</span> </span><span class="token function" style="color: #e6d874">counter</span><span  style="color: #f8f8f2">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #f8f8f2">=</span><span class="token parameter"> </span><span class="token parameter number" style="color: #ae81ff">0</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span  style="color: #f8f8f2">)</span> </span><span  style="color: #f8f8f2">{</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">switch</span> </span><span  style="color: #f8f8f2">(</span>action</span><span  style="color: #f8f8f2">.</span><span class="token property-access">type</span><span  style="color: #f8f8f2">)</span> </span><span  style="color: #f8f8f2">{</span></span>

 </span><span  style="color: #f92672">case</span> </span><span class="token string" style="color: #a6e22e">'INCREMENT'</span><span class="token operator" style="color: #f8f8f2">:</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> state </span><span class="token operator" style="color: #f8f8f2">+</span> </span><span class="token number" style="color: #ae81ff">1</span></span>

 </span><span  style="color: #f92672">case</span> </span><span class="token string" style="color: #a6e22e">'DECREMENT'</span><span class="token operator" style="color: #f8f8f2">:</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> state </span><span class="token operator" style="color: #f8f8f2">-</span> </span><span class="token number" style="color: #ae81ff">1</span></span>

 </span><span  style="color: #f92672">default</span><span class="token operator" style="color: #f8f8f2">:</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> state</span>

 </span><span  style="color: #f8f8f2">}</span></span>

</span><span  style="color: #f8f8f2">}</span>Now let's say you create a store with it.

<span  style="color: #f92672">import</span> </span><span  style="color: #f8f8f2">{</span><span > createStore </span><span  style="color: #f8f8f2">}</span> </span><span  style="color: #f92672">from</span> </span><span class="token string" style="color: #a6e22e">'redux'</span></span>

</span><span  style="color: #f92672">const</span> store </span><span class="token operator" style="color: #f8f8f2">=</span> </span><span class="token function" style="color: #e6d874">createStore</span><span  style="color: #f8f8f2">(</span>counter</span><span  style="color: #f8f8f2">)</span></span>

</span><span class="token console class-name">console</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">log</span><span  style="color: #f8f8f2">(</span>store</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">getState</span><span  style="color: #f8f8f2">(</span><span  style="color: #f8f8f2">)</span><span  style="color: #f8f8f2">)</span> </span><span class="token comment" style="color: #c6cad2">// 0</span>The initial state is zero. Why? Because the second argument to `createStore` was `undefined`. This is the `state` passed to your reducer the first time. When Redux initializes it dispatches a "dummy" action to fill the state. So your `counter` reducer was called with `state` equal to `undefined`. **This is exactly the case that "activates" the default argument.** Therefore, `state` is now `0` as per the default `state` value (`0`) will be returned.

Let's consider a different scenario:

<span  style="color: #f92672">import</span> </span><span  style="color: #f8f8f2">{</span><span > createStore </span><span  style="color: #f8f8f2">}</span> </span><span  style="color: #f92672">from</span> </span><span class="token string" style="color: #a6e22e">'redux'</span></span>

</span><span  style="color: #f92672">const</span> store </span><span class="token operator" style="color: #f8f8f2">=</span> </span><span class="token function" style="color: #e6d874">createStore</span><span  style="color: #f8f8f2">(</span>counter</span><span  style="color: #f8f8f2">,</span> </span><span class="token number" style="color: #ae81ff">42</span><span  style="color: #f8f8f2">)</span></span>

</span><span class="token console class-name">console</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">log</span><span  style="color: #f8f8f2">(</span>store</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">getState</span><span  style="color: #f8f8f2">(</span><span  style="color: #f8f8f2">)</span><span  style="color: #f8f8f2">)</span> </span><span class="token comment" style="color: #c6cad2">// 42</span>Why is it `42`, and not `0`, this time? Because `createStore` was called with `42` as the second argument. This argument becomes the `state` passed to your reducer along with the dummy action. **This time, `state` is not undefined (it's `42`!), so ES6 default argument syntax has no effect.** The `state` is `42`, and `42` is returned from the reducer.

### <span id="combined-reducers" class="anchor enhancedAnchor_2LWZ"></span>Combined Reducers<a href="#combined-reducers" class="hash-link" title="Direct link to heading">#</a>

Now let's consider a case where you use `combineReducers()`. You have two reducers:

<span  style="color: #f92672">function</span> </span><span class="token function" style="color: #e6d874">a</span><span  style="color: #f8f8f2">(</span>state </span><span class="token operator" style="color: #f8f8f2">=</span> </span><span class="token string" style="color: #a6e22e">'lol'</span><span  style="color: #f8f8f2">,</span> action</span><span  style="color: #f8f8f2">)</span> </span><span  style="color: #f8f8f2">{</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> state</span>

</span><span  style="color: #f8f8f2">}</span></span>

<span style="display: inline-block"> </span>

</span><span  style="color: #f92672">function</span> </span><span class="token function" style="color: #e6d874">b</span><span  style="color: #f8f8f2">(</span>state </span><span class="token operator" style="color: #f8f8f2">=</span> </span><span class="token string" style="color: #a6e22e">'wat'</span><span  style="color: #f8f8f2">,</span> action</span><span  style="color: #f8f8f2">)</span> </span><span  style="color: #f8f8f2">{</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> state</span>

</span><span  style="color: #f8f8f2">}</span>The reducer generated by `combineReducers({ a, b })` looks like this:

<span class="token comment" style="color: #c6cad2">// const combined = combineReducers({ a, b })</span></span>

</span><span  style="color: #f92672">function</span> </span><span class="token function" style="color: #e6d874">combined</span><span  style="color: #f8f8f2">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #f8f8f2">=</span><span class="token parameter"> </span><span class="token parameter punctuation" style="color: #f8f8f2">{</span><span class="token parameter punctuation" style="color: #f8f8f2">}</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span  style="color: #f8f8f2">)</span> </span><span  style="color: #f8f8f2">{</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> </span><span  style="color: #f8f8f2">{</span></span>

 a</span><span class="token operator" style="color: #f8f8f2">:</span> </span><span class="token function" style="color: #e6d874">a</span><span  style="color: #f8f8f2">(</span>state</span><span  style="color: #f8f8f2">.</span><span class="token property-access">a</span><span  style="color: #f8f8f2">,</span> action</span><span  style="color: #f8f8f2">)</span><span  style="color: #f8f8f2">,</span></span>

 b</span><span class="token operator" style="color: #f8f8f2">:</span> </span><span class="token function" style="color: #e6d874">b</span><span  style="color: #f8f8f2">(</span>state</span><span  style="color: #f8f8f2">.</span><span class="token property-access">b</span><span  style="color: #f8f8f2">,</span> action</span><span  style="color: #f8f8f2">)</span></span>

 </span><span  style="color: #f8f8f2">}</span></span>

</span><span  style="color: #f8f8f2">}</span>If we call `createStore` without the `preloadedState`, it's going to initialize the `state` to `{}`. Therefore, `state.a` and `state.b` will be `undefined` by the time it calls `a` and `b` reducers. **Both `a` and `b` reducers will receive `undefined` as _their_ `state` arguments, and if they specify default `state` values, those will be returned.** This is how the combined reducer returns a ` `

<span  style="color: #f92672">import</span> </span><span  style="color: #f8f8f2">{</span><span > createStore </span><span  style="color: #f8f8f2">}</span> </span><span  style="color: #f92672">from</span> </span><span class="token string" style="color: #a6e22e">'redux'</span></span>

</span><span  style="color: #f92672">const</span> store </span><span class="token operator" style="color: #f8f8f2">=</span> </span><span class="token function" style="color: #e6d874">createStore</span><span  style="color: #f8f8f2">(</span>combined</span><span  style="color: #f8f8f2">)</span></span>

</span><span class="token console class-name">console</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">log</span><span  style="color: #f8f8f2">(</span>store</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">getState</span><span  style="color: #f8f8f2">(</span><span  style="color: #f8f8f2">)</span><span  style="color: #f8f8f2">)</span> </span><span class="token comment" style="color: #c6cad2">// { a: 'lol', b: 'wat' }</span>Let's consider a different scenario:

<span  style="color: #f92672">import</span> </span><span  style="color: #f8f8f2">{</span><span > createStore </span><span  style="color: #f8f8f2">}</span> </span><span  style="color: #f92672">from</span> </span><span class="token string" style="color: #a6e22e">'redux'</span></span>

</span><span  style="color: #f92672">const</span> store </span><span class="token operator" style="color: #f8f8f2">=</span> </span><span class="token function" style="color: #e6d874">createStore</span><span  style="color: #f8f8f2">(</span>combined</span><span  style="color: #f8f8f2">,</span> </span><span  style="color: #f8f8f2">{</span> a</span><span class="token operator" style="color: #f8f8f2">:</span> </span><span class="token string" style="color: #a6e22e">'horse'</span> </span><span  style="color: #f8f8f2">}</span><span  style="color: #f8f8f2">)</span></span>

</span><span class="token console class-name">console</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">log</span><span  style="color: #f8f8f2">(</span>store</span><span  style="color: #f8f8f2">.</span><span  style="color: #e6d874">getState</span><span  style="color: #f8f8f2">(</span><span  style="color: #f8f8f2">)</span><span  style="color: #f8f8f2">)</span> </span><span class="token comment" style="color: #c6cad2">// { a: 'horse', b: 'wat' }</span>Now I specified the `preloadedState` as the argument to `createStore()`. The state returned from the combined reducer _combines_ the initial state I specified for the `a` reducer with the `'wat'` default argument specified that `b` reducer chose itself.

Let's recall what the combined reducer does:

<span class="token comment" style="color: #c6cad2">// const combined = combineReducers({ a, b })</span></span>

</span><span  style="color: #f92672">function</span> </span><span class="token function" style="color: #e6d874">combined</span><span  style="color: #f8f8f2">(</span><span class="token parameter">state </span><span class="token parameter operator" style="color: #f8f8f2">=</span><span class="token parameter"> </span><span class="token parameter punctuation" style="color: #f8f8f2">{</span><span class="token parameter punctuation" style="color: #f8f8f2">}</span><span class="token parameter punctuation" style="color: #f8f8f2">,</span><span class="token parameter"> action</span><span  style="color: #f8f8f2">)</span> </span><span  style="color: #f8f8f2">{</span></span>

 </span><span class="token keyword control-flow" style="color: #f92672">return</span> </span><span  style="color: #f8f8f2">{</span></span>

 a</span><span class="token operator" style="color: #f8f8f2">:</span> </span><span class="token function" style="color: #e6d874">a</span><span  style="color: #f8f8f2">(</span>state</span><span  style="color: #f8f8f2">.</span><span class="token property-access">a</span><span  style="color: #f8f8f2">,</span> action</span><span  style="color: #f8f8f2">)</span><span  style="color: #f8f8f2">,</span></span>

 b</span><span class="token operator" style="color: #f8f8f2">:</span> </span><span class="token function" style="color: #e6d874">b</span><span  style="color: #f8f8f2">(</span>state</span><span  style="color: #f8f8f2">.</span><span class="token property-access">b</span><span  style="color: #f8f8f2">,</span> action</span><span  style="color: #f8f8f2">)</span></span>

 </span><span  style="color: #f8f8f2">}</span></span>

</span><span  style="color: #f8f8f2">}</span>In this case, `state` was specified so it didn't fall back to `{}`. It was an object with `a` field equal to `'horse'`, but without the `b` field. This is why the `a` reducer received `'horse'` as its `state` and gladly returned it, but the `b` reducer received `undefined` as its `state` and thus returned _its idea_ of the default `state` (in our example, `'wat'`). This is how we get `Recap# `

To sum this up, if you stick to Redux conventions and return the initial state from reducers when they're called with `undefined` as the `state` argument (the easiest way to implement this is to specify the `state` ES6 default argument value), you're going to have a nice useful behavior for combined reducers. **They will prefer the corresponding value in the `preloadedState` object you pass to the `createStore()` function, but if you didn't pass any, or if the corresponding field is not set, the default `state` argument specified by the reducer is chosen instead.** This approach works well because it provides both initialization and hydration of existing data, but lets individual reducers reset their state if their data was not preserved. Of course you can apply this pattern recursively, as you can use `combineReducers()` on many levels, or even compose reducers manually by calling reducers and giving them the relevant part of the state tree.

<a href="immutable-update-patterns.html" class="pagination-nav__link"></a>

« Immutable Update Patterns

<a href="../../understanding/thinking-in-redux/motivation.html" class="pagination-nav__link"></a>
Motivation »







