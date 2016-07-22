// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class VisibilityConstraint {
  constructor() {
    this.target_radius = 0.0;
    this.target_pose = new geometry_msgs.msg.PoseStamped();
    this.cone_sides = 0;
    this.sensor_pose = new geometry_msgs.msg.PoseStamped();
    this.max_view_angle = 0.0;
    this.max_range_angle = 0.0;
    this.sensor_view_direction = 0;
    this.weight = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type VisibilityConstraint
    // Serialize message field [target_radius]
    bufferInfo = _serializer.float64(obj.target_radius, bufferInfo);
    // Serialize message field [target_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.target_pose, bufferInfo);
    // Serialize message field [cone_sides]
    bufferInfo = _serializer.int32(obj.cone_sides, bufferInfo);
    // Serialize message field [sensor_pose]
    bufferInfo = geometry_msgs.msg.PoseStamped.serialize(obj.sensor_pose, bufferInfo);
    // Serialize message field [max_view_angle]
    bufferInfo = _serializer.float64(obj.max_view_angle, bufferInfo);
    // Serialize message field [max_range_angle]
    bufferInfo = _serializer.float64(obj.max_range_angle, bufferInfo);
    // Serialize message field [sensor_view_direction]
    bufferInfo = _serializer.uint8(obj.sensor_view_direction, bufferInfo);
    // Serialize message field [weight]
    bufferInfo = _serializer.float64(obj.weight, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type VisibilityConstraint
    let tmp;
    let len;
    let data = new VisibilityConstraint();
    // Deserialize message field [target_radius]
    tmp = _deserializer.float64(buffer);
    data.target_radius = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [target_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.target_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [cone_sides]
    tmp = _deserializer.int32(buffer);
    data.cone_sides = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sensor_pose]
    tmp = geometry_msgs.msg.PoseStamped.deserialize(buffer);
    data.sensor_pose = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_view_angle]
    tmp = _deserializer.float64(buffer);
    data.max_view_angle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [max_range_angle]
    tmp = _deserializer.float64(buffer);
    data.max_range_angle = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [sensor_view_direction]
    tmp = _deserializer.uint8(buffer);
    data.sensor_view_direction = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [weight]
    tmp = _deserializer.float64(buffer);
    data.weight = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/VisibilityConstraint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '62cda903bfe31ff2e5fcdc3810d577ad';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The constraint is useful to maintain visibility to a disc (the target) in a particular frame.
    # This disc forms the base of a visibiliy cone whose tip is at the origin of the sensor.
    # Maintaining visibility is done by ensuring the robot does not obstruct the visibility cone.
    # Note:
    # This constraint does NOT enforce minimum or maximum distances between the sensor
    # and the target, nor does it enforce the target to be in the field of view of
    # the sensor. A PositionConstraint can (and probably should) be used for such purposes.
    
    # The radius of the disc that should be maintained visible 
    float64 target_radius
    
    # The pose of the disc; as the robot moves, the pose of the disc may change as well
    # This can be in the frame of a particular robot link, for example
    geometry_msgs/PoseStamped target_pose
    
    # From the sensor origin towards the target, the disc forms a visibility cone
    # This cone is approximated using many sides. For example, when using 4 sides, 
    # that in fact makes the visibility region be a pyramid.
    # This value should always be 3 or more.
    int32 cone_sides
    
    # The pose in which visibility is to be maintained.
    # The frame id should represent the robot link to which the sensor is attached.
    # It is assumed the sensor can look directly at the target, in any direction.
    # This assumption is usually not true, but additional PositionConstraints
    # can resolve this issue.
    geometry_msgs/PoseStamped sensor_pose
    
    # Even though the disc is maintained visible, the visibility cone can be very small
    # because of the orientation of the disc with respect to the sensor. It is possible
    # for example to view the disk almost from a side, in which case the visibility cone 
    # can end up having close to 0 volume. The view angle is defined to be the angle between
    # the normal to the visibility disc and the direction vector from the sensor origin.
    # The value below represents the minimum desired view angle. For a perfect view,
    # this value will be 0 (the two vectors are exact opposites). For a completely obstructed view
    # this value will be Pi/2 (the vectors are perpendicular). This value defined below 
    # is the maximum view angle to be maintained. This should be a value in the open interval
    # (0, Pi/2). If 0 is set, the view angle is NOT enforced.
    float64 max_view_angle
    
    # This angle is used similarly to max_view_angle but limits the maximum angle
    # between the sensor origin direction vector and the axis that connects the
    # sensor origin to the target frame origin. The value is again in the range (0, Pi/2)
    # and is NOT enforced if set to 0.
    float64 max_range_angle
    
    # The axis that is assumed to indicate the direction of view for the sensor
    # X = 2, Y = 1, Z = 0
    uint8 SENSOR_Z=0
    uint8 SENSOR_Y=1
    uint8 SENSOR_X=2
    uint8 sensor_view_direction
    
    # A weighting factor for this constraint (denotes relative importance to other constraints. Closer to zero means less important)
    float64 weight
    
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
    
    `;
  }

};

// Constants for message
VisibilityConstraint.Constants = {
  SENSOR_Z: 0,
  SENSOR_Y: 1,
  SENSOR_X: 2,
}

module.exports = VisibilityConstraint;
