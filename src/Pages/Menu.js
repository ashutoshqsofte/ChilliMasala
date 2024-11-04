import React from "react";
import "./Page.css";

const menuItems = [
  {
    id: 1,
    category: 'Appetizers',
    title: 'Paneer Pakora 6 Pakoras (Gf)',
    description: 'Paneer Pakora is a crispy Indian snack made from paneer cubes coated in spiced chickpea flour batter and deep-fried. It’s a popular tea-time or appetizer dish, served with chutneys.',
    price: '$16.50',
    image: '../images1/Paneer-Pakora.jpg',
    rating: 5,
  },
  {
    id: 1,
    category: 'Appetizers',
    title: ' Vegetable Spring Rolls',
    description: 'Vegetable Spring Roll is a crispy, deep-fried snack filled with sautéed vegetables, wrapped in a thin dough, and typically served with dipping sauces.',
    price: '$15.90',
    image: '../images1/Veg-Spring-Roll.jpg',
    rating: 5,
  },
  {
    id: 1,
    category: 'Appetizers',
    title: 'Chicken Lollipops 6 Pieces',
    description: 'Chicken Lollipop is a crispy, deep-fried appetizer made from marinated chicken wings shaped like lollipops, served with spicy dipping sauces.',
    price: '$19.90',
    image: '../images1/Chicken-Lollipop.jpeg',
    rating: 5,
  },
  {
    id: 1,
    category: 'Appetizers',
    title: 'Murgh Tikka (Gf)',
    description: 'Murgh Tikka is a flavorful Indian dish of marinated, grilled chicken chunks, known for its smoky taste and served with chutneys or naan.',
    price: '$23.50',
    image: '../images1/Murgh-Tikka.jpeg',
    rating: 5,
  },
  {
    id: 2,
    category: 'Main Courses',
    title: 'Egg Curry (GF)(No Lunch Special)',
    description: 'Egg Curry is a spiced dish of boiled eggs cooked in a rich tomato-onion gravy, commonly served with rice or flatbreads.',
    price: '$28.00',
    image: '../images1/Egg-Curry.jpeg', 
    rating: 5,
  },
  {
    id: 2,
    category: 'Main Courses',
    title: 'Chicken Tikka Masala (GF)',
    description: 'Chicken tikka masala is a beloved Indian dish made of marinated grilled chicken in a creamy tomato sauce, typically served with rice or naan.',
    price: '$27.50',
    image: '../images1/Chicken-Tikka.jpeg', 
    rating: 5,
  },
  {
    id: 2,
    category: 'Main Courses',
    title: 'Kadai Paneer',
    description: 'Kadai paneer is a North Indian dish featuring paneer in a spicy gravy with bell peppers and tomatoes, usually served with naan or rice.',
    price: '$28.00',
    image: '../images1/Kadai-Paneer.jpeg', 
    rating: 5,
  },
  {
    id: 2,
    category: 'Main Courses',
    title: 'Shahi Paneer',
    description: 'Shahi paneer is a rich North Indian dish made with paneer in a creamy, nut-based gravy, often served with naan or rice.',
    price: '$28.00',  
    image: '../images1/Shahi-Paneer.jpeg', 
    rating: 5,
  },
  {
    id: 3,
    category: 'Drink',
    title: 'Virgin Mojito',
    description: 'A virgin mojito is a refreshing non-alcoholic drink made with mint, lime juice, sugar, and soda water, served over ice.',
    price: '$24', // need to update price
    image: '../images1/Virgin-Mojito1.jpeg', 
    rating: 5,
  },
  {
    id: 3,
    category: 'Drink',
    title: 'Sauvignon',
    description: 'Sauvignon is a crisp white wine known for its citrus and tropical fruit flavors, often with herbal notes. It pairs well with seafood and light dishes.',
    price: '$24',  // need to update price
    image: '../images1/Sauvignon.jpeg', 
    rating: 5,
  },
  {
    id: 3,
    category: 'Drink',
    title: 'Sweet Lassi',
    description: 'Sweet lassi is a refreshing Indian yogurt drink made with yogurt, sugar, and water, often flavored with cardamom or fruit, served chilled.',
    price: '$24',  // need to update price
    image: '../images1/Sweet-Lassi.jpeg', 
    rating: 5,
  },
  {
    id: 3,
    category: 'Drink',
    title: 'Mango Milkshake',
    description: 'Mango Milkshake is a creamy drink made by blending ripe mangoes with milk and sugar, often enjoyed as a refreshing treat.',
    price: '$24',  // need to update price
    image: '../images1/Mango-Milkshake.jpeg', 
    rating: 5,
  },
  {
    id: 4,
    category: 'Dessert',
    title: 'Carrot Halwa',
    description: 'Carrot halwa (gajar ka halwa) is a traditional Indian dessert made from grated carrots, milk, and sugar, cooked to a creamy consistency and garnished with nuts.',
    price: '$12.00',
    image: '../images1/Gajar-Halwa.jpeg', 
    rating: 5,
  },
  
  {
    id: 4,
    category: 'Dessert',
    title: 'Kesar Kulfi',
    description: 'Creamy Arborio rice infused with a medley of wild mushrooms, Parmesan cheese, and a hint of truffle oil.',
    price: '$15.50', // need to update price
    image: '../images1/Kesar-Kulfi.jpeg', 
    rating: 5,
  },
  {
    id: 4,
    category: 'Dessert',
    title: 'Ice Cream',
    description: 'Ice cream is a frozen dessert made from cream, sugar, and flavorings, known for its smooth texture and wide variety of flavors.',
    price: '$10.00', // need to update price
    image: '../images1/Ice-Cream.jpeg', 
    rating: 5,
  },
  {
    id: 4,
    category: 'Dessert',
    title: 'Gulab Jamun',
    description: 'Gulab jamun is a sweet Indian dessert made of deep-fried dough balls soaked in rose-flavored sugar syrup, known for its rich taste and soft texture.',
    price: '$8.50',
    image: '../images1/Gulab-Jamun.jpeg', 
    rating: 5,
  },
];

