import React, { useEffect, useState } from "react";

type Topic = {
  id: string;
  label: string;
  volume: number;
  sentimentScore: number;
  sentiment: Sentiment;
};

type Sentiment = {
  negative: number;
  neutral: number;
  positive: number;
};

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);

  useEffect(() => {
    fetch("/topics.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.topics) {
          setTopics(data.topics);
        }
      });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Topics Challenge</h1>
      </header>
      <main className="two-col-grid">
        <div className="word-cloud">
          <ul className="word-cloud-list">
            {topics.length > 0
              ? topics.map((topic) => {
                  return (
                    <li
                      key={topic.id}
                      className={
                        "topic" +
                        (topic.sentimentScore > 60
                          ? " positive"
                          : topic.sentimentScore < 40
                          ? " negative"
                          : " neutral")
                      }
                    >
                      {topic.label}
                    </li>
                  );
                })
              : "Loading..."}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
