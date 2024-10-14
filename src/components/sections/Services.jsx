import { SERVICES } from "@/lib/data";
import { ServiceDetails } from "@/components/data-display";

const Services = () => {
  return (
    <div>
      <div className="flex flex-wrap gap-8 ">
        {SERVICES.map((service, index) => (
          <ServiceDetails key={index} {...service} position={index} />
        ))}
      </div>
    </div>
  );
};

export default Services;
