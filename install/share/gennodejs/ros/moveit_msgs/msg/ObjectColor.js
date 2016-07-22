// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let std_msgs = _finder('std_msgs');

//-----------------------------------------------------------

class ObjectColor {
  constructor() {
    this.id = '';
    this.color = new std_msgs.msg.ColorRGBA();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ObjectColor
    // Serialize message field [id]
    bufferInfo = _serializer.string(obj.id, bufferInfo);
    // Serialize message field [color]
    bufferInfo = std_msgs.msg.ColorRGBA.serialize(obj.color, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ObjectColor
    let tmp;
    let len;
    let data = new ObjectColor();
    // Deserialize message field [id]
    tmp = _deserializer.string(buffer);
    data.id = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [color]
    tmp = std_msgs.msg.ColorRGBA.deserialize(buffer);
    data.color = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/ObjectColor';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ec3bd6f103430e64b2ae706a67d8488e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The object id for which we specify color
    string id
    
    # The value of the color
    std_msgs/ColorRGBA color
    
    ================================================================================
    MSG: std_msgs/ColorRGBA
    float32 r
    float32 g
    float32 b
    float32 a
    
    `;
  }

};

module.exports = ObjectColor;
