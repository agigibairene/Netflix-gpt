import OpenAI from 'openai';

const client = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY, 
  dangerouslyAllowBrowser: true 
});

async function main(userQueryTxt) {
  const chatCompletion = await client.chat.completions.create({
    messages: [{ role: 'user', content: userQueryTxt }],
    model: 'gpt-4o',
  });
  console.log(chatCompletion.choices);
}

export default main;