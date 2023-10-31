require("dotenv").config();

if (!process.env.DATABASE_URL) {
  console.error("A variável de ambiente DATABASE_URL não está definida.");
}

module.exports = {
  database: process.env.DATABASE_URL,
};
