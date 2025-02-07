import { Injectable } from '@angular/core';
import { Tour } from '../../shared/models/tours';
@Injectable({
  providedIn: 'root',
})
export class ToursService {
  constructor() {}

  getTourByName(name: string): Tour {
    return this.getAll().find((tour) => tour.name == name)!;
  }

  getAll(): Tour[] {
    return [
      {
        id: 1,
        name: 'full cover sri lanka',
        duration: '10 Days/ 9 Nights',
        price: 800,
        imageUrl: '../../../assets/tours/tour-image-6.jpg',
        description:
          'Sri Lanka’s most renowned architect Geoffrey Bawa redefined and influenced South-East Asian',
        iframe:
          'https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d2029644.1943509448!2d79.20118065242973!3d6.502837818003945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e0!4m5!1s0x3ae253d10f7a7003%3A0x320b2e4d32d3838d!2sColombo!3m2!1d6.9270786!2d79.861243!4m5!1s0x3ae465955bc09a25%3A0xbdfadcdadec487fb!2sElla!3m2!1d6.8666988!2d81.046553!5e0!3m2!1sen!2slk!4v1737540226274!5m2!1sen!2slk',
        stars: 4,
        descriptionPointsSection1: [
          'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
          'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
          'Our lodges redefine wilderness luxury with unparalleled comfort and style.',
        ],
        descriptionPointsSection2: [
          'If you crave close encounters with diverse ecosystems, this trip is your gateway to thriving biodiversity. From lush jungles to azure oceans, nature unfolds at its best.',
          'Capture breathtaking moments as wildlife roams freely against stunning backdrops. Our safari experiences provide ample opportunities for photography enthusiasts to hone their skills in the wild.',
          'Despite the wild setting, enjoy the lap of luxury. Our accommodations prioritize comfort, ensuring a rejuvenating stay after exciting adventures. Pamper yourself with exquisite amenities amid nature’s grandeur.',
        ],
        inclusions: [
          {
            mealDes: 'Tailored to Your Preference',
            transportDes:
              'Private Air-Conditioned Vehicle for Transfers and Sightseeing',
            accommodateDes: 'Hotel (9 nights)',
            activityDes: [
              'Colombo City Tour',
              'Safari at the Minneriya National Park',
              'Sigiriya Rock Fortress',
            ],
          },
        ],
        itinerary: [
          {
            day: 1,
            details: 'Airport → Colombo',
            description: `
      <ul>
        <li>Start your journey with a scenic drive from the airport to Colombo.</li>
      </ul>
    `,
            imageUrl: '/assets/images/colombo.jpg',
          },
          {
            day: 2,
            details: 'Colombo → Anuradhapura',
            description: `
      <ul>
        <li>Visit the Pinnawala Elephant Orphanage (entrance fee required), where you can watch elephants bathe and learn about conservation efforts during your two-hour visit.</li>
        <li>Head to Anuradhapura, a UNESCO site, to explore its ancient Buddhist heritage.</li>
        <li>Visit the Sri Maha Bodhi Tree, Ruwanwelisaya Stupa, Jetavanaramaya Monastery, and Isurumuniya Temple (entrance fees required).</li>
        <li>See the sacred Sri Maha Bodhi Tree, admire the grand Ruwanwelisaya Stupa, explore the Jetavanaramaya Monastery, and enjoy the carvings at Isurumuniya Temple.</li>
        <li>This three-hour tour of Anuradhapura offers a profound insight into Sri Lanka’s rich spiritual and architectural heritage.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 3,
            details: 'Anuradhapura → Polonnaruwa',
            description: `
      <ul>
        <li>Start with an exciting Minneriya Elephant Safari (entrance & safari tour fees required), where you’ll see wild elephants in their natural habitat during a 3-hour safari.</li>
        <li>Visit Hiriwadunna for a 2-hour cultural experience (fee required), including a bullock cart ride, catamaran boat ride, and traditional lunch.</li>
        <li>Continue to Polonnaruwa, an ancient capital, to explore the Royal Palace, Gal Vihara rock temple, and the vast Parakrama Samudra reservoir (entrance fees required).</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 4,
            details: 'Polonnaruwa → Kandy',
            description: `
      <ul>
        <li>Begin with an early climb up Sigiriya Rock Fortress (entrance fee required) to witness a breathtaking sunrise.</li>
        <li>Explore Dambulla Cave Temple (entrance fee required), a 1.5-hour visit showcasing impressive Buddha statues and murals.</li>
        <li>Continue to Kandy, a scenic hill city, and visit the revered Temple of the Tooth Relic (entrance fee required).</li>
        <li>Enjoy a stroll around Kandy Lake and explore the bustling city before an overnight stay in Kandy.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 5,
            details: 'Kandy → Nuwara Eliya',
            description: `
      <ul>
        <li>Visit Peradeniya Botanical Garden (entrance fee required, 2 hours), home to vibrant orchids and tropical plants.</li>
        <li>Explore the Damro Tea Factory (entrance fee required, 1 hour) to learn about tea production and enjoy a cup of Ceylon tea.</li>
        <li>Continue to Ambewela Farm (entrance fee required, 1 hour), famous for its scenic green pastures.</li>
        <li>Unwind at Lake Gregory (entrance fee required), surrounded by misty hills, perfect for a peaceful boat ride or stroll.</li>
        <li>End your day in Nuwara Eliya, a charming hill station.</li>
      </ul>
    `,
            imageUrl: '/assets/images/colombo.jpg',
          },
          {
            day: 6,
            details: 'Nuwara Eliya → Ella',
            description: `
      <ul>
        <li>Take a scenic drive to Horton Plains for a 4-hour trek (entrance fee required).</li>
        <li>Hike to World’s End, a dramatic cliff with stunning views, and visit Baker’s Falls.</li>
        <li>Travel to Ella, a charming mountain town.</li>
        <li>Visit the iconic Nine Arches Bridge and, if possible, hike up Little Adam’s Peak for breathtaking views.</li>
        <li>End your day with an overnight stay in Ella.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 7,
            details: 'Ella → Yala',
            description: `
      <ul>
        <li>Start with an optional scenic train ride from Ella to Demodara (train ticket required).</li>
        <li>Visit Diyaluma Waterfall, Sri Lanka’s second-highest waterfall, for a short hike and a refreshing bath.</li>
        <li>Travel to Yala for an overnight stay near the national park.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 8,
            details: 'Yala → Galle',
            description: `
      <ul>
        <li>Start with a morning safari at Yala National Park (entrance & safari tour fees required).</li>
        <li>Head to Mirissa for an exciting whale-watching tour (fees required).</li>
        <li>Travel to Galle and explore the UNESCO-listed Galle Fort.</li>
        <li>Stroll through its colonial streets, visit the historic lighthouse, and soak in the coastal charm.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 9,
            details: 'Galle → Bentota',
            description: `
      <ul>
        <li>Take a scenic drive from Galle to Bentota, a renowned coastal getaway.</li>
        <li>Enjoy a Bentota River Safari (boat ride fee required) through lush mangrove forests.</li>
        <li>Visit Sunflower Arts & Crafts for handmade souvenirs.</li>
        <li>For adventure seekers, try water sports like jet skiing or banana boat rides.</li>
        <li>End the day relaxing on the beach before your overnight stay in Bentota.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
          {
            day: 10,
            details: 'Bentota → Colombo',
            description: `
      <ul>
        <li>Drive from Bentota to Colombo.</li>
        <li>Upon arrival, relax before heading to the airport.</li>
        <li>You’ll be transferred to Bandaranaike International Airport for your departure, concluding your Sri Lankan journey.</li>
      </ul>
    `,
            imageUrl: '/assets/images/galle.jpg',
          },
        ],
      },
      {
        id: 2,
        name: 'cultural heritage tour',
        duration: '5 Days/ 4 Nights',
        price: 800,
        imageUrl: '../../../assets/tours/tour-image-1.jpg',
      },
      {
        id: 3,
        name: 'beach bliss tour',
        duration: '6 Days/ 5 Nights',
        price: 800,
        imageUrl: '../../../assets/tours/tour-image-2.jpg',
      },
      {
        id: 4,
        name: 'hill country adventure tour',
        duration: '7 Days/ 6 Nights',
        price: 800,
        imageUrl: '../../../assets/tours/tour-image-5.jpg',
      },
      {
        id: 5,
        name: 'wild life and safari experience',
        duration: '6 Days/ 5 Nights',
        price: 800,
        imageUrl: '../../../assets/tours/tour-image-4.jpg',
      },
    ];
  }
}
