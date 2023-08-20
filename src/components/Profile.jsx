import { Avatar, Description, Label, Name, Quantity, Stats, Tag, Wraper } from "./Profile.styled";
import PropTypes from 'prop-types';

export const Profile = ({items}) => {
    return (
<Wraper class="profile">
  <Description class="description">
    <Avatar
      src={items.avatar}
      alt="User avatar"
      class="avatar"
    />
                <Name class="name">{items.username}</Name>
                <Tag class="tag">{items.tag}</Tag>
    <Tag class="location">{items.location}</Tag>
  </Description>

  <Stats class="stats">
    <Label>
      <span class="label">Followers</span>
      <Quantity class="quantity">{items.stats.followers}</Quantity>
    </Label>
    <Label>
      <span class="label">Views</span>
      <Quantity class="quantity">{items.stats.views}</Quantity>
    </Label>
    <Label>
      <span class="label">Likes</span>
      <Quantity class="quantity">{items.stats.likes}</Quantity>
    </Label>
  </Stats>
</Wraper>
    )  
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};