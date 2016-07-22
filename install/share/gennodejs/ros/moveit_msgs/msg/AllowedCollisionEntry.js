// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class AllowedCollisionEntry {
  constructor() {
    this.enabled = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AllowedCollisionEntry
    // Serialize the length for message field [enabled]
    bufferInfo = _serializer.uint32(obj.enabled.length, bufferInfo);
    // Serialize message field [enabled]
    obj.enabled.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AllowedCollisionEntry
    let tmp;
    let len;
    let data = new AllowedCollisionEntry();
    // Deserialize array length for message field [enabled]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [enabled]
    data.enabled = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.enabled[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/AllowedCollisionEntry';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '90d1ae1850840724bb043562fe3285fc';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # whether or not collision checking is enabled
    bool[] enabled
    
    `;
  }

};

module.exports = AllowedCollisionEntry;
