import * as React from 'react';
import { useEffect, useState } from 'react';
const API_URL = 'https://jservice.io';

const Home = () => {
  const [question, setQuestion] = useState({
    id: 0,
    answer: '',
    question: ''
  });
  useEffect(() => {
    async function getQuestion() {
      const res = await fetch(`${API_URL}/api/random`);
      let data = await res.json();
      console.log(data);
      setQuestion(data[0]);
    }
    getQuestion();
  }, [setQuestion]);
  if (!question) {
    return <div>loading</div>;
  }
  return (
    <div className="bg-indigo-100 text-center">
      <h1>{question.question}</h1>
      <div>{question.answer}</div>
    </div>
  );
};

export default Home;
