import { WORKS } from "@/lib/data";
import { Container, SectionHeader } from "@/components/layout";
import { WorkDetails } from "@/components/data-display";
import { UseActiveLinkContext } from "@/context/ActiveLinkContext";

const Portfolio = () => {
  const {sectionsRefs} = UseActiveLinkContext()
  return (
    <Container
      sectionRef={sectionsRefs.portfolio}
      id="portfolio"
    >
      <SectionHeader
        title="Check out my featured projects"
        subtitle="portfolio"
      />
      <div className="flex flex-wrap gap-8">
        {WORKS.map((work, index) => (
          <WorkDetails key={index} {...work} position={index} />
        ))}
      </div>
    </Container>
  );
};

export default Portfolio;
