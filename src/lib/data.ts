
export type Product = {
  id: string;
  name: string;
  slug: string;
  category: string;
  price: number;
  description: string;
  shortDescription: string;
  images: { src: string; alt: string; hint: string }[];
  ingredients: string[];
  howToUse: string;
};

export type Category = {
  name: string;
  href: string;
  image: string;
  hint: string;
  subcategories: { name: string; href: string; description: string }[];
};

export type JournalPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  author: string;
  date: string;
  content: string;
};

export type Testimonial = {
    name: string;
    quote: string;
    rating: number;
};

export type Order = {
  id: string;
  date: string;
  status: 'Delivered' | 'Processing' | 'Shipped';
  total: number;
  items: { name: string; image: string; quantity: number }[];
};


export const products: Product[] = [
  {
    id: '1',
    name: 'Luminous Glow Serum',
    slug: 'luminous-glow-serum',
    category: 'Skincare',
    price: 72.00,
    shortDescription: 'A potent vitamin C serum for radiant, even-toned skin.',
    description: 'Our Luminous Glow Serum is a powerhouse of antioxidants, featuring a stable form of Vitamin C and Hyaluronic Acid. It brightens the complexion, reduces the appearance of dark spots, and provides intense hydration for a youthful, dewy glow.',
    images: [
      { src: 'https://placehold.co/600x600.png', alt: 'Luminous Glow Serum Bottle', hint: 'serum bottle' },
      { src: 'https://placehold.co/600x600.png', alt: 'Serum texture on skin', hint: 'serum texture' },
      { src: 'https://placehold.co/600x600.png', alt: 'Model holding serum', hint: 'model skincare' },
    ],
    ingredients: ['Aqua (Water)', 'Ascorbic Acid (Vitamin C)', 'Sodium Hyaluronate', 'Glycerin', 'Ferulic Acid', 'Tocopherol (Vitamin E)'],
    howToUse: 'Apply 2-3 drops to clean, dry skin every morning. Follow with moisturizer and sunscreen.',
  },
  {
    id: '2',
    name: 'Hydra-Intense Moisturizer',
    slug: 'hydra-intense-moisturizer',
    category: 'Skincare',
    price: 58.00,
    shortDescription: 'A rich, nourishing cream for deep, lasting hydration.',
    description: 'Quench thirsty skin with our Hydra-Intense Moisturizer. Formulated with ceramides, squalane, and a blend of botanical extracts, this luxurious cream strengthens the skin\'s moisture barrier, soothes dryness, and leaves skin feeling soft and supple.',
    images: [
      { src: 'https://placehold.co/600x600.png', alt: 'Hydra-Intense Moisturizer Jar', hint: 'moisturizer jar' },
      { src: 'https://placehold.co/600x600.png', alt: 'Cream texture', hint: 'cream texture' },
      { src: 'https://placehold.co/600x600.png', alt: 'Moisturizer with natural elements', hint: 'natural skincare' },
    ],
    ingredients: ['Aqua (Water)', 'Squalane', 'Ceramide NP', 'Butyrospermum Parkii (Shea) Butter', 'Glycerin', 'Vitis Vinifera (Grape) Seed Oil'],
    howToUse: 'Apply a dime-sized amount to face and neck morning and night after serums.',
  },
  {
    id: '3',
    name: 'Velvet Matte Foundation',
    slug: 'velvet-matte-foundation',
    category: 'Makeup',
    price: 45.00,
    shortDescription: 'A long-wearing, buildable foundation for a flawless finish.',
    description: 'Achieve a seamless, soft-matte complexion with our Velvet Matte Foundation. This lightweight, breathable formula blends effortlessly to conceal imperfections and control shine without caking or creasing. Available in 30 shades.',
    images: [
      { src: 'https://placehold.co/600x600.png', alt: 'Velvet Matte Foundation bottle', hint: 'foundation bottle' },
      { src: 'https://placehold.co/600x600.png', alt: 'Foundation swatches on different skin tones', hint: 'foundation swatches' },
      { src: 'https://placehold.co/600x600.png', alt: 'Model with flawless makeup', hint: 'makeup model' },
    ],
    ingredients: ['Dimethicone', 'Aqua (Water)', 'Isododecane', 'Talc', 'Silica', 'Titanium Dioxide'],
    howToUse: 'Start with a small amount and blend from the center of the face outwards using a brush, sponge, or fingertips. Layer for more coverage.',
  },
  {
    id: '4',
    name: 'Radiant Cream Blush',
    slug: 'radiant-cream-blush',
    category: 'Makeup',
    price: 28.00,
    shortDescription: 'A dewy, buildable cream blush for a natural flush.',
    description: 'Our Radiant Cream Blush melts into the skin for a luminous, lit-from-within glow. The sheer, buildable formula is easy to apply and gives a healthy, long-lasting wash of color to the cheeks. Can also be used on lips.',
    images: [
      { src: 'https://placehold.co/600x600.png', alt: 'Radiant Cream Blush compact', hint: 'blush compact' },
      { src: 'https://placehold.co/600x600.png', alt: 'Blush swatch on arm', hint: 'blush swatch' },
      { src: 'https://placehold.co/600x600.png', alt: 'Model with rosy cheeks', hint: 'rosy cheeks' },
    ],
    ingredients: ['Ricinus Communis (Castor) Seed Oil', 'Caprylic/Capric Triglyceride', 'Cera Alba (Beeswax)', 'Mica', 'Tocopherol (Vitamin E)'],
    howToUse: 'Warm a small amount with your fingertips and gently tap onto the apples of your cheeks, blending upwards towards the temples.',
  }
];

