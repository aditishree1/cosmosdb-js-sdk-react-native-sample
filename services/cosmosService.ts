import { CosmosClient, PartitionKeyKind, Container } from '@azure/cosmos';

// Cosmos DB Configuration
// TODO: Replace these with your Azure Cosmos DB credentials
const ACCOUNT_ENDPOINT = 'YOUR_COSMOS_DB_ENDPOINT';
const ACCOUNT_KEY = 'YOUR_COSMOS_DB_KEY';
const DATABASE_ID = 'TodoDB';
const CONTAINER_ID = 'TodoItems';

export interface Todo {
    id: string;
    text: string;
    completed: boolean;
}

let containerRef: Container | null = null;

// Initialize Cosmos DB connection
export const initCosmosDB = async (): Promise<void> => {
    console.log('🚀 Initializing Cosmos DB...');

    const client = new CosmosClient({
        endpoint: ACCOUNT_ENDPOINT,
        key: ACCOUNT_KEY,
        connectionPolicy: {
            enableEndpointDiscovery: false,
            requestTimeout: 10000,
        },
    });

    // Create database if it doesn't exist
    const { database } = await client.databases.createIfNotExists({
        id: DATABASE_ID,
    });
    console.log('✅ Database ready:', DATABASE_ID);

    // Create container if it doesn't exist
    const { container } = await database.containers.createIfNotExists({
        id: CONTAINER_ID,
        partitionKey: { kind: PartitionKeyKind.Hash, paths: ['/id'] },
    });
    console.log('✅ Container ready:', CONTAINER_ID);

    containerRef = container;
};

// Check if database is initialized
export const isInitialized = (): boolean => {
    return containerRef !== null;
};

// READ: Load all todos from Cosmos DB
export const fetchAllTodos = async (): Promise<Todo[]> => {
    if (!containerRef) {
        throw new Error('Database not initialized');
    }

    const { resources } = await containerRef.items
        .readAll<Todo>()
        .fetchAll();

    console.log('📖 Loaded todos:', resources.length);
    return resources;
};

// CREATE: Add a new todo to Cosmos DB
export const createTodo = async (text: string): Promise<Todo> => {
    if (!containerRef) {
        throw new Error('Database not initialized');
    }

    const newTodo: Todo = {
        id: Date.now().toString(),
        text: text.trim(),
        completed: false,
    };

    await containerRef.items.create(newTodo);
    console.log('✅ Todo created:', newTodo.id);

    return newTodo;
};

// UPDATE: Update a todo in Cosmos DB
export const updateTodo = async (todo: Todo): Promise<Todo> => {
    if (!containerRef) {
        throw new Error('Database not initialized');
    }

    await containerRef.item(todo.id, todo.id).replace(todo);
    console.log('✅ Todo updated:', todo.id);

    return todo;
};

// UPDATE: Toggle completion status
export const toggleTodoCompletion = async (todo: Todo): Promise<Todo> => {
    const updatedTodo = { ...todo, completed: !todo.completed };
    return updateTodo(updatedTodo);
};

// DELETE: Remove a todo from Cosmos DB
export const deleteTodo = async (id: string): Promise<void> => {
    if (!containerRef) {
        throw new Error('Database not initialized');
    }

    await containerRef.item(id, id).delete();
    console.log('✅ Todo deleted:', id);
};
