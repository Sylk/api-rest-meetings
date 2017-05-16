/**
 * BlueJeans onVideo REST API
 * _Video That Works Where You Do._  This site provides developers access to API's from BlueJean's onVideo meeting service.  From here you will be able to make actual API calls to manage User Accounts, Meetings, and Recordings.  Also, you can pull analytical data as well retrieve current state information.  With these API's  you should be able to quickly integrate **BlueJeans** video into your applications.     # Authentication All API transactions (excluding Authentication) require an access token per **OAuth standards**.  BlueJeans provides multiple methods for obtaining an access token.  Additionally there are diffferent scopes of token access. ## Grant Types Bluejeans provides 4 different methods for users to Authenticate.  Successful authentication allows BlueJeans to grant an access token to perform operations. * Password Credentials Grant – Authenticate with a username and password and receive an access token with user level permission. Known as two-legged OAuth. * Meeting Credentials Grant – Authenticate with a meeting ID and meeting passcode and receive an access token with meeting level permission. Known as two-legged OAuth. * Client Credentials Grant –  Authenticate with a client ID and client secret and receive an access token with enterprise level permission. Known as two-legged OAuth. * Authorization Code Grant – After creating a developer application, users witll authenticate via a BlueJeans page, and receive an authorization code. Submit authorization with other tokens and receive an access token. Known as three-legged OAuth. ## Access & Permissions BlueJeans defines 3 levels of API access into the system.  When an access token is granted, it carries one of these 3 levels.  The scope of system functionality depends upon the token's access level. * Meeting-level – Scope of APIs is limited to individual meetings. * User-level – Scope depends on the requested permissions. * App-level – provisioned either by BlueJeans personnel, or the BlueJeans Enterprise Admin, an app, is issued a client key and secret key. These tokens then are used by the BlueJeans Authentication API to receive the token. The token's scope provides access to the entire enterprise and all of its users. All endpoints in this document that require **Enterprise Admin** access will be marked as such. # Getting Started Before you start using the API's on this site, you must first have a BlueJeans account.  With your BlueJean credentials, use one of the Authentication methods to obtain an access token. - Click on the Authorize button at the top of page - Enter your access token in the field marked \"api_key\" Now the web site will automatically include your access token on all API calls you make. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Error', 'model/Meeting', 'model/MeetingHistory', 'model/MeetingHistorySharing', 'model/Recording', 'model/RecordingSummary'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Error'), require('../model/Meeting'), require('../model/MeetingHistory'), require('../model/MeetingHistorySharing'), require('../model/Recording'), require('../model/RecordingSummary'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansOnVideoRestApi) {
      root.BlueJeansOnVideoRestApi = {};
    }
    root.BlueJeansOnVideoRestApi.HistoryApi = factory(root.BlueJeansOnVideoRestApi.ApiClient, root.BlueJeansOnVideoRestApi.Error, root.BlueJeansOnVideoRestApi.Meeting, root.BlueJeansOnVideoRestApi.MeetingHistory, root.BlueJeansOnVideoRestApi.MeetingHistorySharing, root.BlueJeansOnVideoRestApi.Recording, root.BlueJeansOnVideoRestApi.RecordingSummary);
  }
}(this, function(ApiClient, Error, Meeting, MeetingHistory, MeetingHistorySharing, Recording, RecordingSummary) {
  'use strict';

  /**
   * History service.
   * @module api/HistoryApi
   * @version 1.0.0
   */

  /**
   * Constructs a new HistoryApi. 
   * @alias module:api/HistoryApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getHistoryByEnterprise operation.
     * @callback module:api/HistoryApi~getHistoryByEnterpriseCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meeting History by Enterprise
     * This endpoint retrieves the meeting history for a specific instance of a meeting.
     * @param {Number} enterpriseId The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint.
     * @param {String} meetingGuid The globally unique identifier (GUID) of the meeting of interest. This value is a string which contains the numeric meeting id, followed by a colon, followed by a 128-bit integer number formatted as 5 alphanumeric segments separated by dashes. Since a given numeric meeting ID can have multiple instantiations over time, the GUID helps identify the instance of interest.
     * @param {module:api/HistoryApi~getHistoryByEnterpriseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.getHistoryByEnterprise = function(enterpriseId, meetingGuid, callback) {
      var postBody = null;

      // verify the required parameter 'enterpriseId' is set
      if (enterpriseId == undefined || enterpriseId == null) {
        throw new Error("Missing the required parameter 'enterpriseId' when calling getHistoryByEnterprise");
      }

      // verify the required parameter 'meetingGuid' is set
      if (meetingGuid == undefined || meetingGuid == null) {
        throw new Error("Missing the required parameter 'meetingGuid' when calling getHistoryByEnterprise");
      }


      var pathParams = {
        'enterprise_id': enterpriseId,
        'meeting_guid': meetingGuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/enterprise/{enterprise_id}/meeting_history/{meeting_guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHistoryByUser operation.
     * @callback module:api/HistoryApi~getHistoryByUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Meeting} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meeting History by User
     * This endpoint retrieves the meeting history for a specific instance of a meeting.
     * @param {Number} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {String} meetingGuid The globally unique identifier (GUID) of the meeting of interest. This value is a string which contains the numeric meeting id, followed by a colon, followed by a 128-bit integer number formatted as 5 alphanumeric segments separated by dashes. Since a given numeric meeting ID can have multiple instantiations over time, the GUID helps identify the instance of interest.
     * @param {module:api/HistoryApi~getHistoryByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Meeting}
     */
    this.getHistoryByUser = function(userId, meetingGuid, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getHistoryByUser");
      }

      // verify the required parameter 'meetingGuid' is set
      if (meetingGuid == undefined || meetingGuid == null) {
        throw new Error("Missing the required parameter 'meetingGuid' when calling getHistoryByUser");
      }


      var pathParams = {
        'user_id': userId,
        'meeting_guid': meetingGuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Meeting;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/meeting_history/{meeting_guid}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHistorySharingByUser operation.
     * @callback module:api/HistoryApi~getHistorySharingByUserCallback
     * @param {String} error Error message, if any.
     * @param {module:model/MeetingHistorySharing} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meeting History Sharing by User
     * This endpoint retrieves the meeting history sharing for a specific instance of a meeting.
     * @param {Number} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {String} meetingGuid The globally unique identifier (GUID) of the meeting of interest. This value is a string which contains the numeric meeting id, followed by a colon, followed by a 128-bit integer number formatted as 5 alphanumeric segments separated by dashes. Since a given numeric meeting ID can have multiple instantiations over time, the GUID helps identify the instance of interest.
     * @param {module:api/HistoryApi~getHistorySharingByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/MeetingHistorySharing}
     */
    this.getHistorySharingByUser = function(userId, meetingGuid, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getHistorySharingByUser");
      }

      // verify the required parameter 'meetingGuid' is set
      if (meetingGuid == undefined || meetingGuid == null) {
        throw new Error("Missing the required parameter 'meetingGuid' when calling getHistorySharingByUser");
      }


      var pathParams = {
        'user_id': userId,
        'meeting_guid': meetingGuid
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = MeetingHistorySharing;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/meeting_history/{meeting_guid}/sharing', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getRecording operation.
     * @callback module:api/HistoryApi~getRecordingCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Recording} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Recording
     * This endpoint retrieves the details about a meeting recording.
     * @param {Number} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {Number} recordingEntityId The ID of the meeting recording. This value is shown in meeting recording lists as recordingEntityId.
     * @param {module:api/HistoryApi~getRecordingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Recording}
     */
    this.getRecording = function(userId, recordingEntityId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling getRecording");
      }

      // verify the required parameter 'recordingEntityId' is set
      if (recordingEntityId == undefined || recordingEntityId == null) {
        throw new Error("Missing the required parameter 'recordingEntityId' when calling getRecording");
      }


      var pathParams = {
        'user_id': userId,
        'recording_entity_id': recordingEntityId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Recording;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/meeting_history/recordings/{recording_entity_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listHistoryByEnterprise operation.
     * @callback module:api/HistoryApi~listHistoryByEnterpriseCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MeetingHistory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List History by Enterprise
     * This endpoint retrieves a list of meeting histories by the given enterprise.
     * @param {Number} enterpriseId The ID of the enterprise of interest. This value is an integer which can be retrieved for the current user via the Get Enterprise Profile endpoint.
     * @param {module:api/HistoryApi~listHistoryByEnterpriseCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MeetingHistory>}
     */
    this.listHistoryByEnterprise = function(enterpriseId, callback) {
      var postBody = null;

      // verify the required parameter 'enterpriseId' is set
      if (enterpriseId == undefined || enterpriseId == null) {
        throw new Error("Missing the required parameter 'enterpriseId' when calling listHistoryByEnterprise");
      }


      var pathParams = {
        'enterprise_id': enterpriseId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [MeetingHistory];

      return this.apiClient.callApi(
        '/v1/enterprise/{enterprise_id}/meeting_history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listHistoryByUser operation.
     * @callback module:api/HistoryApi~listHistoryByUserCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/MeetingHistory>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List History by User
     * This endpoint retrieves a list of meeting histories by the given user.
     * @param {Number} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {Object} opts Optional parameters
     * @param {String} opts.meetingId Return only meetings with the specified meeting numeric ID.
     * @param {String} opts.startDate Return meetings starting from the specified date. MM/DD/YYYY
     * @param {String} opts.endDate Return meetings up until the specified date. MM/DD/YYYY
     * @param {Number} opts.pageSize Sets number of items returned per page.
     * @param {Number} opts.pageNumber Selects which page of results to return.
     * @param {String} opts.order Puts results in ascending or descending order. asc/desc
     * @param {module:api/HistoryApi~listHistoryByUserCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/MeetingHistory>}
     */
    this.listHistoryByUser = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling listHistoryByUser");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'meetingId': opts['meetingId'],
        'startDate': opts['startDate'],
        'endDate': opts['endDate'],
        'pageSize': opts['pageSize'],
        'pageNumber': opts['pageNumber'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [MeetingHistory];

      return this.apiClient.callApi(
        '/v1/user/{user_id}/meeting_history', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the listRecordings operation.
     * @callback module:api/HistoryApi~listRecordingsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/RecordingSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Meeting Recordings
     * This endpoint retrieves a list of meeting recordings.
     * @param {Number} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {Object} opts Optional parameters
     * @param {Number} opts.pageSize Sets number of items returned per page. (default to 10)
     * @param {Number} opts.pageNumber Selects which page of results to return. (default to 1)
     * @param {String} opts.sortBy Selects which page of results to return. (default to start_time)
     * @param {module:model/String} opts.order Puts results in ascending or descending order. (default to desc)
     * @param {module:api/HistoryApi~listRecordingsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/RecordingSummary>}
     */
    this.listRecordings = function(userId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw new Error("Missing the required parameter 'userId' when calling listRecordings");
      }


      var pathParams = {
        'user_id': userId
      };
      var queryParams = {
        'pageSize': opts['pageSize'],
        'pageNumber': opts['pageNumber'],
        'sortBy': opts['sortBy'],
        'order': opts['order']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['access_token'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [RecordingSummary];

      return this.apiClient.callApi(
        '/v1/user/{user_id}/meeting_history/recordings', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
