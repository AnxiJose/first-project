export function tokenGetter() {
  console.log(localStorage.getItem("authToken"))
  return localStorage.getItem("authToken");
}
