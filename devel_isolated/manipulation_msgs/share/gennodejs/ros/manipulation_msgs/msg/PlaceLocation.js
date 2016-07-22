// Auto-generated. Do not edit!

// (in-package manipulation_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let GripperTranslation = require('./GripperTranslation.js');
let sensor_msgs = _finder('sensor_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class PlaceLocation {
  constructor() {
    this.id = '';
    this.post_place_posture = new sensor_msgs.msg.JointState();
    this.place_pose = new geometry_msgs.msg.PoseStamped();
    this.approach = new GripperTranslation();
    this.retreat = new GripperTranslation();
    this.allowed_touch_objects = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlaceLocation
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [post_place_posture]
    bufferInfo = sensor_msgs.msg.JointState.serialize(obj.post_place_posture, bufferInfo);
    // Serialize message field [place_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.place_pose, bufferInfo);
    // Serialize message field [approach]
    bufferInfo = GripperTranslation.serialize(obj.approach, bufferInfo);
    // Serialize message field [retreat]
    bufferInfo = GripperTranslation.serialize(obj.retreat, bufferInfo);
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
    tmp = sensor_msgs.msg.JointState.deserialize(buffer);
    data.post_place_posture = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [place_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.place_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [approach]
    tmp = GripperTranslation.deserialize(buffer);
    data.approach = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [retreat]
    tmp = GripperTranslation.deserialize(buffer);
    data.retreat = tmp.data;
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
    return 'manipulation_msgs/PlaceLocation';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '0139dab9852add0e64233c5fb3b8a25a';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # A name for this grasp
    string id
    
    # The internal posture of the hand for the grasp
    # positions and efforts are used
    sensor_msgs/JointState post_place_posture
    
    # The position of the end-effector for the grasp relative to a reference frame 
    # (that is always specified elsewhere, not in this message)
    geometry_msgs/PoseStamped place_pose
    
    # The approach motion
    GripperTranslation approach
    
    # The retreat motion
    GripperTranslation retreat
    
    # an optional list of obstacles that we have semantic information about
    # and that can be touched/pushed/moved in the course of grasping
    string[] allowed_touch_objects
    
    ================================================================================
    MSG: sensor_msgs/JointState
    # This is a message that holds data to describe the state of a set of torque controlled joints. 
    #
    # The state of each joint (revolute or prismatic) is defined by:
    #  * the position of the joint (rad or m),
    #  * the velocity of the joint (rad/s or m/s) and 
    #  * the effort that is applied in the joint (Nm or N).
    #
    # Each joint is uniquely identified by its name
    # The header specifies the time at which the joint states were recorded. All the joint states
    # in one message have to be recorded at the same time.
    #
    # This message consists of a multiple arrays, one for each part of the joint state. 
    # The goal is to make each of the fields optional. When e.g. your joints have no
    # effort associated with them, you can leave the effort array empty. 
    #
    # All arrays in this message should have the same size, or be empty.
    # This is the only way to uniquely associate the joint name with the correct
    # states.
    
    
    Header header
    
    string[] name
    float64[] position
    float64[] velocity
    float64[] effort
    
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
    MSG: manipulation_msgs/GripperTranslation
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
