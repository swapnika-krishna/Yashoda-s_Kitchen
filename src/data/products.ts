import { Product, BusinessInfo } from '../types';

export const BUSINESS_INFO: BusinessInfo = {
  name: "Yashoda’s Divine Kitchen",
  subtitle: "Sattvic Pickles & Powders",
  tagline: "Pure • Traditional • Divine",
  supportingText: "Traditional flavors prepared with care, inspired by timeless Indian recipes.",
  phone: "7569398008",
  whatsappNumber: "917569398008",
  fssaiLicense: "23626029003141",
  suitableForText: "Suitable for Vaishnavas, Brahmins & Ayyappa Swamis",
  googleMapsQuery: "Yashoda's Divine Kitchen, Hyderabad, Telangana",
  googleMapsDirectionsUrl: "https://www.google.com/maps/search/?api=1&query=Yashoda%27s+Divine+Kitchen"
};

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. PICKLES (7 Items from Poster)
  // ==========================================
  {
    id: 'mango-pickle',
    name: 'Mango Pickle',
    teluguName: 'Avakaya Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Sun-cured in traditional ceramic Bharani porcelain with cold-pressed gingelly oil, stone-ground mustard & rock salt.',
    description: 'The crowning glory of Andhra culinary heritage. Raw tender green mangoes cut with precision, mixed with pungent mustard powder, fiery sun-dried red chilli, and cold-pressed sesame oil. Aged naturally under gentle sunlight without onions, garlic, or vinegar.',
    image: '/images/mango_pickle.jpg',
    ingredients: ['Raw Country Mangoes', 'Cold-Pressed Gingelly (Sesame) Oil', 'Mustard Powder', 'Guntur Red Chilli', 'Rock Salt', 'Fenugreek', 'Turmeric', 'Pure Hing (Asafoetida)'],
    storageInstructions: 'Keep in ceramic or glass jar with a dry wooden or steel spoon. Keep oil floating slightly over the pickle.',
    badge: 'Signature Heritage'
  },
  {
    id: 'tomato-pickle',
    name: 'Tomato Pickle',
    teluguName: 'Tamata Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Farm-fresh country tomatoes slow-simmered with aged tamarind pulp and tempered with mustard seeds & curry leaves.',
    description: 'Juicy, sun-ripened desi tomatoes slow-cooked with thick tamarind extract, pure rock salt, and stone-ground spices. Infused with aromatic curry leaves and cold-pressed oil, imparting deep homestyle tangy flavor.',
    image: '/images/tomato_pickle.jpg',
    ingredients: ['Farm-Fresh Country Tomatoes', 'Aged Tamarind Pulp', 'Cold-Pressed Sesame Oil', 'Red Chilli Powder', 'Rock Salt', 'Mustard Seeds', 'Curry Leaves', 'Asafoetida'],
    storageInstructions: 'Store in airtight dry jar. Avoid damp contact.',
    badge: 'All-Time Favorite'
  },
  {
    id: 'lemon-pickle',
    name: 'Lemon Pickle',
    teluguName: 'Nimmakaya Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Salt-cured juicy Kagzi lemons softened in their own juice with turmeric and roasted fenugreek.',
    description: 'Handpicked thin-skinned lemons naturally matured in Vedic rock salt for weeks until peels turn golden and fork-tender. Tempered with turmeric and roasted methi seeds. A digestive staple in traditional Indian thalis.',
    image: '/images/lemon_pickle.jpg',
    ingredients: ['Thin-Skinned Kagzi Lemons', 'Pure Rock Salt', 'Red Chilli Powder', 'Turmeric', 'Roasted Fenugreek', 'Asafoetida'],
    storageInstructions: 'Room temperature storage in dry container. Flavor improves as it cures.',
    badge: 'Digestive Classic'
  },
  {
    id: 'ginger-pickle',
    name: 'Ginger Pickle',
    teluguName: 'Allam Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Fresh scraped ginger simmered with organic jaggery (bellam), tamarind, and cold-pressed sesame oil.',
    description: 'A celebrated Telugu festive delicacy. Freshly scraped spicy ginger blended with dark jaggery and sour tamarind to achieve an exquisite harmony of sweet, tangy, and piquant heat. Incomparable accompaniment for hot Pesarattu and steamed rice.',
    image: '/images/ginger_pickle.jpg',
    ingredients: ['Fresh Native Ginger', 'Organic Bellam (Jaggery)', 'Tamarind Pulp', 'Red Chilli Powder', 'Cold-Pressed Sesame Oil', 'Rock Salt', 'Mustard', 'Fenugreek'],
    storageInstructions: 'Store in clean porcelain or glass jar away from moisture.',
    badge: 'Festive Special'
  },
  {
    id: 'amla-pickle',
    name: 'Amla Pickle',
    teluguName: 'Usirikaya Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Whole wild Indian gooseberries gently steamed and steeped in mustard-chilli seasoned cold-pressed oil.',
    description: 'Revered in Ayurveda as a supreme rasayana. Whole wild forest amlas naturally seasoned with rock salt, yellow mustard, and cold-pressed gingelly oil. Prepared specially for Karthika Masam and everyday immunity without any onions or garlic.',
    image: '/images/amla_pickle.jpg',
    ingredients: ['Wild Amla (Gooseberry)', 'Cold-Pressed Sesame Oil', 'Mustard Powder', 'Red Chilli Powder', 'Rock Salt', 'Turmeric', 'Fenugreek'],
    storageInstructions: 'Ensure the amlas remain immersed under seasoned sesame oil.',
    badge: 'Ayurvedic Rasayana'
  },
  {
    id: 'gongura-pickle',
    name: 'Gongura Pickle',
    teluguName: 'Gongura Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Sun-wilted red-stemmed roselle (sorrel) leaves slowly braised in cold-pressed oil with roasted spices.',
    description: 'The legendary "Andhra Matha" delicacy. Sourced from indigenous sour red-stem sorrel leaves, sun-dried to eliminate moisture, and slow-roasted with red chillies, coriander seeds, and sesame oil. Deep, tangy, and uniquely satisfying with hot rice and melted ghee.',
    image: '/images/gongura_pickle.jpg',
    ingredients: ['Red-Stem Gongura Leaves', 'Cold-Pressed Sesame Oil', 'Red Chillies', 'Rock Salt', 'Coriander Seeds', 'Fenugreek', 'Mustard', 'Hing'],
    storageInstructions: 'Store in airtight porcelain jar in a cool shelf.',
    badge: 'Andhra Royal Pride'
  },
  {
    id: 'raw-jackfruit-pickle',
    name: 'Raw Jackfruit Pickle',
    teluguName: 'Panasa Mukkala Pachadi',
    category: 'pickles',
    traditionalPreparation: 'Tender baby raw jackfruit chunks steam-softened, sun-dried, and cured in robust mustard oil masala.',
    description: 'Rare and authentic culinary art. Firm, fibrous young raw jackfruit (panasa) cut into bite-sized pieces, steam-cured, and steeped in aromatic mustard and red chilli spices. Provides a hearty, textured, meaty bite while remaining 100% pure sattvic vegetarian.',
    image: '/images/jackfruit_pickle.jpg',
    ingredients: ['Tender Raw Green Jackfruit', 'Cold-Pressed Sesame Oil', 'Mustard Seeds Powder', 'Red Chilli Powder', 'Rock Salt', 'Turmeric', 'Fenugreek', 'Asafoetida'],
    storageInstructions: 'Keep in airtight glass jar. Handle with dry spoon.',
    badge: 'Heritage Rare Find'
  },

  // ==========================================
  // 2. POWDERS & PODIS (12 Items from Poster)
  // ==========================================
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    teluguName: 'Pasuppu',
    category: 'powders',
    subCategory: 'Single Origin Spice',
    traditionalPreparation: 'Sun-dried high-curcumin whole turmeric fingers stone-pulverized at low friction temperature.',
    description: 'Vibrant golden turmeric ground exclusively from naturally cured turmeric rhizomes. Free from artificial yellow dye, lead chromate, starch, or bulking fillers. Imparts divine fragrance and deep color to your daily cooking and deity pujas.',
    image: '/images/turmeric_powder.jpg',
    ingredients: ['100% Pure Sun-Dried Salem Turmeric Rhizomes'],
    storageInstructions: 'Store in airtight stainless steel or amber glass container away from direct sunlight.'
  },
  {
    id: 'red-chilli-powder',
    name: 'Red Chilli Powder',
    teluguName: 'Karam',
    category: 'powders',
    subCategory: 'Single Origin Spice',
    traditionalPreparation: 'Stem-plucked sun-dried Guntur Sannam chillies pounded slowly without chemical color enhancers.',
    description: 'Pure, radiant red chilli powder ground from hand-sorted Guntur chillies. Delivers a natural deep crimson hue and balanced pungent heat. Completely free from Sudan dyes, brick powder, or artificial additives.',
    image: '/images/red_chilli_powder.jpg',
    ingredients: ['Selected Guntur Sun-Dried Red Chillies (Pounded with seeds & pods)'],
    storageInstructions: 'Store in a dry, cool cabinet.'
  },
  {
    id: 'coriander-powder',
    name: 'Coriander Powder',
    teluguName: 'Dhaniyala Podi',
    category: 'powders',
    subCategory: 'Single Origin Spice',
    traditionalPreparation: 'Aromatic green coriander seeds slow-roasted on clay pans and pulverized for maximum volatile oil retention.',
    description: 'Freshly pulverized from premium round coriander seeds. Slow roasted prior to milling to unlock deep herbal citrus notes. An essential everyday foundation for Indian gravies, rasams, and vegetable curries.',
    image: '/images/coriander_powder.jpg',
    ingredients: ['100% Whole Coriander Seeds (Dhaniyalu)'],
    storageInstructions: 'Keep in airtight tin to preserve the essential volatile aroma.'
  },
  {
    id: 'cumin-powder',
    name: 'Cumin Powder',
    teluguName: 'Jeelakarra Podi',
    category: 'powders',
    subCategory: 'Single Origin Spice',
    traditionalPreparation: 'Lightly roasted fragrant jeera seeds gently ground into fine digestive powder.',
    description: 'Made from select cumin seeds lightly tossed over low flame to bring out an earthy, warming aroma. Promotes healthy digestion and adds comforting depth to buttermilk, dal, and curries.',
    image: '/images/cumin_powder.jpg',
    ingredients: ['Whole Selected Cumin Seeds (Jeelakarra)'],
    storageInstructions: 'Store in an airtight jar in a cool, dry place.'
  },
  {
    id: 'sambar-powder',
    name: 'Sambar Powder',
    teluguName: 'Sambar Podi',
    category: 'powders',
    subCategory: 'Heritage Masala',
    traditionalPreparation: '14 handpicked traditional spices and lentils individually dry-roasted in iron kadai and stone ground.',
    description: 'Crafted according to age-old South Indian temple kitchen proportions. Blends coriander seeds, toor dal, chana dal, cumin, fenugreek, black pepper, turmeric, and asafoetida. Produces fragrant, soul-satisfying traditional Sambar without garlic.',
    image: '/images/sambar_powder.jpg',
    ingredients: ['Coriander Seeds', 'Toor Dal', 'Chana Dal', 'Red Chillies', 'Cumin', 'Fenugreek Seeds', 'Black Pepper', 'Turmeric', 'Compounded Hing'],
    storageInstructions: 'Airtight storage away from steam.'
  },
  {
    id: 'rasam-powder',
    name: 'Rasam Powder',
    teluguName: 'Charu Podi',
    category: 'powders',
    subCategory: 'Heritage Masala',
    traditionalPreparation: 'Fresh black pepper, cumin seeds, coriander, and curry leaves roasted to crackling perfection and coarse ground.',
    description: 'The secret to authentic comforting rasam. Rich in Malabar black peppercorns and aromatic cumin, delivering immune-boosting warmth and digestive relief. Creates soothing rasam within minutes.',
    image: '/images/rasam_powder.jpg',
    ingredients: ['Tellicherry Black Pepper', 'Cumin Seeds', 'Coriander Seeds', 'Toor Dal', 'Dry Curry Leaves', 'Red Chillies', 'Turmeric', 'Asafoetida'],
    storageInstructions: 'Keep in dry airtight jar.'
  },
  {
    id: 'garam-masala',
    name: 'Garam Masala',
    teluguName: 'Sattvic Garam Masala',
    category: 'powders',
    subCategory: 'Heritage Masala',
    traditionalPreparation: 'Whole royal sweet spices—cloves, green cardamom, cinnamon, mace & bay leaves—slow-milled without onion or garlic.',
    description: 'An exceptionally refined, aromatic blend of whole warming spices. Free from mace adulterants or cheap fillers. A tiny pinch sprinkled over curries, biryanis, or gravies releases an intoxicating, royal aroma.',
    image: '/images/garam_masala.jpg',
    ingredients: ['Cinnamon Quills', 'Green Cardamom', 'Cloves', 'Star Anise', 'Mace', 'Nutmeg', 'Bay Leaves', 'Shahi Jeera', 'Fennel'],
    storageInstructions: 'Store in airtight glass container.'
  },
  {
    id: 'kura-karam',
    name: 'Kura Karam',
    teluguName: 'Kura Karam (Curry Chilli Spice)',
    category: 'powders',
    subCategory: 'Heritage Masala',
    traditionalPreparation: 'Special Andhra multi-spice curry powder roasted with lentils, cumin, coriander & rock salt for instant dry vegetable fries.',
    description: 'The iconic secret weapon of Andhra kitchens. A versatile multi-spice seasoning powder blended specially for dry vegetable curries (vepudulu like bendakaya, aloo, dondakaya). Eliminates the need for multiple spice boxes.',
    image: '/images/kura_karam.jpg',
    ingredients: ['Guntur Red Chillies', 'Coriander Seeds', 'Cumin', 'Fenugreek', 'Chana Dal', 'Curry Leaves', 'Rock Salt', 'Turmeric', 'Hing'],
    storageInstructions: 'Keep in dry airtight jar.'
  },
  {
    id: 'ekadasi-palli-podi',
    name: 'Ekadasi Palli Podi',
    teluguName: 'Ekadasi Peanut Podi',
    category: 'powders',
    subCategory: 'Ekadasi Vrata Special',
    traditionalPreparation: 'Slow-roasted native peanuts, Sendha Namak (rock salt), cumin, and red chillies prepared with pure vrata guidelines.',
    description: 'Formulated in strict adherence to Vedic Ekadasi fasting codes. Free from grains, lentils, onion, and table salt. Prepared using slow-roasted peanuts, rock salt, and cumin. Delectable with sabudana khichdi, sama rice, or boiled tubers.',
    image: '/images/ekadasi_palli_podi.jpg',
    ingredients: ['Native Roasted Peanuts (Palli)', 'Sendha Namak (Vedic Rock Salt)', 'Cumin Seeds', 'Sun-Dried Red Chillies'],
    storageInstructions: 'Keep in clean, moisture-free jar dedicated for puja/fasting.',
    isEkadasiSpecial: true,
    badge: 'Ekadasi Vrata'
  },
  {
    id: 'ekadasi-garam-masala',
    name: 'Ekadasi Garam Masala',
    teluguName: 'Ekadasi Vrata Masala',
    category: 'powders',
    subCategory: 'Ekadasi Vrata Special',
    traditionalPreparation: 'Consecrated blend of fasting-approved sweet spices ground with rock salt strictly without forbidden seeds or grains.',
    description: 'Created exclusively for devotees observing Ekadasi and Chaturmasya vows. Made only with permissible sattvic whole spices (cardamom, clove, cinnamon, black pepper, cumin) and Sendha Namak. Perfect for seasoning deity naivedyam.',
    image: '/images/ekadasi_garam_masala.jpg',
    ingredients: ['Sendha Namak', 'Green Cardamom', 'Cloves', 'Cinnamon', 'Black Pepper', 'Cumin Seeds', 'Nutmeg'],
    storageInstructions: 'Keep in consecrated fasting pantry shelf.',
    isEkadasiSpecial: true,
    badge: 'Ekadasi Vrata'
  },
  {
    id: 'idli-karam',
    name: 'Idli Karam',
    teluguName: 'Nalla Karam / Idli Podi',
    category: 'powders',
    subCategory: 'Tiffin & Rice Podi',
    traditionalPreparation: 'Crisp roasted lentils, dried red chillies, curry leaves, and cumin stone-crushed for hot idlis & dosas with ghee.',
    description: 'The quintessential South Indian "Gunpowder". Roasted chana and urad lentils blended with dry red chillies, fragrant curry leaves, and asafoetida. Mixed generously with warm desi ghee or cold-pressed sesame oil over steaming soft idlis.',
    image: '/images/idli_karam.jpg',
    ingredients: ['Urad Dal', 'Chana Dal', 'Red Chillies', 'Curry Leaves', 'Cumin Seeds', 'Rock Salt', 'Asafoetida', 'Cold-Pressed Sesame Oil drops'],
    storageInstructions: 'Store in airtight jar.',
    badge: 'Breakfast Essential'
  },
  {
    id: 'kandi-podi',
    name: 'Kandi Podi',
    teluguName: 'Paruppu Podi (Spiced Toor Dal Podi)',
    category: 'powders',
    subCategory: 'Tiffin & Rice Podi',
    traditionalPreparation: 'Golden toor dal and roasted moong dal stone-ground with dry red chillies, cumin & black pepper.',
    description: 'Beloved Andhra comfort food. A comforting, nutritious protein-rich blend of golden roasted toor dal and moong dal tempered with black pepper and cumin. Best savored mixed with steaming hot rice and a spoonful of homemade ghee.',
    image: '/images/kandi_podi.jpg',
    ingredients: ['Toor Dal', 'Moong Dal', 'Chana Dal', 'Cumin Seeds', 'Black Pepper', 'Red Chillies', 'Rock Salt', 'Hing'],
    storageInstructions: 'Keep in airtight container.',
    badge: 'Homestyle Comfort'
  }
];
