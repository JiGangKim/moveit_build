// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');
let geometry_msgs = _finder('geometry_msgs');

//-----------------------------------------------------------

class ContactInformation {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.position = new geometry_msgs.msg.Point();
    this.normal = new geometry_msgs.msg.Vector3();
    this.depth = 0.0;
    this.contact_body_1 = '';
    this.body_type_1 = 0;
    this.contact_body_2 = '';
    this.body_type_2 = 0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ContactInformation
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize message field [position]
    bufferInfo = geometry_msgs.msg.Point.serialize(obj.position, bufferInfo);
    // Serialize message field [normal]
    bufferInfo = geometry_msgs.msg.Vector3.serialize(obj.normal, bufferInfo);
    // Serialize message field [depth]
    bufferInfo = _serializer.float64(obj.depth, bufferInfo);
    // Serialize message field [contact_body_1]
    bufferInfo = _serializer.string(obj.contact_body_1, bufferInfo);
    // Serialize message field [body_type_1]
    bufferInfo = _serializer.uint32(obj.body_type_1, bufferInfo);
    // Serialize message field [contact_body_2]
    bufferInfo = _serializer.string(obj.contact_body_2, bufferInfo);
    // Serialize message field [body_type_2]
    bufferInfo = _serializer.uint32(obj.body_type_2, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ContactInformation
    let tmp;
    let len;
    let data = new ContactInformation();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = geometry_msgs.msg.Point.deserialize(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [normal]
    tmp = geometry_msgs.msg.Vector3.deserialize(buffer);
    data.normal = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [depth]
    tmp = _deserializer.float64(buffer);
    data.depth = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contact_body_1]
    tmp = _deserializer.string(buffer);
    data.contact_body_1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [body_type_1]
    tmp = _deserializer.uint32(buffer);
    data.body_type_1 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [contact_body_2]
    tmp = _deserializer.string(buffer);
    data.contact_body_2 = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [body_type_2]
    tmp = _deserializer.uint32(buffer);
    data.body_type_2 = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/ContactInformation';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '116228ca08b0c286ec5ca32a50fdc17b';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Standard ROS header contains information 
    # about the frame in which this 
    # contact is specified
    Header header
    
    # Position of the contact point
    geometry_msgs/Point position
    
    # Normal corresponding to the contact point
    geometry_msgs/Vector3 normal 
    
    # Depth of contact point
    float64 depth
    
    # Name of the first body that is in contact
    # This could be a link or a namespace that represents a body
    string contact_body_1
    uint32 body_type_1
    
    # Name of the second body that is in contact
    # This could be a link or a namespace that represents a body
    string contact_body_2
    uint32 body_type_2
    
    uint32 ROBOT_LINK=0
    uint32 WORLD_OBJECT=1
    uint32 ROBOT_ATTACHED=2
    
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
    MSG: geometry_msgs/Point
    # This contains the position of a point in free space
    float64 x
    float64 y
    float64 z
    
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

// Constants for message
ContactInformation.Constants = {
  ROBOT_LINK: 0,
  WORLD_OBJECT: 1,
  ROBOT_ATTACHED: 2,
}

module.exports = ContactInformation;
