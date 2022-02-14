import { useCallback } from "react";
import WordCloud from "react-d3-cloud";
import { Topic } from "../../types/types";
// import WordCloudList from "./WordCloudList";

type DataCloudWord = {
  text: string;
  value: number;
};

type WordCloudProps = {
  topics: Topic[];
  setSelectedTopic: (topic: Topic | null) => void;
};

export default function WordCloudContainer({
  topics,
  setSelectedTopic,
}: WordCloudProps) {
  const data = topics.map((topic) => ({
    id: topic.id,
    text: topic.label,
    value: topic.volume + 1000,
  }));
  console.log({ data });

  function handleClick(event: any, d: DataCloudWord) {
    const foundTopic = topics.find((topic) => topic.label === d.text);
    if (foundTopic) {
      setSelectedTopic(foundTopic);
    }
  }

  const rotate = useCallback(() => 0, []);
  const fontSize = useCallback((word) => Math.log2(word.value) * 3, []);

  return (
    <div className="word-cloud">
      <WordCloud
        data={data}
        onWordClick={handleClick}
        fontSize={fontSize}
        rotate={rotate}
        padding={10}
      />
      {/* <WordCloudList topics={topics} setSelectedTopic={setSelectedTopic} /> */}
    </div>
  );
}
