// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class LinkScale {
  constructor() {
    this.link_name = '';
    this.scale = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LinkScale
    // Serialize message field [link_name]
    bufferInfo = _serializer.string(obj.link_name, bufferInfo);
    // Serialize message field [scale]
    bufferInfo = _serializer.float64(obj.scale, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LinkScale
    let tmp;
    let len;
    let data = new LinkScale();
    // Deserialize message field [link_name]
    tmp = _deserializer.string(buffer);
    data.link_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [scale]
    tmp = _deserializer.float64(buffer);
    data.scale = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/LinkScale';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '19faf226446bfb2f645a4da6f2a56166';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #name for the link
    string link_name
    
    # scaling to apply to the link
    float64 scale
    
    `;
  }

};

module.exports = LinkScale;
