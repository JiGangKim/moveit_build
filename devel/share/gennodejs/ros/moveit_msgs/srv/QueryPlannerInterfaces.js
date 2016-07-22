// Auto-generated. Do not edit!

// (in-package moveit_msgs.srv)


"use strict";

let _serializer = require('../base_serialize.js');
let _deserializer = require('../base_deserialize.js');
let _finder = require('../find.js');

//-----------------------------------------------------------

let PlannerInterfaceDescription = require('../msg/PlannerInterfaceDescription.js');

//-----------------------------------------------------------

class QueryPlannerInterfacesRequest {
  constructor() {
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QueryPlannerInterfacesRequest
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QueryPlannerInterfacesRequest
    let tmp;
    let len;
    let data = new QueryPlannerInterfacesRequest();
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/QueryPlannerInterfacesRequest';
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

class QueryPlannerInterfacesResponse {
  constructor() {
    this.planner_interfaces = [];
  }

  static serialize(obj, bufferInfo) {
    // Serializes a message object of type QueryPlannerInterfacesResponse
    // Serialize the length for message field [planner_interfaces]
    bufferInfo = _serializer.uint32(obj.planner_interfaces.length, bufferInfo);
    // Serialize message field [planner_interfaces]
    obj.planner_interfaces.forEach((val) => {
      bufferInfo = PlannerInterfaceDescription.serialize(val, bufferInfo);
    });
    return bufferInfo;
  }

  static deserialize(buffer) {
    //deserializes a message object of type QueryPlannerInterfacesResponse
    let tmp;
    let len;
    let data = new QueryPlannerInterfacesResponse();
    // Deserialize array length for message field [planner_interfaces]
    tmp = _deserializer.uint32(buffer);
    len = tmp.data;
    buffer = tmp.buffer;
    // Deserialize message field [planner_interfaces]
    data.planner_interfaces = new Array(len);
    for (let i = 0; i < len; ++i) {
      tmp = PlannerInterfaceDescription.deserialize(buffer);
      data.planner_interfaces[i] = tmp.data;
      buffer = tmp.buffer;
    }
    return {
      data: data,
      buffer: buffer
    }
  }

  static datatype() {
    // Returns string type for a service object
    return 'moveit_msgs/QueryPlannerInterfacesResponse';
  }

  static md5sum() {
    //Returns md5sum for a message object
    return 'acd3317a4c5631f33127fb428209db05';
  }

  static messageDefinition() {
    // Returns full string definition for message
    return `
    
    
    PlannerInterfaceDescription[] planner_interfaces
    
    
    ================================================================================
    MSG: moveit_msgs/PlannerInterfaceDescription
    # The name of the planner interface
    string name
    
    # The names of the planner ids within the interface
    string[] planner_ids
    
    `;
  }

};

module.exports = {
  Request: QueryPlannerInterfacesRequest,
  Response: QueryPlannerInterfacesResponse
};
