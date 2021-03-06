`connectAdvanced()`
===================

    connectAdvanced(selectorFactory, connectOptions?)

Connects a React component to a Redux store. It is the base for `connect()` but is less opinionated about how to combine `state`, `props`, and `dispatch` into your final props. It makes no assumptions about defaults or memoization of results, leaving those responsibilities to the caller.

It does not modify the component class passed to it; instead, it *returns* a new, connected component class for you to use.

Most applications will not need to use this, as the default behavior in `connect` is intended to work for most use cases.

`connectAdvanced` was added in version 5.0, and `connect` was reimplemented as a specific set of parameters to `connectAdvanced`. However, [**`connectAdvanced` is now deprecated**](https://github.com/reduxjs/react-redux/issues/1236) and will eventually be removed in a future major version of React Redux.

Arguments
---------

-   `selectorFactory(dispatch, factoryOptions): selector(state, ownProps): props` (*Function*): Initializes a selector function (during each instance’s constructor). That selector function is called any time the connector component needs to compute new props, as a result of a store state change or receiving new props. The result of `selector` is expected to be a plain object, which is passed as the props to the wrapped component. If a consecutive call to `selector` returns the same object (`===`) as its previous call, the component will not be re-rendered. It’s the responsibility of `selector` to return that previous object when appropriate.

-   \[`connectOptions`\] *(Object)* If specified, further customizes the behavior of the connector.

    -   \[`getDisplayName`\] *(Function)*: computes the connector component’s displayName property relative to that of the wrapped component. Usually overridden by wrapper functions. Default value: `name => 'ConnectAdvanced('+name+')'`

    -   \[`methodName`\] *(String)*: shown in error messages. Usually overridden by wrapper functions. Default value: `'connectAdvanced'`

    -   \[`renderCountProp`\] *(String)*: if defined, a property named this value will be added to the props passed to the wrapped component. Its value will be the number of times the component has been rendered, which can be useful for tracking down unnecessary re-renders. Default value: `undefined`

    -   \[`shouldHandleStateChanges`\] *(Boolean)*: controls whether the connector component subscribes to redux store state changes. If set to false, it will only re-render when parent component re-renders. Default value: `true`

    -   \[`forwardRef`\] *(Boolean)*: If true, adding a ref to the connected wrapper component will actually return the instance of the wrapped component.

    -   Additionally, any extra options passed via `connectOptions` will be passed through to your `selectorFactory` in the `factoryOptions` argument.

<span id="connectAdvanced-returns"></span>

Returns
-------

A higher-order React component class that builds props from the store state and passes them to the wrapped component. A higher-order component is a function which accepts a component argument and returns a new component.

### Static Properties

-   `WrappedComponent` *(Component)*: The original component class passed to `connectAdvanced(...)(Component)`.

### Static Methods

All the original static methods of the component are hoisted.

Remarks
-------

-   Since `connectAdvanced` returns a higher-order component, it needs to be invoked two times. The first time with its arguments as described above, and a second time, with the component: `connectAdvanced(selectorFactory)(MyComponent)`.

-   `connectAdvanced` does not modify the passed React component. It returns a new, connected component, that you should use instead.

<span id="connectAdvanced-examples"></span>

### Examples

### Inject `todos` of a specific user depending on props, and inject `props.userId` into the action

    import * as actionCreators from './actionCreators'
    import { bindActionCreators } from 'redux'

    function selectorFactory(dispatch) {
      let ownProps = {}
      let result = {}

      const actions = bindActionCreators(actionCreators, dispatch)
      const addTodo = (text) => actions.addTodo(ownProps.userId, text)

      return (nextState, nextOwnProps) => {
        const todos = nextState.todos[nextOwnProps.userId]
        const nextResult = { ...nextOwnProps, todos, addTodo }
        ownProps = nextOwnProps
        if (!shallowEqual(result, nextResult)) result = nextResult
        return result
      }
    }
    export default connectAdvanced(selectorFactory)(TodoApp)
