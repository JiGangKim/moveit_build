// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

class PlannerInterfaceDescription {
  constructor() {
    this.name = '';
    this.planner_ids = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type PlannerInterfaceDescription
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize the length for message field [planner_ids]
    bufferInfo = _serializer.uint32(obj.planner_ids.length, bufferInfo);
    // Serialize message field [planner_ids]
    obj.planner_ids.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type PlannerInterfaceDescription
    let tmp;
    let len;
    let data = new PlannerInterfaceDescription();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize array length for message field [planner_ids]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [planner_ids]
    data.planner_ids = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.planner_ids[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/PlannerInterfaceDescription';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'ea5f6e6129aa1b110ccda9900d2bf25e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The name of the planner interface
    string name
    
    # The names of the planner ids within the interface
    string[] planner_ids
    
    `;
  }

};

module.exports = PlannerInterfaceDescription;
