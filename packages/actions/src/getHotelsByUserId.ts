import prismadb from "@repo/database";


export const getHotelsByUserId = async () => {
  try {
    /*  const { userId } = auth();
 
     if (!userId) {
       throw new Error("Unauthorize");
     } */

    const userId = "user_2eVyN4wQTuvj0db7wcCWMetdC0O"

    const hotels = await prismadb.hotel.findMany({
      where: {
        userId,
      },
      include: {
        rooms: true,
      },
    });

    if (!hotels) return null;

    return hotels;
  } catch (error: any) {
    throw new Error(error);
  }
};
