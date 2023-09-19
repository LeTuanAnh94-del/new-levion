import Image from "next/image";
import BaseInput from "../inputBase";

export default function CardQuestion({
  questions,
  onAnswerSelect,
  selectedAnswer,
}) {
  return (
    <div className="flex flex-col gap-10 ">
      {questions?.map((question) => (
        <div key={question.id} className="flex flex-col gap-4 w-full px-4">
          {question?.image && (
            <Image
              src={question?.image}
              alt="image-question"
              width={343}
              height={206}
              className="lg:w-[500px] lg:h-[300px]"
            />
          )}
          <div className="flex flex-col gap-4">
            <div className="flex gap-2">
              <div>
                <div className="bg-primary rounded-full px-2.5 py-0.5">
                  <p className="text-white text-base font-bold">
                    {question?.id}
                  </p>
                </div>
              </div>
              <p className="text-neutral-dark-grey text-base font-bold lg:text-2xl">
                {question?.question}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              {Object.keys(question.answers).map((key) => (
                <div key={key}>
                  <BaseInput
                    type="radio"
                    data={question.answers[key]}
                    onSelect={() => onAnswerSelect(question.id, key)}
                    selected={selectedAnswer?.[question.id] === key}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
