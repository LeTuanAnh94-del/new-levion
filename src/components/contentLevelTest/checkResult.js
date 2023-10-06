import Link from "next/link";
import { ArrowIcon } from "../../constant/icons";
import ProgressBar from "../progressBar";
import CardQuestion from "../cardQuestion";
import { Questions } from "../../constant/levelTest";

export default function CheckResult({ correctAnswers, selectedAnswer }) {
  const updatedQuestions = Questions.map((question) => {
    const isCorrect = correctAnswers[question.id];

    if (!isCorrect) {
      const correctAnswerKey = Object.keys(question.correctAnswer).find(
        (key) => question.correctAnswer[key] === true
      );
      question.selectedAnswer = { [correctAnswerKey]: true };
    }

    return question;
  });

  const totalQuestions = Object.keys(correctAnswers).length;
  const correctCount = Object.values(correctAnswers).filter(
    (value) => value
  ).length;
  const percentageCorrect = (correctCount / totalQuestions) * 100;

  return (
    <div className="mt-10 flex justify-center mb-16">
      <div className="flex px-4 flex-col gap-4 w-full">
        <div className="flex flex-col gap-4">
          <Link href={"/"} className="flex gap-1">
            <div className="rotate-90">
              <ArrowIcon />
            </div>
            <p className="text-neutral-grey-light text-base font-bold">Back</p>
          </Link>
        </div>
        <div className="flex px-4 py-10 rounded-lg bg-neutral-grey-lightest">
          <ProgressBar progress={percentageCorrect} />
        </div>
        <CardQuestion
          correctAnswers={correctAnswers}
          questions={updatedQuestions}
          incorrectAnswer={selectedAnswer}
        />
      </div>
    </div>
  );
}
