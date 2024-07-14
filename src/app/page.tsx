import Container from "@/components/ui/container";
import HeroSection from "@/components/ui/hero";
import ShortcutCard from "@/components/ui/hero/shortcut-card";
import { hero_shortcut_links } from "@/lib/links/hero-shortcut-links";

export default function Home() {
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
    </main>
  );
}
