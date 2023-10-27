export default async function validateToken(token) {
  let validate = false;
  const response = await fetch("https://", {
    method: "GET",
    headers: {
      Authorization: token,
    },
  });
  if (response) {
    validate = true;
  }
  return validate;
}
