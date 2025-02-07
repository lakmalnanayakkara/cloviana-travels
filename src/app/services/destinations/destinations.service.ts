import { Injectable } from '@angular/core';
import { Destination } from '../../shared/models/Destination';

@Injectable({
  providedIn: 'root'
})
export class DestinationsService {

  constructor() { }

  getDestinationByName(header:string):Destination{
    return this.getAll().find(destination=> destination.header===header)!;
  }
  getAll():Destination[] {
return[
  {
    id:1,
    header: 'Anuradhapura',
    description: 'Ancient capital with temples, stupas, ruins, sacred Bodhi tree, and history.',
    imageUrl:'../../../assets/destinations/anuradhapura.png',
    stars:4,
   
    blog: [
      {
        headerr: 'Anuradhapura',
        description: [  "Anuradhapura, one of Sri Lanka’s most significant historical and cultural cities, was the island's first capital and remains a sacred pilgrimage site for Buddhists. Founded in the 4th century BCE, it flourished for over a thousand years as a center of politics, religion, and trade before being abandoned due to invasions.",
          
        "Today, it is a UNESCO World Heritage Site, renowned for its well-preserved ruins of ancient palaces, monasteries, and stupas. Among its most famous landmarks is the Sri Maha Bodhi, a sacred fig tree believed to have grown from a cutting of the Bodhi tree under which the Buddha attained enlightenment. The massive Ruwanwelisaya and Jetavanaramaya stupas, along with the Abhayagiri Monastery, highlight the city’s architectural and spiritual significance.",
        "Anuradhapura is also home to intricate irrigation systems, including the Tissa Wewa and Nuwara Wewa reservoirs, demonstrating the advanced engineering skills of ancient Sri Lankan civilization. Today, it remains an important religious and historical site, attracting pilgrims and tourists seeking to explore Sri Lanka’s rich cultural heritage.",
        ],
        imageUrl: '../../../assets/destinations/anuradhapura.png',
      }
    ],
  },
  {
    id:2,
    header: 'Arugam Bay',
    description: 'Popular surf destination in Sri Lanka, known for its stunning beaches, vibrant culture, and laid-back vibe.',
    imageUrl:'../../../assets/destinations/arugam-bay-surfing.jpg',
    stars:4,
   
    blog: [
      {
        headerr: 'Arugam Bay',
        description: [ 
          "Arugam Bay, located on the southeastern coast of Sri Lanka, is a picturesque and tranquil beach town renowned for its world-class surf spots and natural beauty. The bay is bordered by pristine golden sands, gently lapping turquoise waters, and lush palm trees, offering an idyllic setting for relaxation and adventure. It’s a haven for surfers, attracting enthusiasts from around the globe with its consistent waves and laid-back surf culture.",

          "Beyond the surf, Arugam Bay is rich in local culture and history, with nearby temples, wildlife sanctuaries, and the vibrant village life providing a unique blend of coastal charm and cultural exploration. The area is also known for its hospitality, with beachfront cafes, cozy guesthouses, and local eateries serving delicious Sri Lankan cuisine. Whether for surfing, nature, or cultural immersion, Arugam Bay offers a serene escape that has made it one of the most sought-after destinations in Sri Lanka."


          ],    imageUrl: '../../../assets/destinations/arugam-bay-surfing.jpg',
      }
    ]
  },
  {
    id:3,
    header: 'Bentota',
    description: 'Coastal town in Sri Lanka, known for its stunning beaches, water sports, luxury resorts, and tranquility.',
    imageUrl:'../../../assets/destinations/bentota.jpg',
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    blog: [
      {
        headerr: 'Bentota',
        description: [  "Bentota, located on Sri Lanka’s southwestern coast, is a tranquil beach town known for its golden sands, crystal-clear waters, and vibrant water sports scene. The area offers a perfect blend of relaxation and adventure, with activities like water skiing, jet skiing, and boat rides along the Bentota River. Luxury resorts and tropical gardens make it an ideal getaway, while nearby attractions like the Brief Garden and Bentota Temple add cultural charm. Bentota's serene atmosphere and natural beauty make it a perfect destination for a relaxing yet adventurous holiday.",  
        ],
           imageUrl: '../../../assets/destinations/bentota.jpg',
      }
    ]
  },
  {
    id:5,
    header: 'Colombo',
    description: "Sri Lanka's bustling capital, blends modernity with history, offering vibrant markets, cultural sites, and diverse cuisine.",
    imageUrl:'../../../assets/destinations/National-museum.jpg',
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    blog: [
      {
        headerr: 'Colombo',
        description: [  "Colombo, Sri Lanka’s largest city and commercial hub, is a dynamic blend of modernity and tradition. Located along the western coast, it features a striking mix of high-rise buildings, colonial-era architecture, and vibrant local markets. The city is home to historical landmarks like the Gangaramaya Temple and the National Museum, reflecting its rich cultural heritage. Galle Face Green offers a relaxing coastal spot, while Pettah market pulses with local life and commerce. Colombo’s diverse culinary scene, ranging from street food to upscale restaurants, adds to its appeal. With a coastal charm and bustling energy, Colombo showcases the essence of Sri Lanka’s cultural and economic vitality.",
],
  imageUrl: '../../../assets/destinations/National-museum.jpg',
      }
    ]
  }, 

  {
    id:6,
    header: 'Dambulla',
    description: "Known for its ancient cave temples, stunning rock formations, and scenic landscapes in Sri Lanka",
    imageUrl:'../../../assets/destinations/Dambulla-Cave-Temple.jpg',
    stars:4,
    blog: [
      {
        headerr: 'Dambulla',
        description: [
           "Dambulla, located in central Sri Lanka, is renowned for its ancient cave temples and breathtaking rock formations. The Dambulla Cave Temple, a UNESCO World Heritage Site, is a complex of five caves adorned with exquisite Buddha statues and colorful frescoes, offering a glimpse into Sri Lanka’s rich religious history. The temples are set within a massive rock, providing stunning panoramic views of the surrounding landscape, including lush greenery and distant mountains.",
          "Dambulla is also a gateway to other popular attractions like the iconic Sigiriya Rock Fortress and Minneriya National Park, known for its elephant gatherings. The town’s tranquil atmosphere, combined with its historical and cultural significance, makes it an important destination for pilgrims and tourists alike. Whether you're exploring the sacred caves, hiking around the rock, or simply soaking in the beauty of the area, Dambulla offers a unique and enriching experience."],
  imageUrl: '../../../assets/destinations/Dambulla-Cave-Temple.jpg',
      }
    ]
  } ,
   {
    id:7,
    header: 'Ella',
    description: "Picturesque town in Sri Lanka, is famous for its stunning waterfalls, hiking trails, and views",
    imageUrl:'../../../assets/destinations/ella.jpg',
    stars:4,
    blog: [
      {
        headerr: 'Dambulla',
        description: [
          "Ella, a small town nestled in Sri Lanka's central highlands, is a serene destination known for its breathtaking natural beauty and cool climate. Surrounded by lush green tea plantations, towering mountains, and scenic valleys, Ella offers a peaceful retreat for nature lovers and adventure seekers alike.",

          "One of the town’s most famous attractions is Ella Rock, a challenging yet rewarding hike that offers panoramic views of the surrounding landscape. Another iconic spot is the Nine Arches Bridge, a stunning railway bridge set amidst dense forest, offering a picturesque view of the valley below. Ella also boasts several beautiful waterfalls, such as Ravana Falls and Diyaluma Falls, where visitors can relax and enjoy the tranquil surroundings.",
          
         " The town itself has a laid-back atmosphere, with charming cafes, small guesthouses, and a welcoming vibe that attracts those looking to escape the bustle of city life. Ella is also an excellent base for exploring the surrounding areas, including trekking through the tea plantations or visiting the nearby town of Bandarawela.",
          
          "For those seeking both relaxation and adventure, Ella provides a perfect blend of scenic beauty, outdoor activities, and cultural experiences, making it one of Sri Lanka's most popular hill station destinations."  ],
  imageUrl: '../../../assets/destinations/ella.jpg',
      }
    ]
  } ,
  {
    id:8,
    header: 'Galle',
    description: "historic city in Sri Lanka, is famous for its colonial architecture, beaches, and Galle Fort.",
    imageUrl:'../../../assets/destinations/galle.jpg',
    stars:4,
    blog: [
      {
        headerr: 'Galle',
        description: [
          "Galle, located on Sri Lanka's southwestern coast, is a city brimming with history, culture, and natural beauty. As one of the island’s most well-preserved colonial cities, Galle is best known for its iconic Galle Fort, a UNESCO World Heritage Site, which was originally built by the Portuguese and expanded by the Dutch. This fort, with its cobblestone streets, colonial-era buildings, and breathtaking ocean views, transports visitors to a bygone era, offering a unique blend of European and Sri Lankan influences.",

          "Beyond the fort, Galle boasts a vibrant cultural scene with art galleries, museums, and traditional markets, where visitors can experience the region's rich heritage and local craftsmanship. The town is also renowned for its pristine beaches, such as Unawatuna and Mirissa, which offer ideal spots for swimming, snorkeling, and relaxing by the Indian Ocean.",
          
          "Galle’s combination of history, architecture, and natural beauty makes it a must-visit destination for those seeking a deeper connection to Sri Lanka's past and present. Whether you're strolling through the fort's ancient streets, enjoying the coastal breeze, or exploring the surrounding areas, Galle offers an unforgettable experience that showcases the heart of Sri Lanka's southern coastline.", ],
  imageUrl: '../../../assets/destinations/galle.jpg',
      }
    ]
  },
  
  {
    id:9,
    header: 'Hatton',
    description: " Scenic town in Sri Lanka, is known for its tea plantations, cool climate, and hiking.",
    imageUrl:'../../../assets/destinations/hatton.png',
    stars:4,
    blog: [
      {
        headerr: 'Hatton',
        description: [
         " Hatton, located in Sri Lanka's central highlands, is a charming town known for its cool climate, breathtaking landscapes, and lush tea plantations. Nestled amidst rolling hills, Hatton offers a serene escape with its refreshing weather and picturesque views of mist-covered mountains and vast expanses of tea estates. The town is a key stop on the way to Adam’s Peak (Sri Pada), one of Sri Lanka’s most revered pilgrimage sites, attracting both hikers and spiritual seekers.",

         " The tea plantations surrounding Hatton are among the island's most famous, producing some of the finest Ceylon tea. Visitors can tour these plantations, learning about the tea-making process while enjoying stunning views of terraced tea fields that stretch across the hillsides. Hatton is also home to several beautiful waterfalls, including the popular St. Clair’s Falls, adding to its natural appeal.",
          
          "Hatton’s tranquil atmosphere and proximity to nature make it an ideal destination for those seeking to relax, explore hiking trails, or delve into the island’s tea heritage. Whether trekking up Adam’s Peak, strolling through tea gardens, or simply soaking in the scenic beauty, Hatton offers a unique experience, combining culture, nature, and adventure in one of Sri Lanka's most scenic regions. ",  ],
  imageUrl: '../../../assets/destinations/hatton.png',
      }
    ]
  }, 

  {
    id:5,
    header: 'Habarana',
    description: " scenic town in Sri Lanka, is known for wildlife safaris, ancient sites, and nature.",
    imageUrl:'../../../assets/destinations/Habarana.jpg',
    stars:4,
    blog: [
      {
        headerr: 'Habarana',
        description: [
         " Habarana, a picturesque town located in the heart of Sri Lanka, serves as a gateway to some of the country’s most iconic attractions. Situated near the Cultural Triangle, Habarana is surrounded by lush forests, ancient ruins, and abundant wildlife, making it a popular base for tourists exploring the region.",

          "One of the town’s major draws is its proximity to Minneriya National Park, famous for the Gathering of Elephants, where hundreds of elephants congregate around the Minneriya Tank during the dry season. The park also hosts a variety of other wildlife, including leopards, deer, and numerous bird species, offering an incredible safari experience.",
          
          "Habarana is also close to historic sites such as the ancient rock fortress of Sigiriya, the sacred city of Anuradhapura, and the medieval capital of Polonnaruwa, making it an excellent starting point for exploring Sri Lanka’s cultural heritage. The town itself offers a tranquil environment, with small guesthouses and nature-based activities like hiking, cycling, and birdwatching, providing visitors a chance to connect with the island’s natural beauty.",
          
          "For those seeking adventure, relaxation, and cultural exploration, Habarana provides an ideal blend of Sri Lanka's rich history and vibrant wildlife, all set in a stunning natural backdrop.",
         ],
  imageUrl: '../../../assets/destinations/Habarana.jpg',
      }
    ]
  } 


]
  }
}
