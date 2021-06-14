import { Category } from '../models/Category';
import { Product } from '../models/Product';
import { Review } from '../models/Review';
import { IMAGES } from './../tools/images';
import { CategoryType } from './../tools/types';

export const CATEGORIES: Category[] = [
	new Category(CategoryType.Tshirts, IMAGES.tshirt1),
	new Category(CategoryType.Pants, IMAGES.pants1),
	new Category(CategoryType.Shoes, IMAGES.shoes1),
	new Category(CategoryType.Dresses, IMAGES.dress1),
	new Category(CategoryType.Babies, IMAGES.baby1),
	new Category(CategoryType.Glasses, IMAGES.glasses1),
]

export const REVIEW: Review[] = [
	new Review("1", "John Smith", "This is good product"),
	new Review("2", "Tomas Leam", "I didn't like it"),
	new Review("3", "Bob Allan", "I recommend buying this product"),
]

export const PRODUCTS: Product[] = [
	new Product("1", "Michael 1992", "Michael 1992 white t-shirt", "L", 120, 10, IMAGES.tshirt1, 34, CategoryType.Tshirts, REVIEW),
	new Product("2", "London Tshirt", "T-shirt wiht London city", "M", 80, 8, IMAGES.tshirt2, 12, CategoryType.Tshirts, REVIEW),
	new Product("3", "VLTN", "Valentino VLTN white cotton-blend t-shirt", "S", 99.9, 8, IMAGES.tshirt3, 10, CategoryType.Tshirts, REVIEW),
	new Product("4", "HC Plus", "HC Red t-shirt HELLO. CANNOT.", "M", 110, 10, IMAGES.tshirt4, 11, CategoryType.Tshirts, REVIEW),

	new Product("5", "Green Pants", "ASOS DESIGN oversized tapered trousers in green", "L", 220, 9, IMAGES.pants1, 30, CategoryType.Pants, REVIEW),
	new Product("6", "Black Pants", "ASOS DESIGN extreme wide smart trouser in black prince of wales check", "S", 232, 10, IMAGES.pants2, 20, CategoryType.Pants, REVIEW),
	new Product("7", "Orange Pants", "ASOS DESIGN tapered smart trouser in orange cross hatch linen", "M", 350, 8, IMAGES.pants3, 25, CategoryType.Pants, REVIEW),
	new Product("8", "Dashed Pants", "ASOS DESIGN linen mix wide leg trousers in gray check", "S", 440, 10, IMAGES.pants4, 14, CategoryType.Pants, REVIEW),

	new Product("9", "Nike M27", "Go beyond in the M27. A testament to our unlimited potential as athletes", "42", 420, 5, IMAGES.shoes1, 12, CategoryType.Shoes, REVIEW),
	new Product("10", "Adidas S30", "NMD R1 PRIMEBLUE SHOES", "39", 550, 5, IMAGES.shoes2, 13, CategoryType.Shoes, REVIEW),
	new Product("11", "Puma TL", "Suede Classic XXI Men's Sneakers", "36", 350, 5, IMAGES.shoes3, 16, CategoryType.Shoes, REVIEW),
	new Product("12", "Fila RT", "RGB Runner Men's Trainers", "38", 260, 5, IMAGES.shoes4, 18, CategoryType.Shoes, REVIEW),

	new Product("13", "Flowers Dress", "Build a bevy of looks around this single sleeveless sheath styled with side ruching and a crossover hem.", "M", 600, 8, IMAGES.dress1, 3, CategoryType.Dresses, REVIEW),
	new Product("14", "Red Dress", "Build a bevy of looks around this single sleeveless sheath styled with side ruching and a crossover hem.", "S", 750, 8, IMAGES.dress2, 2, CategoryType.Dresses, REVIEW),
	new Product("15", "Blue Dress", "Build a bevy of looks around this single sleeveless sheath styled with side ruching and a crossover hem.", "L", 800, 8, IMAGES.dress3, 4, CategoryType.Dresses, REVIEW),
	new Product("16", "Tall Dress", "Build a bevy of looks around this single sleeveless sheath styled with side ruching and a crossover hem.", "S", 650, 8, IMAGES.dress4, 3, CategoryType.Dresses, REVIEW),

	new Product("17", "Gray", "Sustainability is a crucial factor for us at Childrensalon", "S", 120, 7, IMAGES.baby1, 30, CategoryType.Babies, REVIEW),
	new Product("18", "White", "Sustainability is a crucial factor for us at Childrensalon", "S", 130, 7, IMAGES.baby2, 32, CategoryType.Babies, REVIEW),
	new Product("19", "Blue", "Sustainability is a crucial factor for us at Childrensalon", "S", 110, 6, IMAGES.baby3, 35, CategoryType.Babies, REVIEW),
	new Product("20", "Dashed", "Sustainability is a crucial factor for us at Childrensalon", "S", 90, 7, IMAGES.baby4, 37, CategoryType.Babies, REVIEW),

	new Product("21", "Gray Sun Glasses", "Polarspex Polarized 80s Retro Classic Trendy Unisex Sunglasses for Men", "33", 300, 5, IMAGES.glasses1, 5, CategoryType.Glasses, REVIEW),
	new Product("22", "Blue Sun Glasses", "Costa Del Mar Men's Zane Sunglasses", "34", 260, 6, IMAGES.glasses2, 6, CategoryType.Glasses, REVIEW),
	new Product("23", "Gold Sun Glasses", "Dollger Polarized Sunglasses for Men Women Retro Classic UV400 Protection Sunglasses", "32", 310, 5, IMAGES.glasses3, 3, CategoryType.Glasses, REVIEW),
	new Product("24", "Black Sun Glasses", "SOJOS Retro Round Sunglasses Oversized Mirrored Glasses DOLPHIN SJ2068", "33", 250, 4, IMAGES.glasses4, 7, CategoryType.Glasses, REVIEW),
]