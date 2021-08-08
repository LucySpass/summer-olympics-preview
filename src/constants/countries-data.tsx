export interface MainData {
  name: string;
  total: number;
}

export interface MedalsData extends MainData {
  sports: string[]
}

export interface CountryData {
  name: string;
  totalParticipants: number;
  sports: MainData[];
  medals: MedalsData[]
}

export const CountriesData: CountryData = {
  name: 'Hong Kong',
  totalParticipants: 42,
  sports: [
    {
      name: 'Athletics',
      total: 2
    },
    {
      name: 'Badminton',
      total: 4
    },
    {
      name: 'Cycling',
      total: 6
    },
    {
      name: 'Equestrian',
      total: 1
    },
    {
      name: 'Fencing',
      total: 6
    },
    {
      name: 'Golf',
      total: 1
    },
    {
      name: 'Gymnastics',
      total: 1
    },
    {
      name: 'Karate',
      total: 1
    },
    {
      name: 'Rowing',
      total: 1
    },
    {
      name: 'Sailing',
      total: 3
    },
    {
      name: 'Shooting',
      total: 1
    },
    {
      name: 'Swimming',
      total: 8
    },
    {
      name: 'Table tennis',
      total: 6
    },
    {
      name: 'Triathlon',
      total: 1
    },
  ],
  medals: [
    {
      name: 'gold',
      sports: ['Fencing'],
      total: 1
    },
    {
      name: 'silver',
      sports: ['Swimming'],
      total: 2
    },
    {
      name: 'bronze',
      sports: ['Cycling', 'Table Tennis', 'Karate'],
      total: 3
    }
  ]
}
