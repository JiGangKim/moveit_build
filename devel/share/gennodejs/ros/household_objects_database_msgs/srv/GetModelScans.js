// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let DatabaseReturnCode = require('../msg/DatabaseReturnCode.js');
let DatabaseScan = require('../msg/DatabaseScan.js');

//-----------------------------------------------------------

class GetModelScansRequest {
  constructor() {
    this.model_id = 0;
    this.scan_source = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelScansRequest
    // Serialize message field [model_id]
    bufferInfo = _serializer.int32(obj.model_id, bufferInfo);
    // Serialize message field [scan_source]
    bufferInfo = _serializer.string(obj.scan_source, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelScansRequest
    let tmp;
    let len;
    let data = new GetModelScansRequest();
    // Deserialize message field [model_id]
    tmp = _deserializer.int32(buffer);
    data.model_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scan_source]
    tmp = _deserializer.string(buffer);
    data.scan_source = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelScansRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '4f31b0f27ba251f6d1f17eafced83cb7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    
    int32 model_id
    
    
    string scan_source
    
    
    `;
  }

};

class GetModelScansResponse {
  constructor() {
    this.return_code = new DatabaseReturnCode();
    this.matching_scans = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetModelScansResponse
    // Serialize message field [return_code]
    bufferInfo = DatabaseReturnCode.serialize(obj.return_code, bufferInfo);
    // Serialize the length for message field [matching_scans]
    bufferInfo = _serializer.uint32(obj.matching_scans.length, bufferInfo);
    // Serialize message field [matching_scans]
    obj.matching_scans.forEach((val) => {
      bufferInfo = DatabaseScan.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetModelScansResponse
    let tmp;
    let len;
    let data = new GetModelScansResponse();
    // Deserialize message field [return_code]
    tmp = DatabaseReturnCode.deserialize(buffer);
    data.return_code = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [matching_scans]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [matching_scans]
    data.matching_scans = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = DatabaseScan.deserialize(buffer);
      data.matching_scans[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'household_objects_database_msgs/GetModelScansResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8d1bb6e95c26a5d891987d9d9195e958';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    DatabaseReturnCode return_code
    
    
    DatabaseScan[] matching_scans
    
    ================================================================================
    MSG: household_objects_database_msgs/DatabaseReturnCode
    # return codes for database-related services
    
    int32 UNKNOWN_ERROR = 1
    int32 DATABASE_NOT_CONNECTED = 2
    int32 DATABASE_QUERY_ERROR = 3
    int32 SUCCESS = -1
    
    int32 code
    ================================================================================
    MSG: household_objects_database_msgs/DatabaseScan
    # Contains the location of a stored point cloud scan of an object, 
    # as well as additional metadata about that scan 
    
    # the database id of the model
    int32 model_id
    
    # the location of the bag file storing the scan
    string bagfile_location
    
    # the source of the scan (e.g. simulation)
    string scan_source
    
    # the ground truth pose of the object that was scanned
    geometry_msgs/PoseStamped pose
    
    # the topic that the points in the bag are published on
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

module.exports = {
  Request: GetModelScansRequest,
  Response: GetModelScansResponse
};
