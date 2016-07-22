// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class OrientedBoundingBox {
  constructor() {
    this.pose = new geometry_msgs.msg.Pose();
    this.extents = new geometry_msgs.msg.Point32();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type OrientedBoundingBox
    // Serialize message field [pose]
    bufferInfo = geometry_msgs.msg.Pose.serialize(obj.pose, bufferInfo);
    // Serialize message field [extents]
    bufferInfo = geometry_msgs.msg.Point32.serialize(obj.extents, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type OrientedBoundingBox
    let tmp;
    let len;
    let data = new OrientedBoundingBox();
    // Deserialize message field [pose]
    tmp = geometry_msgs.msg.Pose.deserialize(buffer);
    data.pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [extents]
    tmp = geometry_msgs.msg.Point32.deserialize(buffer);
    data.extents = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/OrientedBoundingBox';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'da3bd98e7cb14efa4141367a9d886ee7';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # the pose of the box
    geometry_msgs/Pose pose
    
    # the extents of the box, assuming the center is at the origin
    geometry_msgs/Point32 extents
    
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
    MSG: geometry_msgs/Point32
    # This contains the position of a point in free space(with 32 bits of precision).
    # It is recommeded to use Point wherever possible instead of Point32.  
    # 
    # This recommendation is to promote interoperability.  
    #
    # This message is designed to take up less space when sending
    # lots of points at once, as in the case of a PointCloud.  
    
    float32 x
    float32 y
    float32 z
    `;
  }

};

module.exports = OrientedBoundingBox;
