import { Pool } from "pg";

const pool = new Pool({
  connectionString: "postgresql://phatommobb:admin123@localhost:5432/top_users",
});

export default pool;
