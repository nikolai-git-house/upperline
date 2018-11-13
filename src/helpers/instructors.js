import config from "../config";


export function getInstructors(callback) {
  window.gapi.client.load("sheets", "v4", () => {
      console.log("load ran")
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Instructors!A2:M"
      })
      .then(
        response => {
          const data = response.result.values;
          let instructors =
            data.map(instructor => ({
              //filter1
              name: instructor[0],
              img: instructor[1]? instructor[1] : 'uc_pattern_u1',
              courses:instructor[3]? instructor[3].split(', ') : '',
              bio: instructor[2],
              title: instructor[4]
            })) || [];
          // let coursesSorted=[[],[],[],[],[],[],[],[],[],[],[],[]]
          // courses.forEach((course,idx) =>{
          //   coursesSorted[course.month-1].push(course)
          // })
          // courses=coursesSorted
          callback({
            instructors
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
