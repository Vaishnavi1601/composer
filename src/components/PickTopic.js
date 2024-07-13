import React, {useState} from "react";
import Button from "@mui/material/Button";
import '../styles/InputBox.css';

export default function Picktopic(){

  const [randomTopic, setrandomTopic] = useState("");

  const topics = [
    "The Future of Space Exploration",
    "Impact of Social Media on Mental Health",
    "Sustainable Fashion Practices",
    "Artificial Intelligence in Healthcare",
    "Cultural Diversity in Education",
    "Urban Gardening and Its Benefits",
    "History and Evolution of Video Games",
    "Ethical Dilemmas in Technology",
    "Renewable Energy Solutions",
    "Modern Approaches to Meditation and Mindfulness",
    "The Psychology of Decision Making",
    "Wildlife Conservation Efforts",
    "Cryptocurrency and Blockchain Technology",
    "Evolution of Language",
    "Challenges of Remote Work",
    "The Role of Music in Society",
    "Benefits of Intermittent Fasting",
    "Mental Health Stigma",
    "Universal Basic Income",
    "Psychological Effects of Climate Change",
    "Impact of Artificial Intelligence on Job Market",
    "Advancements in Virtual Reality Technology",
    "Health Benefits of Plant-Based Diets",
    "Effects of Automation on Society",
    "Cultural Impact of Streaming Services",
    "Future of Work in a Post-Pandemic World",
    "Bioethics in Genetic Engineering",
    "Education Reform in the Digital Age"
  ];

  const handleGenerateRandomTopic = () =>{
    const randomIndex = Math.floor(Math.random() * topics.length);
    const selectedTopic = topics[randomIndex];
    setrandomTopic(selectedTopic);
  }
  return(
    <>
    <p className="time">{randomTopic}</p>
    <Button className="customButton" onClick={handleGenerateRandomTopic}> Click me to Get Topic !!!</Button>
    </>
  )
}