const Menu = () => {
  const appetizers = menuItems.filter(item => item.category === 'Appetizers');
  const mainCourses = menuItems.filter(item => item.category === 'Main Courses');
  const Drink = menuItems.filter(item => item.category === 'Drink');
  const Dessert = menuItems.filter(item => item.category === 'Dessert');
  
  return (
    <div className="menu-container">
      <h2 className="menu-title">View Our Menu</h2>
      <div className="menu-categories">
        {/* <button>All</button>
        <button>Appetizers</button>
        <button>Main Courses</button>
        <button>Drink</button>
        <button>Dessert</button> */}
      </div>

      <section>
        <h2 className="appetizers">Appetizers</h2>
        <div className="menu-grid">
          {appetizers.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="main">Main Courses</h2>
        <div className="menu-grid">
          {mainCourses.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="drink">Drink</h2>
        <div className="menu-grid">
          {Drink.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

      <section>
        <h2 className="desert">Dessert</h2>
        <div className="menu-grid">
          {Dessert.map(item => (
            <MenuItem key={item.id} item={item} />
          ))}
        </div>
      </section>

    <a href="/Menu/CHILLI-MASALA-MENU(updated).pdf">
    <button className="btn-download-menu">Download Our Menu</button></a>
    
    <div className="chef-recommendation">
        <div className="chef-recommendation1">
          <h1 className="header1">Today's Chef-Recommended Delight</h1>
          <h3 className="title">Risotto al Funghi</h3>
          <p className="description">Creamy Risotto al Funghi crafted with a medley of mushrooms and arborio rice, cooked in a savory broth and finished with Parmesan.
          Creamy Risotto al Funghi crafted with a medley of mushrooms and arborio rice, cooked in a savory broth and finished with Parmesan.</p>
          <div className="container">
          <button className="buy-now">BUY NOW</button>
          <button className="learn-more">LEARN MORE</button>
          </div>
        </div>

        <div className="chef-image">
            <img src= '../images1/Chef-Pic.jpeg' width='auto' height='200%' alt="Chef-Pic"></img>
        </div>
    </div>
  </div>  
  );
};

const MenuItem = ({ item }) => (
  <div className="menu-item">
    <img src={item.image} alt={item.title} className="menu-image" />
    <h4>{item.title}</h4>
    <p>{item.description}</p>
    <div className="menu-item-footer">
      <span className="price">{item.price}</span>
      <button className="Order">ORDER NOW</button>
    </div>
    <div className="rating">
      {'⭐'.repeat(item.rating)}
    </div>
  </div>
);

<a href="/menu">
<button className="btn-download-menu">Download Our Menu</button></a>

export default Menu;
