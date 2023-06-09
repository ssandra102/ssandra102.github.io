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
					<div className="paragraph">Content of article 1</div>
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
					<div className="paragraph">Content of article 2</div>
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
					<div className="paragraph">Content of article 2</div>
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
					<div className="paragraph">Content of article 4</div>
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

const myArticles = [article_1, article_2, article_3, article_4];

export default myArticles;
