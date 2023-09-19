import Link from "next/link";
import { ArrowIcon } from "../../constant/icons";
import ProgressBar from "../progressBar";
import CardQuestion from "../cardQuestion";
import { Questions } from "../../constant/levelTest";

export default function CheckResult({ correctAnswers }) {
  return (
    <div className="mt-10 flex justify-center mb-16">
      <div className="flex px-4 flex-col gap-4 w-full">
        <div className="flex flex-col gap-4">
          <Link href={"/level-test"} className="flex gap-1">
            <div className="rotate-90">
              <ArrowIcon />
            </div>
            <p className="text-neutral-grey-light text-base font-bold">Back</p>
          </Link>
        </div>
        <div className="flex px-4 py-10 rounded-lg bg-neutral-grey-lightest">
          <ProgressBar progress={45} />
        </div>
        <CardQuestion />
      </div>
    </div>
  );
}
