import { useState } from "react";

import WelcomeLevelTest from "../../components/contentLevelTest/welcomeLevelTest";
import Test from "../../components/contentLevelTest/test";

export default function LevelTest() {
  const [currentStep, setCurrentStep] = useState(0);

  const handelNextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const renderContentLevelTest = () => {
    switch (currentStep) {
      case 0:
        return <WelcomeLevelTest handelNextStep={handelNextStep} />;
      case 1:
        return <Test />;
    }
  };
  return <div className="w-full">{renderContentLevelTest()}</div>;
}
