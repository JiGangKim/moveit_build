// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class ListRobotStatesInWarehouseRequest {
  constructor() {
    this.regex = '';
    this.robot = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListRobotStatesInWarehouseRequest
    // Serialize message field [regex]
    bufferInfo = _serializer.string(obj.regex, bufferInfo);
    // Serialize message field [robot]
    bufferInfo = _serializer.string(obj.robot, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListRobotStatesInWarehouseRequest
    let tmp;
    let len;
    let data = new ListRobotStatesInWarehouseRequest();
    // Deserialize message field [regex]
    tmp = _deserializer.string(buffer);
    data.regex = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [robot]
    tmp = _deserializer.string(buffer);
    data.robot = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/ListRobotStatesInWarehouseRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '6f0970a3ca837e2fc3ed63e314b44b42';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string regex
    string robot
    
    
    `;
  }

};

class ListRobotStatesInWarehouseResponse {
  constructor() {
    this.states = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type ListRobotStatesInWarehouseResponse
    // Serialize the length for message field [states]
    bufferInfo = _serializer.uint32(obj.states.length, bufferInfo);
    // Serialize message field [states]
    obj.states.forEach((val) => {
      bufferInfo = _serializer.string(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type ListRobotStatesInWarehouseResponse
    let tmp;
    let len;
    let data = new ListRobotStatesInWarehouseResponse();
    // Deserialize array length for message field [states]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [states]
    data.states = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = _deserializer.string(buffer);
      data.states[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/ListRobotStatesInWarehouseResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'a8656b247c0429bb79afe0ddb88eb2f5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string[] states
    
    
    `;
  }

};

module.exports = {
  Request: ListRobotStatesInWarehouseRequest,
  Response: ListRobotStatesInWarehouseResponse
};
