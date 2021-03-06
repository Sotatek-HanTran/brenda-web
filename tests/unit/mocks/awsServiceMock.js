function getAwsServiceMock() {	
	var getKeyPairsSpy = jasmine.createSpy();
	
	var mock= {
		getKeyPairs: getKeyPairsSpy,
		getKeyId: function() {
			return 'accessKey';
		},
		getKeySecret: function() {
			return 'secretKey';
		},
		getRegion: function() {
			return 'region';
		},
		testCredentials: function() {},
		setCredentials: function(key, secret) {},
		setRegion: function(region) {},
		getQueues: function() {},
		getQueue: function() {
			return 'sqs/url/queueName';
		},
		requestSpot: function(){},
		requestOndemand: function(){},
		getInstanceDetails: function(){},
		getSpotRequests: function(){},
		getSecurityGroups: function(){},
		createSecurityGroup: function(){},
		createQueue: function(){},
		getAvailabilityZones: function(){},
		getSpotPrices: function(){},
		cancelSpotRequest: function(){},
		terminateInstance: function(){}
	};
		
	spyOn(mock, 'getKeyId').and.callThrough();
	spyOn(mock, 'getKeySecret').and.callThrough();
	spyOn(mock, 'getRegion').and.callThrough();
	spyOn(mock, 'testCredentials').and.callThrough();
	spyOn(mock, 'setCredentials');
	spyOn(mock, 'setRegion');
	spyOn(mock, 'getQueues').and.callThrough();
	spyOn(mock, 'getQueue').and.callThrough();
	spyOn(mock, 'requestSpot');
	spyOn(mock, 'requestOndemand');
	spyOn(mock, 'getSecurityGroups');
	spyOn(mock, 'createSecurityGroup');
	spyOn(mock, 'createQueue');
	spyOn(mock, 'getAvailabilityZones');
	spyOn(mock, 'getSpotPrices');
	spyOn(mock, 'cancelSpotRequest');
	spyOn(mock, 'terminateInstance');
		
	return mock;
}
