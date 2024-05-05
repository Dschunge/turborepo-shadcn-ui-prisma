import prismadb from "@repo/database";


export const getHotels = async (searchParams: {
  name: string;
  country: string;
  state: string;
  city: string;
}) => {
  try {
    const { name, country, state, city } = searchParams;

    const hotels = await prismadb.hotel.findMany({
      where: {
        name: {
          contains: name,
        },
        country,
        state,
        city,
      },
      include: { rooms: true },
    });

    return hotels;
  } catch (error: any) {
    console.log(error);
    throw new Error(error);
  }
};
