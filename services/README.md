# Services Configuration

This directory contains service modules for the application.

## cosmosService.ts

Handles all Azure Cosmos DB operations including:
- Database initialization
- CRUD operations for todos
- Connection management

### Configuration

Before running the app, edit `services/cosmosService.ts` and replace the placeholder values:

```typescript
const ACCOUNT_ENDPOINT = 'https://your-account.documents.azure.com:443/';
const ACCOUNT_KEY = 'your-cosmos-db-primary-key';
const DATABASE_ID = 'TodoDB';
const CONTAINER_ID = 'TodoItems';
```

### Security Note

⚠️ Never commit your actual Cosmos DB credentials to version control!
