import React from "react";

function article_1() {
	return {
		date: "7 May 2023",
		title: "Influence of AI in gaming experience",
		description:
			"An history of AI in gaming, about how and why it matters in the future.",
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<div>
							<p>“Artificial Intelligence (AI) is the part of computer science concerned with designing intelligent computer systems, that is, systems that exhibit characteristics we associate with intelligence in human behavior — understanding language, learning, reasoning, solving problems, and so on.” (Barr & Feigenbaum, 1981)
								According to Wikipedia, in video games, artificial intelligence (AI) is used to generate responsive, adaptive or intelligent behaviors primarily in non-player characters (NPCs) similar to human-like intelligence.
								<div>Let’s understand what this means…</div>
							</p>
							<div>Artificial Intelligence, back during it’s inception( it’s still in growing stage, but you get the idea) was defined as any machine that could pass the Turing Test. That is, if a interrogator could not distinguish a machine from a human, the machine passed the Turing test.
							</div>
							<div>
								<h4>Early AI</h4>
								There are two approaches to AI, based on how you define Intelligence — symbolic reasoning and artificial neural network. Symbolic reasoning is a top-down approach, wherein you follow the path a human took to solve a particular problem; recreate it using algorithms and feed it to the machine.
								Artificial neural network(ANN) is the bottom-up approach, we feed the machine with examples with which it learns to solve a problem.
								An example of symbolic reasoning is binary search. It has a predefined sequence of steps which when implemented gives the output. And that of ANN is a baby learning to walk with multiple repetitions and failures
								Fast forward to the 2000s , AI is now broken into sub-fields :
							</div>
							<diV>
								<h4>Sub fields of AI</h4>
								Early games that had enemies, incorporated the enemy’s movements through a set of pre-defined sequence of actions. Phoenix(1980) is credited to be the first of its kind. The late 1970s to mid-1980s was the ‘golden age’ of arcade games. ‘Space Invaders’ (1978) and ‘Pac-Man’ (1980) were some of the popular games of this period. This popularity can mostly be blamed on the cheap computational and technological costs.
								Space invaders used early AI in the form of stored patterns. These simulate random movements of aliens that were pre-programmed into the game. The randomized pattern of movement was bought in by the inclusion of microprocessors.
								Pac-Man (1980) also hit the arcades bringing AI to a complex maze based game. Those Ghosts exhibit some exciting characters independent of each other. This innovative AI programming allowed these colorful creatures to exhibit different personality traits. This deceived players into thinking they’re playing against 4 individual entities.


								Photo by shark ovski on Unsplash
							</diV>
							<div>
								<h4>Recent growth</h4>
								The major advancements in Gaming introduced by AI is Mapping environments, making levels and complexities in the characters (both NPCs and enemies). All kinds of games — simulations, combat gaming, open world — have AI incorporated in some way.
								Simulation — In simulation the AI helps in human interaction and creating scenarios while trying to ignore the danger that an actual experiment might have against a simulation.
								NPCs or non-player characters — are where Game AI is used the most. These are characters in the game who act intelligently as if they were controlled by human players. These characters’ behavior is determined by artificial intelligence algorithms and engines.
								Pathfinding involves getting from one point to another. The whole gaming landscape is the most important part of pathfinding. The game AI can generate the game landscape or the game world as you go through the game world.
								Decision Making — AI will let the decisions that you make have a bigger impact on the gameplay. Since there is an enormous matrix of possibilities, the whole game world could be manipulated by your decisions.
								Data Mining — Artificial intelligence allows game designers and studios to perform data mining on player behavior to help them get an understanding of how people end up playing the game, the parts that people play the most, and what causes users to stop playing the game. This allows game developers to improve game play or identify monetization opportunities.
								Photo by Hello I'm Nik on Unsplash
							</div>
							<div>
								<h4>Cheating</h4>
								Cheats were initially included in games as a way for developers to allow players to access deviations from the traditional in-game experience. The first alleged video game cheat dates back to 1971’s Computer Space, a coin-operated arcade game. Should the player hold down the two buttons on the left while the machine boots up, they could access the game with a top score.
								The most common type of cheating used by NPCs is when the NPCs make use of information that is not available to the players in that situation. As an example, in a combat game, an NPC might be given human-like senses like seeing and hearing, but they might just cheat by checking the player’s position on the game engine. Other types of cheating include the AI system granting NPCs greater speeds to catch up with players in racing games or allowing them to re-spawn in beneficial positions in first-person games.
								Without cheating, it would be much easier for the human player to beat the system after a few attempts.
							</div>
							I hope this gives a slight insight to various application of AI in gaming throughout the years. If correctly implemented, AI can prove lucrative in gaming industry.
						</div>

					</div>
					<img
						src=""
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "AutEncoders",
		description:
			"An introduction to auto encoders with R.",
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p>
							Encoder + Decoder
							<p>
								A neural network that has been trained to develop effective representations of the input data is an autoencoder (i.e., the features). These representations, known as codings, have a straightforward notion but have a wide range of applications in dimension reduction, including anomaly detection and generative modelling.
							</p>
							<p>
								Simply put, autoencoders are employed to lessen data noise. Autoencoders enable you to reduce dimensionality and concentrate exclusively on areas of true value by compressing input data, encoding it, and then reconstructing it as an output. It is a feature extraction algorithm that helps us find a representation for our data and we can feed that representation to other algorithms.
							</p>
							<p>
								The ‘bottleneck’ is the neural network’s most crucial and smallest component. Only the most important information can pass through the bottleneck, which limits the flow of data from the encoder to the decoder.
								We may say that the bottleneck captures all of the information that an image possesses.
							</p>
							<p>
								An neural network that has an input and output of same number of nodes, and a bottleneck (hidden layer) of 3 nodes.
								image showing an AE, with a “bottleneck” of three nodes(made in canva)
								The input and output nodes in the neural network can be the same or varied in number. In general, they are made to be equal such that the features of the input and output data are the same. The input is “encoded” using the bottleneck in such a way that it may be recovered.
							</p>
							<p>
								Let’s say we have an input data of 100 features(dimension), we wish to pass it through a bottleneck of 20 dimensions. The AutoEncoder will encode the input by condensing the input to 20 dimensions. Since we have the number of output to be same as that of input, the AE will try to reconstruct the input i.e have 100 dimensions.
							</p>
							<h4>
								AutoEncoder using R
							</h4>
							<p>
								The following is the code snippet taken from article(For more information and detailed explanation of the code refer the article by Analytics Vidhya). It takes an input of 100 dimensions, encodes it into 20 dimension, and reconstructs the input.
							</p>
							<p>
								self.encoder = Sequential(
								[
								Dense(100, activation="relu"),
								Dense(20, activation="relu")
								]
								)

								self.decoder = Sequential(
								[
								Dense(100, activation="relu"),
								Dense(output_units, activation="sigmoid")
								]
								)
							</p>
						</p>
					</div>
					<img
						src=""
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "7 May 2023",
		title: "Database Connectivity in R Dashboard with MySQL. ",
		description:
			"Database Connectivity in R Dashboard with MySQL.",
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<p></p>
						Once you have created the UI of your dashboard in R, it’s time to connect to the database. There are 2 possible uses of a database:
						<p></p>
						To retrieve data to work with it.
						To store the data entered by the user through the UI, at some point(i.e. update the database from the dashboard).
						Also, if there are multiple users for the dashboard one would be using a database to store and retrieve data related to individual users. A cloud service will help in scaling your product to a larger dataset that can also handle real-time requests neatly.

						( This tutorial focuses on local MySQL database only)
						<p></p>
						Pre-requisites:
						<p></p>
						MySQL Workbench installed on the system
						Basic knowledge on querying.
						Data retrieval:
						<p></p>
						You can create a table in a database by exporting a csv, json file. Alternatively, you can use SQL queries to fill in the tables.
						<p></p>
						Here we will be using MySQL workbench, and how to connect it to the dashboard.
						<p></p>
						Create Table by exporting CSV file:
						<p></p>
						For this tutorial, I will be using a tutorial.csv. Open a new connection and create a new database db in MySQL workbench. For new users follow the steps given here to create a new database. Use this database by using this query : use db; .
						<p></p>
						Then, on the left side, click on db(below schemas), right-click over tables. Select Table Data Import Wizard. This will open a prompt asking for json, csv file location. Provide the path/to/data.csv or path/to/data.json and click next.
						<p></p>

						Select the path to your dataset, and press next.
						Then create a new table using a name you prefer. Click next until your table is created. Leave the datatype of the columns as default for now, though you can change it as you need!
						<p></p>
						Now to the main part. How to use this data into your R shiny dashboard. That is to pull the data from the database to work with it.
						<p></p>
						Import the libraries into your R program: RODBC , RMySQL
						<p></p>
						This step is for user authentication during login. In case, you need a user login page, the check_credentials() method can be used to verify the user. Let’s store these details into a new variable credentials.
						<p></p>

						Then use the function check_credentials() to validate the credentials passed.
						<p></p>

						You can take it a step further by storing this details into a credentials database, in case you have multiple users!!
						<p></p>
						Now, to actually establish a database connection use the dbConnect() method : by passing the driver, database name, server, port, user, and password. This method is defined inside the UI part of the R program.

						<p></p>
						Since we established a connection, the main task is over!!

						To query from the database, use the method dbGetQuery(). We pass the SQL query inside this method, along with the connection conn we defined above.

						<p></p>
						Here, the resulting table of the query will be stored in the variable result. We can use this variable according to the application.

						To query into the database, use the method dbExecute(). We pass the connection conn and the SQL query to this method.


						dbGetQuery runs a query and returns the records whereas dbExecute runs SQL query but does not return any records.

						The query inside the quotes will get executed and thus the database gets updated.

						Some other methods:

						dbSendQuery() sends the SQL query to the DBMS and returns a result object. The query is limited to SELECT statements. If you want to send other statements, such as INSERT, UPDATE, DELETE, etc, use dbSendStatement().
						dbClearResult() is called when you have finished retrieving data. It releases the resources associated with the result object.
						After opening a connection it is necessary to close it, we use the method dbDisconnect() : passing the connection we want to close.


						In case you face the error: Cannot allocate a new connection: 16 connections already opened, use the following function to kill all the opened connections at once. Once defined call the function killDbConnections() inside server part of the program.


						We covered the basics of how it create a table in MySQL workbench, establish a connection with database and retrieve the data using R shiny framework for creating dashboards.

						Hope this helps :)
						<p></p>
					</div>
					<img
						src=""
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_4() {
	return {
		date: "20 May 2023",
		title: "Deploying a Web Application with Docker ",
		description:
			"Deploying a Web Application with Docker: Simplify Your Deployment Process",
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">

						Introduction:
						<p>
							Deploying web applications can be a complex and time-consuming task. From managing dependencies to ensuring compatibility across different environments, the deployment process can be challenging. However, with Docker, the process has become much simpler and more efficient. In this article, we will explore how Docker can streamline the deployment of a web application, providing a consistent and reproducible environment. We will walk through the steps involved in containerizing your application, building a Docker image, and deploying it with ease. Let’s dive in!
						</p>
						Prerequisites:
						<p>
							Before we get started, make sure you have Docker installed on your machine. You can download and install Docker from the official website.
						</p>
						Project Structure:

						<pre>
							<code>
								Docker_tutorial
								|__app.py
								|__Dockerfile
								|__docker-compose.yml
								|__requirements.txt
							</code>
						</pre>

						Step 1: Containerize Your Web Application:
						To begin, we need to containerize our web application. Docker allows us to package our application and its dependencies into a self-contained unit called a container. Let’s assume we have a simple Flask web application as an example.

						Create a new directory for your project and navigate into it:
						<pre>
							<code>
								mkdir Docker_tutorial
								cd Docker_tutorial
							</code>
						</pre>
						Create a new file called `app.py` and add your Flask application code. Create a new file called `requirements.txt` and list all the Python dependencies required for your application.
						Create a new file called `Dockerfile` (without any file extension) and add the following content:


						Step 2: Build the Docker Image:
						Now that we have containerized our web application, we need to build a Docker image based on the instructions defined in the `Dockerfile`. The image will serve as a template for running our application in a container.

						Open your terminal and navigate to the project directory.
						Run the following command to build the Docker image:
						<pre>
							<code>
								docker build -t my-web-app .
							</code>
						</pre>
						This command tells Docker to build an image with the name my-web-app using the current directory(indicated by the dot) as the build context.

						Step 3: Run the Docker Container:
						With the Docker image ready, we can now run our web application in a Docker container.

						Run the following command to start a container based on the my-web-app image:
						<pre>
							<code>
								docker run -d -p 5000:5000 my-web-app
							</code>
						</pre>
						This command starts a container in detached mode (`-d`), maps port 5000 of the host to port 5000 of the container (`-p 5000:5000`), and uses the my-web-app image.

						2. Open your web browser and visit `http://localhost:5000`. You should see the resulting web application, and it should display the message “Hello, Docker!”

						Congratulations! You have successfully deployed your web application using Docker. Now, let’s explore some additional Docker commands and features that can enhance your deployment process.

						<pre>
							<code>
								Docker Commands for Managing Containers:
								- `docker ps`: Lists all running containers.
								- `docker stop : Stops a running container.
								- `docker rm : Removes a stopped container.
								- `docker logs : Displays the logs of a container.
							</code>
						</pre>

						Docker Compose for Multi-Container Applications:
						Docker Compose is a powerful tool that allows you to define and manage multi-container applications. It simplifies the process of running multiple interconnected services.

						Create a new file called `docker-compose.yml` in your project directory.
						2. Add the following content to define a service for your web application:


						3. Run the following command to start the services defined in the `docker-compose.yml` file:
						<pre>
							<code>
								docker-compose up -d
							</code>
						</pre>
						Docker Compose will build the image and start the container for your web application, just like the previous steps. However, it also provides the ability to define and manage additional services, such as databases or cache systems, as part of your application stack.
						Conclusion:
						In this article, we explored the process of deploying a web application using Docker. We containerized the application, built a Docker image, and ran it in a container. We also learned about additional Docker commands and the power of Docker Compose for managing multi-container applications.

						Docker simplifies the deployment process, ensuring consistent and reproducible environments across different platforms.

						Happy deploying with Docker!
					</div>
					<img
						src=""
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_5() {
	return {
		date: "31 July 2023",
		title: "Machine Learning System Design ",
		description:
			"Machine Learning System Design - Solutions to Chip Huyen's ML system design exercises",
		style: ``,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">
						<div>
							<h4>1. Build a system to predict the language a text is written in.</h4>
							<div>
								Goal: To determine the specific or closely related language of the input text.<br></br>
								User experience: A website or a mobile app. Mobile apps can have camera functionality for real time language identification.<br></br>
								Performance constraint: it doesn't need to be perfect to provide value to users.<br></br>
								Data availability and collection: A dataset with 2 columns - one for text and other corresponding language<br></br>
								Data Preprocessing: Clean the text column -  remove stopwords, vectorising to convert text to numericals<br></br>
								Challenges: similar languages<br></br>
								Model: Text Classification and prediction model<br></br>
								Scaling: Add more languages<br></br>
							</div>
						</div>


					</div>
					
				</div>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3, article_4, article_5];

export default myArticles;
