// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let trajectory_msgs = _finder('trajectory_msgs');

//-----------------------------------------------------------

class RobotTrajectory {
  constructor() {
    this.joint_trajectory = new trajectory_msgs.msg.JointTrajectory();
    this.multi_dof_joint_trajectory = new trajectory_msgs.msg.MultiDOFJointTrajectory();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RobotTrajectory
    // Serialize message field [joint_trajectory]
    bufferInfo = trajectory_msgs.msg.JointTrajectory.serialize(obj.joint_trajectory, bufferInfo);
    // Serialize message field [multi_dof_joint_trajectory]
    bufferInfo = trajectory_msgs.msg.MultiDOFJointTrajectory.serialize(obj.multi_dof_joint_trajectory, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RobotTrajectory
    let tmp;
    let len;
    let data = new RobotTrajectory();
    // Deserialize message field [joint_trajectory]
    tmp = trajectory_msgs.msg.JointTrajectory.deserialize(buffer);
    data.joint_trajectory = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [multi_dof_joint_trajectory]
    tmp = trajectory_msgs.msg.MultiDOFJointTrajectory.deserialize(buffer);
    data.multi_dof_joint_trajectory = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/RobotTrajectory';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dfa9556423d709a3729bcef664bddf67';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
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

module.exports = RobotTrajectory;
