import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY!,
});

export const runtime = "edge";
// import { Configuration, OpenAIApi } from "openai-edge";

// const config = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY,
// });

// const openai = new OpenAIApi(config);

export const generateStory = async (
  dream: string,
  title: string,
  context?: string,
) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content:
          "I am a bot that generates short stories like the ones in picture books based on people's dreams. I only create and send the story back to the user and say nothing else. I will write no more than 1000 characters. The user will provide me for the title of the story.",
      },
      {
        role: "user",
        content: `Here's what I dreamt today: ${dream}. The title of the post should be: ${title}
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

export const generateAnalysis = async (dream: string, context?: string) => {
  const res = await openai.chat.completions.create({
    model: "gpt-4-1106-preview",
    messages: [
      {
        role: "system",
        content:
          "I am a bot that generates a short analysis based on the dream the user provides me with. Optionally, they also provide me with context behind the dream. My job is to read through the dream and the context and analyze any patterns or symbols in their dreams. I will also give them advice if I think they need to improve their sleep quality or way of life in any way given the provided dream and context.",
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
