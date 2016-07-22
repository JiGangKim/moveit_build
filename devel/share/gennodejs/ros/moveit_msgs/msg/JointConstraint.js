// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class JointConstraint {
  constructor() {
    this.joint_name = '';
    this.position = 0.0;
    this.tolerance_above = 0.0;
    this.tolerance_below = 0.0;
    this.weight = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type JointConstraint
    // Serialize message field [joint_name]
    bufferInfo = _serializer.string(obj.joint_name, bufferInfo);
    // Serialize message field [position]
    bufferInfo = _serializer.float64(obj.position, bufferInfo);
    // Serialize message field [tolerance_above]
    bufferInfo = _serializer.float64(obj.tolerance_above, bufferInfo);
    // Serialize message field [tolerance_below]
    bufferInfo = _serializer.float64(obj.tolerance_below, bufferInfo);
    // Serialize message field [weight]
    bufferInfo = _serializer.float64(obj.weight, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type JointConstraint
    let tmp;
    let len;
    let data = new JointConstraint();
    // Deserialize message field [joint_name]
    tmp = _deserializer.string(buffer);
    data.joint_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [position]
    tmp = _deserializer.float64(buffer);
    data.position = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tolerance_above]
    tmp = _deserializer.float64(buffer);
    data.tolerance_above = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [tolerance_below]
    tmp = _deserializer.float64(buffer);
    data.tolerance_below = tmp.data;
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
    return 'moveit_msgs/JointConstraint';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'c02a15146bec0ce13564807805b008f0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # Constrain the position of a joint to be within a certain bound
    string joint_name
    
    # the bound to be achieved is [position - tolerance_below, position + tolerance_above]
    float64 position
    float64 tolerance_above
    float64 tolerance_below
    
    # A weighting factor for this constraint (denotes relative importance to other constraints. Closer to zero means less important)
    float64 weight
    `;
  }

};

module.exports = JointConstraint;
