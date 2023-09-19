import { useState } from "react";
import { Questions } from "../../constant/levelTest";
import CardQuestion from "../cardQuestion";
import ProgressBar from "../progressBar";
import ButtonBase from "../buttonBase";

export default function Test({ handleNextStep }) {
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [completeQuestions, setCompleteQuestions] = useState(0);
  const [isAllQuestionsCompleted, setIsAllQuestionsCompleted] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState({});

  const questionsPerPage = 5;

  const indexOfLastQuestion = currentPage * questionsPerPage;
  const indexOfFirstQuestion = indexOfLastQuestion - questionsPerPage;
  const currentQuestions = Questions.slice(
    indexOfFirstQuestion,
    indexOfLastQuestion
  );

  const handleSelectAnswer = (questionId, answer) => {
    setSelectedAnswer((prevAnswer) => ({
      ...prevAnswer,
      [questionId]: answer,
    }));
    setCompleteQuestions((prevCount) => prevCount + 1);

    const question = Questions.find((question) => question.id === questionId);

    if (question.correctAnswer[answer]) {
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [questionId]: answer,
      }));
    }

    if (completeQuestions + 1 === Questions.length) {
      setIsAllQuestionsCompleted(true);
    }
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handleBack = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  return (
    <div className="flex flex-col items-center w-ful bg-neutral-grey-lightest lg:mt-14 lg:mx-20 lg:rounded-lg lg:mb-40 lg:gap-10 lg:px-20 lg:py-10">
      <div className="flex flex-col px-4 py-10 gap-10 w-full lg:py-0">
        <ProgressBar progress={(completeQuestions / Questions.length) * 100} />
      </div>
      <div className="flex flex-col gap-10 w-full">
        <CardQuestion
          questions={currentQuestions}
          onAnswerSelect={handleSelectAnswer}
          selectedAnswer={selectedAnswer}
        />
        <div className="mx-4 flex gap-6 mb-16 lg:mb-10">
          <ButtonBase
            title="Back"
            sizeButton="small"
            variant="outline"
            className="text-primary text-base font-bold lg:text-lg"
            onClick={handleBack}
            sizeResponsive="none"
          />
          <ButtonBase
            title={isAllQuestionsCompleted ? "Done" : "Next"}
            sizeButton="small"
            variant="filled"
            className="text-white text-base font-bold lg:text-lg"
            onClick={isAllQuestionsCompleted ? handleNextStep : handleNext}
            sizeResponsive="none"
          />
        </div>
      </div>
    </div>
  );
}
