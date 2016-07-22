// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class MoveItErrorCodes {
  constructor() {
    this.val = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type MoveItErrorCodes
    // Serialize message field [val]
    bufferInfo = _serializer.int32(obj.val, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type MoveItErrorCodes
    let tmp;
    let len;
    let data = new MoveItErrorCodes();
    // Deserialize message field [val]
    tmp = _deserializer.int32(buffer);
    data.val = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/MoveItErrorCodes';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'aa336b18d80531f66439810112c0a43e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    int32 val
    
    # overall behavior
    int32 SUCCESS=1
    int32 FAILURE=99999
    
    int32 PLANNING_FAILED=-1
    int32 INVALID_MOTION_PLAN=-2
    int32 MOTION_PLAN_INVALIDATED_BY_ENVIRONMENT_CHANGE=-3
    int32 CONTROL_FAILED=-4
    int32 UNABLE_TO_AQUIRE_SENSOR_DATA=-5
    int32 TIMED_OUT=-6
    int32 PREEMPTED=-7
    
    # planning & kinematics request errors
    int32 START_STATE_IN_COLLISION=-10
    int32 START_STATE_VIOLATES_PATH_CONSTRAINTS=-11
    
    int32 GOAL_IN_COLLISION=-12
    int32 GOAL_VIOLATES_PATH_CONSTRAINTS=-13
    int32 GOAL_CONSTRAINTS_VIOLATED=-14
    
    int32 INVALID_GROUP_NAME=-15
    int32 INVALID_GOAL_CONSTRAINTS=-16
    int32 INVALID_ROBOT_STATE=-17
    int32 INVALID_LINK_NAME=-18
    int32 INVALID_OBJECT_NAME=-19
    
    # system errors
    int32 FRAME_TRANSFORM_FAILURE=-21
    int32 COLLISION_CHECKING_UNAVAILABLE=-22
    int32 ROBOT_STATE_STALE=-23
    int32 SENSOR_INFO_STALE=-24
    
    # kinematics errors
    int32 NO_IK_SOLUTION=-31
    
    `;
  }

};

// Constants for message
MoveItErrorCodes.Constants = {
  SUCCESS: 1,
  FAILURE: 99999,
  PLANNING_FAILED: -1,
  INVALID_MOTION_PLAN: -2,
  MOTION_PLAN_INVALIDATED_BY_ENVIRONMENT_CHANGE: -3,
  CONTROL_FAILED: -4,
  UNABLE_TO_AQUIRE_SENSOR_DATA: -5,
  TIMED_OUT: -6,
  PREEMPTED: -7,
  START_STATE_IN_COLLISION: -10,
  START_STATE_VIOLATES_PATH_CONSTRAINTS: -11,
  GOAL_IN_COLLISION: -12,
  GOAL_VIOLATES_PATH_CONSTRAINTS: -13,
  GOAL_CONSTRAINTS_VIOLATED: -14,
  INVALID_GROUP_NAME: -15,
  INVALID_GOAL_CONSTRAINTS: -16,
  INVALID_ROBOT_STATE: -17,
  INVALID_LINK_NAME: -18,
  INVALID_OBJECT_NAME: -19,
  FRAME_TRANSFORM_FAILURE: -21,
  COLLISION_CHECKING_UNAVAILABLE: -22,
  ROBOT_STATE_STALE: -23,
  SENSOR_INFO_STALE: -24,
  NO_IK_SOLUTION: -31,
}

module.exports = MoveItErrorCodes;
