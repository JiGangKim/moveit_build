// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PlannerParams {
  constructor() {
    this.keys = [];
    this.values = [];
    this.descriptions = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlannerParams
    // Serialize the length for message field [keys]
    bufferInfo = _serializer.uint32(obj.keys.length, bufferInfo);
    // Serialize message field [keys]
    obj.keys.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [values]
    bufferInfo = _serializer.uint32(obj.values.length, bufferInfo);
    // Serialize message field [values]
    obj.values.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [descriptions]
    bufferInfo = _serializer.uint32(obj.descriptions.length, bufferInfo);
    // Serialize message field [descriptions]
    obj.descriptions.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PlannerParams
    let tmp;
    let len;
    let data = new PlannerParams();
    // Deserialize array length for message field [keys]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [keys]
    data.keys = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.keys[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [values]
    data.values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [descriptions]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [descriptions]
    data.descriptions = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.descriptions[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/PlannerParams';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'cebdf4927996b9026bcf59a160d64145';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # parameter names (same size as values)
    string[] keys
    
    # parameter values (same size as keys)
    string[] values
    
    # parameter description (can be empty)
    string[] descriptions
    
    `;
  }

};

module.exports = PlannerParams;
