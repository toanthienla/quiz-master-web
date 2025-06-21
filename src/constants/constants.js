export const API_BASE_URL = "http://localhost:3001";

export const QUIZ_FILE_SCHEMA = `
[
  {
    "id": "unique_quiz_id",
    "title": "Quiz Title",
    "description": "Brief description of your quiz",
    "number_of_questions": 3,
    "type": "Category",
    "questions": [
      {
        "question": "Your question text here",
        "options": {
          "A": "Option A text",
          "B": "Option B text",
          "C": "Option C text",
          "D": "Option D text"
        },
        "correct_answer": "A"
      }
      // Add more questions here by duplicating this object
    ]
  }
]
`;