import React, { useState, useEffect, useCallback } from 'react';
import { X, MapPin, Utensils, ChevronLeft, ChevronRight, Globe2, Sparkles, Compass } from 'lucide-react';

export interface FoodPhotoItem {
  id: string;
  title: string;
  caption: string;
  subTheme: 'Dessert' | 'Spicy' | 'Salty';
  rowNumber: number;
  imageUrl: string;
  badgeBg: string;
  badgeText: string;
  origin: string;
  whereFound: string;
  description: string;
  servingStyle: string;
}

export interface RowTheme {
  row: number;
  name: string;
  tagline: string;
  badgeBg: string;
  badgeText: string;
  items: FoodPhotoItem[];
}

export const FOOD_ROWS: RowTheme[] = [
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
        origin: 'France (invented by Michel Bras in Laguiole, 1981)',
        whereFound:
          'Classic French bistros, high-end dessert lounges, and restaurant menus across Paris, New York, and metropolitan cities worldwide.',
        description:
          'A rich chocolate cake characterized by a delicate, baked sponge cake exterior enclosing a luscious, liquid dark chocolate ganache core that cascades across the plate when pierced. The dessert strikes a balance between bittersweet cacao and buttery warmth.',
        servingStyle: 'Served warm straight from the ramekin with vanilla bean gelato, fresh raspberries, or a mint garnish.',
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
        origin: 'France (Tarte aux Fraises, traditional French pastry)',
        whereFound:
          'Pâtisseries, artisan French bakeries, Parisian sidewalk cafes, and European afternoon tea salons.',
        description:
          'A timeless French pastry featuring a sweet, crumbly sablée pastry crust (pâte sucrée) baked to golden perfection, coated with smooth crème pâtissière (vanilla bean custard), and piled high with fresh, glistening red strawberries brushed with an apricot glaze.',
        servingStyle: 'Enjoyed chilled alongside an afternoon espresso, café au lait, or sparkling champagne.',
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
        origin: 'France (originated in Italy, perfected in Paris tea salons)',
        whereFound:
          'Luxury Parisian confectioneries (such as Ladurée and Pierre Hermé), boutique macaron shops, and gourmet dessert counters worldwide.',
        description:
          'Delicate, airy sandwich cookies made from finely ground blanched almond flour, egg whites, and confectioners’ sugar. Famous for their smooth, crisp exterior shells and signature chewy ruffled base ("feet"), paired with rich ganache, fruit curd, or flavored buttercream fillings.',
        servingStyle: 'Elegantly served in assorted pastel color tiers at high tea, patisseries, or gifting boxes.',
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
        origin: 'Japan (evolved from Sichuan Tantanmen and regional Gekikara ramen styles)',
        whereFound:
          'Ramen-ya shops, neon-lit noodle bars, and late-night underground stations across Tokyo, Osaka, and international ramen hotspots.',
        description:
          'Springy wheat alkaline noodles submerged in an intensely savory, hours-simmered rich broth infused with fiery chili paste, house-made roasted chili oil (rayu), toasted sesame seeds, garlic, and scallions. Delivers an addictive balance of fiery heat, umami, and tingling depth.',
        servingStyle: 'Topped with seasoned ground pork or pork belly chashu, tender bok choy, and a marinated soft-boiled egg.',
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
        origin: 'United States (Anchor Bar in Buffalo, New York, 1964)',
        whereFound:
          'Sports bars, neighborhood gastropubs, casual diners, and backyard barbecue watch parties across North America and worldwide.',
        description:
          'Crispy unbreaded chicken wing segments and drumettes deep-fried until crackling on the outside, then vigorously tossed in a signature glaze made from aged cayenne hot sauce, melted butter, vinegar, garlic powder, and habanero chili oil for intense fiery tang.',
        servingStyle: 'Served piping hot with chilled celery sticks, carrot batons, and thick blue cheese or ranch dressing.',
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
        origin: 'Thailand (Central Thailand royal & street culinary tradition: Gaeng Daeng)',
        whereFound:
          'Street food stalls across Bangkok, night markets, Chiang Mai food courts, and authentic Thai restaurants internationally.',
        description:
          'A fragrant and fiery stew made by pounding sun-dried red spur and fiery bird\'s eye chilis in a mortar with lemongrass, galangal, kaffir lime peel, coriander root, shallots, and shrimp paste. Simmered in luscious coconut cream with bamboo shoots, Thai eggplant, and protein.',
        servingStyle: 'Served simmering hot garnished with torn sweet Thai basil leaves, kaffir lime ribbons, and steamed jasmine rice.',
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
        origin: 'Belgium & France (Belgian Frites tradition along the Meuse Valley)',
        whereFound:
          'Belgian friteries (frituurs), Parisian bistros (steak-frites), burger shacks, seaside boardwalks, and street vendors across the globe.',
        description:
          'Hand-cut starchy potatoes double-fried in beef tallow or vegetable oil—first blanched at low temperature to soften the center, then flash-fried at high heat for a shattering golden exterior. Immediately tossed while sizzling in coarse Atlantic sea salt crystals.',
        servingStyle: 'Traditionally presented in a paper cone accompanied by authentic Belgian mayonnaise, remoulade, or truffle aioli.',
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
        origin: 'Germany & Austria (Bavarian Brezen tradition since the Middle Ages)',
        whereFound:
          'Munich beer gardens (Biergärten), Oktoberfest festival tents, Bavarian village bakeries, train station kiosk stalls, and alpine chalets.',
        description:
          'A knot-shaped yeast pastry dough briefly bathed in a food-grade alkaline lye solution (Natronlauge) before entering a stone hearth oven. The lye produces a glossy deep mahogany crust, a chewy pull, and a fluffy crumb, encrusted with prominent coarse white pretzel salt crystals.',
        servingStyle: 'Served warm alongside fresh butter, sweet Bavarian mustard, Obatzda cheese spread, or a cold wheat beer.',
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
        origin: 'Mexico & Southwestern United States (Totopos tradition)',
        whereFound:
          'Mexican taquerias, cantinas, coastal seaside palapas, Tex-Mex restaurants, and festive social gatherings across the Americas.',
        description:
          'Triangular pieces cut from stone-ground nixtamalized corn tortillas (totopos) fried crisp in oil until bubbling and light, then showered generously with fine sea salt while hot. Delivers an earthy roasted corn flavor and signature hearty crunch that stands up to heavy dips.',
        servingStyle: 'Served warm in baskets alongside fresh molcajete guacamole, roasted tomato salsa roja, and pico de gallo.',
      },
    ],
  },
];

