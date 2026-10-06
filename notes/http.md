# HTTP Inspection

## Request: /todos/1

| Question | Your answer |
|---|---|
| Method | GET |
| Status code | 304 Not Modified |
| Content-Type response header | application/json; charset=utf-8 |
| What is in the body? | A JSON todo object containing userId, id, title, and completed. |

## Invalid request: /todos/99999

The response returned 404 Not Found. The 4xx status-code family means that the client request could not be fulfilled, commonly because the requested resource does not exist.

## URL parts

- Scheme: https
- Host: jsonplaceholder.typicode.com
- Path: /todos/99999