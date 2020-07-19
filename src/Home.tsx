import * as React from 'react';
import { useEffect, useState } from 'react';
const API_URL = 'https://jservice.io';

const Home = () => {
  const [question, setQuestion] = useState({
    id: 0,
    answer: '',
    question: ''
  });
  const [seeSol, setSeeSol] = useState(false);
  const toggleSeeSol = () => setSeeSol(!seeSol);
  const [total, setTotal] = useState(0);
  const [categories, setCategories] = useState([] as Category[]);
  const [showCat, setShowCat] = useState(false);
  const toggleShowCat = () => setShowCat(!showCat);
  const [offset, setOffset] = useState(0);
  const [category, setCategory] = useState('random');

  useEffect(() => {
    async function getQuestion() {
      const res =
        category === 'random'
          ? await fetch(`${API_URL}/api/random`)
          : await fetch(`${API_URL}/api/clues?category:${category}`);
      let data = await res.json();
      const max = category === 'random' ? 0 : 10;
      console.log(data);
      setQuestion(data[Math.floor(Math.random() * max)]);
    }
    getQuestion();
  }, [setQuestion, total, category]);

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
      <button onClick={toggleShowCat} className="btn btn-blue my-8">
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
                    setCategory(cat.id.toString());
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

      <h1>Question: {question.question}</h1>
      <div>
        <button
          onClick={() => {
            setSeeSol(false);
            return setTotal(total + 1);
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
