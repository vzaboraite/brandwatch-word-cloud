import { Topic } from "../../types/types";
import WordCloudItem from "./WordCloudItem";

type WordCloudListProps = {
  topics: Topic[];
  setSelectedTopic: (topic: Topic | null) => void;
};

export default function WordCloudList({
  topics,
  setSelectedTopic,
}: WordCloudListProps) {
  return (
    <ul className="word-cloud-list">
      {topics.length > 0
        ? topics.map((topic: Topic) => {
            return (
              <WordCloudItem
                topic={topic}
                setSelectedTopic={setSelectedTopic}
              />
            );
          })
        : "Loading..."}
    </ul>
  );
}
