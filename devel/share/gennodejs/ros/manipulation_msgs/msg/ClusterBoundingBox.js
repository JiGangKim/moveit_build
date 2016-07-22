// Auto-generated. Do not edit!

// (in-package manipulation_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ClusterBoundingBox {
  constructor() {
    this.pose_stamped = new geometry_msgs.msg.PoseStamped();
    this.dimensions = new geometry_msgs.msg.Vector3();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ClusterBoundingBox
    // Serialize message field [pose_stamped]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.pose_stamped, bufferInfo);
    // Serialize message field [dimensions]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.dimensions, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ClusterBoundingBox
    let tmp;
    let len;
    let data = new ClusterBoundingBox();
    // Deserialize message field [pose_stamped]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.pose_stamped = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [dimensions]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.dimensions = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'manipulation_msgs/ClusterBoundingBox';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '9bf2b7a44ad666dc3a6a2bbc21782dad';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # contains a bounding box, which is essentially a box somewhere in space
    # used here ususally for the outlier-invariant bounding box of a cluster of points
    
    #the pose of the box frame
    geometry_msgs/PoseStamped pose_stamped
    
    #the dimensions of the box
    geometry_msgs/Vector3 dimensions
    
    ================================================================================
    MSG: geometry_msgs/PoseStamped
    # A Pose with reference coordinate frame and timestamp
    Header header
    Pose pose
    
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

module.exports = ClusterBoundingBox;
