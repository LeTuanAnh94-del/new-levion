import Image from "next/image";
import Link from "next/link";

import { LINK_LEARNING_RESOURCES } from "../../constant/learningCourse";
import HeadBody from "../../components/headBody";

export default function LearningResources() {
  return (
    <div className="flex flex-col w-full">
      <HeadBody
        title="Learning Resources"
        desc="Lorem ipsum dolor sit abet, consectetur advising edit. Nets risus
            non venerates dolor nils tellus habitant aliquam. Dignissim tellus,
            eu eu sed malesuada pareira aliquot eu.Dignissim tellus, Tellus
            element enid fucus morbid enid fuse:"
        logo={"/img/logo-learning-course.png"}
      />
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
