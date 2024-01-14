"use server";

import { db } from "@/lib/db";
import { generateAnalysis, generateImage, generateStory } from "@/lib/openai";
import { currentUser } from "@/lib/utils";
import { DreamFormValidator } from "@/lib/validators";
import { z } from "zod";

export const dreamSubmission = async (
  values: z.infer<typeof DreamFormValidator>,
) => {
  try {
    const user = await currentUser();

    if (!user) {
      return {
        error: "Unauthorized",
      };
    }

    const validatedFields = DreamFormValidator.safeParse(values);
    if (!validatedFields.success) {
      return {
        error: "Failed to validate the provided inputs.",
      };
    }

    const story = await generateStory(
      values.dream,
      values.title,
      values.context,
    );
    console.log("story:", story.content);

    if (!story.content) {
      return {
        error: "Story could not be generated.",
      };
    }

    const image = await generateImage(story.content);

    if (!image[0]) {
      return {
        error: "Image could not be generated.",
      };
    }

    const analysis = await generateAnalysis(
      validatedFields.data.dream,
      validatedFields.data.context,
    );

    if (!analysis.content) {
      return {
        error: "Analysis could not be generated.",
      };
    }

    const data = await db.story.create({
      data: {
        userId: user.id,
        title: validatedFields.data.title,
        analysis: analysis.content,
        dream: validatedFields.data.dream,
        story: story.content,
        imageUrl:
          image[0].url ||
          "https://developers.elementor.com/docs/assets/img/elementor-placeholder-image.png",
      },
    });

    return {
      data,
    };
  } catch (error) {
    console.error(error);
    return { error: "Something went wrong." };
  }
};
