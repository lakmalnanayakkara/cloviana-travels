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
    description: 'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura was the first historical capital of Sri Lanka, and its marvels still radiate greatness. Reigning for over a millennium, the kingdom had 117 rulers who built magnificent palaces, great reservoirs and irrigation systems, pleasure gardens, and Buddhist temples - some, amongst the biggest architectural creations of the ancient world, smaller in size only to the pyramids of Giza.',
    imageUrl:'../../../assets/destinations/Dambulla-Cave-Temple.jpg',
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    blog: [
      {
        headerr: 'Anuradhapura',
        description: 'Start your journey with a scenic drive from the airport to Colombo.',
        imageUrl: '../../../assets/destinations/Dambulla-Cave-Temple.jpg',
      }
    ],
  },
  {
    id:2,
    header: 'Arugam Bay',
    description: 'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura was the first historical capital of Sri Lanka, and its marvels still radiate greatness. Reigning for over a millennium, the kingdom had 117 rulers who built magnificent palaces, great reservoirs and irrigation systems, pleasure gardens, and Buddhist temples - some, amongst the biggest architectural creations of the ancient world, smaller in size only to the pyramids of Giza.',
    imageUrl:'/knuckels.jpg',
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    blog: [
      {
        headerr: 'Airport → Colombo',
        description: 'Start your journey with a scenic drive from the airport to Colombo.',
        imageUrl: '/assets/images/colombo.jpg',
      }
    ]
  },
  {
    id:3,
    header: 'Bentota',
    description: 'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura was the first historical capital of Sri Lanka, and its marvels still radiate greatness. Reigning for over a millennium, the kingdom had 117 rulers who built magnificent palaces, great reservoirs and irrigation systems, pleasure gardens, and Buddhist temples - some, amongst the biggest architectural creations of the ancient world, smaller in size only to the pyramids of Giza.',
    imageUrl:'/knuckels.jpg',
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    blog: [
      {
        headerr: 'Airport → Colombo',
        description: 'Start your journey with a scenic drive from the airport to Colombo.',
        imageUrl: '/assets/images/colombo.jpg',
      }
    ]
  },
  {
    id:4,
    header: 'Colombo',
    description: 'The epicentre of Sinhalese civilization dating back to 4th century BC, Anuradhapura was the first historical capital of Sri Lanka, and its marvels still radiate greatness. Reigning for over a millennium, the kingdom had 117 rulers who built magnificent palaces, great reservoirs and irrigation systems, pleasure gardens, and Buddhist temples - some, amongst the biggest architectural creations of the ancient world, smaller in size only to the pyramids of Giza.',
    imageUrl:'/knuckels.jpg',
    stars:4,
    descriptionPointsSection1: [
      'Immerse yourself in Sri Lanka’s Big Five game experience, where diverse ecosystems host Elephants, Leopards, Sloth Bears, Blue Whales, and myriad bird species, creating unforgettable encounters.',
      'Indulge in opulent accommodations seamlessly blended with untamed landscapes, offering an exclusive retreat after exhilarating safaris.',
      'Our lodges redefine wilderness luxury with unparalleled comfort and style.'
    ],
    blog: [
      {
        headerr: 'Airport → Colombo',
        description: 'Start your journey with a scenic drive from the airport to Colombo.',
        imageUrl: '/assets/images/colombo.jpg',
      }
    ]
  } 



]
  }
}
