import { useState } from 'react'
import AddProfileButton from './components/AddProfileButton'
import ProfileCard from './components/ProfileCard'
import './App.css'

const initialProfiles = [
  { id: 0, name: 'PTer.', programCourse: 'Information Technology' },
  { id: 1, name: 'John', programCourse: 'Computer Science' },
  { id: 2, name: 'Student3', programCourse: 'Business Administration' },
]

const studentNames = [
  'Alex Morgan',
  'Taylor Kim',
  'Riley Chen',
  'Jordan Lee',
  'Sam Rivera',
  'Casey Patel',
  'Jamie Nguyen',
  'Avery Brooks',
  'Morgan Diaz',
  'Skyler James',
  'Drew Wilson',
  'Cameron Reed',
]

const programCourses = [
  'Information Technology',
  'Computer Science',
  'Business Administration',
  'Graphic Design',
  'Nursing',
  'Psychology',
  'Civil Engineering',
  'Education',
  'Communications',
  'Accountancy',
]

function App() {
  const [profiles, setProfiles] = useState(initialProfiles)

  function addProfile() {
    setProfiles((currentProfiles) => {
      const availableNames = studentNames.filter(
        (name) => !currentProfiles.some((profile) => profile.name === name),
      )
      const name =
        availableNames.length > 0
          ? availableNames[Math.floor(Math.random() * availableNames.length)]
          : `Student ${currentProfiles.length + 1}`
      const programCourse =
        programCourses[Math.floor(Math.random() * programCourses.length)]

      return [
        ...currentProfiles,
        {
          id: currentProfiles.length,
          name,
          programCourse,
        },
      ]
    })
  }

  return (
    <main className="profile-app">
      <div className="profile-controls">
        <AddProfileButton onClick={addProfile} />
        <span className="profile-count" aria-live="polite">
          Total profiles: {profiles.length}
        </span>
      </div>
      <div className="profile-list">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
    </main>
  )
}

export default App
