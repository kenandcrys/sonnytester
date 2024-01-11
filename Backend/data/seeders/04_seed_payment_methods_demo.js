const faker = require('faker');

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('payment_methods').del()
    .then(async function () {
      // Inserts seed entries
      const userIds = await knex.select('id').from('users');

      const seedData = [];
      const numberOfSeeds = 10; // Adjust as needed

      for (let i = 0; i < numberOfSeeds; i++) {
        const seed = {
          user_id: faker.random.arrayElement(userIds).id,
          card_type: faker.random.arrayElement(['Visa', 'MasterCard', 'Amex']),
          last_four_digits: faker.datatype.number({ min: 1000, max: 9999 }).toString(),
          expiration_date: faker.date.future(),
          security_code: faker.datatype.number({ min: 100, max: 9999 }).toString(),
          is_expired: faker.datatype.boolean(),
          is_disabled: faker.datatype.boolean(),
          is_default_payment_method: faker.datatype.boolean(),
          is_billing_same_as_delivery_address: faker.datatype.boolean(),
          is_billing_same_as_user_address: faker.datatype.boolean(),
          billing_address: faker.address.streetAddress(),
          billing_address_line_2: faker.address.secondaryAddress(),
          billing_address_line_3: faker.address.secondaryAddress(),
          billing_city: faker.address.city(),
          billing_postal_code: faker.address.zipCode(),
          created_at: faker.date.past(),
          updated_at: faker.date.recent(),
        };

        seedData.push(seed);
      }

      return knex('payment_methods').insert(seedData);
    });
};