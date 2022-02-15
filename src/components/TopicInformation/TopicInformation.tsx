import { Topic } from "../../types/types";

export default function TopicInformation({ topic }: { topic: Topic | null }) {
  return (
    <div className="topic-information">
      {topic !== null && (
        <>
          <h2 className="information">Information on topic "{topic.label}":</h2>
          <p className="volume">Total Mentions: {topic.volume}</p>
          <ul className="sentiment">
            <li>
              Positive Mentions:
              <span className="positive"> {topic.sentiment.positive ?? 0}</span>
            </li>
            <li>
              Neutral Mentions:
              <span className="neutral"> {topic.sentiment.neutral ?? 0}</span>
            </li>
            <li>
              Negative Mentions:
              <span className="negative"> {topic.sentiment.negative ?? 0}</span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
