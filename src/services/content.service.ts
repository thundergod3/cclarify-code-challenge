import { GenerateContentByAIPayloadType } from "src/constants/types";

const contentServices = {
  generateContentByAI: async (
    body: GenerateContentByAIPayloadType
  ): Promise<string> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(
          `Mock response for input 'I want to write a "${body?.topic}" about "${body?.keyword}"' is Test content by mock API`
        );
      }, 2000);
    });
  },
};

export default contentServices;
