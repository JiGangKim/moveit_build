// Auto-generated. Do not edit!

// (in-package moveit_msgs.msg)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let AllowedCollisionEntry = require('./AllowedCollisionEntry.js');

//-----------------------------------------------------------

class AllowedCollisionMatrix {
  constructor() {
    this.entry_names = [];
    this.entry_values = [];
    this.default_entry_names = [];
    this.default_entry_values = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type AllowedCollisionMatrix
    // Serialize the length for message field [entry_names]
    bufferInfo = _serializer.uint32(obj.entry_names.length, bufferInfo);
    // Serialize message field [entry_names]
    obj.entry_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [entry_values]
    bufferInfo = _serializer.uint32(obj.entry_values.length, bufferInfo);
    // Serialize message field [entry_values]
    obj.entry_values.forEach((val) => {
      bufferInfo = AllowedCollisionEntry.serialize(val, bufferInfo);
    });
    // Serialize the length for message field [default_entry_names]
    bufferInfo = _serializer.uint32(obj.default_entry_names.length, bufferInfo);
    // Serialize message field [default_entry_names]
    obj.default_entry_names.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    // Serialize the length for message field [default_entry_values]
    bufferInfo = _serializer.uint32(obj.default_entry_values.length, bufferInfo);
    // Serialize message field [default_entry_values]
    obj.default_entry_values.forEach((val) => {
      bufferInfo = _serializer.bool(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type AllowedCollisionMatrix
    let tmp;
    let len;
    let data = new AllowedCollisionMatrix();
    // Deserialize array length for message field [entry_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [entry_names]
    data.entry_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.entry_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [entry_values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [entry_values]
    data.entry_values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = AllowedCollisionEntry.deserialize(buffer);
      data.entry_values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [default_entry_names]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [default_entry_names]
    data.default_entry_names = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.default_entry_names[i] = tmp.data;
      buffer = tmp.buffer;
    }
    // Deserialize array length for message field [default_entry_values]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [default_entry_values]
    data.default_entry_values = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.bool(buffer);
      data.default_entry_values[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a message object
    return 'moveit_msgs/AllowedCollisionMatrix';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'aedce13587eef0d79165a075659c1879';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    # The list of entry names in the matrix
    string[] entry_names
    
    # The individual entries in the allowed collision matrix
    # square, symmetric, with same order as entry_names
    AllowedCollisionEntry[] entry_values
    
    # In addition to the collision matrix itself, we also have 
    # the default entry value for each entry name.
    
    # If the allowed collision flag is queried for a pair of names (n1, n2)
    # that is not found in the collision matrix itself, the value of
    # the collision flag is considered to be that of the entry (n1 or n2)
    # specified in the list below. If both n1 and n2 are found in the list 
    # of defaults, the result is computed with an AND operation
    
    string[] default_entry_names
    bool[] default_entry_values
    
    ================================================================================
    MSG: moveit_msgs/AllowedCollisionEntry
    # whether or not collision checking is enabled
    bool[] enabled
    
    `;
  }

};

module.exports = AllowedCollisionMatrix;
