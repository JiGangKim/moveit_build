// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let RobotTrajectory = require('../msg/RobotTrajectory.js');

//-----------------------------------------------------------

let MoveItErrorCodes = require('../msg/MoveItErrorCodes.js');

//-----------------------------------------------------------

class ExecuteKnownTrajectoryRequest {
  constructor() {
    this.trajectory = new RobotTrajectory();
    this.wait_for_execution = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ExecuteKnownTrajectoryRequest
    // Serialize message field [trajectory]
    bufferInfo = RobotTrajectory.serialize(obj.trajectory, bufferInfo);
    // Serialize message field [wait_for_execution]
    bufferInfo = _serializer.bool(obj.wait_for_execution, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ExecuteKnownTrajectoryRequest
    let tmp;
    let len;
    let data = new ExecuteKnownTrajectoryRequest();
    // Deserialize message field [trajectory]
    tmp = RobotTrajectory.deserialize(buffer);
    data.trajectory = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [wait_for_execution]
    tmp = _deserializer.bool(buffer);
    data.wait_for_execution = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/ExecuteKnownTrajectoryRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '2a3d2a0b337c6a27da4468bb351928e5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    RobotTrajectory trajectory
    
    
    bool wait_for_execution
    
    
    ================================================================================
    MSG: moveit_msgs/RobotTrajectory
    trajectory_msgs/JointTrajectory joint_trajectory
    trajectory_msgs/MultiDOFJointTrajectory multi_dof_joint_trajectory
    
    ================================================================================
    MSG: trajectory_msgs/JointTrajectory
    Header header
    string[] joint_names
    JointTrajectoryPoint[] points
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
    MSG: trajectory_msgs/JointTrajectoryPoint
    # Each trajectory point specifies either positions[, velocities[, accelerations]]
    # or positions[, effort] for the trajectory to be executed.
    # All specified values are in the same order as the joint names in JointTrajectory.msg
    
    float64[] positions
    float64[] velocities
    float64[] accelerations
    float64[] effort
    duration time_from_start
    
    ================================================================================
    MSG: trajectory_msgs/MultiDOFJointTrajectory
    # The header is used to specify the coordinate frame and the reference time for the trajectory durations
    Header header
    
    # A representation of a multi-dof joint trajectory (each point is a transformation)
    # Each point along the trajectory will include an array of positions/velocities/accelerations
    # that has the same length as the array of joint names, and has the same order of joints as 
    # the joint names array.
    
    string[] joint_names
    MultiDOFJointTrajectoryPoint[] points
    
    ================================================================================
    MSG: trajectory_msgs/MultiDOFJointTrajectoryPoint
    # Each multi-dof joint can specify a transform (up to 6 DOF)
    geometry_msgs/Transform[] transforms
    
    # There can be a velocity specified for the origin of the joint 
    geometry_msgs/Twist[] velocities
    
    # There can be an acceleration specified for the origin of the joint 
    geometry_msgs/Twist[] accelerations
    
    duration time_from_start
    
    ================================================================================
    MSG: geometry_msgs/Transform
    # This represents the transform between two coordinate frames in free space.
    
    Vector3 translation
    Quaternion rotation
    
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
    ================================================================================
    MSG: geometry_msgs/Quaternion
    # This represents an orientation in free space in quaternion form.
    
    float64 x
    float64 y
    float64 z
    float64 w
    
    ================================================================================
    MSG: geometry_msgs/Twist
    # This expresses velocity in free space broken into its linear and angular parts.
    Vector3  linear
    Vector3  angular
    
    `;
  }

};

class ExecuteKnownTrajectoryResponse {
  constructor() {
    this.error_code = new MoveItErrorCodes();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ExecuteKnownTrajectoryResponse
    // Serialize message field [error_code]
    bufferInfo = MoveItErrorCodes.serialize(obj.error_code, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ExecuteKnownTrajectoryResponse
    let tmp;
    let len;
    let data = new ExecuteKnownTrajectoryResponse();
    // Deserialize message field [error_code]
    tmp = MoveItErrorCodes.deserialize(buffer);
    data.error_code = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/ExecuteKnownTrajectoryResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '1f7ab918f5d0c5312f25263d3d688122';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    MoveItErrorCodes error_code
    
    
    ================================================================================
    MSG: moveit_msgs/MoveItErrorCodes
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

module.exports = {
  Request: ExecuteKnownTrajectoryRequest,
  Response: ExecuteKnownTrajectoryResponse
};
