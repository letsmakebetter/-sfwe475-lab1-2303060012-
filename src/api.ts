import { TaskSchema } from "./schemas";

export async function fetchTodo(id: number) {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos/${id}`
    );

    if (!response.ok) {
      return null;
    }

    const data: unknown = await response.json();

    const result = TaskSchema.safeParse(data);

    if (!result.success) {
      return null;
    }

    return result.data;
  } catch {
    return null;
  }
}