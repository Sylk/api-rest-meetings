/* 
 * BlueJeans Meetings REST API
 *
 *  ## Video That Works Where You Do. <p>This site provides developers access to APIs from BlueJean's Meetings meeting service.  From here you can see and try actual API calls to manage User Accounts, Meetings, and Recordings, pull Analytical Data and Current State information.</p>    <nosdk> <hr> <div> <div class=\"key\">     <a href=\"./basics.html\" target=\"_\"><img class=\"keyimg\" src=\"./img/bjnmeeting.png\"/></a> </div> <div class=\"keybox\"> Basic instructions about What is a BlueJeans Meeting, and Getting Started Using API's, are <a href=\"./basics.html\" target=\"_blank\">available here <i class=\"glyphicon glyphicon-new-window\"></i></a>. </div> </div> <hr> <alert>2/21/2019</alert> Change response of Change layout and Endpoint API's to 204<br/> 12/03/2018 Add API for setting user profile photograph.<br/> 10/17/2018 Updated API field definitions for time variables to be 64-bit .<br/> 7/23/2018 Corrected errors in API definition file.<br/> 7/10/2018 Deprecated some Command Center API's.  Exposed API's that Summarize usage.<br/> 7/06/2018 Added API for changing ownership of recordings.<br/> 6/28/2018 Restored Create Enterprise Account, added Enterprise and User Profile Tag API's.<br/> 6/01/2018 Clarified Access Token requirements for meeting endpoint API's.<br/> 5/21/2018 Corrected return model for meeting history call.<br/> </nosdk> <hr> 
 *
 * OpenAPI spec version: 1.0.4402212019
 * Contact: glenn@bluejeans.com
 * Generated by: https://github.com/swagger-api/swagger-codegen.git
 */

using System;
using System.Linq;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using System.Collections;
using System.Collections.Generic;
using System.Collections.ObjectModel;
using System.Runtime.Serialization;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System.ComponentModel.DataAnnotations;
using SwaggerDateConverter = com.bluejeans.api.rest.meetings.Client.SwaggerDateConverter;

namespace com.bluejeans.api.rest.meetings.Model
{
    /// <summary>
    /// RecordingRecordingChapters
    /// </summary>
    [DataContract]
    public partial class RecordingRecordingChapters :  IEquatable<RecordingRecordingChapters>, IValidatableObject
    {
        /// <summary>
        /// Initializes a new instance of the <see cref="RecordingRecordingChapters" /> class.
        /// </summary>
        /// <param name="chapterId">chapterId.</param>
        /// <param name="id">id.</param>
        /// <param name="startTimeOffset">startTimeOffset.</param>
        /// <param name="endTimeOffset">endTimeOffset.</param>
        /// <param name="chapterName">chapterName.</param>
        /// <param name="totalSize">totalSize.</param>
        /// <param name="compositeContentId">compositeContentId.</param>
        /// <param name="compositeContentStatus">compositeContentStatus.</param>
        /// <param name="parentRecordingId">parentRecordingId.</param>
        /// <param name="viewCount">viewCount.</param>
        /// <param name="recordingSessions">recordingSessions.</param>
        public RecordingRecordingChapters(string chapterId = default(string), int? id = default(int?), long? startTimeOffset = default(long?), long? endTimeOffset = default(long?), string chapterName = default(string), long? totalSize = default(long?), int? compositeContentId = default(int?), string compositeContentStatus = default(string), int? parentRecordingId = default(int?), int? viewCount = default(int?), List<RecordingSession> recordingSessions = default(List<RecordingSession>))
        {
            this.ChapterId = chapterId;
            this.Id = id;
            this.StartTimeOffset = startTimeOffset;
            this.EndTimeOffset = endTimeOffset;
            this.ChapterName = chapterName;
            this.TotalSize = totalSize;
            this.CompositeContentId = compositeContentId;
            this.CompositeContentStatus = compositeContentStatus;
            this.ParentRecordingId = parentRecordingId;
            this.ViewCount = viewCount;
            this.RecordingSessions = recordingSessions;
        }
        
