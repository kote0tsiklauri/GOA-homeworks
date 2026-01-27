function Profile(props) {
  return (
    <p>
      User: {props.username} from {props.country}
    </p>
  );
}

export default Profile;