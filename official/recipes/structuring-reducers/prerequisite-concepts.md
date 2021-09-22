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
    -   <a href="structuring-reducers.html" class="menu__link">Structuring Reducers</a>
    -   <a href="prerequisite-concepts.html" class="menu__link menu__link--active active">Prerequisite Concepts</a>
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
    -   <a href="../../api/api-reference.html" class="menu__link">API Reference</a>\# <span id="prerequisite-reducer-concepts" class="anchor enhancedAnchor_2LWZ"></span>Prerequisite Reducer Concepts<a href="#prerequisite-reducer-concepts" class="hash-link" title="Direct link to heading">#</a>

As described in [“Redux Fundamentals” Part 3: State, Actions, and Reducers](../../tutorials/fundamentals/part-3-state-actions-reducers.html), a Redux reducer function:

-   Should have a signature of `(previousState, action) => newState`, similar to the type of function you would pass to `Date.now` or `Math.random`).
-   Does not *mutate* its arguments. If the reducer updates state, it should not *modify* the **existing** state object in-place. Instead, it should generate a **new** object containing the necessary changes. The same approach should be used for any sub-objects within state that the reducer updates.

> ##### <span id="note-on-immutability-side-effects-and-mutation" class="anchor enhancedAnchor_2LWZ"></span>Note on immutability, side effects, and mutation<a href="#note-on-immutability-side-effects-and-mutation" class="hash-link" title="Direct link to heading">#</a>
>
> Mutation is discouraged because it generally breaks time-travel debugging, and React Redux’s `connect` function:
>
> -   For time traveling, the Redux DevTools expect that replaying recorded actions would output a state value, but not change anything else. **Side effects like mutation or asynchronous behavior will cause time travel to alter behavior between steps, breaking the application**.
> -   For React Redux, `connect` checks to see if the props returned from a `mapStateToProps` function have changed in order to determine if a component needs to update. To improve performance, `connect` takes some shortcuts that rely on the state being immutable, and uses shallow reference equality checks to detect changes. This means that **changes made to objects and arrays by direct mutation will not be detected, and components will not re-render**.
>
> Other side effects like generating unique IDs or timestamps in a reducer also make the code unpredictable and harder to debug and test.

Because of these rules, it’s important that the following core concepts are fully understood before moving on to other specific techniques for organizing Redux reducers:

#### <span id="redux-reducer-basics" class="anchor enhancedAnchor_2LWZ"></span>Redux Reducer Basics<a href="#redux-reducer-basics" class="hash-link" title="Direct link to heading">#</a>

**Key concepts**:

-   Thinking in terms of state and state shape
-   Delegating update responsibility by slice of state (*reducer composition*)
-   Higher order reducers
-   Defining reducer initial state

**Reading list**:

-   [“Redux Fundamentals” Part 3: State, Actions, and Reducers](../../tutorials/fundamentals/part-3-state-actions-reducers.html)
-   [Redux Docs: Reducing Boilerplate](../reducing-boilerplate.html)
-   [Redux Docs: Implementing Undo History](../implementing-undo-history.html)
-   [Redux Docs: `combineReducers`](../../api/combinereducers.html)
-   [The Power of Higher-Order Reducers](../../../slides.com/omnidan/hor.html#/)
-   [Stack Overflow: Store initial state and `combineReducers`](../../../stackoverflow.com/questions/33749759/read-stores-initial-state-in-redux-reducer.html)
-   [Stack Overflow: State key names and `combineReducers`](../../../stackoverflow.com/questions/35667775/state-in-redux-react-app-has-a-property-with-the-name-of-the-reducer.html)

#### <span id="pure-functions-and-side-effects" class="anchor enhancedAnchor_2LWZ"></span>Pure Functions and Side Effects<a href="#pure-functions-and-side-effects" class="hash-link" title="Direct link to heading">#</a>

**Key Concepts**:

-   Side effects
-   Pure functions
-   How to think in terms of combining functions

**Reading List**:

-   [The Little Idea of Functional Programming](../../../jaysoo.ca/2016/01/13/functional-programming-little-ideas/index.html)
-   [Understanding Programmatic Side-Effects](../../../c2fo.io/c2fo/programming/2016/05/11/understanding-programmatic-side-effects/index.html)
-   [Learning Functional Programming in Javascript](../../../www.youtube.com/watchf8b8.html)
-   [An Introduction to Reasonably Pure Functional Programming](../../../www.sitepoint.com/an-introduction-to-reasonably-pure-functional-programming/index.html)

#### <span id="immutable-data-management" class="anchor enhancedAnchor_2LWZ"></span>Immutable Data Management<a href="#immutable-data-management" class="hash-link" title="Direct link to heading">#</a>

**Key Concepts**:

-   Mutability vs immutability
-   Immutably updating objects and arrays safely
-   Avoiding functions and statements that mutate state

**Reading List**:

-   [Pros and Cons of Using Immutability With React](../../../reactkungfu.com/2015/08/pros-and-cons-of-using-immutability-with-react-js/index.html)
-   [Immutable Data using ES6 and Beyond](../../../wecodetheweb.com/2016/02/12/immutable-javascript-using-es6-and-beyond/index.html)
-   [Immutable Data from Scratch](../../../ryanfunduk.com/articles/immutable-data-from-scratch/index.html)
-   [Redux Docs: Using the Object Spread Operator](../using-object-spread-operator.html)

#### <span id="normalizing-data" class="anchor enhancedAnchor_2LWZ"></span>Normalizing Data<a href="#normalizing-data" class="hash-link" title="Direct link to heading">#</a>

**Key Concepts**:

-   Database structure and organization
-   Splitting relational/nested data up into separate tables
-   Storing a single definition for a given item
-   Referring to items by IDs
-   Using objects keyed by item IDs as lookup tables, and arrays of IDs to track ordering
-   Associating items in relationships

**Reading List**:

-   [Database Normalization in Simple English](../../../www.essentialsql.com/get-ready-to-learn-sql-database-normalization-explained-in-simple-english/index.html)
-   [Idiomatic Redux: Normalizing the State Shape](../../../egghead.io/lessons/javascript-redux-normalizing-the-state-shape.html)
-   [Normalizr Documentation](../../../github.com/paularmstrong/normalizr.html)
-   [Redux Without Profanity: Normalizr](../../../tonyhb.gitbooks.io/redux-without-profanity/content/normalizer.html)
-   [Querying a Redux Store](../../../medium.com/%40adamrackis/querying-a-redux-store-37db8c7f3b0f.html)
-   [Wikipedia: Associative Entity](../../../en.wikipedia.org/wiki/Associative_entity.html)
-   [Database Design: Many-to-Many](../../../web.csulb.edu/colleges/coe/cecs/dbdesign/dbdesignac24.html?page=manymany.php)
-   [Avoiding Accidental Complexity When Structuring Your App State](../../../medium.com/hackernoon/avoiding-accidental-complexity-when-structuring-your-app-state-6e6d22ad5e2a.html)

<a href="structuring-reducers.html" class="pagination-nav__link"></a>

« Structuring Reducers

<a href="basic-reducer-structure.html" class="pagination-nav__link"></a>

Next

Basic Reducer Structure »

<img src="../../../d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" alt="Redux Logo" class="themedImage_1VuW themedImage--dark_hz6m footer__logo" />
