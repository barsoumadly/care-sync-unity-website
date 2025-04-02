export default function formatTime(date) {
  let hours = date.split(":")[0];
  let minutes = date.split(":")[1];

  // Check whether AM or PM
  let newformat = hours >= 12 ? "PM" : "AM";

  // Find current hour in AM-PM Format
  hours = hours % 12;

  // To display "0" as "12"
  hours = hours ? hours : 12;
  minutes = minutes < 10 ? minutes : minutes;

  return hours + ":" + minutes + " " + newformat;
}
