interface Todo {
    "id": string,
    "done": boolean,
    "title": string,
    "createdAt": string,
    "updatedAt": string
}

const FILE_PATH = "./db/todos.json";

export async function getAll(): Promise<void> {
    const data = await Deno.readFile(FILE_PATH);
    const decorder = new TextDecoder();
    return JSON.parse(decorder.decode(data));
}