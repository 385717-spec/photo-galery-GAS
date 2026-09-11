import React from 'react';

interface FoodPhotoItem {
  id: string;
  title: string;
  caption: string;
  subTheme: 'Dessert' | 'Spicy' | 'Salty';
  rowNumber: number;
  imageUrl: string;
  badgeBg: string;
  badgeText: string;
}

interface RowTheme {
  row: number;
  name: string;
  tagline: string;
  badgeBg: string;
  badgeText: string;
  items: FoodPhotoItem[];
}

const FOOD_ROWS: RowTheme[] = [
  {
    row: 1,
    name: 'Dessert',
    tagline: 'Sweet & Indulgent Creations',
    badgeBg: 'bg-pink-100',
    badgeText: 'text-pink-700',
    items: [
      {
        id: 'food-photo-1',
        title: 'Molten Chocolate Lava Cake',
        caption: 'Warm ganache center with cocoa dusting',
        subTheme: 'Dessert',
        rowNumber: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-pink-50',
        badgeText: 'text-pink-700',
      },
      {
        id: 'food-photo-2',
        title: 'Strawberry Glazed Tart',
        caption: 'Crisp pastry shell with vanilla custard',
        subTheme: 'Dessert',
        rowNumber: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-pink-50',
        badgeText: 'text-pink-700',
      },
      {
        id: 'food-photo-3',
        title: 'Pastel French Macarons',
        caption: 'Almond meringue cookies with buttercream',
        subTheme: 'Dessert',
        rowNumber: 1,
        imageUrl:
          'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-pink-50',
        badgeText: 'text-pink-700',
      },
    ],
  },
  {
    row: 2,
    name: 'Spicy',
    tagline: 'Bold & Fiery Flavors',
    badgeBg: 'bg-red-100',
    badgeText: 'text-red-700',
    items: [
      {
        id: 'food-photo-4',
        title: 'Spicy Chili Oil Ramen',
        caption: 'Rich bone broth infused with chili paste',
        subTheme: 'Spicy',
        rowNumber: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-red-50',
        badgeText: 'text-red-700',
      },
      {
        id: 'food-photo-5',
        title: 'Fiery Buffalo Wings',
        caption: 'Crispy chicken glazed in habanero hot sauce',
        subTheme: 'Spicy',
        rowNumber: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1567620832903-9fc6debc209f?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-red-50',
        badgeText: 'text-red-700',
      },
      {
        id: 'food-photo-6',
        title: 'Thai Red Chili Curry',
        caption: 'Aromatic coconut curry with fresh bird\'s eye chili',
        subTheme: 'Spicy',
        rowNumber: 2,
        imageUrl:
          'https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-red-50',
        badgeText: 'text-red-700',
      },
    ],
  },
  {
    row: 3,
    name: 'Salty',
    tagline: 'Savory & Salty Delights',
    badgeBg: 'bg-sky-100',
    badgeText: 'text-sky-700',
    items: [
      {
        id: 'food-photo-7',
        title: 'Crispy Sea Salt French Fries',
        caption: 'Hand-cut golden potatoes tossed with flaky sea salt',
        subTheme: 'Salty',
        rowNumber: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-sky-50',
        badgeText: 'text-sky-700',
      },
      {
        id: 'food-photo-8',
        title: 'Bavarian Coarse Salt Pretzel',
        caption: 'Freshly baked twisted dough with coarse pretzel salt',
        subTheme: 'Salty',
        rowNumber: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1534422298391-e4f8c172dddb?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-sky-50',
        badgeText: 'text-sky-700',
      },
      {
        id: 'food-photo-9',
        title: 'Salted Tortilla Chips & Dip',
        caption: 'Stone-ground salted corn tortilla chips',
        subTheme: 'Salty',
        rowNumber: 3,
        imageUrl:
          'https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?auto=format&fit=crop&w=600&h=600&q=80',
        badgeBg: 'bg-sky-50',
        badgeText: 'text-sky-700',
      },
    ],
  },
];

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#fafaf9] py-10 px-4 sm:px-6 lg:px-8 font-sans text-stone-900">
      <div className="max-w-5xl mx-auto">
        {/* Gallery Header */}
        <header className="text-center mb-10">
          <h1 id="food-gallery-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Food Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1.5">
            9-photo grid &bull; 3 rows &times; 3 columns of equal dimensions
          </p>
        </header>

        {/* 3 Sub-Themed Rows: Row 1 = Dessert, Row 2 = Spicy, Row 3 = Salty */}
        <main className="space-y-10" id="food-grid-main">
          {FOOD_ROWS.map((rowTheme) => (
            <section
              key={rowTheme.row}
              id={`food-row-${rowTheme.row}-${rowTheme.name.toLowerCase()}`}
              className="space-y-3.5"
            >
              {/* Row Sub-Theme Header */}
              <div className="flex items-center gap-3">
                <span
                  id={`badge-row-${rowTheme.row}`}
                  className={`text-xs font-semibold px-2.5 py-1 rounded-full tracking-wide uppercase ${rowTheme.badgeBg} ${rowTheme.badgeText}`}
                >
                  Row {rowTheme.row} &bull; {rowTheme.name}
                </span>
                <span className="text-xs font-medium text-stone-500">
                  {rowTheme.tagline}
                </span>
              </div>

              {/* 3 Photos in Row (Columns) with Equal Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {rowTheme.items.map((photo) => (
                  <article
                    key={photo.id}
                    id={photo.id}
                    className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col"
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

                    {/* Photo Title, Sub-theme Tag & Caption */}
                    <div className="p-3.5 flex flex-col gap-1">
                      <div className="flex items-center justify-between gap-2">
                        <h2 className="text-sm font-semibold text-stone-900 truncate group-hover:text-stone-700">
                          {photo.title}
                        </h2>
                        <span
                          className={`text-[10px] font-semibold px-2 py-0.5 rounded-md shrink-0 ${photo.badgeBg} ${photo.badgeText}`}
                        >
                          {photo.subTheme}
                        </span>
                      </div>
                      <p className="text-xs text-stone-400 line-clamp-1">
                        {photo.caption}
                      </p>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
};
