/*
 * Basic responsive mashup template
 * @owner Enter you name here (xxx)
 */
/*
 *    Fill in host and port for Qlik engine
 */
var config = {
	host: "devanalyticsn2.iotm.mobi",
	prefix: "/customt/",
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
	var app = qlik.openApp('9ed8418a-4a77-43be-91a7-4379a140a06f', config);

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
