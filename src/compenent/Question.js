import { useState } from "react";

function Question({ statement, correctAnswer }) {
  const [message, setMessage] = useState("");

  const handleAnswer = (isTrue) => {
    if (isTrue === correctAnswer) {
      setMessage(
        "Excellente réponse! C'est l'animé qui a bercé l'enfance de tous les 90's au Japon. "
      );
    } else {
      setMessage(
        "Mauvaise réponse! Dragon ball est bien concidérer comme l'anime qui a bercé l'enfance de tous les 90's au Japon"
      );
    }
  };

  return (
    <div>
      <p>{statement}</p>
      <div>
        <button
          onClick={() => handleAnswer(true)}
          style={{
            marginRight: "10px",
            padding: "10px 20px",
            backgroundColor: "green",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Vrai
        </button>
        <button
          onClick={() => handleAnswer(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          Faux
        </button>
      </div>
      {message && (
        <p style={{ marginTop: "20px", fontSize: "18px" }}>{message}</p>
      )}
    </div>
  );
}
export default Question;
