import OpenAI from 'openai';

const openai = new OpenAI({
  dangerouslyAllowBrowser: true,
  apiKey: import.meta.env.VITE_OPENAI_API_KEY
});

export async function getResponse(data: any) {
  console.log('API', data)
  
  const chatCompletion = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    messages: [
      {
          role: 'system',
          content: 'You are a helpful assistant'
      },
      {
          role: data.role,
          content: data.content
      }
    ]
  });
  return console.log(chatCompletion)
}
