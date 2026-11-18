/**
 * Taj Mumbai Corner - Brand Data & Demonstration Configuration
 * All contact details, menu items, and pricing are easily editable
 * for presenting live to the restaurant owner.
 */

// Image Assets generated for Taj Mumbai Corner
import heroFeastImg from '@/src/assets/images/hero_mumbai_feast_1793354249223.jpg';
import biryaniImg from '@/src/assets/images/signature_biryani_1793354249609.jpg';
import butterChickenImg from '@/src/assets/images/signature_butter_chicken_1793354252362.jpg';
import tandooriPlatterImg from '@/src/assets/images/signature_tandoori_platter_1793354251923.jpg';
import ambienceImg from '@/src/assets/images/restaurant_ambience_1793354252518.jpg';
import karahiNaanImg from '@/src/assets/images/signature_karahi_naan_1793354268895.jpg';
import samosaChaatImg from '@/src/assets/images/mumbai_street_specialty_1793354268991.jpg';

export interface RestaurantConfig {
  name: string;
  tagline: string;
  mainHeading: string;
  supportingText: string;
  whatsappNumber: string;
  phoneNumber: string;
  emailAddress: string;
  address: string;
  cityArea: string;
  openingHours: {
    weekdays: string;
    weekends: string;
    sunday: string;
  };
  mapsUrl: string;
  currencySymbol: string;
}

export const defaultRestaurantConfig: RestaurantConfig = {
  name: 'Taj Mumbai Corner',
  tagline: 'Authentic Indian Cuisine & Mumbai Delicacies',
  mainHeading: 'Experience the Taste of Mumbai',
  supportingText: 'Authentic flavours, freshly prepared dishes and a dining experience worth remembering.',
  // Editable configuration variable for WhatsApp ordering
  whatsappNumber: '+447000000000',
  phoneNumber: '+44 20 7946 0991',
  emailAddress: 'info@tajmumbaicorner.com',
  address: '124 High Street, Spice Quarter',
  cityArea: 'London / Central Promenade (Editable Placeholder)',
  openingHours: {
    weekdays: 'Mon – Thu: 12:00 PM – 10:30 PM',
    weekends: 'Fri – Sat: 12:00 PM – 11:30 PM',
    sunday: 'Sunday: 1:00 PM – 10:00 PM',
  },
  mapsUrl: 'https://maps.google.com/?q=Taj+Mumbai+Corner+Restaurant',
  currencySymbol: '£',
};

export interface MenuItem {
  id: string;
  name: string;
  category: 'biryani' | 'curries' | 'tandoor' | 'breads' | 'street';
  categoryLabel: string;
  description: string;
  price: number;
  image: string;
  spiceLevel: 'Mild' | 'Medium' | 'Hot';
  dietary?: string;
  isChefSpecial?: boolean;
}

export const initialMenuItems: MenuItem[] = [
  {
    id: 'biryani-01',
    name: 'Royal Chicken Dum Biryani',
    category: 'biryani',
    categoryLabel: 'Biryani & Rice',
    description: 'Aromatic long-grain basmati layered with tender chicken, infused with saffron, caramelized onions, and royal spices cooked in sealed handi.',
    price: 13.95,
    image: biryaniImg,
    spiceLevel: 'Medium',
    dietary: 'Halal',
    isChefSpecial: true,
  },
  {
    id: 'curry-01',
    name: 'Old Delhi Butter Chicken',
    category: 'curries',
    categoryLabel: 'Royal Curries',
    description: 'Tender tandoor-roasted chicken simmered in a velvety sauce of ripe tomatoes, butter, cashews, and delicate dried fenugreek leaves.',
    price: 13.50,
    image: butterChickenImg,
    spiceLevel: 'Mild',
    dietary: 'Gluten-Free',
    isChefSpecial: true,
  },
  {
    id: 'curry-02',
    name: 'Traditional Chicken Karahi',
    category: 'curries',
    categoryLabel: 'Royal Curries',
    description: 'Succulent chicken stir-cooked in an authentic iron wok with crushed coriander seeds, freshly grated ginger, garlic, and fresh green chilies.',
    price: 12.95,
    image: karahiNaanImg,
    spiceLevel: 'Hot',
    dietary: 'Halal',
  },
  {
    id: 'tandoor-01',
    name: 'Sizzling Tandoori Mixed Grill',
    category: 'tandoor',
    categoryLabel: 'Clay Oven Tandoor',
    description: 'Platter of fire-roasted Seekh Kebabs and smoky spiced Chicken Tikka served on a sizzling cast-iron skillet with charred lime and mint yogurt.',
    price: 15.95,
    image: tandooriPlatterImg,
    spiceLevel: 'Medium',
    dietary: 'High Protein',
    isChefSpecial: true,
  },
  {
    id: 'tandoor-02',
    name: 'Chicken Tikka Angara',
    category: 'tandoor',
    categoryLabel: 'Clay Oven Tandoor',
    description: 'Boneless tender chicken marinated for 24 hours in spiced Greek yogurt, Kashmiri paprika, garlic, and ground garam masala.',
    price: 11.95,
    image: tandooriPlatterImg,
    spiceLevel: 'Hot',
    dietary: 'Halal',
  },
  {
    id: 'tandoor-03',
    name: 'Royal Seekh Kebab',
    category: 'tandoor',
    categoryLabel: 'Clay Oven Tandoor',
    description: 'Minced lamb and chicken skewered with fresh mint, cilantro, roasted cumin, and crushed green chillies, charred over open charcoal coals.',
    price: 10.95,
    image: tandooriPlatterImg,
    spiceLevel: 'Medium',
    dietary: 'Halal',
  },
  {
    id: 'breads-01',
    name: 'Garlic & Coriander Naan',
    category: 'breads',
    categoryLabel: 'Fresh Breads',
    description: 'Hand-stretched leavened flatbread slapped onto the inner clay tandoor wall, brushed with golden melted ghee, minced garlic, and fresh herbs.',
    price: 3.75,
    image: karahiNaanImg,
    spiceLevel: 'Mild',
    dietary: 'Vegetarian',
  },
  {
    id: 'street-01',
    name: 'Mumbai Samosa Chaat Delicacy',
    category: 'street',
    categoryLabel: 'Mumbai Street Delights',
    description: 'Crisp golden pastry stuffed with spiced potatoes, crushed and dressed with spiced yogurt, date-tamarind chutney, pomegranate, and crunchy sev.',
    price: 7.95,
    image: samosaChaatImg,
    spiceLevel: 'Medium',
    dietary: 'Vegetarian',
    isChefSpecial: true,
  },
];

