export function HeroSkeleton() {
  return (
    <section className="relative min-h-[700px] flex items-center overflow-hidden bg-gray-200 animate-pulse">

      {/* Background skeleton */}
      <div className="absolute inset-0 bg-gray-300"></div>

      <div className="section-container relative z-10 py-16 lg:py-24">
        <div className="max-w-3xl space-y-6">

          {/* Badge */}
          <div className="h-8 w-40 bg-gray-400 rounded-full"></div>

          {/* Title */}
          <div className="h-10 w-full bg-gray-400 rounded"></div>
          <div className="h-10 w-3/4 bg-gray-400 rounded"></div>

          {/* Subtitle */}
          <div className="h-5 w-full bg-gray-400 rounded"></div>
          <div className="h-5 w-2/3 bg-gray-400 rounded"></div>

          {/* Button */}
          <div className="h-12 w-40 bg-gray-500 rounded-lg"></div>

          {/* Badges */}
          <div className="flex gap-3 mt-6">
            <div className="h-8 w-24 bg-gray-400 rounded-full"></div>
            <div className="h-8 w-24 bg-gray-400 rounded-full"></div>
            <div className="h-8 w-24 bg-gray-400 rounded-full"></div>
          </div>

        </div>
      </div>
    </section>
  );
}