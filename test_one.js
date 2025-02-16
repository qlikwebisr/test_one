/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var config = {
	host: "ec2-108-129-112-55.eu-west-1.compute.amazonaws.com",
	prefix: "/",
	port: "",
	isSecure: true
};

require.config( {
	baseUrl: ( config.isSecure ? "https://" : "http://" ) + config.host + (config.port ? ":" + config.port : "") + config.prefix + "resources"
} );

require( ["js/qlik"], function ( qlik ) {
	qlik.on( "error", function ( error ) {
		$( '#popupText' ).append( error.message + "<br>" );
		$( '#popup' ).fadeIn( 1000 );
	} );
	$( "#closePopup" ).click( function () {
		$( '#popup' ).hide();
	} );

	//open apps -- inserted here --
	var app = qlik.openApp('1ba608c6-526c-4d10-af77-53d9235d1f9c', config);

	//callbacks -- inserted here --
	function testHyper2(reply, app){
		console.log('testHyper',reply.reply.qHyperCube.qDataPages[0].qMatrix[0]);
	 }

	//get objects -- inserted here --
	
	app.getObject('QV02','MLL');
	app.getObject('QV01','jbgnJjE');
	
	//create cubes and lists -- inserted here --
	app.createCube({
	"qInitialDataFetch": [
		{
			"qHeight": 20,
			"qWidth": 2
		}
	],
	"qDimensions": [],
	"qMeasures": [
		{
			"qLabel": "m_avg_usage",
			"qLibraryId": "PrcHYq",
			"qSortBy": {
				"qSortByState": 0,
				"qSortByFrequency": 0,
				"qSortByNumeric": 0,
				"qSortByAscii": 1,
				"qSortByLoadOrder": 0,
				"qSortByExpression": 0,
				"qExpression": {
					"qv": " "
				}
			}
		},
		{
			"qLabel": "m_map_usage",
			"qLibraryId": "nqSQeU",
			"qSortBy": {
				"qSortByState": 0,
				"qSortByFrequency": 0,
				"qSortByNumeric": 0,
				"qSortByAscii": 1,
				"qSortByLoadOrder": 0,
				"qSortByExpression": 0,
				"qExpression": {
					"qv": " "
				}
			}
		}
	],
	"qSuppressZero": false,
	"qSuppressMissing": false,
	"qMode": "S",
	"qInterColumnSortOrder": [],
	"qStateName": "$"
	},testHyper2);
} );
