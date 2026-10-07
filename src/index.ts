import { createTask } from "./createTask";
import { addTask, findTask } from "./tasks";
import type { Task } from "./schemas";
import { fetchTodo } from "./api";
import { TaskSchema } from "./schemas";

let tasks: Task[] = [];

tasks = addTask(tasks, "Read Chapter 1");

const task = findTask(tasks, 1);

if (task) {
  console.log(task.title);
}

const missingTask = findTask(tasks, 99);

if (missingTask) {
  console.log(missingTask.title);
} else {
  console.log("Task 99 not found.");
}

async function main() {
  const todo = await fetchTodo(1);

 console.log("Todo result:", todo);
}

main();
const valid = {
  id: 1,
  title: "Read",
  done: false,
};

const missingField = {
  id: 2,
  done: true,
};

const wrongType = {
  id: 3,
  title: "Write",
  done: "yes",
};

for (const candidate of [valid, missingField, wrongType]) {
  const result = TaskSchema.safeParse(candidate);

  console.log(
    result.success,
    result.success ? "" : result.error.issues
  );
}
console.log("\n--- createTask tests ---");

const validPayload = {
  id: 10,
  title: "Study TypeScript",
  done: false,
};

const missingFieldPayload = {
  id: 11,
  done: false,
};

const wrongTypePayload = {
  id: 12,
  title: "Study Zod",
  done: "yes",
};

for (const payload of [
  validPayload,
  missingFieldPayload,
  wrongTypePayload,
]) {
  const result = createTask(payload);

  if (result.ok) {
    console.log("Valid task:", result.task);
  } else {
    console.log("Invalid task:", result.error);
  }
}