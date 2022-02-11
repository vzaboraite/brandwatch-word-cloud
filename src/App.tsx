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
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    fetch("/topics.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.topics) {
          setTopics(data.topics);
        }
      });
  }, []);

  console.log("Selected topic: ", selectedTopic);

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
                      onClick={() => setSelectedTopic(topic)}
                    >
                      {topic.label}
                    </li>
                  );
                })
              : "Loading..."}
          </ul>
        </div>

        <div className="topic-information">
          {selectedTopic !== null && (
            <>
              <h2 className="information">
                Information on topic "{selectedTopic.label}"
              </h2>
              <p className="volume">Total Mentions: {selectedTopic.volume}</p>
              <ul className="sentiment">
                <li>
                  Positive Mentions:
                  <span className="positive">
                    {selectedTopic.sentiment.positive ?? 0}
                  </span>
                </li>
                <li>
                  Neutral Mentions:
                  <span className="neutral">
                    {selectedTopic.sentiment.neutral ?? 0}
                  </span>
                </li>
                <li>
                  Negative Mentions:
                  <span className="negative">
                    {selectedTopic.sentiment.negative ?? 0}
                  </span>
                </li>
              </ul>
            </>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
