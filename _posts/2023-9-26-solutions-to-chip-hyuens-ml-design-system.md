---
layout: post
title: Solutions to ML System Design Questions by Chip Hyuen
---

1. Build a system to predict the language a text is written in.

Goal: To determine the specific or closely related language of the input text.
User experience: A website or a mobile app. Mobile apps can have camera functionality for real time language identification.
Performance constraint: it doesn't need to be perfect to provide value to users.
Data availability and collection: A dataset with 2 columns - one for text and other corresponding language
Data Preprocessing: Clean the text column -  remove stopwords, vectorising to convert text to numericals
Challenges: similar languages
Model: Text Classification and prediction model
Scaling: Add more languages

2. When you enter a search query on Google, you're shown a list of related searches. How would you generate a list of related searches for each query?
Goal: Find related relevant searches, given a query
Data availability and collection: A dataset that describes user search queries
Model:  Nearest Neighbor to find searches close to each other.