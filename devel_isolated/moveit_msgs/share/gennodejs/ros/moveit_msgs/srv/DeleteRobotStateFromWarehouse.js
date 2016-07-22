// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class DeleteRobotStateFromWarehouseRequest {
  constructor() {
    this.name = '';
    this.robot = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DeleteRobotStateFromWarehouseRequest
    // Serialize message field [name]
    bufferInfo = _serializer.string(obj.name, bufferInfo);
    // Serialize message field [robot]
    bufferInfo = _serializer.string(obj.robot, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DeleteRobotStateFromWarehouseRequest
    let tmp;
    let len;
    let data = new DeleteRobotStateFromWarehouseRequest();
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
    return 'moveit_msgs/DeleteRobotStateFromWarehouseRequest';
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

class DeleteRobotStateFromWarehouseResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type DeleteRobotStateFromWarehouseResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type DeleteRobotStateFromWarehouseResponse
    let tmp;
    let len;
    let data = new DeleteRobotStateFromWarehouseResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/DeleteRobotStateFromWarehouseResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'd41d8cd98f00b204e9800998ecf8427e';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    `;
  }

};

module.exports = {
  Request: DeleteRobotStateFromWarehouseRequest,
  Response: DeleteRobotStateFromWarehouseResponse
};
