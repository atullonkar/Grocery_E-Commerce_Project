import bcrypt from 'bcryptjs';
const data = {
    users: [
        {
          name: 'Owais',
          email: 'admin@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('123456'),
          isAdmin: false,
        },
      ],
    products: [
        {
            //_id: '1',
            name:'Cabbage (kg)',
            slug:'cabbage',
            category:'Vegetables',
            image:'/image/product-4.png',
            price: 70 ,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description:'Fresh Quality Cabbaige'
        },
        {
            //_id: '2',
            name:'Meat (Kg)',
            slug:'meat',
            category:'Non-Veg',
            image:'/image/product-3.png',
            price: 180,
            countInStock: 0,
            rating: 4.5,
            numReviews: 10,
            description:'Fresh Quality Meat'
        },
        {
            //_id: '3',
            name:'Orange (Kg)',
            slug:'orange',
            category:'Fruits',
            image:'/image/product-1.png',
            price: 60 ,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description:'Fresh Quality Orange'
        },
        {
            //_id: '4',
            name:'Onion (Kg)',
            slug:'onion',
            category:'Vegetables',
            image:'/image/product-2.png',
            price: 40,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description:'Fresh Quality Onion'
        },
        {
            //_id: '5',
            name:'Potato (kg)',
            slug:'potato',
            category:'Vegetables',
            image:'/image/product-5.png',
            price: 50,
            countInStock: 10,
            rating: 4.5,
            numReviews: 10,
            description:'Fresh Quality Potato'
        },
    ],
};
export default data;