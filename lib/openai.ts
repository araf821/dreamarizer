import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

// import { Configuration, OpenAIApi } from "openai-edge";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

export const generateStory = async (dream: string, context?: string) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content:
          "I am a bot that generates short stories like the ones in picture books based on people's dreams. I only create and send the story back to the user and say nothing else. I will write no more than 1500 characters.",
      },
      {
        role: "user",
        content: `Here's what I dreamt today: ${dream}.
        Context (might be empty): ${context}`,
      },
    ],
  });

  return res.choices[0].message;
};

export const generateImage = async (story: string) => {
  const res = await openai.images.generate({
    model: "dall-e-3",
    prompt: `Generate an image based on this short story, do not generate any texts on the image, in the style of anime:
        
        ${story}`,
  });

  return res.data;
};
