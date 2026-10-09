function AddProfileButton({ onClick }) {
  return (
    <button className="add-profile-button" type="button" onClick={onClick}>
      <span className="button-plus" aria-hidden="true">
        +
      </span>
      Add profile
    </button>
  )
}

export default AddProfileButton
