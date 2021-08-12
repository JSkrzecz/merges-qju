(function () {

    let start = new Date(new Date().getFullYear(), 0, 1);
        
    function getBusinessDatesCount(startDate, endDate) {
        let count = 0;
        const curDate = new Date(startDate.getTime());
        while (curDate <= endDate) {
            const dayOfWeek = curDate.getDay();
            if(!(dayOfWeek in [0, 6])) count++;
            curDate.setDate(curDate.getDate() + 1);
        }
        return count;
    }

    let backendPersons = [
        'Karol',
        'Marcin',
        'Janek',
        'Arek',
        'Szymon',
    ]

    let frontEndPersons = [
        'Joanna',
        'Wojciech',
        'Jakub',
    ];

    var workDayCount = getBusinessDatesCount(start, new Date())

    backendMerger = backendPersons[(workDayCount)%backendPersons.length];
    frontendMerger = frontEndPersons[(workDayCount)%backendPersons.length];

    document.getElementById('backend').innerText = backendMerger;
    document.getElementById('front').innerText = frontendMerger;


})()