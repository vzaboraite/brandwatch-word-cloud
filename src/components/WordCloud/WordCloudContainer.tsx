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
    fontSize: getFontSizeByVolume(topic),
  }));

  function handleClick(event: any, d: Word) {
    const foundTopic = topics.find((topic) => topic.label === d.text);
    if (foundTopic) {
      setSelectedTopic(foundTopic);
    }
    if (selectedTopic?.label === d.text) {
      setSelectedTopic(null);
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

  function getFontSizeByVolume(topic: Topic) {
    if (topic.volume > 100) {
      return 120;
    } else if (topic.volume > 40) {
      return 60;
    } else if (topic.volume > 20) {
      return 50;
    } else if (topic.volume > 13) {
      return 40;
    } else if (topic.volume > 8) {
      return 30;
    } else {
      return 20;
    }
  }

  return (
    <div className="word-cloud">
      <WordCloud
        font={"sans-serif"}
        data={data}
        onWordClick={handleClick}
        padding={5}
        fill={(d: Word) => (d as WordCloudData).color}
        fontSize={(d) => (d as WordCloudData).fontSize}
        rotate={0}
        random={() => salt}
      />
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
