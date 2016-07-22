// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');
let PlannerParams = require('../msg/PlannerParams.js');

//-----------------------------------------------------------


//-----------------------------------------------------------

class SetPlannerParamsRequest {
  constructor() {
    this.planner_config = '';
    this.group = '';
    this.params = new PlannerParams();
    this.replace = false;
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPlannerParamsRequest
    // Serialize message field [planner_config]
    bufferInfo = _serializer.string(obj.planner_config, bufferInfo);
    // Serialize message field [group]
    bufferInfo = _serializer.string(obj.group, bufferInfo);
    // Serialize message field [params]
    bufferInfo = PlannerParams.serialize(obj.params, bufferInfo);
    // Serialize message field [replace]
    bufferInfo = _serializer.bool(obj.replace, bufferInfo);
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPlannerParamsRequest
    let tmp;
    let len;
    let data = new SetPlannerParamsRequest();
    // Deserialize message field [planner_config]
    tmp = _deserializer.string(buffer);
    data.planner_config = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [group]
    tmp = _deserializer.string(buffer);
    data.group = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [params]
    tmp = PlannerParams.deserialize(buffer);
    data.params = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [replace]
    tmp = _deserializer.bool(buffer);
    data.replace = tmp.data;
    buffer = tmp.buffer;
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/SetPlannerParamsRequest';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return '86762d89189c5f52cda7680fdbceb1db';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    string planner_config
    
    
    string group
    
    
    PlannerParams params
    
    
    bool replace
    
    
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

class SetPlannerParamsResponse {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type SetPlannerParamsResponse
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type SetPlannerParamsResponse
    let tmp;
    let len;
    let data = new SetPlannerParamsResponse();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/SetPlannerParamsResponse';
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
  Request: SetPlannerParamsRequest,
  Response: SetPlannerParamsResponse
};
