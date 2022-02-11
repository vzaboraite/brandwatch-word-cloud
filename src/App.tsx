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
    </div>
  );
}

export default App;
