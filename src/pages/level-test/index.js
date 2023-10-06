import { useEffect, useState } from "react";

import WelcomeLevelTest from "../../components/contentLevelTest/welcomeLevelTest";
import Test from "../../components/contentLevelTest/test";
import Record from "../../components/contentLevelTest/record";
import CheckResult from "../../components/contentLevelTest/checkResult";

export default function LevelTest() {
  const [currentStep, setCurrentStep] = useState(0);
  const [numCorrectAnswers, setNumCorrectAnswers] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState({});
  const [selectedAnswer, setSelectedAnswer] = useState({});
  const [refresh, setRefresh] = useState(false);

  const handelNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const handleBackStep = () => {
    window.location.reload();
  };

  const renderContentLevelTest = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeLevelTest handelNextStep={handelNextStep} />;
      case 1:
        return (
          <Test
            handleNextStep={handelNextStep}
            setNumCorrectAnswers={setNumCorrectAnswers}
            setCorrectAnswers={setCorrectAnswers}
            correctAnswers={correctAnswers}
            selectedAnswer={selectedAnswer}
            setSelectedAnswer={setSelectedAnswer}
            refresh={refresh}
          />
        );
      case 2:
        return (
          <Record
            numCorrectAnswers={numCorrectAnswers}
            handleBackStep={handleBackStep}
            handleNextStep={handelNextStep}
          />
        );
      case 3:
        return (
          <CheckResult
            correctAnswers={correctAnswers}
            selectedAnswer={selectedAnswer}
          />
        );
    }
  };

  useEffect(() => {
    if (refresh) return;
  }, [refresh]);

  return <div className="w-full">{renderContentLevelTest()}</div>;
}
