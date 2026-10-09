function ProfileCard({ profile }) {
  const initials = profile.name
    .split(/\s+/)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)

  return (
    <article className="profile-card">
      <div className="profile-avatar" aria-hidden="true">
        {initials}
      </div>
      <div className="profile-details">
        <h2>{profile.name}</h2>
        <p>{profile.programCourse}</p>
      </div>
    </article>
  )
}

export default ProfileCard
