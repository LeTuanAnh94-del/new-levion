import { useState } from "react";
import { Questions } from "../../constant/levelTest";
import CardQuestion from "../cardQuestion";
import ProgressBar from "../progressBar";
import ButtonBase from "../buttonBase";
import usePaginationButton from "../../hooks/usePaginationButton";

export default function Test({
  handleNextStep,
  setNumCorrectAnswers,
  setCorrectAnswers,
  correctAnswers,
  selectedAnswer,
  setSelectedAnswer,
}) {
  const {
    handleNextPage,
    handlePreviousPage,
    questionsPerPage,
    currentPage,
    currentQuestions,
  } = usePaginationButton({ Questions });

  const [completeQuestions, setCompleteQuestions] = useState(0);
  const [isAllQuestionsCompleted, setIsAllQuestionsCompleted] = useState(false);

  const handleSelectAnswer = (questionId, answer) => {
    setSelectedAnswer((prevAnswer) => ({
      ...prevAnswer,
      [questionId]: answer,
    }));

    const answeredQuestionsCount = Object.keys({
      ...selectedAnswer,
      [questionId]: answer,
    }).length;

    if (correctAnswers[questionId]) {
      setNumCorrectAnswers((prev) => prev - 1);
    }

    setCompleteQuestions(answeredQuestionsCount);

    const question = Questions.find((question) => question.id === questionId);

    if (question.correctAnswer[answer]) {
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [questionId]: true,
      }));
      setNumCorrectAnswers((prev) => prev + 1);
    } else {
      setCorrectAnswers((prevCorrectAnswers) => ({
        ...prevCorrectAnswers,
        [questionId]: false,
      }));
    }

    if (answeredQuestionsCount >= Questions.length) {
      setIsAllQuestionsCompleted(true);
    } else {
      setIsAllQuestionsCompleted(false);
    }
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
            onClick={handlePreviousPage}
            sizeResponsive="none"
            disable={currentPage > 1 ? false : true}
          />
          <ButtonBase
            title={isAllQuestionsCompleted ? "Done" : "Next"}
            sizeButton="small"
            variant="filled"
            className="text-white text-base font-bold lg:text-lg"
            onClick={isAllQuestionsCompleted ? handleNextStep : handleNextPage}
            sizeResponsive="none"
            disable={
              currentPage < Math.ceil(Questions.length / questionsPerPage) ||
              isAllQuestionsCompleted
                ? false
                : true
            }
          />
        </div>
      </div>
    </div>
  );
}
