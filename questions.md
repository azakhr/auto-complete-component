* `What is the difference between Component and PureComponent?
  Give an example where it might break my app.` - PureComponent does a shallow check whether props have changed or not.
It implements shouldComponentUpdate method under the hood. During re-renders when every time objects are being
passed as a props it could affect performance
* `Context + ShouldComponentUpdate might be dangerous. Why is that?` - It can lead performance issues. If a context is changed
all other components which does not use it directly will be re-rendered. ShouldComponentUpdate can be implemented in a wrong way
and as a result will lead to have performance issues.
* `Describe 3 ways to pass information from a component to its
  PARENT.`
  1. Pass a function as a prop which has a logic to update parent state
  2. Pass a function down via Context to child components
  3. If a Redux is used - then dispatch an action
* `Give 2 ways to prevent components from re-rendering.` - Use memoization or pass components as children
* `What is a fragment and why do we need it? Give an example where it
  might break my app.` - it allows to group elements without creating a node. Since it does not create a node it
might break defined styles which works fine if some `div's` are used.
* `Give 3 examples of the HOC pattern.` - Error Boundary, Translations, Fetch Some data and pass as a prop
* `What's the difference in handling exceptions in promises,
  callbacks and async...await?`
  1. Promise has `onError` callback or `catch` method
  2. async...await should be wrapped in try..catch
  3. callbacks should have inside try..catch block
* `How many arguments does setState take and why is it async.` - 2 arguments(prev state and optionally a callback).
For performance reason. It can batch multiple set state action to optimize re-render process.
* `List the steps needed to migrate a Class to Function
  Component.` - Convert a class into a function which returns a JSX or null. If state is needed - use `useState` hook, for
handling mount/unmount/rerender life cycles - need to use `useEffect` method.
* `List a few ways styles can be used with components.` - Inline styles can be use either SCSS or CSS in JS(Styled Components)
* `How to render an HTML string coming from the server.` - need to use `dangerouslySetInnerHTML` property and pass an
object with `__html` property