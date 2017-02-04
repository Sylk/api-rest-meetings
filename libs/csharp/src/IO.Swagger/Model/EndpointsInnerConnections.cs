/* 
 * BlueJeans onVideo REST API
 *
 * _Video That Works Where You Do, from the world's leader in cloud video communication._ # Authentication Each API request that is sent to BlueJeans requires an access token, which is obtained through the BlueJeans Authentication API. There are several methods (grant types) for obtaining an access token, which follow the OAuth2.0 specification. ## Grant Types * Authorization Code Grant – This grant type is used in an authentication flow commonly referred to as \"three-legged OAuth\". The user authenticates via a BlueJeans page, which provides an authorization code. This code, along with a few other elements, can be used to obtain an access code. * Password Credentials Grant – This grant type is used in a two-legged OAuth flow. Username and password are sent to retrieve an access code. * Client Credentials Grant – This grant type is used in a two-legged OAuth flow.  ## Access & Permissions The access level that is associated with each access token is referred to as the scope. There are three basic levels of access that BlueJeans allows, which affect the level of scope.  Three access levels exist within the Blue Jeans service today. * Meeting-level – Authentication takes place using a meeting ID and passcode, and the scope is limited to APIs that relate to the individual meeting. * User-level – Authentication either takes place via three-legged OAuth, or else a direct authorization token request containing a username or password. Access level depends on the requested scope permissions. * App-level – An application is provisioned either by BlueJeans personnel, or within the BlueJeans Enterprise Admin interface. When provisioning an app, a client key and secret are provided, which is then used to obtain an access token, via the BlueJeans Authentication API. The scope that is associated with the token will provide access to an entire enterprise and all of its users.  All endpoints in this document that require Enterprise Admin access will be marked as such. ## Testing In order to make effective use of this page, you will first use one of the authentication methods to obtain an access token. Once the token is given, use the Authenticate button up in the header to store the token. Each BlueJeans API called after that will use the access token provided. 
 *
 * OpenAPI spec version: 1.0.0
 * Contact: brandon@bluejeans.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace IO.Swagger.Model
{
    /// <summary>
    /// EndpointsInnerConnections
    /// </summary>
    [DataContract]
    public partial class EndpointsInnerConnections :  IEquatable<EndpointsInnerConnections>
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="EndpointsInnerConnections" /> class.
        /// </summary>
        /// <param name="ConnectionGuid">ConnectionGuid.</param>
        /// <param name="Capabilities">Capabilities.</param>
        /// <param name="Endpoint">Endpoint.</param>
        /// <param name="CallGuid">CallGuid.</param>
        public EndpointsInnerConnections(string ConnectionGuid = null, List<string> Capabilities = null, string Endpoint = null, string CallGuid = null)
        {
            this.ConnectionGuid = ConnectionGuid;
            this.Capabilities = Capabilities;
            this.Endpoint = Endpoint;
            this.CallGuid = CallGuid;
        }
        
        /// <summary>
        /// Gets or Sets ConnectionGuid
        /// </summary>
        [DataMember(Name="connectionGuid", EmitDefaultValue=false)]
        public string ConnectionGuid { get; set; }
        /// <summary>
        /// Gets or Sets Capabilities
        /// </summary>
        [DataMember(Name="capabilities", EmitDefaultValue=false)]
        public List<string> Capabilities { get; set; }
        /// <summary>
        /// Gets or Sets Endpoint
        /// </summary>
        [DataMember(Name="endpoint", EmitDefaultValue=false)]
        public string Endpoint { get; set; }
        /// <summary>
        /// Gets or Sets CallGuid
        /// </summary>
        [DataMember(Name="callGuid", EmitDefaultValue=false)]
        public string CallGuid { get; set; }
        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class EndpointsInnerConnections {\n");
            sb.Append("  ConnectionGuid: ").Append(ConnectionGuid).Append("\n");
            sb.Append("  Capabilities: ").Append(Capabilities).Append("\n");
            sb.Append("  Endpoint: ").Append(Endpoint).Append("\n");
            sb.Append("  CallGuid: ").Append(CallGuid).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="obj">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object obj)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            return this.Equals(obj as EndpointsInnerConnections);
        }

        /// <summary>
        /// Returns true if EndpointsInnerConnections instances are equal
        /// </summary>
        /// <param name="other">Instance of EndpointsInnerConnections to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(EndpointsInnerConnections other)
        {
            // credit: http://stackoverflow.com/a/10454552/677735
            if (other == null)
                return false;

            return 
                (
                    this.ConnectionGuid == other.ConnectionGuid ||
                    this.ConnectionGuid != null &&
                    this.ConnectionGuid.Equals(other.ConnectionGuid)
                ) && 
                (
                    this.Capabilities == other.Capabilities ||
                    this.Capabilities != null &&
                    this.Capabilities.SequenceEqual(other.Capabilities)
                ) && 
                (
                    this.Endpoint == other.Endpoint ||
                    this.Endpoint != null &&
                    this.Endpoint.Equals(other.Endpoint)
                ) && 
                (
                    this.CallGuid == other.CallGuid ||
                    this.CallGuid != null &&
                    this.CallGuid.Equals(other.CallGuid)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            // credit: http://stackoverflow.com/a/263416/677735
            unchecked // Overflow is fine, just wrap
            {
                int hash = 41;
                // Suitable nullity checks etc, of course :)
                if (this.ConnectionGuid != null)
                    hash = hash * 59 + this.ConnectionGuid.GetHashCode();
                if (this.Capabilities != null)
                    hash = hash * 59 + this.Capabilities.GetHashCode();
                if (this.Endpoint != null)
                    hash = hash * 59 + this.Endpoint.GetHashCode();
                if (this.CallGuid != null)
                    hash = hash * 59 + this.CallGuid.GetHashCode();
                return hash;
            }
        }
    }

}
