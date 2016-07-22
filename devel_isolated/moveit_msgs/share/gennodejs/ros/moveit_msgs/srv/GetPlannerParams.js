// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let PlannerParams = require('../msg/PlannerParams.js');

//-----------------------------------------------------------

class GetPlannerParamsRequest {
  constructor() {
    this.planner_config = '';
    this.group = '';
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPlannerParamsRequest
    // Serialize message field [planner_config]
    bufferInfo = _serializer.string(obj.planner_config, bufferInfo);
    // Serialize message field [group]
    bufferInfo = _serializer.string(obj.group, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPlannerParamsRequest
    let tmp;
    let len;
    let data = new GetPlannerParamsRequest();
    // Deserialize message field [planner_config]
    tmp = _deserializer.string(buffer);
    data.planner_config = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [group]
    tmp = _deserializer.string(buffer);
    data.group = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/GetPlannerParamsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'f548a13784550d510d791867af53ef40';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string planner_config
    
    
    string group
    
    
    `;
  }

};

class GetPlannerParamsResponse {
  constructor() {
    this.params = new PlannerParams();
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type GetPlannerParamsResponse
    // Serialize message field [params]
    bufferInfo = PlannerParams.serialize(obj.params, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type GetPlannerParamsResponse
    let tmp;
    let len;
    let data = new GetPlannerParamsResponse();
    // Deserialize message field [params]
    tmp = PlannerParams.deserialize(buffer);
    data.params = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/GetPlannerParamsResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '462b1bd59976ece800f6a48f2b0bf1a2';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    PlannerParams params
    
    
    ================================================================================
    MSG: moveit_msgs/PlannerParams
    # parameter names (same size as values)
    string[] keys
    
    # parameter values (same size as keys)
    string[] values
    
    # parameter description (can be empty)
    string[] descriptions
    
    `;
  }

};

module.exports = {
  Request: GetPlannerParamsRequest,
  Response: GetPlannerParamsResponse
};
