import moment from 'moment';


function TimeSheet() {
    let now_DDMMYYYY = moment('24/12/2019 09:15:00 AM').format('DDMMYYYY') //21052024
    let now_LLLL = moment('24/12/2019 09:15:00 AM').format('LLLL') //21052024
    var day = moment("1995-12-60");

    //---parse input string to moment object with strict mode
    let time_parser_strictmode= moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss", true); //-> false
    let time_parser_default= moment('24/12/2019 09:15:00', "DD MM YYYY hh:mm:ss").isValid(); //-> true
    console.log('time_parser_strictmode ', time_parser_strictmode)
    console.log('time_parser_default ', time_parser_default)
    console.log("day ", day);
    

    return ( <div>
        <div>Time now_format DDMMYYYY: {now_DDMMYYYY}</div>
        <div>Time now_format LLLL:  {now_LLLL}</div>
    </div> );
}

export default TimeSheet;