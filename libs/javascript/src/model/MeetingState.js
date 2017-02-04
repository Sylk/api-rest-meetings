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
    define(['ApiClient', 'model/MeetingStateRecordinginfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./MeetingStateRecordinginfo'));
  } else {
    // Browser globals (root is window)
    if (!root.BlueJeansOnVideoRestApi) {
      root.BlueJeansOnVideoRestApi = {};
    }
    root.BlueJeansOnVideoRestApi.MeetingState = factory(root.BlueJeansOnVideoRestApi.ApiClient, root.BlueJeansOnVideoRestApi.MeetingStateRecordinginfo);
  }
}(this, function(ApiClient, MeetingStateRecordinginfo) {
  'use strict';




  /**
   * The MeetingState model module.
   * @module model/MeetingState
   * @version 1.0.0
   */

  /**
   * Constructs a new <code>MeetingState</code>.
   * @alias module:model/MeetingState
   * @class
   */
  var exports = function() {
    var _this = this;

























  };

  /**
   * Constructs a <code>MeetingState</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/MeetingState} obj Optional instance to populate.
   * @return {module:model/MeetingState} The populated <code>MeetingState</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('meetingId')) {
        obj['meetingId'] = ApiClient.convertToType(data['meetingId'], 'String');
      }
      if (data.hasOwnProperty('meetingGuid')) {
        obj['meetingGuid'] = ApiClient.convertToType(data['meetingGuid'], 'String');
      }
      if (data.hasOwnProperty('meetingState')) {
        obj['meetingState'] = ApiClient.convertToType(data['meetingState'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('isContentSharingActive')) {
        obj['isContentSharingActive'] = ApiClient.convertToType(data['isContentSharingActive'], 'Boolean');
      }
      if (data.hasOwnProperty('bridged')) {
        obj['bridged'] = ApiClient.convertToType(data['bridged'], 'Boolean');
      }
      if (data.hasOwnProperty('locked')) {
        obj['locked'] = ApiClient.convertToType(data['locked'], 'Boolean');
      }
      if (data.hasOwnProperty('audioMuteOnEntry')) {
        obj['audioMuteOnEntry'] = ApiClient.convertToType(data['audioMuteOnEntry'], 'Boolean');
      }
      if (data.hasOwnProperty('videoMuteOnEntry')) {
        obj['videoMuteOnEntry'] = ApiClient.convertToType(data['videoMuteOnEntry'], 'Boolean');
      }
      if (data.hasOwnProperty('moderatorLess')) {
        obj['moderatorLess'] = ApiClient.convertToType(data['moderatorLess'], 'Boolean');
      }
      if (data.hasOwnProperty('title')) {
        obj['title'] = ApiClient.convertToType(data['title'], 'String');
      }
      if (data.hasOwnProperty('chatEnabled')) {
        obj['chatEnabled'] = ApiClient.convertToType(data['chatEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('pinnedEndpointGuid')) {
        obj['pinnedEndpointGuid'] = ApiClient.convertToType(data['pinnedEndpointGuid'], 'String');
      }
      if (data.hasOwnProperty('audioEndpointCount')) {
        obj['audioEndpointCount'] = ApiClient.convertToType(data['audioEndpointCount'], 'Integer');
      }
      if (data.hasOwnProperty('videoEndpointCount')) {
        obj['videoEndpointCount'] = ApiClient.convertToType(data['videoEndpointCount'], 'Integer');
      }
      if (data.hasOwnProperty('recordingEnabled')) {
        obj['recordingEnabled'] = ApiClient.convertToType(data['recordingEnabled'], 'Boolean');
      }
      if (data.hasOwnProperty('participantWebJoinURL')) {
        obj['participantWebJoinURL'] = ApiClient.convertToType(data['participantWebJoinURL'], 'String');
      }
      if (data.hasOwnProperty('isLargeMeeting')) {
        obj['isLargeMeeting'] = ApiClient.convertToType(data['isLargeMeeting'], 'String');
      }
      if (data.hasOwnProperty('features')) {
        obj['features'] = ApiClient.convertToType(data['features'], ['String']);
      }
      if (data.hasOwnProperty('delayedMeetingEndTime')) {
        obj['delayedMeetingEndTime'] = ApiClient.convertToType(data['delayedMeetingEndTime'], 'Integer');
      }
      if (data.hasOwnProperty('smStreams')) {
        obj['smStreams'] = ApiClient.convertToType(data['smStreams'], 'String');
      }
      if (data.hasOwnProperty('inactiveMeetingStatus')) {
        obj['inactiveMeetingStatus'] = ApiClient.convertToType(data['inactiveMeetingStatus'], 'String');
      }
      if (data.hasOwnProperty('meetingMarkedForDelayedTermination')) {
        obj['meetingMarkedForDelayedTermination'] = ApiClient.convertToType(data['meetingMarkedForDelayedTermination'], 'Boolean');
      }
      if (data.hasOwnProperty('recordinginfo')) {
        obj['recordinginfo'] = MeetingStateRecordinginfo.constructFromObject(data['recordinginfo']);
      }
    }
    return obj;
  }

  /**
   * @member {String} meetingId
   */
  exports.prototype['meetingId'] = undefined;
  /**
   * @member {String} meetingGuid
   */
  exports.prototype['meetingGuid'] = undefined;
  /**
   * @member {module:model/MeetingState.MeetingStateEnum} meetingState
   */
  exports.prototype['meetingState'] = undefined;
  /**
   * @member {module:model/MeetingState.StatusEnum} status
   */
  exports.prototype['status'] = undefined;
  /**
   * @member {Boolean} isContentSharingActive
   */
  exports.prototype['isContentSharingActive'] = undefined;
  /**
   * @member {Boolean} bridged
   */
  exports.prototype['bridged'] = undefined;
  /**
   * @member {Boolean} locked
   */
  exports.prototype['locked'] = undefined;
  /**
   * @member {Boolean} audioMuteOnEntry
   */
  exports.prototype['audioMuteOnEntry'] = undefined;
  /**
   * @member {Boolean} videoMuteOnEntry
   */
  exports.prototype['videoMuteOnEntry'] = undefined;
  /**
   * @member {Boolean} moderatorLess
   */
  exports.prototype['moderatorLess'] = undefined;
  /**
   * @member {String} title
   */
  exports.prototype['title'] = undefined;
  /**
   * @member {Boolean} chatEnabled
   */
  exports.prototype['chatEnabled'] = undefined;
  /**
   * @member {String} pinnedEndpointGuid
   */
  exports.prototype['pinnedEndpointGuid'] = undefined;
  /**
   * @member {Integer} audioEndpointCount
   */
  exports.prototype['audioEndpointCount'] = undefined;
  /**
   * @member {Integer} videoEndpointCount
   */
  exports.prototype['videoEndpointCount'] = undefined;
  /**
   * @member {Boolean} recordingEnabled
   */
  exports.prototype['recordingEnabled'] = undefined;
  /**
   * @member {String} participantWebJoinURL
   */
  exports.prototype['participantWebJoinURL'] = undefined;
  /**
   * @member {String} isLargeMeeting
   */
  exports.prototype['isLargeMeeting'] = undefined;
  /**
   * @member {Array.<String>} features
   */
  exports.prototype['features'] = undefined;
  /**
   * @member {Integer} delayedMeetingEndTime
   */
  exports.prototype['delayedMeetingEndTime'] = undefined;
  /**
   * @member {String} smStreams
   */
  exports.prototype['smStreams'] = undefined;
  /**
   * @member {String} inactiveMeetingStatus
   */
  exports.prototype['inactiveMeetingStatus'] = undefined;
  /**
   * @member {Boolean} meetingMarkedForDelayedTermination
   */
  exports.prototype['meetingMarkedForDelayedTermination'] = undefined;
  /**
   * @member {module:model/MeetingStateRecordinginfo} recordinginfo
   */
  exports.prototype['recordinginfo'] = undefined;


  /**
   * Allowed values for the <code>meetingState</code> property.
   * @enum {String}
   * @readonly
   */
  exports.MeetingStateEnum = {
    /**
     * value: "MeetingStarted"
     * @const
     */
    "MeetingStarted": "MeetingStarted"  };

  /**
   * Allowed values for the <code>status</code> property.
   * @enum {String}
   * @readonly
   */
  exports.StatusEnum = {
    /**
     * value: "active"
     * @const
     */
    "active": "active"  };


  return exports;
}));


