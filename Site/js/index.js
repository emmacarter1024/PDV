// based on prepared DOM, initialize echarts instance
var myChart = echarts.init(document.getElementById('category_chart'));

var body = document.querySelector('body');

var chromaticColor = [
    getComputedStyle(body).getPropertyValue('--multi-vis-color-1'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-2'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-3'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-4'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-5'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-6'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-7'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-8'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-9'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-10'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-11'),
    getComputedStyle(body).getPropertyValue('--multi-vis-color-12')
]

var monoChromaticColor = [
    getComputedStyle(body).getPropertyValue('--mono-vis-color-1'),
    getComputedStyle(body).getPropertyValue('--mono-vis-color-2'),
    //getComputedStyle(body).getPropertyValue('--mono-vis-color-3'),
    getComputedStyle(body).getPropertyValue('--mono-vis-color-4'),
    getComputedStyle(body).getPropertyValue('--mono-vis-color-5'),
    getComputedStyle(body).getPropertyValue('--mono-vis-color-6'),
    getComputedStyle(body).getPropertyValue('--mono-vis-color-7'),
    getComputedStyle(body).getPropertyValue('--mono-vis-color-8')
];

var panelColor = getComputedStyle(body).getPropertyValue('--surface-color');
var fontColor = getComputedStyle(body).getPropertyValue('--default-text-color');
var pFont = getComputedStyle(body).getPropertyValue('--body-font');
var baseFontSize = getComputedStyle(body).getPropertyValue('--base-font-size');

// specify chart configuration item and data
var chromaAll = {
    tooltip: {
        trigger: 'item'
    },
    color: chromaticColor,
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 0
        },
        label: {
            color: fontColor
        },
        data: [
            {value: 10401299, name:"Political Fundraising Bodies"},
            {value: 7469014, name: "Energy and Resource Companies"},
            {value: 5976043, name:"Intra-Political Party"},
            {value: 5084733, name:"Union"},
            {value: 4368375, name: "Banking and Finance Industry"},
            {value: 2595474, name:"Individual"},
            {value: 1695300, name:"Manufacturing and Heavy Industry"},
            {value: 1463313, name:"Private Health Industry"},
            {value: 1361291, name:"Media and Communications"},
            {value: 1199173, name:"Government Contractors"},
            {value: 897235, name: "Consultancies and Law Firms"},
            {value: 697131, name: "Developers and Property Industry"},
            {value: 614842, name:"Retail and Services Sector"},
            {value: 546970, name:"Hotels Clubs and Alcohol"},
            {value: 515600, name:"Lobbying Firms"},
            {value: 403591, name: "Gambling Industry"},
            {value: 258396, name: "Food and Agriculture"},
            {value: 147400, name:"Uncategorised Company"},
            {value: 30000, name:"Tobacco and Firearms"}
        ]
    }]
};

var monoAll = {
    tooltip: {
        trigger: 'item'
    },
    color: monoChromaticColor,
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 0
        },
        label: {
            color: fontColor
        },
        data: [
            {value: 10401299, name:"Political Fundraising Bodies"},
            {value: 7469014, name: "Energy and Resource Companies"},
            {value: 5976043, name:"Intra-Political Party"},
            {value: 5084733, name:"Union"},
            {value: 4368375, name: "Banking and Finance Industry"},
            {value: 2595474, name:"Individual"},
            {value: 1695300, name:"Manufacturing and Heavy Industry"},
            {value: 1463313, name:"Private Health Industry"},
            {value: 1361291, name:"Media and Communications"},
            {value: 1199173, name:"Government Contractors"},
            {value: 897235, name: "Consultancies and Law Firms"},
            {value: 697131, name: "Developers and Property Industry"},
            {value: 614842, name:"Retail and Services Sector"},
            {value: 546970, name:"Hotels Clubs and Alcohol"},
            {value: 515600, name:"Lobbying Firms"},
            {value: 403591, name: "Gambling Industry"},
            {value: 258396, name: "Food and Agriculture"},
            {value: 147400, name:"Uncategorised Company"},
            {value: 30000, name:"Tobacco and Firearms"}
        ]
    }]
};

var chromaLabor = {
    tooltip: {
        trigger: 'item'
    },
    color: chromaticColor,
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 0
        },
        label: {
            color: fontColor
        },
        data: [
            {value: 5084733, name: "Union"},
            {value: 3138718, name: "Political Fundraising Bodies"},
            {value: 2913614, name: "Intra-Political Party"},
            {value: 2295812, name: "Banking and Finance Industry"},
            {value: 804680, name: "Private Health Industry"},
            {value: 669350, name: "Energy and Resource Companies"},
            {value: 633438, name: "Individual"},
            {value: 619670, name: "Government Contractors"},
            {value: 428470, name: "Hotels Clubs and Alcohol"},
            {value: 425935, name: "Consultancies and Law Firms"},
            {value: 348600, name: "Lobbying Firms"},
            {value: 320620, name: "Media and Communications"},
            {value: 253522, name: "Retail and Services Sector"},
            {value: 243600, name: "Developers and Property Industry"},
            {value: 164591, name: "Gambling Industry"},
            {value: 149600, name: "Food and Agriculture"},
            {value: 95300, name: "Manufacturing and Heavy Industry"},
            {value: 38000, name: "Uncategorised Company"}
        ]
    }]
};

