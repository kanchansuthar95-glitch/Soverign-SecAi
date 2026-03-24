import sqlite3
import os

class SQLiteMemory:
    """
    Persistent memory for Sovereign SecAI using SQLite.
    """
    def __init__(self):
        db_path = "data/memory.sqlite"
        if not os.path.exists("data"):
            os.makedirs("data")
        self.conn = sqlite3.connect(db_path)
        self._init_db()

    def _init_db(self):
        cursor = self.conn.cursor()
        cursor.execute("""
            CREATE TABLE IF NOT EXISTS logs (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                agent TEXT,
                message TEXT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        self.conn.commit()

    def add_log(self, agent: str, message: str):
        cursor = self.conn.cursor()
        cursor.execute("INSERT INTO logs (agent, message) VALUES (?, ?)", (agent, message))
        self.conn.commit()
