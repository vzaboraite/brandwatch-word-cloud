import React from "react";
import { render, screen } from "@testing-library/react";
import TopicInformation from "./TopicInformation";
import { Topic } from "../../types/types";

describe("TopicInformation", () => {
  const testTopic: Topic = {
    id: "1751295897__Berlin",
    label: "Berlin",
    volume: 165,
    sentiment: {
      negative: 3,
      neutral: 133,
      positive: 29,
    },
    sentimentScore: 65,
  };

  it("should render the topic in heading", () => {
    render(<TopicInformation topic={testTopic} />);
    const headingElement = screen.getByRole("heading");

    expect(headingElement).toHaveTextContent('Information on topic "Berlin":');
  });

  it("should render total mentions number", () => {
    render(<TopicInformation topic={testTopic} />);
    const totalMentionsElement = screen.getByTestId("total-mentions");
    expect(totalMentionsElement).toHaveTextContent("Total Mentions: 165");
  });

  it("should render total mentions broken down in sentiments list", () => {
    render(<TopicInformation topic={testTopic} />);
    const positiveSentimentElement = screen.getByTestId("sentiment-positive");
    const neutralSentimentElement = screen.getByTestId("sentiment-neutral");
    const negativeSentimentElement = screen.getByTestId("sentiment-negative");

    expect(positiveSentimentElement).toHaveTextContent("29");
    expect(neutralSentimentElement).toHaveTextContent("133");
    expect(negativeSentimentElement).toHaveTextContent("3");
  });
});
