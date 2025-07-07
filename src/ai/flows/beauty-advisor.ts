'use server';

/**
 * @fileOverview Provides personalized product recommendations based on user queries about skin type, concerns, or desired makeup look.
 *
 * - getBeautyRecommendations - A function that handles the beauty recommendations process.
 * - BeautyAdvisorInput - The input type for the getBeautyRecommendations function.
 * - BeautyAdvisorOutput - The return type for the getBeautyRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const BeautyAdvisorInputSchema = z.object({
  query: z.string().describe('The user query about skin type, concerns, or desired makeup look.'),
});
export type BeautyAdvisorInput = z.infer<typeof BeautyAdvisorInputSchema>;

const BeautyAdvisorOutputSchema = z.object({
  recommendations: z.array(
    z.object({
      productName: z.string().describe('The name of the recommended product.'),
      description: z.string().describe('A brief description of why this product is recommended.'),
    })
  ).describe('A list of personalized product recommendations.'),
});
export type BeautyAdvisorOutput = z.infer<typeof BeautyAdvisorOutputSchema>;

export async function getBeautyRecommendations(input: BeautyAdvisorInput): Promise<BeautyAdvisorOutput> {
  return beautyAdvisorFlow(input);
}

const prompt = ai.definePrompt({
  name: 'beautyAdvisorPrompt',
  input: {schema: BeautyAdvisorInputSchema},
  output: {schema: BeautyAdvisorOutputSchema},
  prompt: `You are a beauty advisor specializing in providing personalized product recommendations.

  Based on the user's query, provide a list of product recommendations with a brief description of why each product is recommended.

  User Query: {{{query}}}

  Format your response as a JSON object with a 'recommendations' field. Each object in the array should have 'productName' and 'description' fields.
  `,config: {
    safetySettings: [
      {
        category: 'HARM_CATEGORY_HATE_SPEECH',
        threshold: 'BLOCK_ONLY_HIGH',
      },
      {
        category: 'HARM_CATEGORY_DANGEROUS_CONTENT',
        threshold: 'BLOCK_NONE',
      },
      {
        category: 'HARM_CATEGORY_HARASSMENT',
        threshold: 'BLOCK_MEDIUM_AND_ABOVE',
      },
      {
        category: 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        threshold: 'BLOCK_LOW_AND_ABOVE',
      },
    ],
  },
});

const beautyAdvisorFlow = ai.defineFlow(
  {
    name: 'beautyAdvisorFlow',
    inputSchema: BeautyAdvisorInputSchema,
    outputSchema: BeautyAdvisorOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
