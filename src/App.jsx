import { useState, useEffect } from "react";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";
import Description from "./components/Description/Description";
import "./App.css";

export default function App() {
  const [feedback, setFeedback] = useState(() => {
    const saved = localStorage.getItem("feedback");
    return saved ? JSON.parse(saved) : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prev) => ({
      ...prev,
      [feedbackType]: prev[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    const initialState = { good: 0, neutral: 0, bad: 0 };
    setFeedback(initialState);
    localStorage.setItem("feedback", JSON.stringify(initialState));
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = totalFeedback
    ? Math.round(((feedback.good + feedback.neutral) / totalFeedback) * 100)
    : 0;

  return (
    <div className="container">
      <h1 className="title">Sip Happens Café</h1>

      <Description />

      <Options
        updateFeedback={updateFeedback}
        resetFeedback={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          positivePercentage={positiveFeedback}
        />
      )}
    </div>
  );
}
