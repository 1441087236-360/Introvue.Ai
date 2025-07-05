"use client";
import { Lightbulb, Volume2 } from "lucide-react";
import React, { useEffect } from "react";

function QuestionsSection({ mockInterviewQuestion, activeQuestionIndex }) {
  useEffect(() => {
    {
      mockInterviewQuestion
        ? textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question)
        : console.log("question not loaded");
    }
  }, [mockInterviewQuestion, activeQuestionIndex]);

  const textToSpeach = (text) => {
    if ("speechSynthesis" in window) {
      const speech = new SpeechSynthesisUtterance(text);
      window.speechSynthesis.speak(speech);
    } else {
      alert("Sorry, Your browser does not support text to speech");
    }
  };
return (
    mockInterviewQuestion && (
        <div className="p-5 bg-secondary rounded-lg my-10">
            <div className="grid grid-cols-5 md:grid-cols-5 gap-1 md:gap-5">
                {mockInterviewQuestion &&
                    mockInterviewQuestion.map((question, index) => (
                        <h2
                            key={index}
                            className={`p-2 font-semibold rounded-full
                            text-xl text-center cursor-pointer
                            ${activeQuestionIndex === index ? "bg-white text-black" : "bg-black text-white"}`}
                        >
                            {index + 1}
                        </h2>
                    ))}
            </div>
            <h2 className="my-5 text-md font-semibold text-white md:text-lg">
                {mockInterviewQuestion[activeQuestionIndex]?.question}
            </h2>
            <Volume2
                className="cursor-pointer stroke-white"
                strokeWidth={2}
                onClick={() => {
                    // Speak the question 1 time on click
                    textToSpeach(mockInterviewQuestion[activeQuestionIndex]?.question);
                }}
            />

            <div className="rounded-lg p-5 bg-blue-300 mt-20 ">
                <h2 className="flex gap-2 items-center text-blue-950">
                    <Lightbulb />
                    <strong>Note:</strong>
                </h2>
                <h2 className="text-sm text-blue-950 my-2">
                    {process.env.NEXT_PUBLIC_QUESTION_NOTE}
                </h2>
            </div>
        </div>
    )
);
}

export default QuestionsSection;