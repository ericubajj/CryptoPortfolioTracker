import { initializeDatabase } from './db'
import 'dotenv/config'

// ... other imports

async function startServer() {
  await initializeDatabase()
  // ... rest of your server setup
}

startServer().catch(error => console.error(error))