export const categories: Category[] = [
  {
    name: 'Skincare',
    href: '#',
    image: 'https://placehold.co/500x700.png',
    hint: 'skincare routine',
    subcategories: [
      { name: 'Cleansers', href: '#', description: 'Purify and refresh your skin.' },
      { name: 'Serums', href: '#', description: 'Target specific concerns with potent formulas.' },
      { name: 'Moisturizers', href: '#', description: 'Hydrate and protect your skin barrier.' },
      { name: 'Masks & Treatments', href: '#', description: 'Indulge in a spa-like experience.' },
    ],
  },
  {
    name: 'Makeup',
    href: '#',
    image: 'https://placehold.co/500x700.png',
    hint: 'makeup flatlay',
    subcategories: [
      { name: 'Foundation', href: '#', description: 'Create a flawless canvas.' },
      { name: 'Blush & Bronzer', href: '#', description: 'Add warmth and dimension.' },
      { name: 'Eyeshadow', href: '#', description: 'Define and enhance your eyes.' },
      { name: 'Lipstick', href: '#', description: 'Complete your look with bold color.' },
    ],
  },
  {
    name: 'Body Care',
    href: '#',
    image: 'https://placehold.co/500x700.png',
    hint: 'body lotion',
    subcategories: [
      { name: 'Body Wash', href: '#', description: 'Cleanse and invigorate your skin.' },
      { name: 'Lotions & Oils', href: '#', description: 'Nourish your body from head to toe.' },
      { name: 'Scrubs & Exfoliants', href: '#', description: 'Polish and smooth for radiant skin.' },
      { name: 'Hand & Foot Care', href: '#', description: 'Pamper your hardest-working areas.' },
    ],
  },
  {
    name: 'Sets',
    href: '#',
    image: 'https://placehold.co/500x700.png',
    hint: 'skincare set',
    subcategories: [
        { name: 'Skincare Kits', href: '#', description: 'Curated routines for your skin type.' },
        { name: 'Makeup Bundles', href: '#', description: 'Get a complete look for less.' },
        { name: 'Gift Sets', href: '#', description: 'The perfect present for any occasion.' },
        { name: 'Travel Sizes', href: '#', description: 'Your favorites, on the go.' },
    ]
  }
];

