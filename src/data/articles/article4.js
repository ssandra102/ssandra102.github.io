import React from "react";
import "../styles/article.css";

export function Article4() {
	return (
		<React.Fragment>
			<div className="article-content">
				<div className="paragraph">

					<h3>Introduction:</h3>
					<p className="indented-paragraph">
						Deploying web applications can be a complex and time-consuming task. From managing dependencies to ensuring compatibility across different environments, the deployment process can be challenging. However, with Docker, the process has become much simpler and more efficient. In this article, we will explore how Docker can streamline the deployment of a web application, providing a consistent and reproducible environment. We will walk through the steps involved in containerizing your application, building a Docker image, and deploying it with ease. Let’s dive in!
					</p >
					<p className="note-highlight">
						Prerequisites:
						<br></br>
						Before we get started, make sure you have Docker installed on your machine. You can download and install Docker from the official website.
					</p>

					<h3>
						Project Structure:
					</h3>
					<pre>
						<code className="code-block">
							Docker_tutorial<br></br>
							|__app.py<br></br>
							|__Dockerfile<br></br>
							|__docker-compose.yml<br></br>
							|__requirements.txt<br></br>
						</code>
					</pre>

					<h3>Step 1: Containerize Your Web Application:</h3>
					To begin, we need to containerize our web application. Docker allows us to package our application and its dependencies into a self-contained unit called a container. Let’s assume we have a simple Flask web application as an example.
					<br></br>
					Create a new directory for your project and navigate into it:
					<pre>
						<code className="code-block">
							mkdir Docker_tutorial<br></br>
							cd Docker_tutorial<br></br>
						</code>
					</pre>
					Create a new file called `app.py` and add your Flask application code. Create a new file called `requirements.txt` and list all the Python dependencies required for your application.
					Create a new file called `Dockerfile` (without any file extension) and add the following content:

					<br></br>
					<h3>Step 2: Build the Docker Image:</h3>
					Now that we have containerized our web application, we need to build a Docker image based on the instructions defined in the `Dockerfile`. The image will serve as a template for running our application in a container.
					<br></br>
					Open your terminal and navigate to the project directory.
					Run the following command to build the Docker image:
					<pre>
						<code className="code-block">
							docker build -t my-web-app . <br></br>
						</code>
					</pre>
					This command tells Docker to build an image with the name my-web-app using the current directory(indicated by the dot) as the build context.

					<h3>Step 3: Run the Docker Container:</h3>
					With the Docker image ready, we can now run our web application in a Docker container.
					<br></br>
					1. Run the following command to start a container based on the my-web-app image:
					<pre>
						<code className="code-block">
							docker run -d -p 5000:5000 my-web-app<br></br>
						</code>
					</pre>
					This command starts a container in detached mode (`-d`), maps port 5000 of the host to port 5000 of the container (`-p 5000:5000`), and uses the my-web-app image.
					<br></br>
					2. Open your web browser and visit `http://localhost:5000`. You should see the resulting web application, and it should display the message “Hello, Docker!”
					<br></br>
					<br></br>
					Congratulations! You have successfully deployed your web application using Docker. Now, let’s explore some additional Docker commands and features that can enhance your deployment process.

					<pre>
						<code className="code-block">
							Docker Commands for Managing Containers:<br></br>
							- `docker ps`: Lists all running containers.<br></br>
							- `docker stop : Stops a running container.<br></br>
							- `docker rm : Removes a stopped container.<br></br>
							- `docker logs : Displays the logs of a container.<br></br>
						</code>
					</pre>

					<h3>Docker Compose for Multi-Container Applications:</h3>
					Docker Compose is a powerful tool that allows you to define and manage multi-container applications. It simplifies the process of running multiple interconnected services.
					<br></br>
					1.Create a new file called `docker-compose.yml` in your project directory.<br></br>
					2. Add the following content to define a service for your web application:<br></br>


					3. Run the following command to start the services defined in the `docker-compose.yml` file:
					<pre>
						<code className="code-block">
							docker-compose up -d<br></br>
						</code>
					</pre>
					Docker Compose will build the image and start the container for your web application, just like the previous steps. However, it also provides the ability to define and manage additional services, such as databases or cache systems, as part of your application stack.
					<br></br>
					<h3>Conclusion:</h3>
					In this article, we explored the process of deploying a web application using Docker. We containerized the application, built a Docker image, and ran it in a container. We also learned about additional Docker commands and the power of Docker Compose for managing multi-container applications.

					Docker simplifies the deployment process, ensuring consistent and reproducible environments across different platforms.
					<br></br>
					<br></br>
					Happy deploying with Docker !!
				</div>
				{/* <img
						src=""
						alt="random"
						className="randImage"
					/> */}
			</div>
		</React.Fragment>
	);
}