        /// <summary>
        /// Gets or Sets ChapterId
        /// </summary>
        [DataMember(Name="chapterId", EmitDefaultValue=false)]
        public string ChapterId { get; set; }

        /// <summary>
        /// Gets or Sets Id
        /// </summary>
        [DataMember(Name="id", EmitDefaultValue=false)]
        public int? Id { get; set; }

        /// <summary>
        /// Gets or Sets StartTimeOffset
        /// </summary>
        [DataMember(Name="startTimeOffset", EmitDefaultValue=false)]
        public long? StartTimeOffset { get; set; }

        /// <summary>
        /// Gets or Sets EndTimeOffset
        /// </summary>
        [DataMember(Name="endTimeOffset", EmitDefaultValue=false)]
        public long? EndTimeOffset { get; set; }

        /// <summary>
        /// Gets or Sets ChapterName
        /// </summary>
        [DataMember(Name="chapterName", EmitDefaultValue=false)]
        public string ChapterName { get; set; }

        /// <summary>
        /// Gets or Sets TotalSize
        /// </summary>
        [DataMember(Name="totalSize", EmitDefaultValue=false)]
        public long? TotalSize { get; set; }

        /// <summary>
        /// Gets or Sets CompositeContentId
        /// </summary>
        [DataMember(Name="compositeContentId", EmitDefaultValue=false)]
        public int? CompositeContentId { get; set; }

        /// <summary>
        /// Gets or Sets CompositeContentStatus
        /// </summary>
        [DataMember(Name="compositeContentStatus", EmitDefaultValue=false)]
        public string CompositeContentStatus { get; set; }

        /// <summary>
        /// Gets or Sets ParentRecordingId
        /// </summary>
        [DataMember(Name="parentRecordingId", EmitDefaultValue=false)]
        public int? ParentRecordingId { get; set; }

        /// <summary>
        /// Gets or Sets ViewCount
        /// </summary>
        [DataMember(Name="viewCount", EmitDefaultValue=false)]
        public int? ViewCount { get; set; }

        /// <summary>
        /// Gets or Sets RecordingSessions
        /// </summary>
        [DataMember(Name="recordingSessions", EmitDefaultValue=false)]
        public List<RecordingSession> RecordingSessions { get; set; }

        /// <summary>
        /// Returns the string presentation of the object
        /// </summary>
        /// <returns>String presentation of the object</returns>
        public override string ToString()
        {
            var sb = new StringBuilder();
            sb.Append("class RecordingRecordingChapters {\n");
            sb.Append("  ChapterId: ").Append(ChapterId).Append("\n");
            sb.Append("  Id: ").Append(Id).Append("\n");
            sb.Append("  StartTimeOffset: ").Append(StartTimeOffset).Append("\n");
            sb.Append("  EndTimeOffset: ").Append(EndTimeOffset).Append("\n");
            sb.Append("  ChapterName: ").Append(ChapterName).Append("\n");
            sb.Append("  TotalSize: ").Append(TotalSize).Append("\n");
            sb.Append("  CompositeContentId: ").Append(CompositeContentId).Append("\n");
            sb.Append("  CompositeContentStatus: ").Append(CompositeContentStatus).Append("\n");
            sb.Append("  ParentRecordingId: ").Append(ParentRecordingId).Append("\n");
            sb.Append("  ViewCount: ").Append(ViewCount).Append("\n");
            sb.Append("  RecordingSessions: ").Append(RecordingSessions).Append("\n");
            sb.Append("}\n");
            return sb.ToString();
        }
  
        /// <summary>
        /// Returns the JSON string presentation of the object
        /// </summary>
        /// <returns>JSON string presentation of the object</returns>
        public virtual string ToJson()
        {
            return JsonConvert.SerializeObject(this, Formatting.Indented);
        }

        /// <summary>
        /// Returns true if objects are equal
        /// </summary>
        /// <param name="input">Object to be compared</param>
        /// <returns>Boolean</returns>
        public override bool Equals(object input)
        {
            return this.Equals(input as RecordingRecordingChapters);
        }

