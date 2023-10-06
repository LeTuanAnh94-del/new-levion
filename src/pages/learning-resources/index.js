import Image from "next/image";
import { LINK_LEARNING_RESOURCES } from "../../constant/learningCourse";
import Link from "next/link";

export default function LearningResources() {
  return (
    <div className="flex flex-col w-full">
      <div className="bg-head-body flex flex-col gap-y-10 px-4 py-10 lg:flex-row lg:items-center lg:px-20 lg:py-5.5 lg:gap-x-6">
        <div className="flex flex-col gap-y-1">
          <p className="text-primary text-3.5xl font-bold lg:text-5xl">
            Learning Resources
          </p>
          <p className="text-neutral-grey text-sm lg:text-xl">
            Lorem ipsum dolor sit abet, consectetur advising edit. Nets risus
            non venerates dolor nils tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pareira aliquot eu.Dignissim tellus, Tellus
            element enid fucus morbid enid fuse:
          </p>
        </div>
        <Image
          src={"/img/logo-learning-course.png"}
          alt="logo-learning-course"
          width={343}
          height={250}
          className="lg:w-120.75 lg:h-75"
        />
      </div>
      <div className="flex flex-wrap gap-y-6 px-4 py-12 justify-center lg:gap-y-10 gap-x-6">
        {LINK_LEARNING_RESOURCES.map((link) => (
          <div key={link} className="flex flex-col items-center gap-4">
            <div className="px-15 py-12 rounded-lg bg-lavender">
              <Link href={link.link}>
                <Image
                  src={link.img}
                  alt={link.alt}
                  width={160}
                  height={160}
                  className="h-40"
                />
              </Link>
            </div>
            <p className="text-neutral-dark-grey text-2xl font-bold">
              {link.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
