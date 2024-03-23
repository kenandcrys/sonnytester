/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products').del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          id: 1,
          category: "womens-fashion",
          subcategory: "Dresses",
          description: "Beautiful dress for special occasions",
          images: ['https://i.imgur.com/HrLVwF6.png'],
          name: 'Elegant Dress',
          price: 89.99,
          status: 'published',
          stock_quantity: 50,
          user_id: 1
        },
        {
          id: 2,
          category: "womens-fashion",
          subcategory: "Tops",
          description: "A comfortable but stylish T-shirt tied off in a knot",
          images: ['https://i.imgur.com/elyMs5B.png'],
          name: 'Tied T-shirt',
          price: 29.99,
          status: 'published',
          stock_quantity: 40,
          user_id: 2
        },
        {
          id: 3,
          category: "womens-fashion",
          subcategory: "Bottoms",
          description: "Fashionable twill skirt with purple smoke-like pattern",
          images: ['https://i.imgur.com/P6UpEGy.png'],
          name: 'Smokey Print Twill Skirt',
          price: 69.99,
          status: 'published',
          stock_quantity: 20,
          user_id: 3
        },
        {
          id: 4,
          category: "womens-fashion",
          subcategory: "Bottoms",
          description: "Ankle-length skirt in Boho style with a rainbow print",
          images: ['https://i.imgur.com/Y5MxdWx.png'],
          name: 'Rainbow Boho Skirt',
          price: 79.99,
          status: 'published',
          stock_quantity: 30,
          user_id: 1
        },
        {
          id: 5,
          category: "womens-fashion",
          subcategory: "Dresses",
          description: "Shoulderless, white, mini skirt-length sundress with lace fringe",
          images: ['https://i.imgur.com/xAYP9oH.png'],
          name: 'Lace-Fringed Shoulderless Sundress',
          price: 69.99,
          status: 'published',
          stock_quantity: 20,
          user_id: 2
        },
        {
          id: 6,
          category: "womens-fashion",
          subcategory: "Dresses",
          description: "Orange ankle length midi dress with button cuffs",
          images: ['https://i.imgur.com/NuTtO2k.png'],
          name: 'Orange Midi Dress',
          price: 119.99,
          status: 'published',
          stock_quantity: 10,
          user_id: 3
        },
        {
          id: 7,
          category: "womens-fashion",
          subcategory: "Dresses",
          description: "Ankle length floral print sundress with full sleeves",
          images: ['https://i.imgur.com/jBKrBXD.png'],
          name: 'Floral Print Sundress',
          price: 99.99,
          status: 'published',
          stock_quantity: 60,
          user_id: 1
        },
        {
          id: 8,
          category: "womens-fashion",
          subcategory: "Jumpsuits",
          description: "Sleeveless jumpsuit with a starry print",
          images: ['https://i.imgur.com/KbiruMM.png'],
          name: 'Starry Print Jumpsuit',
          price: 97.99,
          status: 'published',
          stock_quantity: 40,
          user_id: 2
        },
        {
          id: 9,
          category: "womens-fashion",
          subcategory: "Jumpsuits",
          description: "Camo print pantsuit with flared collar",
          images: ['https://i.imgur.com/Oop40sP.png'],
          name: 'Camo Pantsuit',
          price: 111.99,
          status: 'published',
          stock_quantity: 10,
          user_id: 3
        },
        {
          id: 10,
          category: "womens-fashion",
          subcategory: "Activewear",
          description: "White sports top/workout top for gym",
          images: ['https://i.imgur.com/E4nEf0v.png'],
          name: 'White spandex sports top',
          price: 29.99,
          status: 'published',
          stock_quantity: 20,
          user_id: 1
        },
        {
          id: 11,
          category: "mens-fashion",
          subcategory: "Clothing",
          description: "Formal suit for men",
          images: ['https://i.imgur.com/A6R2Clh.jpeg'],
          name: 'Classic Suit',
          price: 129.99,
          status: 'published',
          stock_quantity: 30,
          user_id: 2
        },
        {
          id: 12,
          category:"mens-fashion ",
          description:"Red Graphic Tee with 'Crazy Man' print",
          subcategory: "Clothing",
          images: ['https://i.imgur.com/6wkcdLi.jpeg'],
          name: 'Crazy Man Tee',
          price: 29.99,
          status: 'published',
          stock_quantity: 40,
          user_id: 3
        },
        {
          id: 13,
          category: "mens-fashion",
          subcategory: "Clothing",
          description:"Pink pullover sweater with rolled cuffs",
          images: ['https://i.imgur.com/hQNQoiw.jpeg'],
          name: 'Pink Pullover',
          price: 49.99,
          status: 'published',
          stock_quantity: 50,
          user_id: 1
        },
        {
          id: 14,
          category: "mens-fashion",
          subcategory: "Clothing",
          description: "Black T-shirt with skeletal V for victory hand sign",
          images: ['https://i.imgur.com/hQNQoiw.jpeg'],
          name: 'Skeletal Victory Graphic Tee',
          price: 29.99,
          status: 'Published',
          stock_quantity: 30,
          user_id: 2
        },
        {
          id: 15,
          category: "mens-fashion",
          subcategory: "Clothing",
          description: "Button-up, short-sleeve shirt with avant-garde print",
          images: ['https://i.imgur.com/2OjPXLE.jpeg'],
          name: 'Avant-Garde Button-Up Tee',
          price: 32.99,
          status: 'Published',
          stock_quantity: 30,
          user_id: 3
        },
        {
          id: 16,
          category: "mens-fashion",
          subcategory: "Clothing",
          description: "Button-up dress shirt with diamond pattern print",
          images: ['https://i.imgur.com/gEH6fGV.jpeg'],
          name: 'Diamond Patterned Dress Shirt',
          price: 39.99,
          status: 'Published',
          stock_quantity: 30,
          user_id: 1
        },
        {
          id: 17,
          category: "mens-fashion",
          subcategory: "Jackets&Coats",
          description: "Black Leather jacket with waist buckle and collar snaps",
          images: ['https://i.imgur.com/wD3akWe.jpeg'],
          name: 'Black Leather Jacket w/ Buckle',
          price: 109.99,
          status: 'published',
          stock_quantity: 30,
          user_id: 2
        },
        {
          id: 18,
          category: "mens-fashion",
          subcategory: "Jackets&Coats",
          description: "Acid-washed denim jacket with button cuffs",
          images: ['https://i.imgur.com/rh6lDoQ.jpeg'],
          name: 'Acid-washed denim jacket',
          price: 89.99,
          status: 'published',
          stock_quantity: 30,
          user_id: 3
        },
        {
          id: 19,
          category: "mens-fashion",
          subcategory: "Jackets&Coats",
          description: "Taupe overcoat in casmere",
          images: ['https://i.imgur.com/TUDAUo1.jpeg'],
          name: 'Taupe Cashmere Overcoat',
          price: 129.99,
          status: 'published',
          stock_quantity: 30,
          user_id: 1
        },
        {
          id: 20,
          category: "mens-fashion",
          subcategory: "Jackets&Coats",
          description: "Black, puffy jacket with hood and zipper",
          images: 'https://i.imgur.com/TUDAUo1.jpeg',
          name: 'Puffy Jacket w/ Hood, Black',
          price: 99.99,
          status: 'Published',
          stock_quantity: 30,
          user_id: 2
        },
        // Add other products accordingly
        // ...
      ]);
    });
};