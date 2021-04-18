const Profile = ({ profile }) => {
  return (
    <div className="card">
      <img className="card-img-top" src={profile.image_url} alt={profile.name} />
      <div className="card-body">
        <h5 className="card-title">{profile.name}</h5>
        <p className="card-text">...</p>
      </div>
    </div>
  );
};

export default Profile;
