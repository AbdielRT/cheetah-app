const { Client } = require("pg");

async function testConnection() {
  const client = new Client({
    connectionString: process.env.DATABASE_URL,
  });

  try {
    await client.connect();
    console.log("Connection successful");
  } catch (error) {
    console.error("Connection error:", error.message);
  } finally {
    await client.end();
  }
}

testConnection();
