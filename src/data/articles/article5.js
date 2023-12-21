import React from "react";
import "../styles/article.css";

export function Article5() {
	return (
		<React.Fragment>
			<div className="article-content">
				<div className="paragraph qa-block">
					<div>
						<div className="question">1. Build a system to predict the language a text is written in.</div>
						<div className="answer">
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
					<div>
						<div className="question">2. When you enter a search query on Google, you're shown a list of related searches. How would you generate a list of related searches for each query? </div>
						<div className="answer">
							Goal: Find related relevant searches, given a query<br></br>
							Data availability and collection: A dataset that describes user search queries<br></br>
							Model:  Nearest Neighbor to find searches close to each other.<br></br>

						</div>
					</div>


				</div>

			</div>
		</React.Fragment>
	);
}