var chromaLNP = {
    tooltip: {
        trigger: 'item'
    },
    color: chromaticColor,
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 0
        },
        label: {
            color: fontColor
        },
        data: [
            {value: 7232581, name: "Political Fundraising Bodies"},
            {value: 1600000, name: "Manufacturing and Heavy Industry"},
            {value: 1375098, name: "Individual"},
            {value: 1106305, name: "Banking and Finance Industry"},
            {value: 889323, name: "Energy and Resource Companies"},
            {value: 658633, name: "Private Health Industry"},
            {value: 579503, name: "Government Contractors"},
            {value: 546892, name: "Intra-Political Party"},
            {value: 471300, name: "Consultancies and Law Firms"},
            {value: 453531, name: "Developers and Property Industry"},
            {value: 412612, name: "Media and Communications"},
            {value: 290688, name: "Retail and Services Sector"},
            {value: 239000, name: "Gambling Industry"},
            {value: 167000, name: "Lobbying Firms"},
            {value: 118500, name: "Hotels Clubs and Alcohol"},
            {value: 108796, name: "Food and Agriculture"},
            {value: 53400, name: "Uncategorised Company"}
        ]
    }]
};

var chromaGreens = {
    tooltip: {
        trigger: 'item'
    },
    color: chromaticColor,
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 0
        },
        label: {
            color: fontColor
        },
        data: [
            {value: 1144599, name: "Intra-Political Party"},
            {value: 22164, name: "Banking and Finance Industry"},
            {value: 334997, name: "Individual"},
            {value: 60261, name: "Media and Communications"},
            {value: 56000, name: "Uncategorised Company"}
        ]
    }]
};

var chromaGreensRose = {
    tooltip: {
        trigger: 'item'
    },
    color: ["#2f9e44","#40c057","#69db7c","#b2f2bb","#ebfbee"],
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['10%', '80%'],
        avoidLabelOverlap: false,
        roseType: 'area',
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 2
        },
        label: {
            show: false,
            color: fontColor
        },
        data: [
            {value: 1144599, name: "Intra-Political Party"},
            {value: 334997, name: "Individual"},
            {value: 60261, name: "Media and Communications"},
            {value: 56000, name: "Uncategorised Company"},
            {value: 22164, name: "Banking and Finance Industry"}
        ]
    }]
};

var chromaONP = {
    tooltip: {
        trigger: 'item'
    },
    color: chromaticColor,
    series: [{
        name: 'Donations',
        type: 'pie',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 0
        },
        label: {
            color: fontColor
        },
        data: [
            {value: 1315938, name: "Intra-Political Party"}
        ]
    }]
};

var chromaAllTreeMap = {
    tooltip: {
        trigger: 'item'
    },
    color: monoChromaticColor,
    series: [{
        name: 'Donations',
        type: 'treemap',
        radius: ['60%', '80%'],
        avoidLabelOverlap: false,
        itemStyle: {
            borderRadius: 4,
            borderColor: panelColor,
            borderWidth: 1
        },
        label: {
            color: panelColor,
            fontStyle: 'bold',
            fontFamily: pFont,
            fontSize: baseFontSize
        },
        data: [
            {value: 10401299, name:"Political Fundraising Bodies"},
            {value: 7469014, name: "Energy and Resource Companies"},
            {value: 5976043, name:"Intra-Political Party"},
            {value: 5084733, name:"Union"},
            {value: 4368375, name: "Banking and Finance Industry"},
            {value: 2595474, name:"Individual"},
            {value: 1695300, name:"Manufacturing and Heavy Industry"},
            {value: 1463313, name:"Private Health Industry"},
            {value: 1361291, name:"Media and Communications"},
            {value: 1199173, name:"Government Contractors"},
            {value: 897235, name: "Consultancies and Law Firms"},
            {value: 697131, name: "Developers and Property Industry"},
            {value: 614842, name:"Retail and Services Sector"},
            {value: 546970, name:"Hotels Clubs and Alcohol"},
            {value: 515600, name:"Lobbying Firms"},
            {value: 403591, name: "Gambling Industry"},
            {value: 258396, name: "Food and Agriculture"},
            {value: 147400, name:"Uncategorised Company"},
            {value: 30000, name:"Tobacco and Firearms"}
        ]
    }]
};

// use configuration item and data specified to show chart
myChart.setOption(chromaAll);