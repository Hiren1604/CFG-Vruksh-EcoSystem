export const AI_PROMPT = `As an expert course reviewer, analyze the following course submission in detail. Provide a comprehensive review in the following JSON format:

{
  "courseOverview": {
    "summary": "Brief overview of the course",
    "keyTopics": ["topic1", "topic2", "topic3"],
    "uniqueValue": "Main value proposition"
  },
  "contentQuality": {
    "rating": 85,
    "strengths": ["strength1", "strength2"],
    "areasForImprovement": ["area1", "area2"],
    "comprehensiveness": 90,
    "clarity": 85,
    "practicalValue": 80
  },
  "learningObjectives": {
    "alignment": 88,
    "objectives": ["objective1", "objective2"],
    "effectiveness": 85,
    "progression": 82
  },
  "targetAudience": {
    "suitability": 90,
    "difficultyLevel": "Beginner/Intermediate/Advanced",
    "prerequisites": ["prerequisite1", "prerequisite2"],
    "learnerNeeds": ["need1", "need2"]
  },
  "recommendations": {
    "content": ["recommendation1", "recommendation2"],
    "delivery": ["recommendation1", "recommendation2"],
    "resources": ["resource1", "resource2"],
    "priority": "High/Medium/Low"
  }
}

Course Details:
{description}

Contextual Information:
{contextualDescription}

Provide a thorough analysis based on the provided information. Ensure your response is in valid JSON format with the exact structure specified above. Use numerical ratings (0-100) where applicable.`; 