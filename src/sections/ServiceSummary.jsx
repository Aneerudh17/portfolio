import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);
const ServiceSummary = () => {
  useGSAP(() => {
    gsap.to("#title-service-1", {
      xPercent: 20,
      scrollTrigger: {
        target: "#title-service-1",
        scrub: true,
      },
    });
    gsap.to("#title-service-2", {
      xPercent: -30,
      scrollTrigger: {
        target: "#title-service-2",
        scrub: true,
      },
    });
    gsap.to("#title-service-3", {
      xPercent: 100,
      scrollTrigger: {
        target: "#title-service-3",
        scrub: true,
      },
    });
    gsap.to("#title-service-4", {
      xPercent: -100,
      scrollTrigger: {
        target: "#title-service-4",
        scrub: true,
      },
    });
  });
  return (
    <section className="mt-20 overflow-hidden font-light leading-snug text-center mb-42 contact-text-responsive">
      <div id="title-service-1">
        <p className="max-sm:text-3xl">Architucture</p>
      </div>
      <div
        id="title-service-2"
        className="flex items-center justify-center gap-3 translate-x-16"
      >
        <p className="font-normal max-sm:text-3xl">Development</p>
        <div className="w-16 sm:w-10 md:w-32 h-1 bg-gold flex-shrink-0" />
        <p className="max-sm:text-3xl">Deployment</p>
      </div>
      <div
        id="title-service-3"
        className="flex items-center justify-center gap-3 -translate-x-48"
      >
        <p className="max-sm:text-2xl">APIs</p>
        <div className="w-16 sm:w-10 md:w-32 h-1 bg-gold flex-shrink-0" />
        <p className="italic max-sm:text-3xl">Frontends</p>
        <div className="w-16 sm:w-10 md:w-32 h-1 bg-gold flex-shrink-0" />
        <p className="max-sm:text-3xl">Scalability</p>
      </div>
      <div id="title-service-4" className="translate-x-48">
        <p className="max-sm:text-3xl">Databases</p>
      </div>
    </section>
  );
};

export default ServiceSummary;