**JavaScript doesn't stop the whole program.
 ***The async function waits until fetch is done; meanwhile, the event loop can run other stuff.



 > tsx src/index.ts

Read Chapter 1
Task 99 not found.
Todo result: null

C:\Users\burak\Desktop\-sfwe475-lab1-2303060012->npm run start

> -sfwe475-lab1-2303060012-@1.0.0 start
> tsx src/index.ts

Read Chapter 1
Task 99 not found.
Todo result: { userId: 1, id: 1, title: 'delectus aut autem', completed: false }

C:\Users\burak\Desktop\-sfwe475-lab1-2303060012->
STRAND2
** Runtime vs Compile-Time

TypeScript assumed that the return type of the fetchTodo function was Task, but it didn't check the actual data coming over HTTP at runtime. That's why the typecheck didn't give any errors. Since the real data didn't have the `done` field from the Task type, `todo.done` became undefined while the program was running. This shows that TypeScript types alone don't validate externally received data.
***Zod safeParse results

The `missingField` object caused an error on the `title` field because it wasn’t there. The schema expects a string here, but the value came in as undefined.

The `wrongType` object has the `done` field, but the value was sent as a string. Since the schema expects a boolean, Zod threw an `invalid_type` error.


> tsx src/index.ts

Read Chapter 1
Task 99 not found.
true 
false [
  {
    expected: 'string',
    code: 'invalid_type',
    path: [ 'title' ],
    message: 'Invalid input: expected string, received undefined'
  }
]
false [
  {
    expected: 'boolean',
    code: 'invalid_type',
    path: [ 'done' ],
    message: 'Invalid input: expected boolean, received string'
  }
]
Todo done: undefined
***STRAND 4 — Boundary Validation

External data is represented as `unknown` because its structure cannot be trusted before validation. Using `Task` directly would assume that the external data already matches our internal model, which was the problem demonstrated in Strand 2.

`createTask` uses `safeParse` because invalid external input should produce a controlled error result instead of throwing an exception. The same validation approach is used in `fetchTodo` so that JSON received from the API is validated before being treated as a Task.
## STRAND 4 — Boundary Validation

External data is represented as `unknown` because its structure cannot be trusted before validation. Using `Task` directly would assume that the external data already matches our internal model, which was the problem demonstrated in Strand 2.

`createTask` uses `safeParse` because invalid external input should produce a controlled error result instead of throwing an exception. The same validation approach is used in `fetchTodo` so that JSON received from the API is validated before being treated as a Task.