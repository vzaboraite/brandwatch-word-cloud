import { Topic } from "../../types/types";
import WordCloudList from "./WordCloudList";

type WordCloudProps = {
  topics: Topic[];
  setSelectedTopic: (topic: Topic | null) => void;
};

export default function WordCloud({
  topics,
  setSelectedTopic,
}: WordCloudProps) {
  return (
    <div className="word-cloud">
      <WordCloudList topics={topics} setSelectedTopic={setSelectedTopic} />
    </div>
  );
}
