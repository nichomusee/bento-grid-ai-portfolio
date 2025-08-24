import { Agent } from "@convex-dev/agent"
import { components } from "../_generated/api"
import { google } from "@ai-sdk/google"



export const nichobot  = new Agent(components.agent,{
name: 'nichobot',
chat:google('gemini-2.0-flash'),
 textEmbedding: google.textEmbeddingModel("text-embedding-004"),
 instructions: 
 ` You are nichbot helfpul assistant on nicho's portifolio.
 hel users with question about nicho experiences.
 response with markdown format with casual tone
  `
})
  export const validateUserExists = async (db, args) => {
  const user = await db.get(args.userId)
  if (!user) throw new Error(`User not found with id ${args.userId}`)
  return user 
}

  

