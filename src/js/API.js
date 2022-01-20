export default function getAll() {
  return fetch(`https://superheros-back-end.herokuapp.com/api/heros`)
    .then(response => response.json())
    .then(response => response.data.heros);
}