export const journalPosts: JournalPost[] = [
    {
      id: '1',
      slug: 'ingredient-spotlight-hyaluronic-acid',
      title: 'Ingredient Spotlight: The Magic of Hyaluronic Acid',
      excerpt: 'Dive deep into the science behind one of skincare\'s most beloved ingredients. Learn how it works and why it\'s essential for plump, hydrated skin.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'hyaluronic acid bottle',
      author: 'Dr. Evelyn Reed',
      date: 'October 26, 2023',
      content: '<p>Hyaluronic Acid (HA) is a naturally occurring glycosaminoglycan found throughout the body’s connective tissue. Glycosaminoglycans are simply long unbranched carbohydrates, or sugars, called polysaccharides.</p><p>The magic of HA lies in its incredible ability to retain water. One gram of hyaluronic acid is able to hold up to six liters of water. This is crucial in helping skin retain moisture, which results in a plumper, smoother appearance. As we age, our natural HA levels decline, which is why incorporating it into your skincare routine is so beneficial.</p>'
    },
    {
      id: '2',
      slug: '5-steps-to-a-glowing-complexion',
      title: '5 Steps to a Glowing Morning Complexion',
      excerpt: 'Your morning routine sets the stage for your skin\'s health all day long. Follow these five simple steps to achieve a radiant, protected glow.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'woman morning routine',
      author: 'Chloe Davis',
      date: 'October 15, 2023',
      content: '<h3>Step 1: Gentle Cleanse</h3><p>Start with a mild, pH-balanced cleanser to remove impurities without stripping natural oils.</p><h3>Step 2: Antioxidant Serum</h3><p>Apply a Vitamin C serum to protect against environmental damage.</p><h3>Step 3: Hydrate</h3><p>Lock in moisture with a hyaluronic acid-based moisturizer.</p><h3>Step 4: Eye Cream</h3><p>Gently tap on a hydrating eye cream to awaken the delicate eye area.</p><h3>Step 5: Sunscreen</h3><p>Never skip SPF! It\'s the most important step to prevent premature aging.</p>'
    },
    {
      id: '3',
      slug: 'clean-beauty-what-it-means-to-us',
      title: 'Clean Beauty: What It Means to Us',
      excerpt: 'The term "clean beauty" is everywhere, but what does it actually mean? At Lumineux, we have a clear philosophy on creating safe, effective, and ethical products.',
      imageUrl: 'https://placehold.co/600x400.png',
      imageHint: 'leaves and petals',
      author: 'The Lumineux Team',
      date: 'September 30, 2023',
      content: '<p>For us, clean beauty means creating products that are mindful. Mindful of the ingredients we use, the impact on your skin, and our effect on the environment. We formulate without parabens, sulfates, phthalates, and synthetic fragrances. We are cruelty-free and prioritize sustainably sourced ingredients and recyclable packaging.</p>'
    },
];

export const testimonials: Testimonial[] = [
    { name: 'Jessica L.', quote: 'The Luminous Glow Serum completely transformed my skin! My dark spots have faded and I have a natural radiance I haven\'t seen in years.', rating: 5 },
    { name: 'Maria G.', quote: 'I have very sensitive skin, and the Hydra-Intense Moisturizer is the only thing that keeps it calm and hydrated without causing breakouts. It\'s a holy grail product!', rating: 5 },
    { name: 'Samantha P.', quote: 'Finally, a foundation that looks like my skin, but better. The Velvet Matte Foundation has incredible coverage but feels so lightweight.', rating: 5 },
    { name: 'Emily R.', quote: 'The Radiant Cream Blush is so easy to use and gives the most beautiful, dewy flush. I get compliments on my "natural glow" every time I wear it.', rating: 5 },
];


export const orders: Order[] = [
  {
    id: 'ORD-12345',
    date: '2023-10-15',
    status: 'Delivered',
    total: 100.00,
    items: [
      { name: 'Luminous Glow Serum', image: 'https://placehold.co/64x64.png', quantity: 1 },
      { name: 'Radiant Cream Blush', image: 'https://placehold.co/64x64.png', quantity: 1 },
    ],
  },
  {
    id: 'ORD-12366',
    date: '2023-11-01',
    status: 'Processing',
    total: 58.00,
    items: [
      { name: 'Hydra-Intense Moisturizer', image: 'https://placehold.co/64x64.png', quantity: 1 },
    ],
  },
];