// Flat list for sequential next/prev navigation in modal
const ALL_FOOD_ITEMS: FoodPhotoItem[] = FOOD_ROWS.flatMap((row) => row.items);

export const App: React.FC = () => {
  const [selectedFood, setSelectedFood] = useState<FoodPhotoItem | null>(null);

  // Keyboard navigation & modal lock
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!selectedFood) return;

      if (e.key === 'Escape') {
        setSelectedFood(null);
      } else if (e.key === 'ArrowRight') {
        const currentIndex = ALL_FOOD_ITEMS.findIndex((item) => item.id === selectedFood.id);
        const nextIndex = (currentIndex + 1) % ALL_FOOD_ITEMS.length;
        setSelectedFood(ALL_FOOD_ITEMS[nextIndex]);
      } else if (e.key === 'ArrowLeft') {
        const currentIndex = ALL_FOOD_ITEMS.findIndex((item) => item.id === selectedFood.id);
        const prevIndex = (currentIndex - 1 + ALL_FOOD_ITEMS.length) % ALL_FOOD_ITEMS.length;
        setSelectedFood(ALL_FOOD_ITEMS[prevIndex]);
      }
    },
    [selectedFood]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    if (selectedFood) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown, selectedFood]);

  const currentModalIndex = selectedFood
    ? ALL_FOOD_ITEMS.findIndex((item) => item.id === selectedFood.id)
    : -1;

  const handleNextModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentModalIndex !== -1) {
      const nextIndex = (currentModalIndex + 1) % ALL_FOOD_ITEMS.length;
      setSelectedFood(ALL_FOOD_ITEMS[nextIndex]);
    }
  };

  const handlePrevModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentModalIndex !== -1) {
      const prevIndex = (currentModalIndex - 1 + ALL_FOOD_ITEMS.length) % ALL_FOOD_ITEMS.length;
      setSelectedFood(ALL_FOOD_ITEMS[prevIndex]);
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf9] py-10 px-4 sm:px-6 lg:px-8 font-sans text-stone-900">
      <div className="max-w-5xl mx-auto">
        {/* Gallery Header */}
        <header className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-600 text-xs font-medium mb-3 border border-stone-200/60">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>Click any photo to view its meal description and origin</span>
          </div>
          <h1 id="food-gallery-title" className="text-2xl sm:text-3xl font-bold tracking-tight text-stone-900">
            Food Photo Gallery
          </h1>
          <p className="text-xs sm:text-sm text-stone-500 mt-1.5 max-w-lg mx-auto">
            9-photo grid &bull; 3 rows &times; 3 columns &bull; Row 1: Dessert &bull; Row 2: Spicy &bull; Row 3: Salty
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
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-2.5">
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
                <span className="text-[11px] text-stone-400 hidden sm:inline-block">
                  3 photos &bull; click to inspect
                </span>
              </div>

              {/* 3 Photos in Row (Columns) with Equal Dimensions */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
                {rowTheme.items.map((photo) => (
                  <article
                    key={photo.id}
                    id={photo.id}
                    tabIndex={0}
                    role="button"
                    aria-label={`View description and location details for ${photo.title}`}
                    onClick={() => setSelectedFood(photo)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setSelectedFood(photo);
                      }
                    }}
                    className="group bg-white rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col cursor-pointer text-left focus:outline-none focus:ring-2 focus:ring-stone-400"
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
                      <div className="absolute inset-0 bg-stone-950/0 group-hover:bg-stone-950/20 transition-colors flex items-center justify-center">
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 px-3 py-1.5 rounded-full bg-stone-900/85 text-white text-xs font-medium shadow-sm backdrop-blur-xs flex items-center gap-1.5">
                          <Compass className="w-3.5 h-3.5" />
                          <span>View Details</span>
                        </span>
                      </div>
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
                      <p className="text-xs text-stone-500 line-clamp-1">
                        {photo.caption}
                      </p>
                      <div className="flex items-center gap-1 text-[11px] text-stone-400 mt-1">
                        <MapPin className="w-3 h-3 text-stone-400 shrink-0" />
                        <span className="truncate">{photo.origin}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>

      {/* Detail Modal Dialog */}
      {selectedFood && (
        <div
          id="food-detail-modal-backdrop"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-food-title"
          onClick={() => setSelectedFood(null)}
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        >
          <div
            id="food-detail-modal-card"
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-2xl max-w-2xl w-full border border-stone-200 shadow-xl overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150 flex flex-col max-h-[92vh]"
          >
            {/* Modal Header */}
            <div className="px-5 py-4 border-b border-stone-100 flex items-center justify-between gap-3 bg-stone-50/70">
              <div className="flex items-center gap-2.5">
                <span
                  className={`text-xs font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider ${selectedFood.badgeBg} ${selectedFood.badgeText}`}
                >
                  Row {selectedFood.rowNumber} &bull; {selectedFood.subTheme}
                </span>
                <span className="text-xs text-stone-400">
                  {currentModalIndex + 1} of {ALL_FOOD_ITEMS.length}
                </span>
              </div>

              <div className="flex items-center gap-1">
                {/* Prev / Next controls */}
                <button
                  type="button"
                  id="modal-prev-btn"
                  onClick={handlePrevModal}
                  title="Previous meal (Left Arrow)"
                  aria-label="Previous meal"
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="modal-next-btn"
                  onClick={handleNextModal}
                  title="Next meal (Right Arrow)"
                  aria-label="Next meal"
                  className="p-1.5 rounded-lg text-stone-500 hover:text-stone-900 hover:bg-stone-200/60 transition-colors"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
                <div className="w-px h-4 bg-stone-200 mx-1" />
                <button
                  type="button"
                  id="modal-close-btn"
                  onClick={() => setSelectedFood(null)}
                  title="Close modal (Escape)"
                  aria-label="Close modal"
                  className="p-1.5 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body: Two Column on Tablets & Desktop */}
            <div className="overflow-y-auto p-5 sm:p-6 space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-start">
                {/* Photo Preview with Equal 1:1 Aspect Ratio */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-stone-100 border border-stone-200 shadow-2xs">
                  <img
                    src={selectedFood.imageUrl}
                    alt={selectedFood.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Main Info */}
                <div className="flex flex-col gap-3">
                  <div>
                    <h2
                      id="modal-food-title"
                      className="text-xl sm:text-2xl font-bold tracking-tight text-stone-900 leading-snug"
                    >
                      {selectedFood.title}
                    </h2>
                    <p className="text-xs text-stone-500 mt-1">
                      {selectedFood.caption}
                    </p>
                  </div>

                  {/* Origin */}
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80 flex items-start gap-2.5">
                    <Globe2 className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                        Origin &amp; Culinary Heritage
                      </span>
                      <p className="text-xs font-medium text-stone-800 mt-0.5">
                        {selectedFood.origin}
                      </p>
                    </div>
                  </div>

                  {/* Serving Style */}
                  <div className="p-3 rounded-lg bg-stone-50 border border-stone-200/80 flex items-start gap-2.5">
                    <Utensils className="w-4 h-4 text-stone-600 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider block">
                        Serving Tradition
                      </span>
                      <p className="text-xs text-stone-700 mt-0.5">
                        {selectedFood.servingStyle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Meal Description */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-1.5 text-stone-700">
                  <Utensils className="w-4 h-4 text-amber-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    Meal Description
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50/50 p-3.5 rounded-xl border border-stone-100">
                  {selectedFood.description}
                </p>
              </div>

              {/* Where It's Found */}
              <div className="space-y-1.5 pt-2 border-t border-stone-100">
                <div className="flex items-center gap-1.5 text-stone-700">
                  <MapPin className="w-4 h-4 text-rose-600" />
                  <h3 className="text-xs font-bold uppercase tracking-wider text-stone-800">
                    Where It's Found
                  </h3>
                </div>
                <p className="text-sm text-stone-700 leading-relaxed bg-stone-50/50 p-3.5 rounded-xl border border-stone-100">
                  {selectedFood.whereFound}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="px-5 py-3 border-t border-stone-100 bg-stone-50/70 flex items-center justify-between text-xs text-stone-500">
              <span className="hidden sm:inline">Use &larr; &rarr; arrows to browse, Esc to exit</span>
              <button
                type="button"
                onClick={() => setSelectedFood(null)}
                className="ml-auto px-4 py-1.5 rounded-lg bg-stone-900 text-white font-medium hover:bg-stone-800 transition-colors shadow-2xs"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
