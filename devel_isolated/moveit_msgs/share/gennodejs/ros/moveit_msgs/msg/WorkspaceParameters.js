// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class WorkspaceParameters {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.min_corner = new geometry_msgs.msg.Vector3();
    this.max_corner = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type WorkspaceParameters
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [min_corner]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.min_corner, bufferInfo);
    // Serialize message field [max_corner]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.max_corner, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type WorkspaceParameters
    let tmp;
    let len;
    let data = new WorkspaceParameters();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_corner]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.min_corner = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_corner]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.max_corner = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/WorkspaceParameters';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd639a834e7b1f927e9f1d6c30e920016';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message contains a set of parameters useful in
    # setting up the volume (a box) in which the robot is allowed to move.
    # This is useful only when planning for mobile parts of 
    # the robot as well.
    
    # Define the frame of reference for the box corners
    Header header
    
    # The minumum corner of the box, with respect to the robot starting pose
    geometry_msgs/Vector3 min_corner
    
    # The maximum corner of the box, with respect to the robot starting pose
    geometry_msgs/Vector3 max_corner
    
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
    MSG: geometry_msgs/Vector3
    # This represents a vector in free space. 
    # It is only meant to represent a direction. Therefore, it does not
    # make sense to apply a translation to it (e.g., when applying a 
    # generic rigid transformation to a Vector3, tf2 will only apply the
    # rotation). If you want your data to be translatable too, use the
    # geometry_msgs/Point message instead.
    
    float64 x
    float64 y
    float64 z
    `;
  }

};

module.exports = WorkspaceParameters;
