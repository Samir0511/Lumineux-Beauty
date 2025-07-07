'use server';

import { getBeautyRecommendations, type BeautyAdvisorOutput } from '@/ai/flows/beauty-advisor';

type AIResponse = {
  success: boolean;
  data?: BeautyAdvisorOutput;
  error?: string;
}

export async function getAIRecommendations(query: string): Promise<AIResponse> {
  if (!query) {
    return { success: false, error: 'Query cannot be empty.' };
  }

  try {
    const result = await getBeautyRecommendations({ query });
    return { success: true, data: result };
  } catch (error) {
    console.error("AI recommendation error:", error);
    return { success: false, error: 'I am sorry, but I was unable to get a recommendation for you. Please try again later.' };
  }
}
