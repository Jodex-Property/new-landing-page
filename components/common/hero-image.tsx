/* eslint-disable @next/next/no-img-element */
import { BlurFade } from "@/components/magicui/blur-fade";

const images = Array.from({ length: 9 }, (_, i) => `/img/gallery/${i + 1}.jpg`);

export function BlurFadeDemo() {
  return (
    <section id="photos">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={imageUrl} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 w-full rounded-lg object-cover"
              src={imageUrl}
              alt={`Gallery image ${idx + 1}`}
              loading="lazy"
            />
          </BlurFade>
        ))}
      </div>
    </section>
  );
}
