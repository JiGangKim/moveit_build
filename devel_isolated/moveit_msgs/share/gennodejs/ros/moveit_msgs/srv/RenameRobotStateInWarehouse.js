// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class RenameRobotStateInWarehouseRequest {
  constructor() {
    this.old_name = '';
    this.new_name = '';
    this.robot = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RenameRobotStateInWarehouseRequest
    // Serialize message field [old_name]
    bufferInfo = _serializer.string(obj.old_name, bufferInfo);
    // Serialize message field [new_name]
    bufferInfo = _serializer.string(obj.new_name, bufferInfo);
    // Serialize message field [robot]
    bufferInfo = _serializer.string(obj.robot, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RenameRobotStateInWarehouseRequest
    let tmp;
    let len;
    let data = new RenameRobotStateInWarehouseRequest();
    // Deserialize message field [old_name]
    tmp = _deserializer.string(buffer);
    data.old_name = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [new_name]
    tmp = _deserializer.string(buffer);
    data.new_name = tmp.data;
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
    return 'moveit_msgs/RenameRobotStateInWarehouseRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '073dc05c3fd313b947cea483c25c46b0';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    string old_name
    string new_name
    string robot
    
    `;
  }

};

class RenameRobotStateInWarehouseResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type RenameRobotStateInWarehouseResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type RenameRobotStateInWarehouseResponse
    let tmp;
    let len;
    let data = new RenameRobotStateInWarehouseResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/RenameRobotStateInWarehouseResponse';
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
  Request: RenameRobotStateInWarehouseRequest,
  Response: RenameRobotStateInWarehouseResponse
};
