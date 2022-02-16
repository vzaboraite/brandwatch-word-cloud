import React, { useEffect, useState } from "react";
import { Topic } from "./types/types";
import WordCloudContainer from "./components/WordCloud";
import TopicInformation from "./components/TopicInformation";

function App() {
  const [topics, setTopics] = useState<Topic[]>([]);
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);

  useEffect(() => {
    fetch("./topics.json")
      .then((res) => res.json())
      .then((data) => {
        if (data.topics) {
          setTopics(data.topics);
        }
      });
  }, []);

  console.log("All topics: ", topics);
  console.log("Selected topic: ", selectedTopic);

  return (
    <div className="App">
      <header className="App-header">
        <h1>My Topics Challenge</h1>
      </header>
      <main>
        <WordCloudContainer
          topics={topics}
          setSelectedTopic={setSelectedTopic}
          selectedTopic={selectedTopic}
        />

        <TopicInformation topic={selectedTopic} />
      </main>
    </div>
  );
}

export default App;
