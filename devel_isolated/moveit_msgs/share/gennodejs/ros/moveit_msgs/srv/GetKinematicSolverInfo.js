// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let KinematicSolverInfo = require('../msg/KinematicSolverInfo.js');

//-----------------------------------------------------------

class GetKinematicSolverInfoRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetKinematicSolverInfoRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetKinematicSolverInfoRequest
    let tmp;
    let len;
    let data = new GetKinematicSolverInfoRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/GetKinematicSolverInfoRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    `;
  }

};

class GetKinematicSolverInfoResponse {
  constructor() {
    this.kinematic_solver_info = new KinematicSolverInfo();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetKinematicSolverInfoResponse
    // Serialize message field [kinematic_solver_info]
    bufferInfo = KinematicSolverInfo.serialize(obj.kinematic_solver_info, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetKinematicSolverInfoResponse
    let tmp;
    let len;
    let data = new GetKinematicSolverInfoResponse();
    // Deserialize message field [kinematic_solver_info]
    tmp = KinematicSolverInfo.deserialize(buffer);
    data.kinematic_solver_info = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/GetKinematicSolverInfoResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9b591d98efeb66095c1b33a70221cab5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    KinematicSolverInfo kinematic_solver_info
    
    ================================================================================
    MSG: moveit_msgs/KinematicSolverInfo
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

module.exports = {
  Request: GetKinematicSolverInfoRequest,
  Response: GetKinematicSolverInfoResponse
};
