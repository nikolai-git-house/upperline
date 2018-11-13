import config from "../config";

export function courseRequest(callback) {
  window.gapi.client.load("sheets", "v4", () => {
      console.log("load ran")
    window.gapi.client.sheets.spreadsheets.values
      .get({
        spreadsheetId: config.spreadsheetId,
        range: "CourseInfo!A2:AT100"
      })
      .then(
        response => {
          const data = response.result.values;
          let info =
            data.map(course => ({
              //filter1
              Name: course[0],
              HeroMuted: course[1],
              HeroSubTitle: course[2],
              InsetDesc: course[3],
              InsetDur: course[4],
              InsetPrice: course[5],
              InsetLevel: course[6],
              WYLDesc: course[7],
              WYL1Title: course[8],
              WYL1Desc: course[9],
              WYL2Title: course[10],
              WYL2Desc: course[11],
              WYL3Title: course[12],
              WYL3Desc: course[13],
              WYL4Title: course[14],
              WYL4Desc: course[15],
              WYL5Title: course[16],
              WYL5Desc: course[17],
              WYL6Title: course[18],
              WYL6Desc: course[19],
              WYL7Title: course[20],
              WYL7Desc: course[21],
              WYL8Title: course[22],
              WYL8Desc: course[23],
              WYL9Title: course[24],
              WYL9Desc: course[25],
              Q1: course[26],
              A1: course[27],
              Q2: course[28],
              A2: course[29],
              Q3: course[30],
              A3: course[31],
              Q4: course[32],
              A4: course[33],
              Q5: course[34],
              A5: course[35],
              Q6: course[36],
              A6: course[37],
              CarouselImage: course[38],
              CarouselDesc: course[39],
              CarouselTitle: course[40],
              CarouselLink: course[41],
              pattern: course[42],
              color: course[43]
            })) || [];
          // let coursesSorted=[[],[],[],[],[],[],[],[],[],[],[],[]]
          // courses.forEach((course,idx) =>{
          //   coursesSorted[course.month-1].push(course)
          // })
          // courses=coursesSorted
          callback({
            info
          });
        },
        response => {
          callback(false, response.result.error);
        }
      );
  });
}
