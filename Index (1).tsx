import { Header } from "@/components/Header";
import { InteractiveLogo } from "@/components/InteractiveLogo";
import { SocialIcons } from "@/components/SocialIcons";
import heroBackground from "@/assets/hero-background.png";

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <main className="relative min-h-screen flex items-center justify-center pt-20">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to right, hsl(var(--hero-gradient-start)) 0%, hsl(var(--hero-gradient-start)) 50%, transparent 100%), url(${heroBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <InteractiveLogo />
          </div>
        </div>

        {/* Social Icons */}
        <SocialIcons />

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 right-8 z-10 animate-bounce">
          <svg
            className="w-12 h-12 text-tangerine"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </main>
    </div>
  );
};

export default Index;
