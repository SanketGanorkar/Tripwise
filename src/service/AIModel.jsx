import { GoogleGenerativeAI } from "@google/generative-ai";

// importing the API KEY from .env file
const apiKey = import.meta.env.VITE_GOOGLE_GEMINI_AI_API_KEY;

// making an instance of GoogleGenerativeAI , passing the key to authenticate the request , as this 
// instance will be used to interact with the AI model
const genAI = new GoogleGenerativeAI(apiKey);

// get a specific generative model, in this case, "gemini-1.5-flash", from the genAI instance. This model is likely chosen for its capabilities in text generation tasks.
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

// defining the configuration ( like how much better we want the result to be (copied from documentation))
const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,  
  responseMimeType: "application/json", // Desired format of the response (JSON in this case).
};

// starts a chat session with the selected model using the deined configurations
export const chatSession = model.startChat({
  generationConfig,
  
  // used to provide context to the model
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Generate Travel Plan for zocation: Las Vegas, for 3 Days for Couple with a Cheap budget, Give me a Hotels options list with HotelName, Hotel address, Price, hotel image url, geo coordinates, rating, descriptions and suggest itinerary with placeName, Place Details, Place Image Url, Geo Coordinates, ticket Pricing, Time t travel each of the location for 3 days with each day plan with best time to visit in JSON format.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n{\n  "hotelOptions": [\n    {\n      "hotelName": "The D Las Vegas",\n      "hotelAddress": "301 Fremont Street, Las Vegas, NV 89101",\n      "price": "$50-$80 per night",\n      "hotelImageUrl": "https://www.thelinq.com/content/dam/linq/hero-images/hero-the-linq-hotel.jpg",\n      "geoCoordinates": "36.1699° N, 115.1423° W",\n      "rating": "3.5 stars",\n      "description": "A budget-friendly hotel located in the heart of Fremont Street Experience, known for its vibrant atmosphere and live entertainment."\n    },\n    {\n      "hotelName": "Golden Nugget Las Vegas",\n      "hotelAddress": "129 E Fremont St, Las Vegas, NV 89101",\n      "price": "$70-$100 per night",\n      "hotelImageUrl": "https://www.goldennugget.com/las-vegas/media/images/hotel/golden-nugget-hotel-exterior.jpg",\n      "geoCoordinates": "36.1695° N, 115.1427° W",\n      "rating": "4 stars",\n      "description": "A historic hotel with a vibrant casino and a large pool complex, offering a classic Las Vegas experience."\n    },\n    {\n      "hotelName": "Circus Circus Hotel & Casino",\n      "hotelAddress": "2880 Las Vegas Blvd S, Las Vegas, NV 89109",\n      "price": "$40-$60 per night",\n      "hotelImageUrl": "https://www.circuscircus.com/content/dam/circuscircus/hero-images/hero-circus-circus-hotel-exterior.jpg",\n      "geoCoordinates": "36.1191° N, 115.1687° W",\n      "rating": "3 stars",\n      "description": "A family-friendly hotel with a classic circus theme, offering affordable rates and a wide range of entertainment."\n    }\n  ],\n  "itinerary": [\n    {\n      "day": "Day 1",\n      "plan": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Fremont Street Experience",\n          "placeDetails": "Explore the vibrant pedestrian mall with live music, street performers, and the iconic Viva Vision light show.",\n          "placeImageUrl": "https://www.fremontstreetexperience.com/media/images/Fremont-Street-Experience-Aerial.jpg",\n          "geoCoordinates": "36.1695° N, 115.1426° W",\n          "ticketPricing": "Free",\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "The Mob Museum",\n          "placeDetails": "Learn about the history of organized crime in Las Vegas and the United States.",\n          "placeImageUrl": "https://www.themobmuseum.org/sites/default/files/styles/full_width/public/media/images/mob_museum_exterior_007_jpg.jpg",\n          "geoCoordinates": "36.1695° N, 115.1419° W",\n          "ticketPricing": "$25-$30",\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "Heart Attack Grill",\n          "placeDetails": "Indulge in a unique and decadent dining experience, known for its calorie-packed meals.",\n          "placeImageUrl": "https://www.tripadvisor.com/Tourism-g45963-Attractions-Las_Vegas_Nevada.html",\n          "geoCoordinates": "36.1687° N, 115.1382° W",\n          "ticketPricing": "N/A",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "3:00 PM",\n          "placeName": "Neon Museum",\n          "placeDetails": "Wander through an outdoor museum showcasing iconic neon signs from Las Vegas\'s history.",\n          "placeImageUrl": "https://www.neonmuseum.org/wp-content/uploads/2021/06/Neon-Museum-Las-Vegas-1.jpg",\n          "geoCoordinates": "36.1709° N, 115.1386° W",\n          "ticketPricing": "$20-$25",\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "6:00 PM",\n          "placeName": "Binion\'s Gambling Hall",\n          "placeDetails": "Enjoy a casual dinner and some gambling at this historic casino on Fremont Street.",\n          "placeImageUrl": "https://www.binions.com/images/header.jpg",\n          "geoCoordinates": "36.1694° N, 115.1428° W",\n          "ticketPricing": "N/A",\n          "timeToTravel": "2 hours"\n        }\n      ]\n    },\n    {\n      "day": "Day 2",\n      "plan": [\n        {\n          "time": "9:00 AM",\n          "placeName": "Bellagio Conservatory & Botanical Garden",\n          "placeDetails": "Admire the stunning floral displays and artistic installations.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/en/images/hero/bellagio-conservatory-botanical-garden.jpg",\n          "geoCoordinates": "36.1184° N, 115.1725° W",\n          "ticketPricing": "Free",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "10:00 AM",\n          "placeName": "Fountains of Bellagio",\n          "placeDetails": "Witness the spectacular synchronized water and light show.",\n          "placeImageUrl": "https://www.bellagio.com/content/dam/bellagio/en/images/hero/fountains-of-bellagio.jpg",\n          "geoCoordinates": "36.1184° N, 115.1725° W",\n          "ticketPricing": "Free",\n          "timeToTravel": "1 hour"\n        },\n        {\n          "time": "11:00 AM",\n          "placeName": "The LINQ Promenade",\n          "placeDetails": "Stroll along the outdoor shopping and dining promenade, featuring the High Roller observation wheel.",\n          "placeImageUrl": "https://www.thelinq.com/content/dam/linq/hero-images/hero-the-linq-promenade.jpg",\n          "geoCoordinates": "36.1179° N, 115.1706° W",\n          "ticketPricing": "Free",\n          "timeToTravel": "2 hours"\n        },\n        {\n          "time": "1:00 PM",\n          "placeName": "In-N-Out Burger",\n          "placeDetails": "Enjoy a classic California-style burger at this popular fast-food chain.",\n          "placeImageUrl": "https://www.in-n-out.com/images/content/in-n-out-burger.jpg",\n          "geoCoordinates": "36.1209° N, 115.1720°',
        },
      ],
    },
  ],
});
