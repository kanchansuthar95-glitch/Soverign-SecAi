import json
import os

class SkillEngine:
    """
    Manages the library of reusable AI skills.
    """
    def __init__(self):
        self.library_path = "backend/learning/skill_library.json"
        self.skills = self._load_skills()

    def _load_skills(self):
        if not os.path.exists(self.library_path):
            return {}
        with open(self.library_path, "r") as f:
            return json.load(f)

    def get_skill(self, skill_id: str):
        return self.skills.get(skill_id)
