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
 * EndpointsInnerConnections
 */
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2017-02-03T17:42:01.176-07:00")
public class EndpointsInnerConnections   {
  @SerializedName("connectionGuid")
  private String connectionGuid = null;

  @SerializedName("capabilities")
  private List<String> capabilities = new ArrayList<String>();

  @SerializedName("endpoint")
  private String endpoint = null;

  @SerializedName("callGuid")
  private String callGuid = null;

  public EndpointsInnerConnections connectionGuid(String connectionGuid) {
    this.connectionGuid = connectionGuid;
    return this;
  }

   /**
   * Get connectionGuid
   * @return connectionGuid
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getConnectionGuid() {
    return connectionGuid;
  }

  public void setConnectionGuid(String connectionGuid) {
    this.connectionGuid = connectionGuid;
  }

  public EndpointsInnerConnections capabilities(List<String> capabilities) {
    this.capabilities = capabilities;
    return this;
  }

  public EndpointsInnerConnections addCapabilitiesItem(String capabilitiesItem) {
    this.capabilities.add(capabilitiesItem);
    return this;
  }

   /**
   * Get capabilities
   * @return capabilities
  **/
  @ApiModelProperty(example = "null", value = "")
  public List<String> getCapabilities() {
    return capabilities;
  }

  public void setCapabilities(List<String> capabilities) {
    this.capabilities = capabilities;
  }

  public EndpointsInnerConnections endpoint(String endpoint) {
    this.endpoint = endpoint;
    return this;
  }

   /**
   * Get endpoint
   * @return endpoint
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getEndpoint() {
    return endpoint;
  }

  public void setEndpoint(String endpoint) {
    this.endpoint = endpoint;
  }

  public EndpointsInnerConnections callGuid(String callGuid) {
    this.callGuid = callGuid;
    return this;
  }

   /**
   * Get callGuid
   * @return callGuid
  **/
  @ApiModelProperty(example = "null", value = "")
  public String getCallGuid() {
    return callGuid;
  }

  public void setCallGuid(String callGuid) {
    this.callGuid = callGuid;
  }


  @Override
  public boolean equals(java.lang.Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    EndpointsInnerConnections endpointsInnerConnections = (EndpointsInnerConnections) o;
    return Objects.equals(this.connectionGuid, endpointsInnerConnections.connectionGuid) &&
        Objects.equals(this.capabilities, endpointsInnerConnections.capabilities) &&
        Objects.equals(this.endpoint, endpointsInnerConnections.endpoint) &&
        Objects.equals(this.callGuid, endpointsInnerConnections.callGuid);
  }

  @Override
  public int hashCode() {
    return Objects.hash(connectionGuid, capabilities, endpoint, callGuid);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class EndpointsInnerConnections {\n");
    
    sb.append("    connectionGuid: ").append(toIndentedString(connectionGuid)).append("\n");
    sb.append("    capabilities: ").append(toIndentedString(capabilities)).append("\n");
    sb.append("    endpoint: ").append(toIndentedString(endpoint)).append("\n");
    sb.append("    callGuid: ").append(toIndentedString(callGuid)).append("\n");
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

