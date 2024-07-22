import Container from "@/components/ui/container";
import HeroSection from "@/components/ui/hero";
import ShortcutCard from "@/components/ui/hero/shortcut-card";
import HybridButton from "@/components/ui/hybrid-button";
import { hero_shortcut_links } from "@/lib/links/hero-shortcut-links";
import PropertieCard from "@/components/ui/propertie-card";
import propImg from "@/assets/Image (1).png";
import ReviewCardHome from "@/components/ui/review-card";
import { getAllEstates } from "@/data-access/estate-and-location";
import ArrowButton from "@/components/ui/arrows-buttons";

export default async function Home() {

  const allEstates = await getAllEstates()
  let estateListLength = allEstates.length;
  let variable = 0;

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
        <div className="property-card-container flex ">
          {
            allEstates.map(({
              id,
              estateName,
              estateDescription,
              estateType,
              bathrooms,
              bedrooms,

            }) => {
              return <PropertieCard
                key={id}
                image={propImg}
                prop_name={estateName}
                description={estateDescription.slice(0, 100) + `...`}
                bedroom={bedrooms}
                bathroom={bathrooms}
                prop_type={estateType}
                price={5500000}
                url={`/properties/${id}`}
              />
            })
          }

        </div>

        <div className="flex justify-between items-center pt-6 border-t border-gray my-10">
          <p className="font-light text-sm text-gray-400"><span>{1}</span> of {60}</p>

          <div className="flex ">
            <ArrowButton direction="left" variable={variable} />
            <ArrowButton direction="right" variable={variable} />
          </div>
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
