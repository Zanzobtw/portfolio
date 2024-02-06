import "../styles/profilePicture.scss";
export default function ProfilePicture() {
  function my_linkedIn() {
    let abudy_linkedIn = open(
      "https://www.linkedin.com/in/abdulrazzak-ahmad-236b05214/"
    );
  }
  return (
    <div>
      <div className="profSpacing">
        <a href="#" onClick={my_linkedIn}>
          <img
            className="prof"
            src="https://avatars.githubusercontent.com/u/82005624"
          />
        </a>
      </div>
    </div>
  );
}
