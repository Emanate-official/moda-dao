const Profile = ({ profile }) => {
  return (
    <div className="card">
      <img className="card-img-top" src="https://www.rollingstone.com/wp-content/uploads/2018/06/rs-deadmau5-01-9469f02f-f4ac-4a45-afb0-651c0b008ec9.jpg" alt="Deadmau5" />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">...</p>
      </div>
    </div>
  );
};

export default Profile;
