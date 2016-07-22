// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let JointLimits = require('./JointLimits.js');

//-----------------------------------------------------------

class KinematicSolverInfo {
  constructor() {
    this.joint_names = [];
    this.limits = [];
    this.link_names = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type KinematicSolverInfo
    // Serialize the length for message field [joint_names]
    bufferInfo = _serializer.uint32(obj.joint_names.length, bufferInfo);
    // Serialize message field [joint_names]
    obj.joint_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [limits]
    bufferInfo = _serializer.uint32(obj.limits.length, bufferInfo);
    // Serialize message field [limits]
    obj.limits.forEach((val) => {
      bufferInfo = JointLimits.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [link_names]
    bufferInfo = _serializer.uint32(obj.link_names.length, bufferInfo);
    // Serialize message field [link_names]
    obj.link_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type KinematicSolverInfo
    let tmp;
    let len;
    let data = new KinematicSolverInfo();
    // Deserialize array length for message field [joint_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [joint_names]
    data.joint_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.joint_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [limits]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [limits]
    data.limits = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = JointLimits.deserialize(buffer);
      data.limits[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [link_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [link_names]
    data.link_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.link_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/KinematicSolverInfo';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cc048557c0f9795c392dd80f8bb00489';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # A list of joints in the kinematic tree
    string[] joint_names
    # A list of joint limits corresponding to the joint names
    moveit_msgs/JointLimits[] limits
    # A list of links that the kinematics node provides solutions for
    string[] link_names
    
    ================================================================================
    MSG: moveit_msgs/JointLimits
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

module.exports = KinematicSolverInfo;
