import React from "react";
import "./styles/article.css";
import { Article1 } from "./articles/article1.js";
import { Article2 } from "./articles/article2.js";
import { Article3 } from "./articles/article3.js";
import { Article4 } from "./articles/article4.js";
import { Article5 } from "./articles/article5.js";

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
		body: (<Article1 />) ,
	};
}

function article_2() {
	return {
		date: "7 May 2023",
		title: "AutEncoders",
		description:
			"An introduction to auto encoders with R.",
		style: ``,
		body: (<Article2 />),
	};
}

function article_3() {
	return {
		date: "7 May 2023",
		title: "Database Connectivity in R Dashboard with MySQL. ",
		description:
			"Database Connectivity in R Dashboard with MySQL.",
		style: ``,
		body: (<Article3 />	),
	};
}

function article_4() {
	return {
		date: "20 May 2023",
		title: "Deploying a Web Application with Docker ",
		description:
			"Deploying a Web Application with Docker: Simplify Your Deployment Process",
		style: ``,
		body: (<Article4 />),
	};
}

function article_5() {
	return {
		date: "31 July 2023",
		title: "Machine Learning System Design ",
		description:
			"Machine Learning System Design - Solutions to Chip Huyen's ML system design exercises",
		style: ``,
		body: (<Article5 />	),
	};
}

const myArticles = [article_1, article_2, article_4, article_5];

export default myArticles;
