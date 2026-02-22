import { modelsType } from "./types";

export const models: modelsType[] = [
  {
    chef: "OpenAI",
    id: "gpt",
    names: ["GPT-4o", "GPT-4o Mini", "o1", "o1 Mini"],
  },
  {
    chef: "Anthropic",
    id: "claude",
    names: [
      "Claude 4 Opus",
      "Claude 4 Sonnet",
      "Claude 3.5 Sonnet",
      "Claude 3.5 Haiku",
    ],
  },
  {
    chef: "Google",
    id: "gemini-2.0-flash-exp",
    names: ["Gemini 2.0 Flash", "Gemini 1.5 Pro", "Gemini 1.5 Flash"],
  },
  {
    chef: "Meta",
    id: "llama-3.3-70b",
    names: ["Llama 3.3 70B", "Llama 3.1 405B", "Llama 3.1 70B", "Llama 3.1 8B"],
  },
  {
    chef: "DeepSeek",
    id: "deepseek-r1",
    names: ["DeepSeek R1", "DeepSeek V3", "DeepSeek Coder V2"],
  },
  {
    chef: "Mistral AI",
    id: "mistral-large",
    names: ["Mistral Large", "Mistral Small"],
  },
];