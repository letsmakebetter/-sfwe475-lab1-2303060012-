type Task = {
  id: number;
  title: string;
};

function addTask(tasks: Task[], title: string): Task[] {
  const newTask: Task = {
    id: tasks.length + 1,
    title,
  };

  return [...tasks, newTask];
}

function findTask(tasks: Task[], id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}

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