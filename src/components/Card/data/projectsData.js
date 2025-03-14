// projectDetails.js
import img1 from '../../../assets/img1.jpg'
import img2 from '../../../assets/img2.jpg'
import img3 from '../../../assets/img3.png'
import img4 from '../../../assets/img4.jpg'
import img5 from '../../../assets/img5.jpg'
import img6 from '../../../assets/img6.jpg'


const projectsData = [

    {
        name: "Gen AI Scripts",
        version: "1.0.0",
        author: "Sandra Skaria",
        stack: "Gen AI, RAG",
        link: "https://github.com/ssandra102/gen_ai",
        imgsrc: img5,
        description: ["1. Resume Description Generator with Cohere : A streamlit web application with Cohere LLM support. Enter your project idea and generate descriptions for it, that can be included in your resume.",
            "2. Question answering web app with Gemini : A streamlit web application with Google's Gemini API. Enter your question idea and generate answer for it."
        ],

    },
    {
        name: "ML API",
        version: "1.0.0",
        author: "Sandra Skaria",
        stack: "Python, NLP, Scikit Learn",
        link: "https://github.com/ssandra102/Machine-Learning-API",
        imgsrc: img5,
        description: ["Flask API developed using Python Flask, to extract texts from Indian itemized receipts.",
            "The extracted text is classified into categories belonging to one of the 21 categories(see 'data' dictinonary in main.py).",
            "The cumulative sum of categorised items along with their respective category is pushed to Firebase Realtime Database.",
            "Also, the receipt image is fetched from Firebase Storage."],
    },
    {
        name: "Data Science Project",
        version: "1.0.0",
        author: "Sandra Skaria",
        stack: "Python, Sci-kit Learn, MLFlow, Dagshub",
        link: "https://github.com/ssandra102/car_sales_data_science_workflow",
        imgsrc: img6,
        description: ["An end-to-end Data Science Project.",
            "Stages : Data Ingestion, Data validation, Data Transformation, Model Training, Model Evaluation",
            "Model : Elasctic-Net Regression model for predicting car prices.",],
    },
    {
        name: "Brain Computer Interface",
        version: "1.0.0",
        author: "Sandra Skaria",
        stack: "Python, Deep Learning, Neural Networks",
        link: "https://github.com/ssandra102/EEG-Classification",
        imgsrc: img6,
        description: ["POC model for single channel EEG headset wheelchair control",
            "Contains model developed for self-recordedd single channel EEG motor task dataset.",
            "Additionaly, compares the performance with already establised models(EEGNet, Shallow-Conv, DeepConv) with respect to the complexity, temporal and spatial features, number of channels etc.",
            "Data recorded from EXG-Bio Amp pill from Upside-Down Labs, using 3 electrodes(forming a single channel)."

        ],
    },
    {
        name: "FinTrack - a cash flow app",
        version: "1.0.0",
        author: "Sandra Skaria",
        stack: "Android SDK, Firebase",
        link: "https://github.com/ssandra102/FinTrack",
        imgsrc: img5,
        description: ["Android application made in Java, for FinTrack: a cash flow management app.",
            "It has 6 pages in total.",
            "Classifying itemised bills into several broad categories to analyse and further take better financial decisions to monitor one's spending habits, specifically designed for Indian market.",
        ],
    },
    {
        name: "E-Commerce website",
        version: "1.0.0",
        author: "Sandra Skaria",
        stack: "ReactJs, Tailwind CSS, Firebase",
        link: "https://github.com/ssandra102/",
        imgsrc: img5,
        description: ["An ecommerce website for hand-craftsmen of my hometown",],
    },
    {
        name: "Desktop Cleaner - Script",
        version: "1.0.0",
        author: "Sandra Skaria",
        link: "https://github.com/ssandra102/scripts",
        stack: "Python scripting",
        imgsrc: img6,
        description: ["Python automation tool to clean and organise your PC Desktop into specified groups.",
            "Built using Python WatchDogs.",
        ],
    },

];

export default projectsData


/*
that word game
ai min max games
blogs
*/ 