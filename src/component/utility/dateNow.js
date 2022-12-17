// Current Date
// var dateNow = new Date();
// var dd = String(dateNow.getDate()).padStart(2, "0");
// var mm = String(dateNow.getMonth() + 1).padStart(2, "0"); //January is 0!
// var yyyy = dateNow.getFullYear();
// export default dateNow = new Date(yyyy + "-" + mm + "-" + dd);

const date = new Date();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

export const now = new Date(`${year}-${month}-${day}`);
