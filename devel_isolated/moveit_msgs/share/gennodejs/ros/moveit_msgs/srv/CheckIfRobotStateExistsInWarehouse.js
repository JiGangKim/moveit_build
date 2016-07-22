// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class CheckIfRobotStateExistsInWarehouseRequest {
  constructor() {
    this.name = '';
    this.robot = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CheckIfRobotStateExistsInWarehouseRequest
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [robot]
    bufferInfo = _serializer.string(obj.robot, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CheckIfRobotStateExistsInWarehouseRequest
    let tmp;
    let len;
    let data = new CheckIfRobotStateExistsInWarehouseRequest();
    // Deserialize message field [name]
    tmp = _deserializer.string(buffer);
    data.name = tmp.data;
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
    return 'moveit_msgs/CheckIfRobotStateExistsInWarehouseRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'dab44354403f811c40b84964e068219c';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string name
    string robot
    
    
    `;
  }

};

class CheckIfRobotStateExistsInWarehouseResponse {
  constructor() {
    this.exists = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type CheckIfRobotStateExistsInWarehouseResponse
    // Serialize message field [exists]
    bufferInfo = _serializer.bool(obj.exists, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type CheckIfRobotStateExistsInWarehouseResponse
    let tmp;
    let len;
    let data = new CheckIfRobotStateExistsInWarehouseResponse();
    // Deserialize message field [exists]
    tmp = _deserializer.bool(buffer);
    data.exists = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/CheckIfRobotStateExistsInWarehouseResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'e8c90de4adc1219c86af9c2874c0c1b5';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    bool exists
    
    
    `;
  }

};

module.exports = {
  Request: CheckIfRobotStateExistsInWarehouseRequest,
  Response: CheckIfRobotStateExistsInWarehouseResponse
};
