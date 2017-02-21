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


package io.swagger.client.model;

import java.util.Objects;
import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;


/**
 * GrantMeetingScopeMeeting
 */
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2017-02-21T16:41:11.528-07:00")
public class GrantMeetingScopeMeeting   {
  @SerializedName("id")
  private Integer id = null;

  @SerializedName("leaderId")
  private Integer leaderId = null;

  @SerializedName("meetingNumericId")
  private String meetingNumericId = null;

  @SerializedName("meetingUri")
  private String meetingUri = null;

  @SerializedName("isModerator")
  private Boolean isModerator = null;

  @SerializedName("endpointUriSet")
  private List<Object> endpointUriSet = new ArrayList<Object>();

  @SerializedName("meetingId")
  private String meetingId = null;

  public GrantMeetingScopeMeeting id(Integer id) {
    this.id = id;
    return this;
  }

   /**
   * Get id
   * @return id
  **/
  @ApiModelProperty(example = "null", value = "")
  public Integer getId() {
    return id;
  }

  public void setId(Integer id) {
    this.id = id;
  }

  public GrantMeetingScopeMeeting leaderId(Integer leaderId) {
    this.leaderId = leaderId;
    return this;
  }

   /**
   * Get leaderId
   * @return leaderId
  **/
  @ApiModelProperty(example = "null", value = "")
  public Integer getLeaderId() {
    return leaderId;
  }

  public void setLeaderId(Integer leaderId) {
    this.leaderId = leaderId;
  }

  public GrantMeetingScopeMeeting meetingNumericId(String meetingNumericId) {
    this.meetingNumericId = meetingNumericId;
    return this;
  }

   /**
   * Get meetingNumericId
   * @return meetingNumericId
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getMeetingNumericId() {
    return meetingNumericId;
  }

  public void setMeetingNumericId(String meetingNumericId) {
    this.meetingNumericId = meetingNumericId;
  }

  public GrantMeetingScopeMeeting meetingUri(String meetingUri) {
    this.meetingUri = meetingUri;
    return this;
  }

   /**
   * Get meetingUri
   * @return meetingUri
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getMeetingUri() {
    return meetingUri;
  }

  public void setMeetingUri(String meetingUri) {
    this.meetingUri = meetingUri;
  }

  public GrantMeetingScopeMeeting isModerator(Boolean isModerator) {
    this.isModerator = isModerator;
    return this;
  }

   /**
   * Get isModerator
   * @return isModerator
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getIsModerator() {
    return isModerator;
  }

  public void setIsModerator(Boolean isModerator) {
    this.isModerator = isModerator;
  }

  public GrantMeetingScopeMeeting endpointUriSet(List<Object> endpointUriSet) {
    this.endpointUriSet = endpointUriSet;
    return this;
  }

  public GrantMeetingScopeMeeting addEndpointUriSetItem(Object endpointUriSetItem) {
    this.endpointUriSet.add(endpointUriSetItem);
    return this;
  }

   /**
   * Get endpointUriSet
   * @return endpointUriSet
  **/
  @ApiModelProperty(example = "null", value = "")
  public List<Object> getEndpointUriSet() {
    return endpointUriSet;
  }

  public void setEndpointUriSet(List<Object> endpointUriSet) {
    this.endpointUriSet = endpointUriSet;
  }

  public GrantMeetingScopeMeeting meetingId(String meetingId) {
    this.meetingId = meetingId;
    return this;
  }

   /**
   * Get meetingId
   * @return meetingId
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getMeetingId() {
    return meetingId;
  }

  public void setMeetingId(String meetingId) {
    this.meetingId = meetingId;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    GrantMeetingScopeMeeting grantMeetingScopeMeeting = (GrantMeetingScopeMeeting) o;
    return Objects.equals(this.id, grantMeetingScopeMeeting.id) &&
        Objects.equals(this.leaderId, grantMeetingScopeMeeting.leaderId) &&
        Objects.equals(this.meetingNumericId, grantMeetingScopeMeeting.meetingNumericId) &&
        Objects.equals(this.meetingUri, grantMeetingScopeMeeting.meetingUri) &&
        Objects.equals(this.isModerator, grantMeetingScopeMeeting.isModerator) &&
        Objects.equals(this.endpointUriSet, grantMeetingScopeMeeting.endpointUriSet) &&
        Objects.equals(this.meetingId, grantMeetingScopeMeeting.meetingId);
  }

  @Override
  public int hashCode() {
    return Objects.hash(id, leaderId, meetingNumericId, meetingUri, isModerator, endpointUriSet, meetingId);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class GrantMeetingScopeMeeting {\n");
    
    sb.append("    id: ").append(toIndentedString(id)).append("\n");
    sb.append("    leaderId: ").append(toIndentedString(leaderId)).append("\n");
    sb.append("    meetingNumericId: ").append(toIndentedString(meetingNumericId)).append("\n");
    sb.append("    meetingUri: ").append(toIndentedString(meetingUri)).append("\n");
    sb.append("    isModerator: ").append(toIndentedString(isModerator)).append("\n");
    sb.append("    endpointUriSet: ").append(toIndentedString(endpointUriSet)).append("\n");
    sb.append("    meetingId: ").append(toIndentedString(meetingId)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(java.lang.Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

