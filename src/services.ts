export interface cardType {
  id: string;
  name: string;
  subtitle: string;
  numberOfFriends: number;
  profilePhotoUrl: string;
  yearOfJoining: number;
}

const fetchCardList = (): Promise<cardType[]> => {
  return new Promise<cardType[]>((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "John Doe",
          subtitle: "John is a personal assistant living in Paris.",
          numberOfFriends: 32,
          profilePhotoUrl: "https://ow68xm.csb.app/1.jpg",
          yearOfJoining: 2013,
        },
        {
          id: "2",
          name: "Jane Cooper",
          subtitle: "Jane Cooper is an artist living in Paris.",
          numberOfFriends: 45,
          profilePhotoUrl: "https://ow68xm.csb.app/2.jpg",
          yearOfJoining: 2014,
        },
        {
          id: "3",
          name: "Wade Warren",
          subtitle: "Wade Warren is a trainer living in Paris..",
          numberOfFriends: 32,
          profilePhotoUrl: "https://ow68xm.csb.app/3.jpg",
          yearOfJoining: 2015,
        },
      ]);
    }, 3000);
  });
};

export default fetchCardList;
