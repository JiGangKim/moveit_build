// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class LinkPadding {
  constructor() {
    this.link_name = '';
    this.padding = 0.0;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LinkPadding
    // Serialize message field [link_name]
    bufferInfo = _serializer.string(obj.link_name, bufferInfo);
    // Serialize message field [padding]
    bufferInfo = _serializer.float64(obj.padding, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LinkPadding
    let tmp;
    let len;
    let data = new LinkPadding();
    // Deserialize message field [link_name]
    tmp = _deserializer.string(buffer);
    data.link_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [padding]
    tmp = _deserializer.float64(buffer);
    data.padding = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/LinkPadding';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'b3ea75670df55c696fedee97774d5947';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    #name for the link
    string link_name
    
    # padding to apply to the link
    float64 padding
    
    `;
  }

};

module.exports = LinkPadding;
