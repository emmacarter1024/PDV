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

var monoAllTreeMap = {
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
myChart.setOption(monoAllTreeMap);