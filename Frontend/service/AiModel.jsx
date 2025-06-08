import axios from 'axios';

const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent';
const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export const generateContent = async (prompt) => {
  if (!GEMINI_API_KEY) {
    throw new Error('Gemini API key is not configured. Please add VITE_GEMINI_API_KEY to your .env file');
  }

  try {
    console.log('Sending prompt to Gemini:', prompt);
    
    const response = await axios.post(
      `${GEMINI_API_URL}?key=${GEMINI_API_KEY}`,
      {
        contents: [{
          parts: [{
            text: `You are a travel planning assistant. Generate travel plans in JSON format only. Here is the request: ${prompt}`
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 2048,
        }
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
    );

    console.log('Raw Gemini Response:', response.data);

    if (response.data?.candidates?.[0]?.content?.parts?.[0]?.text) {
      try {
        const responseText = response.data.candidates[0].content.parts[0].text;
        console.log('Response Text:', responseText);
        
        // Extract JSON from the response (in case there's any additional text)
        const jsonMatch = responseText.match(/\{[\s\S]*\}/);
        if (jsonMatch) {
          const parsedJson = JSON.parse(jsonMatch[0]);
          console.log('Parsed JSON:', parsedJson);
          return parsedJson;
        }
        throw new Error('No JSON found in the response');
      } catch (e) {
        console.error('Error parsing AI response:', e);
        throw new Error('Invalid response format from AI');
      }
    }
    
    throw new Error('No data received from AI service');
  } catch (error) {
    console.error('Error in generateContent:', error);
    throw error;
  }
}; 