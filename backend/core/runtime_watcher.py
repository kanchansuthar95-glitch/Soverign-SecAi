import psutil
import logging

class RuntimeWatcher:
    """
    Monitors system resources and performs cleanup.
    """
    def __init__(self):
        self.logger = logging.getLogger("runtime_watcher")

    def check_health(self):
        cpu = psutil.cpu_percent()
        memory = psutil.virtual_memory().percent
        self.logger.info(f"System Health - CPU: {cpu}%, Memory: {memory}%")
        return {"cpu": cpu, "memory": memory}
