import prismadb from "@repo/database";

export const getActivitiesByHotelId = async (hotelId: string) => {
  try {
    const hotel = await prismadb.hotel.findUnique({
      where: {
        id: hotelId,
      },
      include: {
        activities: true,

      },
    });

    if (!hotel) return null;

    return hotel;
  } catch (error: any) {
    throw new Error(error);
  }
};
