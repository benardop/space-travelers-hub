import rocketsSlice, { reserveRocket, cancelRocket } from './RocketsSlice';

describe('Test the functionality of the RocketsSlice', () => {
  test('Test the functionality of the reserveRocket', () => {
    const rockets = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: false,
      },
      {
        rocketId: 'falcon9',
        rocketName: 'Falcon 9',
        rocketDesc:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        rocketImg:
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_9',
        rocketReserved: false,
      },
      {
        rocketId: 'falconheavy',
        rocketName: 'Falcon Heavy',
        rocketDesc:
          'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        rocketImg:
          'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
        rocketReserved: false,
      },
      {
        rocketId: 'starship',
        rocketName: 'Starship',
        rocketDesc:
          'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        rocketImg:
          'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
        rocketReserved: false,
      },
    ];

    const newState = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: false,
      },
      {
        rocketId: 'falcon9',
        rocketName: 'Falcon 9',
        rocketDesc:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        rocketImg:
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_9',
        rocketReserved: false,
      },
      {
        rocketId: 'falconheavy',
        rocketName: 'Falcon Heavy',
        rocketDesc:
          'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        rocketImg:
          'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
        rocketReserved: false,
      },
      {
        rocketId: 'starship',
        rocketName: 'Starship',
        rocketDesc:
          'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        rocketImg:
          'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
        rocketReserved: true,
      },
    ];
    expect(rocketsSlice(rockets, reserveRocket('starship'))).toEqual(newState);
  });

  test('Test the functionality of the cancelRocket', () => {
    const rockets = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: true,
      },
      {
        rocketId: 'falcon9',
        rocketName: 'Falcon 9',
        rocketDesc:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        rocketImg:
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_9',
        rocketReserved: true,
      },
      {
        rocketId: 'falconheavy',
        rocketName: 'Falcon Heavy',
        rocketDesc:
          'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        rocketImg:
          'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
        rocketReserved: true,
      },
      {
        rocketId: 'starship',
        rocketName: 'Starship',
        rocketDesc:
          'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        rocketImg:
          'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
        rocketReserved: true,
      },
    ];

    const newState = [
      {
        rocketId: 'falcon1',
        rocketName: 'Falcon 1',
        rocketDesc:
          'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
        rocketImg: 'https://imgur.com/DaCfMsj.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_1',
        rocketReserved: true,
      },
      {
        rocketId: 'falcon9',
        rocketName: 'Falcon 9',
        rocketDesc:
          'Falcon 9 is a two-stage rocket designed and manufactured by SpaceX for the reliable and safe transport of satellites and the Dragon spacecraft into orbit.',
        rocketImg:
          'https://farm1.staticflickr.com/929/28787338307_3453a11a77_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_9',
        rocketReserved: true,
      },
      {
        rocketId: 'falconheavy',
        rocketName: 'Falcon Heavy',
        rocketDesc:
          'With the ability to lift into orbit over 54 metric tons (119,000 lb)--a mass equivalent to a 737 jetliner loaded with passengers, crew, luggage and fuel--Falcon Heavy can lift more than twice the payload of the next closest operational vehicle, the Delta IV Heavy, at one-third the cost.',
        rocketImg:
          'https://farm5.staticflickr.com/4599/38583829295_581f34dd84_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/Falcon_Heavy',
        rocketReserved: true,
      },
      {
        rocketId: 'starship',
        rocketName: 'Starship',
        rocketDesc:
          'Starship and Super Heavy Rocket represent a fully reusable transportation system designed to service all Earth orbit needs as well as the Moon and Mars. This two-stage vehicle — composed of the Super Heavy rocket (booster) and Starship (ship) — will eventually replace Falcon 9, Falcon Heavy and Dragon.',
        rocketImg:
          'https://live.staticflickr.com/65535/48954138962_ee541e6755_b.jpg',
        rocketWiki: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
        rocketReserved: false,
      },
    ];
    expect(rocketsSlice(rockets, cancelRocket('starship'))).toEqual(newState);
  });
});
