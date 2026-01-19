# React Native Todo App with Azure Cosmos DB

A simple todo application demonstrating CRUD operations with Azure Cosmos DB JavaScript SDK in React Native.

## What This App Does

- ✅ Create, Read, Update, and Delete todos
- ☁️ Stores data in Azure Cosmos DB
- 📱 Works on Android devices


## Prerequisites

- Node.js >= 20
- Android Studio and React Native development environment
- Azure Cosmos DB account ([Create one](https://docs.microsoft.com/azure/cosmos-db/))

## Setup

### 1. Clone and Install

```bash
git clone <your-repo-url>
cd TestRN2
npm install
```

### 2. Configure Azure Cosmos DB

Edit `services/cosmosService.ts` and replace with your credentials:

```typescript
const ACCOUNT_ENDPOINT = 'https://your-account.documents.azure.com:443/';
const ACCOUNT_KEY = 'your-cosmos-db-primary-key';
```

### 3. Run the App

```bash
npm start
npm run android
```

## Project Structure

```
TestRN2/
├── App.tsx                  # Main UI
├── shim.ts                  # Polyfills
├── metro.config.js          # Metro config for Node.js modules
├── services/
   └── cosmosService.ts     # Cosmos DB operations
```