export interface WhyChooseUsFeature {
  title: string;
  description: string;
  highlight: string;
}

export const whyChooseUsFeatures: WhyChooseUsFeature[] = [
  {
    title: 'Freshly Prepared Food',
    description: 'Every dish is crafted to order from scratch, ensuring sizzling freshness, vibrant aromatics, and rich nutritional integrity.',
    highlight: 'Prepared fresh daily to order',
  },
  {
    title: 'Authentic Flavours',
    description: 'Traditional slow-cooking methods, house-ground spice blends, and authentic recipes inspired by the royal culinary heritage of Mumbai.',
    highlight: 'Heritage Indian spice recipes',
  },
  {
    title: 'Welcoming Hospitality',
    description: 'Attentive, courteous service grounded in the timeless Indian tradition of treating every guest with genuine warmth and respect.',
    highlight: 'Dedicated guest attention',
  },
  {
    title: 'Memorable Dining Experience',
    description: 'An elegant, candlelit setting with handcrafted brass accents, plush burgundy seating, and a warm ambiance suited for all occasions.',
    highlight: 'Fine-dining comfort & warmth',
  },
];

export interface GalleryItem {
  id: string;
  title: string;
  category: 'All' | 'Biryani' | 'Curries' | 'Tandoor' | 'Ambience';
  image: string;
  caption: string;
}

export const galleryItems: GalleryItem[] = [
  {
    id: 'gal-1',
    title: 'Royal Indian Feast Table',
    category: 'All',
    image: heroFeastImg,
    caption: 'A lavish dining spread featuring slow-cooked biryani, curries, and smoking tandoor.',
  },
  {
    id: 'gal-2',
    title: 'Authentic Dum Biryani in Copper Handi',
    category: 'Biryani',
    image: biryaniImg,
    caption: 'Sealed clay-pot dum cooking preserving delicate cardamom, star anise, and saffron aromas.',
  },
  {
    id: 'gal-3',
    title: 'Velvety Butter Chicken & Charred Naan',
    category: 'Curries',
    image: butterChickenImg,
    caption: 'Silky tomato gravy infused with fenugreek and heavy cream, served alongside blistered naan.',
  },
  {
    id: 'gal-4',
    title: 'Sizzling Tandoori Kebabs & Tikka',
    category: 'Tandoor',
    image: tandooriPlatterImg,
    caption: 'Clay-oven charred skewers served on smoking cast iron with tangy coriander mint chutney.',
  },
  {
    id: 'gal-5',
    title: 'Taj Mumbai Corner Fine Dining Hall',
    category: 'Ambience',
    image: ambienceImg,
    caption: 'Intimate ambiance with deep burgundy booths, golden arches, and candlelit timber tables.',
  },
  {
    id: 'gal-6',
    title: 'Traditional Karahi & Naan Basket',
    category: 'Curries',
    image: karahiNaanImg,
    caption: 'Freshly tossed chicken karahi with hand-pulled garlic butter naan from the tandoor.',
  },
];

export interface TestimonialPlaceholder {
  id: string;
  reviewer: string;
  title: string;
  quote: string;
  visitType: string;
  rating: number;
}

export const testimonialPlaceholders: TestimonialPlaceholder[] = [
  {
    id: 'test-1',
    reviewer: 'Demonstration Guest Review 01',
    title: 'The Dum Biryani is Unmatched',
    quote: 'The flavors and aroma of the Dum Biryani immediately transported me. The chicken was extraordinarily tender and the garlic naan was warm, buttery, and crisp.',
    visitType: 'Dinner Guest',
    rating: 5,
  },
  {
    id: 'test-2',
    reviewer: 'Demonstration Guest Review 02',
    title: 'Exceptional Service & Atmosphere',
    quote: 'Taj Mumbai Corner has set a new benchmark for Indian dining. The burgundy booths and warm golden lighting make it perfect for celebratory dinners.',
    visitType: 'Family Celebration',
    rating: 5,
  },
  {
    id: 'test-3',
    reviewer: 'Demonstration Guest Review 03',
    title: 'Authentic Spice Balance & Freshness',
    quote: 'You can taste the dedication in every curry. The butter chicken has that perfect balance of tangy tomato and smooth cream without being overly sweet.',
    visitType: 'Frequent Diner',
    rating: 5,
  },
];
