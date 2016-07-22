// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

let DatabaseReturnCode = require('../msg/DatabaseReturnCode.js');

//-----------------------------------------------------------

class SaveScanRequest {
  constructor() {
    this.scaled_model_id = 0;
    this.ground_truth_pose = new geometry_msgs.msg.PoseStamped();
    this.bagfile_location = '';
    this.scan_source = '';
    this.cloud_topic = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SaveScanRequest
    // Serialize message field [scaled_model_id]
    bufferInfo = _serializer.int32(obj.scaled_model_id, bufferInfo);
    // Serialize message field [ground_truth_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.ground_truth_pose, bufferInfo);
    // Serialize message field [bagfile_location]
    bufferInfo = _serializer.string(obj.bagfile_location, bufferInfo);
    // Serialize message field [scan_source]
    bufferInfo = _serializer.string(obj.scan_source, bufferInfo);
    // Serialize message field [cloud_topic]
    bufferInfo = _serializer.string(obj.cloud_topic, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SaveScanRequest
    let tmp;
    let len;
    let data = new SaveScanRequest();
    // Deserialize message field [scaled_model_id]
    tmp = _deserializer.int32(buffer);
    data.scaled_model_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [ground_truth_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.ground_truth_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [bagfile_location]
    tmp = _deserializer.string(buffer);
    data.bagfile_location = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scan_source]
    tmp = _deserializer.string(buffer);
    data.scan_source = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cloud_topic]
    tmp = _deserializer.string(buffer);
    data.cloud_topic = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/SaveScanRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '492f49d320aa26325df5fb078c297fa5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    int32 scaled_model_id
    
    
    geometry_msgs/PoseStamped ground_truth_pose
    
    
    string bagfile_location
    
    
    string scan_source
    
    
    string cloud_topic
    
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
    ================================================================================
    MSG: std_msgs/Header
    # Standard metadata for higher-level stamped data types.
    # This is generally used to communicate timestamped data 
    # in a particular coordinate frame.
    # 
    # sequence ID: consecutively increasing ID 
    uint32 seq
    #Two-integer timestamp that is expressed as:
    # * stamp.sec: seconds (stamp_secs) since epoch (in Python the variable is called 'secs')
    # * stamp.nsec: nanoseconds since stamp_secs (in Python the variable is called 'nsecs')
    # time-handling sugar is provided by the client library
    time stamp
    #Frame this data is associated with
    # 0: no frame
    # 1: global frame
    string frame_id
    
    ================================================================================
    MSG: geometry_msgs/Pose
    # A representation of pose in free space, composed of postion and orientation. 
    Point position
    Quaternion orientation
    
    ================================================================================
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

class SaveScanResponse {
  constructor() {
    this.return_code = new DatabaseReturnCode();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SaveScanResponse
    // Serialize message field [return_code]
    bufferInfo = DatabaseReturnCode.serialize(obj.return_code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SaveScanResponse
    let tmp;
    let len;
    let data = new SaveScanResponse();
    // Deserialize message field [return_code]
    tmp = DatabaseReturnCode.deserialize(buffer);
    data.return_code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/SaveScanResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b49fccceeb56b964ed23601916a24082';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    DatabaseReturnCode return_code
    
    ================================================================================
    MSG: household_objects_database_msgs/DatabaseReturnCode
    # return codes for database-related services
    
    int32 UNKNOWN_ERROR = 1
    int32 DATABASE_NOT_CONNECTED = 2
    int32 DATABASE_QUERY_ERROR = 3
    int32 SUCCESS = -1
    
    int32 code
    `;
  }

};

module.exports = {
  Request: SaveScanRequest,
  Response: SaveScanResponse
};
