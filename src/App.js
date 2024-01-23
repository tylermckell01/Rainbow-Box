import "./styles/app.scss";

function App() {
  return (
    <div className="App">
      <div className="page-container">
        <div className="title">
          This is the Rainbow Box
          <p>
            (to help strengthen your use of flex-direction, justify-content, &
            align-items)
          </p>
        </div>
        <div className="margin">
          <div className="border">
            <div className="padding">
              <div className="content"></div>
              <div className="vertical-line">
                {" "}
                {`<--cross axis (align-items)`}
              </div>
              <div className="horizontal-line">{`^--main axis (justify-content)`}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
