export const AI_PROMPT = `Please analyze the following course submission and provide a detailed review report in JSON format. Include:
1. Course Overview
2. Content Quality Assessment
3. Learning Objectives Alignment
4. Target Audience Suitability
5. Recommendations for Improvement

Course Details:
{description}

Contextual Information:
{contextualDescription}

Please format the response as a JSON object with these sections.`;