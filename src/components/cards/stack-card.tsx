import { TechType } from "@/data/stack";

interface StackCardProps {
  stack: TechType[];
}

export const StackCard = ({ stack }: StackCardProps) => {
  return (
    <div className="w-full">
      <div className="flex flex-wrap gap-4">
        {stack.map((tech) => {
          return (
            <div
              key={tech.name}
              className={
                "flex items-center gap-1 rounded-[4px] p-1 text-body-2 sm:gap-2 sm:p-2 sm:text-body-1 " +
                tech.bgColor
              }
            >
              <tech.icon className="h-3 w-3 sm:h-6 sm:w-6" />
              <span>{tech.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
