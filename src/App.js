import Question from "./compenent/Question";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>Exo Vrai ou Faux édition anime </h1>
      <Question
        statement="Dragon Ball Z est le meilleurs des années 90 ? "
        correctAnswer={true}
      />
    </div>
  );
}

export default App;
