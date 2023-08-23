import { Avatar, Description, Label, Name, Quantity, Stats, Tag, Wraper } from "./Profile.styled";
import PropTypes from 'prop-types';

export const Profile = ({ items }) => {
    return (
<Wraper>
  <Description>
    <Avatar
      src={items.avatar}
      alt="User avatar"
    />
                <Name>{items.username}</Name>
                <Tag>{items.tag}</Tag>
    <Tag >{items.location}</Tag>
  </Description>

  <Stats>
    <Label>
      <span>Followers</span>
      <Quantity>{items.stats.followers}</Quantity>
    </Label>
    <Label>
      <span>Views</span>
      <Quantity>{items.stats.views}</Quantity>
    </Label>
    <Label>
      <span>Likes</span>
      <Quantity>{items.stats.likes}</Quantity>
    </Label>
  </Stats>
</Wraper>
    )  
};

Profile.propTypes = {
  items: PropTypes.object,
  username: PropTypes.string,
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
