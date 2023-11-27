"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";
import { MdLocationOn, MdChat } from "react-icons/md";
import { FaUserFriends } from "react-icons/fa";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

type RoommateCardProps = {
  imageSrc: string;
  name: string;
  location: string;
  rentAmount: number;
  lookingForGender: string;
  lookingForType: string;
  matchPercentage: number;
  userId: string;
  currentUserId: string;
};

export default function RoommateCard({
  imageSrc,
  name,
  location,
  rentAmount,
  lookingForGender,
  lookingForType,
  matchPercentage,
  userId,
  currentUserId,
}: RoommateCardProps) {
  // TODO: Make responsive for mobile

  // console.log(currentUserId);
  // console.log(userId);
  const supabase = createClient();
  const chatRoomId = "/chat/" + currentUserId + "--" + userId;

  //chatRoom.concat(chatRoomId);
  //console.log(chatRoomId);
  const { data: publicAvatarImageUrl } = supabase.storage
    .from("avatar-images")
    .getPublicUrl(userId);

  return (
    <Link
      href={{
        pathname: `/roommate/${userId}`,
        query: {
          id: userId,
        },
      }}
      as={`/roommate/${userId}`}
    >
      <Card className="w-full mx-2 my-2 lg:w-[450px] cursor-pointer transform transition duration-500 ease-in-out hover:scale-105 hover:shadow-lg">
        <div className="flex flex-row w-full">
          <img
            className="w-20 h-20 lg:w-40 lg:h-40 object-cover"
            src={publicAvatarImageUrl.publicUrl}
            alt={name}
          />
          <div>
            <CardHeader className="pt-2 pl-4 lg:pl-6">
              <CardTitle className="text-xl lg:text-2xl">{name}</CardTitle>
              <CardDescription className="flex flex-row items-center">
                <MdLocationOn />
                {location[0].toUpperCase() + location.substring(1)}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col w-full pl-4 pb-1 lg:pl-6 lg:text-lg">
              <span>
                &#8377; {rentAmount}{" "}
                <span className="text-muted-foreground">Rent</span>
              </span>
              <div>
                <p className="text-sm text-muted-foreground mt-2 lg:text-md">
                  Looking for
                </p>
                <p className="text-sm lg:text-md">
                  {lookingForGender}, {lookingForType}
                </p>
              </div>
            </CardContent>
          </div>
        </div>
        <div className="border-t"></div>
        <CardFooter className="text-sm p-1 px-5 flex flex-row justify-between">
          <div>
            <Button variant="ghost" className="rounded-full">
              <Link href={chatRoomId}>
                <Button variant="link">
                  <MdChat />
                </Button>
              </Link>
            </Button>
          </div>
          <div>
            <HoverCard>
              <HoverCardTrigger>
                <div className="flex flex-row items-center">
                  <FaUserFriends className="mr-2" size={15} />
                  {matchPercentage}% Match
                </div>
              </HoverCardTrigger>
              <HoverCardContent>
                <p className="text-sm text-muted-foreground">
                  This is a match percentage based on your preferences and the
                  roommate's preferences.
                </p>
              </HoverCardContent>
            </HoverCard>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
