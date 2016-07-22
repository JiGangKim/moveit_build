// Auto-generated. Do not edit!

// (in-package household_objects_database_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class DatabaseScan {
  constructor() {
    this.model_id = 0;
    this.bagfile_location = '';
    this.scan_source = '';
    this.pose = new geometry_msgs.msg.PoseStamped();
    this.cloud_topic = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DatabaseScan
    // Serialize message field [model_id]
    bufferInfo = _serializer.int32(obj.model_id, bufferInfo);
    // Serialize message field [bagfile_location]
    bufferInfo = _serializer.string(obj.bagfile_location, bufferInfo);
    // Serialize message field [scan_source]
    bufferInfo = _serializer.string(obj.scan_source, bufferInfo);
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.pose, bufferInfo);
    // Serialize message field [cloud_topic]
    bufferInfo = _serializer.string(obj.cloud_topic, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DatabaseScan
    let tmp;
    let len;
    let data = new DatabaseScan();
    // Deserialize message field [model_id]
    tmp = _deserializer.int32(buffer);
    data.model_id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [bagfile_location]
    tmp = _deserializer.string(buffer);
    data.bagfile_location = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scan_source]
    tmp = _deserializer.string(buffer);
    data.scan_source = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.pose = tmp.data;
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
    // Returns string type for a message object
    return 'household_objects_database_msgs/DatabaseScan';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '7edb7abec4973143a801c25c336b4bb1';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = DatabaseScan;
