import { Topic } from "../../types/types";

type WordCloudItemProps = {
  topic: Topic;
  setSelectedTopic: (topic: Topic | null) => void;
};

export default function WordCloudItem({
  topic,
  setSelectedTopic,
}: WordCloudItemProps) {
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
}
