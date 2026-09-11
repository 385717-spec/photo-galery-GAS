import React from 'react';

interface PhotoItem {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
}

const PHOTOS: PhotoItem[] = [
  {
    id: 'photo-1',
    title: 'Alpine Mountain Lake',
    subtitle: 'Placeholder Photo 1',
    imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-2',
    title: 'Modern Architecture',
    subtitle: 'Placeholder Photo 2',
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-3',
    title: 'Bamboo Forest',
    subtitle: 'Placeholder Photo 3',
    imageUrl: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-4',
    title: 'Neon City Rain',
    subtitle: 'Placeholder Photo 4',
    imageUrl: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-5',
    title: 'Desert Sand Dunes',
    subtitle: 'Placeholder Photo 5',
    imageUrl: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-6',
    title: 'Studio Shadow Portrait',
    subtitle: 'Placeholder Photo 6',
    imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-7',
    title: 'Coastal Cliff Waves',
    subtitle: 'Placeholder Photo 7',
    imageUrl: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-8',
    title: 'Scenic Highway',
    subtitle: 'Placeholder Photo 8',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=600&h=600&q=80',
  },
  {
    id: 'photo-9',
    title: 'Old Town Street',
    subtitle: 'Placeholder Photo 9',
    imageUrl: 'https://images.unsplash.com/photo-1477959858617-67f30bc75b82?auto=format&fit=crop&w=600&h=600&q=80',
  },
];

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9] py-8 px-4 sm:px-6 font-sans text-stone-900">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <header className="text-center mb-8">
          <h1 id="gallery-main-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            A 3&times;3 photo grid with equal dimensions
          </p>
        </header>

        {/* 3x3 Grid (9 Photos: 3 rows, 3 columns) */}
        <main className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6" id="photo-grid-container">
          {PHOTOS.map((photo, index) => (
            <article
              key={photo.id}
              id={`photo-card-${index + 1}`}
              className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200"
            >
              {/* Equal Dimensions: Square Aspect Ratio 1:1 */}
              <div className="relative w-full aspect-square bg-stone-100 overflow-hidden">
                <img
                  src={photo.imageUrl}
                  alt={photo.title}
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Title and Placeholder Text */}
              <div className="p-3.5">
                <h2 className="text-sm font-semibold text-stone-900 truncate group-hover:text-stone-700">
                  {photo.title}
                </h2>
                <p className="text-xs text-stone-400 mt-0.5">
                  {photo.subtitle}
                </p>
              </div>
            </article>
          ))}
        </main>
      </div>
    </div>
  );
};
