import config from "../config";


export function getFAQs(callback) {
  window.gapi.client.load("sheets", "v4", () => {
      console.log("load ran")
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "FAQs!A2:C30"
      })
      .then(
        response => {
          const data = response.result.values;
          let faqs =
            data.map(faq => ({
              //filter1
              type: faq[0],
              question: faq[1],
              answer:faq[2]
            })) || [];
          // let coursesSorted=[[],[],[],[],[],[],[],[],[],[],[],[]]
          // courses.forEach((course,idx) =>{
          //   coursesSorted[course.month-1].push(course)
          // })
          // courses=coursesSorted
          callback({
            faqs
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
