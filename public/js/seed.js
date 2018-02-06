window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }

  const products = [
    {
      id: 1,
      title: 'Dune',
      description: 'A great book, yet not so great movie.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/daniel.jpg',
      productImageUrl: 'images/products/dune.jpg',
    },
    {
      id: 2,
      title: 'Hunger Games',
      description: 'This book reads itself.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/kristy.png',
      productImageUrl: 'images/products/hunger_games.jpg',
    },
    {
      id: 3,
      title: 'Mastery: The Keys to Success and Long-Term Fulfillment',
      description: 'This book changes lives.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/veronika.jpg',
      productImageUrl: 'images/products/mastery.jpg',
    },
    {
      id: 4,
      title: 'Programming Ruby',
      description: 'The programatic programmer\'s guide.',
      url: '#',
      votes: generateVoteCount(),
      submitterAvatarUrl: 'images/avatars/molly.png',
      productImageUrl: 'images/products/ruby.jpg',
    },
  ];

  return { products: products };
}());
