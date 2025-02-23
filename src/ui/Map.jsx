function Map({ markerPosition = "Heliopolis Hospital" }) {
  return (
    <div className="google-map">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              className="gmap_iframe"
              src={`https://maps.google.com/maps?width=600&height=400&hl=en&q=  ${markerPosition}&t=k&z=17&ie=UTF8&iwloc=B&output=embed
              `}
              width="100%"
              height={500}
              style={{ border: "2px solid #fff", borderRadius: 20 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
