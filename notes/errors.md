# TypeScript Strict Mode Errors

## Error 1 — tasks has implicit any[] type

The variable `tasks` is initialized with an empty array:

let tasks = [];

Because the array has no elements, TypeScript cannot determine what type of values it should contain. With strict mode enabled, TypeScript does not allow this implicit any[] type.

The fix is to explicitly define the array as Task[].

---

## Error 2 — tasks is implicitly any[]

This error is caused by the same problem as Error 1. Since TypeScript cannot determine the type of the `tasks` array, using it as an argument to addTask also produces an implicit any[] error.

Typing the tasks variable as Task[] fixes this error.

---

## Error 3 — title has an implicit any type

The title parameter in addTask does not have a type:

function addTask(tasks: Task[], title): Task[]

With strict mode enabled, TypeScript rejects parameters whose type cannot be determined automatically.

The title parameter should be explicitly typed as string.

---

## Error 4 — done is a string instead of a boolean

The Task type defines done as:

done: boolean;

However, the object uses:

done: "false"

"false" is a string, not a boolean. TypeScript therefore reports a type mismatch.

The correct boolean value is false without quotation marks.

---

## Error 5 — done property type mismatch

The returned object must satisfy the Task type. The Task type requires done to be a boolean, but "false" is a string.

This is another consequence of assigning a string to a boolean property.

---

## Error 6 — find() can return undefined

The Array.find() method does not guarantee that an element will be found.

It can return either:

Task

or:

undefined

The function currently promises to return only Task, so TypeScript rejects the code.

The function's return type must account for the possibility that no task was found, and the caller must handle that case safely.

---

## Error 7 — dueDate can be undefined

The Task type declares dueDate as optional:

dueDate?: string;

This means its actual type can be:

string | undefined

new Date() cannot safely receive undefined. The code must first check that dueDate exists before passing it to new Date().