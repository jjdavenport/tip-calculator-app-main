import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <div className="left">
          <div className="bill">
            <label className="title">Bill</label>
            <input id="bill" type="number" placeholder="0" dir="rtl" />
          </div>
          <div className="btns">
            <label className="title">Select Tip %</label>
            <div className="tip-btns">
              <button value="5" className="btn">
                5%
              </button>
              <button value="10" className="btn">
                10%
              </button>
              <button value="15" className="btn">
                15%
              </button>
              <button value="25" className="btn">
                25%
              </button>
              <button value="50" className="btn">
                50%
              </button>
              <input id="custom" type="number" placeholder="Custom" dir="rtl" />
            </div>
          </div>
          <div className="number">
            <div className="title-error">
              <label className="title">Number of People</label>
              <p id="error-message"></p>
            </div>
            <input id="people" type="number" placeholder="0" dir="rtl" />
          </div>
        </div>
        <div className="right">
          <div className="calc">
            <div className="row-contain">
              <div className="top-row">
                <p>
                  Tip Amount
                  <br />
                  <span> / person</span>
                </p>
                <p id="tip-amount">$0.00</p>
              </div>
              <div className="bottom-row">
                <p>
                  Total
                  <br />
                  <span> / person</span>
                </p>
                <p id="total-per-person">$0.00</p>
              </div>
            </div>
            <button id="reset">Reset</button>
          </div>
        </div>
      </main>
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/jjdavenport">jjdavenport</a>.
      </div>
    </>
  );
};

export default App;
