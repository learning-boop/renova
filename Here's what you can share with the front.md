Here's what you can share with the frontend team:

  ---
  kensley Chat — Frontend Integration Spec

  Endpoint

  POST /api/chat/message
  Content-Type: application/json
  No authentication required.

  Request body

  {
    "messages": [
      { "role": "user",      "content": "What treatments do you offer?" },
      { "role": "assistant", "content": "We offer Smooth Lines, Face Sculpt..." }
    ],
    "message": "Tell me more about Face Sculpt"
  }
  - messages — the full conversation history so far (empty array [] on the very first message)
  - message — the new message the user just typed

  Response

  {
    "reply": "Face Sculpt uses dermal fillers to..."
  }

  How to manage history (localStorage)

  Key: "chat"
  Value: JSON array of { role, content } objects

  On page load:
  - Read and parse localStorage.getItem("kensley_chat") → default to []
  - Render existing messages in the UI

  When user sends a message:
  1. Read current history from localStorage
  2. POST with messages = history and message = user input
  3. On success → push { role: "user", content } and { role: "assistant", content: reply } into history
  4. Save updated history back to localStorage
  5. Render the reply in the UI
`
  To clear / reset chat:
  - localStorage.removeItem("
  That's everything the frontend team needs. Once you confirm you're happy with this design, I'll rewrite the backend chat route to match — it'll be much simpler
  than the current session/database version.

  