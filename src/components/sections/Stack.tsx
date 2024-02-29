import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import blockPattern from "/src/assets/images/block-pattern.png";

const Stack = () => {
  return (
    <section id="stack" className="text-black">
      <div
        className="px-8 pb-40"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(217,217,217,1) 0%, rgba(217,217,217,0) 100%), url(${blockPattern})`,
        }}
      >
        <div className="h-[80px] w-full"></div>
        <div className="flex">
          <div className="">
            <h2 className="pl-2 pr-6 text-heading-3 font-medium">Stack</h2>
          </div>
          <div className="min-h-full w-full rounded-t-xl bg-background"></div>
        </div>
        <div className="h-[20px] w-full rounded-ss-xl bg-background"></div>
        <div className="space-y-6 rounded-b-xl bg-background p-6 text-white">
          <Accordion type="single" collapsible>
            <AccordionItem value="frontend">
              <AccordionTrigger>
                <p className="mb-4 text-3xl font-medium">Frontend</p>
              </AccordionTrigger>
              <AccordionContent className="mb-4 rounded-xl bg-accent p-6 text-black">
                <ul className="list-inside list-disc space-y-4 text-body-1">
                  <li>React</li>
                  <li>Next.js</li>
                  <li>Vite</li>
                  <li>Astro</li>
                  <li>TailwindCSS</li>
                  <li>SCSS</li>
                  <li>Framer Motion</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="programming">
              <AccordionTrigger>
                <p className="mb-4 text-3xl font-medium">Programming</p>
              </AccordionTrigger>
              <AccordionContent className="mb-4 rounded-xl bg-accent p-6 text-black">
                <ul className="list-inside list-disc space-y-4 text-body-1">
                  <li>TypeScript</li>
                  <li>JavaScript</li>
                  <li>Java</li>
                  <li>Python</li>
                  <li>C#</li>
                  <li>C++</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="backend">
              <AccordionTrigger>
                <p className="mb-4 text-3xl font-medium">Backend</p>
              </AccordionTrigger>
              <AccordionContent className="mb-4 rounded-xl bg-accent p-6 text-black">
                <ul className="list-inside list-disc space-y-4 text-body-1">
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>Supabase</li>
                  <li>PostgreSQL</li>
                  <li>Prisma</li>
                  <li>GraphQL</li>
                  <li>REST</li>
                </ul>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Stack;
