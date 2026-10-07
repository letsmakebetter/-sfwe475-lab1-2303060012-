# Reflection

## 1. Why does `await` pause only the containing function, not the whole program?

`await` pauses the execution of the async function until the Promise settles. It does not block the JavaScript event loop, so other asynchronous work can continue while the operation is waiting.

## 2. Why didn't TypeScript complain about the dishonest `Task` return type?

TypeScript checks the types declared in the source code at compile time, but it does not validate the actual JSON received from an HTTP request at runtime. Therefore, declaring `Promise<Task | null>` did not prove that the API response was actually a valid Task.

## 3. What is the difference between `parse` and `safeParse`, and why does `createTask` use `safeParse`?

`parse` returns the validated data when validation succeeds but throws an error when validation fails. `safeParse` returns a result object containing either the validated data or validation errors, so `createTask` can handle invalid external input without throwing an exception.