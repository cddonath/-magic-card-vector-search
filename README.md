# Magic: The Gathering Vector Search Engine
A magic the gathering card search tool that uses samntic similarity rather than just keywords. Easier to you for new players like myself when trying to build a deck!  

Instead of searching for exact keywords, you search for semantic similarity by comparing the vectors of your query with the vectors in the database  
Data (like text from Magic cards) is transformed into these vectors using a process involving tokenization (splitting text into smaller units) and embedding (converting tokens into numerical representations using pre-trained models)  
When you query, the same vectorization process is applied to your query, and the resulting query vector is compared to the vectors in the database to find the most similar ones.    
Technologies used will include Weaviate(built in AI and machine learning integration), OpenAI, python, node.js and next.js  
*
Prerequisites: List any necessary software (e.g., Node.js, Python, Docker (if using local Weaviate)).  
*
Cloning the Repository: Explain how to clone your GitHub repository to their local machine using git clone <repository_url>. You can find your repository URL on the main page of your repository (the green "Code" button).  
*
Setting up Weaviate: Explain the process of creating a Weaviate Cloud cluster and obtaining the necessary credentials (Weaviate URL and API key).  
*
Obtaining API Keys: Detail how to get an OpenAI API key. Emphasize the importance of not sharing these keys publicly and using an environment variables file.  
*
Installation of Dependencies: Explain how to install the required packages for your backend and frontend (e.g., using npm install for Node.js projects or pip install -r requirements.txt for Python projects, if you create a requirements.txt file).  
*
Configuration: Describe how to configure your project with the API keys and Weaviate credentials, likely by creating an .env file or a similar mechanism to load environment variables. Refer back to the concept of the .env file you used.  
*
Database Setup: Briefly mention how to create the Weaviate schema and upload the Magic: The Gathering data, potentially referencing the code you wrote for this process.  
*
Running the Application: Explain how to start your backend API and frontend (e.g., npm start or python your_api_script.py).  
