import React, { useState } from "react";
import WordCloud from "react-d3-cloud";
import { Topic, WordCloudData } from "../../types/types";
import { Word } from "d3-cloud";

type WordCloudProps = {
  topics: Topic[];
  setSelectedTopic: (topic: Topic | null) => void;
  selectedTopic: Topic | null;
};

function WordCloudContainer({
  topics,
  setSelectedTopic,
  selectedTopic,
}: WordCloudProps) {
  const [salt] = useState<number>(Math.random());

  const data = topics.map((topic) => ({
    text: topic.label,
    value: topic.volume,
    color: topic === selectedTopic ? "blue" : getColorBySentimentScore(topic),
  }));
  console.log({ data });

  function handleClick(event: any, d: Word) {
    const foundTopic = topics.find((topic) => topic.label === d.text);
    if (foundTopic) {
      setSelectedTopic(foundTopic);
    }
  }

  function getColorBySentimentScore(topic: Topic) {
    if (topic.sentimentScore > 60) {
      return "green";
    } else if (topic.sentimentScore < 40) {
      return "red";
    } else {
      return "grey";
    }
  }


  return (
    <div className="word-cloud">
      <WordCloud
        data={data}
        onWordClick={handleClick}
        fill={(d) => (d as WordCloudData).color}
        rotate={0}
        random={() => salt}
      />
      {/* <WordCloudList topics={topics} setSelectedTopic={setSelectedTopic} /> */}
    </div>
  );
}

/**
 * Here using React.memo to prevent WordCloudContainer component from re-rendering
 * if the props haven't been changed.
 *
 * Resource => https://reactjs.org/docs/react-api.html#reactmemo
 */

export default React.memo(WordCloudContainer);
