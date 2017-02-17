/**
 * BlueJeans onVideo REST API
 * _Video That Works Where You Do, from the world's leader in cloud video communication._ # Authentication Each API request that is sent to BlueJeans requires an access token, which is obtained through the BlueJeans Authentication API. There are several methods (grant types) for obtaining an access token, which follow the OAuth2.0 specification. ## Grant Types * Authorization Code Grant – This grant type is used in an authentication flow commonly referred to as \"three-legged OAuth\". The user authenticates via a BlueJeans page, which provides an authorization code. This code, along with a few other elements, can be used to obtain an access code. * Password Credentials Grant – This grant type is used in a two-legged OAuth flow. Username and password are sent to retrieve an access code. * Client Credentials Grant – This grant type is used in a two-legged OAuth flow.  ## Access & Permissions The access level that is associated with each access token is referred to as the scope. There are three basic levels of access that BlueJeans allows, which affect the level of scope.  Three access levels exist within the Blue Jeans service today. * Meeting-level – Authentication takes place using a meeting ID and passcode, and the scope is limited to APIs that relate to the individual meeting. * User-level – Authentication either takes place via three-legged OAuth, or else a direct authorization token request containing a username or password. Access level depends on the requested scope permissions. * App-level – An application is provisioned either by BlueJeans personnel, or within the BlueJeans Enterprise Admin interface. When provisioning an app, a client key and secret are provided, which is then used to obtain an access token, via the BlueJeans Authentication API. The scope that is associated with the token will provide access to an entire enterprise and all of its users.  All endpoints in this document that require Enterprise Admin access will be marked as such. ## Testing In order to make effective use of this page, you will first use one of the authentication methods to obtain an access token. Once the token is given, use the Authenticate button up in the header to store the token. Each BlueJeans API called after that will use the access token provided. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/Enterprise', 'model/Error', 'model/User', 'model/Room', 'model/Meeting'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Enterprise'), require('../model/Error'), require('../model/User'), require('../model/Room'), require('../model/Meeting'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansOnVideoRestApi) {
      root.BlueJeansOnVideoRestApi = {};
    }
    root.BlueJeansOnVideoRestApi.UserApi = factory(root.BlueJeansOnVideoRestApi.ApiClient, root.BlueJeansOnVideoRestApi.Enterprise, root.BlueJeansOnVideoRestApi.Error, root.BlueJeansOnVideoRestApi.User, root.BlueJeansOnVideoRestApi.Room, root.BlueJeansOnVideoRestApi.Meeting);
  }
}(this, function(ApiClient, Enterprise, Error, User, Room, Meeting) {
  'use strict';

  /**
   * User service.
   * @module api/UserApi
   * @version 1.0.0
   */

  /**
   * Constructs a new UserApi. 
   * @alias module:api/UserApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the v1UserUserIdEnterpriseProfileGet operation.
     * @callback module:api/UserApi~v1UserUserIdEnterpriseProfileGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Enterprise} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Enterprise Profile
     * This endpoint retrieves the enterprise profile associated with the user.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:api/UserApi~v1UserUserIdEnterpriseProfileGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Enterprise}
     */
    this.v1UserUserIdEnterpriseProfileGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdEnterpriseProfileGet";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = Enterprise;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/enterprise_profile', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdGet operation.
     * @callback module:api/UserApi~v1UserUserIdGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User Account Details
     * This endpoint retrieves the basic account details for a given user.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:api/UserApi~v1UserUserIdGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.v1UserUserIdGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdGet";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/v1/user/{user_id}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdPut operation.
     * @callback module:api/UserApi~v1UserUserIdPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/User} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User Account Details
     * This endpoint allows updating a user’s basic account details.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:model/User} user The user details that you wish to update.
     * @param {module:api/UserApi~v1UserUserIdPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/User}
     */
    this.v1UserUserIdPut = function(userId, user, callback) {
      var postBody = user;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdPut";
      }

      // verify the required parameter 'user' is set
      if (user == undefined || user == null) {
        throw "Missing the required parameter 'user' when calling v1UserUserIdPut";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = User;

      return this.apiClient.callApi(
        '/v1/user/{user_id}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdRoomGet operation.
     * @callback module:api/UserApi~v1UserUserIdRoomGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get User’s Default Meeting Settings
     * This endpoint gets a user’s default meeting settings.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:api/UserApi~v1UserUserIdRoomGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    this.v1UserUserIdRoomGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdRoomGet";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = Room;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/room', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdRoomPut operation.
     * @callback module:api/UserApi~v1UserUserIdRoomPutCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Room} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update User’s Default Meeting Settings
     * This endpoint allows updating a user’s default meeting settings.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:model/Room} room The user&#39;s room details that you wish to update.
     * @param {module:api/UserApi~v1UserUserIdRoomPutCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Room}
     */
    this.v1UserUserIdRoomPut = function(userId, room, callback) {
      var postBody = room;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdRoomPut";
      }

      // verify the required parameter 'room' is set
      if (room == undefined || room == null) {
        throw "Missing the required parameter 'room' when calling v1UserUserIdRoomPut";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = Room;

      return this.apiClient.callApi(
        '/v1/user/{user_id}/room', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the v1UserUserIdScheduledMeetingGet operation.
     * @callback module:api/UserApi~v1UserUserIdScheduledMeetingGetCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Meeting>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Meeting Settings
     * This endpoint gets a user’s default meeting settings.
     * @param {Integer} userId The ID of the user of interest. This value is an integer which can be retrieved for the current user via the Get User Account Details endpoint.
     * @param {module:api/UserApi~v1UserUserIdScheduledMeetingGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Meeting>}
     */
    this.v1UserUserIdScheduledMeetingGet = function(userId, callback) {
      var postBody = null;

      // verify the required parameter 'userId' is set
      if (userId == undefined || userId == null) {
        throw "Missing the required parameter 'userId' when calling v1UserUserIdScheduledMeetingGet";
      }


      var pathParams = {
        'user_id': userId
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
      var returnType = [Meeting];

      return this.apiClient.callApi(
        '/v1/user/{user_id}/scheduled_meeting', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));