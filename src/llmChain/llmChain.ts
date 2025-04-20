import dotenv from 'dotenv';
import { PromptTemplate } from '@langchain/core/prompts';
import { OpenAI } from '@langchain/openai';

dotenv.config();
//
const promptTemplate = new PromptTemplate({
  template:
    'Describe the importance of learning {course} for {role} in {wordCount} words.',
  inputVariables: ['course', 'role', 'wordCount'],
});

const formattedPrompt = await promptTemplate.format({
  course: 'generative AI',
  role: 'javascript developers',
  wordCount: 50,
});
const llm = new OpenAI();

const response = await llm.invoke(formattedPrompt);

console.log(response);
//console.log('formattedResponse', formattedPrompt);
