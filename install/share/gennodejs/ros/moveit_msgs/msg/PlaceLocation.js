// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GripperTranslation = require('./GripperTranslation.js');
let trajectory_msgs = _finder('trajectory_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class PlaceLocation {
  constructor() {
    this.id = '';
    this.post_place_posture = new trajectory_msgs.msg.JointTrajectory();
    this.place_pose = new geometry_msgs.msg.PoseStamped();
    this.pre_place_approach = new GripperTranslation();
    this.post_place_retreat = new GripperTranslation();
    this.allowed_touch_objects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlaceLocation
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [post_place_posture]
    bufferInfo = trajectory_msgs.msg.JointTrajectory.serialize(obj.post_place_posture, bufferInfo);
    // Serialize message field [place_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.place_pose, bufferInfo);
    // Serialize message field [pre_place_approach]
    bufferInfo = GripperTranslation.serialize(obj.pre_place_approach, bufferInfo);
    // Serialize message field [post_place_retreat]
    bufferInfo = GripperTranslation.serialize(obj.post_place_retreat, bufferInfo);
    // Serialize the length for message field [allowed_touch_objects]
    bufferInfo = _serializer.uint32(obj.allowed_touch_objects.length, bufferInfo);
    // Serialize message field [allowed_touch_objects]
    obj.allowed_touch_objects.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PlaceLocation
    let tmp;
    let len;
    let data = new PlaceLocation();
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [post_place_posture]
    tmp = trajectory_msgs.msg.JointTrajectory.deserialize(buffer);
    data.post_place_posture = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [place_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.place_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [pre_place_approach]
    tmp = GripperTranslation.deserialize(buffer);
    data.pre_place_approach = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [post_place_retreat]
    tmp = GripperTranslation.deserialize(buffer);
    data.post_place_retreat = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [allowed_touch_objects]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [allowed_touch_objects]
    data.allowed_touch_objects = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.allowed_touch_objects[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/PlaceLocation';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f3dbcaca40fb29ede2af78b3e1831128';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # A name for this grasp
    string id
    
    # The internal posture of the hand for the grasp
    # positions and efforts are used
    trajectory_msgs/JointTrajectory post_place_posture
    
    # The position of the end-effector for the grasp relative to a reference frame 
    # (that is always specified elsewhere, not in this message)
    geometry_msgs/PoseStamped place_pose
    
    # The approach motion
    GripperTranslation pre_place_approach
    
    # The retreat motion
    GripperTranslation post_place_retreat
    
    # an optional list of obstacles that we have semantic information about
    # and that can be touched/pushed/moved in the course of grasping
    string[] allowed_touch_objects
    
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
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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
    
    ================================================================================
    MSG: moveit_msgs/GripperTranslation
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

module.exports = PlaceLocation;
