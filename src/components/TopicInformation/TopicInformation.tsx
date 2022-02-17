import "./styles.css";
import { Topic } from "../../types/types";

export default function TopicInformation({ topic }: { topic: Topic | null }) {
  return (
    <div className="topic-information">
      {topic !== null && (
        <>
          <h2 className="information">Information on topic "{topic.label}":</h2>
          <p data-testid="total-mentions" className="volume">
            Total Mentions: {topic.volume}
          </p>
          <ul className="sentiment">
            <li>
              Positive Mentions:
              <span data-testid="sentiment-positive" className="positive">
                {topic.sentiment.positive ?? 0}
              </span>
            </li>
            <li>
              Neutral Mentions:
              <span data-testid="sentiment-neutral" className="neutral">
                {topic.sentiment.neutral ?? 0}
              </span>
            </li>
            <li>
              Negative Mentions:
              <span data-testid="sentiment-negative" className="negative">
                {topic.sentiment.negative ?? 0}
              </span>
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
