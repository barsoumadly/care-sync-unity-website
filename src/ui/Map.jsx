function Map({ markerPosition = "Heliopolis Hospital" }) {
  return (
    <div className="google-map">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <iframe
              className="gmap_iframe"
              src={`https://maps.google.com/maps?width=100%25&height=600&hl=en&q=${markerPosition}&t=&z=17&ie=UTF8&iwloc=B&output=embed
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

// <div style={{ width: "100%" }}>
//   <iframe
//     width="100%"
//     height={600}
//     frameBorder={0}
//     scrolling="no"
//     marginHeight={0}
//     marginWidth={0}
//     src="https://maps.google.com/maps?width=100%25&height=600&hl=en&q=Heliopolis%20Hospital+(Heliopolis%20Hospital)&t=&z=17&ie=UTF8&iwloc=B&output=embed"
//   >
//     &lt;a href="https://www.gps.ie/collections/drones/"&gt;best drones&lt;/a&gt;
//   </iframe>
// </div>
