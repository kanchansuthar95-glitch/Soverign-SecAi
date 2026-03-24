class SpeechToText:
    """
    Converts user voice input to text.
    In a real scenario, this would use Whisper or Google Speech-to-Text.
    """
    def __init__(self):
        pass

    async def transcribe(self, audio_data: bytes) -> str:
        # Simulated transcription
        return "Simulated transcription of audio data."

stt = SpeechToText()
