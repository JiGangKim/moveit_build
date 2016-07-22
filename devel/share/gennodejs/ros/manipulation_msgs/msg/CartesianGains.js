// Auto-generated. Do not edit!

// (in-package manipulation_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class CartesianGains {
  constructor() {
    this.header = new std_msgs.msg.Header();
    this.gains = [];
    this.fixed_frame = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CartesianGains
    // Serialize message field [header]
    bufferInfo = std_msgs.msg.Header.serialize(obj.header, bufferInfo);
    // Serialize the length for message field [gains]
    bufferInfo = _serializer.uint32(obj.gains.length, bufferInfo);
    // Serialize message field [gains]
    obj.gains.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    // Serialize the length for message field [fixed_frame]
    bufferInfo = _serializer.uint32(obj.fixed_frame.length, bufferInfo);
    // Serialize message field [fixed_frame]
    obj.fixed_frame.forEach((val) => {
      bufferInfo = _serializer.float64(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CartesianGains
    let tmp;
    let len;
    let data = new CartesianGains();
    // Deserialize message field [header]
    tmp = std_msgs.msg.Header.deserialize(buffer);
    data.header = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [gains]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [gains]
    data.gains = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.gains[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [fixed_frame]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [fixed_frame]
    data.fixed_frame = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.float64(buffer);
      data.fixed_frame[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'manipulation_msgs/CartesianGains';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ab347f046ca5736a156ec424cbb63635';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    Header header
    
    float64[] gains
    float64[] fixed_frame
    
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
    
    `;
  }

};

module.exports = CartesianGains;
