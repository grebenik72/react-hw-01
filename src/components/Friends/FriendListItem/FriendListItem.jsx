
import { FriendItem, Status, Image, Name } from "./FriendlListItem.styled";

export const FriendListItem = ( { avatar, name, isOnline }) => {
  return (
    <FriendItem>
      <Status isOnline={isOnline}></Status>
      <Image src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendItem>
  )
}
