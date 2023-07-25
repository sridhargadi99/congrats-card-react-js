const element = (
  // Write your code here.
  <div className="bg-container">
    <div className="greeting-container">
      <h1 className="greeting-heading">Congratulations</h1>
      <div className="card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png"
          className="img-style"
        />
        <div className="head-para_container">
          <h1 className="name-heading">Kiran V</h1>
          <p className="paragraph">
            Vishnu Institute of Computer Education and Technology, Bhimavaram
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"
          className="img-style"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
