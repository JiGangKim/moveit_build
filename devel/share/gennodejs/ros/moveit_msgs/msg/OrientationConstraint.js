// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class OrientationConstraint {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.orientation = new geometry_msgs.msg.Quaternion();
    this.link_name = '';
    this.absolute_x_axis_tolerance = 0.0;
    this.absolute_y_axis_tolerance = 0.0;
    this.absolute_z_axis_tolerance = 0.0;
    this.weight = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type OrientationConstraint
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [orientation]
    bufferInfo = geometry_msgs.msg.Quaternion.serialize(obj.orientation, bufferInfo);
    // Serialize message field [link_name]
    bufferInfo = _serializer.string(obj.link_name, bufferInfo);
    // Serialize message field [absolute_x_axis_tolerance]
    bufferInfo = _serializer.float64(obj.absolute_x_axis_tolerance, bufferInfo);
    // Serialize message field [absolute_y_axis_tolerance]
    bufferInfo = _serializer.float64(obj.absolute_y_axis_tolerance, bufferInfo);
    // Serialize message field [absolute_z_axis_tolerance]
    bufferInfo = _serializer.float64(obj.absolute_z_axis_tolerance, bufferInfo);
    // Serialize message field [weight]
    bufferInfo = _serializer.float64(obj.weight, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type OrientationConstraint
    let tmp;
    let len;
    let data = new OrientationConstraint();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [orientation]
    tmp = geometry_msgs.msg.Quaternion.deserialize(buffer);
    data.orientation = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [link_name]
    tmp = _deserializer.string(buffer);
    data.link_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [absolute_x_axis_tolerance]
    tmp = _deserializer.float64(buffer);
    data.absolute_x_axis_tolerance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [absolute_y_axis_tolerance]
    tmp = _deserializer.float64(buffer);
    data.absolute_y_axis_tolerance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [absolute_z_axis_tolerance]
    tmp = _deserializer.float64(buffer);
    data.absolute_z_axis_tolerance = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [weight]
    tmp = _deserializer.float64(buffer);
    data.weight = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/OrientationConstraint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ab5cefb9bc4c0089620f5eb4caf4e59a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message contains the definition of an orientation constraint.
    
    Header header
    
    # The desired orientation of the robot link specified as a quaternion
    geometry_msgs/Quaternion orientation
    
    # The robot link this constraint refers to
    string link_name
    
    # optional axis-angle error tolerances specified
    float64 absolute_x_axis_tolerance
    float64 absolute_y_axis_tolerance
    float64 absolute_z_axis_tolerance
    
    # A weighting factor for this constraint (denotes relative importance to other constraints. Closer to zero means less important)
    float64 weight
    
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
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    `;
  }

};

module.exports = OrientationConstraint;
