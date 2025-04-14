/* src/mockData.js */
// Mock data for demonstration purposes

// Generate a random date in the past (up to 30 days ago)
const randomDate = () => {
    const date = new Date();
    date.setDate(date.getDate() - Math.floor(Math.random() * 30));
    return date.toISOString();
  };
  
  // Mock users data
  export const mockUsers = [
    {
      id: 1,
      username: 'jane_eco',
      email: 'jane@example.com',
      password: 'password123',
      donatedItems: 15,
      claimedItems: 5,
      imageUrl: "/images/jane.jpg"
    },
    {
      id: 2,
      username: 'john_green',
      email: 'john@example.com',
      password: 'password123',
      donatedItems: 8,
      claimedItems: 12,
      imageUrl: "/images/john.jpg"
    },
    {
      id: 3,
      username: 'emily_sustainable',
      email: 'emily@example.com',
      password: 'password123',
      donatedItems: 22,
      claimedItems: 3,
      imageUrl: "/images/emily.webp"
    },
    {
      id: 4,
      username: 'michael_reuse',
      email: 'michael@example.com',
      password: 'password123',
      donatedItems: 6,
      claimedItems: 8,
      imageUrl: "/images/michael.jpg"
    },
    {
      id: 5,
      username: 'sophia_zerowaste',
      email: 'sophia@example.com',
      password: 'password123',
      donatedItems: 19,
      claimedItems: 7,
      imageUrl: "/images/sophia.jpg"
    }
  ];
  //C:/Users/Megha Prasad/Documents/sdt/swapit/public/images/wooden_dining_table.webp
  // Mock items data
  export const mockItems = [
    {
      id: 1,
      title: 'Wooden Dining Table',
      description: 'Solid oak dining table in good condition. Seats up to 6 people. Some minor scratches but overall in very good shape. Dimensions: 150cm x 90cm x 75cm.',
      category: 'Furniture',
      condition: 'Good',
      location: 'Downtown area',
      imageUrl: '/images/wooden_dining_table.webp',
      donatedBy: 'jane_eco',
      status: 'available',
      createdAt: randomDate()
    },
    {
      id: 2,
      title: 'Set of Children\'s Books',
      description: 'Collection of 15 children\'s books appropriate for ages 6-9. Various stories and educational topics. All in good condition with minimal wear.',
      category: 'Books',
      condition: 'Very Good',
      location: 'Northside',
      imageUrl: '/images/set_of_childrens_books.webp',
      donatedBy: 'emily_sustainable',
      status: 'claimed',
      claimedBy: 'john_green',
      createdAt: randomDate()
    },
    {
      id: 3,
      title: 'Sony Headphones',
      description: 'Sony WH-1000XM3 noise-cancelling headphones. Used but in perfect working condition. Comes with original carrying case and charging cable.',
      category: 'Electronics',
      condition: 'Good',
      location: 'Eastside',
      imageUrl: '/images/sony_headphones.jpg',
      donatedBy: 'michael_reuse',
      status: 'available',
      createdAt: randomDate()
    },
    {
      id: 4,
      title: 'Women\'s Winter Coat',
      description: 'Women\'s winter coat, size M, black color. Down-filled, very warm. Worn for one season only, no damage. From a pet-free, smoke-free home.',
      category: 'Clothing',
      condition: 'Excellent',
      location: 'Westside',
      imageUrl: '/images/womens_winter_coat.webp',
      donatedBy: 'sophia_zerowaste',
      status: 'available',
      createdAt: randomDate()
    },
    {
      id: 5,
      title: 'Desk Lamp',
      description: 'Adjustable desk lamp with LED bulb included. Black color, metal construction. Works perfectly, I just upgraded to a new one.',
      category: 'Home Goods',
      condition: 'Good',
      location: 'Central District',
      imageUrl: '/images/desk_lamp.jpg',
      donatedBy: 'john_green',
      status: 'claimed',
      claimedBy: 'emily_sustainable',
      createdAt: randomDate()
    },
    {
      id: 6,
      title: 'Yoga Mat',
      description: 'Purple yoga mat, 6mm thickness. Used for about 6 months, still has plenty of life left. Cleaned thoroughly, ready for a new home.',
      category: 'Sports & Fitness',
      condition: 'Good',
      location: 'Southside',
      imageUrl: '/images/yoga_mat.jpg',
      donatedBy: 'emily_sustainable',
      status: 'available',
      createdAt: randomDate()
    },
    {
      id: 7,
      title: 'Coffee Table',
      description: 'Glass-top coffee table with wooden frame. In good condition with some minor scratches on the legs. Dimensions: 100cm x 60cm x 45cm.',
      category: 'Furniture',
      condition: 'Fair',
      location: 'Downtown area',
      imageUrl: '/images/coffee_table.jpg',
      donatedBy: 'jane_eco',
      status: 'claimed',
      claimedBy: 'sophia_zerowaste',
      createdAt: randomDate()
    },
    {
      id: 8,
      title: 'Kitchen Blender',
      description: 'Powerful kitchen blender, 750W. Works great for smoothies, soups, and more. About 2 years old but still in excellent working condition.',
      category: 'Kitchen & Appliances',
      condition: 'Good',
      location: 'Northside',
      imageUrl: '/images/kitchen_blender.avif',
      donatedBy: 'michael_reuse',
      status: 'available',
      createdAt: randomDate()
    },
    {
      id: 9,
      title: 'Gardening Tools Set',
      description: 'Set of 5 gardening tools including trowel, fork, cultivator, transplanter, and weeder. Lightly used, still in very good condition.',
      category: 'Garden & Outdoor',
      condition: 'Very Good',
      location: 'Eastside',
      imageUrl: '/images/gardening_tools_set.avif',
      donatedBy: 'sophia_zerowaste',
      status: 'available',
      createdAt: randomDate()
    },
    {
      id: 10,
      title: 'Children\'s Bicycle',
      description: 'Kids bike suitable for ages 6-8 (20" wheels). Blue color, includes training wheels that can be removed. Some scratches but mechanically sound.',
      category: 'Kids & Toys',
      condition: 'Good',
      location: 'Westside',
      imageUrl: '/images/childrens_bicycle.jpeg',
      donatedBy: 'john_green',
      status: 'available',
      createdAt: randomDate()
    }
  ];