# React-Todo

## Live demo: https://react-todo-list-1.netlify.app/

- Todo List application written in React. The components allows two simple actions, to create tasks adding them to the list, to check tasks and then to delete them.
- The components include the following:
  - `<Todo />`
  - `<TodoList />`
  - `<TodoForm />`

## The date is kept in the following format:

```js
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
```

- The `task` field is the todo title that will be shown to the user.
- The `completed` field should default to `false` and will be the field that we toggle when we complete a todo.
- The `id` field is a unique `Time Stamp` that will be assigned by `Date.now()`.
