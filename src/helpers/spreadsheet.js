import config from "../config";

export function appendBusinessFormSubmit(formState, auth) {
  console.log(auth)
    window.gapi.client.load("sheets", "v4", () => {
      // turn formState into google sheets friendly data
      window.gapi.client.sheets.spreadsheets.values.append(
        {
            auth: auth,
            spreadsheetId: config.spreadsheetId,
            range: 'Business_Form_Submissions!A1:E5',
            valueInputOption: "USER_ENTERED",
            resource: {
              values: [
                formState.first_name,
                formState.last_name,
                formState.email,
                formState.company,
                formState.message,
                formState.hdyh,
                formState.iama,
                formState.phone
              ]
            }
        }
      )
      .then( res => console.log('res', res))
      .catch( err => console.log(err))
    })
}

export function load(callback) {
  window.gapi.client.load("sheets", "v4", () => {
      console.log("load ran")
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "Sheet1!A2:Z"
      })
      .then(
        response => {
          const data = response.result.values;
          let courses =
            data.map(course => ({
              //filter1
              type: course[0],
              duration: course[1],
              name: course[2],
              description: course[3],
              startdate: course[4],
              enddate: course[5],
              year: course[6],
              //filter3
              location: course[7],
              //filter2
              level: course[8],
              //filter4
              price: course[9],
              month: course[12],
              background: course[13],
              icon: course[14],
              age: course[15],
              locationName: course[16],
              address: course[17],
              link: course[18]
            })) || [];
          // let coursesSorted=[[],[],[],[],[],[],[],[],[],[],[],[]]
          // courses.forEach((course,idx) =>{
          //   coursesSorted[course.month-1].push(course)
          // })
          // courses=coursesSorted
          callback({
            courses
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
