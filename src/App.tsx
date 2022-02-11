type Topic = {
  id: string;
  label: string;
  volume: number;
  sentimentScore: number;
  sentiment: Sentiment;
};

type Sentiment = {
  negative: number;
  neutral: number;
  positive: number;
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>My Topics Challenge</h1>
      </header>
    </div>
  );
}

export default App;
