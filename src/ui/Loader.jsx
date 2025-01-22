function Loader() {
  return (
    <div className="loader">
      <div className="heartbeatloader">
        <svg
          className="svgdraw"
          width="100%"
          height="100%"
          viewBox="0 0 150 400"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="path"
            d="M 0 200 l 40 0 l 5 -40 l 5 40 l 10 0 l 5 15 l 10 -140 l 10 220 l 5 -95 l 10 0 l 5 20 l 5 -20 l 30 0"
            fill="transparent"
            stroke="black"
          />
        </svg>
        <div className="innercircle"></div>
        <div className="outercircle"></div>
      </div>
    </div>
  );
}

export default Loader;