        /// <summary>
        /// Returns true if RecordingRecordingChapters instances are equal
        /// </summary>
        /// <param name="input">Instance of RecordingRecordingChapters to be compared</param>
        /// <returns>Boolean</returns>
        public bool Equals(RecordingRecordingChapters input)
        {
            if (input == null)
                return false;

            return 
                (
                    this.ChapterId == input.ChapterId ||
                    (this.ChapterId != null &&
                    this.ChapterId.Equals(input.ChapterId))
                ) && 
                (
                    this.Id == input.Id ||
                    (this.Id != null &&
                    this.Id.Equals(input.Id))
                ) && 
                (
                    this.StartTimeOffset == input.StartTimeOffset ||
                    (this.StartTimeOffset != null &&
                    this.StartTimeOffset.Equals(input.StartTimeOffset))
                ) && 
                (
                    this.EndTimeOffset == input.EndTimeOffset ||
                    (this.EndTimeOffset != null &&
                    this.EndTimeOffset.Equals(input.EndTimeOffset))
                ) && 
                (
                    this.ChapterName == input.ChapterName ||
                    (this.ChapterName != null &&
                    this.ChapterName.Equals(input.ChapterName))
                ) && 
                (
                    this.TotalSize == input.TotalSize ||
                    (this.TotalSize != null &&
                    this.TotalSize.Equals(input.TotalSize))
                ) && 
                (
                    this.CompositeContentId == input.CompositeContentId ||
                    (this.CompositeContentId != null &&
                    this.CompositeContentId.Equals(input.CompositeContentId))
                ) && 
                (
                    this.CompositeContentStatus == input.CompositeContentStatus ||
                    (this.CompositeContentStatus != null &&
                    this.CompositeContentStatus.Equals(input.CompositeContentStatus))
                ) && 
                (
                    this.ParentRecordingId == input.ParentRecordingId ||
                    (this.ParentRecordingId != null &&
                    this.ParentRecordingId.Equals(input.ParentRecordingId))
                ) && 
                (
                    this.ViewCount == input.ViewCount ||
                    (this.ViewCount != null &&
                    this.ViewCount.Equals(input.ViewCount))
                ) && 
                (
                    this.RecordingSessions == input.RecordingSessions ||
                    this.RecordingSessions != null &&
                    this.RecordingSessions.SequenceEqual(input.RecordingSessions)
                );
        }

        /// <summary>
        /// Gets the hash code
        /// </summary>
        /// <returns>Hash code</returns>
        public override int GetHashCode()
        {
            unchecked // Overflow is fine, just wrap
            {
                int hashCode = 41;
                if (this.ChapterId != null)
                    hashCode = hashCode * 59 + this.ChapterId.GetHashCode();
                if (this.Id != null)
                    hashCode = hashCode * 59 + this.Id.GetHashCode();
                if (this.StartTimeOffset != null)
                    hashCode = hashCode * 59 + this.StartTimeOffset.GetHashCode();
                if (this.EndTimeOffset != null)
                    hashCode = hashCode * 59 + this.EndTimeOffset.GetHashCode();
                if (this.ChapterName != null)
                    hashCode = hashCode * 59 + this.ChapterName.GetHashCode();
                if (this.TotalSize != null)
                    hashCode = hashCode * 59 + this.TotalSize.GetHashCode();
                if (this.CompositeContentId != null)
                    hashCode = hashCode * 59 + this.CompositeContentId.GetHashCode();
                if (this.CompositeContentStatus != null)
                    hashCode = hashCode * 59 + this.CompositeContentStatus.GetHashCode();
                if (this.ParentRecordingId != null)
                    hashCode = hashCode * 59 + this.ParentRecordingId.GetHashCode();
                if (this.ViewCount != null)
                    hashCode = hashCode * 59 + this.ViewCount.GetHashCode();
                if (this.RecordingSessions != null)
                    hashCode = hashCode * 59 + this.RecordingSessions.GetHashCode();
                return hashCode;
            }
        }

        /// <summary>
        /// To validate all properties of the instance
        /// </summary>
        /// <param name="validationContext">Validation context</param>
        /// <returns>Validation Result</returns>
        IEnumerable<System.ComponentModel.DataAnnotations.ValidationResult> IValidatableObject.Validate(ValidationContext validationContext)
        {
            yield break;
        }
    }

}
