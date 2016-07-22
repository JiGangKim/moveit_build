// Auto-generated. Do not edit!

// (in-package manipulation_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class GripperTranslation {
  constructor() {
    this.direction = new geometry_msgs.msg.Vector3Stamped();
    this.desired_distance = 0.0;
    this.min_distance = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GripperTranslation
    // Serialize message field [direction]
    bufferInfo = geometry_msgs.msg.Vector3Stamped.serialize(obj.direction, bufferInfo);
    // Serialize message field [desired_distance]
    bufferInfo = _serializer.float32(obj.desired_distance, bufferInfo);
    // Serialize message field [min_distance]
    bufferInfo = _serializer.float32(obj.min_distance, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GripperTranslation
    let tmp;
    let len;
    let data = new GripperTranslation();
    // Deserialize message field [direction]
    tmp = geometry_msgs.msg.Vector3Stamped.deserialize(buffer);
    data.direction = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [desired_distance]
    tmp = _deserializer.float32(buffer);
    data.desired_distance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_distance]
    tmp = _deserializer.float32(buffer);
    data.min_distance = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'manipulation_msgs/GripperTranslation';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b53bc0ad0f717cdec3b0e42dec300121';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # defines a translation for the gripper, used in pickup or place tasks
    # for example for lifting an object off a table or approaching the table for placing
    
    # the direction of the translation
    geometry_msgs/Vector3Stamped direction
    
    # the desired translation distance
    float32 desired_distance
    
    # the min distance that must be considered feasible before the
    # grasp is even attempted
    float32 min_distance
    
    ================================================================================
    MSG: geometry_msgs/Vector3Stamped
    # This represents a Vector3 with reference coordinate frame and timestamp
    Header header
    Vector3 vector
    
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

module.exports = GripperTranslation;
