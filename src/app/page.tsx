import Container from "@/components/ui/container";
import HeroSection from "@/components/ui/hero";
import ShortcutCard from "@/components/ui/hero/shortcut-card";
import HybridButton from "@/components/ui/hybrid-button";
import { hero_shortcut_links } from "@/lib/links/hero-shortcut-links";
import PropertieCard from "@/components/ui/propertie-card";

import propImg from "@/assets/Image (1).png";
import prisma from "@/db";
import ReviewCardHome from "@/components/ui/review-card";

export default async function Home() {


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

  const data = await prisma.estate_estate_and_location.findMany();

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
          {
            data.map(({
              id,
              estate_name,
              estate_description,
              estate_type,
              number_of_bathroom,
              number_of_bedroom,

            }) => {
              return <PropertieCard
                key={id}
                image={propImg}
                prop_name={estate_name}
                about={estate_description}
                bedroom={number_of_bedroom}
                bathroom={number_of_bathroom}
                prop_type={estate_type}
                price={5500000}
                url={`/properties/${id}`}
              />
            })
          }

        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray my-10">
          <p className="font-light text-sm text-gray-400"><span>{1}</span> of {60}</p>

          arrows
        </div>
        {/* /*********************************************** */}
      </Container>

      {/***************  review section ****************/}
      <Container className="px-20 py-0">
        <div className="mb-20">
          <h1 className="text-3xl ">What Our Clients Say</h1>

          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-400 font-light ">Read the success stories and heartfelt testimonials from our valued clients. Discover why they chose Estatein for their real estate needs.</p>

            <HybridButton href="/#" className="border border-gray rounded-md text-sm font-light px-3 py-2 hover:bg-purple mr-3">
              View All Testimonials
            </HybridButton>
          </div>
        </div>

        {/* clients review card  */}

        <ReviewCardHome
          title="Exceptional Service!"
          body="Our experience with Estatein was outstanding. Their team's dedication and professionalism made finding our dream home a breeze. Highly recommended!"
        />

      </Container>
    </main>
  );
}
