// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class JointLimits {
  constructor() {
    this.joint_name = '';
    this.has_position_limits = false;
    this.min_position = 0.0;
    this.max_position = 0.0;
    this.has_velocity_limits = false;
    this.max_velocity = 0.0;
    this.has_acceleration_limits = false;
    this.max_acceleration = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointLimits
    // Serialize message field [joint_name]
    bufferInfo = _serializer.string(obj.joint_name, bufferInfo);
    // Serialize message field [has_position_limits]
    bufferInfo = _serializer.bool(obj.has_position_limits, bufferInfo);
    // Serialize message field [min_position]
    bufferInfo = _serializer.float64(obj.min_position, bufferInfo);
    // Serialize message field [max_position]
    bufferInfo = _serializer.float64(obj.max_position, bufferInfo);
    // Serialize message field [has_velocity_limits]
    bufferInfo = _serializer.bool(obj.has_velocity_limits, bufferInfo);
    // Serialize message field [max_velocity]
    bufferInfo = _serializer.float64(obj.max_velocity, bufferInfo);
    // Serialize message field [has_acceleration_limits]
    bufferInfo = _serializer.bool(obj.has_acceleration_limits, bufferInfo);
    // Serialize message field [max_acceleration]
    bufferInfo = _serializer.float64(obj.max_acceleration, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointLimits
    let tmp;
    let len;
    let data = new JointLimits();
    // Deserialize message field [joint_name]
    tmp = _deserializer.string(buffer);
    data.joint_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [has_position_limits]
    tmp = _deserializer.bool(buffer);
    data.has_position_limits = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [min_position]
    tmp = _deserializer.float64(buffer);
    data.min_position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_position]
    tmp = _deserializer.float64(buffer);
    data.max_position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [has_velocity_limits]
    tmp = _deserializer.bool(buffer);
    data.has_velocity_limits = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_velocity]
    tmp = _deserializer.float64(buffer);
    data.max_velocity = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [has_acceleration_limits]
    tmp = _deserializer.bool(buffer);
    data.has_acceleration_limits = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_acceleration]
    tmp = _deserializer.float64(buffer);
    data.max_acceleration = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/JointLimits';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '8ca618c7329ea46142cbc864a2efe856';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # This message contains information about limits of a particular joint (or control dimension)
    string joint_name
    
    # true if the joint has position limits
    bool has_position_limits
    
    # min and max position limits
    float64 min_position
    float64 max_position
    
    # true if joint has velocity limits
    bool has_velocity_limits
    
    # max velocity limit
    float64 max_velocity
    # min_velocity is assumed to be -max_velocity
    
    # true if joint has acceleration limits
    bool has_acceleration_limits
    # max acceleration limit
    float64 max_acceleration
    # min_acceleration is assumed to be -max_acceleration
    
    `;
  }

};

module.exports = JointLimits;
