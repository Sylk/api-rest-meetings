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
    define(['ApiClient', 'model/GrantCodeScopeAppPermissions', 'model/Partition'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GrantCodeScopeAppPermissions'), require('./Partition'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansOnVideoRestApi) {
      root.BlueJeansOnVideoRestApi = {};
    }
    root.BlueJeansOnVideoRestApi.GrantCodeScope = factory(root.BlueJeansOnVideoRestApi.ApiClient, root.BlueJeansOnVideoRestApi.GrantCodeScopeAppPermissions, root.BlueJeansOnVideoRestApi.Partition);
  }
}(this, function(ApiClient, GrantCodeScopeAppPermissions, Partition) {
  'use strict';




  /**
   * The GrantCodeScope model module.
   * @module model/GrantCodeScope
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>GrantCodeScope</code>.
   * @alias module:model/GrantCodeScope
   * @class
   */
  var exports = function() {
    var _this = this;







  };

  /**
   * Constructs a <code>GrantCodeScope</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/GrantCodeScope} obj Optional instance to populate.
   * @return {module:model/GrantCodeScope} The populated <code>GrantCodeScope</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user')) {
        obj['user'] = ApiClient.convertToType(data['user'], 'Number');
      }
      if (data.hasOwnProperty('appPermissions')) {
        obj['appPermissions'] = ApiClient.convertToType(data['appPermissions'], [GrantCodeScopeAppPermissions]);
      }
      if (data.hasOwnProperty('partitionName')) {
        obj['partitionName'] = ApiClient.convertToType(data['partitionName'], 'String');
      }
      if (data.hasOwnProperty('partition')) {
        obj['partition'] = Partition.constructFromObject(data['partition']);
      }
      if (data.hasOwnProperty('bearerPermissions')) {
        obj['bearerPermissions'] = ApiClient.convertToType(data['bearerPermissions'], 'String');
      }
      if (data.hasOwnProperty('clientId')) {
        obj['clientId'] = ApiClient.convertToType(data['clientId'], 'String');
      }
    }
    return obj;
  }

  /**
   * The ID of your user.
   * @member {Number} user
   */
  exports.prototype['user'] = undefined;
  /**
   * @member {Array.<module:model/GrantCodeScopeAppPermissions>} appPermissions
   */
  exports.prototype['appPermissions'] = undefined;
  /**
   * The name of the partition you are on.
   * @member {String} partitionName
   */
  exports.prototype['partitionName'] = undefined;
  /**
   * @member {module:model/Partition} partition
   */
  exports.prototype['partition'] = undefined;
  /**
   * Comma-delimited list of scopes authorized by this token.
   * @member {String} bearerPermissions
   */
  exports.prototype['bearerPermissions'] = undefined;
  /**
   * The client ID will be generated on creation of the application. Normally, a 32 character hexidecimal numeric string.
   * @member {String} clientId
   */
  exports.prototype['clientId'] = undefined;



  return exports;
}));


