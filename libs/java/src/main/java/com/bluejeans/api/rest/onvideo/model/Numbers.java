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


package com.bluejeans.api.rest.onvideo.model;

import java.util.Objects;
import com.bluejeans.api.rest.onvideo.model.NumbersNumbers;
import com.google.gson.annotations.SerializedName;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.util.ArrayList;
import java.util.List;


/**
 * Numbers
 */

public class Numbers   {
  @SerializedName("meetingId")
  private String meetingId = null;

  @SerializedName("allowDirectDial")
  private Boolean allowDirectDial = null;

  @SerializedName("useAttendeePasscode")
  private Boolean useAttendeePasscode = null;

  @SerializedName("pstnNumbersUrl")
  private String pstnNumbersUrl = null;

  @SerializedName("moderatorPasscode")
  private String moderatorPasscode = null;

  @SerializedName("precision")
  private String precision = null;

  @SerializedName("pstnLocalizationSupported")
  private Boolean pstnLocalizationSupported = null;

  @SerializedName("partnerIntegratedMeeting")
  private Boolean partnerIntegratedMeeting = null;

  @SerializedName("numbers")
  private List<NumbersNumbers> numbers = new ArrayList<NumbersNumbers>();

  public Numbers meetingId(String meetingId) {
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

  public Numbers allowDirectDial(Boolean allowDirectDial) {
    this.allowDirectDial = allowDirectDial;
    return this;
  }

   /**
   * Get allowDirectDial
   * @return allowDirectDial
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getAllowDirectDial() {
    return allowDirectDial;
  }

  public void setAllowDirectDial(Boolean allowDirectDial) {
    this.allowDirectDial = allowDirectDial;
  }

  public Numbers useAttendeePasscode(Boolean useAttendeePasscode) {
    this.useAttendeePasscode = useAttendeePasscode;
    return this;
  }

   /**
   * Get useAttendeePasscode
   * @return useAttendeePasscode
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getUseAttendeePasscode() {
    return useAttendeePasscode;
  }

  public void setUseAttendeePasscode(Boolean useAttendeePasscode) {
    this.useAttendeePasscode = useAttendeePasscode;
  }

  public Numbers pstnNumbersUrl(String pstnNumbersUrl) {
    this.pstnNumbersUrl = pstnNumbersUrl;
    return this;
  }

   /**
   * Get pstnNumbersUrl
   * @return pstnNumbersUrl
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getPstnNumbersUrl() {
    return pstnNumbersUrl;
  }

  public void setPstnNumbersUrl(String pstnNumbersUrl) {
    this.pstnNumbersUrl = pstnNumbersUrl;
  }

  public Numbers moderatorPasscode(String moderatorPasscode) {
    this.moderatorPasscode = moderatorPasscode;
    return this;
  }

   /**
   * Get moderatorPasscode
   * @return moderatorPasscode
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getModeratorPasscode() {
    return moderatorPasscode;
  }

  public void setModeratorPasscode(String moderatorPasscode) {
    this.moderatorPasscode = moderatorPasscode;
  }

  public Numbers precision(String precision) {
    this.precision = precision;
    return this;
  }

   /**
   * Get precision
   * @return precision
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getPrecision() {
    return precision;
  }

  public void setPrecision(String precision) {
    this.precision = precision;
  }

  public Numbers pstnLocalizationSupported(Boolean pstnLocalizationSupported) {
    this.pstnLocalizationSupported = pstnLocalizationSupported;
    return this;
  }

   /**
   * Get pstnLocalizationSupported
   * @return pstnLocalizationSupported
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getPstnLocalizationSupported() {
    return pstnLocalizationSupported;
  }

  public void setPstnLocalizationSupported(Boolean pstnLocalizationSupported) {
    this.pstnLocalizationSupported = pstnLocalizationSupported;
  }

  public Numbers partnerIntegratedMeeting(Boolean partnerIntegratedMeeting) {
    this.partnerIntegratedMeeting = partnerIntegratedMeeting;
    return this;
  }

   /**
   * Get partnerIntegratedMeeting
   * @return partnerIntegratedMeeting
  **/
  @ApiModelProperty(example = "null", value = "")
  public Boolean getPartnerIntegratedMeeting() {
    return partnerIntegratedMeeting;
  }

  public void setPartnerIntegratedMeeting(Boolean partnerIntegratedMeeting) {
    this.partnerIntegratedMeeting = partnerIntegratedMeeting;
  }

  public Numbers numbers(List<NumbersNumbers> numbers) {
    this.numbers = numbers;
    return this;
  }

  public Numbers addNumbersItem(NumbersNumbers numbersItem) {
    this.numbers.add(numbersItem);
    return this;
  }

   /**
   * Get numbers
   * @return numbers
  **/
  @ApiModelProperty(example = "null", value = "")
  public List<NumbersNumbers> getNumbers() {
    return numbers;
  }

  public void setNumbers(List<NumbersNumbers> numbers) {
    this.numbers = numbers;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    Numbers numbers = (Numbers) o;
    return Objects.equals(this.meetingId, numbers.meetingId) &&
        Objects.equals(this.allowDirectDial, numbers.allowDirectDial) &&
        Objects.equals(this.useAttendeePasscode, numbers.useAttendeePasscode) &&
        Objects.equals(this.pstnNumbersUrl, numbers.pstnNumbersUrl) &&
        Objects.equals(this.moderatorPasscode, numbers.moderatorPasscode) &&
        Objects.equals(this.precision, numbers.precision) &&
        Objects.equals(this.pstnLocalizationSupported, numbers.pstnLocalizationSupported) &&
        Objects.equals(this.partnerIntegratedMeeting, numbers.partnerIntegratedMeeting) &&
        Objects.equals(this.numbers, numbers.numbers);
  }

  @Override
  public int hashCode() {
    return Objects.hash(meetingId, allowDirectDial, useAttendeePasscode, pstnNumbersUrl, moderatorPasscode, precision, pstnLocalizationSupported, partnerIntegratedMeeting, numbers);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class Numbers {\n");
    
    sb.append("    meetingId: ").append(toIndentedString(meetingId)).append("\n");
    sb.append("    allowDirectDial: ").append(toIndentedString(allowDirectDial)).append("\n");
    sb.append("    useAttendeePasscode: ").append(toIndentedString(useAttendeePasscode)).append("\n");
    sb.append("    pstnNumbersUrl: ").append(toIndentedString(pstnNumbersUrl)).append("\n");
    sb.append("    moderatorPasscode: ").append(toIndentedString(moderatorPasscode)).append("\n");
    sb.append("    precision: ").append(toIndentedString(precision)).append("\n");
    sb.append("    pstnLocalizationSupported: ").append(toIndentedString(pstnLocalizationSupported)).append("\n");
    sb.append("    partnerIntegratedMeeting: ").append(toIndentedString(partnerIntegratedMeeting)).append("\n");
    sb.append("    numbers: ").append(toIndentedString(numbers)).append("\n");
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

