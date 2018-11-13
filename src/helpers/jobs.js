import config from "../config";


export function getJobs(callback) {
  window.gapi.client.load("sheets", "v4", () => {
      console.log("load ran")
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Jobs!A2:M"
      })
      .then(
        response => {
          const data = response.result.values;
          let jobs =
            data.map(job => ({
              //filter1
              title: job[0],
              type: job[1],
              description:job[2],
              status: job[3],
              applyLink: job[4],
              jdLink: job[5],
              start: job[6],
              end: job[7],
              background: job[8],
              icon: job[9]

            })) || [];
          // let coursesSorted=[[],[],[],[],[],[],[],[],[],[],[],[]]
          // courses.forEach((course,idx) =>{
          //   coursesSorted[course.month-1].push(course)
          // })
          // courses=coursesSorted
          callback({
            jobs
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
