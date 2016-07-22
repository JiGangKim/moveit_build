// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class LoadMapRequest {
  constructor() {
    this.filename = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LoadMapRequest
    // Serialize message field [filename]
    bufferInfo = _serializer.string(obj.filename, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LoadMapRequest
    let tmp;
    let len;
    let data = new LoadMapRequest();
    // Deserialize message field [filename]
    tmp = _deserializer.string(buffer);
    data.filename = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/LoadMapRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '030824f52a0628ead956fb9d67e66ae9';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string filename
    
    `;
  }

};

class LoadMapResponse {
  constructor() {
    this.success = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type LoadMapResponse
    // Serialize message field [success]
    bufferInfo = _serializer.bool(obj.success, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type LoadMapResponse
    let tmp;
    let len;
    let data = new LoadMapResponse();
    // Deserialize message field [success]
    tmp = _deserializer.bool(buffer);
    data.success = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/LoadMapResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '358e233cde0c8a8bcfea4ce193f8fc15';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    bool success
    
    `;
  }

};

module.exports = {
  Request: LoadMapRequest,
  Response: LoadMapResponse
};
