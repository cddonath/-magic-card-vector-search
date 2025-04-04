import weaviate, { dataType, vectorizer, WeaviateClient } from 'weaviate-client';
import dotenv from 'dotenv'; 

console.log("Loading environment variables...");

dotenv.config();

console.log("Environment variables loaded.");

// Best practice: store your credentials in environment variables
async function connectTOWEAVIATE(): Promise<void>{
try{
    console.log("Fetching environment variables...");
   const weaviateURL = process.env.WEAVIATE_URL || "";
   const weaviateAPIKEY = process.env.WEAVIATE_API_KEY || "";
   const openAIAPIKEY = process.env.OPENAI_API_KEY || "";

   //Check if API keys are present
   if (!weaviateURL || !weaviateAPIKEY || !openAIAPIKEY) {
    throw new Error("Missing required envrionment variables");
   } 
   
   console.log("Connecting to Weaviate CLoud...");
   const client = await weaviate.connectToWeaviateCloud(
    weaviateURL, // Replace with your Weaviate Cloud URL
    {
      authCredentials: new weaviate.ApiKey(weaviateAPIKEY),
      headers:{
        'X-OpenAI-API-Key': openAIAPIKEY,
      },
    }) 
    
    // Weaviate Client Object

    console.log("Checking if clinet is ready...");
    console.log("Client is ready?", await client.isReady())

    const collectionName = "your_collection-name";
    console.log('Creating collection: ${collectionName}');

    //create collection
    await client.collections.create({
        name: collectionName,
        vectorizers: vectorizer.text2VecOpenAI(),
        properties: [
            {
                name: "name",
                dataType: dataType.TEXT,
            },
            {
                name: "type",
                dataType: dataType.TEXT_ARRAY,
            },
            {
                name: "manaCost",
                dataType: dataType.TEXT,
            },
            {
                name: "rarity",
                dataType: dataType.TEXT,  
            },
            {
                name: "cardText",
                dataType: dataType.TEXT,
            },
            {
                name: "flavorText",
                dataType: dataType.TEXT,  
            },
            {
                name: "colors",
                dataType: dataType.TEXT_ARRAY,
            },
            {
                name: "legality_alchemy",
                dataType: dataType.TEXT
            },
            {
                name: "legality_brawl",
                dataType: dataType.TEXT
            },
            {
                name: "legality_duel",
                dataType: dataType.TEXT
            },
            {
                name: "legality_explorer",
                dataType: dataType.TEXT
            },
            {
                name: "legality_gladiator",
                dataType: dataType.TEXT
            },
            {
                name: "legality_historic",
                dataType: dataType.TEXT
            },
            {
                name: "legality_historicbrawl",
                dataType: dataType.TEXT
            },
            {
                name: "power",
                dataType: dataType.NUMBER,
            },
            {
                name: "toughness",
                dataType: dataType.NUMBER,
            },
            {
                name: "artist",
                dataType: dataType.TEXT,
            },
            {
                name: "url",
                dataType: dataType.TEXT,
            },
        ],
    }),

    console.log('Collection created successfully!');

} catch(error) {
    console.error('Error during collection creation or schema upload', error)
}
}
connectTOWEAVIATE();

