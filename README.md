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


# Day One: I have no idea what I am doing!  
The project I am trying to follow isn't very beginner friendly, so I am doing a lot of research via notebook LM and youtube videos to figure out a list of things.  
- First I made a weaviate account and collected both the api key and the URL.
- Next I got an API key from Open API.
- Then I created a .env file on vs code stored in my main file.
- Next I downloaded node.js  and initialized my project folder in the cmd line with the command npm init -y.
- npm stands for Node Package Manager, which is a tool that comes bundled with Node.js. It's used for managing packages (libraries) for your Node.js projects.
- init is a command that initializes a new npm package (my project).
- -y is a flag that stands for "yes". It tells npm init to accept all the default settings and automatically create the package.json file without asking you a series of questions. If you wanted to customize the project details (like name, version, description, etc.), you could run npm init without the -y flag, and it would guide you through the setup process.
- I checked my folder to see if it was initialized and sure enough it was. So i installed the weaviate client next.
# Day One Continued...  
- We are now moving into VS code(text editor) where I have opened my initialized project folder.
- I created a new file named weaviate-connect.js
- I chose typescript because Javascript is the foundational language for Node.js
- I used the format provided from https://weaviate.io/developers/wcs/manage-clusters/connect.  
- created a collection including the search criteria I was in my set.  
- when trying to import my dotenv I was having troubles. I eventually figured out that I still needed to install the dotenv package with the npm install dotenv command.
- Finished the Weacviate connect function. However when I convert to a JS file and run, i am getting DNS errors. I implemented a bunch of console.logs to show where it fails aswell.
