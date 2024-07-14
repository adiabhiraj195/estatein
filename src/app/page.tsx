import Container from "@/components/ui/container";
import HeroSection from "@/components/ui/hero";
import ShortcutCard from "@/components/ui/hero/shortcut-card";
import HybridButton from "@/components/ui/hybrid-button";
import { hero_shortcut_links } from "@/lib/links/hero-shortcut-links";
import PropertieCard from "@/components/ui/propertie-card";

import propImg from "@/assets/Image (1).png";

export default function Home() {


  // const propertie_card = {
  //   image={propImg}
  //   prop_name="Seaside Serenity Villa"
  //   about="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
  //   bedroom={3}
  //   bathroom={2}
  //   prop_type="villa"
  //   price={5500000}
  //   url="/properties/1"
  // }

  return (
    <main className="">
      <Container className="">
        <HeroSection />

        <div className="flex justify-between items-center px-20 border-y-2 border-gray">

          {hero_shortcut_links.map(({ title, url, image }) => {
            return (
              <ShortcutCard title={title} url={url} image={image} key={title} />
            )
          })}
        </div>

      </Container>

      <Container className="px-20 py-20">
        <div className="mb-20">
          <h1 className="text-3xl ">Featured Properties</h1>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 font-light ">Explore our handpicked selection of featured properties. Each listing offers a glimpse into exceptional homes and investments available through Estatein.<br /> Click "View Details" for more information.</p>

            <HybridButton href="/properties" className="border border-gray rounded-md text-sm font-light px-3 py-2 hover:bg-purple mr-3">
              View All Properties
            </HybridButton>
          </div>
        </div>

        {/* property cards  */}
        {/* /**************************** */}
        <div className="property-card-container">
          <PropertieCard
            image={propImg}
            prop_name="Seaside Serenity Villa"
            about="A stunning 4-bedroom, 3-bathroom villa in a peaceful suburban neighborhood... Read More"
            bedroom={3}
            bathroom={2}
            prop_type="villa"
            price={5500000}
            url="/properties/1"
          />
        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray-600 my-10">
          <p className="font-light text-sm text-gray-400"><span>{1}</span> of {60}</p>

          arrows
        </div>
        {/* /*********************************************** */}
      </Container>
    </main>
  );
}
