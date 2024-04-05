const { OpenAI } = require('openai');
require('dotenv').config();

const openai = new OpenAI({key: process.env.OPENAI_API_KEY});

const createEmbedding = async (text) => {
    console.log('text', text);
    const embedding = await openai.embeddings.create({
        model: "text-embedding-ada-002",
        input: text,
        encoding_format: "float",
      });

  console.log('embedding', embedding.data[0].embedding)

  return embedding
}
// createEmbedding('Once upon a time, there was').then(embedding => {
//     console.log('Received embedding:', embedding, "embedding shape", embedding.data[0].embedding);
//     const embeddingArray = embedding.data[0].embedding;
//     console.log('embeddingArray', embeddingArray.length);
//   }).catch(error => {
//     console.error('Error generating embedding:', error);
//   });
module.exports = { createEmbedding }