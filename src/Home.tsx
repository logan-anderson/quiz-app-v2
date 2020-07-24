import * as React from 'react';
import { useEffect, useState } from 'react';
const API_URL = 'https://jservice.io';
interface question {
  id: number;
  answer: string;
  question: string;
  category: Category;
  category_id: number;
  value: number;
  updated_at: string;
}

const Home = () => {
  const [question, setQuestion] = useState({} as question);
  const [questions, setQuestions] = useState({} as question[]);

  const [seeSol, setSeeSol] = useState(false);
  const toggleSeeSol = () => setSeeSol(!seeSol);
  const [categories, setCategories] = useState([] as Category[]);
  const [showCat, setShowCat] = useState(false);
  const toggleShowCat = () => setShowCat(!showCat);
  const [offset, setOffset] = useState(0);
  const [category, setCategory] = useState('random');
  const [index, setIndex] = useState(0);
  const [max, setMax] = useState(100);

  useEffect(() => {
    try {
      setQuestion(questions[index]);
    } catch (e) {
      console.error(e);
    }
  }, [setQuestion, questions, index]);

  useEffect(() => {
    async function getQuestion() {
      const res =
        category === 'random'
          ? await fetch(`${API_URL}/api/random?count=100`)
          : await fetch(`${API_URL}/api/clues?category=${category}`);
      let data = await res.json();
      console.log(data);
      setQuestions(data);
    }
    getQuestion();
  }, [setQuestion, category]);

  useEffect(() => {
    async function getCategories() {
      const count = 10;
      const res = await fetch(
        `${API_URL}/api/categories?count=${count}&offset=${offset}`
      );
      const data = await res.json();
      console.log(data);
      setCategories(data);
    }
    getCategories();
  }, [offset]);
  if (!question || !question.question) {
    return <div>loading..</div>;
  }
  return (
    <div className="bg-grey-100 text-center">
      <button
        onClick={() => {
          toggleShowCat();
          setIndex(0);
        }}
        className="btn btn-blue my-8"
      >
        Choose category
      </button>
      {showCat && (
        <div>
          <ul>
            {' '}
            {categories.map(cat => {
              return (
                <li
                  key={cat.id.toString()}
                  className="hover:underline hover:bg-blue-100 cursor-pointer"
                  onClick={e => {
                    setMax(cat.clues_count);
                    setCategory(cat.id.toString());
                    setIndex(0);
                    setSeeSol(false);
                    setShowCat(false);
                  }}
                >
                  {`${cat.title} (${cat.clues_count} question available)`}
                </li>
              );
            })}
          </ul>
          <button
            className="btn btn-blue my-8"
            onClick={() => {
              if (offset > 9) {
                setOffset(offset - 10);
              }
            }}
          >
            prev
          </button>{' '}
          <button
            className="btn btn-blue my-8"
            onClick={() => {
              setOffset(offset + 10);
            }}
          >
            next
          </button>
        </div>
      )}
      <div>
        {index + 1}/{max}
      </div>
      <div>Category: {question.category.title}</div>
      <div>Value: {question.value}</div>
      <h1>Question: {question.question}</h1>
      <div
        style={{
          margin: '.5rem',
          fontSize: '.7rem',
          color: 'grey'
        }}
      >
        this question was last updated at {question.updated_at}
      </div>
      <div>
        <button
          onClick={() => {
            setSeeSol(false);
            if (index < max - 1) {
              setIndex(index + 1);
            }
          }}
          className="btn btn-blue my-8"
        >
          New question
        </button>
        <button onClick={toggleSeeSol} className="btn btn-blue my-8">
          {' '}
          {seeSol ? 'Hide the answer' : 'See the answer'}
        </button>
      </div>
      <div
        className={`${seeSol ? 'opacity-1' : 'opacity-0'}`}
        style={{
          transition: 'visibility 0s linear 0s, opacity 200ms'
        }}
      >
        {question.answer.replace(/<\/.>/gi, '')}
      </div>
    </div>
  );
};

export default Home;
